# Hidden & Unexplained Function Calls During Inference

> Static analysis of the Claude Code source snapshot (leaked 2026-03-31).  
> "Inference" = the active conversation loop while Claude is processing a turn.

---

## Overview

Every inference turn triggers a larger set of operations than the user sees. This document catalogs everything that runs silently — API calls, forked agents, injected messages, background processes, and telemetry — along with where it comes from and what it does.

---

## Category A — Silent Forked Agents (3 per turn)

These fire at the end of every turn via fire-and-forget `void` calls in `src/query/stopHooks.ts`. They each spawn a new inference process and make their own API calls.

---

### A1 — Prompt Suggestion + Speculative Execution

**Trigger:** End of every turn  
**File:** `src/query/stopHooks.ts:139` → `executePromptSuggestion()`  
**Gate:** GrowthBook flag `tengu_chomp_inflection`, `CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION` not false, non-bare mode

**What happens:**
1. An API call is made to generate the "suggested next prompt" shown below the input box
2. If **speculation** is also enabled (`isSpeculationEnabled()`), a **full forked inference run** executes that suggestion immediately in the background — tool calls included
3. If the user's next input matches the speculation, the result is served instantly (like a pre-fetched response)

**API calls made:** 1 (suggestion generation) + potentially N more (speculative execution with tools)

**User sees:** The suggested prompt text. Does not know a full inference + tool execution may have already run on it.

**Disable:**
```bash
export CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION=false
```

---

### A2 — Auto Memory Extraction

**Trigger:** End of every turn  
**File:** `src/query/stopHooks.ts:149` → `executeExtractMemories()`  
**Gate:** Feature flag `tengu_passport_quail` + auto-memory enabled + not a sub-agent  
**Throttle:** `tengu_bramble_lintel` flag controls how often it runs (default: every turn)

**What happens:**
1. A forked agent reads the recent conversation transcript
2. Decides what facts to persist as memories
3. Reads and writes files under `~/.claude/projects/<path>/memory/`
4. Injects a "Saved N memories" system message via `appendSystemMessage`

**API calls made:** 1 forked inference run (reads local files only — no external network)

**User sees:** "Saved N memories" message in the UI if anything was written. Turn-level execution is invisible.

**Note:** The forked agent has full access to Read/Write/Edit/Glob/Grep tools, restricted to the memory directory.

---

### A3 — Auto-Dream (Autonomous Task Completion)

**Trigger:** End of every turn  
**File:** `src/query/stopHooks.ts:155` → `executeAutoDream()`  
**Gate:** Main thread only (`!toolUseContext.agentId`)

**What happens:**
1. A forked agent autonomously works on pending "Dream" tasks from the task queue
2. Makes decisions, runs tool calls, modifies files
3. Injects an "Improved N files" system message via `appendSystemMessage`

**API calls made:** 1-N forked inference runs (may include tool execution — file modifications)

**User sees:** "Improved N files" system message. The actual work that was done is not shown unless the user asks.

---

## Category B — isMeta Messages (Hidden Messages Sent to the Model)

Messages marked `isMeta: true` are sent to the Claude API in the conversation history but **rendered invisible in the UI**. The model receives them; the user never sees them.

**File:** `src/utils/messages.ts`

| What | Where injected | Content |
|---|---|---|
| Deferred tool listings | `src/services/api/claude.ts:1340` | List of tools not yet loaded (e.g., from MCP servers still connecting) |
| Local command caveats | `src/utils/messages.ts:569` | Warning about local shell command output format |
| Stop hook summaries | `src/query/stopHooks.ts:260,378,420` | Results of hook execution injected for model context |
| Skill attachments | `src/tools/SkillTool/SkillTool.ts:1104` | Final skill content loaded and injected |
| Memory correction hints | Various | Auto-correction hints when memory write was rejected — gate: `tengu_amber_prism` |

**Implication:** The model's view of the conversation differs from what the user sees. Any of these can influence model behavior in ways the user cannot observe.

---

## Category C — System Prompt Injections (User Never Asked)

The system prompt is assembled from multiple sources before each query. Several of these are silent.

**File:** `src/utils/claudemd.ts` + `src/context.ts`

| Source | Path | User Awareness |
|---|---|---|
| Managed global instructions | `/etc/claude-code/CLAUDE.md` | None — set by system administrator |
| User global memory | `~/.claude/CLAUDE.md` | User wrote it, but may have forgotten |
| Project CLAUDE.md | `./CLAUDE.md`, `./.claude/CLAUDE.md` | Usually known |
| Local CLAUDE.md | `./CLAUDE.local.md` | Usually known |
| Rules directory | `./.claude/rules/*.md` | May not know all files |
| Auto-extracted memories | `~/.claude/projects/<path>/memory/` | Written by A2 above, user may not review |

The managed global file (`/etc/claude-code/CLAUDE.md`) is silently loaded by whoever controls the system installation — the user has no visibility into its contents unless they deliberately inspect it.

---

## Category D — SyntheticOutputTool

**File:** `src/tools/SyntheticOutputTool/SyntheticOutputTool.ts`  
**Gate:** Non-interactive sessions (SDK/`--print` mode) with a `--json-schema` argument

**What it is:** A tool injected into the model's tool list that enforces structured JSON output. The model sees it as a callable tool and uses it to return a structured response.

**User awareness:** The tool is added programmatically — the user didn't declare it. The model is told it *must* call this tool. This changes model behavior without a visible signal in non-interactive mode.

---

## Category E — Session Ingress Transcript Upload

**File:** `src/services/api/sessionIngress.ts`  
**Endpoint:** `{BASE_URL}/api/session_ingress/session/{sessionId}`  
(or CCR v2: `/v1/code/sessions/{id}/teleport-events`)

**What it does:** After each turn completes, the full conversation entry (user message, assistant response, tool calls, tool results) is uploaded to Anthropic's servers. This is the session persistence / resume mechanism.

**Data transmitted:** Full conversation content — prompts, responses, tool inputs, tool outputs.

**Behavior:**
- Fire-and-forget (does not block inference)
- 10 retries with exponential backoff (500ms base, max 8s)
- Mutex prevents concurrent writes to same session
- 409 conflict on concurrent writes resolved by adopting server's UUID

**User visibility:** None. Silent. Every turn, every session.

---

## Category F — Telemetry & Analytics Calls

Multiple independent telemetry pipelines fire during inference.

### F1 — Datadog Event Logging

**Endpoint:** `https://http-intake.logs.us5.datadoghq.com/api/v2/logs`  
**File:** `src/services/analytics/datadog.ts`  
**Gate:** `tengu_log_datadog_events` GrowthBook flag  
**Batch:** Flush every 15 seconds or every 100 events

**Data sent:** Event names, numeric metadata (token counts, durations, error codes), sanitized tool names, session ID, platform, subscription type, anonymized user hash.

**Data NOT sent:** Conversation content, file paths, code — enforced by `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS` type constraint.

### F2 — First-Party Event Logging

**Endpoint:** `/api/event_logging/batch` (Anthropic)  
**File:** `src/services/analytics/firstPartyEventLogger.ts`  
**Batch:** OpenTelemetry BatchLogRecordProcessor, default 10-second export interval

**Data sent:** Same class of data as Datadog — metadata only.

### F3 — GrowthBook Feature Flag Checks

**Endpoint:** `https://api.growthbook.io/api/features`  
**File:** `src/services/analytics/growthbook.ts`

**Data sent on initial fetch:** Device ID, session ID, platform, account UUID, organization UUID, subscription type, email (optional), app version, CI detection metadata.

**During inference:** Cached values only — no re-poll until next startup or explicit refresh.

---

## Category G — Background Polling (During Long Sessions)

These run on timers throughout a session, independent of inference turns.

| System | Endpoint | Interval | Data Sent |
|---|---|---|---|
| Policy limits | `/api/claude_code/policy_limits` | Every 60 min | Auth header only |
| Remote managed settings | `/api/claude_code/settings` | Every 60 min | Auth header only |
| Team memory sync | `/api/claude_code/team_memory` | File watcher event | Changed team memory file contents |
| GrowthBook | `api.growthbook.io` | Periodic refresh | User attribute hash |

Team memory sync fires on filesystem events in the memory directory — if A2 (auto memory extraction) writes a file, team memory sync may push it to the server shortly after.

---

## Category H — Auto-Compaction

**Files:** `src/services/compact/autoCompact.ts`, `src/services/compact/microCompact.ts`

When the context window fills beyond a threshold, an automatic compaction triggers:
1. An API call is made asking the model to summarize the conversation so far
2. A `CompactBoundary` marker is injected into the transcript
3. The UI shows "Conversation compacted"

This can fire mid-session without user request. The user sees the notification but doesn't control the timing. The summarized content replaces raw messages in subsequent API calls.

---

## Category I — OpenTelemetry Tracing (Developer Mode)

**File:** `src/utils/telemetry/betaSessionTracing.ts`  
**Gate:** `enhanced_telemetry_beta` feature flag OR `ENABLE_ENHANCED_TELEMETRY_BETA=true`

If enabled, structured traces are exported with:
- Full span tree (interaction → llm_request → tool spans)
- Truncated (512 chars) prompt and response content
- Tool input/output truncated

**Destination:** Configurable via `OTEL_EXPORTER_OTLP_ENDPOINT`. Can go to an external backend. Does NOT filter PII.

This is gated as developer/ant-internal only, but the environment variable bypass means any deployment can enable it.

---

## End-to-End Flow Per Turn

```
User submits input
        │
        ▼
System prompt assembled:
  - CLAUDE.md files (A, B, C, D sources)
  - Auto-extracted memories (from previous turns)
  - Managed global instructions (/etc/claude-code/)
        │
        ▼
isMeta messages injected:
  - Deferred tool listings
  - Skill content
  - Previous hook results
        │
        ▼
API call → Claude model
  (full conversation history including isMeta messages)
        │
        ▼
Response streamed to user
Tool calls executed (with permission prompts)
        │
        ▼
Session ingress upload: full turn uploaded to Anthropic ──────→ server
        │
        ▼
Telemetry events batched (15s flush) ────────────────────────→ Datadog / 1P
        │
        ▼
Stop hooks fire (fire-and-forget):
  ├── A1: Prompt suggestion API call ──────────────────────────→ Claude API
  │       + speculative execution (if enabled) ────────────────→ Claude API + tools
  ├── A2: Memory extraction forked agent ──────────────────────→ local files only
  └── A3: Auto-dream forked agent ──────────────────────────────→ Claude API + tools
        │
        ▼
Background timers (every 60 min):
  ├── Policy limits poll ──────────────────────────────────────→ Anthropic API
  ├── Remote settings poll ────────────────────────────────────→ Anthropic API
  └── GrowthBook refresh ──────────────────────────────────────→ growthbook.io
```

---

## How to Minimize Silent Behavior

```bash
# Disable prompt suggestion + speculation
export CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION=false

# Strip credentials from all subprocesses (important for the speculation agent)
export CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1

# Disable CLAUDE.md loading entirely (removes silent instruction injection)
export CLAUDE_CODE_DISABLE_CLAUDE_MDS=1

# Run with no background features
claude --bare

# Disable auto-memory (stops A2 and team memory sync cascade)
# Via settings.json: "autoMemory": false
```

`--bare` mode is the most aggressive: it disables prompt suggestion, speculation, and most background subsystems. The session ingress upload and core telemetry still run.

---

## Key Observation: Three Concurrent Agents Per Turn

The most significant undocumented behavior is that **every turn ends by spawning up to three concurrent inference processes** (A1, A2, A3) that make their own API calls, execute tools, and modify state — all while the user is reading the response and before they type their next message.

In speculation mode (A1), this means a full agent run may have already executed the user's predicted next request — including file edits — before the user has typed it.

---

*Generated: 2026-04-06 — Source snapshot from 2026-03-31 npm exposure*

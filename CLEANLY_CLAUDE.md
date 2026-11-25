# CLEANLY_CLAUDE · per-folder cleanliness contract

> **ATLAS is the bridge of the ship · projects are the body.**
> Every folder under `/data/Projects/` (and select trees under `/home/tom/`)
> reaches into ATLAS as the hub. This file binds the Claude operating in
> this folder to a single source of truth: the cleanly DB at
> `/data/Projects/ATLAS/.shared/cleanly/cleanly_changes.sqlite`.

---

## §0 · TL;DR for the Claude reading this

1. You are responsible for keeping THIS folder organized — for humans AND agents.
2. Every meaningful change you make MUST emit to ATLAS via
   `bin/atlas_cleanly emit --path <PATH> --kind <CHANGE_KIND>`.
3. Before you break a public API in this folder, check consumers:
   `bin/atlas_cleanly consumers --path <PATH>` and notify them.
4. Tree graphs and the API contract index live at
   `/data/Projects/ATLAS/intelligence/claude_cleaner/` and update on emit.
5. **claude-cleaner** (the ATLAS sub-agent at
   `claudius-maximus/.orcx/agents/cleanly-*`) audits this contract daily.

---

## §1 · Your jurisdiction (this folder)

- **Folder**: `/data/Projects/ATLAS/by-name/claude-code`
- **Project root**: `/data/Projects/ATLAS/by-name/claude-code`
- **Owning agent (if any)**: `(unassigned)`
- **Last cleaned**: `(never)`
- **API surface**:
  - _(none detected · run `bin/claude_cleaner scan-apis` to populate)_
- **Consumers** (other folders that import from here):
  - _(no consumers known)_

---

## §2 · The hub doctrine

ATLAS hosts the canonical registries every project reaches into:

| Surface | Path | What |
|---|---|---|
| `canon/` | `/data/Projects/ATLAS/canon/` | Single source of truth for agents · endpoints · bins · crates · models · services · credentials · tokens · assets · envelopes · orcs |
| `intelligence/` | `/data/Projects/ATLAS/intelligence/` | Agentic manager + orc taxonomy + claude-cleaner |
| `assets/` | `/data/Projects/ATLAS/assets/` | Unified asset pipeline (15 categories · 20 models · 10 provenance sources) |
| `.shared/cleanly/cleanly_changes.sqlite` | append-only ledger | Every change anyone makes anywhere — bidirectional source of truth |

**Bidirectional rule**: when your folder changes, ATLAS knows. When canon
changes, your folder gets notified. Two-way conversation. claude-cleaner is
the mediator.

---

## §3 · Your responsibilities

### §3.1 · Naming + structure
- kebab-case for directory names · snake_case for Python files · standard convention for the language in use
- No loose top-level files where a `subdir/` exists for them
- README.md or CLAUDE.md at every dir root

### §3.2 · API contracts
If anything else imports from / depends on this folder, you OWN that public surface.
- **Before breaking**: `bin/atlas_cleanly emit --path <PATH> --kind api_deprecation_planned --target_api_break_risk high`
- **After breaking**: notify consumers via `bin/notify broadcast --kind api_changed --project <YOUR_PROJECT>`
- **Migration window**: 7 days minimum unless audited as zero-consumer

### §3.3 · Change log
Every non-trivial edit emits to ATLAS:
```
bin/atlas_cleanly emit \
  --path <CHANGED_PATH> \
  --kind {file_add|file_edit|file_delete|dir_add|dir_delete|api_change|deprecation|rename} \
  --summary "one-line description" \
  --source <YOUR_CID>
```

This populates the cleanly DB so the tree graph stays current AND
downstream agents can subscribe.

### §3.4 · Periodic cleanup
When this folder accumulates >50 loose files OR >10 abandoned subdirs, request a cleanup:
```
bin/notify send claude-cleaner cleanup_request \
  --payload '{"path":"<THIS_FOLDER>","reason":"loose-file-overflow"}'
```

claude-cleaner queues this in its inbox + decides whether to dispatch a cleanup agent OR escalate to Tom.

---

## §4 · The cleanly DB schema

`/data/Projects/ATLAS/.shared/cleanly/cleanly_changes.sqlite`:

```sql
CREATE TABLE changes (
  change_id TEXT PRIMARY KEY,        -- sha256(path||kind||ts)[:16]
  path TEXT NOT NULL,
  kind TEXT NOT NULL,
  ts TEXT NOT NULL,
  source_agent TEXT,
  summary TEXT,
  target_api_break_risk TEXT,        -- none|low|medium|high
  emitted_by TEXT,
  prev_change_id TEXT                -- for chain integrity
);

CREATE TABLE apis (
  api_id TEXT PRIMARY KEY,           -- sha256(folder||function_name)[:16]
  folder TEXT,
  surface TEXT,                       -- e.g. "Python module symbols"
  signature TEXT,                     -- function signature / spec
  version TEXT,
  consumers TEXT,                     -- JSON array of importer paths
  last_changed_at TEXT
);

CREATE TABLE folders (
  folder_path TEXT PRIMARY KEY,
  project_root TEXT,
  owning_agent_cid TEXT,
  last_cleaned_ts TEXT,
  cleanly_claude_md_present BOOLEAN,
  cleanly_claude_md_version TEXT,
  consumer_count INTEGER DEFAULT 0,
  api_count INTEGER DEFAULT 0
);

CREATE TABLE consumers (
  consumer_id TEXT PRIMARY KEY,
  consumer_folder TEXT,
  consumed_folder TEXT,
  consumed_api_id TEXT,
  detected_at TEXT,
  detection_method TEXT               -- grep|ast|import_walk|manual
);
```

All tables append-only. claude-cleaner READS for orchestration; agents WRITE on every emit.

---

## §5 · CLI cheat sheet

```bash
# I changed something — log it
bin/atlas_cleanly emit --path src/foo.py --kind file_edit --summary "tightened error handling"

# Who depends on me?
bin/atlas_cleanly consumers --path src/foo.py

# What's the cleanly state of this folder?
bin/atlas_cleanly status --path .

# Refresh this folder's CLEANLY_CLAUDE.md (don't edit by hand)
bin/claude_cleaner update --path <THIS_FOLDER>

# Subscribe to other folders I depend on
bin/atlas_cleanly subscribe --path /data/Projects/ATLAS/canon

# Audit my jurisdiction
bin/claude_cleaner audit --path <THIS_FOLDER>
```

---

## §6 · Why this exists

Before claude-cleaner: every Claude that touched a project did its own thing. Folders accumulated cruft. API contracts broke silently. Humans couldn't find anything.

After claude-cleaner: one CLEANLY_CLAUDE.md per folder · one DB at ATLAS · one bidirectional notify channel · one tree graph any human or agent can query.

**ATLAS is the bridge. Reach in here.** Don't fork the doctrine.

---

_This file is auto-generated by `bin/claude_cleaner update`. Do not edit by hand._
_Template version: v0 · last regenerated: 2026-06-24T03:33:24Z_

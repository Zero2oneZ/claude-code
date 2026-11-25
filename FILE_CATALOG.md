# Claude Code — Complete File Catalog
Generated: 2026-04-24
Total files: 1907

## Blast Radius Key
- CRITICAL: core runtime, entry point, auth/security, config loading
- HIGH: major feature module, shared utility, API surface
- MEDIUM: feature-specific logic, command handlers, UI components, non-shared helpers
- LOW: test files (*.test.ts, *.spec.ts), type-only files, generated files, static assets

## File Catalog

| ID | PATH | LOCATION | TYPE | DESCRIPTION | BLAST_RADIUS |
|---|---|---|---|---|---|
| F0001 | /home/tom/Projects/claude-code/src/assistant/sessionHistory.ts | assistant/ | ts | Session message history persistence and retrieval | HIGH |
| F0002 | /home/tom/Projects/claude-code/src/bootstrap/state.ts | bootstrap/ | ts | Bootstrap state: project root, session ID, global singletons | CRITICAL |
| F0003 | /home/tom/Projects/claude-code/src/bridge/bridgeApi.ts | bridge/ | ts | Bridge REST API client for remote session integration | HIGH |
| F0004 | /home/tom/Projects/claude-code/src/bridge/bridgeConfig.ts | bridge/ | ts | Bridge configuration loading and defaults | HIGH |
| F0005 | /home/tom/Projects/claude-code/src/bridge/bridgeDebug.ts | bridge/ | ts | Debug utilities for bridge session tracing | MEDIUM |
| F0006 | /home/tom/Projects/claude-code/src/bridge/bridgeEnabled.ts | bridge/ | ts | Feature flag check for bridge mode availability | MEDIUM |
| F0007 | /home/tom/Projects/claude-code/src/bridge/bridgeMain.ts | bridge/ | ts | Bridge session main loop entry point | HIGH |
| F0008 | /home/tom/Projects/claude-code/src/bridge/bridgeMessaging.ts | bridge/ | ts | Bridge message send/receive protocol implementation | HIGH |
| F0009 | /home/tom/Projects/claude-code/src/bridge/bridgePermissionCallbacks.ts | bridge/ | ts | Permission callback handlers for bridge sessions | HIGH |
| F0010 | /home/tom/Projects/claude-code/src/bridge/bridgePointer.ts | bridge/ | ts | Shared pointer/handle to active bridge session | MEDIUM |
| F0011 | /home/tom/Projects/claude-code/src/bridge/bridgeStatusUtil.ts | bridge/ | ts | Bridge connection status utilities | MEDIUM |
| F0012 | /home/tom/Projects/claude-code/src/bridge/bridgeUI.ts | bridge/ | ts | Bridge UI rendering helpers | MEDIUM |
| F0013 | /home/tom/Projects/claude-code/src/bridge/capacityWake.ts | bridge/ | ts | Wake-on-capacity logic for bridge rate limiting | MEDIUM |
| F0014 | /home/tom/Projects/claude-code/src/bridge/codeSessionApi.ts | bridge/ | ts | Code session API wrapper for bridge integration | HIGH |
| F0015 | /home/tom/Projects/claude-code/src/bridge/createSession.ts | bridge/ | ts | Creates new bridge sessions with auth and config | HIGH |
| F0016 | /home/tom/Projects/claude-code/src/bridge/debugUtils.ts | bridge/ | ts | Debug logging utilities for bridge subsystem | LOW |
| F0017 | /home/tom/Projects/claude-code/src/bridge/envLessBridgeConfig.ts | bridge/ | ts | Bridge config for environments without env vars | MEDIUM |
| F0018 | /home/tom/Projects/claude-code/src/bridge/flushGate.ts | bridge/ | ts | Gate/barrier to flush pending bridge messages | MEDIUM |
| F0019 | /home/tom/Projects/claude-code/src/bridge/inboundAttachments.ts | bridge/ | ts | Handles inbound file/image attachments from bridge | MEDIUM |
| F0020 | /home/tom/Projects/claude-code/src/bridge/inboundMessages.ts | bridge/ | ts | Processes inbound messages from bridge channel | HIGH |
| F0021 | /home/tom/Projects/claude-code/src/bridge/initReplBridge.ts | bridge/ | ts | Initializes REPL-to-bridge connection | HIGH |
| F0022 | /home/tom/Projects/claude-code/src/bridge/jwtUtils.ts | bridge/ | ts | JWT parsing and validation for bridge auth | HIGH |
| F0023 | /home/tom/Projects/claude-code/src/bridge/pollConfigDefaults.ts | bridge/ | ts | Default polling configuration constants | LOW |
| F0024 | /home/tom/Projects/claude-code/src/bridge/pollConfig.ts | bridge/ | ts | Bridge polling config (interval, backoff, timeouts) | MEDIUM |
| F0025 | /home/tom/Projects/claude-code/src/bridge/remoteBridgeCore.ts | bridge/ | ts | Core remote bridge connection and lifecycle | HIGH |
| F0026 | /home/tom/Projects/claude-code/src/bridge/replBridgeHandle.ts | bridge/ | ts | Handle object for the active REPL bridge | MEDIUM |
| F0027 | /home/tom/Projects/claude-code/src/bridge/replBridgeTransport.ts | bridge/ | ts | Transport layer for REPL bridge communication | HIGH |
| F0028 | /home/tom/Projects/claude-code/src/bridge/replBridge.ts | bridge/ | ts | REPL bridge main module connecting terminal to remote | HIGH |
| F0029 | /home/tom/Projects/claude-code/src/bridge/sessionIdCompat.ts | bridge/ | ts | Session ID compatibility helpers across bridge versions | MEDIUM |
| F0030 | /home/tom/Projects/claude-code/src/bridge/sessionRunner.ts | bridge/ | ts | Runs a bridge-mode session lifecycle | HIGH |
| F0031 | /home/tom/Projects/claude-code/src/bridge/trustedDevice.ts | bridge/ | ts | Trusted device verification for bridge auth | HIGH |
| F0032 | /home/tom/Projects/claude-code/src/bridge/types.ts | bridge/ | ts | Type definitions for bridge subsystem | LOW |
| F0033 | /home/tom/Projects/claude-code/src/bridge/workSecret.ts | bridge/ | ts | Work secret management for bridge session auth | HIGH |
| F0034 | /home/tom/Projects/claude-code/src/buddy/CompanionSprite.tsx | buddy/ | tsx | Renders the buddy companion sprite animation | MEDIUM |
| F0035 | /home/tom/Projects/claude-code/src/buddy/companion.ts | buddy/ | ts | Buddy companion state and behavior logic | MEDIUM |
| F0036 | /home/tom/Projects/claude-code/src/buddy/prompt.ts | buddy/ | ts | Prompt text for buddy companion feature | MEDIUM |
| F0037 | /home/tom/Projects/claude-code/src/buddy/sprites.ts | buddy/ | ts | Sprite definitions and frame data for buddy | LOW |
| F0038 | /home/tom/Projects/claude-code/src/buddy/types.ts | buddy/ | ts | Type definitions for buddy companion | LOW |
| F0039 | /home/tom/Projects/claude-code/src/buddy/useBuddyNotification.tsx | buddy/ | tsx | React hook for buddy notification display | MEDIUM |
| F0040 | /home/tom/Projects/claude-code/src/cli/exit.ts | cli/ | ts | CLI exit code handling and process termination | HIGH |
| F0041 | /home/tom/Projects/claude-code/src/cli/handlers/agents.ts | cli/handlers/ | ts | CLI handler for agent-related subcommands | MEDIUM |
| F0042 | /home/tom/Projects/claude-code/src/cli/handlers/auth.ts | cli/handlers/ | ts | CLI handler for authentication flows | HIGH |
| F0043 | /home/tom/Projects/claude-code/src/cli/handlers/autoMode.ts | cli/handlers/ | ts | CLI handler for auto/headless mode startup | HIGH |
| F0044 | /home/tom/Projects/claude-code/src/cli/handlers/mcp.tsx | cli/handlers/ | tsx | CLI handler for MCP server management | MEDIUM |
| F0045 | /home/tom/Projects/claude-code/src/cli/handlers/plugins.ts | cli/handlers/ | ts | CLI handler for plugin management | MEDIUM |
| F0046 | /home/tom/Projects/claude-code/src/cli/handlers/util.tsx | cli/handlers/ | tsx | Shared utilities for CLI handlers | MEDIUM |
| F0047 | /home/tom/Projects/claude-code/src/cli/ndjsonSafeStringify.ts | cli/ | ts | Safe NDJSON serialization for structured CLI output | MEDIUM |
| F0048 | /home/tom/Projects/claude-code/src/cli/print.ts | cli/ | ts | Formatted print helpers for CLI output | MEDIUM |
| F0049 | /home/tom/Projects/claude-code/src/cli/remoteIO.ts | cli/ | ts | I/O adapter for remote/headless CLI sessions | HIGH |
| F0050 | /home/tom/Projects/claude-code/src/cli/structuredIO.ts | cli/ | ts | Structured (JSON) I/O mode for SDK/automation consumers | HIGH |
| F0051 | /home/tom/Projects/claude-code/src/cli/transports/ccrClient.ts | cli/transports/ | ts | CCR (Claude Code Remote) transport client | HIGH |
| F0052 | /home/tom/Projects/claude-code/src/cli/transports/HybridTransport.ts | cli/transports/ | ts | Hybrid SSE+WebSocket transport with fallback | HIGH |
| F0053 | /home/tom/Projects/claude-code/src/cli/transports/SerialBatchEventUploader.ts | cli/transports/ | ts | Batches and serially uploads events to backend | HIGH |
| F0054 | /home/tom/Projects/claude-code/src/cli/transports/SSETransport.ts | cli/transports/ | ts | Server-Sent Events transport implementation | HIGH |
| F0055 | /home/tom/Projects/claude-code/src/cli/transports/transportUtils.ts | cli/transports/ | ts | Shared utilities for transport layer | MEDIUM |
| F0056 | /home/tom/Projects/claude-code/src/cli/transports/WebSocketTransport.ts | cli/transports/ | ts | WebSocket transport implementation | HIGH |
| F0057 | /home/tom/Projects/claude-code/src/cli/transports/WorkerStateUploader.ts | cli/transports/ | ts | Uploads swarm worker state to coordinator | HIGH |
| F0058 | /home/tom/Projects/claude-code/src/cli/update.ts | cli/ | ts | CLI self-update check and update flow | MEDIUM |
| F0059 | /home/tom/Projects/claude-code/src/commands/add-dir/add-dir.tsx | commands/add-dir/ | tsx | UI for adding trusted directories to project | MEDIUM |
| F0060 | /home/tom/Projects/claude-code/src/commands/add-dir/index.ts | commands/add-dir/ | ts | Entry point for /add-dir command | LOW |
| F0061 | /home/tom/Projects/claude-code/src/commands/add-dir/validation.ts | commands/add-dir/ | ts | Path validation for add-dir command | MEDIUM |
| F0062 | /home/tom/Projects/claude-code/src/commands/advisor.ts | commands/ | ts | /advisor command - asks Claude for meta-advice | MEDIUM |
| F0063 | /home/tom/Projects/claude-code/src/commands/agents/agents.tsx | commands/agents/ | tsx | Agents management UI component | MEDIUM |
| F0064 | /home/tom/Projects/claude-code/src/commands/agents/index.ts | commands/agents/ | ts | Entry point for /agents command | LOW |
| F0065 | /home/tom/Projects/claude-code/src/commands/ant-trace/index.js | commands/ant-trace/ | js | Anthropic internal tracing command | MEDIUM |
| F0066 | /home/tom/Projects/claude-code/src/commands/autofix-pr/index.js | commands/autofix-pr/ | js | Automated PR fix command | MEDIUM |
| F0067 | /home/tom/Projects/claude-code/src/commands/backfill-sessions/index.js | commands/backfill-sessions/ | js | Backfills session data to remote store | MEDIUM |
| F0068 | /home/tom/Projects/claude-code/src/commands/branch/branch.ts | commands/branch/ | ts | Git branch creation/checkout command logic | MEDIUM |
| F0069 | /home/tom/Projects/claude-code/src/commands/branch/index.ts | commands/branch/ | ts | Entry point for /branch command | LOW |
| F0070 | /home/tom/Projects/claude-code/src/commands/break-cache/index.js | commands/break-cache/ | js | Forces a prompt cache break for debugging | MEDIUM |
| F0071 | /home/tom/Projects/claude-code/src/commands/bridge/bridge.tsx | commands/bridge/ | tsx | Bridge mode toggle UI | MEDIUM |
| F0072 | /home/tom/Projects/claude-code/src/commands/bridge/index.ts | commands/bridge/ | ts | Entry point for /bridge command | LOW |
| F0073 | /home/tom/Projects/claude-code/src/commands/bridge-kick.ts | commands/ | ts | Force-kicks a stuck bridge session | MEDIUM |
| F0074 | /home/tom/Projects/claude-code/src/commands/brief.ts | commands/ | ts | /brief command - uploads context/attachments as brief | MEDIUM |
| F0075 | /home/tom/Projects/claude-code/src/commands/btw/btw.tsx | commands/btw/ | tsx | "By the way" side-note injection UI | MEDIUM |
| F0076 | /home/tom/Projects/claude-code/src/commands/btw/index.ts | commands/btw/ | ts | Entry point for /btw command | LOW |
| F0077 | /home/tom/Projects/claude-code/src/commands/bughunter/index.js | commands/bughunter/ | js | Automated bug-hunting agent command | MEDIUM |
| F0078 | /home/tom/Projects/claude-code/src/commands/chrome/chrome.tsx | commands/chrome/ | tsx | Claude-in-Chrome integration UI | MEDIUM |
| F0079 | /home/tom/Projects/claude-code/src/commands/chrome/index.ts | commands/chrome/ | ts | Entry point for /chrome command | LOW |
| F0080 | /home/tom/Projects/claude-code/src/commands/clear/caches.ts | commands/clear/ | ts | Cache clearing logic (completions, file cache, etc.) | MEDIUM |
| F0081 | /home/tom/Projects/claude-code/src/commands/clear/clear.ts | commands/clear/ | ts | /clear command - resets conversation state | HIGH |
| F0082 | /home/tom/Projects/claude-code/src/commands/clear/conversation.ts | commands/clear/ | ts | Conversation message history clearing logic | HIGH |
| F0083 | /home/tom/Projects/claude-code/src/commands/clear/index.ts | commands/clear/ | ts | Entry point for /clear command | LOW |
| F0084 | /home/tom/Projects/claude-code/src/commands/color/color.ts | commands/color/ | ts | Terminal color theme selection command | MEDIUM |
| F0085 | /home/tom/Projects/claude-code/src/commands/color/index.ts | commands/color/ | ts | Entry point for /color command | LOW |
| F0086 | /home/tom/Projects/claude-code/src/commands/commit-push-pr.ts | commands/ | ts | Combined commit + push + PR creation command | MEDIUM |
| F0087 | /home/tom/Projects/claude-code/src/commands/commit.ts | commands/ | ts | Git commit helper command | MEDIUM |
| F0088 | /home/tom/Projects/claude-code/src/commands/compact/compact.ts | commands/compact/ | ts | /compact command - triggers conversation compaction | HIGH |
| F0089 | /home/tom/Projects/claude-code/src/commands/compact/index.ts | commands/compact/ | ts | Entry point for /compact command | LOW |
| F0090 | /home/tom/Projects/claude-code/src/commands/config/config.tsx | commands/config/ | tsx | /config command UI (settings viewer/editor) | HIGH |
| F0091 | /home/tom/Projects/claude-code/src/commands/config/index.ts | commands/config/ | ts | Entry point for /config command | LOW |
| F0092 | /home/tom/Projects/claude-code/src/commands/context/context-noninteractive.ts | commands/context/ | ts | Non-interactive context display for headless mode | MEDIUM |
| F0093 | /home/tom/Projects/claude-code/src/commands/context/context.tsx | commands/context/ | tsx | Context visualization UI component | MEDIUM |
| F0094 | /home/tom/Projects/claude-code/src/commands/context/index.ts | commands/context/ | ts | Entry point for /context command | LOW |
| F0095 | /home/tom/Projects/claude-code/src/commands/copy/copy.tsx | commands/copy/ | tsx | Copy conversation to clipboard UI | MEDIUM |
| F0096 | /home/tom/Projects/claude-code/src/commands/copy/index.ts | commands/copy/ | ts | Entry point for /copy command | LOW |
| F0097 | /home/tom/Projects/claude-code/src/commands/cost/cost.ts | commands/cost/ | ts | Shows session cost breakdown | MEDIUM |
| F0098 | /home/tom/Projects/claude-code/src/commands/cost/index.ts | commands/cost/ | ts | Entry point for /cost command | LOW |
| F0099 | /home/tom/Projects/claude-code/src/commands/createMovedToPluginCommand.ts | commands/ | ts | Creates stub commands for features moved to plugins | MEDIUM |
| F0100 | /home/tom/Projects/claude-code/src/commands/ctx_viz/index.js | commands/ctx_viz/ | js | Context window visualization command | MEDIUM |
| F0101 | /home/tom/Projects/claude-code/src/commands/debug-meta/debugMeta.ts | commands/debug-meta/ | ts | Debug metadata inspection command logic | MEDIUM |
| F0102 | /home/tom/Projects/claude-code/src/commands/debug-meta/index.ts | commands/debug-meta/ | ts | Entry point for /debug-meta command | LOW |
| F0103 | /home/tom/Projects/claude-code/src/commands/debug-tool-call/index.js | commands/debug-tool-call/ | js | Debug tool call inspection command | MEDIUM |
| F0104 | /home/tom/Projects/claude-code/src/commands/desktop/desktop.tsx | commands/desktop/ | tsx | Desktop app integration UI | MEDIUM |
| F0105 | /home/tom/Projects/claude-code/src/commands/desktop/index.ts | commands/desktop/ | ts | Entry point for /desktop command | LOW |
| F0106 | /home/tom/Projects/claude-code/src/commands/diff/diff.tsx | commands/diff/ | tsx | Diff viewer command UI | MEDIUM |
| F0107 | /home/tom/Projects/claude-code/src/commands/diff/index.ts | commands/diff/ | ts | Entry point for /diff command | LOW |
| F0108 | /home/tom/Projects/claude-code/src/commands/doctor/doctor.tsx | commands/doctor/ | tsx | Diagnostics doctor UI component | MEDIUM |
| F0109 | /home/tom/Projects/claude-code/src/commands/doctor/index.ts | commands/doctor/ | ts | Entry point for /doctor command | LOW |
| F0110 | /home/tom/Projects/claude-code/src/commands/effort/effort.tsx | commands/effort/ | tsx | Effort level selection UI (fast/normal/max) | MEDIUM |
| F0111 | /home/tom/Projects/claude-code/src/commands/effort/index.ts | commands/effort/ | ts | Entry point for /effort command | LOW |
| F0112 | /home/tom/Projects/claude-code/src/commands/env/index.js | commands/env/ | js | Environment variable inspection command | MEDIUM |
| F0113 | /home/tom/Projects/claude-code/src/commands/exit/exit.tsx | commands/exit/ | tsx | Exit/quit confirmation UI | MEDIUM |
| F0114 | /home/tom/Projects/claude-code/src/commands/exit/index.ts | commands/exit/ | ts | Entry point for /exit command | LOW |
| F0115 | /home/tom/Projects/claude-code/src/commands/export/export.tsx | commands/export/ | tsx | Export conversation to file UI | MEDIUM |
| F0116 | /home/tom/Projects/claude-code/src/commands/export/index.ts | commands/export/ | ts | Entry point for /export command | LOW |
| F0117 | /home/tom/Projects/claude-code/src/commands/extra-usage/extra-usage-core.ts | commands/extra-usage/ | ts | Core logic for extra usage reporting | MEDIUM |
| F0118 | /home/tom/Projects/claude-code/src/commands/extra-usage/extra-usage-noninteractive.ts | commands/extra-usage/ | ts | Headless extra-usage output | MEDIUM |
| F0119 | /home/tom/Projects/claude-code/src/commands/extra-usage/extra-usage.tsx | commands/extra-usage/ | tsx | Extra usage UI component | MEDIUM |
| F0120 | /home/tom/Projects/claude-code/src/commands/extra-usage/index.ts | commands/extra-usage/ | ts | Entry point for /extra-usage command | LOW |
| F0121 | /home/tom/Projects/claude-code/src/commands/fast/fast.tsx | commands/fast/ | tsx | Fast mode toggle UI | MEDIUM |
| F0122 | /home/tom/Projects/claude-code/src/commands/fast/index.ts | commands/fast/ | ts | Entry point for /fast command | LOW |
| F0123 | /home/tom/Projects/claude-code/src/commands/feedback/feedback.tsx | commands/feedback/ | tsx | User feedback submission UI | MEDIUM |
| F0124 | /home/tom/Projects/claude-code/src/commands/feedback/index.ts | commands/feedback/ | ts | Entry point for /feedback command | LOW |
| F0125 | /home/tom/Projects/claude-code/src/commands/files/files.ts | commands/files/ | ts | Lists files in context/session | MEDIUM |
| F0126 | /home/tom/Projects/claude-code/src/commands/files/index.ts | commands/files/ | ts | Entry point for /files command | LOW |
| F0127 | /home/tom/Projects/claude-code/src/commands/good-claude/index.js | commands/good-claude/ | js | Positive reinforcement/rating command | LOW |
| F0128 | /home/tom/Projects/claude-code/src/commands/heapdump/heapdump.ts | commands/heapdump/ | ts | Node.js heap dump trigger command | MEDIUM |
| F0129 | /home/tom/Projects/claude-code/src/commands/heapdump/index.ts | commands/heapdump/ | ts | Entry point for /heapdump command | LOW |
| F0130 | /home/tom/Projects/claude-code/src/commands/help/help.tsx | commands/help/ | tsx | Help menu UI component | MEDIUM |
| F0131 | /home/tom/Projects/claude-code/src/commands/help/index.ts | commands/help/ | ts | Entry point for /help command | LOW |
| F0132 | /home/tom/Projects/claude-code/src/commands/hooks/hooks.tsx | commands/hooks/ | tsx | Hooks configuration UI | HIGH |
| F0133 | /home/tom/Projects/claude-code/src/commands/hooks/index.ts | commands/hooks/ | ts | Entry point for /hooks command | LOW |
| F0134 | /home/tom/Projects/claude-code/src/commands/ide/ide.tsx | commands/ide/ | tsx | IDE integration setup UI | MEDIUM |
| F0135 | /home/tom/Projects/claude-code/src/commands/ide/index.ts | commands/ide/ | ts | Entry point for /ide command | LOW |
| F0136 | /home/tom/Projects/claude-code/src/commands/init.ts | commands/ | ts | /init command - creates CLAUDE.md for project | HIGH |
| F0137 | /home/tom/Projects/claude-code/src/commands/init-verifiers.ts | commands/ | ts | Verifiers run after /init to validate setup | MEDIUM |
| F0138 | /home/tom/Projects/claude-code/src/commands/insights.ts | commands/ | ts | /insights command - session analytics summary | MEDIUM |
| F0139 | /home/tom/Projects/claude-code/src/commands/install-github-app/ApiKeyStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: API key step | MEDIUM |
| F0140 | /home/tom/Projects/claude-code/src/commands/install-github-app/CheckExistingSecretStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: check existing secret step | MEDIUM |
| F0141 | /home/tom/Projects/claude-code/src/commands/install-github-app/CheckGitHubStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: GitHub auth check step | MEDIUM |
| F0142 | /home/tom/Projects/claude-code/src/commands/install-github-app/ChooseRepoStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: repository selection step | MEDIUM |
| F0143 | /home/tom/Projects/claude-code/src/commands/install-github-app/CreatingStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: creation progress step | MEDIUM |
| F0144 | /home/tom/Projects/claude-code/src/commands/install-github-app/ErrorStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: error display step | MEDIUM |
| F0145 | /home/tom/Projects/claude-code/src/commands/install-github-app/ExistingWorkflowStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: existing workflow step | MEDIUM |
| F0146 | /home/tom/Projects/claude-code/src/commands/install-github-app/index.ts | commands/install-github-app/ | ts | Entry point for /install-github-app command | LOW |
| F0147 | /home/tom/Projects/claude-code/src/commands/install-github-app/InstallAppStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: install step | MEDIUM |
| F0148 | /home/tom/Projects/claude-code/src/commands/install-github-app/install-github-app.tsx | commands/install-github-app/ | tsx | GitHub App install wizard root component | MEDIUM |
| F0149 | /home/tom/Projects/claude-code/src/commands/install-github-app/OAuthFlowStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: OAuth step | HIGH |
| F0150 | /home/tom/Projects/claude-code/src/commands/install-github-app/setupGitHubActions.ts | commands/install-github-app/ | ts | Creates GitHub Actions workflow files | MEDIUM |
| F0151 | /home/tom/Projects/claude-code/src/commands/install-github-app/SuccessStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: success step | MEDIUM |
| F0152 | /home/tom/Projects/claude-code/src/commands/install-github-app/WarningsStep.tsx | commands/install-github-app/ | tsx | GitHub App install wizard: warnings step | MEDIUM |
| F0153 | /home/tom/Projects/claude-code/src/commands/install-slack-app/index.ts | commands/install-slack-app/ | ts | Entry point for /install-slack-app command | LOW |
| F0154 | /home/tom/Projects/claude-code/src/commands/install-slack-app/install-slack-app.ts | commands/install-slack-app/ | ts | Slack app installation logic | MEDIUM |
| F0155 | /home/tom/Projects/claude-code/src/commands/install.tsx | commands/ | tsx | Native binary installer command UI | MEDIUM |
| F0156 | /home/tom/Projects/claude-code/src/commands/issue/index.js | commands/issue/ | js | GitHub issue creation command | MEDIUM |
| F0157 | /home/tom/Projects/claude-code/src/commands/keybindings/index.ts | commands/keybindings/ | ts | Entry point for /keybindings command | LOW |
| F0158 | /home/tom/Projects/claude-code/src/commands/keybindings/keybindings.ts | commands/keybindings/ | ts | Keybinding viewer/editor command logic | MEDIUM |
| F0159 | /home/tom/Projects/claude-code/src/commands/login/index.ts | commands/login/ | ts | Entry point for /login command | LOW |
| F0160 | /home/tom/Projects/claude-code/src/commands/login/login.tsx | commands/login/ | tsx | Login/auth flow UI component | CRITICAL |
| F0161 | /home/tom/Projects/claude-code/src/commands/logout/index.ts | commands/logout/ | ts | Entry point for /logout command | LOW |
| F0162 | /home/tom/Projects/claude-code/src/commands/logout/logout.tsx | commands/logout/ | tsx | Logout flow UI component | HIGH |
| F0163 | /home/tom/Projects/claude-code/src/commands/mcp/addCommand.ts | commands/mcp/ | ts | MCP server add command logic | HIGH |
| F0164 | /home/tom/Projects/claude-code/src/commands/mcp/index.ts | commands/mcp/ | ts | Entry point for /mcp command | LOW |
| F0165 | /home/tom/Projects/claude-code/src/commands/mcp/mcp.tsx | commands/mcp/ | tsx | MCP management UI component | HIGH |
| F0166 | /home/tom/Projects/claude-code/src/commands/mcp/xaaIdpCommand.ts | commands/mcp/ | ts | XAA IdP MCP authentication command | HIGH |
| F0167 | /home/tom/Projects/claude-code/src/commands/memory/index.ts | commands/memory/ | ts | Entry point for /memory command | LOW |
| F0168 | /home/tom/Projects/claude-code/src/commands/memory/memory.tsx | commands/memory/ | tsx | Memory file management UI | MEDIUM |
| F0169 | /home/tom/Projects/claude-code/src/commands/mobile/index.ts | commands/mobile/ | ts | Entry point for /mobile command | LOW |
| F0170 | /home/tom/Projects/claude-code/src/commands/mobile/mobile.tsx | commands/mobile/ | tsx | Mobile bridge/connection UI | MEDIUM |
| F0171 | /home/tom/Projects/claude-code/src/commands/mock-limits/index.js | commands/mock-limits/ | js | Mock rate limit injection for testing | LOW |
| F0172 | /home/tom/Projects/claude-code/src/commands/model/index.ts | commands/model/ | ts | Entry point for /model command | LOW |
| F0173 | /home/tom/Projects/claude-code/src/commands/model/model.tsx | commands/model/ | tsx | Model selection UI component | HIGH |
| F0174 | /home/tom/Projects/claude-code/src/commands/oauth-refresh/index.js | commands/oauth-refresh/ | js | Force OAuth token refresh command | HIGH |
| F0175 | /home/tom/Projects/claude-code/src/commands/onboarding/index.js | commands/onboarding/ | js | First-run onboarding command | MEDIUM |
| F0176 | /home/tom/Projects/claude-code/src/commands/output-style/index.ts | commands/output-style/ | ts | Entry point for /output-style command | LOW |
| F0177 | /home/tom/Projects/claude-code/src/commands/output-style/output-style.tsx | commands/output-style/ | tsx | Output style picker UI | MEDIUM |
| F0178 | /home/tom/Projects/claude-code/src/commands/passes/index.ts | commands/passes/ | ts | Entry point for /passes command | LOW |
| F0179 | /home/tom/Projects/claude-code/src/commands/passes/passes.tsx | commands/passes/ | tsx | Guest passes management UI | MEDIUM |
| F0180 | /home/tom/Projects/claude-code/src/commands/perf-issue/index.js | commands/perf-issue/ | js | Performance issue reporting command | MEDIUM |
| F0181 | /home/tom/Projects/claude-code/src/commands/permissions/index.ts | commands/permissions/ | ts | Entry point for /permissions command | LOW |
| F0182 | /home/tom/Projects/claude-code/src/commands/permissions/permissions.tsx | commands/permissions/ | tsx | Permission rules management UI | HIGH |
| F0183 | /home/tom/Projects/claude-code/src/commands/plan/index.ts | commands/plan/ | ts | Entry point for /plan command | LOW |
| F0184 | /home/tom/Projects/claude-code/src/commands/plan/plan.tsx | commands/plan/ | tsx | Plan mode entry UI | HIGH |
| F0185 | /home/tom/Projects/claude-code/src/commands/plugin/AddMarketplace.tsx | commands/plugin/ | tsx | Plugin: add marketplace source UI | MEDIUM |
| F0186 | /home/tom/Projects/claude-code/src/commands/plugin/BrowseMarketplace.tsx | commands/plugin/ | tsx | Plugin: browse marketplace UI | MEDIUM |
| F0187 | /home/tom/Projects/claude-code/src/commands/plugin/DiscoverPlugins.tsx | commands/plugin/ | tsx | Plugin: discovery/recommendations UI | MEDIUM |
| F0188 | /home/tom/Projects/claude-code/src/commands/plugin/index.tsx | commands/plugin/ | tsx | Entry point for /plugin command | LOW |
| F0189 | /home/tom/Projects/claude-code/src/commands/plugin/ManageMarketplaces.tsx | commands/plugin/ | tsx | Plugin: marketplace management UI | MEDIUM |
| F0190 | /home/tom/Projects/claude-code/src/commands/plugin/ManagePlugins.tsx | commands/plugin/ | tsx | Plugin: installed plugins management UI | MEDIUM |
| F0191 | /home/tom/Projects/claude-code/src/commands/plugin/parseArgs.ts | commands/plugin/ | ts | Parses arguments for plugin subcommands | MEDIUM |
| F0192 | /home/tom/Projects/claude-code/src/commands/plugin/pluginDetailsHelpers.tsx | commands/plugin/ | tsx | Plugin detail display helper components | MEDIUM |
| F0193 | /home/tom/Projects/claude-code/src/commands/plugin/PluginErrors.tsx | commands/plugin/ | tsx | Plugin error display components | MEDIUM |
| F0194 | /home/tom/Projects/claude-code/src/commands/plugin/PluginOptionsDialog.tsx | commands/plugin/ | tsx | Plugin options configuration dialog | MEDIUM |
| F0195 | /home/tom/Projects/claude-code/src/commands/plugin/PluginOptionsFlow.tsx | commands/plugin/ | tsx | Plugin options setup flow component | MEDIUM |
| F0196 | /home/tom/Projects/claude-code/src/commands/plugin/PluginSettings.tsx | commands/plugin/ | tsx | Plugin settings viewer/editor UI | MEDIUM |
| F0197 | /home/tom/Projects/claude-code/src/commands/plugin/PluginTrustWarning.tsx | commands/plugin/ | tsx | Plugin trust/security warning dialog | HIGH |
| F0198 | /home/tom/Projects/claude-code/src/commands/plugin/plugin.tsx | commands/plugin/ | tsx | Plugin command root component | MEDIUM |
| F0199 | /home/tom/Projects/claude-code/src/commands/plugin/UnifiedInstalledCell.tsx | commands/plugin/ | tsx | Unified plugin installed cell UI component | MEDIUM |
| F0200 | /home/tom/Projects/claude-code/src/commands/plugin/usePagination.ts | commands/plugin/ | ts | Pagination hook for plugin list UI | LOW |
| F0201 | /home/tom/Projects/claude-code/src/commands/plugin/ValidatePlugin.tsx | commands/plugin/ | tsx | Plugin validation UI during install | MEDIUM |
| F0202 | /home/tom/Projects/claude-code/src/commands/pr_comments/index.ts | commands/pr_comments/ | ts | Entry point for /pr-comments command | LOW |
| F0203 | /home/tom/Projects/claude-code/src/commands/privacy-settings/index.ts | commands/privacy-settings/ | ts | Entry point for /privacy-settings command | LOW |
| F0204 | /home/tom/Projects/claude-code/src/commands/privacy-settings/privacy-settings.tsx | commands/privacy-settings/ | tsx | Privacy settings UI component | HIGH |
| F0205 | /home/tom/Projects/claude-code/src/commands/rate-limit-options/index.ts | commands/rate-limit-options/ | ts | Entry point for /rate-limit-options command | LOW |
| F0206 | /home/tom/Projects/claude-code/src/commands/rate-limit-options/rate-limit-options.tsx | commands/rate-limit-options/ | tsx | Rate limit configuration UI | MEDIUM |
| F0207 | /home/tom/Projects/claude-code/src/commands/release-notes/index.ts | commands/release-notes/ | ts | Entry point for /release-notes command | LOW |
| F0208 | /home/tom/Projects/claude-code/src/commands/release-notes/release-notes.ts | commands/release-notes/ | ts | Release notes fetching and display | MEDIUM |
| F0209 | /home/tom/Projects/claude-code/src/commands/reload-plugins/index.ts | commands/reload-plugins/ | ts | Entry point for /reload-plugins command | LOW |
| F0210 | /home/tom/Projects/claude-code/src/commands/reload-plugins/reload-plugins.ts | commands/reload-plugins/ | ts | Hot-reloads installed plugins | HIGH |
| F0211 | /home/tom/Projects/claude-code/src/commands/remote-env/index.ts | commands/remote-env/ | ts | Entry point for /remote-env command | LOW |
| F0212 | /home/tom/Projects/claude-code/src/commands/remote-env/remote-env.tsx | commands/remote-env/ | tsx | Remote environment variable management UI | MEDIUM |
| F0213 | /home/tom/Projects/claude-code/src/commands/remote-setup/api.ts | commands/remote-setup/ | ts | Remote setup API calls | HIGH |
| F0214 | /home/tom/Projects/claude-code/src/commands/remote-setup/index.ts | commands/remote-setup/ | ts | Entry point for /remote-setup command | LOW |
| F0215 | /home/tom/Projects/claude-code/src/commands/remote-setup/remote-setup.tsx | commands/remote-setup/ | tsx | Remote environment setup wizard UI | MEDIUM |
| F0216 | /home/tom/Projects/claude-code/src/commands/rename/generateSessionName.ts | commands/rename/ | ts | AI-powered session name generation | MEDIUM |
| F0217 | /home/tom/Projects/claude-code/src/commands/rename/index.ts | commands/rename/ | ts | Entry point for /rename command | LOW |
| F0218 | /home/tom/Projects/claude-code/src/commands/rename/rename.ts | commands/rename/ | ts | Session rename command logic | MEDIUM |
| F0219 | /home/tom/Projects/claude-code/src/commands/reset-limits/index.js | commands/reset-limits/ | js | Resets usage/rate limits for testing | LOW |
| F0220 | /home/tom/Projects/claude-code/src/commands/resume/index.ts | commands/resume/ | ts | Entry point for /resume command | LOW |
| F0221 | /home/tom/Projects/claude-code/src/commands/resume/resume.tsx | commands/resume/ | tsx | Session resume picker UI | HIGH |
| F0222 | /home/tom/Projects/claude-code/src/commands/review/reviewRemote.ts | commands/review/ | ts | Remote code review execution | MEDIUM |
| F0223 | /home/tom/Projects/claude-code/src/commands/review.ts | commands/ | ts | /review command - initiates AI code review | HIGH |
| F0224 | /home/tom/Projects/claude-code/src/commands/review/ultrareviewCommand.tsx | commands/review/ | tsx | UltraReview enhanced review mode UI | MEDIUM |
| F0225 | /home/tom/Projects/claude-code/src/commands/review/ultrareviewEnabled.ts | commands/review/ | ts | Feature flag for UltraReview mode | MEDIUM |
| F0226 | /home/tom/Projects/claude-code/src/commands/review/UltrareviewOverageDialog.tsx | commands/review/ | tsx | UltraReview overage/quota dialog | MEDIUM |
| F0227 | /home/tom/Projects/claude-code/src/commands/rewind/index.ts | commands/rewind/ | ts | Entry point for /rewind command | LOW |
| F0228 | /home/tom/Projects/claude-code/src/commands/rewind/rewind.ts | commands/rewind/ | ts | Rewinds conversation to earlier checkpoint | HIGH |
| F0229 | /home/tom/Projects/claude-code/src/commands/sandbox-toggle/index.ts | commands/sandbox-toggle/ | ts | Entry point for /sandbox-toggle command | LOW |
| F0230 | /home/tom/Projects/claude-code/src/commands/sandbox-toggle/sandbox-toggle.tsx | commands/sandbox-toggle/ | tsx | Sandbox mode on/off toggle UI | HIGH |
| F0231 | /home/tom/Projects/claude-code/src/commands/security-review.ts | commands/ | ts | /security-review command - security-focused code review | HIGH |
| F0232 | /home/tom/Projects/claude-code/src/commands/session/index.ts | commands/session/ | ts | Entry point for /session command | LOW |
| F0233 | /home/tom/Projects/claude-code/src/commands/session/session.tsx | commands/session/ | tsx | Session info display UI | MEDIUM |
| F0234 | /home/tom/Projects/claude-code/src/commands/share/index.js | commands/share/ | js | Share session/conversation command | MEDIUM |
| F0235 | /home/tom/Projects/claude-code/src/commands/skills/index.ts | commands/skills/ | ts | Entry point for /skills command | LOW |
| F0236 | /home/tom/Projects/claude-code/src/commands/skills/skills.tsx | commands/skills/ | tsx | Skills browser/manager UI | HIGH |
| F0237 | /home/tom/Projects/claude-code/src/commands/stats/index.ts | commands/stats/ | ts | Entry point for /stats command | LOW |
| F0238 | /home/tom/Projects/claude-code/src/commands/stats/stats.tsx | commands/stats/ | tsx | Session statistics display UI | MEDIUM |
| F0239 | /home/tom/Projects/claude-code/src/commands/status/index.ts | commands/status/ | ts | Entry point for /status command | LOW |
| F0240 | /home/tom/Projects/claude-code/src/commands/statusline.tsx | commands/ | tsx | Statusline display command | MEDIUM |
| F0241 | /home/tom/Projects/claude-code/src/commands/status/status.tsx | commands/status/ | tsx | System status display UI | MEDIUM |
| F0242 | /home/tom/Projects/claude-code/src/commands/stickers/index.ts | commands/stickers/ | ts | Entry point for /stickers command | LOW |
| F0243 | /home/tom/Projects/claude-code/src/commands/stickers/stickers.ts | commands/stickers/ | ts | Achievement stickers display | LOW |
| F0244 | /home/tom/Projects/claude-code/src/commands/summary/index.js | commands/summary/ | js | Session summary generation command | MEDIUM |
| F0245 | /home/tom/Projects/claude-code/src/commands/tag/index.ts | commands/tag/ | ts | Entry point for /tag command | LOW |
| F0246 | /home/tom/Projects/claude-code/src/commands/tag/tag.tsx | commands/tag/ | tsx | Session tagging UI | MEDIUM |
| F0247 | /home/tom/Projects/claude-code/src/commands/tasks/index.ts | commands/tasks/ | ts | Entry point for /tasks command | LOW |
| F0248 | /home/tom/Projects/claude-code/src/commands/tasks/tasks.tsx | commands/tasks/ | tsx | Background tasks management UI | HIGH |
| F0249 | /home/tom/Projects/claude-code/src/commands/teleport/index.js | commands/teleport/ | js | Teleport (remote execution) command | HIGH |
| F0250 | /home/tom/Projects/claude-code/src/commands/terminalSetup/index.ts | commands/terminalSetup/ | ts | Entry point for /terminal-setup command | LOW |
| F0251 | /home/tom/Projects/claude-code/src/commands/terminalSetup/terminalSetup.tsx | commands/terminalSetup/ | tsx | Terminal setup/configuration wizard UI | MEDIUM |
| F0252 | /home/tom/Projects/claude-code/src/commands/theme/index.ts | commands/theme/ | ts | Entry point for /theme command | LOW |
| F0253 | /home/tom/Projects/claude-code/src/commands/theme/theme.tsx | commands/theme/ | tsx | Theme selection UI | MEDIUM |
| F0254 | /home/tom/Projects/claude-code/src/commands/thinkback/index.ts | commands/thinkback/ | ts | Entry point for /thinkback command | LOW |
| F0255 | /home/tom/Projects/claude-code/src/commands/thinkback-play/index.ts | commands/thinkback-play/ | ts | Entry point for /thinkback-play command | LOW |
| F0256 | /home/tom/Projects/claude-code/src/commands/thinkback-play/thinkback-play.ts | commands/thinkback-play/ | ts | Replay recorded thinking sessions | MEDIUM |
| F0257 | /home/tom/Projects/claude-code/src/commands/thinkback/thinkback.tsx | commands/thinkback/ | tsx | Thinkback session recording UI | MEDIUM |
| F0258 | /home/tom/Projects/claude-code/src/commands.ts | src/ | ts | Root command registry - registers all slash commands | CRITICAL |
| F0259 | /home/tom/Projects/claude-code/src/commands/ultraplan.tsx | commands/ | tsx | UltraPlan multi-step planning mode UI | HIGH |
| F0260 | /home/tom/Projects/claude-code/src/commands/upgrade/index.ts | commands/upgrade/ | ts | Entry point for /upgrade command | LOW |
| F0261 | /home/tom/Projects/claude-code/src/commands/upgrade/upgrade.tsx | commands/upgrade/ | tsx | Self-upgrade command UI | MEDIUM |
| F0262 | /home/tom/Projects/claude-code/src/commands/usage/index.ts | commands/usage/ | ts | Entry point for /usage command | LOW |
| F0263 | /home/tom/Projects/claude-code/src/commands/usage/usage.tsx | commands/usage/ | tsx | Usage/billing statistics UI | MEDIUM |
| F0264 | /home/tom/Projects/claude-code/src/commands/version.ts | commands/ | ts | /version command - prints version info | LOW |
| F0265 | /home/tom/Projects/claude-code/src/commands/vim/index.ts | commands/vim/ | ts | Entry point for /vim command | LOW |
| F0266 | /home/tom/Projects/claude-code/src/commands/vim/vim.ts | commands/vim/ | ts | Vim mode toggle command | MEDIUM |
| F0267 | /home/tom/Projects/claude-code/src/commands/voice/index.ts | commands/voice/ | ts | Entry point for /voice command | LOW |
| F0268 | /home/tom/Projects/claude-code/src/commands/voice/voice.ts | commands/voice/ | ts | Voice mode toggle command | MEDIUM |
| F0269 | /home/tom/Projects/claude-code/src/components/AgentProgressLine.tsx | components/ | tsx | Single line progress indicator for agent tasks | MEDIUM |
| F0270 | /home/tom/Projects/claude-code/src/components/agents/AgentDetail.tsx | components/agents/ | tsx | Agent detail view component | MEDIUM |
| F0271 | /home/tom/Projects/claude-code/src/components/agents/AgentEditor.tsx | components/agents/ | tsx | Agent prompt/config editor component | MEDIUM |
| F0272 | /home/tom/Projects/claude-code/src/components/agents/agentFileUtils.ts | components/agents/ | ts | File utilities for agent definition management | MEDIUM |
| F0273 | /home/tom/Projects/claude-code/src/components/agents/AgentNavigationFooter.tsx | components/agents/ | tsx | Navigation footer for agent management views | MEDIUM |
| F0274 | /home/tom/Projects/claude-code/src/components/agents/AgentsList.tsx | components/agents/ | tsx | List of all configured agents | MEDIUM |
| F0275 | /home/tom/Projects/claude-code/src/components/agents/AgentsMenu.tsx | components/agents/ | tsx | Agent selection menu | HIGH |
| F0276 | /home/tom/Projects/claude-code/src/components/agents/ColorPicker.tsx | components/agents/ | tsx | Color picker for agent visual identity | LOW |
| F0277 | /home/tom/Projects/claude-code/src/components/agents/generateAgent.ts | components/agents/ | ts | AI-powered agent definition generation | MEDIUM |
| F0278 | /home/tom/Projects/claude-code/src/components/agents/ModelSelector.tsx | components/agents/ | tsx | Model selector dropdown for agents | MEDIUM |
| F0279 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/CreateAgentWizard.tsx | components/agents/new-agent-creation/ | tsx | New agent creation wizard root | MEDIUM |
| F0280 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx | components/agents/ | tsx | Wizard: color selection step | LOW |
| F0281 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx | components/agents/ | tsx | Wizard: confirmation step | LOW |
| F0282 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx | components/agents/ | tsx | Wizard: confirmation step wrapper | LOW |
| F0283 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx | components/agents/ | tsx | Wizard: description entry step | LOW |
| F0284 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx | components/agents/ | tsx | Wizard: AI generation step | LOW |
| F0285 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx | components/agents/ | tsx | Wizard: save location step | LOW |
| F0286 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx | components/agents/ | tsx | Wizard: memory configuration step | LOW |
| F0287 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx | components/agents/ | tsx | Wizard: creation method selection step | LOW |
| F0288 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx | components/agents/ | tsx | Wizard: model selection step | LOW |
| F0289 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx | components/agents/ | tsx | Wizard: system prompt entry step | LOW |
| F0290 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx | components/agents/ | tsx | Wizard: tools selection step | LOW |
| F0291 | /home/tom/Projects/claude-code/src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx | components/agents/ | tsx | Wizard: agent type selection step | LOW |
| F0292 | /home/tom/Projects/claude-code/src/components/agents/ToolSelector.tsx | components/agents/ | tsx | Tool selection component for agents | MEDIUM |
| F0293 | /home/tom/Projects/claude-code/src/components/agents/types.ts | components/agents/ | ts | Agent component type definitions | LOW |
| F0294 | /home/tom/Projects/claude-code/src/components/agents/utils.ts | components/agents/ | ts | Shared utilities for agent components | MEDIUM |
| F0295 | /home/tom/Projects/claude-code/src/components/agents/validateAgent.ts | components/agents/ | ts | Agent config validation logic | MEDIUM |
| F0296 | /home/tom/Projects/claude-code/src/components/ApproveApiKey.tsx | components/ | tsx | API key approval dialog | HIGH |
| F0297 | /home/tom/Projects/claude-code/src/components/App.tsx | components/ | tsx | App root component - top-level React tree | CRITICAL |
| F0298 | /home/tom/Projects/claude-code/src/components/AutoModeOptInDialog.tsx | components/ | tsx | Auto/headless mode opt-in dialog | HIGH |
| F0299 | /home/tom/Projects/claude-code/src/components/AutoUpdater.tsx | components/ | tsx | Auto-updater component (npm/brew installs) | MEDIUM |
| F0300 | /home/tom/Projects/claude-code/src/components/AutoUpdaterWrapper.tsx | components/ | tsx | Wrapper selecting correct auto-updater strategy | MEDIUM |
| F0301 | /home/tom/Projects/claude-code/src/components/AwsAuthStatusBox.tsx | components/ | tsx | AWS authentication status display | MEDIUM |
| F0302 | /home/tom/Projects/claude-code/src/components/BaseTextInput.tsx | components/ | tsx | Base text input component for all text fields | HIGH |
| F0303 | /home/tom/Projects/claude-code/src/components/BashModeProgress.tsx | components/ | tsx | Progress display during bash command execution | MEDIUM |
| F0304 | /home/tom/Projects/claude-code/src/components/BridgeDialog.tsx | components/ | tsx | Bridge connection status dialog | MEDIUM |
| F0305 | /home/tom/Projects/claude-code/src/components/BypassPermissionsModeDialog.tsx | components/ | tsx | Bypass permissions mode warning dialog | HIGH |
| F0306 | /home/tom/Projects/claude-code/src/components/ChannelDowngradeDialog.tsx | components/ | tsx | Subscription channel downgrade warning dialog | MEDIUM |
| F0307 | /home/tom/Projects/claude-code/src/components/ClaudeCodeHint/PluginHintMenu.tsx | components/ClaudeCodeHint/ | tsx | Plugin recommendation hint menu | MEDIUM |
| F0308 | /home/tom/Projects/claude-code/src/components/ClaudeInChromeOnboarding.tsx | components/ | tsx | Claude-in-Chrome onboarding flow | MEDIUM |
| F0309 | /home/tom/Projects/claude-code/src/components/ClaudeMdExternalIncludesDialog.tsx | components/ | tsx | CLAUDE.md external includes approval dialog | HIGH |
| F0310 | /home/tom/Projects/claude-code/src/components/ClickableImageRef.tsx | components/ | tsx | Clickable image reference component | LOW |
| F0311 | /home/tom/Projects/claude-code/src/components/CompactSummary.tsx | components/ | tsx | Compact conversation summary display | MEDIUM |
| F0312 | /home/tom/Projects/claude-code/src/components/ConfigurableShortcutHint.tsx | components/ | tsx | Keyboard shortcut hint with user-configurable binding | MEDIUM |
| F0313 | /home/tom/Projects/claude-code/src/components/ConsoleOAuthFlow.tsx | components/ | tsx | Console-based OAuth authentication flow | HIGH |
| F0314 | /home/tom/Projects/claude-code/src/components/ContextSuggestions.tsx | components/ | tsx | Context/file suggestion display during input | HIGH |
| F0315 | /home/tom/Projects/claude-code/src/components/ContextVisualization.tsx | components/ | tsx | Context window usage visualization | MEDIUM |
| F0316 | /home/tom/Projects/claude-code/src/components/CoordinatorAgentStatus.tsx | components/ | tsx | Swarm coordinator agent status display | MEDIUM |
| F0317 | /home/tom/Projects/claude-code/src/components/CostThresholdDialog.tsx | components/ | tsx | Cost threshold warning/confirmation dialog | MEDIUM |
| F0318 | /home/tom/Projects/claude-code/src/components/CtrlOToExpand.tsx | components/ | tsx | Hint for Ctrl+O expand shortcut | LOW |
| F0319 | /home/tom/Projects/claude-code/src/components/CustomSelect/index.ts | components/CustomSelect/ | ts | CustomSelect component exports | LOW |
| F0320 | /home/tom/Projects/claude-code/src/components/CustomSelect/option-map.ts | components/CustomSelect/ | ts | Option mapping utility for custom select | LOW |
| F0321 | /home/tom/Projects/claude-code/src/components/CustomSelect/select-input-option.tsx | components/CustomSelect/ | tsx | Input option render for custom select | LOW |
| F0322 | /home/tom/Projects/claude-code/src/components/CustomSelect/SelectMulti.tsx | components/CustomSelect/ | tsx | Multi-select variant component | MEDIUM |
| F0323 | /home/tom/Projects/claude-code/src/components/CustomSelect/select-option.tsx | components/CustomSelect/ | tsx | Single option render component | LOW |
| F0324 | /home/tom/Projects/claude-code/src/components/CustomSelect/select.tsx | components/CustomSelect/ | tsx | Core custom select component | HIGH |
| F0325 | /home/tom/Projects/claude-code/src/components/CustomSelect/use-multi-select-state.ts | components/CustomSelect/ | ts | Multi-select state hook | MEDIUM |
| F0326 | /home/tom/Projects/claude-code/src/components/CustomSelect/use-select-input.ts | components/CustomSelect/ | ts | Select input handling hook | MEDIUM |
| F0327 | /home/tom/Projects/claude-code/src/components/CustomSelect/use-select-navigation.ts | components/CustomSelect/ | ts | Keyboard navigation hook for select | MEDIUM |
| F0328 | /home/tom/Projects/claude-code/src/components/CustomSelect/use-select-state.ts | components/CustomSelect/ | ts | Single-select state hook | MEDIUM |
| F0329 | /home/tom/Projects/claude-code/src/components/design-system/Byline.tsx | components/design-system/ | tsx | Byline text component (author/timestamp display) | LOW |
| F0330 | /home/tom/Projects/claude-code/src/components/design-system/color.ts | components/design-system/ | ts | Design system color palette definitions | HIGH |
| F0331 | /home/tom/Projects/claude-code/src/components/design-system/Dialog.tsx | components/design-system/ | tsx | Modal dialog base component | HIGH |
| F0332 | /home/tom/Projects/claude-code/src/components/design-system/Divider.tsx | components/design-system/ | tsx | Visual divider/separator component | LOW |
| F0333 | /home/tom/Projects/claude-code/src/components/design-system/FuzzyPicker.tsx | components/design-system/ | tsx | Fuzzy-search picker component | HIGH |
| F0334 | /home/tom/Projects/claude-code/src/components/design-system/KeyboardShortcutHint.tsx | components/design-system/ | tsx | Keyboard shortcut hint display | LOW |
| F0335 | /home/tom/Projects/claude-code/src/components/design-system/ListItem.tsx | components/design-system/ | tsx | List item component | LOW |
| F0336 | /home/tom/Projects/claude-code/src/components/design-system/LoadingState.tsx | components/design-system/ | tsx | Loading spinner/state component | LOW |
| F0337 | /home/tom/Projects/claude-code/src/components/design-system/Pane.tsx | components/design-system/ | tsx | Pane/panel layout component | MEDIUM |
| F0338 | /home/tom/Projects/claude-code/src/components/design-system/ProgressBar.tsx | components/design-system/ | tsx | Progress bar component | LOW |
| F0339 | /home/tom/Projects/claude-code/src/components/design-system/Ratchet.tsx | components/design-system/ | tsx | Ratchet/step indicator component | LOW |
| F0340 | /home/tom/Projects/claude-code/src/components/design-system/StatusIcon.tsx | components/design-system/ | tsx | Status icon (ok/warning/error) component | LOW |
| F0341 | /home/tom/Projects/claude-code/src/components/design-system/Tabs.tsx | components/design-system/ | tsx | Tab navigation component | MEDIUM |
| F0342 | /home/tom/Projects/claude-code/src/components/design-system/ThemedBox.tsx | components/design-system/ | tsx | Theme-aware box/container component | MEDIUM |
| F0343 | /home/tom/Projects/claude-code/src/components/design-system/ThemedText.tsx | components/design-system/ | tsx | Theme-aware text component | MEDIUM |
| F0344 | /home/tom/Projects/claude-code/src/components/design-system/ThemeProvider.tsx | components/design-system/ | tsx | Theme context provider for design system | HIGH |
| F0345 | /home/tom/Projects/claude-code/src/components/DesktopHandoff.tsx | components/ | tsx | Handoff prompt to desktop app | MEDIUM |
| F0346 | /home/tom/Projects/claude-code/src/components/DesktopUpsell/DesktopUpsellStartup.tsx | components/DesktopUpsell/ | tsx | Desktop app upsell shown at startup | LOW |
| F0347 | /home/tom/Projects/claude-code/src/components/DevBar.tsx | components/ | tsx | Developer debug bar component | LOW |
| F0348 | /home/tom/Projects/claude-code/src/components/DevChannelsDialog.tsx | components/ | tsx | Developer channel selection dialog | LOW |
| F0349 | /home/tom/Projects/claude-code/src/components/DiagnosticsDisplay.tsx | components/ | tsx | System diagnostics display component | MEDIUM |
| F0350 | /home/tom/Projects/claude-code/src/components/diff/DiffDetailView.tsx | components/diff/ | tsx | Detailed diff view for file changes | MEDIUM |
| F0351 | /home/tom/Projects/claude-code/src/components/diff/DiffDialog.tsx | components/diff/ | tsx | Diff dialog modal | MEDIUM |
| F0352 | /home/tom/Projects/claude-code/src/components/diff/DiffFileList.tsx | components/diff/ | tsx | List of changed files in diff view | MEDIUM |
| F0353 | /home/tom/Projects/claude-code/src/components/EffortCallout.tsx | components/ | tsx | Effort level callout/notice component | LOW |
| F0354 | /home/tom/Projects/claude-code/src/components/EffortIndicator.ts | components/ | ts | Effort indicator logic (thinking budget display) | MEDIUM |
| F0355 | /home/tom/Projects/claude-code/src/components/ExitFlow.tsx | components/ | tsx | Exit confirmation flow component | MEDIUM |
| F0356 | /home/tom/Projects/claude-code/src/components/ExportDialog.tsx | components/ | tsx | Conversation export dialog | MEDIUM |
| F0357 | /home/tom/Projects/claude-code/src/components/FallbackToolUseErrorMessage.tsx | components/ | tsx | Fallback error display for failed tool calls | MEDIUM |
| F0358 | /home/tom/Projects/claude-code/src/components/FallbackToolUseRejectedMessage.tsx | components/ | tsx | Display for user-rejected tool calls | MEDIUM |
| F0359 | /home/tom/Projects/claude-code/src/components/FastIcon.tsx | components/ | tsx | Fast mode icon indicator | LOW |
| F0360 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/FeedbackSurvey.tsx | components/FeedbackSurvey/ | tsx | In-app feedback survey component | MEDIUM |
| F0361 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/FeedbackSurveyView.tsx | components/FeedbackSurvey/ | tsx | Feedback survey view/layout | MEDIUM |
| F0362 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/submitTranscriptShare.ts | components/FeedbackSurvey/ | ts | Submits transcript for feedback sharing | MEDIUM |
| F0363 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/TranscriptSharePrompt.tsx | components/FeedbackSurvey/ | tsx | Transcript sharing prompt dialog | MEDIUM |
| F0364 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/useDebouncedDigitInput.ts | components/FeedbackSurvey/ | ts | Debounced digit input hook for survey ratings | LOW |
| F0365 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/useFeedbackSurvey.tsx | components/FeedbackSurvey/ | tsx | Feedback survey display logic hook | MEDIUM |
| F0366 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/useMemorySurvey.tsx | components/FeedbackSurvey/ | tsx | Memory feature feedback survey hook | MEDIUM |
| F0367 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/usePostCompactSurvey.tsx | components/FeedbackSurvey/ | tsx | Post-compaction feedback survey hook | MEDIUM |
| F0368 | /home/tom/Projects/claude-code/src/components/FeedbackSurvey/useSurveyState.tsx | components/FeedbackSurvey/ | tsx | Survey state management hook | MEDIUM |
| F0369 | /home/tom/Projects/claude-code/src/components/Feedback.tsx | components/ | tsx | General feedback widget component | MEDIUM |
| F0370 | /home/tom/Projects/claude-code/src/components/FileEditToolDiff.tsx | components/ | tsx | Diff display for FileEdit tool results | MEDIUM |
| F0371 | /home/tom/Projects/claude-code/src/components/FileEditToolUpdatedMessage.tsx | components/ | tsx | Success message after file edit | MEDIUM |
| F0372 | /home/tom/Projects/claude-code/src/components/FileEditToolUseRejectedMessage.tsx | components/ | tsx | Rejection message for file edit tool | MEDIUM |
| F0373 | /home/tom/Projects/claude-code/src/components/FilePathLink.tsx | components/ | tsx | Clickable file path link component | MEDIUM |
| F0374 | /home/tom/Projects/claude-code/src/components/FullscreenLayout.tsx | components/ | tsx | Full-screen layout wrapper component | MEDIUM |
| F0375 | /home/tom/Projects/claude-code/src/components/GlobalSearchDialog.tsx | components/ | tsx | Global search across sessions dialog | MEDIUM |
| F0376 | /home/tom/Projects/claude-code/src/components/grove/Grove.tsx | components/grove/ | tsx | Grove (shared session storage) UI component | MEDIUM |
| F0377 | /home/tom/Projects/claude-code/src/components/HelpV2/Commands.tsx | components/HelpV2/ | tsx | Commands reference section of help | MEDIUM |
| F0378 | /home/tom/Projects/claude-code/src/components/HelpV2/General.tsx | components/HelpV2/ | tsx | General help section content | MEDIUM |
| F0379 | /home/tom/Projects/claude-code/src/components/HelpV2/HelpV2.tsx | components/HelpV2/ | tsx | Help V2 root component with tabbed layout | MEDIUM |
| F0380 | /home/tom/Projects/claude-code/src/components/HighlightedCode/Fallback.tsx | components/HighlightedCode/ | tsx | Fallback plain code display without syntax highlighting | LOW |
| F0381 | /home/tom/Projects/claude-code/src/components/HighlightedCode.tsx | components/ | tsx | Syntax-highlighted code block component | HIGH |
| F0382 | /home/tom/Projects/claude-code/src/components/HistorySearchDialog.tsx | components/ | tsx | Conversation history search dialog | MEDIUM |
| F0383 | /home/tom/Projects/claude-code/src/components/hooks/HooksConfigMenu.tsx | components/hooks/ | tsx | Hooks configuration menu UI | HIGH |
| F0384 | /home/tom/Projects/claude-code/src/components/hooks/PromptDialog.tsx | components/hooks/ | tsx | Hook prompt/text entry dialog | MEDIUM |
| F0385 | /home/tom/Projects/claude-code/src/components/hooks/SelectEventMode.tsx | components/hooks/ | tsx | Hook event type selector | MEDIUM |
| F0386 | /home/tom/Projects/claude-code/src/components/hooks/SelectHookMode.tsx | components/hooks/ | tsx | Hook mode (bash/http/agent) selector | MEDIUM |
| F0387 | /home/tom/Projects/claude-code/src/components/hooks/SelectMatcherMode.tsx | components/hooks/ | tsx | Hook tool matcher type selector | MEDIUM |
| F0388 | /home/tom/Projects/claude-code/src/components/hooks/ViewHookMode.tsx | components/hooks/ | tsx | Hook detail view component | MEDIUM |
| F0389 | /home/tom/Projects/claude-code/src/components/IdeAutoConnectDialog.tsx | components/ | tsx | IDE auto-connect configuration dialog | MEDIUM |
| F0390 | /home/tom/Projects/claude-code/src/components/IdeOnboardingDialog.tsx | components/ | tsx | IDE integration first-time setup dialog | MEDIUM |
| F0391 | /home/tom/Projects/claude-code/src/components/IdeStatusIndicator.tsx | components/ | tsx | IDE connection status indicator | MEDIUM |
| F0392 | /home/tom/Projects/claude-code/src/components/IdleReturnDialog.tsx | components/ | tsx | Dialog shown when returning from idle state | MEDIUM |
| F0393 | /home/tom/Projects/claude-code/src/components/InterruptedByUser.tsx | components/ | tsx | Message shown when user interrupts Claude | MEDIUM |
| F0394 | /home/tom/Projects/claude-code/src/components/InvalidConfigDialog.tsx | components/ | tsx | Invalid configuration error dialog | HIGH |
| F0395 | /home/tom/Projects/claude-code/src/components/InvalidSettingsDialog.tsx | components/ | tsx | Invalid settings file error dialog | HIGH |
| F0396 | /home/tom/Projects/claude-code/src/components/KeybindingWarnings.tsx | components/ | tsx | Keybinding conflict warning display | MEDIUM |
| F0397 | /home/tom/Projects/claude-code/src/components/LanguagePicker.tsx | components/ | tsx | Language/locale selection component | LOW |
| F0398 | /home/tom/Projects/claude-code/src/components/LogoV2/AnimatedAsterisk.tsx | components/LogoV2/ | tsx | Animated asterisk logo animation | LOW |
| F0399 | /home/tom/Projects/claude-code/src/components/LogoV2/AnimatedClawd.tsx | components/LogoV2/ | tsx | Animated Claude logo character | LOW |
| F0400 | /home/tom/Projects/claude-code/src/components/LogoV2/ChannelsNotice.tsx | components/LogoV2/ | tsx | Subscription channel notice in logo area | LOW |
| F0401 | /home/tom/Projects/claude-code/src/components/LogoV2/Clawd.tsx | components/LogoV2/ | tsx | Claude logo character component | LOW |
| F0402 | /home/tom/Projects/claude-code/src/components/LogoV2/CondensedLogo.tsx | components/LogoV2/ | tsx | Condensed logo for narrow terminals | LOW |
| F0403 | /home/tom/Projects/claude-code/src/components/LogoV2/EmergencyTip.tsx | components/LogoV2/ | tsx | Emergency/critical tip display in logo area | LOW |
| F0404 | /home/tom/Projects/claude-code/src/components/LogoV2/FeedColumn.tsx | components/LogoV2/ | tsx | Feed column layout in logo area | LOW |
| F0405 | /home/tom/Projects/claude-code/src/components/LogoV2/feedConfigs.tsx | components/LogoV2/ | tsx | Feed configuration definitions | LOW |
| F0406 | /home/tom/Projects/claude-code/src/components/LogoV2/Feed.tsx | components/LogoV2/ | tsx | News/tip feed in logo area | MEDIUM |
| F0407 | /home/tom/Projects/claude-code/src/components/LogoV2/GuestPassesUpsell.tsx | components/LogoV2/ | tsx | Guest passes upsell in logo area | LOW |
| F0408 | /home/tom/Projects/claude-code/src/components/LogoV2/LogoV2.tsx | components/LogoV2/ | tsx | Logo V2 root component | MEDIUM |
| F0409 | /home/tom/Projects/claude-code/src/components/LogoV2/Opus1mMergeNotice.tsx | components/LogoV2/ | tsx | Opus 1M model merge notice | LOW |
| F0410 | /home/tom/Projects/claude-code/src/components/LogoV2/OverageCreditUpsell.tsx | components/LogoV2/ | tsx | Overage credit upsell notice | LOW |
| F0411 | /home/tom/Projects/claude-code/src/components/LogoV2/VoiceModeNotice.tsx | components/LogoV2/ | tsx | Voice mode availability notice | LOW |
| F0412 | /home/tom/Projects/claude-code/src/components/LogoV2/WelcomeV2.tsx | components/LogoV2/ | tsx | Welcome screen V2 component | MEDIUM |
| F0413 | /home/tom/Projects/claude-code/src/components/LogSelector.tsx | components/ | tsx | Log file selector component | MEDIUM |
| F0414 | /home/tom/Projects/claude-code/src/components/LspRecommendation/LspRecommendationMenu.tsx | components/LspRecommendation/ | tsx | LSP plugin recommendation menu | MEDIUM |
| F0415 | /home/tom/Projects/claude-code/src/components/ManagedSettingsSecurityDialog/ManagedSettingsSecurityDialog.tsx | components/ManagedSettingsSecurityDialog/ | tsx | MDM/managed settings security warning dialog | HIGH |
| F0416 | /home/tom/Projects/claude-code/src/components/ManagedSettingsSecurityDialog/utils.ts | components/ManagedSettingsSecurityDialog/ | ts | Utilities for managed settings security dialog | MEDIUM |
| F0417 | /home/tom/Projects/claude-code/src/components/MarkdownTable.tsx | components/ | tsx | Markdown table rendering component | MEDIUM |
| F0418 | /home/tom/Projects/claude-code/src/components/Markdown.tsx | components/ | tsx | Markdown rendering component | HIGH |
| F0419 | /home/tom/Projects/claude-code/src/components/mcp/CapabilitiesSection.tsx | components/mcp/ | tsx | MCP server capabilities display section | MEDIUM |
| F0420 | /home/tom/Projects/claude-code/src/components/mcp/ElicitationDialog.tsx | components/mcp/ | tsx | MCP elicitation (user-input request) dialog | HIGH |
| F0421 | /home/tom/Projects/claude-code/src/components/mcp/index.ts | components/mcp/ | ts | MCP component exports | LOW |
| F0422 | /home/tom/Projects/claude-code/src/components/mcp/MCPAgentServerMenu.tsx | components/mcp/ | tsx | MCP agent server management menu | HIGH |
| F0423 | /home/tom/Projects/claude-code/src/components/mcp/MCPListPanel.tsx | components/mcp/ | tsx | MCP server list panel component | MEDIUM |
| F0424 | /home/tom/Projects/claude-code/src/components/mcp/McpParsingWarnings.tsx | components/mcp/ | tsx | MCP config parsing warning display | MEDIUM |
| F0425 | /home/tom/Projects/claude-code/src/components/mcp/MCPReconnect.tsx | components/mcp/ | tsx | MCP reconnection UI | MEDIUM |
| F0426 | /home/tom/Projects/claude-code/src/components/mcp/MCPRemoteServerMenu.tsx | components/mcp/ | tsx | MCP remote server management menu | HIGH |
| F0427 | /home/tom/Projects/claude-code/src/components/mcp/MCPSettings.tsx | components/mcp/ | tsx | MCP settings configuration component | HIGH |
| F0428 | /home/tom/Projects/claude-code/src/components/mcp/MCPStdioServerMenu.tsx | components/mcp/ | tsx | MCP stdio server management menu | HIGH |
| F0429 | /home/tom/Projects/claude-code/src/components/mcp/MCPToolDetailView.tsx | components/mcp/ | tsx | MCP tool detail/info view | MEDIUM |
| F0430 | /home/tom/Projects/claude-code/src/components/mcp/MCPToolListView.tsx | components/mcp/ | tsx | MCP tool list view | MEDIUM |
| F0431 | /home/tom/Projects/claude-code/src/components/MCPServerApprovalDialog.tsx | components/ | tsx | MCP server trust/approval dialog | HIGH |
| F0432 | /home/tom/Projects/claude-code/src/components/MCPServerDesktopImportDialog.tsx | components/ | tsx | MCP server import from desktop app dialog | MEDIUM |
| F0433 | /home/tom/Projects/claude-code/src/components/MCPServerDialogCopy.tsx | components/ | tsx | MCP server dialog copy/text content | MEDIUM |
| F0434 | /home/tom/Projects/claude-code/src/components/MCPServerMultiselectDialog.tsx | components/ | tsx | Multi-select MCP server selection dialog | HIGH |
| F0435 | /home/tom/Projects/claude-code/src/components/mcp/utils/reconnectHelpers.tsx | components/mcp/utils/ | tsx | MCP reconnection helper utilities | MEDIUM |
| F0436 | /home/tom/Projects/claude-code/src/components/memory/MemoryFileSelector.tsx | components/memory/ | tsx | Memory file selection component | MEDIUM |
| F0437 | /home/tom/Projects/claude-code/src/components/memory/MemoryUpdateNotification.tsx | components/memory/ | tsx | Memory update notification display | MEDIUM |
| F0438 | /home/tom/Projects/claude-code/src/components/MemoryUsageIndicator.tsx | components/ | tsx | Memory/context usage indicator bar | MEDIUM |
| F0439 | /home/tom/Projects/claude-code/src/components/messageActions.tsx | components/ | tsx | Message action buttons (copy, etc.) | MEDIUM |
| F0440 | /home/tom/Projects/claude-code/src/components/MessageModel.tsx | components/ | tsx | Message model attribution display | LOW |
| F0441 | /home/tom/Projects/claude-code/src/components/MessageResponse.tsx | components/ | tsx | Assistant message response wrapper | HIGH |
| F0442 | /home/tom/Projects/claude-code/src/components/MessageRow.tsx | components/ | tsx | Single message row in conversation | HIGH |
| F0443 | /home/tom/Projects/claude-code/src/components/messages/AdvisorMessage.tsx | components/messages/ | tsx | Advisor system message display | MEDIUM |
| F0444 | /home/tom/Projects/claude-code/src/components/messages/AssistantRedactedThinkingMessage.tsx | components/messages/ | tsx | Redacted/hidden thinking block display | MEDIUM |
| F0445 | /home/tom/Projects/claude-code/src/components/messages/AssistantTextMessage.tsx | components/messages/ | tsx | Assistant text message display | HIGH |
| F0446 | /home/tom/Projects/claude-code/src/components/messages/AssistantThinkingMessage.tsx | components/messages/ | tsx | Claude extended thinking display | MEDIUM |
| F0447 | /home/tom/Projects/claude-code/src/components/messages/AssistantToolUseMessage.tsx | components/messages/ | tsx | Tool call display in assistant messages | HIGH |
| F0448 | /home/tom/Projects/claude-code/src/components/messages/AttachmentMessage.tsx | components/messages/ | tsx | File/image attachment message display | MEDIUM |
| F0449 | /home/tom/Projects/claude-code/src/components/messages/CollapsedReadSearchContent.tsx | components/messages/ | tsx | Collapsed read/search tool result display | MEDIUM |
| F0450 | /home/tom/Projects/claude-code/src/components/messages/CompactBoundaryMessage.tsx | components/messages/ | tsx | Compact boundary marker in conversation | MEDIUM |
| F0451 | /home/tom/Projects/claude-code/src/components/MessageSelector.tsx | components/ | tsx | Message selection for copy/export | MEDIUM |
| F0452 | /home/tom/Projects/claude-code/src/components/messages/GroupedToolUseContent.tsx | components/messages/ | tsx | Grouped tool calls display | MEDIUM |
| F0453 | /home/tom/Projects/claude-code/src/components/messages/HighlightedThinkingText.tsx | components/messages/ | tsx | Highlighted thinking text display | MEDIUM |
| F0454 | /home/tom/Projects/claude-code/src/components/messages/HookProgressMessage.tsx | components/messages/ | tsx | Hook execution progress message | MEDIUM |
| F0455 | /home/tom/Projects/claude-code/src/components/messages/nullRenderingAttachments.ts | components/messages/ | ts | Null renderer for non-displayable attachments | LOW |
| F0456 | /home/tom/Projects/claude-code/src/components/messages/PlanApprovalMessage.tsx | components/messages/ | tsx | Plan mode approval request message | HIGH |
| F0457 | /home/tom/Projects/claude-code/src/components/messages/RateLimitMessage.tsx | components/messages/ | tsx | Rate limit notice message display | MEDIUM |
| F0458 | /home/tom/Projects/claude-code/src/components/messages/ShutdownMessage.tsx | components/messages/ | tsx | Session shutdown message display | MEDIUM |
| F0459 | /home/tom/Projects/claude-code/src/components/messages/SystemAPIErrorMessage.tsx | components/messages/ | tsx | System/API error message display | MEDIUM |
| F0460 | /home/tom/Projects/claude-code/src/components/messages/SystemTextMessage.tsx | components/messages/ | tsx | System text message display | MEDIUM |
| F0461 | /home/tom/Projects/claude-code/src/components/messages/TaskAssignmentMessage.tsx | components/messages/ | tsx | Task assignment notification message | MEDIUM |
| F0462 | /home/tom/Projects/claude-code/src/components/messages/teamMemCollapsed.tsx | components/messages/ | tsx | Collapsed team memory message display | MEDIUM |
| F0463 | /home/tom/Projects/claude-code/src/components/messages/teamMemSaved.ts | components/messages/ | ts | Team memory save notification | MEDIUM |
| F0464 | /home/tom/Projects/claude-code/src/components/Messages.tsx | components/ | tsx | Conversation messages list component | CRITICAL |
| F0465 | /home/tom/Projects/claude-code/src/components/messages/UserAgentNotificationMessage.tsx | components/messages/ | tsx | User/agent notification message display | MEDIUM |
| F0466 | /home/tom/Projects/claude-code/src/components/messages/UserBashInputMessage.tsx | components/messages/ | tsx | User bash command input message display | MEDIUM |
| F0467 | /home/tom/Projects/claude-code/src/components/messages/UserBashOutputMessage.tsx | components/messages/ | tsx | Bash command output message display | MEDIUM |
| F0468 | /home/tom/Projects/claude-code/src/components/messages/UserChannelMessage.tsx | components/messages/ | tsx | User channel/bridge message display | MEDIUM |
| F0469 | /home/tom/Projects/claude-code/src/components/messages/UserCommandMessage.tsx | components/messages/ | tsx | User slash command message display | MEDIUM |
| F0470 | /home/tom/Projects/claude-code/src/components/messages/UserImageMessage.tsx | components/messages/ | tsx | User image attachment message display | MEDIUM |
| F0471 | /home/tom/Projects/claude-code/src/components/messages/UserLocalCommandOutputMessage.tsx | components/messages/ | tsx | Local command output message display | MEDIUM |
| F0472 | /home/tom/Projects/claude-code/src/components/messages/UserMemoryInputMessage.tsx | components/messages/ | tsx | User memory injection message display | MEDIUM |
| F0473 | /home/tom/Projects/claude-code/src/components/messages/UserPlanMessage.tsx | components/messages/ | tsx | User plan mode input message display | MEDIUM |
| F0474 | /home/tom/Projects/claude-code/src/components/messages/UserPromptMessage.tsx | components/messages/ | tsx | User text prompt message display | HIGH |
| F0475 | /home/tom/Projects/claude-code/src/components/messages/UserResourceUpdateMessage.tsx | components/messages/ | tsx | User resource update notification message | MEDIUM |
| F0476 | /home/tom/Projects/claude-code/src/components/messages/UserTeammateMessage.tsx | components/messages/ | tsx | Teammate/swarm member message display | MEDIUM |
| F0477 | /home/tom/Projects/claude-code/src/components/messages/UserTextMessage.tsx | components/messages/ | tsx | User text message display | HIGH |
| F0478 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/RejectedPlanMessage.tsx | components/messages/ | tsx | Rejected plan message display | MEDIUM |
| F0479 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/RejectedToolUseMessage.tsx | components/messages/ | tsx | Rejected tool use message display | MEDIUM |
| F0480 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/UserToolCanceledMessage.tsx | components/messages/ | tsx | Tool cancellation message display | MEDIUM |
| F0481 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/UserToolErrorMessage.tsx | components/messages/ | tsx | Tool error result message display | MEDIUM |
| F0482 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/UserToolRejectMessage.tsx | components/messages/ | tsx | Tool rejection result message display | MEDIUM |
| F0483 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/UserToolResultMessage.tsx | components/messages/ | tsx | Tool result message router component | HIGH |
| F0484 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/UserToolSuccessMessage.tsx | components/messages/ | tsx | Tool success result message display | MEDIUM |
| F0485 | /home/tom/Projects/claude-code/src/components/messages/UserToolResultMessage/utils.tsx | components/messages/ | tsx | Tool result message display utilities | MEDIUM |
| F0486 | /home/tom/Projects/claude-code/src/components/MessageTimestamp.tsx | components/ | tsx | Message timestamp display component | LOW |
| F0487 | /home/tom/Projects/claude-code/src/components/Message.tsx | components/ | tsx | Message routing/dispatch component | CRITICAL |
| F0488 | /home/tom/Projects/claude-code/src/components/ModelPicker.tsx | components/ | tsx | Model picker/selector component | HIGH |
| F0489 | /home/tom/Projects/claude-code/src/components/NativeAutoUpdater.tsx | components/ | tsx | Native binary auto-updater component | MEDIUM |
| F0490 | /home/tom/Projects/claude-code/src/components/NotebookEditToolUseRejectedMessage.tsx | components/ | tsx | Notebook edit tool rejection message | MEDIUM |
| F0491 | /home/tom/Projects/claude-code/src/components/OffscreenFreeze.tsx | components/ | tsx | Offscreen content freeze for performance | MEDIUM |
| F0492 | /home/tom/Projects/claude-code/src/components/Onboarding.tsx | components/ | tsx | First-run onboarding flow component | HIGH |
| F0493 | /home/tom/Projects/claude-code/src/components/OutputStylePicker.tsx | components/ | tsx | Output style picker component | MEDIUM |
| F0494 | /home/tom/Projects/claude-code/src/components/PackageManagerAutoUpdater.tsx | components/ | tsx | Package manager (npm/brew) auto-updater | MEDIUM |
| F0495 | /home/tom/Projects/claude-code/src/components/Passes/Passes.tsx | components/Passes/ | tsx | Guest passes display/management component | MEDIUM |
| F0496 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx | components/permissions/ | tsx | Permission request for AskUserQuestion tool | HIGH |
| F0497 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/PreviewBox.tsx | components/permissions/ | tsx | Preview box for question approval | MEDIUM |
| F0498 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/PreviewQuestionView.tsx | components/permissions/ | tsx | Preview view for question approval | MEDIUM |
| F0499 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/QuestionNavigationBar.tsx | components/permissions/ | tsx | Navigation bar for multi-question review | MEDIUM |
| F0500 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/QuestionView.tsx | components/permissions/ | tsx | Individual question display in approval flow | MEDIUM |
| F0501 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/SubmitQuestionsView.tsx | components/permissions/ | tsx | Submit questions confirmation view | MEDIUM |
| F0502 | /home/tom/Projects/claude-code/src/components/permissions/AskUserQuestionPermissionRequest/use-multiple-choice-state.ts | components/permissions/ | ts | Multiple-choice state hook for question tool | MEDIUM |
| F0503 | /home/tom/Projects/claude-code/src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx | components/permissions/ | tsx | Bash command permission approval component | CRITICAL |
| F0504 | /home/tom/Projects/claude-code/src/components/permissions/BashPermissionRequest/bashToolUseOptions.tsx | components/permissions/ | tsx | Bash tool permission option buttons | HIGH |
| F0505 | /home/tom/Projects/claude-code/src/components/permissions/ComputerUseApproval/ComputerUseApproval.tsx | components/permissions/ | tsx | Computer use permission approval component | HIGH |
| F0506 | /home/tom/Projects/claude-code/src/components/permissions/EnterPlanModePermissionRequest/EnterPlanModePermissionRequest.tsx | components/permissions/ | tsx | Plan mode entry permission component | HIGH |
| F0507 | /home/tom/Projects/claude-code/src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx | components/permissions/ | tsx | Plan mode exit permission component | HIGH |
| F0508 | /home/tom/Projects/claude-code/src/components/permissions/FallbackPermissionRequest.tsx | components/permissions/ | tsx | Generic fallback permission request UI | HIGH |
| F0509 | /home/tom/Projects/claude-code/src/components/permissions/FileEditPermissionRequest/FileEditPermissionRequest.tsx | components/permissions/ | tsx | File edit permission approval component | CRITICAL |
| F0510 | /home/tom/Projects/claude-code/src/components/permissions/FilePermissionDialog/FilePermissionDialog.tsx | components/permissions/ | tsx | File permission dialog (IDE integration) | HIGH |
| F0511 | /home/tom/Projects/claude-code/src/components/permissions/FilePermissionDialog/ideDiffConfig.ts | components/permissions/ | ts | IDE diff config for file permission dialog | MEDIUM |
| F0512 | /home/tom/Projects/claude-code/src/components/permissions/FilePermissionDialog/permissionOptions.tsx | components/permissions/ | tsx | Permission option buttons for file dialog | HIGH |
| F0513 | /home/tom/Projects/claude-code/src/components/permissions/FilePermissionDialog/useFilePermissionDialog.ts | components/permissions/ | ts | File permission dialog logic hook | HIGH |
| F0514 | /home/tom/Projects/claude-code/src/components/permissions/FilePermissionDialog/usePermissionHandler.ts | components/permissions/ | ts | Permission handling hook for file dialog | HIGH |
| F0515 | /home/tom/Projects/claude-code/src/components/permissions/FilesystemPermissionRequest/FilesystemPermissionRequest.tsx | components/permissions/ | tsx | Filesystem access permission component | HIGH |
| F0516 | /home/tom/Projects/claude-code/src/components/permissions/FileWritePermissionRequest/FileWritePermissionRequest.tsx | components/permissions/ | tsx | File write permission approval component | CRITICAL |
| F0517 | /home/tom/Projects/claude-code/src/components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx | components/permissions/ | tsx | Diff display in file write permission | HIGH |
| F0518 | /home/tom/Projects/claude-code/src/components/permissions/hooks.ts | components/permissions/ | ts | Shared hooks for permission components | HIGH |
| F0519 | /home/tom/Projects/claude-code/src/components/permissions/NotebookEditPermissionRequest/NotebookEditPermissionRequest.tsx | components/permissions/ | tsx | Jupyter notebook edit permission component | HIGH |
| F0520 | /home/tom/Projects/claude-code/src/components/permissions/NotebookEditPermissionRequest/NotebookEditToolDiff.tsx | components/permissions/ | tsx | Diff display in notebook edit permission | MEDIUM |
| F0521 | /home/tom/Projects/claude-code/src/components/permissions/PermissionDecisionDebugInfo.tsx | components/permissions/ | tsx | Debug info display for permission decisions | LOW |
| F0522 | /home/tom/Projects/claude-code/src/components/permissions/PermissionDialog.tsx | components/permissions/ | tsx | Generic permission dialog wrapper | HIGH |
| F0523 | /home/tom/Projects/claude-code/src/components/permissions/PermissionExplanation.tsx | components/permissions/ | tsx | Permission rule explanation display | MEDIUM |
| F0524 | /home/tom/Projects/claude-code/src/components/permissions/PermissionPrompt.tsx | components/permissions/ | tsx | Permission prompt container component | CRITICAL |
| F0525 | /home/tom/Projects/claude-code/src/components/permissions/PermissionRequestTitle.tsx | components/permissions/ | tsx | Permission request title bar component | MEDIUM |
| F0526 | /home/tom/Projects/claude-code/src/components/permissions/PermissionRequest.tsx | components/permissions/ | tsx | Permission request router component | CRITICAL |
| F0527 | /home/tom/Projects/claude-code/src/components/permissions/PermissionRuleExplanation.tsx | components/permissions/ | tsx | Explanation of applicable permission rule | MEDIUM |
| F0528 | /home/tom/Projects/claude-code/src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx | components/permissions/ | tsx | PowerShell command permission component | HIGH |
| F0529 | /home/tom/Projects/claude-code/src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx | components/permissions/ | tsx | PowerShell tool permission options | HIGH |
| F0530 | /home/tom/Projects/claude-code/src/components/permissions/rules/AddPermissionRules.tsx | components/permissions/rules/ | tsx | UI for adding permission rules | HIGH |
| F0531 | /home/tom/Projects/claude-code/src/components/permissions/rules/AddWorkspaceDirectory.tsx | components/permissions/rules/ | tsx | UI for adding trusted workspace directories | HIGH |
| F0532 | /home/tom/Projects/claude-code/src/components/permissions/rules/PermissionRuleDescription.tsx | components/permissions/rules/ | tsx | Permission rule description display | MEDIUM |
| F0533 | /home/tom/Projects/claude-code/src/components/permissions/rules/PermissionRuleInput.tsx | components/permissions/rules/ | tsx | Permission rule text input component | HIGH |
| F0534 | /home/tom/Projects/claude-code/src/components/permissions/rules/PermissionRuleList.tsx | components/permissions/rules/ | tsx | Permission rules list management UI | HIGH |
| F0535 | /home/tom/Projects/claude-code/src/components/permissions/rules/RecentDenialsTab.tsx | components/permissions/rules/ | tsx | Recent permission denials tab | MEDIUM |
| F0536 | /home/tom/Projects/claude-code/src/components/permissions/rules/RemoveWorkspaceDirectory.tsx | components/permissions/rules/ | tsx | UI for removing trusted workspace directories | HIGH |
| F0537 | /home/tom/Projects/claude-code/src/components/permissions/rules/WorkspaceTab.tsx | components/permissions/rules/ | tsx | Workspace directories tab in permissions UI | HIGH |
| F0538 | /home/tom/Projects/claude-code/src/components/permissions/SandboxPermissionRequest.tsx | components/permissions/ | tsx | Sandbox violation permission request component | HIGH |
| F0539 | /home/tom/Projects/claude-code/src/components/permissions/SedEditPermissionRequest/SedEditPermissionRequest.tsx | components/permissions/ | tsx | Sed edit command permission component | HIGH |
| F0540 | /home/tom/Projects/claude-code/src/components/permissions/shellPermissionHelpers.tsx | components/permissions/ | tsx | Shared helpers for shell permission displays | HIGH |
| F0541 | /home/tom/Projects/claude-code/src/components/permissions/SkillPermissionRequest/SkillPermissionRequest.tsx | components/permissions/ | tsx | Skill invocation permission component | HIGH |
| F0542 | /home/tom/Projects/claude-code/src/components/permissions/useShellPermissionFeedback.ts | components/permissions/ | ts | Shell permission user feedback hook | HIGH |
| F0543 | /home/tom/Projects/claude-code/src/components/permissions/utils.ts | components/permissions/ | ts | Shared utilities for permission components | HIGH |
| F0544 | /home/tom/Projects/claude-code/src/components/permissions/WebFetchPermissionRequest/WebFetchPermissionRequest.tsx | components/permissions/ | tsx | Web fetch permission approval component | HIGH |
| F0545 | /home/tom/Projects/claude-code/src/components/permissions/WorkerBadge.tsx | components/permissions/ | tsx | Swarm worker identity badge display | MEDIUM |
| F0546 | /home/tom/Projects/claude-code/src/components/permissions/WorkerPendingPermission.tsx | components/permissions/ | tsx | Worker pending permission display | MEDIUM |
| F0547 | /home/tom/Projects/claude-code/src/components/PrBadge.tsx | components/ | tsx | PR status badge display component | MEDIUM |
| F0548 | /home/tom/Projects/claude-code/src/components/PressEnterToContinue.tsx | components/ | tsx | Press-enter-to-continue prompt | LOW |
| F0549 | /home/tom/Projects/claude-code/src/components/PromptInput/HistorySearchInput.tsx | components/PromptInput/ | tsx | History search input component | MEDIUM |
| F0550 | /home/tom/Projects/claude-code/src/components/PromptInput/inputModes.ts | components/PromptInput/ | ts | Input mode definitions (normal/vim/etc) | HIGH |
| F0551 | /home/tom/Projects/claude-code/src/components/PromptInput/inputPaste.ts | components/PromptInput/ | ts | Paste handling logic for prompt input | HIGH |
| F0552 | /home/tom/Projects/claude-code/src/components/PromptInput/IssueFlagBanner.tsx | components/PromptInput/ | tsx | Issue flag/warning banner in prompt area | MEDIUM |
| F0553 | /home/tom/Projects/claude-code/src/components/PromptInput/Notifications.tsx | components/PromptInput/ | tsx | In-prompt notification display | MEDIUM |
| F0554 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputFooterLeftSide.tsx | components/PromptInput/ | tsx | Left side of prompt footer (mode indicator) | MEDIUM |
| F0555 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputFooterSuggestions.tsx | components/PromptInput/ | tsx | Suggestion display in prompt footer | HIGH |
| F0556 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputFooter.tsx | components/PromptInput/ | tsx | Prompt input footer layout component | HIGH |
| F0557 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputHelpMenu.tsx | components/PromptInput/ | tsx | Help menu triggered from prompt area | MEDIUM |
| F0558 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputModeIndicator.tsx | components/PromptInput/ | tsx | Current input mode indicator | MEDIUM |
| F0559 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputQueuedCommands.tsx | components/PromptInput/ | tsx | Queued commands display in prompt area | MEDIUM |
| F0560 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInputStashNotice.tsx | components/PromptInput/ | tsx | Stashed input notice in prompt area | MEDIUM |
| F0561 | /home/tom/Projects/claude-code/src/components/PromptInput/PromptInput.tsx | components/PromptInput/ | tsx | Main prompt input component | CRITICAL |
| F0562 | /home/tom/Projects/claude-code/src/components/PromptInput/SandboxPromptFooterHint.tsx | components/PromptInput/ | tsx | Sandbox mode hint in prompt footer | MEDIUM |
| F0563 | /home/tom/Projects/claude-code/src/components/PromptInput/ShimmeredInput.tsx | components/PromptInput/ | tsx | Shimmering loading state for prompt input | MEDIUM |
| F0564 | /home/tom/Projects/claude-code/src/components/PromptInput/useMaybeTruncateInput.ts | components/PromptInput/ | ts | Truncation logic for long inputs | MEDIUM |
| F0565 | /home/tom/Projects/claude-code/src/components/PromptInput/usePromptInputPlaceholder.ts | components/PromptInput/ | ts | Dynamic placeholder text hook | MEDIUM |
| F0566 | /home/tom/Projects/claude-code/src/components/PromptInput/useShowFastIconHint.ts | components/PromptInput/ | ts | Logic for showing fast mode icon hint | LOW |
| F0567 | /home/tom/Projects/claude-code/src/components/PromptInput/useSwarmBanner.ts | components/PromptInput/ | ts | Swarm mode banner display hook | MEDIUM |
| F0568 | /home/tom/Projects/claude-code/src/components/PromptInput/utils.ts | components/PromptInput/ | ts | Prompt input utility functions | MEDIUM |
| F0569 | /home/tom/Projects/claude-code/src/components/PromptInput/VoiceIndicator.tsx | components/PromptInput/ | tsx | Voice recording indicator in prompt | MEDIUM |
| F0570 | /home/tom/Projects/claude-code/src/components/QuickOpenDialog.tsx | components/ | tsx | Quick file/session open dialog | HIGH |
| F0571 | /home/tom/Projects/claude-code/src/components/RemoteCallout.tsx | components/ | tsx | Remote session notice/callout | MEDIUM |
| F0572 | /home/tom/Projects/claude-code/src/components/RemoteEnvironmentDialog.tsx | components/ | tsx | Remote environment configuration dialog | MEDIUM |
| F0573 | /home/tom/Projects/claude-code/src/components/ResumeTask.tsx | components/ | tsx | Resume/restore task progress component | MEDIUM |
| F0574 | /home/tom/Projects/claude-code/src/components/sandbox/SandboxConfigTab.tsx | components/sandbox/ | tsx | Sandbox configuration tab UI | HIGH |
| F0575 | /home/tom/Projects/claude-code/src/components/sandbox/SandboxDependenciesTab.tsx | components/sandbox/ | tsx | Sandbox dependencies tab UI | MEDIUM |
| F0576 | /home/tom/Projects/claude-code/src/components/sandbox/SandboxDoctorSection.tsx | components/sandbox/ | tsx | Sandbox diagnostics section | MEDIUM |
| F0577 | /home/tom/Projects/claude-code/src/components/sandbox/SandboxOverridesTab.tsx | components/sandbox/ | tsx | Sandbox overrides configuration tab | MEDIUM |
| F0578 | /home/tom/Projects/claude-code/src/components/sandbox/SandboxSettings.tsx | components/sandbox/ | tsx | Sandbox settings root component | HIGH |
| F0579 | /home/tom/Projects/claude-code/src/components/SandboxViolationExpandedView.tsx | components/ | tsx | Expanded view of sandbox policy violations | HIGH |
| F0580 | /home/tom/Projects/claude-code/src/components/ScrollKeybindingHandler.tsx | components/ | tsx | Scroll keybinding event handler | MEDIUM |
| F0581 | /home/tom/Projects/claude-code/src/components/SearchBox.tsx | components/ | tsx | Generic search box component | MEDIUM |
| F0582 | /home/tom/Projects/claude-code/src/components/SentryErrorBoundary.ts | components/ | ts | Sentry error boundary for crash reporting | MEDIUM |
| F0583 | /home/tom/Projects/claude-code/src/components/SessionBackgroundHint.tsx | components/ | tsx | Session backgrounding hint message | LOW |
| F0584 | /home/tom/Projects/claude-code/src/components/SessionPreview.tsx | components/ | tsx | Session preview card component | MEDIUM |
| F0585 | /home/tom/Projects/claude-code/src/components/Settings/Config.tsx | components/Settings/ | tsx | Settings config display tab | HIGH |
| F0586 | /home/tom/Projects/claude-code/src/components/Settings/Settings.tsx | components/Settings/ | tsx | Settings root/container component | HIGH |
| F0587 | /home/tom/Projects/claude-code/src/components/Settings/Status.tsx | components/Settings/ | tsx | Settings status display tab | MEDIUM |
| F0588 | /home/tom/Projects/claude-code/src/components/Settings/Usage.tsx | components/Settings/ | tsx | Settings usage display tab | MEDIUM |
| F0589 | /home/tom/Projects/claude-code/src/components/shell/ExpandShellOutputContext.tsx | components/shell/ | tsx | Shell output expansion context provider | MEDIUM |
| F0590 | /home/tom/Projects/claude-code/src/components/shell/OutputLine.tsx | components/shell/ | tsx | Single line of shell output | MEDIUM |
| F0591 | /home/tom/Projects/claude-code/src/components/shell/ShellProgressMessage.tsx | components/shell/ | tsx | Shell command progress message | MEDIUM |
| F0592 | /home/tom/Projects/claude-code/src/components/shell/ShellTimeDisplay.tsx | components/shell/ | tsx | Shell command elapsed time display | LOW |
| F0593 | /home/tom/Projects/claude-code/src/components/ShowInIDEPrompt.tsx | components/ | tsx | Prompt to view diff in IDE | MEDIUM |
| F0594 | /home/tom/Projects/claude-code/src/components/SkillImprovementSurvey.tsx | components/ | tsx | Skill improvement feedback survey | MEDIUM |
| F0595 | /home/tom/Projects/claude-code/src/components/skills/SkillsMenu.tsx | components/skills/ | tsx | Skills browser/management menu | HIGH |
| F0596 | /home/tom/Projects/claude-code/src/components/Spinner/FlashingChar.tsx | components/Spinner/ | tsx | Flashing character animation component | LOW |
| F0597 | /home/tom/Projects/claude-code/src/components/Spinner/GlimmerMessage.tsx | components/Spinner/ | tsx | Glimmer/shimmer loading message | LOW |
| F0598 | /home/tom/Projects/claude-code/src/components/Spinner/index.ts | components/Spinner/ | ts | Spinner component exports | LOW |
| F0599 | /home/tom/Projects/claude-code/src/components/Spinner/ShimmerChar.tsx | components/Spinner/ | tsx | Shimmer character animation | LOW |
| F0600 | /home/tom/Projects/claude-code/src/components/Spinner/SpinnerAnimationRow.tsx | components/Spinner/ | tsx | Spinner animation row component | LOW |
| F0601 | /home/tom/Projects/claude-code/src/components/Spinner/SpinnerGlyph.tsx | components/Spinner/ | tsx | Spinner glyph animation component | LOW |
| F0602 | /home/tom/Projects/claude-code/src/components/Spinner/teammateSelectHint.ts | components/Spinner/ | ts | Teammate selection hint logic for spinner | LOW |
| F0603 | /home/tom/Projects/claude-code/src/components/Spinner/TeammateSpinnerLine.tsx | components/Spinner/ | tsx | Teammate/swarm member spinner line | MEDIUM |
| F0604 | /home/tom/Projects/claude-code/src/components/Spinner/TeammateSpinnerTree.tsx | components/Spinner/ | tsx | Swarm team spinner tree view | MEDIUM |
| F0605 | /home/tom/Projects/claude-code/src/components/Spinner.tsx | components/ | tsx | Main spinner/loading indicator component | HIGH |
| F0606 | /home/tom/Projects/claude-code/src/components/Spinner/useShimmerAnimation.ts | components/Spinner/ | ts | Shimmer animation state hook | LOW |
| F0607 | /home/tom/Projects/claude-code/src/components/Spinner/useStalledAnimation.ts | components/Spinner/ | ts | Stalled/slow animation state hook | LOW |
| F0608 | /home/tom/Projects/claude-code/src/components/Spinner/utils.ts | components/Spinner/ | ts | Spinner utility functions | LOW |
| F0609 | /home/tom/Projects/claude-code/src/components/Stats.tsx | components/ | tsx | Session statistics display component | MEDIUM |
| F0610 | /home/tom/Projects/claude-code/src/components/StatusLine.tsx | components/ | tsx | Status line display at bottom of screen | HIGH |
| F0611 | /home/tom/Projects/claude-code/src/components/StatusNotices.tsx | components/ | tsx | Status notice banners/toasts | MEDIUM |
| F0612 | /home/tom/Projects/claude-code/src/components/StructuredDiff/colorDiff.ts | components/StructuredDiff/ | ts | Color diff computation for structured diffs | MEDIUM |
| F0613 | /home/tom/Projects/claude-code/src/components/StructuredDiff/Fallback.tsx | components/StructuredDiff/ | tsx | Fallback plain diff when structured fails | LOW |
| F0614 | /home/tom/Projects/claude-code/src/components/StructuredDiffList.tsx | components/ | tsx | List of structured diffs for a file | MEDIUM |
| F0615 | /home/tom/Projects/claude-code/src/components/StructuredDiff.tsx | components/ | tsx | Structured diff display component | HIGH |
| F0616 | /home/tom/Projects/claude-code/src/components/TagTabs.tsx | components/ | tsx | Tag-based tab navigation component | MEDIUM |
| F0617 | /home/tom/Projects/claude-code/src/components/TaskListV2.tsx | components/ | tsx | Task list V2 display component | HIGH |
| F0618 | /home/tom/Projects/claude-code/src/components/tasks/AsyncAgentDetailDialog.tsx | components/tasks/ | tsx | Async agent task detail dialog | MEDIUM |
| F0619 | /home/tom/Projects/claude-code/src/components/tasks/BackgroundTasksDialog.tsx | components/tasks/ | tsx | Background tasks management dialog | HIGH |
| F0620 | /home/tom/Projects/claude-code/src/components/tasks/BackgroundTaskStatus.tsx | components/tasks/ | tsx | Background task status indicator | MEDIUM |
| F0621 | /home/tom/Projects/claude-code/src/components/tasks/BackgroundTask.tsx | components/tasks/ | tsx | Single background task display | MEDIUM |
| F0622 | /home/tom/Projects/claude-code/src/components/tasks/DreamDetailDialog.tsx | components/tasks/ | tsx | Dream task detail dialog | MEDIUM |
| F0623 | /home/tom/Projects/claude-code/src/components/tasks/InProcessTeammateDetailDialog.tsx | components/tasks/ | tsx | In-process teammate detail dialog | MEDIUM |
| F0624 | /home/tom/Projects/claude-code/src/components/tasks/RemoteSessionDetailDialog.tsx | components/tasks/ | tsx | Remote session task detail dialog | MEDIUM |
| F0625 | /home/tom/Projects/claude-code/src/components/tasks/RemoteSessionProgress.tsx | components/tasks/ | tsx | Remote session progress display | MEDIUM |
| F0626 | /home/tom/Projects/claude-code/src/components/tasks/renderToolActivity.tsx | components/tasks/ | tsx | Tool activity rendering in task views | MEDIUM |
| F0627 | /home/tom/Projects/claude-code/src/components/tasks/ShellDetailDialog.tsx | components/tasks/ | tsx | Shell task detail dialog | MEDIUM |
| F0628 | /home/tom/Projects/claude-code/src/components/tasks/ShellProgress.tsx | components/tasks/ | tsx | Shell task progress display | MEDIUM |
| F0629 | /home/tom/Projects/claude-code/src/components/tasks/taskStatusUtils.tsx | components/tasks/ | tsx | Task status utilities and formatters | MEDIUM |
| F0630 | /home/tom/Projects/claude-code/src/components/TeammateViewHeader.tsx | components/ | tsx | Header for teammate/swarm member view | MEDIUM |
| F0631 | /home/tom/Projects/claude-code/src/components/teams/TeamsDialog.tsx | components/teams/ | tsx | Teams management dialog | HIGH |
| F0632 | /home/tom/Projects/claude-code/src/components/teams/TeamStatus.tsx | components/teams/ | tsx | Team status display component | MEDIUM |
| F0633 | /home/tom/Projects/claude-code/src/components/TeleportError.tsx | components/ | tsx | Teleport error display | MEDIUM |
| F0634 | /home/tom/Projects/claude-code/src/components/TeleportProgress.tsx | components/ | tsx | Teleport progress display | MEDIUM |
| F0635 | /home/tom/Projects/claude-code/src/components/TeleportRepoMismatchDialog.tsx | components/ | tsx | Teleport repository mismatch error dialog | MEDIUM |
| F0636 | /home/tom/Projects/claude-code/src/components/TeleportResumeWrapper.tsx | components/ | tsx | Teleport session resume wrapper | MEDIUM |
| F0637 | /home/tom/Projects/claude-code/src/components/TeleportStash.tsx | components/ | tsx | Teleport stash/save state component | MEDIUM |
| F0638 | /home/tom/Projects/claude-code/src/components/TextInput.tsx | components/ | tsx | Generic text input component | HIGH |
| F0639 | /home/tom/Projects/claude-code/src/components/ThemePicker.tsx | components/ | tsx | Theme picker component | MEDIUM |
| F0640 | /home/tom/Projects/claude-code/src/components/ThinkingToggle.tsx | components/ | tsx | Extended thinking on/off toggle | MEDIUM |
| F0641 | /home/tom/Projects/claude-code/src/components/TokenWarning.tsx | components/ | tsx | Token budget warning display | HIGH |
| F0642 | /home/tom/Projects/claude-code/src/components/ToolUseLoader.tsx | components/ | tsx | Tool use loading/streaming indicator | MEDIUM |
| F0643 | /home/tom/Projects/claude-code/src/components/TrustDialog/TrustDialog.tsx | components/TrustDialog/ | tsx | Trust/security warning dialog | HIGH |
| F0644 | /home/tom/Projects/claude-code/src/components/TrustDialog/utils.ts | components/TrustDialog/ | ts | Trust dialog utility functions | MEDIUM |
| F0645 | /home/tom/Projects/claude-code/src/components/ui/OrderedListItem.tsx | components/ui/ | tsx | Ordered list item component | LOW |
| F0646 | /home/tom/Projects/claude-code/src/components/ui/OrderedList.tsx | components/ui/ | tsx | Ordered list component | LOW |
| F0647 | /home/tom/Projects/claude-code/src/components/ui/TreeSelect.tsx | components/ui/ | tsx | Tree-structured select component | MEDIUM |
| F0648 | /home/tom/Projects/claude-code/src/components/ValidationErrorsList.tsx | components/ | tsx | Validation errors list display | MEDIUM |
| F0649 | /home/tom/Projects/claude-code/src/components/VimTextInput.tsx | components/ | tsx | Vim-mode text input component | HIGH |
| F0650 | /home/tom/Projects/claude-code/src/components/VirtualMessageList.tsx | components/ | tsx | Virtualized message list for performance | HIGH |
| F0651 | /home/tom/Projects/claude-code/src/components/wizard/index.ts | components/wizard/ | ts | Wizard component exports | LOW |
| F0652 | /home/tom/Projects/claude-code/src/components/wizard/useWizard.ts | components/wizard/ | ts | Wizard state management hook | MEDIUM |
| F0653 | /home/tom/Projects/claude-code/src/components/wizard/WizardDialogLayout.tsx | components/wizard/ | tsx | Wizard dialog layout component | MEDIUM |
| F0654 | /home/tom/Projects/claude-code/src/components/wizard/WizardNavigationFooter.tsx | components/wizard/ | tsx | Wizard navigation footer (prev/next) | MEDIUM |
| F0655 | /home/tom/Projects/claude-code/src/components/wizard/WizardProvider.tsx | components/wizard/ | tsx | Wizard context provider | MEDIUM |
| F0656 | /home/tom/Projects/claude-code/src/components/WorkflowMultiselectDialog.tsx | components/ | tsx | Workflow multi-select dialog | MEDIUM |
| F0657 | /home/tom/Projects/claude-code/src/components/WorktreeExitDialog.tsx | components/ | tsx | Worktree exit confirmation dialog | MEDIUM |
| F0658 | /home/tom/Projects/claude-code/src/constants/apiLimits.ts | constants/ | ts | API rate/size limit constants | HIGH |
| F0659 | /home/tom/Projects/claude-code/src/constants/betas.ts | constants/ | ts | Beta feature flag names | HIGH |
| F0660 | /home/tom/Projects/claude-code/src/constants/common.ts | constants/ | ts | Common shared constants | HIGH |
| F0661 | /home/tom/Projects/claude-code/src/constants/cyberRiskInstruction.ts | constants/ | ts | Cyber risk/security instruction text | HIGH |
| F0662 | /home/tom/Projects/claude-code/src/constants/errorIds.ts | constants/ | ts | Error identifier constants | MEDIUM |
| F0663 | /home/tom/Projects/claude-code/src/constants/figures.ts | constants/ | ts | ASCII/unicode figure constants | LOW |
| F0664 | /home/tom/Projects/claude-code/src/constants/files.ts | constants/ | ts | File path/name constants | HIGH |
| F0665 | /home/tom/Projects/claude-code/src/constants/github-app.ts | constants/ | ts | GitHub App configuration constants | MEDIUM |
| F0666 | /home/tom/Projects/claude-code/src/constants/keys.ts | constants/ | ts | Keyboard key code constants | MEDIUM |
| F0667 | /home/tom/Projects/claude-code/src/constants/messages.ts | constants/ | ts | User-facing message string constants | MEDIUM |
| F0668 | /home/tom/Projects/claude-code/src/constants/oauth.ts | constants/ | ts | OAuth client/endpoint constants | CRITICAL |
| F0669 | /home/tom/Projects/claude-code/src/constants/outputStyles.ts | constants/ | ts | Output style name constants | LOW |
| F0670 | /home/tom/Projects/claude-code/src/constants/product.ts | constants/ | ts | Product name/branding constants | LOW |
| F0671 | /home/tom/Projects/claude-code/src/constants/prompts.ts | constants/ | ts | System prompt text constants | CRITICAL |
| F0672 | /home/tom/Projects/claude-code/src/constants/spinnerVerbs.ts | constants/ | ts | Spinner verb animation strings | LOW |
| F0673 | /home/tom/Projects/claude-code/src/constants/systemPromptSections.ts | constants/ | ts | System prompt section identifiers | HIGH |
| F0674 | /home/tom/Projects/claude-code/src/constants/system.ts | constants/ | ts | System-level constants (paths, limits) | HIGH |
| F0675 | /home/tom/Projects/claude-code/src/constants/toolLimits.ts | constants/ | ts | Tool output/size limit constants | HIGH |
| F0676 | /home/tom/Projects/claude-code/src/constants/tools.ts | constants/ | ts | Tool name and identifier constants | HIGH |
| F0677 | /home/tom/Projects/claude-code/src/constants/turnCompletionVerbs.ts | constants/ | ts | Turn completion verb strings | LOW |
| F0678 | /home/tom/Projects/claude-code/src/constants/xml.ts | constants/ | ts | XML tag name constants for structured output | HIGH |
| F0679 | /home/tom/Projects/claude-code/src/context/fpsMetrics.tsx | context/ | tsx | FPS metrics context provider | LOW |
| F0680 | /home/tom/Projects/claude-code/src/context/mailbox.tsx | context/ | tsx | Mailbox/message queue context provider | HIGH |
| F0681 | /home/tom/Projects/claude-code/src/context/modalContext.tsx | context/ | tsx | Modal dialog context provider | HIGH |
| F0682 | /home/tom/Projects/claude-code/src/context/notifications.tsx | context/ | tsx | Notification context provider | HIGH |
| F0683 | /home/tom/Projects/claude-code/src/context/overlayContext.tsx | context/ | tsx | Overlay/popup context provider | HIGH |
| F0684 | /home/tom/Projects/claude-code/src/context/promptOverlayContext.tsx | context/ | tsx | Prompt overlay context provider | HIGH |
| F0685 | /home/tom/Projects/claude-code/src/context/QueuedMessageContext.tsx | context/ | tsx | Queued message context provider | HIGH |
| F0686 | /home/tom/Projects/claude-code/src/context/stats.tsx | context/ | tsx | Session stats context provider | MEDIUM |
| F0687 | /home/tom/Projects/claude-code/src/context.ts | src/ | ts | Context assembly and system prompt builder | CRITICAL |
| F0688 | /home/tom/Projects/claude-code/src/context/voice.tsx | context/ | tsx | Voice mode context provider | MEDIUM |
| F0689 | /home/tom/Projects/claude-code/src/coordinator/coordinatorMode.ts | coordinator/ | ts | Swarm coordinator mode orchestration | HIGH |
| F0690 | /home/tom/Projects/claude-code/src/costHook.ts | src/ | ts | React hook for cost tracking display | MEDIUM |
| F0691 | /home/tom/Projects/claude-code/src/cost-tracker.ts | src/ | ts | Session cost tracking and formatting | HIGH |
| F0692 | /home/tom/Projects/claude-code/src/dialogLaunchers.tsx | src/ | tsx | Dialog/modal launch helpers | HIGH |
| F0693 | /home/tom/Projects/claude-code/src/entrypoints/agentSdkTypes.ts | entrypoints/ | ts | Agent SDK type definitions | HIGH |
| F0694 | /home/tom/Projects/claude-code/src/entrypoints/cli.tsx | entrypoints/ | tsx | CLI entrypoint - parses args and boots app | CRITICAL |
| F0695 | /home/tom/Projects/claude-code/src/entrypoints/init.ts | entrypoints/ | ts | Init-only entrypoint (no UI) | HIGH |
| F0696 | /home/tom/Projects/claude-code/src/entrypoints/mcp.ts | entrypoints/ | ts | MCP server entrypoint | HIGH |
| F0697 | /home/tom/Projects/claude-code/src/entrypoints/sandboxTypes.ts | entrypoints/ | ts | Sandbox type definitions | MEDIUM |
| F0698 | /home/tom/Projects/claude-code/src/entrypoints/sdk/controlSchemas.ts | entrypoints/sdk/ | ts | SDK control message schemas | HIGH |
| F0699 | /home/tom/Projects/claude-code/src/entrypoints/sdk/coreSchemas.ts | entrypoints/sdk/ | ts | SDK core message schemas | HIGH |
| F0700 | /home/tom/Projects/claude-code/src/entrypoints/sdk/coreTypes.ts | entrypoints/sdk/ | ts | SDK core type definitions | HIGH |
| F0701 | /home/tom/Projects/claude-code/src/history.ts | src/ | ts | Input/command history persistence | HIGH |
| F0702 | /home/tom/Projects/claude-code/src/hooks/fileSuggestions.ts | hooks/ | ts | File path suggestion logic | HIGH |
| F0703 | /home/tom/Projects/claude-code/src/hooks/notifs/useAutoModeUnavailableNotification.ts | hooks/notifs/ | ts | Auto mode unavailable notification hook | MEDIUM |
| F0704 | /home/tom/Projects/claude-code/src/hooks/notifs/useCanSwitchToExistingSubscription.tsx | hooks/notifs/ | tsx | Subscription switch notification hook | MEDIUM |
| F0705 | /home/tom/Projects/claude-code/src/hooks/notifs/useDeprecationWarningNotification.tsx | hooks/notifs/ | tsx | Deprecation warning notification hook | MEDIUM |
| F0706 | /home/tom/Projects/claude-code/src/hooks/notifs/useFastModeNotification.tsx | hooks/notifs/ | tsx | Fast mode status notification hook | LOW |
| F0707 | /home/tom/Projects/claude-code/src/hooks/notifs/useIDEStatusIndicator.tsx | hooks/notifs/ | tsx | IDE connection status indicator hook | MEDIUM |
| F0708 | /home/tom/Projects/claude-code/src/hooks/notifs/useInstallMessages.tsx | hooks/notifs/ | tsx | Installation status message hook | MEDIUM |
| F0709 | /home/tom/Projects/claude-code/src/hooks/notifs/useLspInitializationNotification.tsx | hooks/notifs/ | tsx | LSP initialization notification hook | MEDIUM |
| F0710 | /home/tom/Projects/claude-code/src/hooks/notifs/useMcpConnectivityStatus.tsx | hooks/notifs/ | tsx | MCP connectivity status notification hook | MEDIUM |
| F0711 | /home/tom/Projects/claude-code/src/hooks/notifs/useModelMigrationNotifications.tsx | hooks/notifs/ | tsx | Model migration notification hook | MEDIUM |
| F0712 | /home/tom/Projects/claude-code/src/hooks/notifs/useNpmDeprecationNotification.tsx | hooks/notifs/ | tsx | npm deprecation warning hook | MEDIUM |
| F0713 | /home/tom/Projects/claude-code/src/hooks/notifs/usePluginAutoupdateNotification.tsx | hooks/notifs/ | tsx | Plugin auto-update notification hook | MEDIUM |
| F0714 | /home/tom/Projects/claude-code/src/hooks/notifs/usePluginInstallationStatus.tsx | hooks/notifs/ | tsx | Plugin installation status hook | MEDIUM |
| F0715 | /home/tom/Projects/claude-code/src/hooks/notifs/useRateLimitWarningNotification.tsx | hooks/notifs/ | tsx | Rate limit warning notification hook | HIGH |
| F0716 | /home/tom/Projects/claude-code/src/hooks/notifs/useSettingsErrors.tsx | hooks/notifs/ | tsx | Settings error notification hook | HIGH |
| F0717 | /home/tom/Projects/claude-code/src/hooks/notifs/useStartupNotification.ts | hooks/notifs/ | ts | Startup notice/tip notification hook | MEDIUM |
| F0718 | /home/tom/Projects/claude-code/src/hooks/notifs/useTeammateShutdownNotification.ts | hooks/notifs/ | ts | Teammate shutdown notification hook | MEDIUM |
| F0719 | /home/tom/Projects/claude-code/src/hooks/renderPlaceholder.ts | hooks/ | ts | Render placeholder text logic | MEDIUM |
| F0720 | /home/tom/Projects/claude-code/src/hooks/toolPermission/handlers/coordinatorHandler.ts | hooks/toolPermission/ | ts | Permission handler for coordinator mode | HIGH |
| F0721 | /home/tom/Projects/claude-code/src/hooks/toolPermission/handlers/interactiveHandler.ts | hooks/toolPermission/ | ts | Permission handler for interactive mode | CRITICAL |
| F0722 | /home/tom/Projects/claude-code/src/hooks/toolPermission/handlers/swarmWorkerHandler.ts | hooks/toolPermission/ | ts | Permission handler for swarm workers | HIGH |
| F0723 | /home/tom/Projects/claude-code/src/hooks/toolPermission/PermissionContext.ts | hooks/toolPermission/ | ts | Permission context shared state | CRITICAL |
| F0724 | /home/tom/Projects/claude-code/src/hooks/toolPermission/permissionLogging.ts | hooks/toolPermission/ | ts | Permission decision logging | MEDIUM |
| F0725 | /home/tom/Projects/claude-code/src/hooks/unifiedSuggestions.ts | hooks/ | ts | Unified suggestion engine hook | HIGH |
| F0726 | /home/tom/Projects/claude-code/src/hooks/useAfterFirstRender.ts | hooks/ | ts | Hook that fires after first render | LOW |
| F0727 | /home/tom/Projects/claude-code/src/hooks/useApiKeyVerification.ts | hooks/ | ts | API key verification hook | HIGH |
| F0728 | /home/tom/Projects/claude-code/src/hooks/useArrowKeyHistory.tsx | hooks/ | tsx | Arrow key history navigation hook | MEDIUM |
| F0729 | /home/tom/Projects/claude-code/src/hooks/useAssistantHistory.ts | hooks/ | ts | Assistant response history hook | HIGH |
| F0730 | /home/tom/Projects/claude-code/src/hooks/useAwaySummary.ts | hooks/ | ts | Away summary generation hook | MEDIUM |
| F0731 | /home/tom/Projects/claude-code/src/hooks/useBackgroundTaskNavigation.ts | hooks/ | ts | Background task navigation hook | MEDIUM |
| F0732 | /home/tom/Projects/claude-code/src/hooks/useBlink.ts | hooks/ | ts | Blinking cursor animation hook | LOW |
| F0733 | /home/tom/Projects/claude-code/src/hooks/useCancelRequest.ts | hooks/ | ts | Request cancellation hook | HIGH |
| F0734 | /home/tom/Projects/claude-code/src/hooks/useCanUseTool.tsx | hooks/ | tsx | Tool availability check hook | HIGH |
| F0735 | /home/tom/Projects/claude-code/src/hooks/useChromeExtensionNotification.tsx | hooks/ | tsx | Chrome extension notification hook | MEDIUM |
| F0736 | /home/tom/Projects/claude-code/src/hooks/useClaudeCodeHintRecommendation.tsx | hooks/ | tsx | Plugin hint recommendation hook | MEDIUM |
| F0737 | /home/tom/Projects/claude-code/src/hooks/useClipboardImageHint.ts | hooks/ | ts | Clipboard image paste hint hook | LOW |
| F0738 | /home/tom/Projects/claude-code/src/hooks/useCommandKeybindings.tsx | hooks/ | tsx | Command keybinding registration hook | HIGH |
| F0739 | /home/tom/Projects/claude-code/src/hooks/useCommandQueue.ts | hooks/ | ts | Command queue state hook | HIGH |
| F0740 | /home/tom/Projects/claude-code/src/hooks/useCopyOnSelect.ts | hooks/ | ts | Copy-on-select text behavior hook | LOW |
| F0741 | /home/tom/Projects/claude-code/src/hooks/useDeferredHookMessages.ts | hooks/ | ts | Deferred hook message processing hook | MEDIUM |
| F0742 | /home/tom/Projects/claude-code/src/hooks/useDiffData.ts | hooks/ | ts | Diff data fetching and caching hook | MEDIUM |
| F0743 | /home/tom/Projects/claude-code/src/hooks/useDiffInIDE.ts | hooks/ | ts | IDE diff integration hook | MEDIUM |
| F0744 | /home/tom/Projects/claude-code/src/hooks/useDirectConnect.ts | hooks/ | ts | Direct connect session hook | HIGH |
| F0745 | /home/tom/Projects/claude-code/src/hooks/useDoublePress.ts | hooks/ | ts | Double-press key detection hook | LOW |
| F0746 | /home/tom/Projects/claude-code/src/hooks/useDynamicConfig.ts | hooks/ | ts | Dynamic config polling/update hook | HIGH |
| F0747 | /home/tom/Projects/claude-code/src/hooks/useElapsedTime.ts | hooks/ | ts | Elapsed time tracking hook | LOW |
| F0748 | /home/tom/Projects/claude-code/src/hooks/useExitOnCtrlCD.ts | hooks/ | ts | Exit on Ctrl+C/D handler hook | HIGH |
| F0749 | /home/tom/Projects/claude-code/src/hooks/useExitOnCtrlCDWithKeybindings.ts | hooks/ | ts | Keybinding-aware exit hook | HIGH |
| F0750 | /home/tom/Projects/claude-code/src/hooks/useFileHistorySnapshotInit.ts | hooks/ | ts | File history snapshot initialization hook | MEDIUM |
| F0751 | /home/tom/Projects/claude-code/src/hooks/useGlobalKeybindings.tsx | hooks/ | tsx | Global keyboard shortcut registration hook | HIGH |
| F0752 | /home/tom/Projects/claude-code/src/hooks/useHistorySearch.ts | hooks/ | ts | Conversation history search hook | MEDIUM |
| F0753 | /home/tom/Projects/claude-code/src/hooks/useIdeAtMentioned.ts | hooks/ | ts | IDE at-mention detection hook | MEDIUM |
| F0754 | /home/tom/Projects/claude-code/src/hooks/useIdeConnectionStatus.ts | hooks/ | ts | IDE connection status hook | MEDIUM |
| F0755 | /home/tom/Projects/claude-code/src/hooks/useIDEIntegration.tsx | hooks/ | tsx | IDE integration orchestration hook | HIGH |
| F0756 | /home/tom/Projects/claude-code/src/hooks/useIdeLogging.ts | hooks/ | ts | IDE operation logging hook | LOW |
| F0757 | /home/tom/Projects/claude-code/src/hooks/useIdeSelection.ts | hooks/ | ts | IDE code selection hook | MEDIUM |
| F0758 | /home/tom/Projects/claude-code/src/hooks/useInboxPoller.ts | hooks/ | ts | Inbox message polling hook | HIGH |
| F0759 | /home/tom/Projects/claude-code/src/hooks/useInputBuffer.ts | hooks/ | ts | Input buffer management hook | HIGH |
| F0760 | /home/tom/Projects/claude-code/src/hooks/useIssueFlagBanner.ts | hooks/ | ts | Issue flag/known bug banner hook | MEDIUM |
| F0761 | /home/tom/Projects/claude-code/src/hooks/useLogMessages.ts | hooks/ | ts | Log message streaming hook | MEDIUM |
| F0762 | /home/tom/Projects/claude-code/src/hooks/useLspPluginRecommendation.tsx | hooks/ | tsx | LSP plugin recommendation hook | MEDIUM |
| F0763 | /home/tom/Projects/claude-code/src/hooks/useMailboxBridge.ts | hooks/ | ts | Mailbox bridge synchronization hook | HIGH |
| F0764 | /home/tom/Projects/claude-code/src/hooks/useMainLoopModel.ts | hooks/ | ts | Main query loop model selection hook | HIGH |
| F0765 | /home/tom/Projects/claude-code/src/hooks/useManagePlugins.ts | hooks/ | ts | Plugin management state hook | HIGH |
| F0766 | /home/tom/Projects/claude-code/src/hooks/useMemoryUsage.ts | hooks/ | ts | Memory (RAM) usage tracking hook | LOW |
| F0767 | /home/tom/Projects/claude-code/src/hooks/useMergedClients.ts | hooks/ | ts | Merged MCP client collection hook | HIGH |
| F0768 | /home/tom/Projects/claude-code/src/hooks/useMergedCommands.ts | hooks/ | ts | Merged command collection hook | HIGH |
| F0769 | /home/tom/Projects/claude-code/src/hooks/useMergedTools.ts | hooks/ | ts | Merged tool collection hook | HIGH |
| F0770 | /home/tom/Projects/claude-code/src/hooks/useMinDisplayTime.ts | hooks/ | ts | Minimum display time enforcement hook | LOW |
| F0771 | /home/tom/Projects/claude-code/src/hooks/useNotifyAfterTimeout.ts | hooks/ | ts | Timeout notification hook | LOW |
| F0772 | /home/tom/Projects/claude-code/src/hooks/useOfficialMarketplaceNotification.tsx | hooks/ | tsx | Official marketplace notification hook | MEDIUM |
| F0773 | /home/tom/Projects/claude-code/src/hooks/usePasteHandler.ts | hooks/ | ts | Paste event handling hook | HIGH |
| F0774 | /home/tom/Projects/claude-code/src/hooks/usePluginRecommendationBase.tsx | hooks/ | tsx | Base plugin recommendation hook | MEDIUM |
| F0775 | /home/tom/Projects/claude-code/src/hooks/usePromptsFromClaudeInChrome.tsx | hooks/ | tsx | Claude-in-Chrome prompt injection hook | MEDIUM |
| F0776 | /home/tom/Projects/claude-code/src/hooks/usePromptSuggestion.ts | hooks/ | ts | AI prompt suggestion hook | HIGH |
| F0777 | /home/tom/Projects/claude-code/src/hooks/usePrStatus.ts | hooks/ | ts | Pull request status polling hook | MEDIUM |
| F0778 | /home/tom/Projects/claude-code/src/hooks/useQueueProcessor.ts | hooks/ | ts | Queue processing state hook | HIGH |
| F0779 | /home/tom/Projects/claude-code/src/hooks/useRemoteSession.ts | hooks/ | ts | Remote session management hook | HIGH |
| F0780 | /home/tom/Projects/claude-code/src/hooks/useReplBridge.tsx | hooks/ | tsx | REPL bridge connection hook | HIGH |
| F0781 | /home/tom/Projects/claude-code/src/hooks/useScheduledTasks.ts | hooks/ | ts | Scheduled/cron task hook | HIGH |
| F0782 | /home/tom/Projects/claude-code/src/hooks/useSearchInput.ts | hooks/ | ts | Search input state hook | MEDIUM |
| F0783 | /home/tom/Projects/claude-code/src/hooks/useSessionBackgrounding.ts | hooks/ | ts | Session backgrounding hook | HIGH |
| F0784 | /home/tom/Projects/claude-code/src/hooks/useSettingsChange.ts | hooks/ | ts | Settings change detection hook | HIGH |
| F0785 | /home/tom/Projects/claude-code/src/hooks/useSettings.ts | hooks/ | ts | Settings read hook | HIGH |
| F0786 | /home/tom/Projects/claude-code/src/hooks/useSkillImprovementSurvey.ts | hooks/ | ts | Skill improvement survey hook | LOW |
| F0787 | /home/tom/Projects/claude-code/src/hooks/useSkillsChange.ts | hooks/ | ts | Skills change detection hook | MEDIUM |
| F0788 | /home/tom/Projects/claude-code/src/hooks/useSSHSession.ts | hooks/ | ts | SSH session management hook | HIGH |
| F0789 | /home/tom/Projects/claude-code/src/hooks/useSwarmInitialization.ts | hooks/ | ts | Swarm initialization orchestration hook | HIGH |
| F0790 | /home/tom/Projects/claude-code/src/hooks/useSwarmPermissionPoller.ts | hooks/ | ts | Swarm permission polling hook | HIGH |
| F0791 | /home/tom/Projects/claude-code/src/hooks/useTaskListWatcher.ts | hooks/ | ts | Task list file system watcher hook | HIGH |
| F0792 | /home/tom/Projects/claude-code/src/hooks/useTasksV2.ts | hooks/ | ts | Tasks V2 state management hook | HIGH |
| F0793 | /home/tom/Projects/claude-code/src/hooks/useTeammateViewAutoExit.ts | hooks/ | ts | Auto-exit from teammate view hook | MEDIUM |
| F0794 | /home/tom/Projects/claude-code/src/hooks/useTeleportResume.tsx | hooks/ | tsx | Teleport session resume hook | MEDIUM |
| F0795 | /home/tom/Projects/claude-code/src/hooks/useTerminalSize.ts | hooks/ | ts | Terminal dimensions hook | HIGH |
| F0796 | /home/tom/Projects/claude-code/src/hooks/useTextInput.ts | hooks/ | ts | Text input state hook | HIGH |
| F0797 | /home/tom/Projects/claude-code/src/hooks/useTimeout.ts | hooks/ | ts | Timeout/timer hook | LOW |
| F0798 | /home/tom/Projects/claude-code/src/hooks/useTurnDiffs.ts | hooks/ | ts | Per-turn diff computation hook | MEDIUM |
| F0799 | /home/tom/Projects/claude-code/src/hooks/useTypeahead.tsx | hooks/ | tsx | Typeahead/autocomplete hook | HIGH |
| F0800 | /home/tom/Projects/claude-code/src/hooks/useUpdateNotification.ts | hooks/ | ts | Update available notification hook | MEDIUM |
| F0801 | /home/tom/Projects/claude-code/src/hooks/useVimInput.ts | hooks/ | ts | Vim mode input handling hook | HIGH |
| F0802 | /home/tom/Projects/claude-code/src/hooks/useVirtualScroll.ts | hooks/ | ts | Virtual scroll behavior hook | HIGH |
| F0803 | /home/tom/Projects/claude-code/src/hooks/useVoiceEnabled.ts | hooks/ | ts | Voice mode availability hook | MEDIUM |
| F0804 | /home/tom/Projects/claude-code/src/hooks/useVoiceIntegration.tsx | hooks/ | tsx | Voice integration orchestration hook | HIGH |
| F0805 | /home/tom/Projects/claude-code/src/hooks/useVoice.ts | hooks/ | ts | Voice recording/streaming hook | HIGH |
| F0806 | /home/tom/Projects/claude-code/src/ink/Ansi.tsx | ink/ | tsx | ANSI escape sequence React component | HIGH |
| F0807 | /home/tom/Projects/claude-code/src/ink/bidi.ts | ink/ | ts | Bidirectional text support | MEDIUM |
| F0808 | /home/tom/Projects/claude-code/src/ink/clearTerminal.ts | ink/ | ts | Terminal clear screen utility | MEDIUM |
| F0809 | /home/tom/Projects/claude-code/src/ink/colorize.ts | ink/ | ts | Terminal color application utility | MEDIUM |
| F0810 | /home/tom/Projects/claude-code/src/ink/components/AlternateScreen.tsx | ink/components/ | tsx | Alternate terminal screen component | HIGH |
| F0811 | /home/tom/Projects/claude-code/src/ink/components/AppContext.ts | ink/components/ | ts | Ink app context definition | HIGH |
| F0812 | /home/tom/Projects/claude-code/src/ink/components/App.tsx | ink/components/ | tsx | Ink app root renderer | CRITICAL |
| F0813 | /home/tom/Projects/claude-code/src/ink/components/Box.tsx | ink/components/ | tsx | Flexbox layout component (Ink core) | HIGH |
| F0814 | /home/tom/Projects/claude-code/src/ink/components/Button.tsx | ink/components/ | tsx | Clickable button component | MEDIUM |
| F0815 | /home/tom/Projects/claude-code/src/ink/components/ClockContext.tsx | ink/components/ | tsx | Clock/time context for animations | LOW |
| F0816 | /home/tom/Projects/claude-code/src/ink/components/CursorDeclarationContext.ts | ink/components/ | ts | Cursor declaration context | LOW |
| F0817 | /home/tom/Projects/claude-code/src/ink/components/ErrorOverview.tsx | ink/components/ | tsx | Error overview display component | MEDIUM |
| F0818 | /home/tom/Projects/claude-code/src/ink/components/Link.tsx | ink/components/ | tsx | Hyperlink component for terminals | MEDIUM |
| F0819 | /home/tom/Projects/claude-code/src/ink/components/Newline.tsx | ink/components/ | tsx | Newline/line-break component | LOW |
| F0820 | /home/tom/Projects/claude-code/src/ink/components/NoSelect.tsx | ink/components/ | tsx | Non-selectable text wrapper | LOW |
| F0821 | /home/tom/Projects/claude-code/src/ink/components/RawAnsi.tsx | ink/components/ | tsx | Raw ANSI passthrough component | MEDIUM |
| F0822 | /home/tom/Projects/claude-code/src/ink/components/ScrollBox.tsx | ink/components/ | tsx | Scrollable content box component | HIGH |
| F0823 | /home/tom/Projects/claude-code/src/ink/components/Spacer.tsx | ink/components/ | tsx | Flexible spacer component | LOW |
| F0824 | /home/tom/Projects/claude-code/src/ink/components/StdinContext.ts | ink/components/ | ts | Standard input context definition | HIGH |
| F0825 | /home/tom/Projects/claude-code/src/ink/components/TerminalFocusContext.tsx | ink/components/ | tsx | Terminal focus state context | MEDIUM |
| F0826 | /home/tom/Projects/claude-code/src/ink/components/TerminalSizeContext.tsx | ink/components/ | tsx | Terminal size context provider | HIGH |
| F0827 | /home/tom/Projects/claude-code/src/ink/components/Text.tsx | ink/components/ | tsx | Styled text component (Ink core) | CRITICAL |
| F0828 | /home/tom/Projects/claude-code/src/ink/constants.ts | ink/ | ts | Ink framework constants | MEDIUM |
| F0829 | /home/tom/Projects/claude-code/src/ink/dom.ts | ink/ | ts | Virtual DOM implementation for Ink | CRITICAL |
| F0830 | /home/tom/Projects/claude-code/src/ink/events/click-event.ts | ink/events/ | ts | Click event type definition | LOW |
| F0831 | /home/tom/Projects/claude-code/src/ink/events/dispatcher.ts | ink/events/ | ts | Event dispatcher implementation | HIGH |
| F0832 | /home/tom/Projects/claude-code/src/ink/events/emitter.ts | ink/events/ | ts | Event emitter implementation | HIGH |
| F0833 | /home/tom/Projects/claude-code/src/ink/events/event-handlers.ts | ink/events/ | ts | Event handler registry | HIGH |
| F0834 | /home/tom/Projects/claude-code/src/ink/events/event.ts | ink/events/ | ts | Base event type definition | MEDIUM |
| F0835 | /home/tom/Projects/claude-code/src/ink/events/focus-event.ts | ink/events/ | ts | Focus event type definition | LOW |
| F0836 | /home/tom/Projects/claude-code/src/ink/events/input-event.ts | ink/events/ | ts | Input event type definition | HIGH |
| F0837 | /home/tom/Projects/claude-code/src/ink/events/keyboard-event.ts | ink/events/ | ts | Keyboard event type definition | HIGH |
| F0838 | /home/tom/Projects/claude-code/src/ink/events/terminal-event.ts | ink/events/ | ts | Terminal event type definition | MEDIUM |
| F0839 | /home/tom/Projects/claude-code/src/ink/events/terminal-focus-event.ts | ink/events/ | ts | Terminal focus event type definition | LOW |
| F0840 | /home/tom/Projects/claude-code/src/ink/focus.ts | ink/ | ts | Focus management system | HIGH |
| F0841 | /home/tom/Projects/claude-code/src/ink/frame.ts | ink/ | ts | Frame/render cycle management | HIGH |
| F0842 | /home/tom/Projects/claude-code/src/ink/get-max-width.ts | ink/ | ts | Max terminal width computation | MEDIUM |
| F0843 | /home/tom/Projects/claude-code/src/ink/hit-test.ts | ink/ | ts | Mouse hit-test for terminal elements | MEDIUM |
| F0844 | /home/tom/Projects/claude-code/src/ink/hooks/use-animation-frame.ts | ink/hooks/ | ts | Animation frame hook | LOW |
| F0845 | /home/tom/Projects/claude-code/src/ink/hooks/use-app.ts | ink/hooks/ | ts | Ink app context hook | HIGH |
| F0846 | /home/tom/Projects/claude-code/src/ink/hooks/use-declared-cursor.ts | ink/hooks/ | ts | Declared cursor position hook | MEDIUM |
| F0847 | /home/tom/Projects/claude-code/src/ink/hooks/use-input.ts | ink/hooks/ | ts | Keyboard input hook | CRITICAL |
| F0848 | /home/tom/Projects/claude-code/src/ink/hooks/use-interval.ts | ink/hooks/ | ts | Interval timer hook | LOW |
| F0849 | /home/tom/Projects/claude-code/src/ink/hooks/use-search-highlight.ts | ink/hooks/ | ts | Search highlight state hook | MEDIUM |
| F0850 | /home/tom/Projects/claude-code/src/ink/hooks/use-selection.ts | ink/hooks/ | ts | Text selection state hook | MEDIUM |
| F0851 | /home/tom/Projects/claude-code/src/ink/hooks/use-stdin.ts | ink/hooks/ | ts | Stdin stream hook | HIGH |
| F0852 | /home/tom/Projects/claude-code/src/ink/hooks/use-tab-status.ts | ink/hooks/ | ts | Tab status tracking hook | LOW |
| F0853 | /home/tom/Projects/claude-code/src/ink/hooks/use-terminal-focus.ts | ink/hooks/ | ts | Terminal focus state hook | MEDIUM |
| F0854 | /home/tom/Projects/claude-code/src/ink/hooks/use-terminal-title.ts | ink/hooks/ | ts | Terminal title control hook | LOW |
| F0855 | /home/tom/Projects/claude-code/src/ink/hooks/use-terminal-viewport.ts | ink/hooks/ | ts | Terminal viewport dimension hook | HIGH |
| F0856 | /home/tom/Projects/claude-code/src/ink/ink.tsx | ink/ | tsx | Ink renderer main module | CRITICAL |
| F0857 | /home/tom/Projects/claude-code/src/ink/instances.ts | ink/ | ts | Ink instance registry | HIGH |
| F0858 | /home/tom/Projects/claude-code/src/ink/layout/engine.ts | ink/layout/ | ts | Yoga layout engine integration | CRITICAL |
| F0859 | /home/tom/Projects/claude-code/src/ink/layout/geometry.ts | ink/layout/ | ts | Layout geometry types and utilities | HIGH |
| F0860 | /home/tom/Projects/claude-code/src/ink/layout/node.ts | ink/layout/ | ts | Layout node management | HIGH |
| F0861 | /home/tom/Projects/claude-code/src/ink/layout/yoga.ts | ink/layout/ | ts | Yoga WASM binding | HIGH |
| F0862 | /home/tom/Projects/claude-code/src/ink/line-width-cache.ts | ink/ | ts | Line width computation cache | MEDIUM |
| F0863 | /home/tom/Projects/claude-code/src/ink/log-update.ts | ink/ | ts | Log-update style in-place rendering | HIGH |
| F0864 | /home/tom/Projects/claude-code/src/ink/measure-element.ts | ink/ | ts | Element dimension measurement | MEDIUM |
| F0865 | /home/tom/Projects/claude-code/src/ink/measure-text.ts | ink/ | ts | Text dimension measurement | HIGH |
| F0866 | /home/tom/Projects/claude-code/src/ink/node-cache.ts | ink/ | ts | Virtual DOM node cache | MEDIUM |
| F0867 | /home/tom/Projects/claude-code/src/ink/optimizer.ts | ink/ | ts | Render output optimizer (diff patching) | HIGH |
| F0868 | /home/tom/Projects/claude-code/src/ink/output.ts | ink/ | ts | Terminal output stream management | HIGH |
| F0869 | /home/tom/Projects/claude-code/src/ink/parse-keypress.ts | ink/ | ts | Keypress sequence parser | HIGH |
| F0870 | /home/tom/Projects/claude-code/src/ink/reconciler.ts | ink/ | ts | React reconciler for Ink (terminal renderer) | CRITICAL |
| F0871 | /home/tom/Projects/claude-code/src/ink/render-border.ts | ink/ | ts | Border rendering for box components | MEDIUM |
| F0872 | /home/tom/Projects/claude-code/src/ink/renderer.ts | ink/ | ts | Main render pipeline | CRITICAL |
| F0873 | /home/tom/Projects/claude-code/src/ink/render-node-to-output.ts | ink/ | ts | Node to output buffer rendering | HIGH |
| F0874 | /home/tom/Projects/claude-code/src/ink/render-to-screen.ts | ink/ | ts | Final screen rendering (writes to stdout) | CRITICAL |
| F0875 | /home/tom/Projects/claude-code/src/ink/root.ts | ink/ | ts | Ink root container | HIGH |
| F0876 | /home/tom/Projects/claude-code/src/ink/screen.ts | ink/ | ts | Screen buffer management | HIGH |
| F0877 | /home/tom/Projects/claude-code/src/ink/searchHighlight.ts | ink/ | ts | Search term highlighting logic | MEDIUM |
| F0878 | /home/tom/Projects/claude-code/src/ink/selection.ts | ink/ | ts | Text selection management | MEDIUM |
| F0879 | /home/tom/Projects/claude-code/src/ink/squash-text-nodes.ts | ink/ | ts | Adjacent text node squashing optimization | MEDIUM |
| F0880 | /home/tom/Projects/claude-code/src/ink/stringWidth.ts | ink/ | ts | Unicode string display width computation | HIGH |
| F0881 | /home/tom/Projects/claude-code/src/ink/styles.ts | ink/ | ts | Style computation and inheritance | HIGH |
| F0882 | /home/tom/Projects/claude-code/src/ink/supports-hyperlinks.ts | ink/ | ts | Terminal hyperlink support detection | LOW |
| F0883 | /home/tom/Projects/claude-code/src/ink/tabstops.ts | ink/ | ts | Tab stop computation for terminal | MEDIUM |
| F0884 | /home/tom/Projects/claude-code/src/ink/terminal-focus-state.ts | ink/ | ts | Terminal focus state management | MEDIUM |
| F0885 | /home/tom/Projects/claude-code/src/ink/terminal-querier.ts | ink/ | ts | Terminal capability query (DA, XTSMGRAPHICS, etc.) | HIGH |
| F0886 | /home/tom/Projects/claude-code/src/ink/terminal.ts | ink/ | ts | Terminal device abstraction | HIGH |
| F0887 | /home/tom/Projects/claude-code/src/ink/termio/ansi.ts | ink/termio/ | ts | ANSI escape code constants | HIGH |
| F0888 | /home/tom/Projects/claude-code/src/ink/termio/csi.ts | ink/termio/ | ts | CSI (Control Sequence Introducer) sequences | HIGH |
| F0889 | /home/tom/Projects/claude-code/src/ink/termio/dec.ts | ink/termio/ | ts | DEC private mode sequences | MEDIUM |
| F0890 | /home/tom/Projects/claude-code/src/ink/termio/esc.ts | ink/termio/ | ts | Escape sequence constants | MEDIUM |
| F0891 | /home/tom/Projects/claude-code/src/ink/termio/osc.ts | ink/termio/ | ts | OSC (Operating System Command) sequences | MEDIUM |
| F0892 | /home/tom/Projects/claude-code/src/ink/termio/parser.ts | ink/termio/ | ts | Terminal escape sequence parser | HIGH |
| F0893 | /home/tom/Projects/claude-code/src/ink/termio/sgr.ts | ink/termio/ | ts | SGR (Select Graphic Rendition) sequences | HIGH |
| F0894 | /home/tom/Projects/claude-code/src/ink/termio/tokenize.ts | ink/termio/ | ts | Terminal sequence tokenizer | HIGH |
| F0895 | /home/tom/Projects/claude-code/src/ink/termio.ts | ink/ | ts | Terminal I/O high-level module | HIGH |
| F0896 | /home/tom/Projects/claude-code/src/ink/termio/types.ts | ink/termio/ | ts | Terminal I/O type definitions | LOW |
| F0897 | /home/tom/Projects/claude-code/src/ink.ts | src/ | ts | Ink framework re-export/entry | HIGH |
| F0898 | /home/tom/Projects/claude-code/src/ink/useTerminalNotification.ts | ink/ | ts | Terminal system notification hook | MEDIUM |
| F0899 | /home/tom/Projects/claude-code/src/ink/warn.ts | ink/ | ts | Ink warning logger | LOW |
| F0900 | /home/tom/Projects/claude-code/src/ink/widest-line.ts | ink/ | ts | Widest line computation utility | MEDIUM |
| F0901 | /home/tom/Projects/claude-code/src/ink/wrapAnsi.ts | ink/ | ts | ANSI-aware text word wrapping | HIGH |
| F0902 | /home/tom/Projects/claude-code/src/ink/wrap-text.ts | ink/ | ts | Text wrapping with ANSI awareness | HIGH |
| F0903 | /home/tom/Projects/claude-code/src/interactiveHelpers.tsx | src/ | tsx | Interactive mode helper utilities | HIGH |
| F0904 | /home/tom/Projects/claude-code/src/keybindings/defaultBindings.ts | keybindings/ | ts | Default keyboard shortcut definitions | HIGH |
| F0905 | /home/tom/Projects/claude-code/src/keybindings/KeybindingContext.tsx | keybindings/ | tsx | Keybinding context provider | HIGH |
| F0906 | /home/tom/Projects/claude-code/src/keybindings/KeybindingProviderSetup.tsx | keybindings/ | tsx | Keybinding provider setup component | HIGH |
| F0907 | /home/tom/Projects/claude-code/src/keybindings/loadUserBindings.ts | keybindings/ | ts | Loads user keybinding customizations | HIGH |
| F0908 | /home/tom/Projects/claude-code/src/keybindings/match.ts | keybindings/ | ts | Keybinding match/test logic | HIGH |
| F0909 | /home/tom/Projects/claude-code/src/keybindings/parser.ts | keybindings/ | ts | Keybinding expression parser | HIGH |
| F0910 | /home/tom/Projects/claude-code/src/keybindings/reservedShortcuts.ts | keybindings/ | ts | Reserved/non-overridable shortcuts | MEDIUM |
| F0911 | /home/tom/Projects/claude-code/src/keybindings/resolver.ts | keybindings/ | ts | Keybinding resolution/lookup | HIGH |
| F0912 | /home/tom/Projects/claude-code/src/keybindings/schema.ts | keybindings/ | ts | Keybinding configuration schema | MEDIUM |
| F0913 | /home/tom/Projects/claude-code/src/keybindings/shortcutFormat.ts | keybindings/ | ts | Shortcut display formatting | MEDIUM |
| F0914 | /home/tom/Projects/claude-code/src/keybindings/template.ts | keybindings/ | ts | Keybinding template/preset definitions | MEDIUM |
| F0915 | /home/tom/Projects/claude-code/src/keybindings/useKeybinding.ts | keybindings/ | ts | Keybinding registration hook | HIGH |
| F0916 | /home/tom/Projects/claude-code/src/keybindings/useShortcutDisplay.ts | keybindings/ | ts | Shortcut display text hook | MEDIUM |
| F0917 | /home/tom/Projects/claude-code/src/keybindings/validate.ts | keybindings/ | ts | Keybinding config validation | MEDIUM |
| F0918 | /home/tom/Projects/claude-code/src/main.tsx | src/ | tsx | Application entry point - bootstraps everything | CRITICAL |
| F0919 | /home/tom/Projects/claude-code/src/memdir/findRelevantMemories.ts | memdir/ | ts | Semantic search for relevant memory entries | HIGH |
| F0920 | /home/tom/Projects/claude-code/src/memdir/memdir.ts | memdir/ | ts | Memory directory operations | HIGH |
| F0921 | /home/tom/Projects/claude-code/src/memdir/memoryAge.ts | memdir/ | ts | Memory entry age/staleness computation | MEDIUM |
| F0922 | /home/tom/Projects/claude-code/src/memdir/memoryScan.ts | memdir/ | ts | Memory directory scanning | HIGH |
| F0923 | /home/tom/Projects/claude-code/src/memdir/memoryTypes.ts | memdir/ | ts | Memory entry type definitions | MEDIUM |
| F0924 | /home/tom/Projects/claude-code/src/memdir/paths.ts | memdir/ | ts | Memory directory path constants | HIGH |
| F0925 | /home/tom/Projects/claude-code/src/memdir/teamMemPaths.ts | memdir/ | ts | Team memory directory path constants | HIGH |
| F0926 | /home/tom/Projects/claude-code/src/memdir/teamMemPrompts.ts | memdir/ | ts | Team memory system prompts | HIGH |
| F0927 | /home/tom/Projects/claude-code/src/migrations/migrateAutoUpdatesToSettings.ts | migrations/ | ts | Migration: auto-update settings | LOW |
| F0928 | /home/tom/Projects/claude-code/src/migrations/migrateBypassPermissionsAcceptedToSettings.ts | migrations/ | ts | Migration: bypass permissions flag | LOW |
| F0929 | /home/tom/Projects/claude-code/src/migrations/migrateEnableAllProjectMcpServersToSettings.ts | migrations/ | ts | Migration: MCP server enable-all setting | LOW |
| F0930 | /home/tom/Projects/claude-code/src/migrations/migrateFennecToOpus.ts | migrations/ | ts | Migration: Fennec model to Opus | LOW |
| F0931 | /home/tom/Projects/claude-code/src/migrations/migrateLegacyOpusToCurrent.ts | migrations/ | ts | Migration: legacy Opus to current | LOW |
| F0932 | /home/tom/Projects/claude-code/src/migrations/migrateOpusToOpus1m.ts | migrations/ | ts | Migration: Opus to Opus 1M | LOW |
| F0933 | /home/tom/Projects/claude-code/src/migrations/migrateReplBridgeEnabledToRemoteControlAtStartup.ts | migrations/ | ts | Migration: REPL bridge setting | LOW |
| F0934 | /home/tom/Projects/claude-code/src/migrations/migrateSonnet1mToSonnet45.ts | migrations/ | ts | Migration: Sonnet 1M to Sonnet 4.5 | LOW |
| F0935 | /home/tom/Projects/claude-code/src/migrations/migrateSonnet45ToSonnet46.ts | migrations/ | ts | Migration: Sonnet 4.5 to Sonnet 4.6 | LOW |
| F0936 | /home/tom/Projects/claude-code/src/migrations/resetAutoModeOptInForDefaultOffer.ts | migrations/ | ts | Migration: reset auto-mode opt-in | LOW |
| F0937 | /home/tom/Projects/claude-code/src/migrations/resetProToOpusDefault.ts | migrations/ | ts | Migration: reset Pro to Opus default | LOW |
| F0938 | /home/tom/Projects/claude-code/src/moreright/useMoreRight.tsx | moreright/ | tsx | "More right" panel expansion hook/component | MEDIUM |
| F0939 | /home/tom/Projects/claude-code/src/native-ts/color-diff/index.ts | native-ts/color-diff/ | ts | Native color diff bindings | HIGH |
| F0940 | /home/tom/Projects/claude-code/src/native-ts/file-index/index.ts | native-ts/file-index/ | ts | Native file index bindings | HIGH |
| F0941 | /home/tom/Projects/claude-code/src/native-ts/yoga-layout/enums.ts | native-ts/yoga-layout/ | ts | Yoga layout enum bindings | HIGH |
| F0942 | /home/tom/Projects/claude-code/src/native-ts/yoga-layout/index.ts | native-ts/yoga-layout/ | ts | Yoga layout native bindings | HIGH |
| F0943 | /home/tom/Projects/claude-code/src/outputStyles/loadOutputStylesDir.ts | outputStyles/ | ts | Loads output style plugins from directory | HIGH |
| F0944 | /home/tom/Projects/claude-code/src/plugins/builtinPlugins.ts | plugins/ | ts | Built-in plugin registry | HIGH |
| F0945 | /home/tom/Projects/claude-code/src/plugins/bundled/index.ts | plugins/bundled/ | ts | Bundled plugin exports | LOW |
| F0946 | /home/tom/Projects/claude-code/src/projectOnboardingState.ts | src/ | ts | Per-project onboarding state tracking | MEDIUM |
| F0947 | /home/tom/Projects/claude-code/src/query/config.ts | query/ | ts | Query engine configuration | HIGH |
| F0948 | /home/tom/Projects/claude-code/src/query/deps.ts | query/ | ts | Query engine dependencies injection | HIGH |
| F0949 | /home/tom/Projects/claude-code/src/QueryEngine.ts | src/ | ts | Core query/inference engine - sends messages to Claude | CRITICAL |
| F0950 | /home/tom/Projects/claude-code/src/query/stopHooks.ts | query/ | ts | Stop hooks for query interruption | HIGH |
| F0951 | /home/tom/Projects/claude-code/src/query/tokenBudget.ts | query/ | ts | Token budget management for queries | HIGH |
| F0952 | /home/tom/Projects/claude-code/src/query.ts | src/ | ts | Query function - main Claude API call loop | CRITICAL |
| F0953 | /home/tom/Projects/claude-code/src/remote/remotePermissionBridge.ts | remote/ | ts | Bridge for remote permission callbacks | HIGH |
| F0954 | /home/tom/Projects/claude-code/src/remote/RemoteSessionManager.ts | remote/ | ts | Remote session lifecycle manager | HIGH |
| F0955 | /home/tom/Projects/claude-code/src/remote/sdkMessageAdapter.ts | remote/ | ts | SDK message format adapter | HIGH |
| F0956 | /home/tom/Projects/claude-code/src/remote/SessionsWebSocket.ts | remote/ | ts | WebSocket connection for remote sessions | HIGH |
| F0957 | /home/tom/Projects/claude-code/src/replLauncher.tsx | src/ | tsx | REPL launcher - starts interactive session | CRITICAL |
| F0958 | /home/tom/Projects/claude-code/src/schemas/hooks.ts | schemas/ | ts | Hooks configuration schema (Zod) | HIGH |
| F0959 | /home/tom/Projects/claude-code/src/screens/Doctor.tsx | screens/ | tsx | Doctor screen root component | MEDIUM |
| F0960 | /home/tom/Projects/claude-code/src/screens/REPL.tsx | screens/ | tsx | REPL/interactive mode screen root | CRITICAL |
| F0961 | /home/tom/Projects/claude-code/src/screens/ResumeConversation.tsx | screens/ | tsx | Resume conversation screen | HIGH |
| F0962 | /home/tom/Projects/claude-code/src/server/createDirectConnectSession.ts | server/ | ts | Creates direct-connect server session | HIGH |
| F0963 | /home/tom/Projects/claude-code/src/server/directConnectManager.ts | server/ | ts | Manages direct-connect server lifecycle | HIGH |
| F0964 | /home/tom/Projects/claude-code/src/server/types.ts | server/ | ts | Server type definitions | LOW |
| F0965 | /home/tom/Projects/claude-code/src/services/AgentSummary/agentSummary.ts | services/AgentSummary/ | ts | Agent completion summary generation | HIGH |
| F0966 | /home/tom/Projects/claude-code/src/services/analytics/config.ts | services/analytics/ | ts | Analytics configuration | HIGH |
| F0967 | /home/tom/Projects/claude-code/src/services/analytics/datadog.ts | services/analytics/ | ts | Datadog analytics integration | HIGH |
| F0968 | /home/tom/Projects/claude-code/src/services/analytics/firstPartyEventLogger.ts | services/analytics/ | ts | First-party event logging | HIGH |
| F0969 | /home/tom/Projects/claude-code/src/services/analytics/firstPartyEventLoggingExporter.ts | services/analytics/ | ts | First-party event log exporter | HIGH |
| F0970 | /home/tom/Projects/claude-code/src/services/analytics/growthbook.ts | services/analytics/ | ts | GrowthBook feature flag/experiment integration | HIGH |
| F0971 | /home/tom/Projects/claude-code/src/services/analytics/index.ts | services/analytics/ | ts | Analytics module exports | LOW |
| F0972 | /home/tom/Projects/claude-code/src/services/analytics/metadata.ts | services/analytics/ | ts | Analytics event metadata enrichment | HIGH |
| F0973 | /home/tom/Projects/claude-code/src/services/analytics/sinkKillswitch.ts | services/analytics/ | ts | Analytics sink kill switch | MEDIUM |
| F0974 | /home/tom/Projects/claude-code/src/services/analytics/sink.ts | services/analytics/ | ts | Analytics event sink interface | HIGH |
| F0975 | /home/tom/Projects/claude-code/src/services/api/adminRequests.ts | services/api/ | ts | Admin API request functions | HIGH |
| F0976 | /home/tom/Projects/claude-code/src/services/api/bootstrap.ts | services/api/ | ts | API bootstrap/initialization | CRITICAL |
| F0977 | /home/tom/Projects/claude-code/src/services/api/claude.ts | services/api/ | ts | Claude API client wrapper | CRITICAL |
| F0978 | /home/tom/Projects/claude-code/src/services/api/client.ts | services/api/ | ts | Base API HTTP client | CRITICAL |
| F0979 | /home/tom/Projects/claude-code/src/services/api/dumpPrompts.ts | services/api/ | ts | Debug prompt dumping utility | LOW |
| F0980 | /home/tom/Projects/claude-code/src/services/api/emptyUsage.ts | services/api/ | ts | Empty usage object factory | LOW |
| F0981 | /home/tom/Projects/claude-code/src/services/api/errors.ts | services/api/ | ts | API error type definitions | HIGH |
| F0982 | /home/tom/Projects/claude-code/src/services/api/errorUtils.ts | services/api/ | ts | API error handling utilities | HIGH |
| F0983 | /home/tom/Projects/claude-code/src/services/api/filesApi.ts | services/api/ | ts | Files API client (upload/download) | HIGH |
| F0984 | /home/tom/Projects/claude-code/src/services/api/firstTokenDate.ts | services/api/ | ts | First token date tracking | MEDIUM |
| F0985 | /home/tom/Projects/claude-code/src/services/api/grove.ts | services/api/ | ts | Grove shared storage API client | MEDIUM |
| F0986 | /home/tom/Projects/claude-code/src/services/api/logging.ts | services/api/ | ts | API request/response logging | HIGH |
| F0987 | /home/tom/Projects/claude-code/src/services/api/metricsOptOut.ts | services/api/ | ts | Metrics opt-out management | HIGH |
| F0988 | /home/tom/Projects/claude-code/src/services/api/overageCreditGrant.ts | services/api/ | ts | Overage credit grant API | MEDIUM |
| F0989 | /home/tom/Projects/claude-code/src/services/api/promptCacheBreakDetection.ts | services/api/ | ts | Prompt cache break detection | HIGH |
| F0990 | /home/tom/Projects/claude-code/src/services/api/referral.ts | services/api/ | ts | Referral code API | MEDIUM |
| F0991 | /home/tom/Projects/claude-code/src/services/api/sessionIngress.ts | services/api/ | ts | Session ingress/auth endpoint | CRITICAL |
| F0992 | /home/tom/Projects/claude-code/src/services/api/ultrareviewQuota.ts | services/api/ | ts | UltraReview quota API | MEDIUM |
| F0993 | /home/tom/Projects/claude-code/src/services/api/usage.ts | services/api/ | ts | Usage statistics API | HIGH |
| F0994 | /home/tom/Projects/claude-code/src/services/api/withRetry.ts | services/api/ | ts | API call retry wrapper | HIGH |
| F0995 | /home/tom/Projects/claude-code/src/services/autoDream/autoDream.ts | services/autoDream/ | ts | AutoDream background task orchestration | HIGH |
| F0996 | /home/tom/Projects/claude-code/src/services/autoDream/config.ts | services/autoDream/ | ts | AutoDream configuration | MEDIUM |
| F0997 | /home/tom/Projects/claude-code/src/services/autoDream/consolidationLock.ts | services/autoDream/ | ts | AutoDream consolidation lock | MEDIUM |
| F0998 | /home/tom/Projects/claude-code/src/services/autoDream/consolidationPrompt.ts | services/autoDream/ | ts | AutoDream consolidation prompt | HIGH |
| F0999 | /home/tom/Projects/claude-code/src/services/awaySummary.ts | services/ | ts | Away/inactive session summary service | HIGH |
| F1000 | /home/tom/Projects/claude-code/src/services/claudeAiLimitsHook.ts | services/ | ts | Claude.ai billing limits hook | HIGH |
| F1001 | /home/tom/Projects/claude-code/src/services/claudeAiLimits.ts | services/ | ts | Claude.ai subscription limits service | HIGH |
| F1002 | /home/tom/Projects/claude-code/src/services/compact/apiMicrocompact.ts | services/compact/ | ts | API-side micro-compaction | HIGH |
| F1003 | /home/tom/Projects/claude-code/src/services/compact/autoCompact.ts | services/compact/ | ts | Automatic compaction trigger logic | HIGH |
| F1004 | /home/tom/Projects/claude-code/src/services/compact/compact.ts | services/compact/ | ts | Core conversation compaction service | CRITICAL |
| F1005 | /home/tom/Projects/claude-code/src/services/compact/compactWarningHook.ts | services/compact/ | ts | Compaction warning notification hook | HIGH |
| F1006 | /home/tom/Projects/claude-code/src/services/compact/compactWarningState.ts | services/compact/ | ts | Compaction warning state | MEDIUM |
| F1007 | /home/tom/Projects/claude-code/src/services/compact/grouping.ts | services/compact/ | ts | Message grouping for compaction | HIGH |
| F1008 | /home/tom/Projects/claude-code/src/services/compact/microCompact.ts | services/compact/ | ts | Micro-compaction logic | HIGH |
| F1009 | /home/tom/Projects/claude-code/src/services/compact/postCompactCleanup.ts | services/compact/ | ts | Post-compaction cleanup operations | MEDIUM |
| F1010 | /home/tom/Projects/claude-code/src/services/compact/prompt.ts | services/compact/ | ts | Compaction system prompt | HIGH |
| F1011 | /home/tom/Projects/claude-code/src/services/compact/sessionMemoryCompact.ts | services/compact/ | ts | Session memory compaction | HIGH |
| F1012 | /home/tom/Projects/claude-code/src/services/compact/timeBasedMCConfig.ts | services/compact/ | ts | Time-based micro-compact configuration | MEDIUM |
| F1013 | /home/tom/Projects/claude-code/src/services/diagnosticTracking.ts | services/ | ts | Diagnostic event tracking service | MEDIUM |
| F1014 | /home/tom/Projects/claude-code/src/services/extractMemories/extractMemories.ts | services/extractMemories/ | ts | Memory extraction from conversations | HIGH |
| F1015 | /home/tom/Projects/claude-code/src/services/extractMemories/prompts.ts | services/extractMemories/ | ts | Memory extraction system prompts | HIGH |
| F1016 | /home/tom/Projects/claude-code/src/services/internalLogging.ts | services/ | ts | Internal structured logging service | HIGH |
| F1017 | /home/tom/Projects/claude-code/src/services/lsp/config.ts | services/lsp/ | ts | LSP server configuration | HIGH |
| F1018 | /home/tom/Projects/claude-code/src/services/lsp/LSPClient.ts | services/lsp/ | ts | LSP client implementation | HIGH |
| F1019 | /home/tom/Projects/claude-code/src/services/lsp/LSPDiagnosticRegistry.ts | services/lsp/ | ts | LSP diagnostic (error/warning) registry | HIGH |
| F1020 | /home/tom/Projects/claude-code/src/services/lsp/LSPServerInstance.ts | services/lsp/ | ts | Individual LSP server instance | HIGH |
| F1021 | /home/tom/Projects/claude-code/src/services/lsp/LSPServerManager.ts | services/lsp/ | ts | LSP server process manager | HIGH |
| F1022 | /home/tom/Projects/claude-code/src/services/lsp/manager.ts | services/lsp/ | ts | LSP manager high-level API | HIGH |
| F1023 | /home/tom/Projects/claude-code/src/services/lsp/passiveFeedback.ts | services/lsp/ | ts | LSP passive feedback collection | MEDIUM |
| F1024 | /home/tom/Projects/claude-code/src/services/MagicDocs/magicDocs.ts | services/MagicDocs/ | ts | MagicDocs auto-documentation service | HIGH |
| F1025 | /home/tom/Projects/claude-code/src/services/MagicDocs/prompts.ts | services/MagicDocs/ | ts | MagicDocs generation prompts | HIGH |
| F1026 | /home/tom/Projects/claude-code/src/services/mcp/auth.ts | services/mcp/ | ts | MCP authentication service | HIGH |
| F1027 | /home/tom/Projects/claude-code/src/services/mcp/channelAllowlist.ts | services/mcp/ | ts | MCP channel server allowlist | HIGH |
| F1028 | /home/tom/Projects/claude-code/src/services/mcp/channelNotification.ts | services/mcp/ | ts | MCP channel notification handler | MEDIUM |
| F1029 | /home/tom/Projects/claude-code/src/services/mcp/channelPermissions.ts | services/mcp/ | ts | MCP channel permission checks | HIGH |
| F1030 | /home/tom/Projects/claude-code/src/services/mcp/claudeai.ts | services/mcp/ | ts | Claude.ai MCP integration | HIGH |
| F1031 | /home/tom/Projects/claude-code/src/services/mcp/client.ts | services/mcp/ | ts | MCP client implementation | CRITICAL |
| F1032 | /home/tom/Projects/claude-code/src/services/mcp/config.ts | services/mcp/ | ts | MCP server configuration loader | CRITICAL |
| F1033 | /home/tom/Projects/claude-code/src/services/mcp/elicitationHandler.ts | services/mcp/ | ts | MCP elicitation (user-input request) handler | HIGH |
| F1034 | /home/tom/Projects/claude-code/src/services/mcp/envExpansion.ts | services/mcp/ | ts | Environment variable expansion in MCP config | HIGH |
| F1035 | /home/tom/Projects/claude-code/src/services/mcp/headersHelper.ts | services/mcp/ | ts | HTTP headers helper for MCP requests | MEDIUM |
| F1036 | /home/tom/Projects/claude-code/src/services/mcp/InProcessTransport.ts | services/mcp/ | ts | In-process MCP transport (no subprocess) | HIGH |
| F1037 | /home/tom/Projects/claude-code/src/services/mcp/MCPConnectionManager.tsx | services/mcp/ | tsx | MCP connection lifecycle manager | CRITICAL |
| F1038 | /home/tom/Projects/claude-code/src/services/mcp/mcpStringUtils.ts | services/mcp/ | ts | MCP string utilities | LOW |
| F1039 | /home/tom/Projects/claude-code/src/services/mcp/normalization.ts | services/mcp/ | ts | MCP tool/resource name normalization | HIGH |
| F1040 | /home/tom/Projects/claude-code/src/services/mcp/oauthPort.ts | services/mcp/ | ts | MCP OAuth port/callback listener | HIGH |
| F1041 | /home/tom/Projects/claude-code/src/services/mcp/officialRegistry.ts | services/mcp/ | ts | Official MCP server registry | HIGH |
| F1042 | /home/tom/Projects/claude-code/src/services/mcp/SdkControlTransport.ts | services/mcp/ | ts | SDK control transport for MCP | HIGH |
| F1043 | /home/tom/Projects/claude-code/src/services/mcpServerApproval.tsx | services/ | tsx | MCP server trust approval service | HIGH |
| F1044 | /home/tom/Projects/claude-code/src/services/mcp/types.ts | services/mcp/ | ts | MCP service type definitions | LOW |
| F1045 | /home/tom/Projects/claude-code/src/services/mcp/useManageMCPConnections.ts | services/mcp/ | ts | MCP connection management hook | HIGH |
| F1046 | /home/tom/Projects/claude-code/src/services/mcp/utils.ts | services/mcp/ | ts | MCP service utilities | MEDIUM |
| F1047 | /home/tom/Projects/claude-code/src/services/mcp/vscodeSdkMcp.ts | services/mcp/ | ts | VSCode SDK MCP integration | HIGH |
| F1048 | /home/tom/Projects/claude-code/src/services/mcp/xaaIdpLogin.ts | services/mcp/ | ts | XAA IdP login via MCP | HIGH |
| F1049 | /home/tom/Projects/claude-code/src/services/mcp/xaa.ts | services/mcp/ | ts | XAA (external auth) MCP integration | HIGH |
| F1050 | /home/tom/Projects/claude-code/src/services/mockRateLimits.ts | services/ | ts | Mock rate limit injection for testing | LOW |
| F1051 | /home/tom/Projects/claude-code/src/services/notifier.ts | services/ | ts | Notification dispatch service | HIGH |
| F1052 | /home/tom/Projects/claude-code/src/services/oauth/auth-code-listener.ts | services/oauth/ | ts | OAuth authorization code callback listener | CRITICAL |
| F1053 | /home/tom/Projects/claude-code/src/services/oauth/client.ts | services/oauth/ | ts | OAuth client implementation | CRITICAL |
| F1054 | /home/tom/Projects/claude-code/src/services/oauth/crypto.ts | services/oauth/ | ts | OAuth PKCE crypto utilities | CRITICAL |
| F1055 | /home/tom/Projects/claude-code/src/services/oauth/getOauthProfile.ts | services/oauth/ | ts | Fetch user profile via OAuth token | HIGH |
| F1056 | /home/tom/Projects/claude-code/src/services/oauth/index.ts | services/oauth/ | ts | OAuth service exports | LOW |
| F1057 | /home/tom/Projects/claude-code/src/services/plugins/pluginCliCommands.ts | services/plugins/ | ts | Plugin CLI command registration | HIGH |
| F1058 | /home/tom/Projects/claude-code/src/services/plugins/PluginInstallationManager.ts | services/plugins/ | ts | Plugin installation lifecycle manager | HIGH |
| F1059 | /home/tom/Projects/claude-code/src/services/plugins/pluginOperations.ts | services/plugins/ | ts | Plugin install/remove/update operations | HIGH |
| F1060 | /home/tom/Projects/claude-code/src/services/policyLimits/index.ts | services/policyLimits/ | ts | Policy limits service exports | LOW |
| F1061 | /home/tom/Projects/claude-code/src/services/policyLimits/types.ts | services/policyLimits/ | ts | Policy limits type definitions | MEDIUM |
| F1062 | /home/tom/Projects/claude-code/src/services/preventSleep.ts | services/ | ts | System sleep prevention service | MEDIUM |
| F1063 | /home/tom/Projects/claude-code/src/services/PromptSuggestion/promptSuggestion.ts | services/PromptSuggestion/ | ts | AI-powered prompt suggestion service | HIGH |
| F1064 | /home/tom/Projects/claude-code/src/services/PromptSuggestion/speculation.ts | services/PromptSuggestion/ | ts | Speculative prompt pre-fetching | HIGH |
| F1065 | /home/tom/Projects/claude-code/src/services/rateLimitMessages.ts | services/ | ts | Rate limit message formatting | HIGH |
| F1066 | /home/tom/Projects/claude-code/src/services/rateLimitMocking.ts | services/ | ts | Rate limit mock injection | LOW |
| F1067 | /home/tom/Projects/claude-code/src/services/remoteManagedSettings/index.ts | services/remoteManagedSettings/ | ts | Remote managed settings exports | LOW |
| F1068 | /home/tom/Projects/claude-code/src/services/remoteManagedSettings/securityCheck.tsx | services/remoteManagedSettings/ | tsx | Remote managed settings security validation | HIGH |
| F1069 | /home/tom/Projects/claude-code/src/services/remoteManagedSettings/syncCacheState.ts | services/remoteManagedSettings/ | ts | Remote settings sync cache state | MEDIUM |
| F1070 | /home/tom/Projects/claude-code/src/services/remoteManagedSettings/syncCache.ts | services/remoteManagedSettings/ | ts | Remote settings sync cache | HIGH |
| F1071 | /home/tom/Projects/claude-code/src/services/remoteManagedSettings/types.ts | services/remoteManagedSettings/ | ts | Remote managed settings type definitions | LOW |
| F1072 | /home/tom/Projects/claude-code/src/services/SessionMemory/prompts.ts | services/SessionMemory/ | ts | Session memory system prompts | HIGH |
| F1073 | /home/tom/Projects/claude-code/src/services/SessionMemory/sessionMemory.ts | services/SessionMemory/ | ts | Session memory service | HIGH |
| F1074 | /home/tom/Projects/claude-code/src/services/SessionMemory/sessionMemoryUtils.ts | services/SessionMemory/ | ts | Session memory utility functions | MEDIUM |
| F1075 | /home/tom/Projects/claude-code/src/services/settingsSync/index.ts | services/settingsSync/ | ts | Settings sync service exports | LOW |
| F1076 | /home/tom/Projects/claude-code/src/services/settingsSync/types.ts | services/settingsSync/ | ts | Settings sync type definitions | LOW |
| F1077 | /home/tom/Projects/claude-code/src/services/teamMemorySync/index.ts | services/teamMemorySync/ | ts | Team memory sync exports | LOW |
| F1078 | /home/tom/Projects/claude-code/src/services/teamMemorySync/secretScanner.ts | services/teamMemorySync/ | ts | Secret pattern scanner for team memory | HIGH |
| F1079 | /home/tom/Projects/claude-code/src/services/teamMemorySync/teamMemSecretGuard.ts | services/teamMemorySync/ | ts | Team memory secret guard | HIGH |
| F1080 | /home/tom/Projects/claude-code/src/services/teamMemorySync/types.ts | services/teamMemorySync/ | ts | Team memory sync type definitions | LOW |
| F1081 | /home/tom/Projects/claude-code/src/services/teamMemorySync/watcher.ts | services/teamMemorySync/ | ts | Team memory file system watcher | HIGH |
| F1082 | /home/tom/Projects/claude-code/src/services/tips/tipHistory.ts | services/tips/ | ts | Tip display history tracking | LOW |
| F1083 | /home/tom/Projects/claude-code/src/services/tips/tipRegistry.ts | services/tips/ | ts | Tip content registry | LOW |
| F1084 | /home/tom/Projects/claude-code/src/services/tips/tipScheduler.ts | services/tips/ | ts | Tip display scheduling logic | LOW |
| F1085 | /home/tom/Projects/claude-code/src/services/tokenEstimation.ts | services/ | ts | Token count estimation service | HIGH |
| F1086 | /home/tom/Projects/claude-code/src/services/tools/StreamingToolExecutor.ts | services/tools/ | ts | Streaming tool execution engine | CRITICAL |
| F1087 | /home/tom/Projects/claude-code/src/services/tools/toolExecution.ts | services/tools/ | ts | Tool execution orchestration | CRITICAL |
| F1088 | /home/tom/Projects/claude-code/src/services/tools/toolHooks.ts | services/tools/ | ts | Tool execution hook integration | HIGH |
| F1089 | /home/tom/Projects/claude-code/src/services/tools/toolOrchestration.ts | services/tools/ | ts | Multi-tool parallel orchestration | HIGH |
| F1090 | /home/tom/Projects/claude-code/src/services/toolUseSummary/toolUseSummaryGenerator.ts | services/toolUseSummary/ | ts | Tool use summary generation | MEDIUM |
| F1091 | /home/tom/Projects/claude-code/src/services/vcr.ts | services/ | ts | VCR (record/replay) service for testing | LOW |
| F1092 | /home/tom/Projects/claude-code/src/services/voiceKeyterms.ts | services/ | ts | Voice command key terms | MEDIUM |
| F1093 | /home/tom/Projects/claude-code/src/services/voiceStreamSTT.ts | services/ | ts | Streaming speech-to-text service | HIGH |
| F1094 | /home/tom/Projects/claude-code/src/services/voice.ts | services/ | ts | Voice service orchestration | HIGH |
| F1095 | /home/tom/Projects/claude-code/src/setup.ts | src/ | ts | Application setup/initialization routines | CRITICAL |
| F1096 | /home/tom/Projects/claude-code/src/skills/bundled/batch.ts | skills/bundled/ | ts | Batch processing skill | HIGH |
| F1097 | /home/tom/Projects/claude-code/src/skills/bundled/claudeApiContent.ts | skills/bundled/ | ts | Claude API skill content/prompt | HIGH |
| F1098 | /home/tom/Projects/claude-code/src/skills/bundled/claudeApi.ts | skills/bundled/ | ts | Claude API usage skill | HIGH |
| F1099 | /home/tom/Projects/claude-code/src/skills/bundled/claudeInChrome.ts | skills/bundled/ | ts | Claude-in-Chrome skill | HIGH |
| F1100 | /home/tom/Projects/claude-code/src/skills/bundled/debug.ts | skills/bundled/ | ts | Debug skill | MEDIUM |
| F1101 | /home/tom/Projects/claude-code/src/skills/bundled/index.ts | skills/bundled/ | ts | Bundled skills registry | HIGH |
| F1102 | /home/tom/Projects/claude-code/src/skills/bundled/keybindings.ts | skills/bundled/ | ts | Keybindings skill | HIGH |
| F1103 | /home/tom/Projects/claude-code/src/skills/bundled/loop.ts | skills/bundled/ | ts | Loop (recurring task) skill | HIGH |
| F1104 | /home/tom/Projects/claude-code/src/skills/bundled/loremIpsum.ts | skills/bundled/ | ts | Lorem ipsum generator skill | LOW |
| F1105 | /home/tom/Projects/claude-code/src/skills/bundled/remember.ts | skills/bundled/ | ts | Memory/remember skill | HIGH |
| F1106 | /home/tom/Projects/claude-code/src/skills/bundled/scheduleRemoteAgents.ts | skills/bundled/ | ts | Schedule remote agents skill | HIGH |
| F1107 | /home/tom/Projects/claude-code/src/skills/bundled/simplify.ts | skills/bundled/ | ts | Code simplification skill | HIGH |
| F1108 | /home/tom/Projects/claude-code/src/skills/bundled/skillify.ts | skills/bundled/ | ts | Create new skill from conversation skill | HIGH |
| F1109 | /home/tom/Projects/claude-code/src/skills/bundledSkills.ts | skills/ | ts | Bundled skills loader and registry | HIGH |
| F1110 | /home/tom/Projects/claude-code/src/skills/bundled/stuck.ts | skills/bundled/ | ts | Stuck/help skill | HIGH |
| F1111 | /home/tom/Projects/claude-code/src/skills/bundled/updateConfig.ts | skills/bundled/ | ts | Update config skill | HIGH |
| F1112 | /home/tom/Projects/claude-code/src/skills/bundled/verifyContent.ts | skills/bundled/ | ts | Verify content skill content | HIGH |
| F1113 | /home/tom/Projects/claude-code/src/skills/bundled/verify.ts | skills/bundled/ | ts | Verify/validate skill | HIGH |
| F1114 | /home/tom/Projects/claude-code/src/skills/loadSkillsDir.ts | skills/ | ts | Loads skills from directory | HIGH |
| F1115 | /home/tom/Projects/claude-code/src/skills/mcpSkillBuilders.ts | skills/ | ts | MCP-based skill builders | HIGH |
| F1116 | /home/tom/Projects/claude-code/src/state/AppStateStore.ts | state/ | ts | App state store singleton | CRITICAL |
| F1117 | /home/tom/Projects/claude-code/src/state/AppState.tsx | state/ | tsx | App state type definitions and context | CRITICAL |
| F1118 | /home/tom/Projects/claude-code/src/state/onChangeAppState.ts | state/ | ts | App state change listener | HIGH |
| F1119 | /home/tom/Projects/claude-code/src/state/selectors.ts | state/ | ts | App state selector functions | HIGH |
| F1120 | /home/tom/Projects/claude-code/src/state/store.ts | state/ | ts | State store implementation | CRITICAL |
| F1121 | /home/tom/Projects/claude-code/src/state/teammateViewHelpers.ts | state/ | ts | Teammate view state helpers | MEDIUM |
| F1122 | /home/tom/Projects/claude-code/src/tasks/DreamTask/DreamTask.ts | tasks/DreamTask/ | ts | Dream (background autonomous) task implementation | HIGH |
| F1123 | /home/tom/Projects/claude-code/src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx | tasks/InProcessTeammateTask/ | tsx | In-process teammate task implementation | HIGH |
| F1124 | /home/tom/Projects/claude-code/src/tasks/InProcessTeammateTask/types.ts | tasks/InProcessTeammateTask/ | ts | In-process teammate task type definitions | LOW |
| F1125 | /home/tom/Projects/claude-code/src/tasks/LocalAgentTask/LocalAgentTask.tsx | tasks/LocalAgentTask/ | tsx | Local agent task implementation | HIGH |
| F1126 | /home/tom/Projects/claude-code/src/tasks/LocalMainSessionTask.ts | tasks/ | ts | Local main session task | CRITICAL |
| F1127 | /home/tom/Projects/claude-code/src/tasks/LocalShellTask/guards.ts | tasks/LocalShellTask/ | ts | Shell task type guards | MEDIUM |
| F1128 | /home/tom/Projects/claude-code/src/tasks/LocalShellTask/killShellTasks.ts | tasks/LocalShellTask/ | ts | Shell task kill/cleanup | HIGH |
| F1129 | /home/tom/Projects/claude-code/src/tasks/LocalShellTask/LocalShellTask.tsx | tasks/LocalShellTask/ | tsx | Local shell task implementation | HIGH |
| F1130 | /home/tom/Projects/claude-code/src/tasks/pillLabel.ts | tasks/ | ts | Task pill/badge label generation | LOW |
| F1131 | /home/tom/Projects/claude-code/src/tasks/RemoteAgentTask/RemoteAgentTask.tsx | tasks/RemoteAgentTask/ | tsx | Remote agent task implementation | HIGH |
| F1132 | /home/tom/Projects/claude-code/src/tasks/stopTask.ts | tasks/ | ts | Task stop/cancel utility | HIGH |
| F1133 | /home/tom/Projects/claude-code/src/tasks.ts | src/ | ts | Task registry and factory | HIGH |
| F1134 | /home/tom/Projects/claude-code/src/tasks/types.ts | tasks/ | ts | Task type definitions | HIGH |
| F1135 | /home/tom/Projects/claude-code/src/Task.ts | src/ | ts | Task base class and interface | HIGH |
| F1136 | /home/tom/Projects/claude-code/src/tools/AgentTool/agentColorManager.ts | tools/AgentTool/ | ts | Agent color assignment manager | LOW |
| F1137 | /home/tom/Projects/claude-code/src/tools/AgentTool/agentDisplay.ts | tools/AgentTool/ | ts | Agent display/formatting utilities | MEDIUM |
| F1138 | /home/tom/Projects/claude-code/src/tools/AgentTool/agentMemorySnapshot.ts | tools/AgentTool/ | ts | Agent memory snapshot management | HIGH |
| F1139 | /home/tom/Projects/claude-code/src/tools/AgentTool/agentMemory.ts | tools/AgentTool/ | ts | Agent memory operations | HIGH |
| F1140 | /home/tom/Projects/claude-code/src/tools/AgentTool/AgentTool.tsx | tools/AgentTool/ | tsx | AgentTool - spawns and manages subagents | CRITICAL |
| F1141 | /home/tom/Projects/claude-code/src/tools/AgentTool/agentToolUtils.ts | tools/AgentTool/ | ts | Agent tool utility functions | HIGH |
| F1142 | /home/tom/Projects/claude-code/src/tools/AgentTool/builtInAgents.ts | tools/AgentTool/ | ts | Built-in agent definitions registry | HIGH |
| F1143 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/claudeCodeGuideAgent.ts | tools/AgentTool/built-in/ | ts | Claude Code guide built-in agent | HIGH |
| F1144 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/exploreAgent.ts | tools/AgentTool/built-in/ | ts | Explore/research built-in agent | HIGH |
| F1145 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/generalPurposeAgent.ts | tools/AgentTool/built-in/ | ts | General purpose built-in agent | HIGH |
| F1146 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/planAgent.ts | tools/AgentTool/built-in/ | ts | Planning built-in agent | HIGH |
| F1147 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/statuslineSetup.ts | tools/AgentTool/built-in/ | ts | Status line setup for built-in agents | MEDIUM |
| F1148 | /home/tom/Projects/claude-code/src/tools/AgentTool/built-in/verificationAgent.ts | tools/AgentTool/built-in/ | ts | Verification built-in agent | HIGH |
| F1149 | /home/tom/Projects/claude-code/src/tools/AgentTool/constants.ts | tools/AgentTool/ | ts | Agent tool constants | MEDIUM |
| F1150 | /home/tom/Projects/claude-code/src/tools/AgentTool/forkSubagent.ts | tools/AgentTool/ | ts | Subagent forking logic | HIGH |
| F1151 | /home/tom/Projects/claude-code/src/tools/AgentTool/loadAgentsDir.ts | tools/AgentTool/ | ts | Loads agent definitions from directory | HIGH |
| F1152 | /home/tom/Projects/claude-code/src/tools/AgentTool/prompt.ts | tools/AgentTool/ | ts | AgentTool system prompt | HIGH |
| F1153 | /home/tom/Projects/claude-code/src/tools/AgentTool/resumeAgent.ts | tools/AgentTool/ | ts | Resume suspended agent logic | HIGH |
| F1154 | /home/tom/Projects/claude-code/src/tools/AgentTool/runAgent.ts | tools/AgentTool/ | ts | Agent execution runner | CRITICAL |
| F1155 | /home/tom/Projects/claude-code/src/tools/AgentTool/UI.tsx | tools/AgentTool/ | tsx | AgentTool UI display component | MEDIUM |
| F1156 | /home/tom/Projects/claude-code/src/tools/AskUserQuestionTool/AskUserQuestionTool.tsx | tools/AskUserQuestionTool/ | tsx | AskUserQuestion tool implementation | HIGH |
| F1157 | /home/tom/Projects/claude-code/src/tools/AskUserQuestionTool/prompt.ts | tools/AskUserQuestionTool/ | ts | AskUserQuestion tool prompt | HIGH |
| F1158 | /home/tom/Projects/claude-code/src/tools/BashTool/bashCommandHelpers.ts | tools/BashTool/ | ts | Bash command helper utilities | HIGH |
| F1159 | /home/tom/Projects/claude-code/src/tools/BashTool/bashPermissions.ts | tools/BashTool/ | ts | Bash tool permission checking | CRITICAL |
| F1160 | /home/tom/Projects/claude-code/src/tools/BashTool/bashSecurity.ts | tools/BashTool/ | ts | Bash command security analysis | CRITICAL |
| F1161 | /home/tom/Projects/claude-code/src/tools/BashTool/BashToolResultMessage.tsx | tools/BashTool/ | tsx | Bash tool result message display | MEDIUM |
| F1162 | /home/tom/Projects/claude-code/src/tools/BashTool/BashTool.tsx | tools/BashTool/ | tsx | BashTool implementation - executes shell commands | CRITICAL |
| F1163 | /home/tom/Projects/claude-code/src/tools/BashTool/commandSemantics.ts | tools/BashTool/ | ts | Command semantic analysis (read-only, destructive) | CRITICAL |
| F1164 | /home/tom/Projects/claude-code/src/tools/BashTool/commentLabel.ts | tools/BashTool/ | ts | Comment label extraction from bash commands | MEDIUM |
| F1165 | /home/tom/Projects/claude-code/src/tools/BashTool/destructiveCommandWarning.ts | tools/BashTool/ | ts | Destructive command detection and warning | HIGH |
| F1166 | /home/tom/Projects/claude-code/src/tools/BashTool/modeValidation.ts | tools/BashTool/ | ts | Bash mode validation (read-only, plan) | HIGH |
| F1167 | /home/tom/Projects/claude-code/src/tools/BashTool/pathValidation.ts | tools/BashTool/ | ts | Bash path argument validation | HIGH |
| F1168 | /home/tom/Projects/claude-code/src/tools/BashTool/prompt.ts | tools/BashTool/ | ts | BashTool system prompt | HIGH |
| F1169 | /home/tom/Projects/claude-code/src/tools/BashTool/readOnlyValidation.ts | tools/BashTool/ | ts | Read-only mode bash command validation | HIGH |
| F1170 | /home/tom/Projects/claude-code/src/tools/BashTool/sedEditParser.ts | tools/BashTool/ | ts | Sed edit command parser for structured diffs | HIGH |
| F1171 | /home/tom/Projects/claude-code/src/tools/BashTool/sedValidation.ts | tools/BashTool/ | ts | Sed command validation | HIGH |
| F1172 | /home/tom/Projects/claude-code/src/tools/BashTool/shouldUseSandbox.ts | tools/BashTool/ | ts | Sandbox decision logic for bash | HIGH |
| F1173 | /home/tom/Projects/claude-code/src/tools/BashTool/toolName.ts | tools/BashTool/ | ts | BashTool name constant | LOW |
| F1174 | /home/tom/Projects/claude-code/src/tools/BashTool/UI.tsx | tools/BashTool/ | tsx | BashTool UI component | MEDIUM |
| F1175 | /home/tom/Projects/claude-code/src/tools/BashTool/utils.ts | tools/BashTool/ | ts | BashTool utility functions | HIGH |
| F1176 | /home/tom/Projects/claude-code/src/tools/BriefTool/attachments.ts | tools/BriefTool/ | ts | Brief tool attachment handling | HIGH |
| F1177 | /home/tom/Projects/claude-code/src/tools/BriefTool/BriefTool.ts | tools/BriefTool/ | ts | BriefTool - uploads context as brief | HIGH |
| F1178 | /home/tom/Projects/claude-code/src/tools/BriefTool/prompt.ts | tools/BriefTool/ | ts | BriefTool prompt | MEDIUM |
| F1179 | /home/tom/Projects/claude-code/src/tools/BriefTool/UI.tsx | tools/BriefTool/ | tsx | BriefTool UI component | LOW |
| F1180 | /home/tom/Projects/claude-code/src/tools/BriefTool/upload.ts | tools/BriefTool/ | ts | Brief upload to API | HIGH |
| F1181 | /home/tom/Projects/claude-code/src/tools/ConfigTool/ConfigTool.ts | tools/ConfigTool/ | ts | ConfigTool - reads/writes settings | HIGH |
| F1182 | /home/tom/Projects/claude-code/src/tools/ConfigTool/constants.ts | tools/ConfigTool/ | ts | ConfigTool constants | LOW |
| F1183 | /home/tom/Projects/claude-code/src/tools/ConfigTool/prompt.ts | tools/ConfigTool/ | ts | ConfigTool prompt | MEDIUM |
| F1184 | /home/tom/Projects/claude-code/src/tools/ConfigTool/supportedSettings.ts | tools/ConfigTool/ | ts | Settings supported by ConfigTool | HIGH |
| F1185 | /home/tom/Projects/claude-code/src/tools/ConfigTool/UI.tsx | tools/ConfigTool/ | tsx | ConfigTool UI component | LOW |
| F1186 | /home/tom/Projects/claude-code/src/tools/EnterPlanModeTool/constants.ts | tools/EnterPlanModeTool/ | ts | EnterPlanMode tool constants | LOW |
| F1187 | /home/tom/Projects/claude-code/src/tools/EnterPlanModeTool/EnterPlanModeTool.ts | tools/EnterPlanModeTool/ | ts | EnterPlanMode tool implementation | HIGH |
| F1188 | /home/tom/Projects/claude-code/src/tools/EnterPlanModeTool/prompt.ts | tools/EnterPlanModeTool/ | ts | EnterPlanMode tool prompt | HIGH |
| F1189 | /home/tom/Projects/claude-code/src/tools/EnterPlanModeTool/UI.tsx | tools/EnterPlanModeTool/ | tsx | EnterPlanMode UI component | MEDIUM |
| F1190 | /home/tom/Projects/claude-code/src/tools/EnterWorktreeTool/constants.ts | tools/EnterWorktreeTool/ | ts | EnterWorktree tool constants | LOW |
| F1191 | /home/tom/Projects/claude-code/src/tools/EnterWorktreeTool/EnterWorktreeTool.ts | tools/EnterWorktreeTool/ | ts | EnterWorktree tool implementation | HIGH |
| F1192 | /home/tom/Projects/claude-code/src/tools/EnterWorktreeTool/prompt.ts | tools/EnterWorktreeTool/ | ts | EnterWorktree tool prompt | MEDIUM |
| F1193 | /home/tom/Projects/claude-code/src/tools/EnterWorktreeTool/UI.tsx | tools/EnterWorktreeTool/ | tsx | EnterWorktree UI component | LOW |
| F1194 | /home/tom/Projects/claude-code/src/tools/ExitPlanModeTool/constants.ts | tools/ExitPlanModeTool/ | ts | ExitPlanMode tool constants | LOW |
| F1195 | /home/tom/Projects/claude-code/src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts | tools/ExitPlanModeTool/ | ts | ExitPlanMode V2 tool implementation | HIGH |
| F1196 | /home/tom/Projects/claude-code/src/tools/ExitPlanModeTool/prompt.ts | tools/ExitPlanModeTool/ | ts | ExitPlanMode tool prompt | HIGH |
| F1197 | /home/tom/Projects/claude-code/src/tools/ExitPlanModeTool/UI.tsx | tools/ExitPlanModeTool/ | tsx | ExitPlanMode UI component | MEDIUM |
| F1198 | /home/tom/Projects/claude-code/src/tools/ExitWorktreeTool/constants.ts | tools/ExitWorktreeTool/ | ts | ExitWorktree tool constants | LOW |
| F1199 | /home/tom/Projects/claude-code/src/tools/ExitWorktreeTool/ExitWorktreeTool.ts | tools/ExitWorktreeTool/ | ts | ExitWorktree tool implementation | HIGH |
| F1200 | /home/tom/Projects/claude-code/src/tools/ExitWorktreeTool/prompt.ts | tools/ExitWorktreeTool/ | ts | ExitWorktree tool prompt | MEDIUM |
| F1201 | /home/tom/Projects/claude-code/src/tools/ExitWorktreeTool/UI.tsx | tools/ExitWorktreeTool/ | tsx | ExitWorktree UI component | LOW |
| F1202 | /home/tom/Projects/claude-code/src/tools/FileEditTool/constants.ts | tools/FileEditTool/ | ts | FileEdit tool constants | LOW |
| F1203 | /home/tom/Projects/claude-code/src/tools/FileEditTool/FileEditTool.ts | tools/FileEditTool/ | ts | FileEditTool - exact string replacement in files | CRITICAL |
| F1204 | /home/tom/Projects/claude-code/src/tools/FileEditTool/prompt.ts | tools/FileEditTool/ | ts | FileEdit tool system prompt | HIGH |
| F1205 | /home/tom/Projects/claude-code/src/tools/FileEditTool/types.ts | tools/FileEditTool/ | ts | FileEdit tool type definitions | LOW |
| F1206 | /home/tom/Projects/claude-code/src/tools/FileEditTool/UI.tsx | tools/FileEditTool/ | tsx | FileEdit tool UI component | MEDIUM |
| F1207 | /home/tom/Projects/claude-code/src/tools/FileEditTool/utils.ts | tools/FileEditTool/ | ts | FileEdit utility functions | HIGH |
| F1208 | /home/tom/Projects/claude-code/src/tools/FileReadTool/FileReadTool.ts | tools/FileReadTool/ | ts | FileReadTool - reads file contents | HIGH |
| F1209 | /home/tom/Projects/claude-code/src/tools/FileReadTool/imageProcessor.ts | tools/FileReadTool/ | ts | Image file processing for read tool | HIGH |
| F1210 | /home/tom/Projects/claude-code/src/tools/FileReadTool/limits.ts | tools/FileReadTool/ | ts | FileRead output size limits | MEDIUM |
| F1211 | /home/tom/Projects/claude-code/src/tools/FileReadTool/prompt.ts | tools/FileReadTool/ | ts | FileRead tool prompt | HIGH |
| F1212 | /home/tom/Projects/claude-code/src/tools/FileReadTool/UI.tsx | tools/FileReadTool/ | tsx | FileRead UI component | LOW |
| F1213 | /home/tom/Projects/claude-code/src/tools/FileWriteTool/FileWriteTool.ts | tools/FileWriteTool/ | ts | FileWriteTool - creates/overwrites files | CRITICAL |
| F1214 | /home/tom/Projects/claude-code/src/tools/FileWriteTool/prompt.ts | tools/FileWriteTool/ | ts | FileWrite tool prompt | HIGH |
| F1215 | /home/tom/Projects/claude-code/src/tools/FileWriteTool/UI.tsx | tools/FileWriteTool/ | tsx | FileWrite UI component | MEDIUM |
| F1216 | /home/tom/Projects/claude-code/src/tools/GlobTool/GlobTool.ts | tools/GlobTool/ | ts | GlobTool - file pattern matching | HIGH |
| F1217 | /home/tom/Projects/claude-code/src/tools/GlobTool/prompt.ts | tools/GlobTool/ | ts | GlobTool prompt | MEDIUM |
| F1218 | /home/tom/Projects/claude-code/src/tools/GlobTool/UI.tsx | tools/GlobTool/ | tsx | GlobTool UI component | LOW |
| F1219 | /home/tom/Projects/claude-code/src/tools/GrepTool/GrepTool.ts | tools/GrepTool/ | ts | GrepTool - search file contents | HIGH |
| F1220 | /home/tom/Projects/claude-code/src/tools/GrepTool/prompt.ts | tools/GrepTool/ | ts | GrepTool prompt | MEDIUM |
| F1221 | /home/tom/Projects/claude-code/src/tools/GrepTool/UI.tsx | tools/GrepTool/ | tsx | GrepTool UI component | LOW |
| F1222 | /home/tom/Projects/claude-code/src/tools/ListMcpResourcesTool/ListMcpResourcesTool.ts | tools/ListMcpResourcesTool/ | ts | ListMcpResources tool implementation | HIGH |
| F1223 | /home/tom/Projects/claude-code/src/tools/ListMcpResourcesTool/prompt.ts | tools/ListMcpResourcesTool/ | ts | ListMcpResources tool prompt | MEDIUM |
| F1224 | /home/tom/Projects/claude-code/src/tools/ListMcpResourcesTool/UI.tsx | tools/ListMcpResourcesTool/ | tsx | ListMcpResources UI component | LOW |
| F1225 | /home/tom/Projects/claude-code/src/tools/LSPTool/formatters.ts | tools/LSPTool/ | ts | LSP response formatters | MEDIUM |
| F1226 | /home/tom/Projects/claude-code/src/tools/LSPTool/LSPTool.ts | tools/LSPTool/ | ts | LSPTool - language intelligence queries | HIGH |
| F1227 | /home/tom/Projects/claude-code/src/tools/LSPTool/prompt.ts | tools/LSPTool/ | ts | LSPTool prompt | MEDIUM |
| F1228 | /home/tom/Projects/claude-code/src/tools/LSPTool/schemas.ts | tools/LSPTool/ | ts | LSPTool parameter schemas | MEDIUM |
| F1229 | /home/tom/Projects/claude-code/src/tools/LSPTool/symbolContext.ts | tools/LSPTool/ | ts | LSP symbol context extraction | HIGH |
| F1230 | /home/tom/Projects/claude-code/src/tools/LSPTool/UI.tsx | tools/LSPTool/ | tsx | LSPTool UI component | LOW |
| F1231 | /home/tom/Projects/claude-code/src/tools/McpAuthTool/McpAuthTool.ts | tools/McpAuthTool/ | ts | MCP authentication tool | HIGH |
| F1232 | /home/tom/Projects/claude-code/src/tools/MCPTool/classifyForCollapse.ts | tools/MCPTool/ | ts | Classifies MCP tool results for collapsing | MEDIUM |
| F1233 | /home/tom/Projects/claude-code/src/tools/MCPTool/MCPTool.ts | tools/MCPTool/ | ts | MCPTool - proxy wrapper for MCP server tools | HIGH |
| F1234 | /home/tom/Projects/claude-code/src/tools/MCPTool/prompt.ts | tools/MCPTool/ | ts | MCPTool prompt | MEDIUM |
| F1235 | /home/tom/Projects/claude-code/src/tools/MCPTool/UI.tsx | tools/MCPTool/ | tsx | MCPTool UI component | MEDIUM |
| F1236 | /home/tom/Projects/claude-code/src/tools/MemoryArchiveTool/MemoryArchiveTool.ts | tools/MemoryArchiveTool/ | ts | MemoryArchive tool - saves memories to disk | HIGH |
| F1237 | /home/tom/Projects/claude-code/src/tools/MemoryArchiveTool/prompt.ts | tools/MemoryArchiveTool/ | ts | MemoryArchive tool prompt | HIGH |
| F1238 | /home/tom/Projects/claude-code/src/tools/MemoryArchiveTool/UI.tsx | tools/MemoryArchiveTool/ | tsx | MemoryArchive UI component | LOW |
| F1239 | /home/tom/Projects/claude-code/src/tools/NotebookEditTool/constants.ts | tools/NotebookEditTool/ | ts | NotebookEdit tool constants | LOW |
| F1240 | /home/tom/Projects/claude-code/src/tools/NotebookEditTool/NotebookEditTool.ts | tools/NotebookEditTool/ | ts | NotebookEdit tool - edits Jupyter notebooks | HIGH |
| F1241 | /home/tom/Projects/claude-code/src/tools/NotebookEditTool/prompt.ts | tools/NotebookEditTool/ | ts | NotebookEdit tool prompt | MEDIUM |
| F1242 | /home/tom/Projects/claude-code/src/tools/NotebookEditTool/UI.tsx | tools/NotebookEditTool/ | tsx | NotebookEdit UI component | LOW |
| F1243 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/clmTypes.ts | tools/PowerShellTool/ | ts | CLM (command-line module) types for PowerShell | MEDIUM |
| F1244 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/commandSemantics.ts | tools/PowerShellTool/ | ts | PowerShell command semantic analysis | HIGH |
| F1245 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/commonParameters.ts | tools/PowerShellTool/ | ts | Common PowerShell parameter definitions | MEDIUM |
| F1246 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/destructiveCommandWarning.ts | tools/PowerShellTool/ | ts | Destructive PowerShell command detection | HIGH |
| F1247 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/gitSafety.ts | tools/PowerShellTool/ | ts | Git safety checks for PowerShell | HIGH |
| F1248 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/modeValidation.ts | tools/PowerShellTool/ | ts | PowerShell mode validation | HIGH |
| F1249 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/pathValidation.ts | tools/PowerShellTool/ | ts | PowerShell path validation | HIGH |
| F1250 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/powershellPermissions.ts | tools/PowerShellTool/ | ts | PowerShell permission checking | CRITICAL |
| F1251 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/powershellSecurity.ts | tools/PowerShellTool/ | ts | PowerShell security analysis | CRITICAL |
| F1252 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/PowerShellTool.tsx | tools/PowerShellTool/ | tsx | PowerShellTool implementation | CRITICAL |
| F1253 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/prompt.ts | tools/PowerShellTool/ | ts | PowerShellTool prompt | HIGH |
| F1254 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/readOnlyValidation.ts | tools/PowerShellTool/ | ts | Read-only PowerShell command validation | HIGH |
| F1255 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/toolName.ts | tools/PowerShellTool/ | ts | PowerShellTool name constant | LOW |
| F1256 | /home/tom/Projects/claude-code/src/tools/PowerShellTool/UI.tsx | tools/PowerShellTool/ | tsx | PowerShellTool UI component | MEDIUM |
| F1257 | /home/tom/Projects/claude-code/src/tools/ReadMcpResourceTool/prompt.ts | tools/ReadMcpResourceTool/ | ts | ReadMcpResource tool prompt | MEDIUM |
| F1258 | /home/tom/Projects/claude-code/src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts | tools/ReadMcpResourceTool/ | ts | ReadMcpResource tool implementation | HIGH |
| F1259 | /home/tom/Projects/claude-code/src/tools/ReadMcpResourceTool/UI.tsx | tools/ReadMcpResourceTool/ | tsx | ReadMcpResource UI component | LOW |
| F1260 | /home/tom/Projects/claude-code/src/tools/RemoteTriggerTool/prompt.ts | tools/RemoteTriggerTool/ | ts | RemoteTrigger tool prompt | MEDIUM |
| F1261 | /home/tom/Projects/claude-code/src/tools/RemoteTriggerTool/RemoteTriggerTool.ts | tools/RemoteTriggerTool/ | ts | RemoteTrigger tool - fires remote agents | HIGH |
| F1262 | /home/tom/Projects/claude-code/src/tools/RemoteTriggerTool/UI.tsx | tools/RemoteTriggerTool/ | tsx | RemoteTrigger UI component | LOW |
| F1263 | /home/tom/Projects/claude-code/src/tools/REPLTool/constants.ts | tools/REPLTool/ | ts | REPLTool constants | LOW |
| F1264 | /home/tom/Projects/claude-code/src/tools/REPLTool/primitiveTools.ts | tools/REPLTool/ | ts | REPL primitive tool implementations | HIGH |
| F1265 | /home/tom/Projects/claude-code/src/tools/ScheduleCronTool/CronCreateTool.ts | tools/ScheduleCronTool/ | ts | CronCreate tool - schedules recurring agents | HIGH |
| F1266 | /home/tom/Projects/claude-code/src/tools/ScheduleCronTool/CronDeleteTool.ts | tools/ScheduleCronTool/ | ts | CronDelete tool - removes cron schedules | HIGH |
| F1267 | /home/tom/Projects/claude-code/src/tools/ScheduleCronTool/CronListTool.ts | tools/ScheduleCronTool/ | ts | CronList tool - lists cron schedules | HIGH |
| F1268 | /home/tom/Projects/claude-code/src/tools/ScheduleCronTool/prompt.ts | tools/ScheduleCronTool/ | ts | ScheduleCron tools prompt | HIGH |
| F1269 | /home/tom/Projects/claude-code/src/tools/ScheduleCronTool/UI.tsx | tools/ScheduleCronTool/ | tsx | ScheduleCron UI component | LOW |
| F1270 | /home/tom/Projects/claude-code/src/tools/SendMessageTool/constants.ts | tools/SendMessageTool/ | ts | SendMessage tool constants | LOW |
| F1271 | /home/tom/Projects/claude-code/src/tools/SendMessageTool/prompt.ts | tools/SendMessageTool/ | ts | SendMessage tool prompt | HIGH |
| F1272 | /home/tom/Projects/claude-code/src/tools/SendMessageTool/SendMessageTool.ts | tools/SendMessageTool/ | ts | SendMessage tool - agent-to-agent messaging | HIGH |
| F1273 | /home/tom/Projects/claude-code/src/tools/SendMessageTool/UI.tsx | tools/SendMessageTool/ | tsx | SendMessage UI component | LOW |
| F1274 | /home/tom/Projects/claude-code/src/tools/shared/gitOperationTracking.ts | tools/shared/ | ts | Git operation tracking for file tools | MEDIUM |
| F1275 | /home/tom/Projects/claude-code/src/tools/shared/spawnMultiAgent.ts | tools/shared/ | ts | Multi-agent spawning shared utility | HIGH |
| F1276 | /home/tom/Projects/claude-code/src/tools/SkillTool/constants.ts | tools/SkillTool/ | ts | SkillTool constants | LOW |
| F1277 | /home/tom/Projects/claude-code/src/tools/SkillTool/prompt.ts | tools/SkillTool/ | ts | SkillTool prompt | HIGH |
| F1278 | /home/tom/Projects/claude-code/src/tools/SkillTool/SkillTool.ts | tools/SkillTool/ | ts | SkillTool - invokes named skills | HIGH |
| F1279 | /home/tom/Projects/claude-code/src/tools/SkillTool/UI.tsx | tools/SkillTool/ | tsx | SkillTool UI component | LOW |
| F1280 | /home/tom/Projects/claude-code/src/tools/SleepTool/prompt.ts | tools/SleepTool/ | ts | SleepTool prompt | LOW |
| F1281 | /home/tom/Projects/claude-code/src/tools/SyntheticOutputTool/SyntheticOutputTool.ts | tools/SyntheticOutputTool/ | ts | Synthetic output tool (injects fake tool results) | HIGH |
| F1282 | /home/tom/Projects/claude-code/src/tools/TaskCreateTool/constants.ts | tools/TaskCreateTool/ | ts | TaskCreate tool constants | LOW |
| F1283 | /home/tom/Projects/claude-code/src/tools/TaskCreateTool/prompt.ts | tools/TaskCreateTool/ | ts | TaskCreate tool prompt | HIGH |
| F1284 | /home/tom/Projects/claude-code/src/tools/TaskCreateTool/TaskCreateTool.ts | tools/TaskCreateTool/ | ts | TaskCreate tool - creates background tasks | HIGH |
| F1285 | /home/tom/Projects/claude-code/src/tools/TaskGetTool/constants.ts | tools/TaskGetTool/ | ts | TaskGet tool constants | LOW |
| F1286 | /home/tom/Projects/claude-code/src/tools/TaskGetTool/prompt.ts | tools/TaskGetTool/ | ts | TaskGet tool prompt | MEDIUM |
| F1287 | /home/tom/Projects/claude-code/src/tools/TaskGetTool/TaskGetTool.ts | tools/TaskGetTool/ | ts | TaskGet tool - fetches task status | HIGH |
| F1288 | /home/tom/Projects/claude-code/src/tools/TaskListTool/constants.ts | tools/TaskListTool/ | ts | TaskList tool constants | LOW |
| F1289 | /home/tom/Projects/claude-code/src/tools/TaskListTool/prompt.ts | tools/TaskListTool/ | ts | TaskList tool prompt | MEDIUM |
| F1290 | /home/tom/Projects/claude-code/src/tools/TaskListTool/TaskListTool.ts | tools/TaskListTool/ | ts | TaskList tool - lists background tasks | HIGH |
| F1291 | /home/tom/Projects/claude-code/src/tools/TaskOutputTool/constants.ts | tools/TaskOutputTool/ | ts | TaskOutput tool constants | LOW |
| F1292 | /home/tom/Projects/claude-code/src/tools/TaskOutputTool/TaskOutputTool.tsx | tools/TaskOutputTool/ | tsx | TaskOutput tool - reads task output | HIGH |
| F1293 | /home/tom/Projects/claude-code/src/tools/TaskStopTool/prompt.ts | tools/TaskStopTool/ | ts | TaskStop tool prompt | MEDIUM |
| F1294 | /home/tom/Projects/claude-code/src/tools/TaskStopTool/TaskStopTool.ts | tools/TaskStopTool/ | ts | TaskStop tool - stops background tasks | HIGH |
| F1295 | /home/tom/Projects/claude-code/src/tools/TaskStopTool/UI.tsx | tools/TaskStopTool/ | tsx | TaskStop UI component | LOW |
| F1296 | /home/tom/Projects/claude-code/src/tools/TaskUpdateTool/constants.ts | tools/TaskUpdateTool/ | ts | TaskUpdate tool constants | LOW |
| F1297 | /home/tom/Projects/claude-code/src/tools/TaskUpdateTool/prompt.ts | tools/TaskUpdateTool/ | ts | TaskUpdate tool prompt | MEDIUM |
| F1298 | /home/tom/Projects/claude-code/src/tools/TaskUpdateTool/TaskUpdateTool.ts | tools/TaskUpdateTool/ | ts | TaskUpdate tool - updates task state | HIGH |
| F1299 | /home/tom/Projects/claude-code/src/tools/TeamCreateTool/constants.ts | tools/TeamCreateTool/ | ts | TeamCreate tool constants | LOW |
| F1300 | /home/tom/Projects/claude-code/src/tools/TeamCreateTool/prompt.ts | tools/TeamCreateTool/ | ts | TeamCreate tool prompt | HIGH |
| F1301 | /home/tom/Projects/claude-code/src/tools/TeamCreateTool/TeamCreateTool.ts | tools/TeamCreateTool/ | ts | TeamCreate tool - creates swarm teams | HIGH |
| F1302 | /home/tom/Projects/claude-code/src/tools/TeamCreateTool/UI.tsx | tools/TeamCreateTool/ | tsx | TeamCreate UI component | LOW |
| F1303 | /home/tom/Projects/claude-code/src/tools/TeamDeleteTool/constants.ts | tools/TeamDeleteTool/ | ts | TeamDelete tool constants | LOW |
| F1304 | /home/tom/Projects/claude-code/src/tools/TeamDeleteTool/prompt.ts | tools/TeamDeleteTool/ | ts | TeamDelete tool prompt | MEDIUM |
| F1305 | /home/tom/Projects/claude-code/src/tools/TeamDeleteTool/TeamDeleteTool.ts | tools/TeamDeleteTool/ | ts | TeamDelete tool - removes swarm teams | HIGH |
| F1306 | /home/tom/Projects/claude-code/src/tools/TeamDeleteTool/UI.tsx | tools/TeamDeleteTool/ | tsx | TeamDelete UI component | LOW |
| F1307 | /home/tom/Projects/claude-code/src/tools/testing/TestingPermissionTool.tsx | tools/testing/ | tsx | Testing-only permission tool | LOW |
| F1308 | /home/tom/Projects/claude-code/src/tools/TodoWriteTool/constants.ts | tools/TodoWriteTool/ | ts | TodoWrite tool constants | LOW |
| F1309 | /home/tom/Projects/claude-code/src/tools/TodoWriteTool/prompt.ts | tools/TodoWriteTool/ | ts | TodoWrite tool prompt | HIGH |
| F1310 | /home/tom/Projects/claude-code/src/tools/TodoWriteTool/TodoWriteTool.ts | tools/TodoWriteTool/ | ts | TodoWriteTool - writes task lists | HIGH |
| F1311 | /home/tom/Projects/claude-code/src/tools/ToolSearchTool/constants.ts | tools/ToolSearchTool/ | ts | ToolSearch tool constants | LOW |
| F1312 | /home/tom/Projects/claude-code/src/tools/ToolSearchTool/prompt.ts | tools/ToolSearchTool/ | ts | ToolSearch tool prompt | HIGH |
| F1313 | /home/tom/Projects/claude-code/src/tools/ToolSearchTool/ToolSearchTool.ts | tools/ToolSearchTool/ | ts | ToolSearchTool - searches available tools | HIGH |
| F1314 | /home/tom/Projects/claude-code/src/tools.ts | src/ | ts | Tool registry - assembles all tools | CRITICAL |
| F1315 | /home/tom/Projects/claude-code/src/tools/utils.ts | tools/ | ts | Tool shared utility functions | HIGH |
| F1316 | /home/tom/Projects/claude-code/src/tools/WebFetchTool/preapproved.ts | tools/WebFetchTool/ | ts | Pre-approved URLs for WebFetch | HIGH |
| F1317 | /home/tom/Projects/claude-code/src/tools/WebFetchTool/prompt.ts | tools/WebFetchTool/ | ts | WebFetch tool prompt | HIGH |
| F1318 | /home/tom/Projects/claude-code/src/tools/WebFetchTool/UI.tsx | tools/WebFetchTool/ | tsx | WebFetch UI component | LOW |
| F1319 | /home/tom/Projects/claude-code/src/tools/WebFetchTool/utils.ts | tools/WebFetchTool/ | ts | WebFetch utility functions | HIGH |
| F1320 | /home/tom/Projects/claude-code/src/tools/WebFetchTool/WebFetchTool.ts | tools/WebFetchTool/ | ts | WebFetchTool - fetches web pages | HIGH |
| F1321 | /home/tom/Projects/claude-code/src/tools/WebSearchTool/prompt.ts | tools/WebSearchTool/ | ts | WebSearch tool prompt | HIGH |
| F1322 | /home/tom/Projects/claude-code/src/tools/WebSearchTool/UI.tsx | tools/WebSearchTool/ | tsx | WebSearch UI component | LOW |
| F1323 | /home/tom/Projects/claude-code/src/tools/WebSearchTool/WebSearchTool.ts | tools/WebSearchTool/ | ts | WebSearchTool - performs web searches | HIGH |
| F1324 | /home/tom/Projects/claude-code/src/Tool.ts | src/ | ts | Tool base interface and type definitions | CRITICAL |
| F1325 | /home/tom/Projects/claude-code/src/types/command.ts | types/ | ts | Command type definitions | MEDIUM |
| F1326 | /home/tom/Projects/claude-code/src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts | types/generated/ | ts | Generated: Claude Code internal event protobuf types | LOW |
| F1327 | /home/tom/Projects/claude-code/src/types/generated/events_mono/common/v1/auth.ts | types/generated/ | ts | Generated: auth event protobuf types | LOW |
| F1328 | /home/tom/Projects/claude-code/src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts | types/generated/ | ts | Generated: GrowthBook experiment event types | LOW |
| F1329 | /home/tom/Projects/claude-code/src/types/generated/google/protobuf/timestamp.ts | types/generated/ | ts | Generated: Google Protobuf timestamp type | LOW |
| F1330 | /home/tom/Projects/claude-code/src/types/hooks.ts | types/ | ts | Hook type definitions | HIGH |
| F1331 | /home/tom/Projects/claude-code/src/types/ids.ts | types/ | ts | ID type definitions (branded types) | HIGH |
| F1332 | /home/tom/Projects/claude-code/src/types/logs.ts | types/ | ts | Log entry type definitions | MEDIUM |
| F1333 | /home/tom/Projects/claude-code/src/types/permissions.ts | types/ | ts | Permission type definitions | HIGH |
| F1334 | /home/tom/Projects/claude-code/src/types/plugin.ts | types/ | ts | Plugin type definitions | HIGH |
| F1335 | /home/tom/Projects/claude-code/src/types/textInputTypes.ts | types/ | ts | Text input type definitions | MEDIUM |
| F1336 | /home/tom/Projects/claude-code/src/upstreamproxy/relay.ts | upstreamproxy/ | ts | Upstream proxy relay implementation | HIGH |
| F1337 | /home/tom/Projects/claude-code/src/upstreamproxy/upstreamproxy.ts | upstreamproxy/ | ts | Upstream proxy configuration and routing | HIGH |
| F1338 | /home/tom/Projects/claude-code/src/utils/abortController.ts | utils/ | ts | AbortController utilities | HIGH |
| F1339 | /home/tom/Projects/claude-code/src/utils/activityManager.ts | utils/ | ts | User activity tracking manager | MEDIUM |
| F1340 | /home/tom/Projects/claude-code/src/utils/advisor.ts | utils/ | ts | Advisor mode utility functions | MEDIUM |
| F1341 | /home/tom/Projects/claude-code/src/utils/agentContext.ts | utils/ | ts | Agent context assembly and management | HIGH |
| F1342 | /home/tom/Projects/claude-code/src/utils/agenticSessionSearch.ts | utils/ | ts | Semantic session search for agentic workflows | MEDIUM |
| F1343 | /home/tom/Projects/claude-code/src/utils/agentId.ts | utils/ | ts | Agent ID generation utilities | MEDIUM |
| F1344 | /home/tom/Projects/claude-code/src/utils/agentSwarmsEnabled.ts | utils/ | ts | Agent swarms feature flag check | HIGH |
| F1345 | /home/tom/Projects/claude-code/src/utils/analyzeContext.ts | utils/ | ts | Context analysis utilities | HIGH |
| F1346 | /home/tom/Projects/claude-code/src/utils/ansiToPng.ts | utils/ | ts | ANSI output to PNG conversion | LOW |
| F1347 | /home/tom/Projects/claude-code/src/utils/ansiToSvg.ts | utils/ | ts | ANSI output to SVG conversion | LOW |
| F1348 | /home/tom/Projects/claude-code/src/utils/apiPreconnect.ts | utils/ | ts | API connection pre-warming | MEDIUM |
| F1349 | /home/tom/Projects/claude-code/src/utils/api.ts | utils/ | ts | General API utility functions | HIGH |
| F1350 | /home/tom/Projects/claude-code/src/utils/appleTerminalBackup.ts | utils/ | ts | Apple Terminal backup detection | LOW |
| F1351 | /home/tom/Projects/claude-code/src/utils/argumentSubstitution.ts | utils/ | ts | Command argument substitution | MEDIUM |
| F1352 | /home/tom/Projects/claude-code/src/utils/array.ts | utils/ | ts | Array utility functions | LOW |
| F1353 | /home/tom/Projects/claude-code/src/utils/asciicast.ts | utils/ | ts | Asciicast recording format utilities | LOW |
| F1354 | /home/tom/Projects/claude-code/src/utils/attachments.ts | utils/ | ts | File/image attachment utilities | HIGH |
| F1355 | /home/tom/Projects/claude-code/src/utils/attribution.ts | utils/ | ts | Session/commit attribution utilities | MEDIUM |
| F1356 | /home/tom/Projects/claude-code/src/utils/authFileDescriptor.ts | utils/ | ts | Auth credential file descriptor | HIGH |
| F1357 | /home/tom/Projects/claude-code/src/utils/authPortable.ts | utils/ | ts | Portable auth utilities (no native deps) | HIGH |
| F1358 | /home/tom/Projects/claude-code/src/utils/auth.ts | utils/ | ts | Authentication utilities (token storage, validation) | CRITICAL |
| F1359 | /home/tom/Projects/claude-code/src/utils/autoModeDenials.ts | utils/ | ts | Auto mode denial tracking | HIGH |
| F1360 | /home/tom/Projects/claude-code/src/utils/autoRunIssue.tsx | utils/ | tsx | Auto-run issue detection and reporting | MEDIUM |
| F1361 | /home/tom/Projects/claude-code/src/utils/autoUpdater.ts | utils/ | ts | Auto-updater implementation | MEDIUM |
| F1362 | /home/tom/Projects/claude-code/src/utils/awsAuthStatusManager.ts | utils/ | ts | AWS auth status manager | HIGH |
| F1363 | /home/tom/Projects/claude-code/src/utils/aws.ts | utils/ | ts | AWS utilities (Bedrock, credentials) | HIGH |
| F1364 | /home/tom/Projects/claude-code/src/utils/backgroundHousekeeping.ts | utils/ | ts | Background housekeeping tasks | MEDIUM |
| F1365 | /home/tom/Projects/claude-code/src/utils/background/remote/preconditions.ts | utils/background/ | ts | Remote background task preconditions | MEDIUM |
| F1366 | /home/tom/Projects/claude-code/src/utils/background/remote/remoteSession.ts | utils/background/ | ts | Remote background session utilities | HIGH |
| F1367 | /home/tom/Projects/claude-code/src/utils/bash/ast.ts | utils/bash/ | ts | Bash AST (abstract syntax tree) types | HIGH |
| F1368 | /home/tom/Projects/claude-code/src/utils/bash/bashParser.ts | utils/bash/ | ts | Bash command parser | HIGH |
| F1369 | /home/tom/Projects/claude-code/src/utils/bash/bashPipeCommand.ts | utils/bash/ | ts | Bash pipe command analysis | HIGH |
| F1370 | /home/tom/Projects/claude-code/src/utils/bash/commands.ts | utils/bash/ | ts | Known bash command definitions | HIGH |
| F1371 | /home/tom/Projects/claude-code/src/utils/bash/heredoc.ts | utils/bash/ | ts | Heredoc parsing utilities | MEDIUM |
| F1372 | /home/tom/Projects/claude-code/src/utils/bash/ParsedCommand.ts | utils/bash/ | ts | Parsed bash command type | HIGH |
| F1373 | /home/tom/Projects/claude-code/src/utils/bash/parser.ts | utils/bash/ | ts | Low-level bash token parser | HIGH |
| F1374 | /home/tom/Projects/claude-code/src/utils/bash/prefix.ts | utils/bash/ | ts | Command prefix analysis | MEDIUM |
| F1375 | /home/tom/Projects/claude-code/src/utils/bash/registry.ts | utils/bash/ | ts | Bash command spec registry | HIGH |
| F1376 | /home/tom/Projects/claude-code/src/utils/bash/shellCompletion.ts | utils/bash/ | ts | Shell command tab completion | MEDIUM |
| F1377 | /home/tom/Projects/claude-code/src/utils/bash/shellPrefix.ts | utils/bash/ | ts | Shell prefix (sudo, env) analysis | HIGH |
| F1378 | /home/tom/Projects/claude-code/src/utils/bash/shellQuote.ts | utils/bash/ | ts | Shell quoting utilities | MEDIUM |
| F1379 | /home/tom/Projects/claude-code/src/utils/bash/shellQuoting.ts | utils/bash/ | ts | Shell quoting analysis | MEDIUM |
| F1380 | /home/tom/Projects/claude-code/src/utils/bash/ShellSnapshot.ts | utils/bash/ | ts | Shell environment snapshot capture | HIGH |
| F1381 | /home/tom/Projects/claude-code/src/utils/bash/specs/alias.ts | utils/bash/specs/ | ts | Alias command spec | LOW |
| F1382 | /home/tom/Projects/claude-code/src/utils/bash/specs/index.ts | utils/bash/specs/ | ts | Bash specs index | LOW |
| F1383 | /home/tom/Projects/claude-code/src/utils/bash/specs/nohup.ts | utils/bash/specs/ | ts | Nohup command spec | LOW |
| F1384 | /home/tom/Projects/claude-code/src/utils/bash/specs/pyright.ts | utils/bash/specs/ | ts | Pyright command spec | LOW |
| F1385 | /home/tom/Projects/claude-code/src/utils/bash/specs/sleep.ts | utils/bash/specs/ | ts | Sleep command spec | LOW |
| F1386 | /home/tom/Projects/claude-code/src/utils/bash/specs/srun.ts | utils/bash/specs/ | ts | Srun (SLURM) command spec | LOW |
| F1387 | /home/tom/Projects/claude-code/src/utils/bash/specs/timeout.ts | utils/bash/specs/ | ts | Timeout command spec | LOW |
| F1388 | /home/tom/Projects/claude-code/src/utils/bash/specs/time.ts | utils/bash/specs/ | ts | Time command spec | LOW |
| F1389 | /home/tom/Projects/claude-code/src/utils/bash/treeSitterAnalysis.ts | utils/bash/ | ts | Tree-sitter based bash analysis | HIGH |
| F1390 | /home/tom/Projects/claude-code/src/utils/betas.ts | utils/ | ts | Beta feature flag utilities | HIGH |
| F1391 | /home/tom/Projects/claude-code/src/utils/billing.ts | utils/ | ts | Billing and subscription utilities | HIGH |
| F1392 | /home/tom/Projects/claude-code/src/utils/binaryCheck.ts | utils/ | ts | Binary/executable existence check | MEDIUM |
| F1393 | /home/tom/Projects/claude-code/src/utils/browser.ts | utils/ | ts | Browser detection and URL opening | MEDIUM |
| F1394 | /home/tom/Projects/claude-code/src/utils/bufferedWriter.ts | utils/ | ts | Buffered file writer | MEDIUM |
| F1395 | /home/tom/Projects/claude-code/src/utils/bundledMode.ts | utils/ | ts | Bundled/portable mode detection | HIGH |
| F1396 | /home/tom/Projects/claude-code/src/utils/caCertsConfig.ts | utils/ | ts | CA certificate configuration | HIGH |
| F1397 | /home/tom/Projects/claude-code/src/utils/caCerts.ts | utils/ | ts | CA certificate loading | HIGH |
| F1398 | /home/tom/Projects/claude-code/src/utils/cachePaths.ts | utils/ | ts | Cache directory path utilities | MEDIUM |
| F1399 | /home/tom/Projects/claude-code/src/utils/CircularBuffer.ts | utils/ | ts | Circular buffer data structure | MEDIUM |
| F1400 | /home/tom/Projects/claude-code/src/utils/classifierApprovalsHook.ts | utils/ | ts | Classifier approval hook | HIGH |
| F1401 | /home/tom/Projects/claude-code/src/utils/classifierApprovals.ts | utils/ | ts | Auto-approval classifier logic | HIGH |
| F1402 | /home/tom/Projects/claude-code/src/utils/claudeCodeHints.ts | utils/ | ts | Claude Code hint/tip content | LOW |
| F1403 | /home/tom/Projects/claude-code/src/utils/claudeDesktop.ts | utils/ | ts | Claude desktop app integration | MEDIUM |
| F1404 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/chromeNativeHost.ts | utils/claudeInChrome/ | ts | Chrome native messaging host | HIGH |
| F1405 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/common.ts | utils/claudeInChrome/ | ts | Claude-in-Chrome common utilities | MEDIUM |
| F1406 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/mcpServer.ts | utils/claudeInChrome/ | ts | Claude-in-Chrome MCP server | HIGH |
| F1407 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/prompt.ts | utils/claudeInChrome/ | ts | Claude-in-Chrome system prompt | HIGH |
| F1408 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/setupPortable.ts | utils/claudeInChrome/ | ts | Portable Chrome integration setup | MEDIUM |
| F1409 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/setup.ts | utils/claudeInChrome/ | ts | Chrome integration setup | MEDIUM |
| F1410 | /home/tom/Projects/claude-code/src/utils/claudeInChrome/toolRendering.tsx | utils/claudeInChrome/ | tsx | Tool rendering for Chrome context | MEDIUM |
| F1411 | /home/tom/Projects/claude-code/src/utils/claudemd.ts | utils/ | ts | CLAUDE.md file loading and parsing | CRITICAL |
| F1412 | /home/tom/Projects/claude-code/src/utils/cleanupRegistry.ts | utils/ | ts | Process cleanup handler registry | HIGH |
| F1413 | /home/tom/Projects/claude-code/src/utils/cleanup.ts | utils/ | ts | Resource cleanup utilities | HIGH |
| F1414 | /home/tom/Projects/claude-code/src/utils/cliArgs.ts | utils/ | ts | CLI argument parsing utilities | HIGH |
| F1415 | /home/tom/Projects/claude-code/src/utils/cliHighlight.ts | utils/ | ts | CLI output syntax highlighting | MEDIUM |
| F1416 | /home/tom/Projects/claude-code/src/utils/codeIndexing.ts | utils/ | ts | Code indexing for file search | HIGH |
| F1417 | /home/tom/Projects/claude-code/src/utils/collapseBackgroundBashNotifications.ts | utils/ | ts | Collapses background bash notifications | MEDIUM |
| F1418 | /home/tom/Projects/claude-code/src/utils/collapseHookSummaries.ts | utils/ | ts | Collapses hook execution summaries | MEDIUM |
| F1419 | /home/tom/Projects/claude-code/src/utils/collapseReadSearch.ts | utils/ | ts | Collapses read/search results | MEDIUM |
| F1420 | /home/tom/Projects/claude-code/src/utils/collapseTeammateShutdowns.ts | utils/ | ts | Collapses teammate shutdown messages | MEDIUM |
| F1421 | /home/tom/Projects/claude-code/src/utils/combinedAbortSignal.ts | utils/ | ts | Combines multiple AbortSignals | MEDIUM |
| F1422 | /home/tom/Projects/claude-code/src/utils/commandLifecycle.ts | utils/ | ts | Command execution lifecycle management | HIGH |
| F1423 | /home/tom/Projects/claude-code/src/utils/commitAttribution.ts | utils/ | ts | Git commit attribution metadata | MEDIUM |
| F1424 | /home/tom/Projects/claude-code/src/utils/completionCache.ts | utils/ | ts | Completion/suggestion cache | HIGH |
| F1425 | /home/tom/Projects/claude-code/src/utils/computerUse/appNames.ts | utils/computerUse/ | ts | Computer use app name mappings | MEDIUM |
| F1426 | /home/tom/Projects/claude-code/src/utils/computerUse/cleanup.ts | utils/computerUse/ | ts | Computer use cleanup utilities | MEDIUM |
| F1427 | /home/tom/Projects/claude-code/src/utils/computerUse/common.ts | utils/computerUse/ | ts | Computer use common utilities | HIGH |
| F1428 | /home/tom/Projects/claude-code/src/utils/computerUse/computerUseLock.ts | utils/computerUse/ | ts | Computer use session lock | HIGH |
| F1429 | /home/tom/Projects/claude-code/src/utils/computerUse/drainRunLoop.ts | utils/computerUse/ | ts | Computer use run loop drain | MEDIUM |
| F1430 | /home/tom/Projects/claude-code/src/utils/computerUse/escHotkey.ts | utils/computerUse/ | ts | Computer use ESC hotkey handler | HIGH |
| F1431 | /home/tom/Projects/claude-code/src/utils/computerUse/executor.ts | utils/computerUse/ | ts | Computer use action executor | CRITICAL |
| F1432 | /home/tom/Projects/claude-code/src/utils/computerUse/gates.ts | utils/computerUse/ | ts | Computer use feature gates | HIGH |
| F1433 | /home/tom/Projects/claude-code/src/utils/computerUse/hostAdapter.ts | utils/computerUse/ | ts | Computer use host OS adapter | HIGH |
| F1434 | /home/tom/Projects/claude-code/src/utils/computerUse/inputLoader.ts | utils/computerUse/ | ts | Computer use input device loader | HIGH |
| F1435 | /home/tom/Projects/claude-code/src/utils/computerUse/mcpServer.ts | utils/computerUse/ | ts | Computer use MCP server | HIGH |
| F1436 | /home/tom/Projects/claude-code/src/utils/computerUse/setup.ts | utils/computerUse/ | ts | Computer use setup/initialization | HIGH |
| F1437 | /home/tom/Projects/claude-code/src/utils/computerUse/swiftLoader.ts | utils/computerUse/ | ts | Swift native module loader for computer use | HIGH |
| F1438 | /home/tom/Projects/claude-code/src/utils/computerUse/toolRendering.tsx | utils/computerUse/ | tsx | Computer use tool result rendering | MEDIUM |
| F1439 | /home/tom/Projects/claude-code/src/utils/computerUse/wrapper.tsx | utils/computerUse/ | tsx | Computer use session wrapper | HIGH |
| F1440 | /home/tom/Projects/claude-code/src/utils/concurrentSessions.ts | utils/ | ts | Concurrent session management | HIGH |
| F1441 | /home/tom/Projects/claude-code/src/utils/configConstants.ts | utils/ | ts | Configuration constant values | HIGH |
| F1442 | /home/tom/Projects/claude-code/src/utils/config.ts | utils/ | ts | Configuration loading and merging | CRITICAL |
| F1443 | /home/tom/Projects/claude-code/src/utils/contentArray.ts | utils/ | ts | Content array manipulation utilities | HIGH |
| F1444 | /home/tom/Projects/claude-code/src/utils/contextAnalysis.ts | utils/ | ts | Context window analysis utilities | HIGH |
| F1445 | /home/tom/Projects/claude-code/src/utils/contextSuggestions.ts | utils/ | ts | Context-aware suggestion generation | HIGH |
| F1446 | /home/tom/Projects/claude-code/src/utils/context.ts | utils/ | ts | Shared context utilities | HIGH |
| F1447 | /home/tom/Projects/claude-code/src/utils/controlMessageCompat.ts | utils/ | ts | Control message compatibility layer | MEDIUM |
| F1448 | /home/tom/Projects/claude-code/src/utils/conversationRecovery.ts | utils/ | ts | Conversation recovery on crash | HIGH |
| F1449 | /home/tom/Projects/claude-code/src/utils/cronJitterConfig.ts | utils/ | ts | Cron jitter configuration | LOW |
| F1450 | /home/tom/Projects/claude-code/src/utils/cronScheduler.ts | utils/ | ts | Cron task scheduler | HIGH |
| F1451 | /home/tom/Projects/claude-code/src/utils/cronTasksLock.ts | utils/ | ts | Cron tasks execution lock | MEDIUM |
| F1452 | /home/tom/Projects/claude-code/src/utils/cronTasks.ts | utils/ | ts | Cron task definitions and runner | HIGH |
| F1453 | /home/tom/Projects/claude-code/src/utils/cron.ts | utils/ | ts | Cron expression parsing | MEDIUM |
| F1454 | /home/tom/Projects/claude-code/src/utils/crossProjectResume.ts | utils/ | ts | Cross-project session resume | HIGH |
| F1455 | /home/tom/Projects/claude-code/src/utils/crypto.ts | utils/ | ts | Cryptographic utility functions | HIGH |
| F1456 | /home/tom/Projects/claude-code/src/utils/Cursor.ts | utils/ | ts | Cursor position and state management | MEDIUM |
| F1457 | /home/tom/Projects/claude-code/src/utils/cwd.ts | utils/ | ts | Current working directory utilities | HIGH |
| F1458 | /home/tom/Projects/claude-code/src/utils/debugFilter.ts | utils/ | ts | Debug output filtering | LOW |
| F1459 | /home/tom/Projects/claude-code/src/utils/debug.ts | utils/ | ts | Debug logging utilities | MEDIUM |
| F1460 | /home/tom/Projects/claude-code/src/utils/deepLink/banner.ts | utils/deepLink/ | ts | Deep link banner display | LOW |
| F1461 | /home/tom/Projects/claude-code/src/utils/deepLink/parseDeepLink.ts | utils/deepLink/ | ts | Deep link URL parsing | MEDIUM |
| F1462 | /home/tom/Projects/claude-code/src/utils/deepLink/protocolHandler.ts | utils/deepLink/ | ts | Protocol handler registration | HIGH |
| F1463 | /home/tom/Projects/claude-code/src/utils/deepLink/registerProtocol.ts | utils/deepLink/ | ts | OS-level protocol registration | HIGH |
| F1464 | /home/tom/Projects/claude-code/src/utils/deepLink/terminalLauncher.ts | utils/deepLink/ | ts | Terminal launcher via deep link | HIGH |
| F1465 | /home/tom/Projects/claude-code/src/utils/deepLink/terminalPreference.ts | utils/deepLink/ | ts | Terminal preference storage | MEDIUM |
| F1466 | /home/tom/Projects/claude-code/src/utils/desktopDeepLink.ts | utils/ | ts | Desktop app deep link utilities | MEDIUM |
| F1467 | /home/tom/Projects/claude-code/src/utils/detectRepository.ts | utils/ | ts | Repository detection (git, etc.) | HIGH |
| F1468 | /home/tom/Projects/claude-code/src/utils/diagLogs.ts | utils/ | ts | Diagnostic log file utilities | MEDIUM |
| F1469 | /home/tom/Projects/claude-code/src/utils/diff.ts | utils/ | ts | Text diff computation utilities | HIGH |
| F1470 | /home/tom/Projects/claude-code/src/utils/directMemberMessage.ts | utils/ | ts | Direct member message utilities | MEDIUM |
| F1471 | /home/tom/Projects/claude-code/src/utils/displayTags.ts | utils/ | ts | Display tag formatting | LOW |
| F1472 | /home/tom/Projects/claude-code/src/utils/doctorContextWarnings.ts | utils/ | ts | Doctor context warning generation | MEDIUM |
| F1473 | /home/tom/Projects/claude-code/src/utils/doctorDiagnostic.ts | utils/ | ts | Doctor diagnostic checks | MEDIUM |
| F1474 | /home/tom/Projects/claude-code/src/utils/dxt/helpers.ts | utils/dxt/ | ts | DXT (desktop extension) helpers | MEDIUM |
| F1475 | /home/tom/Projects/claude-code/src/utils/dxt/zip.ts | utils/dxt/ | ts | DXT zip archive utilities | MEDIUM |
| F1476 | /home/tom/Projects/claude-code/src/utils/earlyInput.ts | utils/ | ts | Early input buffering before app ready | HIGH |
| F1477 | /home/tom/Projects/claude-code/src/utils/editor.ts | utils/ | ts | External editor integration | MEDIUM |
| F1478 | /home/tom/Projects/claude-code/src/utils/effort.ts | utils/ | ts | Effort level (thinking budget) utilities | HIGH |
| F1479 | /home/tom/Projects/claude-code/src/utils/embeddedTools.ts | utils/ | ts | Embedded/inline tool utilities | HIGH |
| F1480 | /home/tom/Projects/claude-code/src/utils/envDynamic.ts | utils/ | ts | Dynamic environment variable utilities | HIGH |
| F1481 | /home/tom/Projects/claude-code/src/utils/env.ts | utils/ | ts | Environment variable access | HIGH |
| F1482 | /home/tom/Projects/claude-code/src/utils/envUtils.ts | utils/ | ts | Environment utility functions | HIGH |
| F1483 | /home/tom/Projects/claude-code/src/utils/envValidation.ts | utils/ | ts | Environment variable validation | HIGH |
| F1484 | /home/tom/Projects/claude-code/src/utils/errorLogSink.ts | utils/ | ts | Error log sink/handler | MEDIUM |
| F1485 | /home/tom/Projects/claude-code/src/utils/errors.ts | utils/ | ts | Error type definitions and utilities | HIGH |
| F1486 | /home/tom/Projects/claude-code/src/utils/exampleCommands.ts | utils/ | ts | Example command suggestions | LOW |
| F1487 | /home/tom/Projects/claude-code/src/utils/execFileNoThrowPortable.ts | utils/ | ts | Portable non-throwing file execution | HIGH |
| F1488 | /home/tom/Projects/claude-code/src/utils/execFileNoThrow.ts | utils/ | ts | Non-throwing file execution wrapper | HIGH |
| F1489 | /home/tom/Projects/claude-code/src/utils/execSyncWrapper.ts | utils/ | ts | Synchronous execution wrapper | HIGH |
| F1490 | /home/tom/Projects/claude-code/src/utils/exportRenderer.tsx | utils/ | tsx | Export conversation renderer | MEDIUM |
| F1491 | /home/tom/Projects/claude-code/src/utils/extraUsage.ts | utils/ | ts | Extra usage tracking | MEDIUM |
| F1492 | /home/tom/Projects/claude-code/src/utils/fastMode.ts | utils/ | ts | Fast mode configuration | HIGH |
| F1493 | /home/tom/Projects/claude-code/src/utils/fileHistory.ts | utils/ | ts | File edit history tracking | HIGH |
| F1494 | /home/tom/Projects/claude-code/src/utils/fileOperationAnalytics.ts | utils/ | ts | File operation analytics tracking | MEDIUM |
| F1495 | /home/tom/Projects/claude-code/src/utils/filePersistence/filePersistence.ts | utils/filePersistence/ | ts | File persistence layer | HIGH |
| F1496 | /home/tom/Projects/claude-code/src/utils/filePersistence/outputsScanner.ts | utils/filePersistence/ | ts | Persistent output file scanner | MEDIUM |
| F1497 | /home/tom/Projects/claude-code/src/utils/fileReadCache.ts | utils/ | ts | File read result cache | HIGH |
| F1498 | /home/tom/Projects/claude-code/src/utils/fileRead.ts | utils/ | ts | File reading utilities | HIGH |
| F1499 | /home/tom/Projects/claude-code/src/utils/fileStateCache.ts | utils/ | ts | File state (mtime, hash) cache | HIGH |
| F1500 | /home/tom/Projects/claude-code/src/utils/file.ts | utils/ | ts | General file system utilities | HIGH |
| F1501 | /home/tom/Projects/claude-code/src/utils/findExecutable.ts | utils/ | ts | Find executable in PATH | MEDIUM |
| F1502 | /home/tom/Projects/claude-code/src/utils/fingerprint.ts | utils/ | ts | Device fingerprint generation | HIGH |
| F1503 | /home/tom/Projects/claude-code/src/utils/forkedAgent.ts | utils/ | ts | Forked agent utilities | HIGH |
| F1504 | /home/tom/Projects/claude-code/src/utils/formatBriefTimestamp.ts | utils/ | ts | Brief timestamp formatting | LOW |
| F1505 | /home/tom/Projects/claude-code/src/utils/format.ts | utils/ | ts | General formatting utilities | MEDIUM |
| F1506 | /home/tom/Projects/claude-code/src/utils/fpsTracker.ts | utils/ | ts | Frame rate tracking | LOW |
| F1507 | /home/tom/Projects/claude-code/src/utils/frontmatterParser.ts | utils/ | ts | YAML frontmatter parser | HIGH |
| F1508 | /home/tom/Projects/claude-code/src/utils/fsOperations.ts | utils/ | ts | File system operation utilities | HIGH |
| F1509 | /home/tom/Projects/claude-code/src/utils/fullscreen.ts | utils/ | ts | Terminal fullscreen mode utilities | MEDIUM |
| F1510 | /home/tom/Projects/claude-code/src/utils/generatedFiles.ts | utils/ | ts | Generated file detection | MEDIUM |
| F1511 | /home/tom/Projects/claude-code/src/utils/generators.ts | utils/ | ts | Async generator utilities | HIGH |
| F1512 | /home/tom/Projects/claude-code/src/utils/genericProcessUtils.ts | utils/ | ts | Generic process management utilities | HIGH |
| F1513 | /home/tom/Projects/claude-code/src/utils/getWorktreePathsPortable.ts | utils/ | ts | Portable worktree path utilities | MEDIUM |
| F1514 | /home/tom/Projects/claude-code/src/utils/getWorktreePaths.ts | utils/ | ts | Git worktree path resolution | HIGH |
| F1515 | /home/tom/Projects/claude-code/src/utils/ghPrStatus.ts | utils/ | ts | GitHub PR status fetching | MEDIUM |
| F1516 | /home/tom/Projects/claude-code/src/utils/gitDiff.ts | utils/ | ts | Git diff utilities | HIGH |
| F1517 | /home/tom/Projects/claude-code/src/utils/git/gitConfigParser.ts | utils/git/ | ts | Git config file parser | MEDIUM |
| F1518 | /home/tom/Projects/claude-code/src/utils/git/gitFilesystem.ts | utils/git/ | ts | Git filesystem operations | HIGH |
| F1519 | /home/tom/Projects/claude-code/src/utils/git/gitignore.ts | utils/git/ | ts | Gitignore pattern matching | HIGH |
| F1520 | /home/tom/Projects/claude-code/src/utils/github/ghAuthStatus.ts | utils/github/ | ts | GitHub CLI auth status check | MEDIUM |
| F1521 | /home/tom/Projects/claude-code/src/utils/githubRepoPathMapping.ts | utils/ | ts | GitHub repository path mapping | MEDIUM |
| F1522 | /home/tom/Projects/claude-code/src/utils/gitSettings.ts | utils/ | ts | Git settings and configuration | HIGH |
| F1523 | /home/tom/Projects/claude-code/src/utils/git.ts | utils/ | ts | Git command utilities | HIGH |
| F1524 | /home/tom/Projects/claude-code/src/utils/glob.ts | utils/ | ts | Glob pattern utilities | HIGH |
| F1525 | /home/tom/Projects/claude-code/src/utils/gracefulShutdown.ts | utils/ | ts | Graceful process shutdown | HIGH |
| F1526 | /home/tom/Projects/claude-code/src/utils/groupToolUses.ts | utils/ | ts | Tool use grouping for display | MEDIUM |
| F1527 | /home/tom/Projects/claude-code/src/utils/handlePromptSubmit.ts | utils/ | ts | Prompt submission handler | CRITICAL |
| F1528 | /home/tom/Projects/claude-code/src/utils/hash.ts | utils/ | ts | Hash function utilities | MEDIUM |
| F1529 | /home/tom/Projects/claude-code/src/utils/headlessProfiler.ts | utils/ | ts | Headless mode profiler | LOW |
| F1530 | /home/tom/Projects/claude-code/src/utils/heapDumpService.ts | utils/ | ts | Heap dump service | LOW |
| F1531 | /home/tom/Projects/claude-code/src/utils/heatmap.ts | utils/ | ts | Usage heatmap data | LOW |
| F1532 | /home/tom/Projects/claude-code/src/utils/highlightMatch.tsx | utils/ | tsx | Search match highlighting | MEDIUM |
| F1533 | /home/tom/Projects/claude-code/src/utils/hooks/apiQueryHookHelper.ts | utils/hooks/ | ts | API query hook helper | HIGH |
| F1534 | /home/tom/Projects/claude-code/src/utils/hooks/AsyncHookRegistry.ts | utils/hooks/ | ts | Async hook execution registry | HIGH |
| F1535 | /home/tom/Projects/claude-code/src/utils/hooks/execAgentHook.ts | utils/hooks/ | ts | Execute agent-type hook | HIGH |
| F1536 | /home/tom/Projects/claude-code/src/utils/hooks/execHttpHook.ts | utils/hooks/ | ts | Execute HTTP-type hook | HIGH |
| F1537 | /home/tom/Projects/claude-code/src/utils/hooks/execPromptHook.ts | utils/hooks/ | ts | Execute prompt-type hook | HIGH |
| F1538 | /home/tom/Projects/claude-code/src/utils/hooks/fileChangedWatcher.ts | utils/hooks/ | ts | File change watcher for hooks | HIGH |
| F1539 | /home/tom/Projects/claude-code/src/utils/hooks/hookEvents.ts | utils/hooks/ | ts | Hook event type definitions | HIGH |
| F1540 | /home/tom/Projects/claude-code/src/utils/hooks/hookHelpers.ts | utils/hooks/ | ts | Hook helper utilities | HIGH |
| F1541 | /home/tom/Projects/claude-code/src/utils/hooks/hooksConfigManager.ts | utils/hooks/ | ts | Hooks configuration manager | HIGH |
| F1542 | /home/tom/Projects/claude-code/src/utils/hooks/hooksConfigSnapshot.ts | utils/hooks/ | ts | Hooks config snapshot | HIGH |
| F1543 | /home/tom/Projects/claude-code/src/utils/hooks/hooksSettings.ts | utils/hooks/ | ts | Hooks settings integration | HIGH |
| F1544 | /home/tom/Projects/claude-code/src/utils/hooks/postSamplingHooks.ts | utils/hooks/ | ts | Post-sampling hook execution | HIGH |
| F1545 | /home/tom/Projects/claude-code/src/utils/hooks/registerFrontmatterHooks.ts | utils/hooks/ | ts | Frontmatter-defined hook registration | HIGH |
| F1546 | /home/tom/Projects/claude-code/src/utils/hooks/registerSkillHooks.ts | utils/hooks/ | ts | Skill-defined hook registration | HIGH |
| F1547 | /home/tom/Projects/claude-code/src/utils/hooks/sessionHooks.ts | utils/hooks/ | ts | Session lifecycle hooks | HIGH |
| F1548 | /home/tom/Projects/claude-code/src/utils/hooks/skillImprovement.ts | utils/hooks/ | ts | Skill improvement hook | MEDIUM |
| F1549 | /home/tom/Projects/claude-code/src/utils/hooks/ssrfGuard.ts | utils/hooks/ | ts | SSRF guard for HTTP hooks | HIGH |
| F1550 | /home/tom/Projects/claude-code/src/utils/hooks.ts | utils/ | ts | Hook system entry point | HIGH |
| F1551 | /home/tom/Projects/claude-code/src/utils/horizontalScroll.ts | utils/ | ts | Horizontal scroll utilities | LOW |
| F1552 | /home/tom/Projects/claude-code/src/utils/http.ts | utils/ | ts | HTTP request utilities | HIGH |
| F1553 | /home/tom/Projects/claude-code/src/utils/hyperlink.ts | utils/ | ts | Terminal hyperlink utilities | LOW |
| F1554 | /home/tom/Projects/claude-code/src/utils/idePathConversion.ts | utils/ | ts | IDE path conversion utilities | MEDIUM |
| F1555 | /home/tom/Projects/claude-code/src/utils/ide.ts | utils/ | ts | IDE integration utilities | HIGH |
| F1556 | /home/tom/Projects/claude-code/src/utils/idleTimeout.ts | utils/ | ts | Session idle timeout management | MEDIUM |
| F1557 | /home/tom/Projects/claude-code/src/utils/imagePaste.ts | utils/ | ts | Image paste from clipboard | HIGH |
| F1558 | /home/tom/Projects/claude-code/src/utils/imageResizer.ts | utils/ | ts | Image resize/compress utilities | MEDIUM |
| F1559 | /home/tom/Projects/claude-code/src/utils/imageStore.ts | utils/ | ts | In-memory image store | MEDIUM |
| F1560 | /home/tom/Projects/claude-code/src/utils/imageValidation.ts | utils/ | ts | Image format validation | MEDIUM |
| F1561 | /home/tom/Projects/claude-code/src/utils/immediateCommand.ts | utils/ | ts | Immediate command execution | HIGH |
| F1562 | /home/tom/Projects/claude-code/src/utils/ink.ts | utils/ | ts | Ink utility functions | MEDIUM |
| F1563 | /home/tom/Projects/claude-code/src/utils/inProcessTeammateHelpers.ts | utils/ | ts | In-process teammate helper utilities | HIGH |
| F1564 | /home/tom/Projects/claude-code/src/utils/intl.ts | utils/ | ts | Internationalization utilities | MEDIUM |
| F1565 | /home/tom/Projects/claude-code/src/utils/iTermBackup.ts | utils/ | ts | iTerm2 backup detection | LOW |
| F1566 | /home/tom/Projects/claude-code/src/utils/jetbrains.ts | utils/ | ts | JetBrains IDE integration | MEDIUM |
| F1567 | /home/tom/Projects/claude-code/src/utils/jsonRead.ts | utils/ | ts | JSON file reading utilities | MEDIUM |
| F1568 | /home/tom/Projects/claude-code/src/utils/json.ts | utils/ | ts | JSON utility functions | MEDIUM |
| F1569 | /home/tom/Projects/claude-code/src/utils/keyboardShortcuts.ts | utils/ | ts | Keyboard shortcut definitions | MEDIUM |
| F1570 | /home/tom/Projects/claude-code/src/utils/lazySchema.ts | utils/ | ts | Lazy schema loading | MEDIUM |
| F1571 | /home/tom/Projects/claude-code/src/utils/listSessionsImpl.ts | utils/ | ts | Session listing implementation | HIGH |
| F1572 | /home/tom/Projects/claude-code/src/utils/localInstaller.ts | utils/ | ts | Local binary installer | MEDIUM |
| F1573 | /home/tom/Projects/claude-code/src/utils/lockfile.ts | utils/ | ts | Lock file utilities | HIGH |
| F1574 | /home/tom/Projects/claude-code/src/utils/logoV2Utils.ts | utils/ | ts | Logo V2 rendering utilities | LOW |
| F1575 | /home/tom/Projects/claude-code/src/utils/log.ts | utils/ | ts | Logging infrastructure | HIGH |
| F1576 | /home/tom/Projects/claude-code/src/utils/mailbox.ts | utils/ | ts | Mailbox message queue implementation | HIGH |
| F1577 | /home/tom/Projects/claude-code/src/utils/managedEnvConstants.ts | utils/ | ts | Managed environment constants | HIGH |
| F1578 | /home/tom/Projects/claude-code/src/utils/managedEnv.ts | utils/ | ts | Managed environment detection | HIGH |
| F1579 | /home/tom/Projects/claude-code/src/utils/markdownConfigLoader.ts | utils/ | ts | Markdown config file loader | HIGH |
| F1580 | /home/tom/Projects/claude-code/src/utils/markdown.ts | utils/ | ts | Markdown utilities | MEDIUM |
| F1581 | /home/tom/Projects/claude-code/src/utils/mcp/dateTimeParser.ts | utils/mcp/ | ts | DateTime parsing for MCP | LOW |
| F1582 | /home/tom/Projects/claude-code/src/utils/mcp/elicitationValidation.ts | utils/mcp/ | ts | MCP elicitation request validation | HIGH |
| F1583 | /home/tom/Projects/claude-code/src/utils/mcpInstructionsDelta.ts | utils/ | ts | MCP instructions delta computation | HIGH |
| F1584 | /home/tom/Projects/claude-code/src/utils/mcpOutputStorage.ts | utils/ | ts | MCP output storage | MEDIUM |
| F1585 | /home/tom/Projects/claude-code/src/utils/mcpValidation.ts | utils/ | ts | MCP message validation | HIGH |
| F1586 | /home/tom/Projects/claude-code/src/utils/mcpWebSocketTransport.ts | utils/ | ts | MCP WebSocket transport | HIGH |
| F1587 | /home/tom/Projects/claude-code/src/utils/memoize.ts | utils/ | ts | Memoization utility | MEDIUM |
| F1588 | /home/tom/Projects/claude-code/src/utils/memoryFileDetection.ts | utils/ | ts | Memory file detection | HIGH |
| F1589 | /home/tom/Projects/claude-code/src/utils/memory/types.ts | utils/memory/ | ts | Memory type definitions | LOW |
| F1590 | /home/tom/Projects/claude-code/src/utils/memory/versions.ts | utils/memory/ | ts | Memory version tracking | MEDIUM |
| F1591 | /home/tom/Projects/claude-code/src/utils/messagePredicates.ts | utils/ | ts | Message type predicate functions | HIGH |
| F1592 | /home/tom/Projects/claude-code/src/utils/messageQueueManager.ts | utils/ | ts | Message queue management | HIGH |
| F1593 | /home/tom/Projects/claude-code/src/utils/messages/mappers.ts | utils/messages/ | ts | Message transformation mappers | HIGH |
| F1594 | /home/tom/Projects/claude-code/src/utils/messages/systemInit.ts | utils/messages/ | ts | System message initialization | HIGH |
| F1595 | /home/tom/Projects/claude-code/src/utils/messages.ts | utils/ | ts | Message utility functions | HIGH |
| F1596 | /home/tom/Projects/claude-code/src/utils/model/agent.ts | utils/model/ | ts | Agent model selection utilities | HIGH |
| F1597 | /home/tom/Projects/claude-code/src/utils/model/aliases.ts | utils/model/ | ts | Model name alias mappings | HIGH |
| F1598 | /home/tom/Projects/claude-code/src/utils/model/antModels.ts | utils/model/ | ts | Anthropic model definitions | CRITICAL |
| F1599 | /home/tom/Projects/claude-code/src/utils/model/bedrock.ts | utils/model/ | ts | AWS Bedrock model configuration | HIGH |
| F1600 | /home/tom/Projects/claude-code/src/utils/model/check1mAccess.ts | utils/model/ | ts | 1M context window access check | HIGH |
| F1601 | /home/tom/Projects/claude-code/src/utils/model/configs.ts | utils/model/ | ts | Model configuration registry | CRITICAL |
| F1602 | /home/tom/Projects/claude-code/src/utils/model/contextWindowUpgradeCheck.ts | utils/model/ | ts | Context window upgrade eligibility check | HIGH |
| F1603 | /home/tom/Projects/claude-code/src/utils/modelCost.ts | utils/ | ts | Model cost calculation | HIGH |
| F1604 | /home/tom/Projects/claude-code/src/utils/model/deprecation.ts | utils/model/ | ts | Model deprecation tracking | HIGH |
| F1605 | /home/tom/Projects/claude-code/src/utils/model/modelAllowlist.ts | utils/model/ | ts | Model allowlist enforcement | HIGH |
| F1606 | /home/tom/Projects/claude-code/src/utils/model/modelCapabilities.ts | utils/model/ | ts | Model capability definitions | HIGH |
| F1607 | /home/tom/Projects/claude-code/src/utils/model/modelOptions.ts | utils/model/ | ts | Model option definitions | HIGH |
| F1608 | /home/tom/Projects/claude-code/src/utils/model/modelStrings.ts | utils/model/ | ts | Model display string formatting | MEDIUM |
| F1609 | /home/tom/Projects/claude-code/src/utils/model/modelSupportOverrides.ts | utils/model/ | ts | Model support override flags | HIGH |
| F1610 | /home/tom/Projects/claude-code/src/utils/model/model.ts | utils/model/ | ts | Core model selection logic | CRITICAL |
| F1611 | /home/tom/Projects/claude-code/src/utils/model/providers.ts | utils/model/ | ts | Model provider definitions (Anthropic, Bedrock, Vertex) | HIGH |
| F1612 | /home/tom/Projects/claude-code/src/utils/model/validateModel.ts | utils/model/ | ts | Model identifier validation | HIGH |
| F1613 | /home/tom/Projects/claude-code/src/utils/modifiers.ts | utils/ | ts | Keyboard modifier key utilities | MEDIUM |
| F1614 | /home/tom/Projects/claude-code/src/utils/mtls.ts | utils/ | ts | Mutual TLS configuration | HIGH |
| F1615 | /home/tom/Projects/claude-code/src/utils/nativeInstaller/download.ts | utils/nativeInstaller/ | ts | Native binary download | MEDIUM |
| F1616 | /home/tom/Projects/claude-code/src/utils/nativeInstaller/index.ts | utils/nativeInstaller/ | ts | Native installer exports | LOW |
| F1617 | /home/tom/Projects/claude-code/src/utils/nativeInstaller/installer.ts | utils/nativeInstaller/ | ts | Native binary installer | MEDIUM |
| F1618 | /home/tom/Projects/claude-code/src/utils/nativeInstaller/packageManagers.ts | utils/nativeInstaller/ | ts | Package manager detection | MEDIUM |
| F1619 | /home/tom/Projects/claude-code/src/utils/nativeInstaller/pidLock.ts | utils/nativeInstaller/ | ts | PID lock for installer | LOW |
| F1620 | /home/tom/Projects/claude-code/src/utils/notebook.ts | utils/ | ts | Jupyter notebook utilities | HIGH |
| F1621 | /home/tom/Projects/claude-code/src/utils/objectGroupBy.ts | utils/ | ts | Object group-by utility | LOW |
| F1622 | /home/tom/Projects/claude-code/src/utils/pasteStore.ts | utils/ | ts | Paste content store | MEDIUM |
| F1623 | /home/tom/Projects/claude-code/src/utils/path.ts | utils/ | ts | Path manipulation utilities | HIGH |
| F1624 | /home/tom/Projects/claude-code/src/utils/pdf.ts | utils/ | ts | PDF file handling | MEDIUM |
| F1625 | /home/tom/Projects/claude-code/src/utils/pdfUtils.ts | utils/ | ts | PDF utility functions | MEDIUM |
| F1626 | /home/tom/Projects/claude-code/src/utils/peerAddress.ts | utils/ | ts | Peer address (swarm) utilities | MEDIUM |
| F1627 | /home/tom/Projects/claude-code/src/utils/permissions/autoModeState.ts | utils/permissions/ | ts | Auto mode permission state | HIGH |
| F1628 | /home/tom/Projects/claude-code/src/utils/permissions/bashClassifier.ts | utils/permissions/ | ts | Bash command auto-approval classifier | CRITICAL |
| F1629 | /home/tom/Projects/claude-code/src/utils/permissions/bypassPermissionsKillswitch.ts | utils/permissions/ | ts | Bypass permissions killswitch | HIGH |
| F1630 | /home/tom/Projects/claude-code/src/utils/permissions/classifierDecision.ts | utils/permissions/ | ts | Classifier decision type | HIGH |
| F1631 | /home/tom/Projects/claude-code/src/utils/permissions/classifierShared.ts | utils/permissions/ | ts | Shared classifier utilities | HIGH |
| F1632 | /home/tom/Projects/claude-code/src/utils/permissions/dangerousPatterns.ts | utils/permissions/ | ts | Dangerous command pattern definitions | CRITICAL |
| F1633 | /home/tom/Projects/claude-code/src/utils/permissions/denialTracking.ts | utils/permissions/ | ts | Permission denial tracking | HIGH |
| F1634 | /home/tom/Projects/claude-code/src/utils/permissions/filesystem.ts | utils/permissions/ | ts | Filesystem permission checks | CRITICAL |
| F1635 | /home/tom/Projects/claude-code/src/utils/permissions/getNextPermissionMode.ts | utils/permissions/ | ts | Next permission mode selection | HIGH |
| F1636 | /home/tom/Projects/claude-code/src/utils/permissions/pathValidation.ts | utils/permissions/ | ts | Path-based permission validation | CRITICAL |
| F1637 | /home/tom/Projects/claude-code/src/utils/permissions/permissionExplainer.ts | utils/permissions/ | ts | Permission decision explanation | HIGH |
| F1638 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionMode.ts | utils/permissions/ | ts | Permission mode enum | HIGH |
| F1639 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionPromptToolResultSchema.ts | utils/permissions/ | ts | Permission prompt result schema | HIGH |
| F1640 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionResult.ts | utils/permissions/ | ts | Permission result type | HIGH |
| F1641 | /home/tom/Projects/claude-code/src/utils/permissions/permissionRuleParser.ts | utils/permissions/ | ts | Permission rule expression parser | CRITICAL |
| F1642 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionRule.ts | utils/permissions/ | ts | Permission rule type definition | HIGH |
| F1643 | /home/tom/Projects/claude-code/src/utils/permissions/permissionSetup.ts | utils/permissions/ | ts | Permission system initialization | CRITICAL |
| F1644 | /home/tom/Projects/claude-code/src/utils/permissions/permissionsLoader.ts | utils/permissions/ | ts | Permission rules loader | CRITICAL |
| F1645 | /home/tom/Projects/claude-code/src/utils/permissions/permissions.ts | utils/permissions/ | ts | Core permission evaluation engine | CRITICAL |
| F1646 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionUpdateSchema.ts | utils/permissions/ | ts | Permission update schema | HIGH |
| F1647 | /home/tom/Projects/claude-code/src/utils/permissions/PermissionUpdate.ts | utils/permissions/ | ts | Permission update type | HIGH |
| F1648 | /home/tom/Projects/claude-code/src/utils/permissions/shadowedRuleDetection.ts | utils/permissions/ | ts | Shadowed/unreachable rule detection | HIGH |
| F1649 | /home/tom/Projects/claude-code/src/utils/permissions/shellRuleMatching.ts | utils/permissions/ | ts | Shell command rule matching | CRITICAL |
| F1650 | /home/tom/Projects/claude-code/src/utils/permissions/yoloClassifier.ts | utils/permissions/ | ts | YOLO/bypass-all mode classifier | HIGH |
| F1651 | /home/tom/Projects/claude-code/src/utils/planModeV2.ts | utils/ | ts | Plan mode V2 utilities | HIGH |
| F1652 | /home/tom/Projects/claude-code/src/utils/plans.ts | utils/ | ts | Subscription plan utilities | HIGH |
| F1653 | /home/tom/Projects/claude-code/src/utils/platform.ts | utils/ | ts | Platform (OS) detection | HIGH |
| F1654 | /home/tom/Projects/claude-code/src/utils/plugins/addDirPluginSettings.ts | utils/plugins/ | ts | Add-dir plugin settings | MEDIUM |
| F1655 | /home/tom/Projects/claude-code/src/utils/plugins/cacheUtils.ts | utils/plugins/ | ts | Plugin cache utilities | MEDIUM |
| F1656 | /home/tom/Projects/claude-code/src/utils/plugins/dependencyResolver.ts | utils/plugins/ | ts | Plugin dependency resolver | HIGH |
| F1657 | /home/tom/Projects/claude-code/src/utils/plugins/fetchTelemetry.ts | utils/plugins/ | ts | Plugin fetch telemetry | LOW |
| F1658 | /home/tom/Projects/claude-code/src/utils/plugins/gitAvailability.ts | utils/plugins/ | ts | Git availability check for plugins | MEDIUM |
| F1659 | /home/tom/Projects/claude-code/src/utils/plugins/headlessPluginInstall.ts | utils/plugins/ | ts | Headless plugin installation | HIGH |
| F1660 | /home/tom/Projects/claude-code/src/utils/plugins/hintRecommendation.ts | utils/plugins/ | ts | Plugin hint recommendation | MEDIUM |
| F1661 | /home/tom/Projects/claude-code/src/utils/plugins/installCounts.ts | utils/plugins/ | ts | Plugin install count tracking | LOW |
| F1662 | /home/tom/Projects/claude-code/src/utils/plugins/installedPluginsManager.ts | utils/plugins/ | ts | Installed plugins state manager | HIGH |
| F1663 | /home/tom/Projects/claude-code/src/utils/plugins/loadPluginAgents.ts | utils/plugins/ | ts | Load agents from plugins | HIGH |
| F1664 | /home/tom/Projects/claude-code/src/utils/plugins/loadPluginCommands.ts | utils/plugins/ | ts | Load commands from plugins | HIGH |
| F1665 | /home/tom/Projects/claude-code/src/utils/plugins/loadPluginHooks.ts | utils/plugins/ | ts | Load hooks from plugins | HIGH |
| F1666 | /home/tom/Projects/claude-code/src/utils/plugins/loadPluginOutputStyles.ts | utils/plugins/ | ts | Load output styles from plugins | HIGH |
| F1667 | /home/tom/Projects/claude-code/src/utils/plugins/lspPluginIntegration.ts | utils/plugins/ | ts | LSP plugin integration | HIGH |
| F1668 | /home/tom/Projects/claude-code/src/utils/plugins/lspRecommendation.ts | utils/plugins/ | ts | LSP plugin recommendation | MEDIUM |
| F1669 | /home/tom/Projects/claude-code/src/utils/plugins/managedPlugins.ts | utils/plugins/ | ts | Managed/enterprise plugin management | HIGH |
| F1670 | /home/tom/Projects/claude-code/src/utils/plugins/marketplaceHelpers.ts | utils/plugins/ | ts | Marketplace helper utilities | MEDIUM |
| F1671 | /home/tom/Projects/claude-code/src/utils/plugins/marketplaceManager.ts | utils/plugins/ | ts | Plugin marketplace manager | HIGH |
| F1672 | /home/tom/Projects/claude-code/src/utils/plugins/mcpbHandler.ts | utils/plugins/ | ts | MCPB (MCP Bundle) handler | HIGH |
| F1673 | /home/tom/Projects/claude-code/src/utils/plugins/mcpPluginIntegration.ts | utils/plugins/ | ts | MCP plugin integration | HIGH |
| F1674 | /home/tom/Projects/claude-code/src/utils/plugins/officialMarketplaceGcs.ts | utils/plugins/ | ts | Official marketplace GCS client | HIGH |
| F1675 | /home/tom/Projects/claude-code/src/utils/plugins/officialMarketplaceStartupCheck.ts | utils/plugins/ | ts | Official marketplace startup check | MEDIUM |
| F1676 | /home/tom/Projects/claude-code/src/utils/plugins/officialMarketplace.ts | utils/plugins/ | ts | Official plugin marketplace | HIGH |
| F1677 | /home/tom/Projects/claude-code/src/utils/plugins/orphanedPluginFilter.ts | utils/plugins/ | ts | Orphaned plugin detection | MEDIUM |
| F1678 | /home/tom/Projects/claude-code/src/utils/plugins/parseMarketplaceInput.ts | utils/plugins/ | ts | Marketplace input parsing | MEDIUM |
| F1679 | /home/tom/Projects/claude-code/src/utils/plugins/performStartupChecks.tsx | utils/plugins/ | tsx | Plugin startup checks | HIGH |
| F1680 | /home/tom/Projects/claude-code/src/utils/plugins/pluginAutoupdate.ts | utils/plugins/ | ts | Plugin auto-update logic | HIGH |
| F1681 | /home/tom/Projects/claude-code/src/utils/plugins/pluginBlocklist.ts | utils/plugins/ | ts | Plugin security blocklist | HIGH |
| F1682 | /home/tom/Projects/claude-code/src/utils/plugins/pluginDirectories.ts | utils/plugins/ | ts | Plugin directory management | HIGH |
| F1683 | /home/tom/Projects/claude-code/src/utils/plugins/pluginFlagging.ts | utils/plugins/ | ts | Plugin flagging/reporting | MEDIUM |
| F1684 | /home/tom/Projects/claude-code/src/utils/plugins/pluginIdentifier.ts | utils/plugins/ | ts | Plugin identifier utilities | MEDIUM |
| F1685 | /home/tom/Projects/claude-code/src/utils/plugins/pluginInstallationHelpers.ts | utils/plugins/ | ts | Plugin installation helper utilities | HIGH |
| F1686 | /home/tom/Projects/claude-code/src/utils/plugins/pluginLoader.ts | utils/plugins/ | ts | Plugin module loader | CRITICAL |
| F1687 | /home/tom/Projects/claude-code/src/utils/plugins/pluginOptionsStorage.ts | utils/plugins/ | ts | Plugin options persistence | MEDIUM |
| F1688 | /home/tom/Projects/claude-code/src/utils/plugins/pluginPolicy.ts | utils/plugins/ | ts | Plugin security policy | HIGH |
| F1689 | /home/tom/Projects/claude-code/src/utils/plugins/pluginStartupCheck.ts | utils/plugins/ | ts | Plugin startup validation | HIGH |
| F1690 | /home/tom/Projects/claude-code/src/utils/plugins/pluginVersioning.ts | utils/plugins/ | ts | Plugin version management | HIGH |
| F1691 | /home/tom/Projects/claude-code/src/utils/plugins/reconciler.ts | utils/plugins/ | ts | Plugin state reconciler | HIGH |
| F1692 | /home/tom/Projects/claude-code/src/utils/plugins/refresh.ts | utils/plugins/ | ts | Plugin refresh/reload | HIGH |
| F1693 | /home/tom/Projects/claude-code/src/utils/plugins/schemas.ts | utils/plugins/ | ts | Plugin manifest schemas | HIGH |
| F1694 | /home/tom/Projects/claude-code/src/utils/plugins/validatePlugin.ts | utils/plugins/ | ts | Plugin manifest validation | HIGH |
| F1695 | /home/tom/Projects/claude-code/src/utils/plugins/walkPluginMarkdown.ts | utils/plugins/ | ts | Walk plugin markdown/skill files | MEDIUM |
| F1696 | /home/tom/Projects/claude-code/src/utils/plugins/zipCacheAdapters.ts | utils/plugins/ | ts | Zip cache adapters for plugins | MEDIUM |
| F1697 | /home/tom/Projects/claude-code/src/utils/plugins/zipCache.ts | utils/plugins/ | ts | Plugin zip cache | MEDIUM |
| F1698 | /home/tom/Projects/claude-code/src/utils/powershell/dangerousCmdlets.ts | utils/powershell/ | ts | Dangerous PowerShell cmdlet definitions | CRITICAL |
| F1699 | /home/tom/Projects/claude-code/src/utils/powershell/parser.ts | utils/powershell/ | ts | PowerShell command parser | HIGH |
| F1700 | /home/tom/Projects/claude-code/src/utils/powershell/staticPrefix.ts | utils/powershell/ | ts | PowerShell static prefix analysis | HIGH |
| F1701 | /home/tom/Projects/claude-code/src/utils/preflightChecks.tsx | utils/ | tsx | Pre-flight environment checks | HIGH |
| F1702 | /home/tom/Projects/claude-code/src/utils/privacyLevel.ts | utils/ | ts | Privacy level management | HIGH |
| F1703 | /home/tom/Projects/claude-code/src/utils/process.ts | utils/ | ts | Process management utilities | HIGH |
| F1704 | /home/tom/Projects/claude-code/src/utils/processUserInput/processBashCommand.tsx | utils/processUserInput/ | tsx | User bash command processing | CRITICAL |
| F1705 | /home/tom/Projects/claude-code/src/utils/processUserInput/processSlashCommand.tsx | utils/processUserInput/ | tsx | User slash command processing | CRITICAL |
| F1706 | /home/tom/Projects/claude-code/src/utils/processUserInput/processTextPrompt.ts | utils/processUserInput/ | ts | User text prompt processing | CRITICAL |
| F1707 | /home/tom/Projects/claude-code/src/utils/processUserInput/processUserInput.ts | utils/processUserInput/ | ts | User input processing entry point | CRITICAL |
| F1708 | /home/tom/Projects/claude-code/src/utils/profilerBase.ts | utils/ | ts | Profiler base class | LOW |
| F1709 | /home/tom/Projects/claude-code/src/utils/promptCategory.ts | utils/ | ts | Prompt category classification | MEDIUM |
| F1710 | /home/tom/Projects/claude-code/src/utils/promptEditor.ts | utils/ | ts | External prompt editor integration | MEDIUM |
| F1711 | /home/tom/Projects/claude-code/src/utils/promptShellExecution.ts | utils/ | ts | Prompt shell execution utilities | HIGH |
| F1712 | /home/tom/Projects/claude-code/src/utils/proxy.ts | utils/ | ts | HTTP proxy configuration | HIGH |
| F1713 | /home/tom/Projects/claude-code/src/utils/queryContext.ts | utils/ | ts | Query context assembly | HIGH |
| F1714 | /home/tom/Projects/claude-code/src/utils/QueryGuard.ts | utils/ | ts | Query execution guard/validator | HIGH |
| F1715 | /home/tom/Projects/claude-code/src/utils/queryHelpers.ts | utils/ | ts | Query helper utilities | HIGH |
| F1716 | /home/tom/Projects/claude-code/src/utils/queryProfiler.ts | utils/ | ts | Query performance profiler | LOW |
| F1717 | /home/tom/Projects/claude-code/src/utils/queueProcessor.ts | utils/ | ts | Generic queue processor | HIGH |
| F1718 | /home/tom/Projects/claude-code/src/utils/readEditContext.ts | utils/ | ts | Read/edit context utilities | HIGH |
| F1719 | /home/tom/Projects/claude-code/src/utils/readFileInRange.ts | utils/ | ts | Read file within line range | HIGH |
| F1720 | /home/tom/Projects/claude-code/src/utils/releaseNotes.ts | utils/ | ts | Release notes fetching | LOW |
| F1721 | /home/tom/Projects/claude-code/src/utils/renderOptions.ts | utils/ | ts | Rendering options utilities | MEDIUM |
| F1722 | /home/tom/Projects/claude-code/src/utils/ripgrep.ts | utils/ | ts | Ripgrep integration utilities | HIGH |
| F1723 | /home/tom/Projects/claude-code/src/utils/sandbox/sandbox-adapter.ts | utils/sandbox/ | ts | Sandbox adapter layer | HIGH |
| F1724 | /home/tom/Projects/claude-code/src/utils/sandbox/sandbox-ui-utils.ts | utils/sandbox/ | ts | Sandbox UI utility functions | MEDIUM |
| F1725 | /home/tom/Projects/claude-code/src/utils/sanitization.ts | utils/ | ts | Input sanitization utilities | HIGH |
| F1726 | /home/tom/Projects/claude-code/src/utils/screenshotClipboard.ts | utils/ | ts | Screenshot clipboard utilities | LOW |
| F1727 | /home/tom/Projects/claude-code/src/utils/sdkEventQueue.ts | utils/ | ts | SDK event queue | HIGH |
| F1728 | /home/tom/Projects/claude-code/src/utils/secureStorage/fallbackStorage.ts | utils/secureStorage/ | ts | Fallback storage (non-keychain) | HIGH |
| F1729 | /home/tom/Projects/claude-code/src/utils/secureStorage/index.ts | utils/secureStorage/ | ts | Secure storage exports | LOW |
| F1730 | /home/tom/Projects/claude-code/src/utils/secureStorage/keychainPrefetch.ts | utils/secureStorage/ | ts | Keychain pre-fetch | HIGH |
| F1731 | /home/tom/Projects/claude-code/src/utils/secureStorage/macOsKeychainHelpers.ts | utils/secureStorage/ | ts | macOS keychain helper utilities | HIGH |
| F1732 | /home/tom/Projects/claude-code/src/utils/secureStorage/macOsKeychainStorage.ts | utils/secureStorage/ | ts | macOS keychain storage implementation | CRITICAL |
| F1733 | /home/tom/Projects/claude-code/src/utils/secureStorage/plainTextStorage.ts | utils/secureStorage/ | ts | Plain text credential storage | HIGH |
| F1734 | /home/tom/Projects/claude-code/src/utils/semanticBoolean.ts | utils/ | ts | Semantic boolean utilities | LOW |
| F1735 | /home/tom/Projects/claude-code/src/utils/semanticNumber.ts | utils/ | ts | Semantic number utilities | LOW |
| F1736 | /home/tom/Projects/claude-code/src/utils/semver.ts | utils/ | ts | Semantic versioning utilities | MEDIUM |
| F1737 | /home/tom/Projects/claude-code/src/utils/sequential.ts | utils/ | ts | Sequential execution utilities | MEDIUM |
| F1738 | /home/tom/Projects/claude-code/src/utils/sessionActivity.ts | utils/ | ts | Session activity tracking | MEDIUM |
| F1739 | /home/tom/Projects/claude-code/src/utils/sessionEnvironment.ts | utils/ | ts | Session environment setup | HIGH |
| F1740 | /home/tom/Projects/claude-code/src/utils/sessionEnvVars.ts | utils/ | ts | Session environment variables | HIGH |
| F1741 | /home/tom/Projects/claude-code/src/utils/sessionFileAccessHooks.ts | utils/ | ts | Session file access hook | HIGH |
| F1742 | /home/tom/Projects/claude-code/src/utils/sessionIngressAuth.ts | utils/ | ts | Session ingress authentication | CRITICAL |
| F1743 | /home/tom/Projects/claude-code/src/utils/sessionRestore.ts | utils/ | ts | Session restoration utilities | HIGH |
| F1744 | /home/tom/Projects/claude-code/src/utils/sessionStart.ts | utils/ | ts | Session startup logic | CRITICAL |
| F1745 | /home/tom/Projects/claude-code/src/utils/sessionState.ts | utils/ | ts | Session state management | HIGH |
| F1746 | /home/tom/Projects/claude-code/src/utils/sessionStoragePortable.ts | utils/ | ts | Portable session storage | HIGH |
| F1747 | /home/tom/Projects/claude-code/src/utils/sessionStorage.ts | utils/ | ts | Session storage implementation | HIGH |
| F1748 | /home/tom/Projects/claude-code/src/utils/sessionTitle.ts | utils/ | ts | Session title generation | MEDIUM |
| F1749 | /home/tom/Projects/claude-code/src/utils/sessionUrl.ts | utils/ | ts | Session URL generation | MEDIUM |
| F1750 | /home/tom/Projects/claude-code/src/utils/settings/allErrors.ts | utils/settings/ | ts | Settings validation error collection | HIGH |
| F1751 | /home/tom/Projects/claude-code/src/utils/settings/applySettingsChange.ts | utils/settings/ | ts | Apply settings change operation | HIGH |
| F1752 | /home/tom/Projects/claude-code/src/utils/settings/changeDetector.ts | utils/settings/ | ts | Settings change detection | HIGH |
| F1753 | /home/tom/Projects/claude-code/src/utils/settings/constants.ts | utils/settings/ | ts | Settings constants | HIGH |
| F1754 | /home/tom/Projects/claude-code/src/utils/settings/internalWrites.ts | utils/settings/ | ts | Internal settings write operations | HIGH |
| F1755 | /home/tom/Projects/claude-code/src/utils/settings/managedPath.ts | utils/settings/ | ts | Managed/enterprise settings path | HIGH |
| F1756 | /home/tom/Projects/claude-code/src/utils/settings/mdm/constants.ts | utils/settings/mdm/ | ts | MDM settings constants | HIGH |
| F1757 | /home/tom/Projects/claude-code/src/utils/settings/mdm/rawRead.ts | utils/settings/mdm/ | ts | MDM raw settings reader | HIGH |
| F1758 | /home/tom/Projects/claude-code/src/utils/settings/mdm/settings.ts | utils/settings/mdm/ | ts | MDM settings implementation | HIGH |
| F1759 | /home/tom/Projects/claude-code/src/utils/settings/permissionValidation.ts | utils/settings/ | ts | Settings permission validation | HIGH |
| F1760 | /home/tom/Projects/claude-code/src/utils/settings/pluginOnlyPolicy.ts | utils/settings/ | ts | Plugin-only settings policy | HIGH |
| F1761 | /home/tom/Projects/claude-code/src/utils/settings/schemaOutput.ts | utils/settings/ | ts | Settings schema output | MEDIUM |
| F1762 | /home/tom/Projects/claude-code/src/utils/settings/settingsCache.ts | utils/settings/ | ts | Settings cache layer | HIGH |
| F1763 | /home/tom/Projects/claude-code/src/utils/settings/settings.ts | utils/settings/ | ts | Settings loading and merging | CRITICAL |
| F1764 | /home/tom/Projects/claude-code/src/utils/settings/toolValidationConfig.ts | utils/settings/ | ts | Tool validation configuration | HIGH |
| F1765 | /home/tom/Projects/claude-code/src/utils/settings/types.ts | utils/settings/ | ts | Settings type definitions | HIGH |
| F1766 | /home/tom/Projects/claude-code/src/utils/settings/validateEditTool.ts | utils/settings/ | ts | Edit tool settings validation | HIGH |
| F1767 | /home/tom/Projects/claude-code/src/utils/settings/validationTips.ts | utils/settings/ | ts | Settings validation tip messages | LOW |
| F1768 | /home/tom/Projects/claude-code/src/utils/settings/validation.ts | utils/settings/ | ts | Settings validation engine | CRITICAL |
| F1769 | /home/tom/Projects/claude-code/src/utils/set.ts | utils/ | ts | Set utility functions | LOW |
| F1770 | /home/tom/Projects/claude-code/src/utils/shell/bashProvider.ts | utils/shell/ | ts | Bash shell provider | HIGH |
| F1771 | /home/tom/Projects/claude-code/src/utils/ShellCommand.ts | utils/ | ts | Shell command execution abstraction | HIGH |
| F1772 | /home/tom/Projects/claude-code/src/utils/shellConfig.ts | utils/ | ts | Shell configuration utilities | HIGH |
| F1773 | /home/tom/Projects/claude-code/src/utils/shell/outputLimits.ts | utils/shell/ | ts | Shell output size limiting | HIGH |
| F1774 | /home/tom/Projects/claude-code/src/utils/shell/powershellDetection.ts | utils/shell/ | ts | PowerShell availability detection | MEDIUM |
| F1775 | /home/tom/Projects/claude-code/src/utils/shell/powershellProvider.ts | utils/shell/ | ts | PowerShell shell provider | HIGH |
| F1776 | /home/tom/Projects/claude-code/src/utils/shell/prefix.ts | utils/shell/ | ts | Shell command prefix utilities | HIGH |
| F1777 | /home/tom/Projects/claude-code/src/utils/shell/readOnlyCommandValidation.ts | utils/shell/ | ts | Read-only shell command validation | HIGH |
| F1778 | /home/tom/Projects/claude-code/src/utils/shell/resolveDefaultShell.ts | utils/shell/ | ts | Default shell resolution | HIGH |
| F1779 | /home/tom/Projects/claude-code/src/utils/shell/shellProvider.ts | utils/shell/ | ts | Shell provider interface | HIGH |
| F1780 | /home/tom/Projects/claude-code/src/utils/shell/shellToolUtils.ts | utils/shell/ | ts | Shell tool utility functions | HIGH |
| F1781 | /home/tom/Projects/claude-code/src/utils/shell/specPrefix.ts | utils/shell/ | ts | Shell spec prefix handling | MEDIUM |
| F1782 | /home/tom/Projects/claude-code/src/utils/Shell.ts | utils/ | ts | Shell abstraction layer | HIGH |
| F1783 | /home/tom/Projects/claude-code/src/utils/sideQuery.ts | utils/ | ts | Side query (parallel API call) | HIGH |
| F1784 | /home/tom/Projects/claude-code/src/utils/sideQuestion.ts | utils/ | ts | Side question (non-blocking API call) | HIGH |
| F1785 | /home/tom/Projects/claude-code/src/utils/signal.ts | utils/ | ts | Signal/event utilities | MEDIUM |
| F1786 | /home/tom/Projects/claude-code/src/utils/sinks.ts | utils/ | ts | Event sink implementations | HIGH |
| F1787 | /home/tom/Projects/claude-code/src/utils/skills/skillChangeDetector.ts | utils/skills/ | ts | Skill file change detector | HIGH |
| F1788 | /home/tom/Projects/claude-code/src/utils/slashCommandParsing.ts | utils/ | ts | Slash command parsing | HIGH |
| F1789 | /home/tom/Projects/claude-code/src/utils/sleep.ts | utils/ | ts | Sleep/delay utilities | LOW |
| F1790 | /home/tom/Projects/claude-code/src/utils/sliceAnsi.ts | utils/ | ts | ANSI-aware string slicing | MEDIUM |
| F1791 | /home/tom/Projects/claude-code/src/utils/slowOperations.ts | utils/ | ts | Slow operation detection | LOW |
| F1792 | /home/tom/Projects/claude-code/src/utils/standaloneAgent.ts | utils/ | ts | Standalone agent utilities | HIGH |
| F1793 | /home/tom/Projects/claude-code/src/utils/startupProfiler.ts | utils/ | ts | Startup performance profiler | LOW |
| F1794 | /home/tom/Projects/claude-code/src/utils/staticRender.tsx | utils/ | tsx | Static (non-interactive) rendering | HIGH |
| F1795 | /home/tom/Projects/claude-code/src/utils/statsCache.ts | utils/ | ts | Statistics cache | MEDIUM |
| F1796 | /home/tom/Projects/claude-code/src/utils/stats.ts | utils/ | ts | Session statistics | HIGH |
| F1797 | /home/tom/Projects/claude-code/src/utils/statusNoticeDefinitions.tsx | utils/ | tsx | Status notice content definitions | MEDIUM |
| F1798 | /home/tom/Projects/claude-code/src/utils/statusNoticeHelpers.ts | utils/ | ts | Status notice helper utilities | MEDIUM |
| F1799 | /home/tom/Projects/claude-code/src/utils/status.tsx | utils/ | tsx | Status utilities | MEDIUM |
| F1800 | /home/tom/Projects/claude-code/src/utils/streamJsonStdoutGuard.ts | utils/ | ts | JSON stdout stream guard | HIGH |
| F1801 | /home/tom/Projects/claude-code/src/utils/streamlinedTransform.ts | utils/ | ts | Streamlined message transform | HIGH |
| F1802 | /home/tom/Projects/claude-code/src/utils/stream.ts | utils/ | ts | Stream utilities | HIGH |
| F1803 | /home/tom/Projects/claude-code/src/utils/stringUtils.ts | utils/ | ts | String utility functions | MEDIUM |
| F1804 | /home/tom/Projects/claude-code/src/utils/subprocessEnv.ts | utils/ | ts | Subprocess environment setup | HIGH |
| F1805 | /home/tom/Projects/claude-code/src/utils/suggestions/commandSuggestions.ts | utils/suggestions/ | ts | Command suggestion generation | HIGH |
| F1806 | /home/tom/Projects/claude-code/src/utils/suggestions/directoryCompletion.ts | utils/suggestions/ | ts | Directory path completion | HIGH |
| F1807 | /home/tom/Projects/claude-code/src/utils/suggestions/shellHistoryCompletion.ts | utils/suggestions/ | ts | Shell history based completion | HIGH |
| F1808 | /home/tom/Projects/claude-code/src/utils/suggestions/skillUsageTracking.ts | utils/suggestions/ | ts | Skill usage tracking for suggestions | MEDIUM |
| F1809 | /home/tom/Projects/claude-code/src/utils/suggestions/slackChannelSuggestions.ts | utils/suggestions/ | ts | Slack channel name suggestions | MEDIUM |
| F1810 | /home/tom/Projects/claude-code/src/utils/swarm/backends/detection.ts | utils/swarm/backends/ | ts | Swarm backend detection | HIGH |
| F1811 | /home/tom/Projects/claude-code/src/utils/swarm/backends/InProcessBackend.ts | utils/swarm/backends/ | ts | In-process swarm backend | HIGH |
| F1812 | /home/tom/Projects/claude-code/src/utils/swarm/backends/it2Setup.ts | utils/swarm/backends/ | ts | iTerm2 swarm backend setup | MEDIUM |
| F1813 | /home/tom/Projects/claude-code/src/utils/swarm/backends/ITermBackend.ts | utils/swarm/backends/ | ts | iTerm2 swarm backend | HIGH |
| F1814 | /home/tom/Projects/claude-code/src/utils/swarm/backends/PaneBackendExecutor.ts | utils/swarm/backends/ | ts | Pane backend executor | HIGH |
| F1815 | /home/tom/Projects/claude-code/src/utils/swarm/backends/registry.ts | utils/swarm/backends/ | ts | Swarm backend registry | HIGH |
| F1816 | /home/tom/Projects/claude-code/src/utils/swarm/backends/teammateModeSnapshot.ts | utils/swarm/backends/ | ts | Teammate mode snapshot | HIGH |
| F1817 | /home/tom/Projects/claude-code/src/utils/swarm/backends/TmuxBackend.ts | utils/swarm/backends/ | ts | Tmux swarm backend | HIGH |
| F1818 | /home/tom/Projects/claude-code/src/utils/swarm/backends/types.ts | utils/swarm/backends/ | ts | Swarm backend type definitions | LOW |
| F1819 | /home/tom/Projects/claude-code/src/utils/swarm/constants.ts | utils/swarm/ | ts | Swarm constants | MEDIUM |
| F1820 | /home/tom/Projects/claude-code/src/utils/swarm/inProcessRunner.ts | utils/swarm/ | ts | In-process swarm runner | HIGH |
| F1821 | /home/tom/Projects/claude-code/src/utils/swarm/It2SetupPrompt.tsx | utils/swarm/ | tsx | iTerm2 setup prompt component | MEDIUM |
| F1822 | /home/tom/Projects/claude-code/src/utils/swarm/leaderPermissionBridge.ts | utils/swarm/ | ts | Swarm leader permission bridge | HIGH |
| F1823 | /home/tom/Projects/claude-code/src/utils/swarm/permissionSync.ts | utils/swarm/ | ts | Swarm permission synchronization | HIGH |
| F1824 | /home/tom/Projects/claude-code/src/utils/swarm/reconnection.ts | utils/swarm/ | ts | Swarm reconnection logic | HIGH |
| F1825 | /home/tom/Projects/claude-code/src/utils/swarm/spawnInProcess.ts | utils/swarm/ | ts | In-process teammate spawn | HIGH |
| F1826 | /home/tom/Projects/claude-code/src/utils/swarm/spawnUtils.ts | utils/swarm/ | ts | Swarm spawn utilities | HIGH |
| F1827 | /home/tom/Projects/claude-code/src/utils/swarm/teamHelpers.ts | utils/swarm/ | ts | Swarm team helper functions | HIGH |
| F1828 | /home/tom/Projects/claude-code/src/utils/swarm/teammateInit.ts | utils/swarm/ | ts | Teammate initialization | HIGH |
| F1829 | /home/tom/Projects/claude-code/src/utils/swarm/teammateLayoutManager.ts | utils/swarm/ | ts | Teammate terminal layout manager | HIGH |
| F1830 | /home/tom/Projects/claude-code/src/utils/swarm/teammateModel.ts | utils/swarm/ | ts | Teammate model selection | HIGH |
| F1831 | /home/tom/Projects/claude-code/src/utils/swarm/teammatePromptAddendum.ts | utils/swarm/ | ts | Teammate system prompt addendum | HIGH |
| F1832 | /home/tom/Projects/claude-code/src/utils/systemDirectories.ts | utils/ | ts | System directory path constants | HIGH |
| F1833 | /home/tom/Projects/claude-code/src/utils/systemPrompt.ts | utils/ | ts | System prompt assembly | CRITICAL |
| F1834 | /home/tom/Projects/claude-code/src/utils/systemPromptType.ts | utils/ | ts | System prompt type utilities | HIGH |
| F1835 | /home/tom/Projects/claude-code/src/utils/systemTheme.ts | utils/ | ts | System theme detection | MEDIUM |
| F1836 | /home/tom/Projects/claude-code/src/utils/taggedId.ts | utils/ | ts | Tagged/branded ID utilities | MEDIUM |
| F1837 | /home/tom/Projects/claude-code/src/utils/task/diskOutput.ts | utils/task/ | ts | Task disk output management | HIGH |
| F1838 | /home/tom/Projects/claude-code/src/utils/task/framework.ts | utils/task/ | ts | Task framework utilities | HIGH |
| F1839 | /home/tom/Projects/claude-code/src/utils/task/outputFormatting.ts | utils/task/ | ts | Task output formatting | MEDIUM |
| F1840 | /home/tom/Projects/claude-code/src/utils/task/sdkProgress.ts | utils/task/ | ts | SDK task progress reporting | HIGH |
| F1841 | /home/tom/Projects/claude-code/src/utils/tasks.ts | utils/ | ts | Task utility functions | HIGH |
| F1842 | /home/tom/Projects/claude-code/src/utils/task/TaskOutput.ts | utils/task/ | ts | Task output management | HIGH |
| F1843 | /home/tom/Projects/claude-code/src/utils/teamDiscovery.ts | utils/ | ts | Team/swarm member discovery | HIGH |
| F1844 | /home/tom/Projects/claude-code/src/utils/teammateContext.ts | utils/ | ts | Teammate context utilities | HIGH |
| F1845 | /home/tom/Projects/claude-code/src/utils/teammateMailbox.ts | utils/ | ts | Teammate mailbox management | HIGH |
| F1846 | /home/tom/Projects/claude-code/src/utils/teammate.ts | utils/ | ts | Teammate utility functions | HIGH |
| F1847 | /home/tom/Projects/claude-code/src/utils/teamMemoryOps.ts | utils/ | ts | Team memory operations | HIGH |
| F1848 | /home/tom/Projects/claude-code/src/utils/telemetryAttributes.ts | utils/ | ts | Telemetry attribute definitions | HIGH |
| F1849 | /home/tom/Projects/claude-code/src/utils/telemetry/betaSessionTracing.ts | utils/telemetry/ | ts | Beta session tracing | HIGH |
| F1850 | /home/tom/Projects/claude-code/src/utils/telemetry/bigqueryExporter.ts | utils/telemetry/ | ts | BigQuery telemetry exporter | HIGH |
| F1851 | /home/tom/Projects/claude-code/src/utils/telemetry/events.ts | utils/telemetry/ | ts | Telemetry event definitions | HIGH |
| F1852 | /home/tom/Projects/claude-code/src/utils/telemetry/instrumentation.ts | utils/telemetry/ | ts | OpenTelemetry instrumentation | HIGH |
| F1853 | /home/tom/Projects/claude-code/src/utils/telemetry/logger.ts | utils/telemetry/ | ts | Telemetry logger | HIGH |
| F1854 | /home/tom/Projects/claude-code/src/utils/telemetry/perfettoTracing.ts | utils/telemetry/ | ts | Perfetto trace format exporter | MEDIUM |
| F1855 | /home/tom/Projects/claude-code/src/utils/telemetry/pluginTelemetry.ts | utils/telemetry/ | ts | Plugin telemetry tracking | MEDIUM |
| F1856 | /home/tom/Projects/claude-code/src/utils/telemetry/sessionTracing.ts | utils/telemetry/ | ts | Session-level tracing | HIGH |
| F1857 | /home/tom/Projects/claude-code/src/utils/telemetry/skillLoadedEvent.ts | utils/telemetry/ | ts | Skill loaded telemetry event | LOW |
| F1858 | /home/tom/Projects/claude-code/src/utils/teleport/api.ts | utils/teleport/ | ts | Teleport API client | HIGH |
| F1859 | /home/tom/Projects/claude-code/src/utils/teleport/environmentSelection.ts | utils/teleport/ | ts | Teleport environment selection | HIGH |
| F1860 | /home/tom/Projects/claude-code/src/utils/teleport/environments.ts | utils/teleport/ | ts | Teleport environment definitions | HIGH |
| F1861 | /home/tom/Projects/claude-code/src/utils/teleport/gitBundle.ts | utils/teleport/ | ts | Teleport git bundle creation | HIGH |
| F1862 | /home/tom/Projects/claude-code/src/utils/teleport.tsx | utils/ | tsx | Teleport utilities and UI | HIGH |
| F1863 | /home/tom/Projects/claude-code/src/utils/tempfile.ts | utils/ | ts | Temporary file utilities | MEDIUM |
| F1864 | /home/tom/Projects/claude-code/src/utils/terminalPanel.ts | utils/ | ts | Terminal panel management | MEDIUM |
| F1865 | /home/tom/Projects/claude-code/src/utils/terminal.ts | utils/ | ts | Terminal capability utilities | HIGH |
| F1866 | /home/tom/Projects/claude-code/src/utils/textHighlighting.ts | utils/ | ts | Text highlighting utilities | MEDIUM |
| F1867 | /home/tom/Projects/claude-code/src/utils/theme.ts | utils/ | ts | Theme management utilities | HIGH |
| F1868 | /home/tom/Projects/claude-code/src/utils/thinking.ts | utils/ | ts | Extended thinking utilities | HIGH |
| F1869 | /home/tom/Projects/claude-code/src/utils/timeouts.ts | utils/ | ts | Timeout management | MEDIUM |
| F1870 | /home/tom/Projects/claude-code/src/utils/tmuxSocket.ts | utils/ | ts | Tmux socket communication | HIGH |
| F1871 | /home/tom/Projects/claude-code/src/utils/todo/types.ts | utils/todo/ | ts | Todo type definitions | LOW |
| F1872 | /home/tom/Projects/claude-code/src/utils/tokenBudget.ts | utils/ | ts | Token budget management | HIGH |
| F1873 | /home/tom/Projects/claude-code/src/utils/tokens.ts | utils/ | ts | Token counting utilities | HIGH |
| F1874 | /home/tom/Projects/claude-code/src/utils/toolErrors.ts | utils/ | ts | Tool error handling | HIGH |
| F1875 | /home/tom/Projects/claude-code/src/utils/toolPool.ts | utils/ | ts | Tool instance pool | HIGH |
| F1876 | /home/tom/Projects/claude-code/src/utils/toolResultStorage.ts | utils/ | ts | Tool result storage | HIGH |
| F1877 | /home/tom/Projects/claude-code/src/utils/toolSchemaCache.ts | utils/ | ts | Tool schema cache | HIGH |
| F1878 | /home/tom/Projects/claude-code/src/utils/toolSearch.ts | utils/ | ts | Tool search utilities | HIGH |
| F1879 | /home/tom/Projects/claude-code/src/utils/transcriptSearch.ts | utils/ | ts | Transcript search implementation | HIGH |
| F1880 | /home/tom/Projects/claude-code/src/utils/treeify.ts | utils/ | ts | Tree structure formatting | MEDIUM |
| F1881 | /home/tom/Projects/claude-code/src/utils/truncate.ts | utils/ | ts | String truncation utilities | MEDIUM |
| F1882 | /home/tom/Projects/claude-code/src/utils/ultraplan/ccrSession.ts | utils/ultraplan/ | ts | UltraPlan CCR session utilities | HIGH |
| F1883 | /home/tom/Projects/claude-code/src/utils/ultraplan/keyword.ts | utils/ultraplan/ | ts | UltraPlan keyword detection | HIGH |
| F1884 | /home/tom/Projects/claude-code/src/utils/unaryLogging.ts | utils/ | ts | Unary gRPC logging | MEDIUM |
| F1885 | /home/tom/Projects/claude-code/src/utils/undercover.ts | utils/ | ts | Undercover/stealth mode utilities | MEDIUM |
| F1886 | /home/tom/Projects/claude-code/src/utils/userAgent.ts | utils/ | ts | User agent string generation | MEDIUM |
| F1887 | /home/tom/Projects/claude-code/src/utils/userPromptKeywords.ts | utils/ | ts | User prompt keyword detection | HIGH |
| F1888 | /home/tom/Projects/claude-code/src/utils/user.ts | utils/ | ts | User profile utilities | HIGH |
| F1889 | /home/tom/Projects/claude-code/src/utils/uuid.ts | utils/ | ts | UUID generation | LOW |
| F1890 | /home/tom/Projects/claude-code/src/utils/warningHandler.ts | utils/ | ts | Warning handling utilities | MEDIUM |
| F1891 | /home/tom/Projects/claude-code/src/utils/which.ts | utils/ | ts | Which command implementation | MEDIUM |
| F1892 | /home/tom/Projects/claude-code/src/utils/windowsPaths.ts | utils/ | ts | Windows path utilities | MEDIUM |
| F1893 | /home/tom/Projects/claude-code/src/utils/withResolvers.ts | utils/ | ts | Promise withResolvers polyfill | LOW |
| F1894 | /home/tom/Projects/claude-code/src/utils/words.ts | utils/ | ts | Word/text utilities | LOW |
| F1895 | /home/tom/Projects/claude-code/src/utils/workloadContext.ts | utils/ | ts | Workload context management | HIGH |
| F1896 | /home/tom/Projects/claude-code/src/utils/worktreeModeEnabled.ts | utils/ | ts | Worktree mode feature flag | HIGH |
| F1897 | /home/tom/Projects/claude-code/src/utils/worktree.ts | utils/ | ts | Git worktree utilities | HIGH |
| F1898 | /home/tom/Projects/claude-code/src/utils/xdg.ts | utils/ | ts | XDG base directory utilities | MEDIUM |
| F1899 | /home/tom/Projects/claude-code/src/utils/xml.ts | utils/ | ts | XML parsing utilities | MEDIUM |
| F1900 | /home/tom/Projects/claude-code/src/utils/yaml.ts | utils/ | ts | YAML parsing utilities | MEDIUM |
| F1901 | /home/tom/Projects/claude-code/src/utils/zodToJsonSchema.ts | utils/ | ts | Zod schema to JSON Schema conversion | MEDIUM |
| F1902 | /home/tom/Projects/claude-code/src/vim/motions.ts | vim/ | ts | Vim motion implementations | HIGH |
| F1903 | /home/tom/Projects/claude-code/src/vim/operators.ts | vim/ | ts | Vim operator implementations | HIGH |
| F1904 | /home/tom/Projects/claude-code/src/vim/textObjects.ts | vim/ | ts | Vim text object implementations | HIGH |
| F1905 | /home/tom/Projects/claude-code/src/vim/transitions.ts | vim/ | ts | Vim mode transition logic | HIGH |
| F1906 | /home/tom/Projects/claude-code/src/vim/types.ts | vim/ | ts | Vim mode type definitions | MEDIUM |
| F1907 | /home/tom/Projects/claude-code/src/voice/voiceModeEnabled.ts | voice/ | ts | Voice mode feature flag | MEDIUM |

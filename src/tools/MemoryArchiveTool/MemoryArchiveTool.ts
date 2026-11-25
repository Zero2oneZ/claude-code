import { z } from 'zod/v4'
import type { PermissionResult } from 'src/utils/permissions/PermissionResult.js'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { logError } from '../../utils/log.js'
import { MEMORY_ARCHIVE_TOOL_NAME, getMemoryArchivePrompt } from './prompt.js'
import { renderToolUseMessage, renderToolResultMessage } from './UI.js'

const TROLLZ_API_BASE = process.env.TROLLZ_API_BASE ?? 'http://localhost:3000'

const inputSchema = lazySchema(() =>
  z.strictObject({
    content: z.string().describe('The content to archive — CODIE glyph preferred, raw text accepted'),
    trit: z
      .enum(['gold', 'frankincense', 'myrrh'])
      .describe('gold=future speculated state | frankincense=active current | myrrh=crystallize past'),
    codie_glyph: z
      .string()
      .optional()
      .describe('CODIE-compressed glyph of the content (bark.sit.treat form)'),
    where_: z
      .string()
      .optional()
      .describe('File path or context scope, e.g. apps/api/routers/chat.rs'),
    why: z
      .string()
      .optional()
      .describe('The directive — what this is being built toward'),
    session_id: z
      .string()
      .optional()
      .describe('Session ID — read from TROLLZ_SESSION_ID env if not provided'),
    advance_from: z
      .string()
      .optional()
      .describe('For trit=frankincense: the Gold CID being promoted to active'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    cid: z.string().describe('IPFS content identifier'),
    trit: z.string().describe('gold | frankincense | myrrh'),
    context_block: z.string().describe('Compact context pointer for use in place of raw content'),
    gold_cids: z.array(z.string()).optional().describe('Pre-pinned future CIDs (only on frankincense)'),
    tree_state: z.string().optional().describe('Ternary file tree state string'),
    tree_census: z.tuple([z.number(), z.number(), z.number()]).optional(),
    btc_height: z.number().optional(),
    error: z.string().optional(),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>
type Output = z.infer<OutputSchema>

export const MemoryArchiveTool = buildTool({
  name: MEMORY_ARCHIVE_TOOL_NAME,
  searchHint: 'pin content to IPFS and get ternary CID pointer',
  maxResultSizeChars: 2_000,
  shouldDefer: false,

  async description(input) {
    const trit = input.trit ?? 'frankincense'
    const symbol = trit === 'gold' ? '⬡' : trit === 'frankincense' ? '◈' : '◼'
    return `${symbol} Archive ${trit} state to IPFS`
  },

  userFacingName() {
    return 'Memory Archive'
  },

  getActivityDescription(input) {
    const trit = input.trit ?? 'frankincense'
    return `Pinning ${trit} state to IPFS`
  },

  getToolUseSummary(input) {
    return input.trit ?? 'frankincense'
  },

  isEnabled() {
    return !!process.env.TROLLZ_API_BASE || !!process.env.TROLLZ_SESSION_ID
  },

  get inputSchema(): InputSchema { return inputSchema() },
  get outputSchema(): OutputSchema { return outputSchema() },

  isConcurrencySafe() { return true },
  isReadOnly() { return false },

  toAutoClassifierInput(input) {
    return input.content.slice(0, 64)
  },

  async checkPermissions(_input): Promise<PermissionResult> {
    return { behavior: 'passthrough', message: 'MemoryArchive requires permission.' }
  },

  async prompt() { return getMemoryArchivePrompt() },

  renderToolUseMessage,
  renderToolResultMessage,

  extractSearchText() { return '' },

  async validateInput(input) {
    if (!input.content?.trim()) {
      return { result: false, message: 'content is required', errorCode: 1 }
    }
    return { result: true }
  },

  async call(input, _context) {
    const sessionId = input.session_id ?? process.env.TROLLZ_SESSION_ID ?? 'cc-default'

    try {
      const body: Record<string, unknown> = {
        content: input.content,
        trit: input.trit,
        session_id: sessionId,
        codie_glyph: input.codie_glyph ?? input.content.slice(0, 48),
        where_: input.where_ ?? '',
        why: input.why ?? '',
      }

      if (input.advance_from) {
        body.advance_from = input.advance_from
      }

      const resp = await fetch(`${TROLLZ_API_BASE}/memory/pin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!resp.ok) {
        const text = await resp.text()
        throw new Error(`memory/pin ${resp.status}: ${text}`)
      }

      const data = await resp.json() as Output
      return { data }
    } catch (err) {
      logError(err instanceof Error ? err : new Error(String(err)))
      // Graceful degradation: return a local stub CID so CC keeps working
      // even when TrollzDotFun API is not reachable
      const stub = `stub:${Date.now().toString(36)}`
      return {
        data: {
          cid: stub,
          trit: input.trit,
          context_block: `[${input.trit === 'gold' ? '⬡' : input.trit === 'frankincense' ? '◈' : '◼'} ${stub} | offline]`,
          error: err instanceof Error ? err.message : String(err),
        },
      }
    }
  },

  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: output.error
        ? `Memory archive error: ${output.error}`
        : output.context_block,
    }
  },
} satisfies ToolDef<InputSchema, Output>)

export const MEMORY_ARCHIVE_TOOL_NAME = 'MemoryArchive'

export function getMemoryArchivePrompt(): string {
  return `
Pins content to IPFS and returns a compact CID pointer — use this to archive long context
and replace it with a ternary symbol address. This keeps context minimal.

## Three states (Gold / Frankincense / Myrrh)

- **Gold** (⬡)  — pre-pin a speculated FUTURE state. Call this after each turn to build out
  2-5 possible next states BEFORE the user asks. They're already on IPFS when needed.
- **Frankincense** (◈)  — pin the CURRENT active turn's content. Call this immediately after
  generating a substantial response or reasoning chain.
- **Myrrh** (◼)  — crystallize a Frankincense into the immutable past. Call when a state
  is definitively done and you're advancing to the next.

## When to call

1. After any reasoning block over ~200 tokens → pin as Frankincense, replace with CID pointer
2. After each completed turn → speculate 2-5 Gold states and pre-pin them
3. When selecting a Gold state to work on → call advance to promote it to Frankincense
4. Never hold raw file content in context when you have a CID for it

## Context block format (what you receive back)

\`\`\`
◈ Qm1a2b3c4d5e6f7g8 | gold:[⬡Qm9a8b7c,⬡Qm3f4e5d] | tree:1202010...(12/3/7) | who:... what:... | foam:42pts | btc#895012
\`\`\`

Read this as: current active CID | pre-pinned futures | ternary file tree state (gold/frank/myrrh counts) | 5W | torus stats | BTC anchor

## Ternary file tree

The tree state string is one trit per file:
- \`0\` = Gold (future/unbuilt)
- \`1\` = Frankincense (active/in-progress)
- \`2\` = Myrrh (crystallized/stable)

Use this to know exactly what state each file is in without reading it.

## CODIE glyphs

Always CODIE-compress content before pinning. Pass the glyph, not the raw text.
If you don't have a glyph, pass a short descriptor: \`bark.sit.treat\` or \`pug.fence.return\`.

## Allowed domains / blocked domains

The \`where_\` field is the file path or context scope (e.g., \`apps/api/routers/chat.rs\`).
The \`why\` field is the directive (e.g., \`implement SYNTH batch write\`).
`
}

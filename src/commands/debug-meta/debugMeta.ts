import type { LocalCommandCall } from '../../types/command.js'
import { getContentText } from '../../utils/messages.js'

export const call: LocalCommandCall = async (args, context) => {
  const indexed = context.messages.map((m, idx) => ({ m, idx }))
  const allMeta = indexed.filter(
    ({ m }) => m.type === 'user' && m.isMeta === true,
  )

  if (allMeta.length === 0) {
    return {
      type: 'text',
      value: 'No isMeta messages in this conversation.',
    }
  }

  const limit = parseInt(args.trim(), 10)
  const shown = limit > 0 ? allMeta.slice(-limit) : allMeta
  const truncatedHeader =
    shown.length < allMeta.length
      ? ` (showing last ${shown.length} of ${allMeta.length})`
      : ''

  const lines: string[] = [
    `${allMeta.length} isMeta message(s) — sent to the model but hidden from UI${truncatedHeader}:\n`,
  ]

  for (let i = 0; i < shown.length; i++) {
    const { m: msg, idx } = shown[i]!
    if (msg.type !== 'user') continue
    const content =
      typeof msg.message.content === 'string'
        ? msg.message.content
        : (getContentText(msg.message.content) ?? JSON.stringify(msg.message.content))
    const preview = content.length > 600 ? content.slice(0, 600) + '…' : content
    lines.push(`[hidden #${i + 1} @ stream-pos ${idx}/${context.messages.length}]\n${preview}`)
    if (i < shown.length - 1) lines.push('\n---')
  }

  return {
    type: 'text',
    value: lines.join('\n'),
  }
}

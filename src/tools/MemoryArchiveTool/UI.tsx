import React from 'react'
import { Box, Text } from '../../ink.js'
import { MessageResponse } from '../../components/MessageResponse.js'

const TRIT_SYMBOL: Record<string, string> = {
  gold: '⬡',
  frankincense: '◈',
  myrrh: '◼',
}

const TRIT_COLOR: Record<string, string> = {
  gold: 'yellow',
  frankincense: 'cyan',
  myrrh: 'gray',
}

export function renderToolUseMessage(
  input: Partial<{ content: string; trit: string; where_: string }>,
  { verbose }: { verbose: boolean },
): React.ReactNode {
  const trit = input.trit ?? 'frankincense'
  const symbol = TRIT_SYMBOL[trit] ?? '◈'
  const where_ = input.where_ ? ` ${input.where_}` : ''
  return (
    <Text color={TRIT_COLOR[trit] ?? 'white'}>
      {symbol} {trit}{where_}
    </Text>
  )
}

export function renderToolResultMessage(output: {
  cid: string
  trit: string
  context_block: string
  gold_cids?: string[]
  tree_census?: [number, number, number]
  btc_height?: number
  error?: string
}): React.ReactNode {
  if (output.error) {
    return (
      <MessageResponse>
        <Text color="red">Memory archive error (offline fallback): {output.cid}</Text>
      </MessageResponse>
    )
  }

  const symbol = TRIT_SYMBOL[output.trit] ?? '◈'
  const census = output.tree_census
  const censusStr = census ? ` ⬡${census[0]} ◈${census[1]} ◼${census[2]}` : ''
  const btc = output.btc_height ? ` btc#${output.btc_height}` : ''

  return (
    <Box flexDirection="column">
      <MessageResponse height={1}>
        <Text color={TRIT_COLOR[output.trit] ?? 'white'}>
          {symbol} {output.cid.slice(0, 20)}…{censusStr}{btc}
        </Text>
      </MessageResponse>
      {output.gold_cids && output.gold_cids.length > 0 && (
        <Text dimColor>
          ⬡ gold:[{output.gold_cids.map(c => c.slice(0, 8)).join(',')}]
        </Text>
      )}
    </Box>
  )
}

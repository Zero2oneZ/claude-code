import type { Command } from '../../types/command.js'

const debugMeta = {
  type: 'local',
  name: 'debug:meta',
  description: 'Show isMeta (model-visible, user-hidden) messages in this conversation',
  supportsNonInteractive: true,
  isEnabled: () => true,
  load: () => import('./debugMeta.js'),
} satisfies Command

export default debugMeta

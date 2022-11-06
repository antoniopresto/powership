import { tokenKindEnum, TokenType } from './TokenType';
import { Infer } from '@backland/schema';

export const SessionType = TokenType.clone()
  .extendDefinition({
    kind: {
      literal: tokenKindEnum.session,
      defaultValue: tokenKindEnum.session,
    },
    valid: 'boolean',
  })
  .graphType('Session');

export type Session = Infer<typeof SessionType>;

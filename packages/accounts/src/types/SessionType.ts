import { EntityDocument } from '@backland/entity';
import { createType, Infer } from '@backland/schema';

export const SessionType = createType('AccountSession', {
  object: {
    accountId: 'string',
    token: 'string',
    valid: 'boolean',
    ip: 'string?',
    userAgent: 'string?',
    $string: 'unknown',
  },
});

export type Session = Infer<typeof SessionType>;
export type SessionDocument = EntityDocument<Session>;

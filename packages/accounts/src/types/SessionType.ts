import { EntityDocument } from '@backland/entity';
import { createType, Infer } from '@backland/schema';

export const SessionConnectionInfo = createType('SessionConnectionInfo', {
  object: {
    ip: 'string?',
    userAgent: 'string?',
    $string: 'unknown',
  },
});

export const SessionType = createType('Session', {
  object: {
    accountId: 'string',
    token: 'string',
    valid: 'boolean',
    connectionInfo: SessionConnectionInfo,
  },
});

export type Session = Infer<typeof SessionType>;
export type SessionDocument = EntityDocument<Session>;
export type SessionConnectionInfo = Infer<typeof SessionConnectionInfo>;

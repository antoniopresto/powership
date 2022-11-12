import { createType, Infer } from '@backland/schema';

export const SessionTokensType = createType('SessionTokens', {
  object: {
    sessionToken: 'string',
    refreshToken: 'string',
  },
});

export type SessionTokens = Infer<typeof SessionTokensType>;

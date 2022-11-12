import { AccountDocument } from '../entity/AccountEntity';

import { SessionTokens } from './sessionTokens';

export interface LoginResult extends SessionTokens {
  sessionId: string;
  account: AccountDocument;
}

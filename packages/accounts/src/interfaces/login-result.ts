import { AccountDocument } from '../entity/AccountEntity';
import { SessionDocument } from '../types/SessionType';

import { SessionTokens } from './sessionTokens';

export interface LoginResult extends SessionTokens {
  authToken: string; // alias to refreshToken
  sessionDocument: SessionDocument;
  account: AccountDocument;
}

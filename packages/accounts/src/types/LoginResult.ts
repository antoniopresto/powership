import { AccountDocument } from '../entity/AccountEntity';

import { SessionDocument } from './SessionType';

export type LoginResult = {
  sessionToken: string;
  refreshToken: string;
  authToken: string; // Alias to refreshToken
  sessionDocument: SessionDocument;
  account: AccountDocument;
};

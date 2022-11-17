import { AccountDocument } from '../entity/AccountEntity';

import { SessionDocument } from './SessionType';

export type LoginResult = {
  authToken: string;
  sessionDocument: SessionDocument;
  account: AccountDocument;
};

import { AnyEntity, createEntity, EntityDocument } from '@backland/entity';
import { createType } from '@backland/schema';

import { Account, AccountSchema } from '../types/AccountSchema';

export type AccountEntity = AnyEntity<Account>;

const type = createType('Account', () => ({
  object: AccountSchema.definition,
}));

export const AccountsEntity = createEntity({
  name: 'Account',
  type,
  indexes: [
    // account PK is account#ulid
    // profile PK is profile#ulid(same from account)
    // secondary index has username as PK to performance login with username
    {
      PK: ['.accountId'],
      field: '_id',
      name: 'accountId',
    },
  ],
}) as unknown as AccountEntity;

export type AccountDocument = EntityDocument<Account>;

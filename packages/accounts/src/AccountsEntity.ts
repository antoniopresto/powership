import { AnyEntity, createEntity } from '@backland/entity';
import { createType } from '@backland/schema';

import { Account, AccountSchema } from './AccountSchema';

export type AccountsEntity = AnyEntity<Account>;

export function createDefaultAccountEntity(): AccountsEntity {
  const type = createType('Account', {
    object: AccountSchema.definition,
  });

  return createEntity({
    indexes: [
      // account PK is account#ulid
      // profile PK is profile#ulid(same from account)
      // secondary index has username as PK to performance login with username
      {
        PK: ['.accountId'],
        field: '_id',
        name: 'accountId',
      },
      {
        PK: ['.username'],
        field: '_id2',
        name: 'username',
      },
    ],
    name: 'Account',
    type,
  }) as unknown as AccountsEntity;
}

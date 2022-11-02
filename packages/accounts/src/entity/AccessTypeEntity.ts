import { createEntity, EntityDocument } from '@backland/entity';

import { Account } from '../types/AccountSchema';
import { AccessTypeSchema } from '../types/AccessTypeSchema';

export const AccountsEntity = createEntity({
  name: 'AccessType',
  type: AccessTypeSchema,
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
});

export type AccountDocument = EntityDocument<Account>;

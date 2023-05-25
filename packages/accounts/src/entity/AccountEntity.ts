import { createEntity, EntityDocumentBase } from '@swind/entity';
import { createType } from '@swind/schema';

import { AccountType } from '../types/AccountType';

import { AccessTypeEntity } from './AccessTypeEntity';
import { SessionEntity } from './SessionEntity';
import { TokenEntity } from './TokenEntity';

const type = createType('Account', () => ({
  object: AccountType.definition,
}));

export const AccountEntity = createEntity({
  name: 'Account',
  type,
  indexes: [
    // account PK is account∙ulid
    // profile PK is profile∙ulid(same from account)
    // secondary index has username as PK to performance login with username
    {
      PK: ['.accountId'],
      name: '_id',
    },
    {
      PK: ['.username'],
      name: '_id2',
    },
  ],
})
  .addIndexRelation('sessions', SessionEntity)
  .addIndexRelation('accessTypes', AccessTypeEntity)
  .addIndexRelation('tokens', TokenEntity);

export type AccountEntity = typeof AccountEntity;
export type AccountDocument = ReturnType<(typeof AccountEntity)['parse']>;
export type AccountInput = Omit<AccountDocument, keyof EntityDocumentBase>;

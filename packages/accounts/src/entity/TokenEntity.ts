import { createEntity, EntityDocument } from '@backland/entity';

import { Token, TokenType } from '../types/TokenType';

export const TokenEntity = createEntity(() => {
  return {
    name: 'AccountsToken',
    type: TokenType,
    indexes: [
      {
        PK: ['.accountId'],
        SK: ['.kind', '.createdFor', '.ulid'],
        field: '_id',
        name: 'accountId',
        relatedTo: 'Account',
      },
    ],
  };
});

export type TokenEntity = typeof TokenEntity;

export type TokenDocument = EntityDocument<Token>;

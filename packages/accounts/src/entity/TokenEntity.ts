import { createEntity, EntityDocument } from '@powership/entity';

import { Token, TokenType } from '../types/TokenType';

export const TokenEntity = createEntity(() => {
  return {
    name: 'AccountsToken',
    type: TokenType,
    indexes: [
      {
        PK: ['.accountId'],
        SK: ['.kind', '.createdFor', '.ulid'],
        name: '_id',
        relatedTo: 'Account',
      },
      {
        PK: ['.value'],
        SK: ['.kind', '.accountId'],
        name: '_id2',
      },
    ],
  };
});

export type TokenEntity = typeof TokenEntity;

export type TokenDocument = EntityDocument<Token>;

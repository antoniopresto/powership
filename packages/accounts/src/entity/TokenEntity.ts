import { createEntity, EntityDocument } from '@backland/entity';
import { createType } from '@backland/schema';
import { StringValue as MaxAgeValues, ms } from '@backland/utils';

import { Token, TokenType } from '../types/TokenType';

export let TokenName = 'AccountsToken';

export const TokenEntity = createEntity(() => {
  const type = createType(TokenName, () => ({
    object: TokenType.definition,
  }));

  return {
    indexes: [
      {
        PK: ['.accountId'],
        SK: ['.kind', '.createdFor'],
        field: '_id',
        name: 'accountId',
        relatedTo: 'Account',
      },
    ],
    name: TokenName,
    type,
  };
}).extend(() => {
  return {
    getValidToken,
  };
});

export type TokenEntity = typeof TokenEntity;

export type { MaxAgeValues };

export type GetValidTokenInput = {
  maxAge: MaxAgeValues;
  accountId: string;
  kind: Token['kind'];
  createdFor?: string;
  cacheContext?: Record<string, any>;
};

export async function getValidToken(
  config: GetValidTokenInput,
  optional: true
): Promise<TokenDocument | null>;

export async function getValidToken(
  config: GetValidTokenInput
): Promise<TokenDocument>;

export async function getValidToken<Optional extends true>(
  config: GetValidTokenInput,
  optional?: Optional
) {
  const { maxAge, createdFor, kind, accountId, cacheContext = {} } = config;

  const maxAgeMS = ms(maxAge);
  const maxAgeDate = new Date(Date.now() - maxAgeMS);

  const { item } = await TokenEntity.findOne({
    filter: { accountId },
    context: cacheContext,
    condition: { createdFor, kind, createdAt: { $gte: maxAgeDate } },
  });

  if (!optional && !item) throw new Error('MISSING_TOKEN');

  return item;
}

export type TokenDocument = EntityDocument<Token>;

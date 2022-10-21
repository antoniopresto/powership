/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSchema, createType, GraphType, Infer } from '@backland/schema';
import { UnionToIntersection } from '@backland/utils';

import { AccessType, AccessTypeSchema, accessTypesEnum } from './AccessType';
import { Token, TokenSchema } from './TokenType';
import { usernameType } from './validateUserName';

type Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : never;

export const AccessTypesByValue = createType('AccessTypesByValue', {
  description:
    'AccessTypes record shaped as {[`${accessTypeKind}_${accessTypeValue}`]: AccessType }',
  alias: {
    type: {
      record: { key: 'string', type: AccessTypeSchema },
    },
    aggregate: [
      { $pick: 'access' },
      { $keyBy: { $template: '{kind}#{value}' } },
    ],
  },
}) as unknown as GraphType<{
  literal: UnionToIntersection<
    {
      [K in AccessType['kind']]: {
        [L in `${K}_${string}`]: Cast<AccessType, { kind: K }>;
      };
    }[AccessType['kind']]
  >;
}>;

export const AccountTokenByKind = createType('AccountTokenByKind', {
  description: 'AccessTypes record shaped as {[`${kind}`]: Token }',
  alias: {
    type: {
      record: { key: 'string', type: TokenSchema },
    },
    aggregate: [
      { $pick: 'tokens' }, //
      { $keyBy: { $pick: 'kind' } },
    ],
  },
}) as unknown as GraphType<{
  literal: Partial<
    UnionToIntersection<
      {
        [K in Token['kind']]: {
          [L in K]: Cast<Token, { kind: K }>;
        };
      }[Token['kind']]
    >
  >;
}>;

export const AccountSchema = createSchema({
  accountId: { ulid: { autoCreate: true } },

  username: usernameType,

  email: {
    optional: true,
    alias: {
      type: 'email',
      aggregate: [
        { $pick: 'access' }, //
        { $matchOne: { kind: accessTypesEnum.email } },
        { $pick: 'value' }, //
      ],
    },
  },

  phone: {
    optional: true,
    alias: {
      type: 'phone',
      aggregate: [
        { $pick: 'access' }, //
        { $matchOne: { kind: accessTypesEnum.phone } },
        { $pick: 'value' }, //
      ],
    },
  },

  access: {
    array: {
      of: AccessTypeSchema,
      min: 1,
    },
  },

  accessTypesByValue: AccessTypesByValue,

  tokens: {
    array: { of: TokenSchema, min: 1 },
  },

  tokenByKind: AccountTokenByKind,

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

export type Account = Infer<typeof AccountSchema>;
export type AccountInput = Omit<
  Account,
  'accessTypesByValue' | 'tokenByKind' | 'accountId' | 'phone' | 'email'
>;

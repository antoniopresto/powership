/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSchema, Infer } from '@backland/schema';
import { UnionToIntersection } from '@backland/utils';

import { AccessType, AccessTypeSchema } from './AccessType';
import { Token, TokenSchema } from './TokenType';
import { usernameType } from './validateUserName';

type Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : never;

export type AccessTypesRecord = UnionToIntersection<
  {
    [K in AccessType['kind']]: {
      [L in `${K}_${string}`]: Cast<AccessType, { kind: K }>;
    };
  }[AccessType['kind']]
>;

export type TokensRecord = Partial<
  UnionToIntersection<
    {
      [K in Token['kind']]: {
        [L in K]: Cast<Token, { kind: K }>;
      };
    }[Token['kind']]
  >
>;

export const AccountSchema = createSchema({
  accountId: { ulid: { autoCreate: true } },

  username: usernameType,

  accessTypes: {
    hidden: true,
    description: 'Record with "type_value" as key.',
    record: {
      keyType: 'string',
      type: AccessTypeSchema,
    },
  } as unknown as {
    literal: AccessTypesRecord;
  },

  tokens: {
    hidden: true,
    record: {
      keyType: 'string',
      type: TokenSchema,
    },
  } as unknown as { literal: TokensRecord },

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

export type Account = Infer<typeof AccountSchema> & {
  [K: string]: unknown;
};

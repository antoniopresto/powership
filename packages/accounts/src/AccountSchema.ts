/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSchema, createType, Infer } from '@backland/schema';
import { tupleEnum } from 'backland';

import { usernameType } from './validateUserName';

export const tokenTypeEnum = tupleEnum(
  'email_verification',
  'phone_verification',
  'password_recovery',
  '2fa',
  'custom'
);

export const AccountTokenSchema = createSchema({
  reason: 'string?',
  type: {
    enum: Object.values(tokenTypeEnum),
    description: 'Examples: 2fa, password_recovery',
  },
  value: { string: { min: 4, max: 1000 } },
  endTime: 'date?',
  createdAt: { date: { autoCreate: true } },
} as const);

export type AccountToken = Infer<typeof AccountTokenSchema>;

export const AccountsServiceBase = createSchema({
  createdAt: { date: { autoCreate: true } },
  updatedAt: { date: { autoCreate: true } },
  meta: 'record?',
} as const);

export const AccountServiceType = createType({
  union: [
    {
      object: {
        ...AccountsServiceBase.definition,
        kind: { literal: 'phone' },
        value: 'phone',
        verified: 'boolean',
      },
    },

    {
      object: {
        ...AccountsServiceBase.definition,
        kind: { literal: 'email' },
        value: 'email',
        verified: 'boolean',
      },
    },

    {
      object: {
        ...AccountsServiceBase.definition,
        kind: { literal: 'oauth' },
        provider: { string: {}, description: 'Provider name' },
        accessToken: 'string',
        refreshToken: 'string',
      },
    },

    {
      object: {
        ...AccountsServiceBase.definition,
        kind: { literal: 'custom' },
        meta: 'record',
      },
    },
  ],
} as const);

export type AccountService = Infer<typeof AccountServiceType>;

export const AccountSchema = createSchema({
  accountId: { ulid: { autoCreate: true } },
  id: { alias: 'accountId' },

  username: usernameType,

  providers: {
    hidden: true,
    array: {
      of: AccountServiceType,
      min: 1,
    },
  } as unknown as { literal: [AccountService, ...AccountService[]] },

  tokens: {
    hidden: true,
    array: {
      of: AccountTokenSchema,
    },
  },

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

export type Account = Infer<typeof AccountSchema> & {
  [K: string]: unknown;
};

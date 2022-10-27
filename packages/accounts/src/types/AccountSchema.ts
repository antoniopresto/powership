/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSchema, Infer } from '@backland/schema';

import { AccessTypeSchema, accessTypesEnum } from './AccessTypeSchema';
import { usernameType } from '../utils/validateUserName';

export const AccountSchema = createSchema({
  accountId: { ulid: { autoCreate: true } },

  username: usernameType,

  email: {
    optional: true,
    alias: {
      type: 'email',
      aggregate: [
        { $pick: 'access' },
        { $matchOne: { kind: accessTypesEnum.email } },
        { $pick: 'value' },
      ],
    },
  },

  phone: {
    optional: true,
    alias: {
      type: 'phone',
      aggregate: [
        { $pick: 'access' },
        { $matchOne: { kind: accessTypesEnum.phone } },
        { $pick: 'value' },
      ],
    },
  },

  access: {
    array: {
      of: AccessTypeSchema,
      min: 1,
    },
  },

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

export type Account = Infer<typeof AccountSchema>;
export type AccountInput = Omit<Account, 'phone' | 'email'>;

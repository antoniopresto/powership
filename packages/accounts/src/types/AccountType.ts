import { createSchema } from '@swind/schema';

import { usernameType } from '../utils/validateUserName';

export const AccountType = createSchema({
  accountId: { ulid: { autoCreate: true } },

  username: usernameType,

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

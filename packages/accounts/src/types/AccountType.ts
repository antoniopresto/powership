import { createObjectType } from '@powership/schema';

import { usernameType } from '../utils/validateUserName';

export const AccountType = createObjectType({
  accountId: { ulid: { autoCreate: true } },

  username: usernameType,

  permissions: '[string]',

  deactivated: { boolean: {}, defaultValue: false },
} as const);

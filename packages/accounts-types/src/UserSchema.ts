import { createSchema, Infer } from 'backland';

import { EmailContactSchema, PhoneContactSchema } from './ContactSchema';
import { usernameType } from './validateUserName';

export const AccountsUserSchema = createSchema({
  email: {
    optional: true,
    type: EmailContactSchema,
  },

  password: {
    // hidden: true, // TODO
    object: {
      bcrypt: 'string',
    },
  },

  phone: {
    optional: true,
    type: PhoneContactSchema,
  },

  username: usernameType,
});

export type AccountsUser = Infer<typeof AccountsUserSchema>;

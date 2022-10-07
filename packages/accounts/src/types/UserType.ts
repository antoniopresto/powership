import { createSchema, Infer } from 'backland';
import { usernameType } from './validateUserName';

export const BacklandUserType = createSchema({
  username: usernameType,

  __private: {
    object: {
      password: {
        object: {
          bcrypt: 'string',
        },
      },
    },
  },

  emails: {
    object: {
      address: 'email',
      verified: 'boolean?',
    },
    list: { min: 1 } as unknown as true, // FIXME
  },
});

export type BacklandUser = Infer<typeof BacklandUserType>;

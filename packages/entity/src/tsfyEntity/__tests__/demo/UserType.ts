import { createType } from '@backland/schema';

export const UserType = createType('User', {
  object: {
    name: 'string',
    age: 'int',
  },
});

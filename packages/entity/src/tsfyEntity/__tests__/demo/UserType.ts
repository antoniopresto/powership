import { createType } from '@swind/schema';

export const UserType = createType('User', {
  object: {
    name: 'string',
    age: 'int',
  },
});

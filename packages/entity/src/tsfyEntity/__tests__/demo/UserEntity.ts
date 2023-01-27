import { createEntity } from '../../../Entity';

import { UserType } from './UserType';

export const UserEntity = createEntity({
  type: UserType,
  name: 'User',
  indexes: [
    {
      name: '_id',
      PK: ['.name'],
    },
  ],
});

import { createEntity, EntityDocument } from '@backland/entity';

import { AccessType, AccessType } from '../types/AccessType';

export const AccessTypeEntity = createEntity({
  name: 'AccessType',
  type: AccessType,
  indexes: [
    {
      PK: ['.accountId'],
      field: '_id',
      name: 'accountId',
      relatedTo: 'Account',
    },
  ],
});

export type AccessTypeDocument = EntityDocument<AccessType>;

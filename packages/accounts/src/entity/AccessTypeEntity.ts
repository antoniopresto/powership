import { createEntity, EntityDocument } from '@backland/entity';

import { AccessType, AccessTypeSchema } from '../types/AccessTypeSchema';

export const AccessTypeEntity = createEntity({
  name: 'AccessType',
  type: AccessTypeSchema,
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

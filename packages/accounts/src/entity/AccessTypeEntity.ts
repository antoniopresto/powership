import { createEntity, EntityDocument } from '@backland/entity';

import { AccessType } from '../types/AccessType';

export const AccessTypeEntity = createEntity({
  name: 'AccessType',
  type: AccessType,
  indexes: [
    {
      PK: ['.accountId'],
      SK: ['.data.kind', '.ulid'],
      field: '_id',
      name: 'accountId',
      relatedTo: 'Account',
    },
  ],
});

export type AccessTypeDocument = EntityDocument<AccessType>;

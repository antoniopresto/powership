import { createEntity, EntityDocument } from '@backland/entity';

import { AccessType } from '../types/AccessType';

export const AccessTypeEntity = createEntity({
  name: 'AccessType',
  type: AccessType,
  indexes: [
    {
      PK: ['.accountId'],
      SK: ['.data.kind', '.ulid'],
      name: '_id',
      relatedTo: 'Account',
    },
    {
      PK: ['.data.kind', '.data.value'],
      name: '_id2',
    },
  ],
} as const);

export type AccessTypeDocument = EntityDocument<AccessType>;

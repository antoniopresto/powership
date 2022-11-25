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
    {
      PK: ['.data.kind', '.data.value'],
      field: '_id2',
      name: 'kind_value',
    },
  ],
});

export type AccessTypeDocument = EntityDocument<AccessType>;

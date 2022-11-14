import { createEntity } from '@backland/entity';
import { Infer } from '@backland/schema';

import { SessionType } from '../types/SessionType';

export const SessionEntity = createEntity(() => {
  return {
    name: 'Session',
    type: SessionType,
    indexes: [
      {
        PK: ['.accountId'],
        SK: ['.ulid'], // used ulid to get the latest sessions
        field: '_id',
        name: 'accountId',
        relatedTo: 'Account',
      },
    ],
  };
});

export type SessionInput = Infer<typeof SessionEntity.inputType>;

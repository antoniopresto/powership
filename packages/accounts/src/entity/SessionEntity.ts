import { createEntity } from '@powership/entity';
import { Infer } from '@powership/schema';

import { SessionType } from '../types/SessionType';

export const SessionEntity = createEntity(() => {
  return {
    name: 'Session',
    type: SessionType,
    indexes: [
      {
        PK: ['.accountId'],
        SK: ['.ulid'], // used ulid to get the latest sessions
        name: '_id',
        relatedTo: 'Account',
      },
    ],
  };
});

export type SessionInput = Infer<typeof SessionEntity.inputType>;

import { createType, resetTypesCache, generateTypes } from '@powership/schema';
import { delay } from '@powership/utils';
import { nodePath } from '@powership/utils/server-utils';
import { createEntity } from '../Entity';

xdescribe('writeTypes', () => {
  beforeEach(async () => {
    await resetTypesCache();
  });

  const dest = nodePath.resolve(__dirname, 'writeTypesResult.txt');

  test('basic test', async () => {
    const SUTType = createType('SUTType', {
      object: {
        name: 'string',
        accountId: 'ID',
        phone: 'phone',
        gender: { enum: ['male', 'female', 'other'] },
      },
    });

    createEntity({
      name: 'SUTEntity',
      type: SUTType,
      indexes: [
        {
          PK: ['.accountId'],
          SK: ['.phone'],
          name: '_id',
        },
        {
          PK: ['.phone', '.accountId'],
          name: '_id2',
        },
      ],
    });

    await delay(500);

    await generateTypes(dest);
  });
});

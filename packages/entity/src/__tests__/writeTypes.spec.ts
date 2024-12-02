import { MongoTransporter } from '@powership/mongo';
import { createType, generateTypes } from '@powership/schema';
import { delay } from '@powership/utils';
import { nodePath } from '@powership/utils/server-utils';
import { createEntity } from '../Entity';
import { AppMock, createAppMock } from './createAppMock';

xdescribe('writeTypes', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  beforeEach(async function () {
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
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
      transporter,
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

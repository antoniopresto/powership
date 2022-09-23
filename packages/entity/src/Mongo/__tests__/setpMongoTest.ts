import { ObjectType } from '@backland/schema';

import { MongoTransporter } from '../MongoTransporter';

import { AppMock, createAppMock } from './createAppMock';

const defaultOptions = () => ({
  collection: 'temp1',
});

export function setupMongoTest(
  _options: Partial<ReturnType<typeof defaultOptions>> = {}
) {
  const options = {
    ...defaultOptions(),
    ..._options,
  };

  let mockApp: AppMock;
  let transporter: MongoTransporter;

  beforeEach(async function () {
    await ObjectType.reset();
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      client: mockApp.client!,
      collection: options.collection,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  return {
    app: () => mockApp,
    indexConfig: () =>
      ({
        entity: 'product',
        indexes: [
          {
            PK: ['.storeId'],
            SK: ['.sku'],
            field: '_id',
            name: 'byStore',
          },
        ],
      } as const),
    transporter: () => transporter,
  };
}

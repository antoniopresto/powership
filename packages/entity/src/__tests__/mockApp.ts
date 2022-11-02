import { MongoTransporter } from '@backland/mongo';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { ObjectType } from '@backland/schema';

export function mockApp() {
  const res = {} as { mockApp: AppMock; transporter: MongoTransporter };

  beforeEach(async function () {
    res.mockApp = createAppMock();
    await res.mockApp.start();
    res.transporter = new MongoTransporter({
      collection: 'temp1',
      client: res.mockApp.client!,
    });
  });

  afterEach(async function () {
    await ObjectType.reset();
    await res.mockApp.reset();
  });

  return res;
}

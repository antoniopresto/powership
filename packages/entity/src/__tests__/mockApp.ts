import { MongoTransporter } from '@swind/mongo';
import { AppMock, createAppMock } from '@swind/mongo/lib/test-utils';
import { ObjectType } from '@swind/schema';

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

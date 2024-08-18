import { MongoTransporter } from '@powership/mongo';
import { AppMock, createAppMock } from '@powership/mongo/out/test-utils';

import { resetTypesCache } from '@powership/schema';

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
    await resetTypesCache();
    await res.mockApp.reset();
  });

  return res;
}

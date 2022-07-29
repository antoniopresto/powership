const { MongoMemoryServer } = require('mongodb-memory-server-core');

process.env.LOG_LEVEL = '1';
process.env.NODE_ENV = 'test';
process.env.IS_LOCAL = 'true';

beforeAll(async () => {
  // ensure mongo bins are downloaded
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  const mongod = new MongoMemoryServer();
  await mongod.start();
  await mongod.stop({ doCleanup: true });
});

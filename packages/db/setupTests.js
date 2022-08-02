const { MongoMemoryServer } = require('mongodb-memory-server-core');

process.env.LOG_LEVEL = '1';
process.env.NODE_ENV = 'test';
process.env.IS_LOCAL = 'true';

beforeAll(async () => {
  // ensure mongo bins are downloaded
  jest.setTimeout(60000);
  await MongoMemoryServer.create();
});

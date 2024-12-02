// const { MongoMemoryServer } = require('mongodb-memory-server');

process.env.LOG_LEVEL = '1';
process.env.NODE_ENV = 'test';
process.env.IS_LOCAL = 'true';

beforeAll(async () => {
  // ensure mongo bins are downloaded
  // await MongoMemoryServer.create();
});

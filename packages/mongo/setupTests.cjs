const { MongoMemoryServer } = require('mongodb-memory-server');
const { randomName } = require('@powership/utils');

process.env.LOG_LEVEL = '1';
process.env.NODE_ENV = 'test';
process.env.IS_LOCAL = 'true';

const SECONDS = 1000;
jest.setTimeout(70 * SECONDS);

beforeAll(async () => {
  // ensure mongo bins are downloaded
  await MongoMemoryServer.create({
    instance: {
      dbName: randomName(),
    },
  });
});

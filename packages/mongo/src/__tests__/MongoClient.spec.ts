import { AppMock, createAppMock } from './createAppMock';

describe('MongoClient', () => {
  let mockApp: AppMock;

  beforeAll(async function () {
    mockApp = createAppMock();
    await mockApp.start();
  });

  afterAll(async function () {
    await mockApp.reset();
  });

  it('connects', async () => {
    const col = mockApp.db.collection('users');
    let users = await col.find().toArray();
    expect(users).toEqual([]);

    await col.insertOne({ name: 'Antonio' });
    users = await col.find().toArray();
    expect(users).toMatchObject([{ name: 'Antonio' }]);
  });
});

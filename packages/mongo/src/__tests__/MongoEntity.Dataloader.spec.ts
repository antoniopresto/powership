import { MongoClient } from '../MongoClient';
import { MongoDataLoader } from '../mongoDataLoader/MongoDataLoader';
import { AppMock, createAppMock } from '../test-utils';

const USERS = {
  Antonio: MongoClient.objectId(),
  Rafaela: MongoClient.objectId(),
  Maggie: MongoClient.objectId(),
  Cacau: MongoClient.objectId(),
};

describe('MongoEntity.DataLoader', () => {
  let mockApp: AppMock;

  beforeEach(async function () {
    mockApp = createAppMock();
    await mockApp.start();

    const entries = Object.entries(USERS).map(([name, _id], index) => ({
      name,
      _id,
      index,
    }));

    await mockApp.collection('users').insertMany(entries);
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  it('should batch query', async () => {
    const collection = mockApp.db.collection('users');
    const spy = jest.spyOn(collection.constructor.prototype, 'find');

    const dataloader = new MongoDataLoader();

    const q1 = dataloader.findMany({
      db: mockApp.db,
      query: { _id: USERS.Antonio },
      onlyOne: true,
      collection: 'users',
      projection: {},
      sort: {},
    });

    const q2 = dataloader.findMany({
      db: mockApp.db,
      query: { _id: USERS.Cacau },
      onlyOne: true,
      collection: 'users',
      projection: {},
      sort: {},
    });

    const users = await Promise.all([q1, q2]);

    expect(users).toHaveLength(Object.keys(users).length);

    expect(spy).toBeCalledWith(
      {
        $or: [
          { _id: USERS.Antonio },
          //
          { _id: USERS.Cacau },
        ],
      },
      { projection: {}, sort: {} }
    );

    expect(spy).toBeCalledTimes(1);
    spy.mockRestore();
  });

  it('should throw if using different dataloaderHash', async () => {
    const dataloader = new MongoDataLoader();

    const p1 = dataloader.findMany({
      db: mockApp.db,
      query: { _id: USERS.Antonio },
      onlyOne: true,
      collection: 'users',
      projection: {},
      sort: {},
    });

    expect(() =>
      dataloader.findMany({
        db: mockApp.db,
        query: { _id: USERS.Cacau },
        onlyOne: true,
        collection: 'users',
        projection: {},
        sort: { name: 1 }, // <--- different sort ⚠️
      })
    ).toThrow(
      'MongoDataLoader: using more than one configuration for the same dataloader.'
    );

    await p1; // wait to close test and destroy mongo
  });

  it('should throw if using different dataloaderHash with same query', async () => {
    const dataloader = new MongoDataLoader();

    expect(() =>
      dataloader.loadManyQueries([
        {
          db: mockApp.db,
          query: {},
          onlyOne: false,
          collection: 'users',
          projection: {},
          sort: { name: -1 },
        },
        {
          db: mockApp.db,
          query: {},
          onlyOne: false,
          collection: 'users',
          projection: {},
          sort: { name: 1 },
        },
      ])
    ).toThrow(
      'MongoDataLoader: using more than one configuration for the same dataloader.'
    );
  });

  it('should handle sort', async () => {
    const collection = mockApp.db.collection('users');
    const spy = jest.spyOn(collection.constructor.prototype, 'find');

    const dataloader = new MongoDataLoader();

    const data = await dataloader.loadManyQueries([
      {
        db: mockApp.db,
        query: {},
        onlyOne: false,
        collection: 'users',
        projection: {},
        sort: { name: -1 },
      },
      {
        db: mockApp.db,
        query: { name: { $ne: 'H' } },
        onlyOne: false,
        collection: 'users',
        projection: {},
        sort: { name: -1 },
      },
    ]);

    expect(spy).toBeCalledWith(
      {
        $or: [
          {},
          //
          { name: { $ne: 'H' } },
        ],
      },
      { projection: {}, sort: { name: -1 } }
    );

    expect(spy).toBeCalledTimes(1);
    spy.mockRestore();

    expect(data[0]).toEqual(data[1]);
  });

  it('should handle projection', async () => {
    const collection = mockApp.db.collection('users');
    const spy = jest.spyOn(collection.constructor.prototype, 'find');

    const dataloader = new MongoDataLoader();

    const promise = dataloader.loadManyQueries([
      {
        db: mockApp.db,
        query: {},
        onlyOne: false,
        collection: 'users',
        projection: { index: 0 },
        sort: undefined,
      },
      {
        db: mockApp.db,
        query: { name: { $ne: 'H' } },
        onlyOne: false,
        collection: 'users',
        projection: { index: 0 },
        sort: undefined,
      },
    ]);

    const data = await promise;

    expect(spy).toBeCalledWith(
      {
        $or: [
          {},
          //
          { name: { $ne: 'H' } },
        ],
      },
      { sort: undefined, projection: { index: 0 } }
    );

    expect(data[0][0].index).toBeUndefined();

    expect(spy).toBeCalledTimes(1);
    spy.mockRestore();

    expect(data[0]).toEqual(data[1]);
  });
});

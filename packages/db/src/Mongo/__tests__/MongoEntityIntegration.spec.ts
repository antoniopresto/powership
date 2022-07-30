import { encodeNumber } from '@darch/utils/lib/conust';

import { Entity } from '../../Entity/Entity';
import { AppMock, createAppMock } from '../../__tests__/appMock';
import { MongoClient } from '../MongoClient';
import { MongoTransporter } from '../MongoTransporter';

describe('MongoEntityIntegration', () => {
  let mockApp: AppMock;
  let client: MongoClient;

  const schema = {
    username: 'string',
    status: { enum: ['open', 'closed'] },
    age: 'int?',
  } as const;

  let entity: Entity<typeof schema>;

  beforeEach(async function () {
    mockApp = createAppMock();
    client = await mockApp.getClient();

    entity = new Entity({
      name: 'user',
      PK: ['#user', '.username'],
      SK: ['#email'],
      schema,
      transporter: new MongoTransporter(client),
    });

    await mockApp.start();
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  it('should createOne', async () => {
    const createResult = await entity.createOne({
      item: { username: 'antonio', status: 'open', age: 32 },
    });

    expect(createResult).toEqual({
      created: true,
      item: {
        ID: expect.stringMatching(/^01/),
        PK: 'user#antonio',
        SK: 'email',
        _id: 'user#antonio↠email',
        age: 32,
        status: 'open',
        username: 'antonio',
      },
      updated: false,
    });

    const collection = client.db.collection('users');

    expect(await collection.find().toArray()).toEqual([
      {
        ID: expect.stringMatching(/^01/),
        PK: 'user#antonio',
        SK: 'email',
        _id: 'user#antonio↠email',
        age: 32,
        status: 'open',
        username: 'antonio',
      },
    ]);

    const cantCreateResult = await entity.createOne({
      item: { username: 'antonio', status: 'open', age: 32 },
    });

    expect(cantCreateResult).toEqual({
      created: false,
      item: null,
      updated: false,
    });

    const shouldReplaceResult = await entity.createOne({
      item: { username: 'antonio', status: 'open', age: 32 },
      replace: true,
    });

    expect(shouldReplaceResult).toEqual({
      created: false,
      item: {
        ID: expect.stringMatching(/^01/),
        PK: 'user#antonio',
        SK: 'email',
        _id: 'user#antonio↠email',
        age: 32,
        status: 'open',
        username: 'antonio',
      },
      updated: true,
    });
  });

  it('should loadOne', async () => {
    entity = new Entity({
      name: 'customers',
      PK: ['#user', '.username'],
      SK: ['#email', '.status'],
      schema,
      transporter: new MongoTransporter(client),
    });

    await entity.createOne({
      item: { username: 'antonio', status: 'open', age: 32 },
    });
    await entity.createOne({
      item: { username: 'antonio', status: 'closed', age: 11 },
    });

    expect(await entity.loadOne({ item: { PK: 'user#antonio', status: 'closed' } })).toHaveProperty(
      'item._id',
      'user#antonio↠email#closed'
    );

    expect(await entity.loadOne({ item: { PK: 'user#antonio', status: 'open' } })).toHaveProperty(
      'item._id',
      'user#antonio↠email#open'
    );

    expect(await entity.loadOne({ item: { PK: 'user#antonio', SK: 'email#open' } })).toHaveProperty(
      'item._id',
      'user#antonio↠email#open'
    );

    expect(
      await entity.loadOne({ item: { PK: 'user#antonio', SK: 'email#closed' } })
    ).toHaveProperty('item._id', 'user#antonio↠email#closed');
  });

  it('should loadOne with skType number', async () => {
    entity = new Entity({
      name: 'customers',
      PK: ['#user', '.username'],
      SK: ['.age'],
      schema,
      transporter: new MongoTransporter(client),
    });

    await entity.createOne({
      item: { username: 'antonio', status: 'open', age: 32 },
    });
    await entity.createOne({
      item: { username: 'antonio', status: 'closed', age: 11 },
    });

    expect(await entity.loadOne({ item: { PK: 'user#antonio', age: 32 } })).toHaveProperty(
      'item._id',
      `user#antonio↠${encodeNumber('32')}`
    );

    expect(await entity.loadOne({ item: { PK: 'user#antonio', SK: '32' } })).toHaveProperty(
      'item._id',
      'user#antonio↠7232'
    );
    expect(await entity.loadOne({ item: { PK: 'user#antonio', SK: '11' } })).toHaveProperty(
      'item._id',
      'user#antonio↠7211'
    );
    expect(await entity.loadOne({ item: { PK: 'user#antonio', SK: '55' } })).toHaveProperty(
      'item',
      null
    );
  });

  it('should updateOne with skType number', async () => {
    entity = new Entity({
      name: 'customers',
      PK: ['#user', '.username'],
      SK: ['.age'],
      type: {
        username: 'string',
        status: { enum: ['open', 'closed'] },
        age: 'int',
      },
      transporter: new MongoTransporter(client),
    } as any);

    const result = await entity.updateOne({
      item: { username: 'antonio', status: 'closed', age: 31 },
      update: { $set: { status: 'open' }, $inc: { foo: 22 } },
      condition: {},
      dataloaderContext: {},
      upsert: true,
    } as any); // FIXME any

    expect(result).toEqual({
      created: true,
      item: {
        ID: expect.stringMatching(/^01/),
        PK: 'user#antonio',
        SK: '31',
        _id: 'user#antonio↠7231',
        age: 31,
        foo: 22,
        status: 'open',
        username: 'antonio',
      },
      updated: false,
    });
  });

  it('should updateOne with $setOnInsert', async () => {
    const entity = new Entity({
      name: 'customers',
      PK: ['#user', '.username'],
      SK: ['.age'],
      type: {
        username: 'string',
        status: { enum: ['open', 'closed'] },
        age: 'int',
        createdAt: 'int?',
      },
      transporter: new MongoTransporter(client),
    } as any);

    const item = { username: 'antonio', status: 'closed', age: 31 };

    const created = await entity.updateOne({
      item,
      update: { $setOnInsert: { createdAt: 123 } },
      condition: {},
      dataloaderContext: {},
      upsert: true,
    });

    expect(created.item).toHaveProperty('createdAt', 123);

    const updated = await entity.updateOne({
      item,
      update: { $setOnInsert: { createdAt: 'IGNORE_ME' } },
      condition: {},
      dataloaderContext: {},
      upsert: true,
    });

    expect(updated.item).toHaveProperty('createdAt', 123);
  });

  it('should removeOne with skType number', async () => {
    entity = new Entity({
      name: 'customers',
      PK: ['#user', '.username'],
      SK: ['.age'],
      type: {
        username: 'string',
        status: { enum: ['open', 'closed'] },
        age: 'int',
      },
      transporter: new MongoTransporter(client),
    } as any);

    const { item } = await entity.createOne({
      item: { username: 'antonio', status: 'closed', age: 31 },
      condition: {},
      dataloaderContext: {},
    });

    if (!item) {
      throw new Error('item is null');
    }

    const sut = await entity.removeOne({ item: { PK: item.PK, SK: item.SK } });

    expect(sut).toHaveProperty('item.ulid', item.ulid);

    expect(await entity.loadOne({ item })).toEqual({ item: null });
  });
});

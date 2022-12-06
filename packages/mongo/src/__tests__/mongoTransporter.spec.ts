import { Collection } from 'mongodb';

import {
  AnyCollectionIndexConfig,
  UpdateExpression,
  UpdateManyConfig,
  UpdateOneConfig,
} from '@backland/transporter';
import { MongoTransporter } from '../MongoTransporter';

import { AppMock, createAppMock } from '../test-utils';

const itemUser = {
  item: {
    PK: 'users',
    SK: '123',
    name: 'fulano',
    email: 'fulano@gmail.com',
  },
} as const;

const itemRanking = {
  item: {
    PK: 'ranking',
    SK: 777,
    user: '123',
  },
} as const;

describe('MongoTransporter', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;
  const indexConfig: AnyCollectionIndexConfig = {
    entity: 'entity_foo',
    indexes: [{ name: 'any', field: '_id', PK: ['.PK'], SK: ['.SK'] }],
  };

  function _put(
    config: Omit<
      Parameters<MongoTransporter['createOne']>[0],
      'indexConfig' | 'context'
    >
  ) {
    return transporter.createOne({
      context: {},
      indexConfig,
      ...config,
    });
  }

  function _update(
    config: Omit<
      Parameters<MongoTransporter['updateOne']>[0],
      'indexConfig' | 'context'
    >
  ) {
    return transporter.updateOne({
      indexConfig,
      context: {},
      ...config,
    });
  }

  beforeEach(async function () {
    mockApp = await createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  describe('createOne', () => {
    it('should put numeric key', async () => {
      expect(
        await _put({
          item: {
            PK: 'ranking',
            SK: 0,
          },
        })
      ).toEqual({
        created: true,
        error: null,
        item: {
          PK: 'ranking',
          SK: 0,
          _e: 'entity_foo',
          _id: 'entity_foo:_id#ranking»5',
          _idPK: 'entity_foo:_id#ranking»',
          _idSK: '5',
          id: expect.any(String),
        },
        updated: false,
      });

      expect(
        await _put({
          item: {
            PK: 'ranking',
            SK: 10,
          },
        })
      ).toMatchObject({
        created: true,
        item: {
          PK: 'ranking',
          SK: 10,
          _id: 'entity_foo:_id#ranking»721',
          id: expect.any(String),
        },
        updated: false,
      });

      expect(
        await _put({
          item: {
            PK: 'ranking',
            SK: 12000000000000000000000000000000000000,
          },
        })
      ).toEqual({
        created: true,
        error: null,
        item: {
          PK: 'ranking',
          SK: 12000000000000000000000000000000000000,
          _id: 'entity_foo:_id#ranking»7z412',
          _idPK: 'entity_foo:_id#ranking»',
          _idSK: '7z412',
          id: expect.any(String),
          _e: 'entity_foo',
        },
        updated: false,
      });
    });

    it('should put string key', async () => {
      expect(
        await _put({
          item: {
            PK: 'users',
            SK: 'users',
          },
        })
      ).toEqual({
        created: true,
        error: null,
        item: {
          PK: 'users',
          SK: 'users',
          _id: 'entity_foo:_id#users»users',
          _idPK: 'entity_foo:_id#users»',
          _idSK: 'users',
          id: expect.any(String),
          _e: 'entity_foo',
        },
        updated: false,
      });

      expect(
        await _put({
          item: {
            PK: 'users',
            SK: '5',
          },
        })
      ).toMatchObject({
        created: true,
        item: {
          PK: 'users',
          SK: '5',
          _e: 'entity_foo',
          _id: 'entity_foo:_id#users»5',
          _idPK: 'entity_foo:_id#users»',
        },
        updated: false,
      });
    });

    it('should replace item', async () => {
      const r1 = await _put(itemUser);

      expect(r1).toMatchObject({
        created: true,
        item: {
          PK: 'users',
          SK: '123',
          _id: 'entity_foo:_id#users»123',
          email: 'fulano@gmail.com',
          name: 'fulano',
        },
        updated: false,
      });

      // replace
      expect(await _put({ ...itemUser, replace: true })).toMatchObject({
        created: false,
        item: {
          PK: 'users',
          SK: '123',
          _id: 'entity_foo:_id#users»123',
          email: 'fulano@gmail.com',
          name: 'fulano',
        },
        updated: true,
      });

      // not replace
      expect(await _put({ ...itemUser })).toEqual({
        created: false,
        item: null,
        error: expect.stringMatching(
          "Can't create two documents with same index"
        ),
        updated: false,
      });

      // not replace
      expect(await _put({ ...itemUser, replace: false })).toEqual({
        created: false,
        item: null,
        error: expect.stringMatching(
          "Can't create two documents with same index"
        ),
        updated: false,
      });
    });

    it('should respect condition', async function () {
      await _put(itemUser);

      const notUpdated = await _put({
        item: itemUser.item,
        replace: true,
        condition: {
          PK: { $exists: false },
        },
      });

      expect(notUpdated).toHaveProperty('updated', false);

      const notUpdated2 = await _put({
        item: itemUser.item,
        condition: {
          name: { $exists: false },
        },
      });

      expect(notUpdated2).toHaveProperty('updated', false);

      const updated = await _put({
        item: { ...itemUser.item, name: 'updated' },

        replace: true,
        condition: {
          PK: { $exists: true },
        },
      });

      expect(updated).toHaveProperty('updated', true);
      expect(updated).toHaveProperty('item.name', 'updated');
    });

    it('should  respect condition 2', async function () {
      await _put(itemRanking);

      expect(
        await _put({
          item: itemRanking.item,

          replace: true,
          condition: {
            user: {
              $exists: false,
            },
          },
        })
      ).toEqual({
        created: false,
        item: null,
        error: expect.stringMatching('duplicate'),
        updated: false,
      });
    });

    it('should  respect condition 3', async function () {
      await _put(itemRanking);

      expect(
        await _put({
          ...itemRanking,
          condition: {
            SK: { $gt: 778 },
          },
        })
      ).toHaveProperty('updated', false);

      expect(
        await _put({
          ...itemRanking,
          replace: true,
          condition: {
            SK: { $gt: 776 },
          },
        })
      ).toHaveProperty('updated', true);
    });
  });

  describe('updateOne', () => {
    it('should handle config.update', async () => {
      await _put({
        item: {
          PK: 'a',
          SK: 'a',
          list: ['a', 'b', 'c', 'd', 'e', 'f'],
          num: 0,
        },
      });

      const update = (SK: string, update: UpdateExpression<any>) =>
        _update({
          filter: {
            PK: { $eq: 'a' },
            SK: { $eq: SK },
          },
          update: update,
        });

      expect(await update('a', { $set: { newProp: 22 } })).toHaveProperty(
        'item.newProp',
        22
      );

      expect(await update('a', { $remove: ['list.0'] })).toHaveProperty(
        'item.list',
        ['b', 'c', 'd', 'e', 'f']
      );
      expect(await update('a', { $remove: ['list.4'] })).toHaveProperty(
        'item.list',
        ['b', 'c', 'd', 'e']
      );

      expect(await update('a', { $inc: { num: 1, newNum: 2 } })).toHaveProperty(
        'item',
        {
          _id: 'entity_foo:_id#a»a',
          PK: 'a',
          SK: 'a',
          _e: 'entity_foo',
          _idPK: 'entity_foo:_id#a»',
          _idSK: 'a',
          id: expect.any(String),
          list: ['b', 'c', 'd', 'e'],
          newNum: 2,
          num: 1,
          newProp: 22,
        }
      );
    });

    it('should handle config.condition', async () => {
      await _put({
        item: {
          PK: 'a',
          SK: 'a',
          list: ['a', 'b', 'c', 'd', 'e', 'f'],
          num: 0,
        },
      });

      expect(
        await transporter.updateOne({
          indexConfig,
          context: {},
          filter: {
            PK: 'a',
            SK: 'a',
            field: '_id',
          },
          update: { $set: { newField: 1 } },
          condition: { num: { $gte: 1 } },
        })
      ).toEqual({ item: null, created: false, updated: false });

      const updated = await transporter.updateOne({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'a',
          field: '_id',
        },
        update: { $set: { newField: 1 } },
        condition: { num: { $gte: 0 } },
      });

      expect(updated).toHaveProperty('item.newField', 1);
      expect(updated).toHaveProperty('updated', true);
      expect(updated).toHaveProperty('created', false);
    });

    it('should handle config.upsert using default false', async () => {
      const config: UpdateOneConfig = {
        context: {},
        indexConfig,
        filter: {
          PK: 'a',
          SK: '55555555_none_exists',
          field: '_id',
        },
        update: { $set: { newField: 1 } },
      };

      const up1 = await transporter.updateOne({
        ...config,
      });

      expect(up1).toEqual({ item: null, created: false, updated: false });

      const up2 = await transporter.updateOne({
        ...config,
        upsert: true,
      });

      expect(up2).toHaveProperty('item.newField', 1);
      expect(up2).toHaveProperty('created', true);
      expect(up2).toHaveProperty('updated', false);
    });
  });

  describe('updateMany', () => {
    it('should handle config.upsert using default false', async () => {
      const config: UpdateManyConfig = {
        context: {},
        indexConfig,
        filter: {
          PK: 'a',
          SK: '55555555_none_exists',
          field: '_id',
        },
        update: { $set: { newField: 1 } },
      };

      const up1 = await transporter.updateMany({
        ...config,
      });

      expect(up1).toEqual({
        modifiedCount: 0,
        upsertedId: null,
      });

      const up2 = await transporter.updateMany({
        ...config,
        upsert: true,
      });

      expect(up2).toEqual({
        modifiedCount: 0,
        upsertedId: expect.any(String),
      });
    });
  });

  describe('deleteOne', () => {
    it('should handle keyPair', async () => {
      await Promise.all([
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'b',
          },
        }),
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'c',
          },
        }),
      ]);

      const removed = await transporter.deleteOne({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
      });

      expect(removed).toHaveProperty('item._id', 'entity_foo:_id#a»b');

      const removed2 = await transporter.deleteOne({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
      });

      expect(removed2).toHaveProperty('item', null);
    });

    it('should handle condition', async () => {
      await Promise.all([
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'b',
            email: 'abc@bb.cc',
          },
        }),
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'c',
          },
        }),
      ]);

      const removed1 = await transporter.deleteOne({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
        condition: { email: { $startsWith: 'xxx' } },
      });

      expect(removed1).toHaveProperty('item', null);

      const removed2 = await transporter.deleteOne({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
        condition: { email: { $startsWith: 'abc' } },
      });

      expect(removed2).toHaveProperty('item.email', 'abc@bb.cc');
    });
  });

  describe('deleteMany', () => {
    it('should handle keyPair', async () => {
      await Promise.all([
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'b',
          },
        }),
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'c',
          },
        }),
      ]);

      const removed = await transporter.deleteMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
      });

      expect(removed).toEqual({ deletedCount: 1 });

      const removed2 = await transporter.deleteMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
      });

      expect(removed2).toEqual({ deletedCount: 0 });
    });

    it('should handle condition', async () => {
      await Promise.all([
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'b',
            email: 'abc@bb.cc',
          },
        }),
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'a',
            SK: 'c',
          },
        }),
      ]);

      const removed1 = await transporter.deleteMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
        condition: { email: { $startsWith: 'xxx' } },
      });

      expect(removed1).toEqual({ deletedCount: 0 });

      const removed2 = await transporter.deleteMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'a',
          SK: 'b',
        },
        condition: { email: { $startsWith: 'abc' } },
      });

      expect(removed2).toEqual({ deletedCount: 1 });
    });
  });

  describe('findMany', () => {
    let mockApp: AppMock;
    let transporter: MongoTransporter;
    let collection: Collection;

    afterAll(async function () {
      await mockApp.reset();
    });

    beforeAll(async () => {
      mockApp = await createAppMock();
      await mockApp.start();

      transporter = new MongoTransporter({
        collection: 'users',
        client: mockApp.client!,
      });

      collection = transporter.db.collection('users');

      const ITEMS = [
        {
          PK: 'users',
          SK: 'A',
          sub: {
            attr: 1,
          },
        },
        {
          PK: 'users',
          SK: 'B',
          sub: {
            attr: 2,
          },
        },
        {
          PK: 'users',
          SK: 'C',
          sub: {
            attr: 3,
          },
        },
        {
          PK: 'users',
          SK: 'D',
          sub: {
            attr: 4,
          },
        },
      ];

      await Promise.all(
        ITEMS.map(async (item) => {
          await transporter.createOne({
            item,
            indexConfig,
            context: {},
          });
        })
      );
    });

    it('should handle after', async () => {
      await transporter.findMany({
        indexConfig,
        context: {},

        filter: {
          PK: 'users',
        },

        first: 1,
        sort: 'DESC',
        after: { PK: 'users', SK: 'D' },
      });
      // const [sortAsc, sortDesc] = await Promise.all([
      //   transporter.findMany({
      //     indexConfig,
      //
      //     filter: {
      //       PK: 'users',
      //     },
      //
      //     first: 1,
      //     sort: 'ASC',
      //     after: { PK: 'users', SK: 'A', field: '_id' },
      //
      //     context: {},
      //   }),
      //
      //   transporter.findMany({
      //     indexConfig,
      //
      //     filter: {
      //       PK: 'users',
      //     },
      //
      //     first: 1,
      //     sort: 'DESC',
      //     after: { PK: 'users', SK: 'D' },
      //
      //     context: {},
      //   }),
      // ]);
      //
      // expect(sortAsc).toHaveProperty('items.0.SK', 'B');
      // expect(sortDesc).toHaveProperty('items.0.SK', 'C');
    });

    it('should handle first 1', async () => {
      const sut = await transporter.findMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'users',
        },
        first: 1,
      });

      expect(sut.items).toHaveLength(1);
      expect(sut.items).toHaveProperty('0.SK', 'A');
    });

    it('should handle first 2', async () => {
      const sut = await transporter.findMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'users',
        },
        first: 2,
      });

      expect(sut.items).toHaveLength(2);
      expect(sut.items[0].SK).toBe('A');
      expect(sut.items[1].SK).toBe('B');
    });

    it('should handle sort, projection without first (with dataloader)', async () => {
      const spy = jest.spyOn(collection.constructor.prototype, 'find');

      const sut = await transporter.findMany({
        indexConfig,
        context: {},
        filter: {
          PK: 'users',
          SK: 'B',
        },
        sort: 'ASC',
        projection: ['sub.attr'],
      });

      expect(spy).toBeCalledWith(
        {
          $and: [
            {
              _id: 'entity_foo:_id#users»B',
            },
          ],
        },
        { projection: ['sub.attr'], sort: { _id: 1 } }
      );

      expect(sut.items).toHaveLength(1);
      expect(sut.items[0].sub.attr).toBe(2);

      spy.mockRestore();
    });

    it('should handle first 3, sort, projection', async () => {
      const spy = jest.spyOn(collection.constructor.prototype, 'find');

      const sut = await transporter.findMany({
        filter: {
          PK: 'users',
        },
        indexConfig,
        context: {},
        first: 3,
        sort: 'DESC',

        projection: ['sub.attr'],
      });

      expect(spy).toBeCalledWith(
        //
        expect.any(Object),
        {
          limit: 3,
          projection: ['sub.attr'],
          sort: { _id: -1 },
        }
      );

      expect(sut.items).toHaveLength(3);
      expect(sut.items[0]).toEqual({
        _id: 'entity_foo:_id#users»D',
        sub: { attr: 4 },
      });
      expect(sut.items[1]).toEqual({
        _id: 'entity_foo:_id#users»C',
        sub: { attr: 3 },
      });

      spy.mockRestore();
    });

    //   // it('should batch queries', async () => {
    //   //   const spy = jest.spyOn(collection.constructor.prototype, 'find');
    //   //
    //   //   transporter = new MongoTransporter(mockApp._mongoClient!, {});
    //   //
    //   //   const context = {};
    //   //
    //   //   const q1 = {
    //   //     PK: 'users',
    //   //     SK: 'batch1_1',
    //   //   } as const;
    //   //
    //   //   const q2 = {
    //   //     PK: 'users',
    //   //     SK: 'batch1_2',
    //   //   } as const;
    //   //
    //   //   const q3 = {
    //   //     PK: 'users',
    //   //     SK: 'alone1',
    //   //   } as const;
    //   //
    //   //   const q4 = {
    //   //     PK: 'users',
    //   //     SK: 'splitByProjection1',
    //   //
    //   //     projection: ['_id'] as any,
    //   //   } as const;
    //   //
    //   //   const q5 = {
    //   //     PK: 'users',
    //   //     SK: 'splitByProjection2',
    //   //
    //   //     projection: ['name'] as any,
    //   //   } as const;
    //   //
    //   //   await Promise.all([
    //   //     transporter.findMany({
    //   //       query: q1,
    //   //       context: context,
    //   //     }),
    //   //     transporter.findMany({
    //   //       query: q2,
    //   //       context: context,
    //   //     }),
    //   //   ]);
    //   //
    //   //   await transporter.findMany({
    //   //     query: q3,
    //   //     context: context,
    //   //   });
    //   //
    //   //   await Promise.all([
    //   //     transporter.findMany({
    //   //       query: q4,
    //   //       context: context,
    //   //     }),
    //   //     transporter.findMany({
    //   //       query: q5,
    //   //       context: context,
    //   //     }),
    //   //   ]);
    //   //
    //   //   expect(spy).toBeCalledWith(
    //   //     { $or: [queryFilterToMongo(q1), queryFilterToMongo(q2)] },
    //   //     { projection: undefined, sort: { _id: 1 } }
    //   //   );
    //   //
    //   //   expect(spy).toBeCalledWith(
    //   //     { $or: [queryFilterToMongo(q3)] },
    //   //     { projection: undefined, sort: { _id: 1 } }
    //   //   );
    //   //
    //   //   expect(spy).toBeCalledWith(
    //   //     { $or: [queryFilterToMongo(q5)] },
    //   //     { projection: ['name'], sort: { _id: 1 } }
    //   //   );
    //   //
    //   //   expect(spy).toBeCalledWith(
    //   //     { $or: [queryFilterToMongo(q4)] },
    //   //     { projection: ['_id'], sort: { _id: 1 } }
    //   //   );
    //   //
    //   //   expect(spy).toBeCalledTimes(4);
    //   //
    //   //   spy.mockRestore();
    //   // });
  });

  describe('findOne', () => {
    it('should call findMany', async () => {
      const spy = jest.spyOn(transporter, 'findMany');

      const ctx = { __hola: '' };

      const result = await transporter.findOne({
        filter: {
          PK: 'users',
          SK: '123',
        },
        indexConfig,
        context: ctx,
      });

      expect(spy).toBeCalledWith({
        context: ctx,
        consistent: undefined,
        filter: {
          SK: '123',
          PK: 'users',
        },

        projection: undefined,
        indexConfig,
        first: 1,
      });

      expect(result.item).toBe(null);
    });

    it('should return single item with dataloader', async () => {
      const collection = transporter.db.collection('users');
      const spy = jest.spyOn(collection.constructor.prototype, 'find');

      await Promise.all([
        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'users',
            SK: 3,
          },
        }),

        transporter.createOne({
          indexConfig,
          context: {},
          item: {
            PK: 'users',
            SK: 1000,
          },
        }),
      ]);

      const context = {};

      const [g1, g2, g3] = await Promise.all([
        transporter.findOne({
          indexConfig,
          filter: {
            PK: 'users',
            SK: 3,
          },
          context,
        }),
        transporter.findOne({
          indexConfig,
          filter: {
            PK: 'users',
            SK: 1000,
          },
          context,
        }),
        transporter.findOne({
          filter: {
            PK: 'users',
            SK: 199,
          },
          indexConfig,
          context,
        }),
      ]);

      expect(g1.item).toHaveProperty('SK', 3);
      expect(g2.item).toHaveProperty('SK', 1000);
      expect(g3.item).toBeNull();

      expect(spy).toBeCalledTimes(1);

      spy.mockRestore();
    });
  });

  test('case 101', async () => {
    const collection = transporter.db.collection('users');
    const spy = jest.spyOn(collection.constructor.prototype, 'find');

    const context = {};

    await transporter.findOne({
      indexConfig: {
        entity: 'account',
        indexes: [
          {
            name: 'accountId',
            PK: ['.accountId'],
            field: '_id',
          },
        ],
      },
      filter: {
        accountId: { $gte: '0' },
      },
      context,
    });

    expect(spy).toBeCalledWith(
      {
        $or: [
          {
            $and: [
              {
                _id: {
                  $regex: '^account:_id#',
                },
              },
              { _id: { $gte: 'account:_id#0' } },
              { _idSK: '' },
            ],
          },
        ],
      },
      { projection: undefined, sort: { _id: 1 } }
    );

    spy.mockRestore();
  });
});

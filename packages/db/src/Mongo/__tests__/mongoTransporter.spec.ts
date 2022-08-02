// import {
//   UpdateExpression,
//   UpdateItemConfig,
// } from '../../Transporter/Transporter';
// import { sanitizeUpdateExpressions } from '../../Transporter/sanitizeUpdateExpressions';
import { MongoTransporter } from '../MongoTransporter';
import { createAppMock, AppMock } from './createAppMock';
import { DocumentIndexConfig } from '../../Transporter/DocumentIndex';

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

// function sanitizeUpdate<Update extends UpdateExpression<any>>(input: Update) {
//   return sanitizeUpdateExpressions(input, { PK: ['#mypktest'], SK: undefined });
// }

jest.setTimeout(60000);

describe('MongoTransporter', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  function _put(
    config: Omit<Parameters<MongoTransporter['putItem']>[0], 'indexConfig'>
  ) {
    return transporter.putItem({
      indexConfig: {
        indices: [
          {
            field: '_id',
            PK: ['.PK'],
            SK: ['.SK'],
          },
        ],
      },
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

  describe('putItem', () => {
    it('should put numeric key', async () => {
      expect(
        await _put({
          item: {
            PK: 'ranking',
            SK: '',
          },
        })
      ).toEqual({
        created: true,
        item: {
          PK: 'ranking',
          SK: '',
          _id: 'ranking↠',
        },
        updated: false,
      });

      expect(
        await _put({
          item: {
            PK: 'ranking',
            SK: 0,
          },
        })
      ).toEqual({
        created: true,
        item: {
          PK: 'ranking',
          SK: 0,
          _id: 'ranking↠5',
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
        item: {
          PK: 'ranking',
          SK: 12000000000000000000000000000000000000,
          _id: 'ranking↠7z412',
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
        item: {
          PK: 'users',
          SK: 'users',
          _id: 'users↠users',
        },
        updated: false,
      });

      expect(
        await _put({
          item: {
            PK: 'users',
            SK: '',
          },
        })
      ).toEqual({
        created: true,
        item: {
          PK: 'users',
          SK: '',
          _id: 'users↠',
        },
        updated: false,
      });
    });

    it('should replace item', async () => {
      const r1 = await _put(itemUser);

      expect(r1).toEqual({
        created: true,
        item: {
          PK: 'users',
          SK: '123',
          _id: 'users↠123',
          email: 'fulano@gmail.com',
          name: 'fulano',
        },
        updated: false,
      });

      // replace
      expect(
        await _put({ ...itemUser, replace: true })
      ).toEqual({
        created: false,
        item: {
          PK: 'users',
          SK: '123',
          _id: 'users↠123',
          email: 'fulano@gmail.com',
          name: 'fulano',
        },
        updated: true,
      });

      // not replace
      expect(await _put({ ...itemUser })).toEqual({
        created: false,
        item: null,
        error: expect.stringMatching('duplicate'),
        updated: false,
      });

      // not replace
      expect(await _put({ ...itemUser, replace: false })).toEqual({
        created: false,
        item: null,
        error: expect.stringMatching('duplicate'),
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

  // describe('updateItem', () => {
  //   it('should handle config.update', async () => {
  //     await transporter.putItem({
  //       item: {
  //         PK: 'a',
  //         SK: 'a',
  //         list: ['a', 'b', 'c', 'd', 'e', 'f'],
  //         num: 0,
  //       },
  //     });
  //
  //     const update = (SK: string, update: UpdateExpression<any>) =>
  //       transporter.updateItem<any>({
  //         filter: {
  //           PK: 'a',
  //           SK,
  //           field: '_id',
  //         },
  //         update: sanitizeUpdate(update),
  //       });
  //
  //     expect(await update('a', { $set: { newProp: 22 } })).toHaveProperty(
  //       'item.newProp',
  //       22
  //     );
  //
  //     expect(await update('a', { $remove: ['list[0]'] })).toHaveProperty(
  //       'item.list',
  //       ['b', 'c', 'd', 'e', 'f']
  //     );
  //     expect(await update('a', { $remove: ['list[4]'] })).toHaveProperty(
  //       'item.list',
  //       ['b', 'c', 'd', 'e']
  //     );
  //
  //     expect(await update('a', { $inc: { num: 1, newNum: 2 } })).toHaveProperty(
  //       'item',
  //       {
  //         _id: expect.any(String),
  //         PK: 'a',
  //         SK: 'a',
  //         list: ['b', 'c', 'd', 'e'],
  //         newNum: 2,
  //         num: 1,
  //         newProp: 22,
  //       }
  //     );
  //   });
  //
  //   it('should handle config.condition', async () => {
  //     await transporter.putItem({
  //       item: {
  //         PK: 'a',
  //         SK: 'a',
  //         list: ['a', 'b', 'c', 'd', 'e', 'f'],
  //         num: 0,
  //       },
  //     });
  //
  //     expect(
  //       await transporter.updateItem<any>({
  //         filter: {
  //           PK: 'a',
  //           SK: 'a',
  //           field: '_id',
  //         },
  //         update: sanitizeUpdate({ $set: { newField: 1 } }),
  //         condition: { num: { $gte: 1 } },
  //       })
  //     ).toEqual({ item: null, created: false, updated: false });
  //
  //     const updated = await transporter.updateItem<any>({
  //       filter: {
  //         PK: 'a',
  //         SK: 'a',
  //         field: '_id',
  //       },
  //       update: sanitizeUpdate({ $set: { newField: 1 } }),
  //       condition: { num: { $gte: 0 } },
  //     });
  //
  //     expect(updated).toHaveProperty('item.newField', 1);
  //     expect(updated).toHaveProperty('updated', true);
  //     expect(updated).toHaveProperty('created', false);
  //   });
  //
  //   it('should handle config.upsert using default false', async () => {
  //     const config: UpdateItemConfig<any> = {
  //       filter: {
  //         PK: 'a',
  //         SK: '55555555_none_exists',
  //         field: '_id',
  //       },
  //
  //       update: sanitizeUpdate({ $set: { newField: 1 } }),
  //     };
  //
  //     const up1 = await transporter.updateItem<any>({
  //       ...config,
  //     });
  //
  //     expect(up1).toEqual({ item: null, created: false, updated: false });
  //
  //     const up2 = await transporter.updateItem<any>({
  //       ...config,
  //       upsert: true,
  //     });
  //
  //     expect(up2).toHaveProperty('item.newField', 1);
  //     expect(up2).toHaveProperty('created', true);
  //     expect(up2).toHaveProperty('updated', false);
  //   });
  // });

  // describe('deleteItem', () => {
  //   it('should handle keyPair', async () => {
  //     await Promise.all([
  //       transporter.putItem({
  //         item: {
  //           PK: 'a',
  //           SK: 'b',
  //         },
  //       }),
  //       transporter.putItem({
  //         item: {
  //           PK: 'a',
  //           SK: 'c',
  //         },
  //       }),
  //     ]);
  //
  //     const removed = await transporter.deleteItem({
  //       filter: {
  //         PK: 'a',
  //         SK: 'b',
  //         field: '_id',
  //       },
  //     });
  //
  //     expect(removed).toHaveProperty('item._id', 'a↠b');
  //
  //     const removed2 = await transporter.deleteItem({
  //       filter: {
  //         PK: 'a',
  //         SK: 'b',
  //         field: '_id',
  //       },
  //     });
  //
  //     expect(removed2).toHaveProperty('item', null);
  //   });
  //
  //   it('should handle condition', async () => {
  //     await Promise.all([
  //       transporter.putItem({
  //         item: {
  //           PK: 'a',
  //           SK: 'b',
  //           email: 'abc@bb.cc',
  //         },
  //       }),
  //       transporter.putItem({
  //         item: {
  //           PK: 'a',
  //           SK: 'c',
  //         },
  //       }),
  //     ]);
  //
  //     const removed1 = await transporter.deleteItem({
  //       PK: 'a',
  //       SK: 'b',
  //
  //       condition: { email: { $startsWith: 'xxx' } },
  //     });
  //
  //     expect(removed1).toHaveProperty('item', null);
  //
  //     const removed2 = await transporter.deleteItem({
  //       PK: 'a',
  //       SK: 'b',
  //
  //       condition: { email: { $startsWith: 'abc' } },
  //     });
  //
  //     expect(removed2).toHaveProperty('item.email', 'abc@bb.cc');
  //   });
  // });
  //
  // describe('loadQuery', () => {
  //   let mockApp: MockApp;
  //   let transporter: MongoTransporter;
  //   let collection: Collection;
  //
  //   afterAll(async function () {
  //     await mockApp.reset();
  //   });
  //
  //   beforeAll(async () => {
  //     mockApp = await createAppMock();
  //     transporter = new MongoTransporter(mockApp.client!);
  //     collection = transporter.db.collection('users');
  //
  //     const ITEMS = [
  //       {
  //         PK: 'users',
  //         SK: 'A',
  //         sub: {
  //           attr: 1,
  //         },
  //       },
  //       {
  //         PK: 'users',
  //         SK: 'B',
  //         sub: {
  //           attr: 2,
  //         },
  //       },
  //       {
  //         PK: 'users',
  //         SK: 'C',
  //         sub: {
  //           attr: 3,
  //         },
  //       },
  //       {
  //         PK: 'users',
  //         SK: 'D',
  //         sub: {
  //           attr: 4,
  //         },
  //       },
  //     ];
  //
  //     await Promise.all(
  //       ITEMS.map(async (item) => {
  //         await transporter.putItem({
  //           item,
  //         });
  //       })
  //     );
  //   });
  //
  //   it('should handle startingKey', async () => {
  //     const [sortAsc, sortDesc] = await Promise.all([
  //       transporter.loadQuery({
  //         query: {
  //           filter: {
  //             PK: 'users',
  //             SK: null,
  //             field: '_id',
  //           },
  //
  //           limit: 1,
  //           sort: 'ASC',
  //           startingKey: { PK: 'users', SK: 'A', field: '_id' },
  //         },
  //         dataloaderContext: {},
  //       }),
  //
  //       transporter.loadQuery({
  //         query: {
  //           PK: 'users',
  //           SK: null,
  //
  //           limit: 1,
  //           sort: 'DESC',
  //           startingKey: { PK: 'users', SK: 'D' },
  //         },
  //         dataloaderContext: {},
  //       }),
  //     ]);
  //
  //     expect(sortAsc).toHaveProperty('items.0.SK', 'B');
  //     expect(sortDesc).toHaveProperty('items.0.SK', 'C');
  //
  //     await expect(
  //       transporter.loadQuery({
  //         query: {
  //           PK: 'users',
  //           SK: null,
  //           SKType: null,
  //           limit: 1,
  //           sort: 'DESC',
  //           startingKey: { PK: 'users', SK: 'D' },
  //         },
  //         dataloaderContext: {},
  //       })
  //     ).rejects.toThrow(
  //       'Expected SKType to be defined when startingKey.SK is provided.'
  //     );
  //   });
  //
  //   it('should handle limit 1', async () => {
  //     const sut = await transporter.loadQuery({
  //       query: {
  //         PK: 'users',
  //         SK: null,
  //         SKType: null,
  //         limit: 1,
  //       },
  //       dataloaderContext: {},
  //     });
  //
  //     expect(sut.items).toHaveLength(1);
  //     expect(sut.items).toHaveProperty('0.SK', 'A');
  //   });
  //
  //   it('should handle limit 2', async () => {
  //     const sut = await transporter.loadQuery({
  //       query: {
  //         PK: 'users',
  //         SK: null,
  //         SKType: null,
  //         limit: 2,
  //       },
  //       dataloaderContext: {},
  //     });
  //
  //     expect(sut.items).toHaveLength(2);
  //     expect(sut.items[0].SK).toBe('A');
  //     expect(sut.items[1].SK).toBe('B');
  //   });
  //
  //   it('should handle sort, projection without limit (with dataloader)', async () => {
  //     const spy = jest.spyOn(collection.constructor.prototype, 'find');
  //
  //     const sut = await transporter.loadQuery({
  //       query: {
  //         PK: 'users',
  //         SK: 'B',
  //
  //         sort: 'ASC',
  //         projection: ['sub.attr'],
  //       },
  //       dataloaderContext: {},
  //     });
  //
  //     expect(spy).toBeCalledWith(
  //       {
  //         // $or injected  from dataloader
  //         $or: [queryFilterToMongo({ PK: 'users', SK: 'B', SKType: 'string' })],
  //       },
  //       { projection: ['sub.attr'], sort: { _id: 1 } }
  //     );
  //
  //     expect(sut.items).toHaveLength(1);
  //     expect(sut.items[0].sub.attr).toBe(2);
  //
  //     spy.mockRestore();
  //   });
  //
  //   it('should handle limit 3, sort, projection', async () => {
  //     const spy = jest.spyOn(collection.constructor.prototype, 'find');
  //
  //     const sut = await transporter.loadQuery({
  //       query: {
  //         PK: 'users',
  //         SK: null,
  //         limit: 3,
  //         sort: 'DESC',
  //
  //         projection: ['sub.attr'],
  //       },
  //       dataloaderContext: {},
  //     });
  //
  //     expect(spy).toBeCalledWith(
  //       queryFilterToMongo({ PK: 'users', SK: null, SKType: 'string' }),
  //       {
  //         limit: 3,
  //         projection: ['sub.attr'],
  //         sort: { _id: -1 },
  //       }
  //     );
  //
  //     expect(sut.items).toHaveLength(3);
  //     expect(sut.items[0]).toEqual({ _id: 'users↠D', sub: { attr: 4 } });
  //     expect(sut.items[1]).toEqual({ _id: 'users↠C', sub: { attr: 3 } });
  //
  //     spy.mockRestore();
  //   });
  //
  //   it('should handle options.parseCollectionName', async () => {
  //     transporter = new MongoTransporter(mockApp._mongoClient!, {
  //       parseCollectionName: (PK) => `customPKCollection_${PK}`,
  //     });
  //
  //     const spy = jest.spyOn(mockApp._mongoClient!.db, 'collection');
  //
  //     await transporter.loadQuery({
  //       query: {
  //         PK: 'users',
  //
  //         SK: '1',
  //       },
  //       dataloaderContext: {},
  //     });
  //
  //     expect(spy).toBeCalledWith('customPKCollection_users');
  //
  //     spy.mockRestore();
  //   });
  //
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
  //   //     transporter.loadQuery({
  //   //       query: q1,
  //   //       dataloaderContext: context,
  //   //     }),
  //   //     transporter.loadQuery({
  //   //       query: q2,
  //   //       dataloaderContext: context,
  //   //     }),
  //   //   ]);
  //   //
  //   //   await transporter.loadQuery({
  //   //     query: q3,
  //   //     dataloaderContext: context,
  //   //   });
  //   //
  //   //   await Promise.all([
  //   //     transporter.loadQuery({
  //   //       query: q4,
  //   //       dataloaderContext: context,
  //   //     }),
  //   //     transporter.loadQuery({
  //   //       query: q5,
  //   //       dataloaderContext: context,
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
  // });
  //
  // describe('getItem', () => {
  //   it('should call loadQuery', async () => {
  //     const spy = jest.spyOn(transporter, 'loadQuery');
  //
  //     const ctx = { __hola: '' };
  //
  //     const result = await transporter.getItem({
  //       query: {
  //         PK: 'users',
  //         SK: '123',
  //       },
  //       dataloaderContext: ctx,
  //     });
  //
  //     expect(spy).toBeCalledWith({
  //       dataloaderContext: ctx,
  //       query: {
  //         SK: '123',
  //         PK: 'users',
  //
  //         projection: undefined,
  //         consistent: undefined,
  //         limit: 1,
  //       },
  //     });
  //
  //     expect(result.item).toBe(null);
  //   });
  //
  //   it('should return single item with dataloader', async () => {
  //     const collection = transporter.db.collection('users');
  //     const spy = jest.spyOn(collection.constructor.prototype, 'find');
  //
  //     await Promise.all([
  //       transporter.putItem({
  //         item: {
  //           PK: 'users',
  //           SK: 3,
  //         },
  //       }),
  //
  //       transporter.putItem({
  //         item: {
  //           PK: 'users',
  //           SK: 1000,
  //         },
  //       }),
  //     ]);
  //
  //     const dataloaderContext = {};
  //
  //     const [g1, g2, g3] = await Promise.all([
  //       transporter.getItem({
  //         query: {
  //           PK: 'users',
  //           SK: 3,
  //         },
  //         dataloaderContext,
  //       }),
  //       transporter.getItem({
  //         query: {
  //           PK: 'users',
  //           SK: 1000,
  //         },
  //         dataloaderContext,
  //       }),
  //       transporter.getItem({
  //         query: {
  //           PK: 'users',
  //           SK: 199,
  //         },
  //         dataloaderContext,
  //       }),
  //     ]);
  //
  //     expect(g1.item).toHaveProperty('SK', 3);
  //     expect(g2.item).toHaveProperty('SK', 1000);
  //     expect(g3.item).toBeNull();
  //
  //     expect(spy).toBeCalledTimes(1);
  //
  //     spy.mockRestore();
  //   });
  // });
});

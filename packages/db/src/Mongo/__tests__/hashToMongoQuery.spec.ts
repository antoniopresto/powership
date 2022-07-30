import { IndexFilter, PKSKValueType } from '../../Transporter/Transporter';

import { queryFilterToMongo } from '../queryFilterToMongo';
import { hashKey } from '../../Transporter/HashPKSKConditionsToTopLevelFilter';
import { createAppMock, AppMock } from './createAppMock';

const ITEMS = [
  {
    PK: 'users',
    SK: 'antonio',
  },
  {
    PK: 'users',
    SK: 'rafaela',
  },
  {
    PK: 'users',
    SK: 'maggie',
  },
  {
    PK: 'users',
    SK: 'cacau',
  },
  {
    PK: 'users',
    SK: 'cacau2',
  },
  {
    PK: 'users',
    SK: 'cacauZ',
  },

  {
    PK: 'ranking',
    SK: -0.001,
  },
  {
    PK: 'ranking',
    SK: -0.000000000001,
  },

  {
    PK: 'ranking',
    SK: 0,
  },

  {
    PK: 'ranking',
    SK: 0.007,
  },
  {
    PK: 'ranking',
    SK: 2,
  },
  {
    PK: 'ranking',
    SK: 11,
  },
  {
    PK: 'ranking',
    SK: 33,
  },
  {
    PK: 'ranking',
    SK: 10000,
  },
];

describe('hashToMongoQuery', () => {
  let mockApp: AppMock;

  // it('should hashKey', () => {
  //   expect(
  //     hashQueryKey({
  //       PK: 'users',
  //       SK: '12000000000000000000000000000000000000',
  //     })
  //   ).toEqual('users↠7z412');
  //
  //   expect(
  //     hashQueryKey({
  //       PK: 'users',
  //       SK: '-0.0000000000000000000000000000000000012',
  //     })
  //   ).toEqual('users↠4z1yx~');
  //
  //   expect(
  //     hashQueryKey({
  //       PK: 'users',
  //       SK: 0,
  //     })
  //   ).toEqual('users↠5');
  //
  //   expect(hashQueryKey({ PK: 'users', SK: 2 })).toEqual('users↠712');
  //
  //   expect(hashQueryKey({ PK: 'users', SK: 2 })).toEqual('users↠2');
  // });

  async function get(
    PK: PKSKValueType,
    SK: PKSKValueType | Omit<IndexFilter<any>, '$field'> | null,
    limit?: number
  ) {
    const query = queryFilterToMongo({
      filter: {
        PK: PK,
        SK: SK,
        field: '_id',
      },
    });

    return mockApp
      .collection()
      .find(query, { limit, sort: { _id: 1 } })
      .toArray();
  }

  beforeAll(async function () {
    mockApp = await createAppMock().start();

    await Promise.all(
      ITEMS.map(async ({ PK, SK }) => {
        const _id = hashKey({ PK, SK });

        const doc: any = {
          _id,
        };

        if (PK === 'ranking') {
          doc.originalSK = SK;
        }

        await mockApp.collection().insertOne(doc);
      })
    );
  });

  afterAll(async function () {
    await mockApp.reset();
  });

  describe('parse string SK', () => {
    it('should handle empty key condition', async () => {
      const query = queryFilterToMongo({
        filter: {
          PK: 'users#123',
          SK: {},
          field: '_id',
        },
      });

      expect(query).toEqual({
        $and: [
          {
            _id: /^users#123↠/,
          },
        ],
      });
    });

    it('should handle $startsWith', async () => {
      const query = queryFilterToMongo({
        filter: {
          PK: 'users#123',
          SK: {
            $startsWith: 'a',
          },
          field: '_id',
        },
      });

      expect(query).toEqual({
        $and: [
          {
            _id: /^users#123↠a/,
          },
        ],
      });
    });

    it('should handle $between', async () => {
      const query = queryFilterToMongo({
        filter: {
          PK: 'users#123',
          SK: {
            $between: ['a', 'c'],
          },
          field: '_id',
        },
      });

      expect(query).toEqual({
        $and: [
          { _id: /^users#123↠/ },
          { _id: { $gte: 'users#123↠a' } },
          { _id: { $lte: 'users#123↠c' } },
        ],
      });
    });

    it('should handle $eq', async () => {
      const query = queryFilterToMongo({
        filter: {
          PK: 'users#123',
          SK: {
            $eq: 'abc',
          },
          field: '_id',
        },
      });

      expect(query).toEqual({
        $and: [{ _id: { $eq: 'users#123↠abc' } }],
      });
    });

    // it('should handle $gt', async () => {
    //   const query = hashToMongoQueryConditions({
    //     PK: 'users#123',
    //     SK: {
    //       $gt: 'abc',
    //     },
    //   });
    //
    //   expect(query).toEqual({
    //     $and: [
    //       { _id: /^users#123↠/ },
    //       //
    //       { _id: { $gt: 'users#123↠abc' } },
    //     ],
    //   });
    // });
    //
    // it('should handle $gte', async () => {
    //   const query = hashToMongoQueryConditions({
    //     PK: 'users#123',
    //     SK: {
    //       $gte: 'abc',
    //     },
    //   });
    //
    //   expect(query).toEqual({
    //     $and: [
    //       { _id: /^users#123↠/ },
    //       //
    //       { _id: { $gte: 'users#123↠abc' } },
    //     ],
    //   });
    // });
    //
    // it('should handle $lt', async () => {
    //   const query = hashToMongoQueryConditions({
    //     PK: 'users#123',
    //     SK: {
    //       $lt: 'abc',
    //     },
    //   });
    //
    //   expect(query).toEqual({
    //     $and: [
    //       { _id: /^users#123↠/ },
    //       //
    //       { _id: { $lt: 'users#123↠abc' } },
    //     ],
    //   });
    // });
    //
    // it('should handle $lte', async () => {
    //   const query = hashToMongoQueryConditions({
    //     PK: 'users#123',
    //     SK: {
    //       $lte: 'abc',
    //     },
    //   });
    //
    //   expect(query).toEqual({
    //     $and: [
    //       { _id: /^users#123↠/ },
    //       {
    //         _id: { $lte: 'users#123↠abc' },
    //       },
    //     ],
    //   });
    // });
  });

  describe('query string SK', () => {
    it('should handle empty key condition', async () => {
      expect(await get('users', null)).toHaveLength(6);
      expect(await get('users', {})).toHaveLength(6);
    });

    it('should handle $startsWith', async () => {
      const sut = await get('users', { $startsWith: 'cacau' });
      expect(sut).toEqual([
        { _id: 'users↠cacau' },
        { _id: 'users↠cacau2' },
        { _id: 'users↠cacauZ' },
      ]);
    });

    it('should handle $between', async () => {
      const sut = await get('users', { $between: ['a', 'cz'] });

      expect(sut).toEqual([
        { _id: 'users↠antonio' },
        { _id: 'users↠cacau' },
        { _id: 'users↠cacau2' },
        { _id: 'users↠cacauZ' },
      ]);
    });

    it('should handle $eq', async () => {
      const sut = await get('users', { $eq: 'cacau' });
      expect(sut).toEqual([{ _id: 'users↠cacau' }]);
    });

    it('should handle $gt', async () => {
      const sut = await get('users', { $gt: 'cacau' });
      expect(sut).toEqual([
        {
          _id: 'users↠cacau2',
        },
        {
          _id: 'users↠cacauZ',
        },
        {
          _id: 'users↠maggie',
        },
        {
          _id: 'users↠rafaela',
        },
      ]);
    });

    it('should handle $gte', async () => {
      const sut = await get('users', { $gte: 'maggie' });
      expect(sut).toEqual([
        {
          _id: 'users↠maggie',
        },
        {
          _id: 'users↠rafaela',
        },
      ]);
    });

    it('should handle $lt', async () => {
      const sut = await get('users', { $lt: 'cacau2' });
      expect(sut).toEqual([
        {
          _id: 'users↠antonio',
        },
        {
          _id: 'users↠cacau',
        },
      ]);
    });

    it('should handle $lte', async () => {
      const sut = await get('users', { $lte: 'cacau2' });

      expect(sut).toEqual([
        {
          _id: 'users↠antonio',
        },
        {
          _id: 'users↠cacau',
        },
        {
          _id: 'users↠cacau2',
        },
      ]);
    });
  });

  describe('query number SK', () => {
    it('should handle empty key condition', async () => {
      expect(await get('ranking', null)).toHaveLength(8);
      expect(await get('ranking', {})).toHaveLength(8);
    });

    it('should handle $between', async () => {
      const t1 = await get('ranking', { $between: [0, 2] });

      expect(t1).toEqual([
        {
          _id: 'ranking↠5',
          originalSK: 0,
        },
        {
          _id: 'ranking↠6x7',
          originalSK: 0.007,
        },
        {
          _id: 'ranking↠712',
          originalSK: 2,
        },
      ]);

      const t2 = await get('ranking', {
        $between: [-0.1, -0.000000000001],
      });

      expect(t2).toEqual([
        {
          _id: 'ranking↠42y~',
          originalSK: -0.001,
        },
        {
          _id: 'ranking↠4by~',
          originalSK: '-0.000000000001',
        },
      ]);
    });

    it('should handle $eq', async () => {
      expect(await get('ranking', { $eq: 0.007 })).toEqual([
        {
          _id: 'ranking↠6x7',
          originalSK: 0.007,
        },
      ]);
    });

    it('should handle ignore trailing zeros', async () => {
      expect(await get('ranking', { $eq: '-0.00000' })).toEqual([
        {
          _id: 'ranking↠5',
          originalSK: 0,
        },
      ]);

      expect(await get('ranking', { $eq: '-00000.00100' })).toEqual([
        {
          _id: 'ranking↠42y~',
          originalSK: -0.001,
        },
      ]);
    });

    it('should handle $gt', async () => {
      expect(await get('ranking', { $gt: '33' })).toEqual([
        {
          _id: 'ranking↠751',
          originalSK: 10000,
        },
      ]);

      expect(await get('ranking', { $gt: 33 })).toEqual([
        {
          _id: 'ranking↠751',
          originalSK: 10000,
        },
      ]);
    });

    it('should handle $gte', async () => {
      expect(await get('ranking', { $gte: '33' })).toEqual([
        {
          _id: 'ranking↠7233',
          originalSK: 33,
        },
        {
          _id: 'ranking↠751',
          originalSK: 10000,
        },
      ]);
    });

    it('should handle $lt', async () => {
      expect(await get('ranking', { $lt: '-0.000000000001' })).toEqual([
        {
          _id: 'ranking↠42y~',
          originalSK: -0.001,
        },
      ]);

      expect(await get('ranking', { $lt: -0.001 })).toEqual([]);

      expect(await get('ranking', { $lt: 0.007 })).toEqual([
        {
          _id: 'ranking↠42y~',
          originalSK: -0.001,
        },
        {
          _id: 'ranking↠4by~',
          originalSK: '-0.000000000001',
        },
        {
          _id: 'ranking↠5',
          originalSK: 0,
        },
      ]);
    });

    it('should handle $lte', async () => {
      expect(await get('ranking', { $lte: -0.001 })).toEqual([
        {
          _id: 'ranking↠42y~',
          originalSK: -0.001,
        },
      ]);

      expect(await get('ranking', { $lte: 33 })).toHaveLength(7);
    });
  });

  // it('should conditional parameters', () => {
  //   expect(() =>
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: '2',
  //     })
  //   ).toThrow('Expected SKType to be provided when SK is not null.');
  //
  //   expect(() =>
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: '2',
  //     })
  //   ).toThrow('Expected SKType to be provided when SK is not null.');
  //
  //   expect(() =>
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: null,
  //
  //       startingKey: { PK: '1', SK: '1' },
  //     })
  //   ).toThrow('Expected SKType to be defined when startingKey.SK is provided.');
  //
  //   expect(
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: null,
  //
  //       sort: 'ASC',
  //       startingKey: { PK: '1' },
  //     })
  //   ).toBeTruthy();
  //
  //   expect(() =>
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: null,
  //
  //       startingKey: { PK: '1' },
  //     })
  //   ).toThrow('sort: Expected non null value, but received undefined.');
  //
  //   expect(() =>
  //     hashToMongoFilter({
  //       PK: '1',
  //       SK: '2',
  //     })
  //   ).toThrow(
  //     'hashKey: expected SKType to be "number" or "string" but found 1.'
  //   );
  // });
});

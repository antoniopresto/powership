import { parseMongoAttributeFilters } from '../parseMongoAttributeFilters';

describe('parseMongoAttributeFilters', () => {
  test('key value', () => {
    expect(parseMongoAttributeFilters({ a: 1 })).toEqual([{ a: 1 }]);

    expect(parseMongoAttributeFilters({ a: 1, b: '22' })).toEqual([
      { a: 1 },
      { b: '22' },
    ]);
  });

  test('$lte', () => {
    expect(parseMongoAttributeFilters({ a: { $lte: 1 } })).toEqual([
      { a: { $lte: 1 } },
    ]);
  });

  test('$lt', () => {
    expect(parseMongoAttributeFilters({ a: { $lt: 1 } })).toEqual([
      { a: { $lt: 1 } },
    ]);
  });

  test('$gt', () => {
    expect(parseMongoAttributeFilters({ a: { $gt: 1 } })).toEqual([
      { a: { $gt: 1 } },
    ]);
  });

  test('$gte', () => {
    expect(parseMongoAttributeFilters({ a: { $gte: 1 } })).toEqual([
      { a: { $gte: 1 } },
    ]);
  });

  test('$between', () => {
    expect(parseMongoAttributeFilters({ a: { $between: [100, 105] } })).toEqual(
      [
        {
          a: {
            $gte: 100,
            $lte: 105,
          },
        },
      ]
    );
  });

  test('$exists', () => {
    expect(parseMongoAttributeFilters({ a: { $exists: true } })).toEqual([
      { a: { $exists: true } },
    ]);
    expect(parseMongoAttributeFilters({ a: { $exists: false } })).toEqual([
      { a: { $exists: false } },
    ]);
  });

  test('$type', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $type: 'Binary' },
      })
    ).toEqual([{ a: { $type: 'binData' } }]);
  });

  test('startsWith', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $startsWith: 'xx' },
      })
    ).toEqual([{ a: { $regex: '^xx' } }]);
  });

  test('$contains', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $contains: 1 },
      })
    ).toEqual([
      {
        a: {
          $type: 'array',
        },
      },
      {
        a: 1,
      },
    ]);
  });

  test('$matchString', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $matchString: 'aa' },
      })
    ).toEqual([{ a: /aa/ }]);
  });

  test('$size (not supported)', () => {
    expect(() =>
      parseMongoAttributeFilters({
        // @ts-ignore
        a: { $size: 1 },
      })
    ).toThrow('not supported attribute filter "$size".');
  });

  test('$in', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $in: ['a'] },
      })
    ).toEqual([{ a: { $in: ['a'] } }]);
  });
  test('$eq', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $eq: 1 },
      })
    ).toEqual([{ a: { $eq: 1 } }]);
  });

  test('$ne', () => {
    expect(
      parseMongoAttributeFilters({
        a: { $ne: 1 },
      })
    ).toEqual([{ a: { $ne: 1 } }]);
  });

  test('$and', () => {
    expect(
      parseMongoAttributeFilters({
        b: { $ne: 'xx' },
        $and: [
          { x: { $ne: 'zzz' } },
          //
        ] as any,
      })
    ).toEqual([
      {
        b: {
          $ne: 'xx',
        },
      },
      {
        x: {
          $ne: 'zzz',
        },
      },
    ]);
  });

  test('$or', () => {
    expect(
      parseMongoAttributeFilters({
        b: { $ne: 'xx' },
        $or: [
          { x: { $ne: 'zzz' } },
          { z: { $ne: 'yyy' } },
          {
            $not: {
              // @ts-ignore FIXME
              a: { $eq: 'b' },
              $and: [{ x: { $eq: 'x' } }, { z: { $eq: 'z' } }],
            },
          },
          //
        ] as any,
      })
    ).toEqual([
      {
        b: {
          $ne: 'xx',
        },
      },
      {
        $or: [
          { x: { $ne: 'zzz' } },
          { z: { $ne: 'yyy' } },
          {
            $nor: [
              {
                $and: [
                  {
                    a: {
                      $eq: 'b',
                    },
                  },
                  { x: { $eq: 'x' } },
                  { z: { $eq: 'z' } },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });

  test('"$not" simple', () => {
    expect(
      parseMongoAttributeFilters({
        $not: {
          a: { $eq: 1 },
          $or: [{ o: { $gt: 1 } }],
        } as any,
      })
    ).toEqual([
      { $nor: [{ $and: [{ a: { $eq: 1 } }, { $or: [{ o: { $gt: 1 } }] }] }] },
    ]);
  });

  test('$not complex', () => {
    const sut = parseMongoAttributeFilters({
      b: { $ne: 'xx' },
      $not: {
        $or: [{ a: { $ne: 'a' } }],
        $and: [
          { x: { $ne: 'zzz' } },
          { z: { $ne: 'yyy' } },
          {
            bbb: {
              $between: [0, 1],
            },
          },
          {
            ccc: { $startsWith: 'c' },
          },
          {
            $not: { x: { $eq: 'z' } },
            $or: [{ a: { $eq: 1 } }],
          },
        ],
      },
    });

    expect(sut).toEqual([
      {
        b: { $ne: 'xx' },
      },
      {
        $nor: [
          {
            $and: [
              {
                $or: [{ a: { $ne: 'a' } }],
              },
              { x: { $ne: 'zzz' } },
              { z: { $ne: 'yyy' } },
              {
                bbb: {
                  $gte: 0,
                  $lte: 1,
                },
              },
              {
                ccc: { $regex: '^c' },
              },
              {
                $nor: [
                  {
                    $and: [
                      {
                        x: {
                          $eq: 'z',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                $or: [
                  {
                    a: {
                      $eq: 1,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});

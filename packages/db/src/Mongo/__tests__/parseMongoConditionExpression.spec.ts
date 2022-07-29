import { parseMongoConditionExpression } from '../parseMongoConditionExpression';

describe('parseMongoConditionExpression', () => {
  test('$lte', () => {
    expect(parseMongoConditionExpression({ a: { $lte: 1 } })).toEqual([{ a: { $lte: 1 } }]);
  });

  test('$lt', () => {
    expect(parseMongoConditionExpression({ a: { $lt: 1 } })).toEqual([{ a: { $lt: 1 } }]);
  });

  test('$gt', () => {
    expect(parseMongoConditionExpression({ a: { $gt: 1 } })).toEqual([{ a: { $gt: 1 } }]);
  });

  test('$gte', () => {
    expect(parseMongoConditionExpression({ a: { $gte: 1 } })).toEqual([{ a: { $gte: 1 } }]);
  });

  test('$between', () => {
    expect(parseMongoConditionExpression({ a: { $between: [100, 105] } })).toEqual([
      {
        a: {
          $gte: 100,
          $lte: 105,
        },
      },
    ]);
  });

  test('$exists', () => {
    expect(parseMongoConditionExpression({ a: { $exists: true } })).toEqual([
      { a: { $exists: true } },
    ]);
    expect(parseMongoConditionExpression({ a: { $exists: false } })).toEqual([
      { a: { $exists: false } },
    ]);
  });

  test('$type', () => {
    expect(
      parseMongoConditionExpression({
        a: { $type: 'Binary' },
      })
    ).toEqual([{ a: { $type: 'binData' } }]);
  });

  test('startsWith', () => {
    expect(
      parseMongoConditionExpression({
        a: { $startsWith: 'xx' },
      })
    ).toEqual([{ a: /^xx/ }]);
  });

  test('$contains', () => {
    expect(
      parseMongoConditionExpression({
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
      parseMongoConditionExpression({
        a: { $matchString: 'aa' },
      })
    ).toEqual([{ a: /aa/ }]);
  });

  test('$size (not supported)', () => {
    expect(() =>
      parseMongoConditionExpression({
        // @ts-ignore
        a: { $size: 1 },
      })
    ).toThrow('not supported attribute filter.');
  });

  test('$in', () => {
    expect(
      parseMongoConditionExpression({
        a: { $in: ['a'] },
      })
    ).toEqual([{ a: { $in: ['a'] } }]);
  });
  test('$eq', () => {
    expect(
      parseMongoConditionExpression({
        a: { $eq: 1 },
      })
    ).toEqual([{ a: { $eq: 1 } }]);
  });

  test('$ne', () => {
    expect(
      parseMongoConditionExpression({
        a: { $ne: 1 },
      })
    ).toEqual([{ a: { $ne: 1 } }]);
  });

  test('$and', () => {
    expect(
      parseMongoConditionExpression({
        b: { $ne: 'xx' },
        $and: [
          { x: { $ne: 'zzz' } },
          //
        ],
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
      parseMongoConditionExpression({
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
        ],
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
      parseMongoConditionExpression({
        $not: {
          a: { $eq: 1 },
          $or: [{ o: { $gt: 1 } }],
        },
      })
    ).toEqual([{ $nor: [{ $and: [{ a: { $eq: 1 } }, { $or: [{ o: { $gt: 1 } }] }] }] }]);
  });

  test('$not complex', () => {
    const sut = parseMongoConditionExpression({
      b: { $ne: 'xx' },
      $not: {
        // @ts-ignore fixme typing
        $or: [{ a: { $ne: 'a' } }],
        // @ts-ignore fixme typing
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
                ccc: /^c/,
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

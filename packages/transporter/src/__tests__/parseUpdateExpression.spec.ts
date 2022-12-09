import { parseUpdateExpression } from '../parseUpdateExpression';

describe('parseUpdateExpression', () => {
  it('works', async () => {
    const operations = parseUpdateExpression<any>(
      {
        $set: {
          set_a: '$set_a',
          set_b: '$set_b',
        },
        $setIfNull: {
          setIfNull_a: '$setIfNull_a',
          $setIfNull_b: '$setIfNull_b',
        },
        $remove: ['a', 'a.b.c.25'],
      },
      {
        entity: 'foo',
        indexes: [
          {
            name: '_id',
            PK: ['.foo'],
            SK: undefined,
          },
        ],
      }
    );

    expect(operations).toEqual([
      {
        entries: [
          ['set_a', '$set_a'],
          ['set_b', '$set_b'],
        ],
        operator: '$set',
        valueConstructorName: 'Object',
      },
      {
        entries: [
          ['setIfNull_a', '$setIfNull_a'],
          ['$setIfNull_b', '$setIfNull_b'],
        ],
        operator: '$setIfNull',
        valueConstructorName: 'Object',
      },
      {
        entries: [
          ['0', 'a'],
          ['1', 'a.b.c.25'],
        ],
        valueConstructorName: 'Array',
        operator: '$remove',
      },
    ]);
  });

  it('should break PK update on setters', () => {
    expect(() =>
      parseUpdateExpression(
        {
          $set: {
            username: 'antonio',
            age: 32,
          },
        },
        {
          entity: 'foo',
          indexes: [
            {
              SK: undefined,
              name: '_id',
              PK: ['#user', '.username'],
            },
          ],
        }
      )
    ).toThrow(`The field "username" cannot be updated as it is used in index.`);
  });

  it('should break PK update on $remove', () => {
    expect(() =>
      parseUpdateExpression(
        {
          $remove: ['username.foo.2'],
        },
        {
          entity: 'foo',
          indexes: [
            {
              name: '_id',
              PK: ['#user', '.username'],
              SK: undefined,
            },
          ],
        }
      )
    ).toThrow(`The field "username" cannot be updated as it is used in index.`);
  });

  it('should break SK update on $remove', () => {
    expect(() =>
      parseUpdateExpression(
        {
          $remove: ['email'],
        },
        {
          entity: 'foo',
          indexes: [
            {
              name: '_id',
              PK: ['#user', '.username'],
              SK: ['#user', '.email'],
            },
          ],
        }
      )
    ).toThrow(`The field "email" cannot be updated as it is used in index.`);
  });

  it('should handle deep array update', () => {
    expect(
      parseUpdateExpression(
        {
          $set: {
            'family.1.age': 21,
          },
        },
        {
          entity: 'foo',
          indexes: [
            {
              name: '_id',
              PK: ['#user', '.username'],
              SK: undefined,
            },
          ],
        }
      )
    ).toEqual([
      {
        entries: [['family.1.age', 21]],
        operator: '$set',
        valueConstructorName: 'Object',
      },
    ]);
  });

  it('should handle $each on deep array update', () => {
    expect(
      parseUpdateExpression(
        {
          $append: {
            items: { $each: [['a', 'b'], 1, 2] },
          },
        },
        {
          entity: 'foo',
          indexes: [
            {
              name: '_id',
              PK: ['#user', '.username'],
              SK: undefined,
            },
          ],
        }
      )
    ).toEqual([
      {
        entries: [
          [
            'items',
            {
              $each: [['a', 'b'], 1, 2],
            },
          ],
        ],
        operator: '$append',
        valueConstructorName: 'Object',
      },
    ]);
  });

  it('should $append number', () => {
    expect(
      parseUpdateExpression(
        {
          $append: {
            items: 1,
          },
        },
        {
          entity: 'foo',
          indexes: [
            {
              name: '_id',
              PK: ['#user', '.username'],
              SK: undefined,
            },
          ],
        }
      )
    ).toEqual([
      {
        entries: [['items', 1]],
        operator: '$append',
        valueConstructorName: 'Object',
      },
    ]);
  });
});

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
        $remove: ['a', 'a.b.c[25]'],
      },
      {
        entity: 'foo',
        indexes: [
          {
            field: '_id',
            PK: [],
            SK: [],
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
      },
      {
        entries: [
          ['setIfNull_a', '$setIfNull_a'],
          ['$setIfNull_b', '$setIfNull_b'],
        ],
        operator: '$setIfNull',
      },
      {
        removeOperations: [
          {
            path: 'a',
          },
          {
            index: 25,
            path: 'a.b.c',
          },
        ],
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
              field: '_id',
              PK: ['#user', '.username'],
              SK: [],
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
          $remove: ['username.foo[2]'],
        },
        {
          entity: 'foo',
          indexes: [
            {
              field: '_id',
              PK: ['#user', '.username'],
              SK: [],
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
              field: '_id',
              PK: ['#user', '.username'],
              SK: ['#user', '.email'],
            },
          ],
        }
      )
    ).toThrow(`The field "email" cannot be updated as it is used in index.`);
  });

  it('should break deep array update', () => {
    expect(() =>
      parseUpdateExpression(
        {
          $set: {
            'family[1].age': 21,
          },
        },
        {
          entity: 'foo',
          indexes: [
            {
              field: '_id',
              PK: ['#user', '.username'],
              SK: [],
            },
          ],
        }
      )
    ).toThrow(`Can't deep update with array index.`);

    expect(() =>
      parseUpdateExpression(
        {
          $remove: ['email[1].age'],
        },
        {
          entity: 'foo',
          indexes: [
            {
              field: '_id',
              PK: ['#user', '.username'],
              SK: [],
            },
          ],
        }
      )
    ).toThrow(`Can't deep update with array index.`);
  });
});

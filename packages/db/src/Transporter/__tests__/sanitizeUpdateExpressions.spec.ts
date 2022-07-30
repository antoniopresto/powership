import { sanitizeUpdateExpressions } from '../sanitizeUpdateExpressions';

// TODO more tests
describe('sanitizeUpdateExpressions', () => {
  it('works', async () => {
    const operations = sanitizeUpdateExpressions<any>(
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
        PK: [],
        SK: [],
      }
    );

    expect(operations).toEqual([
      {
        entries: [
          ['set_a', '$set_a'],
          ['set_b', '$set_b'],
        ],
        operation: {
          set_a: '$set_a',
          set_b: '$set_b',
        },
        operator: '$set',
      },
      {
        entries: [
          ['setIfNull_a', '$setIfNull_a'],
          ['$setIfNull_b', '$setIfNull_b'],
        ],
        operation: {
          $setIfNull_b: '$setIfNull_b',
          setIfNull_a: '$setIfNull_a',
        },
        operator: '$setIfNull',
      },
      {
        operations: [
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
      sanitizeUpdateExpressions(
        {
          $set: {
            username: 'antonio',
            age: 32,
          },
        },
        {
          PK: ['#user', '.username'],
          SK: [],
        }
      )
    ).toThrow(`Can't update field "username" - member of PK.`);
  });

  it('should break PK update on $remove', () => {
    expect(() =>
      sanitizeUpdateExpressions(
        {
          $remove: ['username.foo[2]'],
        },
        {
          PK: ['#user', '.username'],
          SK: [],
        }
      )
    ).toThrow(`Can't update field "username" - member of PK.`);
  });

  it('should break SK update on $remove', () => {
    expect(() =>
      sanitizeUpdateExpressions(
        {
          $remove: ['email'],
        },
        {
          PK: ['#user', '.username'],
          SK: ['#user', '.email'],
        }
      )
    ).toThrow(`Can't update field "email" - member of SK.`);
  });

  it('should break deep array update', () => {
    expect(() =>
      sanitizeUpdateExpressions(
        {
          $set: {
            'family[1].age': 21,
          },
        },
        {
          PK: ['#user', '.username'],
          SK: [],
        }
      )
    ).toThrow(`Can't deep update with array index.`);

    expect(() =>
      sanitizeUpdateExpressions(
        {
          $remove: ['email[1].age'],
        },
        {
          PK: ['#user', '.username'],
          SK: [],
        }
      )
    ).toThrow(`Can't deep update with array index.`);
  });
});

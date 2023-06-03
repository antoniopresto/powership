import { assert, IsExact } from 'conditional-type-checks';

import { createType } from '../../GraphType/GraphType';
import { createSchema, ObjectType } from '../../ObjectType/ObjectType';
import { objectToJSON } from '../../ObjectType/objectToJSON';

describe('AliasField', () => {
  afterEach(ObjectType.reset);

  it('works', async () => {
    const schema = createSchema({
      person: {
        union: [
          {
            object: {
              deep: {
                object: {
                  age: {
                    union: ['int', 'string', '[string]', '[int]'],
                  },
                },
              },
            },
          },
          {
            object: {
              deep: {
                object: {
                  age: {
                    union: ['boolean', '[boolean]'],
                  },
                },
              },
            },
          },
        ],
      },
      fn: { alias: 'person.deep.age' },
      fn2: {
        alias: {
          type: 'record?',
          aggregate: [
            { $pick: 'person.deep' },
            {
              $keyBy: 'age',
            },
          ],
        },
      },
    } as const);

    const value = schema.parse({ person: { deep: { age: 123 } } });

    assert<
      IsExact<
        typeof value,
        {
          person:
            | { deep: { age: number | string | string[] | number[] } }
            | { deep: { age: boolean | boolean[] } };
          fn: number | string | string[] | number[] | boolean | boolean[];
          fn2?: Record<string, any>;
        }
      >
    >(true);

    expect(value).toEqual({
      fn: 123,
      fn2: {
        '123': {
          age: 123,
        },
      },
      person: {
        deep: { age: 123 },
      },
    });
  });

  it('converts to json-schema', async () => {
    const schema = createSchema({
      person: {
        object: {
          age: 'int',
        },
      },
      aliased: { alias: 'person' },
      fn2: {
        alias: {
          type: 'record?',
          aggregate: [
            {
              $keyBy: 'person.age',
            },
          ],
        },
      },
    } as const);

    const json = await objectToJSON('Values', schema);

    expect(json).toEqual({
      additionalProperties: false,
      properties: {
        aliased: {
          additionalProperties: false,
          properties: {
            age: {
              type: 'integer',
            },
          },
          required: ['age'],
          title: '',
          type: 'object',
        },
        fn2: {
          type: 'object',
        },
        person: {
          additionalProperties: false,
          properties: {
            age: {
              type: 'integer',
            },
          },
          required: ['age'],
          title: '',
          type: 'object',
        },
      },
      required: ['person', 'aliased', 'fn2'],
      title: 'Values',
      type: 'object',
    });
  });

  it('converts to ts', async () => {
    const date = { a: 123 };

    const object = createType('Values', {
      object: {
        valid: {
          literal: { value: date },
        },
        aliased: { alias: 'valid' },
        fn2: {
          alias: {
            type: 'record?',
            aggregate: [
              {
                $keyBy: 'person.age',
              },
            ],
          },
        },
      },
    } as const);

    const ts = await object.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Values {',
      '  valid: {value: {a: 123}};',
      '  aliased: {value: {a: 123}};',
      '  fn2: {',
      '    [k: string]: unknown | undefined;',
      '  };',
      '}',
      '',
    ]);
  });

  it('converts to gql', async () => {
    const date = { a: 123 };

    const ts = createType('Value', {
      object: {
        valid: {
          description: `I'm a valid date`,
          literal: date,
        },
        aliased: {
          description: `I'm a clone ☺️`,
          alias: {
            type: 'date',
            aggregate: [
              {
                $pick: 'valid',
              },
            ],
          },
        },
      },
    } as const);

    const lines = ts.print();

    expect(lines).toEqual([
      'type Value {',
      '  """I\'m a valid date"""',
      '  valid: Value_valid!',
      '',
      '  """I\'m a clone ☺️"""',
      '  Value_aliased: Date!',
      '}',
      '',
      '"""',
      '"I\'m a valid date"',
      '"""',
      'scalar Value_valid',
      '',
      'scalar Date',
      '',
      'input ValueInput {',
      '  """I\'m a valid date"""',
      '  valid: Value_valid!',
      '',
      '  """I\'m a clone ☺️"""',
      '  Value_aliased: Date!',
      '}',
    ]);
  });

  it('converts to graphql', async () => {
    const date = { a: 123 };

    const gql = createType('Value', {
      object: {
        valid: {
          description: `I'm a valid date`,
          literal: date,
        },
        aliased: {
          description: `I'm a clone ☺️`,
          alias: {
            type: 'date',
            aggregate: [
              {
                $pick: 'valid',
              },
            ],
          },
        },
      },
    } as const).print();

    expect(gql).toEqual([
      'type Value {',
      '  """I\'m a valid date"""',
      '  valid: Value_valid!',
      '',
      '  """I\'m a clone ☺️"""',
      '  Value_aliased: Date!',
      '}',
      '',
      '"""',
      '"I\'m a valid date"',
      '"""',
      'scalar Value_valid',
      '',
      'scalar Date',
      '',
      'input ValueInput {',
      '  """I\'m a valid date"""',
      '  valid: Value_valid!',
      '',
      '  """I\'m a clone ☺️"""',
      '  Value_aliased: Date!',
      '}',
    ]);
  });

  test('delayed type', () => {
    const type = createType('custom', {
      description:
        'Register of a React Component of' +
        ' a Former Field to be saved in DB.',
      object: {
        _kind: {
          defaultValue: 'KIND123',
          literal: 'KIND123',
          optional: true,
        },
        oneList: {
          array: { of: { object: { name: 'string' } } },
          defaultValue: [{ name: 'Antonio' }],
        },
        aliased123: {
          alias: {
            type: { record: { type: 'any' } },
            aggregate: [{ $keyBy: 'oneList.name' }],
          },
          optional: true,
        },
      },
    });

    const sut = type.parse({});

    expect(sut).toEqual({
      _kind: 'KIND123',
      aliased123: {
        Antonio: {
          _kind: 'KIND123',
          oneList: [
            {
              name: 'Antonio',
            },
          ],
        },
      },
      oneList: [
        {
          name: 'Antonio',
        },
      ],
    });
  });
});

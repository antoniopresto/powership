import { assert, IsExact } from 'conditional-type-checks';

import { createType } from '../../GraphType/GraphType';
import { createSchema, ObjectType } from '../../ObjectType';
import { objectToJSON } from '../../objectToJSON';

describe('AliasField', () => {
  afterEach(ObjectType.reset);

  it('works', async () => {
    const schema = createSchema({
      person: {
        object: {
          age: 'int',
        },
      },
      fn: { alias: 'person.age' },
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

    const value = schema.parse({ person: { age: 123 } });

    assert<
      IsExact<
        typeof value,
        { person: { age: number }; fn: number; fn2?: Record<string, any> }
      >
    >(true);

    expect(value).toEqual({
      fn: 123,
      fn2: {
        '123': {
          person: {
            age: 123,
          },
        },
      },
      person: {
        age: 123,
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

  it('converts to typescript', async () => {
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

  it('converts to typescript', async () => {
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
    } as const).print();

    expect(ts).toEqual([
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
});

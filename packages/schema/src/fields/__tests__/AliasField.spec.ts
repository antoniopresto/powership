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
    } as const);

    const value = schema.parse({ person: { age: 123 } });

    assert<IsExact<typeof value, { person: { age: number }; fn: number }>>(
      true
    );

    expect(value).toEqual({
      fn: 123,
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
      required: ['person', 'aliased'],
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
      },
    } as const);

    const ts = await object.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Values {',
      '  valid: {value: {a: 123}};',
      '  aliased: {value: {a: 123}};',
      '}',
      '',
    ]);
  });

  it('converts to graphql', async () => {
    const date = { a: 123 };

    const ts = createType('Value', {
      object: {
        valid: {
          literal: date,
        },
        aliased: { alias: 'valid' },
      },
    } as const).print();

    expect(ts).toEqual([
      'type Value {',
      '  valid: Value_valid!',
      '  aliased: Value_valid!',
      '}',
      '',
      '"""',
      '"Literal value: {\\"a\\":123}"',
      '"""',
      'scalar Value_valid',
      '',
      'input ValueInput {',
      '  valid: Value_valid!',
      '  aliased: Value_valid!',
      '}',
    ]);
  });
});

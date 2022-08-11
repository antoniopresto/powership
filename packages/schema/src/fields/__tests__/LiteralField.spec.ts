import { assert, IsExact } from 'conditional-type-checks';
import { graphql } from 'graphql';

import { createType } from '../../GraphType/GraphType';
import { createResolver } from '../../GraphType/createResolver';
import { Infer } from '../../Infer';
import { createObjectType, ObjectType } from '../../ObjectType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { objectToJSON } from '../../objectToJSON';
import { LiteralField } from '../LitarealField';

describe('LiteralField', () => {
  afterEach(ObjectType.reset);

  it('works', async () => {
    const field = LiteralField.create({ a: 1 } as const);
    const parsed = field.parse({ a: 1 });
    assert<IsExact<typeof parsed, { a: 1 }>>(true);

    expect(() => {
      return field.parse({ a: 'x' });
    }).toThrow('Unexpected literal value:');

    type I1 = Infer<Readonly<{ literal: 1 }>>;
    assert<IsExact<I1, 1>>(true);

    type I01 = Infer<{ literal: 1 }>;
    assert<IsExact<I01, 1>>(true);

    type I2 = Infer<{ literal: {} }>;
    assert<IsExact<I2, {}>>(true);

    type I3 = Infer<{ literal: { a: 1 } }>;
    assert<IsExact<I3, { a: 1 }>>(true);

    type I4 = Infer<{ literal: { object: { a: 1 } } }>;
    assert<IsExact<I4, { object: { a: 1 } }>>(true);
  });

  it('works in object', async () => {
    const object = createObjectType({
      value: { literal: 7 },
    } as const);

    const parsed = object.parse({ value: 7 });
    assert<IsExact<typeof parsed, { value: 7 }>>(true);

    let err = [''];

    try {
      object.parse({ value: 2 });
    } catch (e: any) {
      err = e.message.split('\n');
    }

    expect(err).toEqual([
      '➤ field "value": Unexpected literal value:',
      'Expected:',
      '7',
      'Received:',
      '2.',
    ]);
  });

  it('converts to json-schema', async () => {
    const date = { a: 123 };

    const object = createObjectType('Values', {
      valid: {
        literal: { value: date },
      },
    } as const);

    const json = await objectToJSON('Values', object);

    expect(json).toEqual({
      additionalProperties: false,
      properties: {
        valid: {
          const: {
            value: {
              a: 123,
            },
          },
          tsType: '{"value":{"a":123}}',
        },
      },
      required: ['valid'],
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
      },
    } as const);

    const ts = await object.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Values {',
      '  valid: {value: {a: 123}};',
      '}',
      '',
    ]);
  });

  it('converts to graphql', async () => {
    const date = { a: 123 };

    createType('Value', {
      object: {
        valid: {
          literal: date,
        },
      },
    } as const).createResolver({
      name: 'findValues',
      args: {
        limit: 'int',
      },
      async resolve() {
        return LiteralField.utils.serialize({ valid: date }) as any;
      },
    });

    const schema = createGraphQLSchema();

    const gql = schema.utils.print();

    expect(gql.split('\n')).toEqual([
      'type Query {',
      '  findValues(limit: Int!): Value!',
      '}',
      '',
      'type Value {',
      '  valid: Value_valid!',
      '}',
      '',
      '"""',
      '"Literal value: {\\"a\\":123}"',
      '"""',
      'scalar Value_valid',
    ]);
  });

  it('serialize to graphql', async () => {
    const date = { a: 123 };

    createResolver({
      name: 'findValues',
      type: {
        object: {
          valid: {
            literal: date,
          },
        },
      },
      args: {
        limit: { literal: 1 } as const,
      },
      async resolve(_, args) {
        expect(args.limit).toBe(1);
        assert<IsExact<typeof args.limit, 1>>(true);

        return { valid: date };
      },
    });

    const schema = createGraphQLSchema();

    const result = await graphql({
      schema,
      source: `{ findValues(limit: 1) { valid }}`,
    });

    expect(result).toEqual({
      data: {
        findValues: {
          valid: date,
        },
      },
    });
  });

  it('parse Date', async () => {
    const literal = new Date(1);

    const object = createType('Values', {
      object: {
        valid: {
          literal: { value: literal },
        },
      },
    } as const);

    const ts = await object.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Values {',
      '  valid: {value: Date};',
      '}',
      '',
    ]);
  });

  it('parse object with Date', async () => {
    const literal = {
      date: new Date(1),
      regex: /abc/gim,
      num: [1, 2, 3, NaN],
      email: 'xica "bacana"',
    };

    const object = createType('Values', {
      object: {
        valid: {
          literal: { value: literal },
        },
      },
    } as const);

    const ts = await object.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Values {',
      '  valid: {value: {date: Date; email: \'xica "bacana"\'; num: [1, 2, 3, NaN]; regex: RegExp}};',
      '}',
      '',
    ]);
  });
});

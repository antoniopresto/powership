import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLSchema, printSchema } from 'graphql';

import {
  createObjectType,
  createType,
  parseObjectDefinition,
  parseObjectField,
  resetTypesCache,
} from '../types';

describe('ArrayField', () => {
  afterEach(resetTypesCache);
  afterAll(resetTypesCache);

  test('parseDefinition', () => {
    const parsed = parseObjectDefinition({
      names: {
        array: {
          of: 'string',
        },
      },
    });

    expect(parsed.definition).toEqual({
      __dschm__: expect.any(Object),
      names: {
        def: {
          of: 'string',
        },
        type: 'array',
      },
    });
  });

  test('get instance', () => {
    const parsed = parseObjectField(
      'my_field',
      {
        object: {
          names: {
            array: {
              of: 'string',
            },
          },
        },
      },
      {
        returnInstance: true,
      }
    );

    expect(parsed.asFinalFieldDef).toEqual({
      def: {
        __dschm__: expect.any(Object),
        names: {
          def: {
            of: 'string',
          },
          type: 'array',
        },
      },
      type: 'object',
    });
  });

  test('infers', () => {
    const user = { name: 'name' };

    const min1 = createType('a1', {
      array: {
        min: 1,
        of: {
          object: {
            name: 'string',
            addresses: {
              optional: true,
              array: {
                of: {
                  array: { of: { literal: 1 } },
                },
              },
            },
          },
        },
      },
    } as const);

    const res = min1.parse([user]);

    assert<
      IsExact<typeof res, { name: string; addresses?: 1[][] | undefined }[]>
    >(true);
  });

  it('parse', async () => {
    const user = { name: 'name' };

    const min1 = createType('a1', {
      array: {
        min: 1,
        of: {
          object: {
            name: 'string',
            addresses: {
              optional: true,
              array: {
                of: {
                  array: { of: { literal: 1 } },
                },
              },
            },
          },
        },
      },
    } as const);

    const max3 = createType('a2', {
      array: {
        max: 3,
        of: {
          object: {
            name: 'string',
          },
        },
      },
    });

    const exact2 = createType('a3', {
      array: {
        length: 2,
        of: {
          object: {
            name: 'string',
          },
        },
      },
    });

    expect(() => min1.parse({})).toThrow(
      '➤ a1 UnexpectedType: expected Array, found Object'
    );

    min1.parse([user]);
    expect(() => min1.parse([])).toThrow(
      '➤ a1 MinSize: expected min 1, found: 0.'
    );

    max3.parse([user, user, user]);
    expect(() => max3.parse([user, user, user, user])).toThrow(
      '➤ a2 MaxSize: expected max 3, found: 4.'
    );

    exact2.parse([user, user]);
    expect(() => exact2.parse([])).toThrow(
      '➤ a3 SizeMismatch: expected length 2, found 0.'
    );
  });

  test('gql', async () => {
    const plain_array = createType('plain_array', {
      array: {
        min: 1,
        of: {
          object: {
            name: 'string',
            arrayOfString: {
              optional: true,
              array: {
                of: {
                  string: {},
                },
              },
            },
          },
        },
      },
    } as const);

    const schemaTypeGql = createObjectType('mySchemaType', {
      child: plain_array,
    }).graphqlType(); // created because print ignores array (prints only the inner type)

    const gqlSchema = new GraphQLSchema({
      types: [schemaTypeGql],
    });

    const gql = printSchema(gqlSchema);
    const gqlString = gql.split('\n');

    expect(gqlString).toEqual([
      'type mySchemaType {',
      '  child: [mySchemaType_child!]!',
      '}',
      '',
      'type mySchemaType_child {',
      '  name: String!',
      '  arrayOfString: [String!]',
      '}',
    ]);
  });

  test('ts', async () => {
    const plain_array = createType('plain_array', {
      array: {
        min: 1,
        of: {
          object: {
            name: 'string',
            arrayOfString: {
              optional: true,
              array: {
                of: {
                  string: {},
                },
              },
            },
          },
        },
      },
    } as const);

    const ts = await createObjectType('mySchemaType', {
      child: plain_array,
    }).typescriptPrint(); // created because print ignores array (prints only the inner type)

    expect(ts.split('\n')).toEqual([
      'export interface MySchemaType {',
      '  child: {',
      '    name: string;',
      '    arrayOfString?: string[];',
      '  }[];',
      '}',
      '',
    ]);
  });
});

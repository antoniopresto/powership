import { createType } from '../../GraphType/GraphType';
import { createSchema, ObjectType } from '../../ObjectType/ObjectType';

describe('SelfReferenceField', () => {
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
      listCircular: { self: {}, list: true },
      optionalCircular: {
        self: {},
        optional: true,
      },
    } as const);

    const person = { deep: { age: 123 } };
    const input = {
      person,
      listCircular: [{ person }],
    };
    const value = schema.parse(input);

    interface DeepSelf {
      person:
        | { deep: { age: number | string | string[] | number[] } }
        | { deep: { age: boolean | boolean[] } };
      listCircular: any;
      optionalCircular: any;
    }

    interface Self {
      person:
        | { deep: { age: number | string | string[] | number[] } }
        | { deep: { age: boolean | boolean[] } };
      listCircular: DeepSelf[];
      optionalCircular?: DeepSelf;
    }

    const x: Self = value;

    // @ts-expect-error
    expect(x.listCircular[0].person.INVALID).toBe(undefined);

    expect(x.listCircular[0].person.deep).toEqual(person.deep); // checking type

    expect(x).toEqual(input);
  });

  it('converts to typescript', async () => {
    const schema = createSchema('Circular', {
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
      listCircular: { self: {}, list: true },
      optionalCircular: {
        self: {},
        optional: true,
      },
    } as const);

    const ts = await schema.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export type Circular = Circular1;',
      '',
      'export interface Circular1 {',
      '  person:',
      '    | {',
      '        deep: {',
      '          age: number | string | string[] | number[];',
      '        };',
      '      }',
      '    | {',
      '        deep: {',
      '          age: boolean | boolean[];',
      '        };',
      '      };',
      '  listCircular: Circular2[];',
      '  optionalCircular?: Circular2;',
      '}',
      'export interface Circular2 {',
      '  person:',
      '    | {',
      '        deep: {',
      '          age: number | string | string[] | number[];',
      '        };',
      '      }',
      '    | {',
      '        deep: {',
      '          age: boolean | boolean[];',
      '        };',
      '      };',
      '  listCircular: Circular2[];',
      '  optionalCircular?: Circular2;',
      '}',
      '',
    ]);
  });

  it('converts to graphql', async () => {
    const schema = createSchema('Circular', {
      name: 'string',
      optionalCircular: {
        self: {},
        optional: true,
      },
    } as const);

    const gql = schema.graphqlPrint();
    const gqlInput = schema.toGraphQL().inputToString();

    expect(gql.split('\n')).toEqual([
      'type Circular {',
      '  optionalCircular: Circular',
      '  name: String!',
      '}',
    ]);

    expect(gqlInput.split('\n')).toEqual([
      'input CircularInput {',
      '  optionalCircular: CircularInput',
      '  name: String!',
      '}',
    ]);
  });

  test('delayed type', () => {
    const type = createType('Person', {
      object: {
        name: 'string',
        mother: {
          self: {},
          optional: true,
        },
      },
    });

    expect(() => type.parse({ mother: {} })).toThrow(
      '➤ field "mother": Person: ➤ field "name": RequiredField'
    );

    const sut = type.parse({ name: 'Name', mother: { name: 'Mother' } });

    expect(sut).toEqual({
      mother: {
        name: 'Mother',
      },
      name: 'Name',
    });
  });
});

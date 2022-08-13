import { ObjectType } from '../ObjectType';
import { EnumField } from '../fields/EnumField';
import { parseObjectDefinition } from '../parseObjectDefinition';

describe('parseObjectDefinition', () => {
  it('works', () => {
    const { definition: sut } = parseObjectDefinition({
      objectIntDef: {
        type: 'int',
      },
      string: 'string',
      stringOptional: 'string?',
      arrayString: '[string]',
      arrayStringOptional: '[string]?',
      enum: { enum: ['a', 'b'] },
      fieldType: EnumField.create(['a', 'x']),
      fieldTypeOptional: EnumField.create(['a', 'x']).toOptional(),
      fieldTypeOptionalList: EnumField.create(['a', 'x']).toList().toOptional(),
      objectAsFlattenDef: {
        object: {
          name: 'string',
        },
      },
      unionAsFlattenDef: {
        union: ['string', 'int?'],
      },
    });

    expect(sut).toEqual({
      __dschm__: {
        def: {
          id: null,
        },
        list: false,
        optional: false,
        type: 'meta',
      },
      arrayString: {
        list: true,
        optional: false,
        type: 'string',
      },
      arrayStringOptional: {
        list: true,
        optional: true,
        type: 'string',
      },
      enum: {
        def: ['a', 'b'],
        list: false,
        optional: false,
        type: 'enum',
      },
      fieldType: {
        def: ['a', 'x'],
        list: false,
        optional: false,
        type: 'enum',
      },
      fieldTypeOptional: {
        def: ['a', 'x'],
        list: false,
        optional: true,
        type: 'enum',
      },
      fieldTypeOptionalList: {
        def: ['a', 'x'],
        list: true,
        optional: true,
        type: 'enum',
      },
      objectAsFlattenDef: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          name: {
            list: false,
            optional: false,
            type: 'string',
          },
        },
        list: false,
        optional: false,
        type: 'object',
      },
      objectIntDef: {
        type: 'int',
      },
      string: {
        list: false,
        optional: false,
        type: 'string',
      },
      stringOptional: {
        list: false,
        optional: true,
        type: 'string',
      },
      unionAsFlattenDef: {
        def: [
          {
            list: false,
            optional: false,
            type: 'string',
          },
          {
            list: false,
            optional: true,
            type: 'int',
          },
        ],
        list: false,
        optional: true,
        type: 'union',
      },
    });
  });

  it('parse object', () => {
    const otherObject = new ObjectType({
      foo: 'string',
      status: { enum: ['open', 'closed'] },
    } as const);

    const sass = {
      union: { union: [{ object: { points: '[float]?' } }, 'int'] },
      names: '[string]?',
      age: 'int',
    } as const;

    const { definition: sut } = parseObjectDefinition({
      name: 'string',
      object: otherObject,
      objectList: {
        type: 'object',
        def: otherObject.definition,
        list: true,
      },
      objectAsTypeList: {
        object: otherObject,
        list: true,
      },
      objectAsObject: {
        object: sass,
      },
      objectAsObjectList: {
        object: sass,
        list: true,
      },
      objectAsObjectListOptional: {
        object: sass,
        list: true,
        optional: true,
      },
    });

    expect(sut).toEqual({
      __dschm__: {
        def: {
          id: null,
        },
        list: false,
        optional: false,
        type: 'meta',
      },
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
      object: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          foo: {
            list: false,
            optional: false,
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],
            list: false,
            optional: false,
            type: 'enum',
          },
        },
        list: false,
        optional: false,
        type: 'object',
      },
      objectAsObject: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          age: {
            list: false,
            optional: false,
            type: 'int',
          },
          names: {
            list: true,
            optional: true,
            type: 'string',
          },
          union: {
            def: [
              {
                def: {
                  __dschm__: {
                    def: {
                      id: null,
                    },
                    list: false,
                    optional: false,
                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },
                list: false,
                optional: false,
                type: 'object',
              },
              {
                list: false,
                optional: false,
                type: 'int',
              },
            ],
            list: false,
            optional: false,
            type: 'union',
          },
        },
        list: false,
        optional: false,
        type: 'object',
      },
      objectAsObjectList: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          age: {
            list: false,
            optional: false,
            type: 'int',
          },
          names: {
            list: true,
            optional: true,
            type: 'string',
          },
          union: {
            def: [
              {
                def: {
                  __dschm__: {
                    def: {
                      id: null,
                    },
                    list: false,
                    optional: false,
                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },
                list: false,
                optional: false,
                type: 'object',
              },
              {
                list: false,
                optional: false,
                type: 'int',
              },
            ],
            list: false,
            optional: false,
            type: 'union',
          },
        },
        list: true,
        optional: false,
        type: 'object',
      },
      objectAsObjectListOptional: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          age: {
            list: false,
            optional: false,
            type: 'int',
          },
          names: {
            list: true,
            optional: true,
            type: 'string',
          },
          union: {
            def: [
              {
                def: {
                  __dschm__: {
                    def: {
                      id: null,
                    },
                    list: false,
                    optional: false,
                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },
                list: false,
                optional: false,
                type: 'object',
              },
              {
                list: false,
                optional: false,
                type: 'int',
              },
            ],
            list: false,
            optional: false,
            type: 'union',
          },
        },
        list: true,
        optional: true,
        type: 'object',
      },
      objectAsTypeList: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          foo: {
            list: false,
            optional: false,
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],
            list: false,
            optional: false,
            type: 'enum',
          },
        },
        list: true,
        optional: false,
        type: 'object',
      },
      objectList: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },
            list: false,
            optional: false,
            type: 'meta',
          },
          foo: {
            list: false,
            optional: false,
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],
            list: false,
            optional: false,
            type: 'enum',
          },
        },
        list: true,
        type: 'object',
      },
    });
  });
});

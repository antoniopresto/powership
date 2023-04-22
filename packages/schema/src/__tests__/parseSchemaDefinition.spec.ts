import { objectMetaFieldKey } from '../fields/MetaFieldField';
import { ObjectType } from '../ObjectType';
import { EnumField } from '../fields/EnumField';
import { parseObjectDefinition } from '../parseObjectDefinition';

describe('parseObjectDefinition', () => {
  it('works', () => {
    const { definition: sut, custom } = parseObjectDefinition({
      objectIntDef: {
        type: 'int',
      },
      string: 'string',
      stringOptional: 'string?',
      arrayString: '[string]',
      arrayStringOptional: '[string]?',
      enum: {
        enum: ['a', 'b'],
      },
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
      $: {
        persist: true,
      },
    });

    expect(custom).toEqual({ persist: true });

    expect(sut).toEqual({
      __dschm__: {
        def: {
          custom: {
            persist: true,
          },
          id: null,
        },
        type: 'meta',
      },
      arrayString: {
        list: true,
        type: 'string',
      },
      arrayStringOptional: {
        list: true,
        optional: true,
        type: 'string',
      },
      enum: {
        def: ['a', 'b'],
        type: 'enum',
      },
      fieldType: {
        def: ['a', 'x'],
        type: 'enum',
      },
      fieldTypeOptional: {
        def: ['a', 'x'],
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
            type: 'meta',
          },
          name: {
            type: 'string',
          },
        },
        type: 'object',
      },
      objectIntDef: {
        type: 'int',
      },
      string: {
        type: 'string',
      },
      stringOptional: {
        optional: true,
        type: 'string',
      },
      unionAsFlattenDef: {
        def: [
          {
            type: 'string',
          },
          {
            optional: true,
            type: 'int',
          },
        ],
        optional: true,
        type: 'union',
      },
    });
  });

  it('parse object', () => {
    const otherObject = new ObjectType({
      foo: 'string',
      status: {
        enum: ['open', 'closed'],
      },
      $: { persist: true },
    } as const);

    expect(otherObject.definition[objectMetaFieldKey]).toEqual({
      def: {
        custom: {
          persist: true,
        },
        id: null,
      },
      type: 'meta',
    });

    const sass = {
      union: {
        union: [{ object: { points: '[float]?' } }, 'int'],
      },
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

        type: 'meta',
      },
      name: {
        type: 'string',
      },
      object: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },

            type: 'meta',
          },
          foo: {
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],

            type: 'enum',
          },
        },

        type: 'object',
      },
      objectAsObject: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },

            type: 'meta',
          },
          age: {
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

                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },

                type: 'object',
              },
              {
                type: 'int',
              },
            ],

            type: 'union',
          },
        },

        type: 'object',
      },
      objectAsObjectList: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },

            type: 'meta',
          },
          age: {
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

                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },

                type: 'object',
              },
              {
                type: 'int',
              },
            ],

            type: 'union',
          },
        },
        list: true,

        type: 'object',
      },
      objectAsObjectListOptional: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },

            type: 'meta',
          },
          age: {
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

                    type: 'meta',
                  },
                  points: {
                    list: true,
                    optional: true,
                    type: 'float',
                  },
                },

                type: 'object',
              },
              {
                type: 'int',
              },
            ],

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

            type: 'meta',
          },
          foo: {
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],

            type: 'enum',
          },
        },
        list: true,

        type: 'object',
      },
      objectList: {
        def: {
          __dschm__: {
            def: {
              id: null,
            },

            type: 'meta',
          },
          foo: {
            type: 'string',
          },
          status: {
            def: ['open', 'closed'],

            type: 'enum',
          },
        },
        list: true,
        type: 'object',
      },
    });
  });
});

import { createObjectType } from '../ObjectType/ObjectType';
import { EnumField } from '../fields/EnumField';
import { objectMetaFieldKey } from '../fields/MetaFieldField';
import { SchemaParser } from '../ObjectType/SchemaParser';

import { objectMocks } from './__mock__';

const { typeDefs, stringDefTypes, object2 } = objectMocks;

describe('parseObjectField', () => {
  test('parseFlattenFieldDefinition', () => {
    expect(
      SchemaParser.createInstance({
        object: {
          name: 'string',
        },
      }).definition
    ).toEqual({
      def: {
        name: {
          type: 'string',
        },
        [objectMetaFieldKey]: expect.anything(),
      },
      type: 'object',
    });

    expect(
      SchemaParser.createInstance({
        string: {
          min: 1,
        },
        list: true,
        optional: true,
      }).definition
    ).toEqual({
      def: {
        min: 1,
      },

      list: true,
      optional: true,
      type: 'string',
    });
  });

  test('enumStringArray', () => {
    const sut = SchemaParser.parseDefinition({
      enum: ['a', 'b', 'c'],
    } as const);

    expect(sut).toEqual({
      type: 'enum',

      def: ['a', 'b', 'c'],
    });
  });

  test('enum FieldType', () => {
    const single = SchemaParser.parseDefinition(EnumField.create(['a', 'b']));
    const list = SchemaParser.parseDefinition(
      EnumField.create(['a', 'b']).toList()
    );
    const listOptional = SchemaParser.parseDefinition(
      EnumField.create(['a', 'b']).toList().toOptional()
    );

    expect(single).toEqual({
      type: 'enum',

      def: ['a', 'b'],
    });

    expect(list).toEqual({
      type: 'enum',

      list: true,
      def: ['a', 'b'],
    });

    expect(listOptional).toEqual({
      type: 'enum',
      optional: true,
      list: true,
      def: ['a', 'b'],
    });
  });

  test('objectTypeName', () => {
    const sut = SchemaParser.parseDefinition({
      type: 'object',
      def: object2['definition'],
    });

    expect(sut).toEqual({
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
        sub: {
          def: {
            __dschm__: {
              def: {
                id: null,
              },

              type: 'meta',
            },
            age: {
              optional: true,
              type: 'int',
            },
            favorites: {
              list: true,

              type: 'string',
            },
            name: {
              type: 'string',
            },
            sex: {
              def: ['m', 'f', 'o'],

              type: 'enum',
            },
          },

          type: 'object',
        },
      },
      type: 'object',
    });

    expect(
      SchemaParser.parseDefinition({
        type: 'object',
        def: object2['definition'],
        list: true,
      })
    ).toHaveProperty('list', true);

    expect(
      SchemaParser.parseDefinition({
        type: 'object',
        def: object2['definition'],
        optional: true,
      })
    ).toHaveProperty('optional', true);
  });

  test('objectObjectAsType', () => {
    const sut = SchemaParser.parseDefinition(
      typeDefs.objectObjectAsType // deprecated
    );

    expect(sut).toEqual({
      list: true,
      optional: true,
      type: 'object',
      def: {
        [objectMetaFieldKey]: expect.anything(),
        name: {
          type: 'string',
        },
        sub: {
          type: 'object',

          def: {
            [objectMetaFieldKey]: expect.anything(),
            name: {
              type: 'string',
            },
            age: {
              optional: true,
              type: 'int',
            },
            favorites: {
              list: true,

              type: 'string',
            },
            sex: {
              def: ['m', 'f', 'o'],

              type: 'enum',
            },
          },
        },
      },
    });
  });

  test('stringFieldDefinition', () => {
    const sut = SchemaParser.parseDefinition(typeDefs.stringFieldDefinition);

    expect(sut).toEqual({
      type: 'cursor',
      optional: true,
      list: true,
    });
  });

  test('FieldType as def', () => {
    const sut = SchemaParser.parseDefinition(typeDefs.fieldDefAsType);

    expect(sut).toEqual({
      list: true,
      optional: true,
      type: 'string',
      def: {
        max: 2,
        min: 1,
      },
    });
  });

  test('stringDefTypes', () => {
    const sut = SchemaParser.parseDefinition(createObjectType(stringDefTypes));

    expect(sut).toEqual({
      type: 'object',

      def: {
        [objectMetaFieldKey]: expect.anything(),
        stringDefBoolean: {
          type: 'boolean',
        },
        stringDefBooleanList: {
          list: true,

          type: 'boolean',
        },
        stringDefBooleanListOptional: {
          list: true,
          optional: true,
          type: 'boolean',
        },
        stringDefCursor: {
          type: 'cursor',
        },
        stringDefCursorList: {
          list: true,

          type: 'cursor',
        },
        stringDefCursorListOptional: {
          list: true,
          optional: true,
          type: 'cursor',
        },
        stringDefDate: {
          type: 'date',
        },
        stringDefDateList: {
          list: true,

          type: 'date',
        },
        stringDefDateListOptional: {
          list: true,
          optional: true,
          type: 'date',
        },
        stringDefEmail: {
          type: 'email',
        },
        stringDefEmailList: {
          list: true,

          type: 'email',
        },
        stringDefEmailListOptional: {
          list: true,
          optional: true,
          type: 'email',
        },
        stringDefFloat: {
          type: 'float',
        },
        stringDefFloatList: {
          list: true,

          type: 'float',
        },
        stringDefFloatListOptional: {
          list: true,
          optional: true,
          type: 'float',
        },
        stringDefInt: {
          type: 'int',
        },
        stringDefIntList: {
          list: true,

          type: 'int',
        },
        stringDefIntListOptional: {
          list: true,
          optional: true,
          type: 'int',
        },
        stringDefString: {
          type: 'string',
        },
        stringDefStringList: {
          list: true,

          type: 'string',
        },
        stringDefStringListOptional: {
          list: true,
          optional: true,
          type: 'string',
        },
        stringDefUlid: {
          type: 'ulid',
        },
        stringDefUlidList: {
          list: true,

          type: 'ulid',
        },
        stringDefUlidListOptional: {
          list: true,
          optional: true,
          type: 'ulid',
        },
        stringDefUnknown: {
          type: 'unknown',
        },
        stringDefUnknownList: {
          list: true,

          type: 'unknown',
        },
        stringDefUnknownListOptional: {
          list: true,
          optional: true,
          type: 'unknown',
        },
      },
    });
  });

  describe('handle default values', () => {
    test('in fields', () => {
      const field: any = SchemaParser.createInstance({
        int: {},
        defaultValue: 123,
      });

      expect(field.parse(undefined)).toEqual(123);
    });

    test('on objects', () => {
      const field: any = SchemaParser.createInstance({
        object: {
          age: {
            int: {},
            defaultValue: 123,
          },
          name: {
            string: {},
            defaultValue: 1,
          },
        },
      });

      expect(field.parse({ name: 'a' })).toEqual({ name: 'a', age: 123 });
    });
  });
});

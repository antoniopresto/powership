import { createObjectType } from '../ObjectType';
import { EnumField } from '../fields/EnumField';
import { objectMetaFieldKey } from '../fields/MetaFieldField';
import {
  parseFlattenFieldDefinition,
  parseObjectField,
} from '../parseObjectDefinition';

import { objectMocks } from './__mock__';

const { typeDefs, stringDefTypes, object2 } = objectMocks;

describe('parseObjectField', () => {
  test('parseFlattenFieldDefinition', () => {
    expect(parseFlattenFieldDefinition(EnumField.create(['a', 'b']))).toEqual(
      false
    );
    expect(parseFlattenFieldDefinition('string')).toEqual(false);
    expect(parseFlattenFieldDefinition({ type: 'string' })).toEqual(false);
    expect(
      parseFlattenFieldDefinition({
        gender: {
          type: 'enum',
          def: ['male', 'female', 'other'],
          optional: true,
        },
      })
    ).toEqual(false);

    expect(
      parseFlattenFieldDefinition({
        object: {
          name: 'string',
        },
      })
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
      parseFlattenFieldDefinition({
        string: {
          min: 1,
        },
        list: true,
        optional: true,
      })
    ).toEqual({
      def: {
        min: 1,
      },

      list: true,
      optional: true,
      type: 'string',
    });

    expect(
      parseFlattenFieldDefinition({
        string: {
          min: 1,
        },
        description: true, // <-- invalid
      })
    ).toEqual(false);

    const spyWarn = jest.spyOn(console, 'warn');
    expect(spyWarn).toBeCalledTimes(0);
    expect(
      parseFlattenFieldDefinition({
        string: {
          type: 'enum',
          def: ['male', 'female', 'other'],
          optional: true,
        },
      })
    ).toEqual(false);
    expect(spyWarn).toBeCalledTimes(1);
  });

  test('enumStringArray', () => {
    const sut = parseObjectField('enumStringArray', {
      enum: ['a', 'b', 'c'],
    } as const);

    expect(sut).toEqual({
      type: 'enum',

      def: ['a', 'b', 'c'],
    });
  });

  test('enum FieldType', () => {
    const single = parseObjectField(
      'enum FieldType',
      EnumField.create(['a', 'b'])
    );
    const list = parseObjectField(
      'enum FieldType',
      EnumField.create(['a', 'b']).toList()
    );
    const listOptional = parseObjectField(
      'enum FieldType',
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
    const sut = parseObjectField('objectTypeName', {
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
      parseObjectField('objectTypeName', {
        type: 'object',
        def: object2['definition'],
        list: true,
      })
    ).toHaveProperty('list', true);

    expect(
      parseObjectField('objectTypeName', {
        type: 'object',
        def: object2['definition'],
        optional: true,
      })
    ).toHaveProperty('optional', true);
  });

  test('objectObjectAsType', () => {
    const sut = parseObjectField(
      'objectObjectAsType',
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
    const sut = parseObjectField(
      'stringFieldDefinition',
      typeDefs.stringFieldDefinition
    );

    expect(sut).toEqual({
      type: 'cursor',
      optional: true,
      list: true,
    });
  });

  test('FieldType as def', () => {
    const sut = parseObjectField('FieldType', typeDefs.fieldDefAsType);

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
    const sut = parseObjectField(
      'stringDefTypes',
      createObjectType(stringDefTypes)
    );

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
      const field = parseObjectField(
        'Defaulting',
        {
          int: {},
          defaultValue: 123,
        },
        { returnInstance: true }
      );

      expect(field.parse(undefined)).toEqual(123);
    });

    test('on objects', () => {
      const field = parseObjectField(
        'Defaulting',
        {
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
        },
        { returnInstance: true }
      );

      expect(field.parse({ name: 'a' })).toEqual({ name: 'a', age: 123 });
    });
  });
});

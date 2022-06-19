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
          list: false,
          optional: false,
          type: 'string',
        },
        [objectMetaFieldKey]: expect.anything(),
      },
      description: undefined,
      list: false,
      optional: false,
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
      description: undefined,
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
      optional: false,
      list: false,
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
      optional: false,
      list: false,
      def: ['a', 'b'],
    });

    expect(list).toEqual({
      type: 'enum',
      optional: false,
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
      list: false,
      optional: false,
      type: 'object',
      def: {
        [objectMetaFieldKey]: expect.anything(),
        name: {
          list: false,
          optional: false,
          type: 'string',
        },
        sub: {
          list: false,
          optional: false,
          type: 'object',

          def: {
            [objectMetaFieldKey]: expect.anything(),
            name: {
              list: false,
              optional: false,
              type: 'string',
            },
            age: {
              list: false,
              optional: true,
              type: 'int',
            },
            favorites: {
              list: true,
              optional: false,
              type: 'string',
            },
            sex: {
              def: ['m', 'f', 'o'],
              list: false,
              optional: false,
              type: 'enum',
            },
          },
        },
      },
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
          list: false,
          optional: false,
          type: 'string',
        },
        sub: {
          list: false,
          optional: false,
          type: 'object',

          def: {
            [objectMetaFieldKey]: expect.anything(),
            name: {
              list: false,
              optional: false,
              type: 'string',
            },
            age: {
              list: false,
              optional: true,
              type: 'int',
            },
            favorites: {
              list: true,
              optional: false,
              type: 'string',
            },
            sex: {
              def: ['m', 'f', 'o'],
              list: false,
              optional: false,
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
      list: false,
      optional: false,
      def: {
        [objectMetaFieldKey]: expect.anything(),
        stringDefBoolean: {
          list: false,
          optional: false,
          type: 'boolean',
        },
        stringDefBooleanList: {
          list: true,
          optional: false,
          type: 'boolean',
        },
        stringDefBooleanListOptional: {
          list: true,
          optional: true,
          type: 'boolean',
        },
        stringDefCursor: {
          list: false,
          optional: false,
          type: 'cursor',
        },
        stringDefCursorList: {
          list: true,
          optional: false,
          type: 'cursor',
        },
        stringDefCursorListOptional: {
          list: true,
          optional: true,
          type: 'cursor',
        },
        stringDefDate: {
          list: false,
          optional: false,
          type: 'date',
        },
        stringDefDateList: {
          list: true,
          optional: false,
          type: 'date',
        },
        stringDefDateListOptional: {
          list: true,
          optional: true,
          type: 'date',
        },
        stringDefEmail: {
          list: false,
          optional: false,
          type: 'email',
        },
        stringDefEmailList: {
          list: true,
          optional: false,
          type: 'email',
        },
        stringDefEmailListOptional: {
          list: true,
          optional: true,
          type: 'email',
        },
        stringDefFloat: {
          list: false,
          optional: false,
          type: 'float',
        },
        stringDefFloatList: {
          list: true,
          optional: false,
          type: 'float',
        },
        stringDefFloatListOptional: {
          list: true,
          optional: true,
          type: 'float',
        },
        stringDefInt: {
          list: false,
          optional: false,
          type: 'int',
        },
        stringDefIntList: {
          list: true,
          optional: false,
          type: 'int',
        },
        stringDefIntListOptional: {
          list: true,
          optional: true,
          type: 'int',
        },
        stringDefString: {
          list: false,
          optional: false,
          type: 'string',
        },
        stringDefStringList: {
          list: true,
          optional: false,
          type: 'string',
        },
        stringDefStringListOptional: {
          list: true,
          optional: true,
          type: 'string',
        },
        stringDefUlid: {
          list: false,
          optional: false,
          type: 'ulid',
        },
        stringDefUlidList: {
          list: true,
          optional: false,
          type: 'ulid',
        },
        stringDefUlidListOptional: {
          list: true,
          optional: true,
          type: 'ulid',
        },
        stringDefUnknown: {
          list: false,
          optional: false,
          type: 'unknown',
        },
        stringDefUnknownList: {
          list: true,
          optional: false,
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
        true
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
        true
      );

      expect(field.parse({ name: 'a' })).toEqual({ name: 'a', age: 123 });
    });
  });
});

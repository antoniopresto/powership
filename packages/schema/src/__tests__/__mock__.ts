import { createObjectType } from '../ObjectType';
import { StringField } from '../fields/StringField';

const object1 = createObjectType({
  name: 'string',
  age: 'int?',
  favorites: '[string]',
  sex: { enum: ['m', 'f', 'o'] },
} as const);

const object2 = createObjectType({
  name: 'string',
  sub: object1,
});

const stringDefTypes = {
  stringDefBoolean: 'boolean',
  stringDefBooleanList: '[boolean]',
  stringDefBooleanListOptional: '[boolean]?',
  stringDefCursor: 'cursor',
  stringDefCursorList: '[cursor]',
  stringDefCursorListOptional: '[cursor]?',
  stringDefDate: 'date',
  stringDefDateList: '[date]',
  stringDefDateListOptional: '[date]?',
  stringDefEmail: 'email',
  stringDefEmailList: '[email]',
  stringDefEmailListOptional: '[email]?',
  stringDefFloat: 'float',
  stringDefFloatList: '[float]',
  stringDefFloatListOptional: '[float]?',
  stringDefInt: 'int',
  stringDefIntList: '[int]',
  stringDefIntListOptional: '[int]?',
  stringDefString: 'string',
  stringDefStringList: '[string]',
  stringDefStringListOptional: '[string]?',
  stringDefUlid: 'ulid',
  stringDefUlidList: '[ulid]',
  stringDefUlidListOptional: '[ulid]?',
  stringDefUnknown: 'unknown',
  stringDefUnknownList: '[unknown]',
  stringDefUnknownListOptional: '[unknown]?',
} as const;

const typeDefs = {
  enumStringArray: ['a', 'b', 'c'],
  objectTypeName: {
    type: 'object',
    def: object2['definition'],
  },

  /**
   * @deprecated
   */
  objectObjectAsType: {
    type: object2,
    optional: true,
    list: true,
  } as any,

  stringFieldDefinition: {
    type: 'cursor',
    list: true,
    optional: true,
  },
  fieldDefAsType: StringField.create({ min: 1, max: 2 }).toList().toOptional(),
  ...stringDefTypes,
} as const;

export const objectMocks = {
  object1,
  object2,
  stringDefTypes,
  typeDefs,
};

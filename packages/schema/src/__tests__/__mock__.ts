import { tuple } from '@powership/utils';

import { createObjectType, createType, StringField } from '../types';

const object1 = createObjectType({
  age: 'int?',
  favorites: '[string]',
  name: 'string',
  sex: {
    enum: ['m', 'f', 'o'],
  },
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
  fieldDefAsType: StringField.create({ max: 2, min: 1 }).toList().toOptional(),

  objectObjectAsType: {
    list: true,
    optional: true,
    type: object2,
  } as any,

  objectTypeName: {
    def: object2['definition'],
    type: 'object',
  },
  stringFieldDefinition: {
    list: true,
    optional: true,
    type: 'cursor',
  },
  ...stringDefTypes,
} as const;

export const objectMocks = {
  object1,
  object2,
  stringDefTypes,
  typeDefs,
};

export const productsStatusEnum = tuple('published', 'draft');

export const DimensionsType = createObjectType('Dimensions', {
  height: 'string?',
  length: 'string?',
  weight: 'string?',
  width: 'string?',
});

export const ProductImageMapType = createObjectType('ProductImageMap', {
  allowZoom: 'boolean?',
  key: 'string?',
  kind: 'string?',
});

export const BreadCrumbType = createObjectType('BreadCrumb', {
  active: 'boolean?',
  id: 'ID',
  name: 'string',
  parentId: 'ID?',
});

export const StockType = createObjectType('Stock', {
  available: 'boolean',
  count: 'float?',
  maxCartQty: 'float?',
  track: {
    description: 'Track count',
    type: 'boolean',
  },
});

export const ProductType = createType('Product', {
  object: {
    sku: 'string',
    storeId: 'ID',
    title: 'string',
    stock: StockType,
    shortDescription: 'string?',
    brand: 'string',
    detailsUrl: 'string?',
    alcoholic: { boolean: true, defaultValue: false },
    thumbUrl: 'string?',
    breadcrumb: { type: BreadCrumbType, list: true },
    mapOfImages: {
      type: ProductImageMapType,
      list: true,
      optional: true,
    },
    attributes: 'record?',
    currentPrice: 'float',
    priceFrom: 'float?',
    sellPrice: 'float',
    dimensions: {
      type: DimensionsType,
      optional: true,
    },
  },
} as const);

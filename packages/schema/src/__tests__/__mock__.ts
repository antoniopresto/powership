import { tuple } from '@darch/utils/lib/typeUtils';

import { createType } from '../GraphType/GraphType';
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

export const productsStatusEnum = tuple('published', 'draft');

export const DimensionsType = createObjectType('Dimensions', {
  weight: 'string?',
  length: 'string?',
  height: 'string?',
  width: 'string?',
});

export const ProductImageMapType = createObjectType('ProductImageMap', {
  key: 'string?',
  kind: 'string?',
  allowZoom: 'boolean?',
});

export const BreadCrumb = createObjectType('BreadCrumb', {
  id: 'ID',
  active: 'boolean?',
  name: 'string',
  parentId: 'ID?',
});

export const StockType = createObjectType('Stock', {
  available: 'boolean',
  count: 'float?',
  maxCartQty: 'float?',
  track: {
    type: 'boolean',
    description: 'Track count',
  },
});

export const ProductType = createType('Product', {
  object: {
    sku: 'string',
    title: 'string',
    // createdBy: 'string',
    // stock: StockType,
    // name: 'string',
    // shortDescription: 'string?',
    // brand: 'string',
    // detailsUrl: 'string?',
    // alcoholic: 'boolean',
    // thumbUrl: 'string?',
    breadcrumb: [BreadCrumb],
    // mapOfImages: [ProductImageMapType],
    // attributes: 'record',
    // currentPrice: 'float',
    // priceFrom: 'float?',
    // sellPrice: 'float',
    // dimensions: DimensionsType,
    // tags: '[string]?',
    // isDraft: 'boolean?',
    // slug: 'string?',
    // categories: ['string'],
    // status: { enum: productsStatusEnum },
    // previousStatus: { enum: productsStatusEnum },
    // spotlight: 'boolean?',
    // publishedAt: 'date?',
    // html: 'string?',
    // homogeneousKit: false,
    // heterogeneousKit: false,
    // kit: false,
    // simpleProduct: true
    // priceType: 'O',
    // validOnStore: true,
    // nutritionalMap: {},
    // commercialStructure: '/43/1632/',
    // showPackUnitPrice: false,
    // nominalPrice: false,
    // priceProgressiveMap: {},
  },
} as const);

export const ProductResolver = ProductType.createResolver({
  name: 'findProductById',
  args: {
    id: 'ID',
  },
  description: 'Get a product by id',
  async resolve(_, { id }) {
    return ProductType.parse({ id });
  },
});

ProductType.addRelation({
  name: 'related',
  type: [ProductType] as const,
  args: {
    limit: 'int',
  },
  async resolve() {
    return { age: 1 } as any;
  },
});

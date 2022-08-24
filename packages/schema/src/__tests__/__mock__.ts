import { tuple } from '@darch/utils/lib/typeUtils';

import { createType } from '../GraphType/GraphType';
import { createObjectType } from '../ObjectType';
import { StringField } from '../fields/StringField';

const object1 = createObjectType({
  age: 'int?',
  favorites: '[string]',
  name: 'string',
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

export const BreadCrumb = createObjectType('BreadCrumb', {
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
    // createdBy: 'string',
    // stock: StockType,
    // name: 'string',
    // shortDescription: 'string?',
    // brand: 'string',
    // detailsUrl: 'string?',
    // alcoholic: 'boolean',
    // thumbUrl: 'string?',
    breadcrumb: [BreadCrumb],

    sku: 'string',

    title: 'string',
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
  args: {
    id: 'ID',
  },
  description: 'Get a product by id',
  name: 'findProductById',
  async resolve(_, { id }) {
    return ProductType.parse({ id });
  },
});

ProductType.addRelation({
  args: {
    limit: 'int',
  },
  name: 'related',
  async resolve() {
    return { age: 1 } as any;
  },
  type: [ProductType] as const,
});

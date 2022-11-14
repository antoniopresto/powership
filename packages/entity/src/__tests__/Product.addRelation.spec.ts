import { createType } from '@backland/schema';
import { assert, IsExact } from 'conditional-type-checks';

import { createEntity } from '../Entity';

import { setupProductTest } from './setupProductTest';
import { PromiseType } from '@backland/utils';

describe('ProductResolver.addRelations', () => {
  const { getMocks } = setupProductTest();

  test('works', async function () {
    const { ProductType, transporter, mockObject } = getMocks();

    const ProductEntity = createEntity({
      indexes: [
        {
          PK: ['.storeId'],
          SK: ['.sku'],
          field: '_id',
          name: 'byStore',
        },
      ],
      name: 'Product2',
      transporter,
      type: ProductType,
    });

    ProductEntity.addRelations({
      type: 'string',
      name: 'batata',
      resolve() {
        return 'batata';
      },
    });

    ProductEntity.addRelations({
      type: '[string]',
      name: 'jaca',
      args: {
        ids: '[string]',
      },
      resolve(_, { ids }) {
        assert<IsExact<typeof ids, string[]>>(true); // fixme relations should receive args, this type is wrong
        return ['jaca'];
      },
    });

    const Transformed = ProductEntity.extend((origin) => {
      return {
        createOne: async (
          num: 1,
          ...rest: Parameters<typeof origin.createOne>
        ) => {
          return [num, await origin.createOne(...rest)] as const;
        },
      };
    });

    type PC = Parameters<typeof Transformed.createOne>[0];
    assert<IsExact<PC, 1>>(true);
    type PR = PromiseType<ReturnType<typeof Transformed.createOne>>[0];
    assert<IsExact<PR, 1>>(true);

    const item = mockObject();

    const [num, created] = await Transformed.createOne(1, {
      item,
      context: {},
    });

    expect(num).toBe(1);

    const dbDoc = await ProductEntity.transporter!.findOne({
      filter: { id: created.item!.id },
      indexConfig: {
        indexes: ProductEntity.indexes,
        entity: ProductEntity.name,
      },
      context: {},
    });

    expect(dbDoc).toHaveProperty('item.id');
    expect(dbDoc).not.toHaveProperty('item.batata');
    expect(created).toHaveProperty('item.batata');

    expect(created).toHaveProperty('item.createdAt', expect.any(Date)); // entity generated

    expect(ProductEntity.type.definition).toMatchObject({
      def: {
        batata: { type: 'string' },
      },
    });

    const found = await ProductEntity.findOne({
      filter: { id: created.item!.id },
      context: {},
    });

    expect(found.item).toEqual({
      ...created.item,
      batata: 'batata',
      jaca: ['jaca'],
    });

    expect(
      Object.entries(ProductEntity.updateDefinition).map(
        ([key, { optional }]) => [key, optional]
      )
    ).toEqual([
      ['_v', true],
      ['sku', true],
      ['storeId', true],
      ['title', true],
      ['stock', true],
      ['shortDescription', true],
      ['brand', true],
      ['detailsUrl', true],
      ['alcoholic', true],
      ['thumbUrl', true],
      ['breadcrumb', true],
      ['mapOfImages', true],
      ['attributes', true],
      ['currentPrice', true],
      ['priceFrom', true],
      ['sellPrice', true],
      ['dimensions', true],
      ['tags', true],
      ['slug', true],
      ['mainCategoryId', true],
      ['categories', true],
      ['spotlight', true],
      ['html', true],
    ]);

    expect(ProductEntity.type.print()).toEqual([
      'type Product2Entity {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: Stock!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumb]',
      '  mapOfImages: [ProductImageMap]',
      '  attributes: Product2Entity_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: Dimensions',
      '  tags: [String]',
      '  slug: String',
      '  mainCategoryId: ID',
      '  categories: [String]!',
      '  spotlight: Boolean',
      '  html: String',
      '  batata: String!',
      '  jaca: [String]!',
      '}',
      '',
      'scalar Date',
      '',
      'scalar Ulid',
      '',
      'type Stock {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Should track count"""',
      '  track: Boolean',
      '}',
      '',
      'type BreadCrumb {',
      '  id: ID!',
      '  active: Boolean',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'type ProductImageMap {',
      '  key: String',
      '  kind: String',
      '  allowZoom: Boolean',
      '}',
      '',
      'scalar Product2Entity_attributes',
      '',
      'type Dimensions {',
      '  weight: String',
      '  length: String',
      '  height: String',
      '  width: String',
      '}',
      '',
      'input Product2EntityInput {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: StockInput!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumbInput]',
      '  mapOfImages: [ProductImageMapInput]',
      '  attributes: Product2Entity_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: DimensionsInput',
      '  tags: [String]',
      '  slug: String',
      '  mainCategoryId: ID',
      '  categories: [String]!',
      '  spotlight: Boolean',
      '  html: String',
      '  batata: String!',
      '  jaca: [String]!',
      '}',
      '',
      'input StockInput {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Should track count"""',
      '  track: Boolean',
      '}',
      '',
      'input BreadCrumbInput {',
      '  id: ID!',
      '  active: Boolean',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'input ProductImageMapInput {',
      '  key: String',
      '  kind: String',
      '  allowZoom: Boolean',
      '}',
      '',
      'input DimensionsInput {',
      '  weight: String',
      '  length: String',
      '  height: String',
      '  width: String',
      '}',
    ]);

    expect(
      createType('Product2Input', {
        object: ProductEntity.inputDefinition,
      }).print()
    ).toEqual([
      'type Product2Input {',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: Stock!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumb]',
      '  mapOfImages: [ProductImageMap]',
      '  attributes: Product2Input_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: Dimensions',
      '  tags: [String]',
      '  slug: String',
      '  mainCategoryId: ID',
      '  categories: [String]!',
      '  spotlight: Boolean',
      '  html: String',
      '}',
      '',
      'type Stock {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Should track count"""',
      '  track: Boolean',
      '}',
      '',
      'type BreadCrumb {',
      '  id: ID!',
      '  active: Boolean',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'type ProductImageMap {',
      '  key: String',
      '  kind: String',
      '  allowZoom: Boolean',
      '}',
      '',
      'scalar Product2Input_attributes',
      '',
      'type Dimensions {',
      '  weight: String',
      '  length: String',
      '  height: String',
      '  width: String',
      '}',
      '',
      'input Product2InputInput {',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: StockInput!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumbInput]',
      '  mapOfImages: [ProductImageMapInput]',
      '  attributes: Product2Input_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: DimensionsInput',
      '  tags: [String]',
      '  slug: String',
      '  mainCategoryId: ID',
      '  categories: [String]!',
      '  spotlight: Boolean',
      '  html: String',
      '}',
      '',
      'input StockInput {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Should track count"""',
      '  track: Boolean',
      '}',
      '',
      'input BreadCrumbInput {',
      '  id: ID!',
      '  active: Boolean',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'input ProductImageMapInput {',
      '  key: String',
      '  kind: String',
      '  allowZoom: Boolean',
      '}',
      '',
      'input DimensionsInput {',
      '  weight: String',
      '  length: String',
      '  height: String',
      '  width: String',
      '}',
    ]);
  });
});

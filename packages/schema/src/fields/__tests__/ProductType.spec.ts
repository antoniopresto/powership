import {
  BreadCrumbType,
  ProductImageMapType,
  ProductType,
} from '../../__tests__/__mock__';
import { createObjectType, resetTypesCache } from '../../types';

describe('ProductType', () => {
  afterEach(resetTypesCache);

  it('works', async () => {
    expect(ProductType.print()).toEqual([
      'type Product {',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: Stock!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumb]!',
      '  mapOfImages: [ProductImageMap]',
      '  attributes: Product_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: Dimensions',
      '}',
      '',
      'type Stock {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Track count"""',
      '  track: Boolean!',
      '}',
      '',
      'type BreadCrumb {',
      '  active: Boolean',
      '  id: ID!',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'type ProductImageMap {',
      '  allowZoom: Boolean',
      '  key: String',
      '  kind: String',
      '}',
      '',
      'scalar Product_attributes',
      '',
      'type Dimensions {',
      '  height: String',
      '  length: String',
      '  weight: String',
      '  width: String',
      '}',
      '',
      'input ProductInput {',
      '  sku: String!',
      '  storeId: ID!',
      '  title: String!',
      '  stock: StockInput!',
      '  shortDescription: String',
      '  brand: String!',
      '  detailsUrl: String',
      '  alcoholic: Boolean!',
      '  thumbUrl: String',
      '  breadcrumb: [BreadCrumbInput]!',
      '  mapOfImages: [ProductImageMapInput]',
      '  attributes: Product_attributes',
      '  currentPrice: Float!',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  dimensions: DimensionsInput',
      '}',
      '',
      'input StockInput {',
      '  available: Boolean!',
      '  count: Float',
      '  maxCartQty: Float',
      '',
      '  """Track count"""',
      '  track: Boolean!',
      '}',
      '',
      'input BreadCrumbInput {',
      '  active: Boolean',
      '  id: ID!',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'input ProductImageMapInput {',
      '  allowZoom: Boolean',
      '  key: String',
      '  kind: String',
      '}',
      '',
      'input DimensionsInput {',
      '  height: String',
      '  length: String',
      '  weight: String',
      '  width: String',
      '}',
    ]);
  });

  test('parse list', async () => {
    const sut = createObjectType('Product2', {
      breadcrumbs: {
        type: BreadCrumbType,
        list: true,
        $: { persist: { ttl: '1Day' } },
      },
      breadcrumbSolo: { type: BreadCrumbType },
      breadcrumbSoloOptional: { type: BreadCrumbType, optional: true },
      mapOfImagesListOptional: {
        type: ProductImageMapType,
        list: true,
        optional: true,
      },
    });

    expect(sut.graphqlPrint().split('\n')).toEqual([
      'type Product2 {',
      '  breadcrumbs: [BreadCrumb]!',
      '  breadcrumbSolo: BreadCrumb!',
      '  breadcrumbSoloOptional: BreadCrumb',
      '  mapOfImagesListOptional: [ProductImageMap]',
      '}',
      '',
      'type BreadCrumb {',
      '  active: Boolean',
      '  id: ID!',
      '  name: String!',
      '  parentId: ID',
      '}',
      '',
      'type ProductImageMap {',
      '  allowZoom: Boolean',
      '  key: String',
      '  kind: String',
      '}',
    ]);
  });
});

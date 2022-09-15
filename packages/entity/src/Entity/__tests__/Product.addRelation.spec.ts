import { createType } from '@brabo/schema';
import { assert, IsExact } from 'conditional-type-checks';

import { createEntity } from '../Entity';

import { setupProductTest } from './setupProductTest';

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

    const item = mockObject();

    const created = await ProductEntity.createOne({
      item,
      context: {},
    });

    expect(created).not.toHaveProperty('item.batata');
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
      ['alcoholic', true],
      ['attributes', true],
      ['brand', true],
      ['categories', true],
      ['currentPrice', true],
      ['detailsUrl', true],
      ['html', true],
      ['priceFrom', true],
      ['sellPrice', true],
      ['shortDescription', true],
      ['sku', true],
      ['slug', true],
      ['spotlight', true],
      ['storeId', true],
      ['tags', true],
      ['thumbUrl', true],
      ['title', true],
    ]);

    expect(ProductEntity.type.print()).toEqual([
      'type Product2Entity {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  alcoholic: Boolean!',
      '  attributes: Product2Entity_attributes',
      '  brand: String!',
      '  categories: [String]!',
      '  currentPrice: Float!',
      '  detailsUrl: String',
      '  html: String',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  shortDescription: String',
      '  sku: String!',
      '  slug: String',
      '  spotlight: Boolean',
      '  storeId: ID!',
      '  tags: [String]',
      '  thumbUrl: String',
      '  title: String!',
      '  batata: String!',
      '  jaca: [String]!',
      '}',
      '',
      'scalar Date',
      '',
      'scalar Ulid',
      '',
      'scalar Product2Entity_attributes',
      '',
      'input Product2EntityInput {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  alcoholic: Boolean = false',
      '  attributes: Product2Entity_attributes',
      '  brand: String!',
      '  categories: [String]!',
      '  currentPrice: Float!',
      '  detailsUrl: String',
      '  html: String',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  shortDescription: String',
      '  sku: String!',
      '  slug: String',
      '  spotlight: Boolean',
      '  storeId: ID!',
      '  tags: [String]',
      '  thumbUrl: String',
      '  title: String!',
      '  batata: String!',
      '  jaca: [String]!',
      '}',
    ]);

    expect(
      createType('Product2Input', {
        object: ProductEntity.inputDefinition,
      }).print()
    ).toEqual([
      'type Product2Input {',
      '  alcoholic: Boolean!',
      '  attributes: Product2Input_attributes',
      '  brand: String!',
      '  categories: [String]!',
      '  currentPrice: Float!',
      '  detailsUrl: String',
      '  html: String',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  shortDescription: String',
      '  sku: String!',
      '  slug: String',
      '  spotlight: Boolean',
      '  storeId: ID!',
      '  tags: [String]',
      '  thumbUrl: String',
      '  title: String!',
      '}',
      '',
      'scalar Product2Input_attributes',
      '',
      'input Product2InputInput {',
      '  alcoholic: Boolean = false',
      '  attributes: Product2Input_attributes',
      '  brand: String!',
      '  categories: [String]!',
      '  currentPrice: Float!',
      '  detailsUrl: String',
      '  html: String',
      '  priceFrom: Float',
      '  sellPrice: Float!',
      '  shortDescription: String',
      '  sku: String!',
      '  slug: String',
      '  spotlight: Boolean',
      '  storeId: ID!',
      '  tags: [String]',
      '  thumbUrl: String',
      '  title: String!',
      '}',
    ]);
  });
});

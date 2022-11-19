import { CircularDeps, createResolver, Infer } from '@backland/schema';
import { createGraphQLSchema } from '@backland/schema/lib/createGraphQLSchema';
import { notNull, PromiseType } from '@backland/utils';
import { assert, IsExact } from 'conditional-type-checks';

import { PaginationResult } from '@backland/transporter';

import { setupProductTest } from './setupProductTest';

describe('ProductResolver', () => {
  const { getMocks } = setupProductTest();

  it('type assertion', async () => {
    const { shape, ProductEntity, createOne } = getMocks();

    await expect(
      ProductEntity.findOne({ filter: {}, context: {} })
    ).rejects.toThrow(
      `EMPTY_FILTER ➤ { filter: {}, possibleCondition: undefined, reason: 'EMPTY_FILTER' }`
    );

    await expect(
      ProductEntity.findOne({ filter: { batatas: '123' } as any, context: {} })
    ).rejects.toThrow(`INVALID_FILTER ➤`);

    const res = await createOne();
    expect(res).toEqual(shape);

    const productPagination = createResolver({
      type: ProductEntity.paginationType,
      args: ProductEntity.paginate.queryArgs,
      name: 'paginate',
      async resolve(_, args, context) {
        type Args = typeof args;

        assert<
          IsExact<
            Args['filter'],
            {
              id?: string | undefined;
              sku?: string | undefined;
              storeId?: string;
            }
          >
        >(true);

        assert<IsExact<Args['first'], ExpectedArgs['first']>>(true);
        assert<IsExact<Args['after'], ExpectedArgs['after']>>(true);

        return ProductEntity.paginate({
          ...args,
          context,
        });
      },
    });

    type ExpectedArgs = {
      after?: string | undefined;
      filter: {
        id?: string | undefined;
        sku?: string | undefined;
        storeId?: string;
      };
      first?: number | undefined;
    };

    type TProduct = Infer<typeof ProductEntity.type>;
    type Args = Parameters<typeof productPagination.resolve>[1];
    assert<IsExact<Args['filter'], ExpectedArgs['filter']>>(true);
    assert<IsExact<Args['first'], ExpectedArgs['first']>>(true);
    assert<IsExact<Args['after'], ExpectedArgs['after']>>(true);

    type Result = PromiseType<ReturnType<typeof productPagination.resolve>>;
    type EntityPagination = PaginationResult<TProduct>;

    assert<EntityPagination extends Result ? true : false>(true);
  });

  test('findById', async function () {
    const { createOne, ProductEntity } = getMocks();
    const created = await createOne();

    const sut = await ProductEntity.findById({
      id: created.id,
      context: {},
    });

    expect(sut).toMatchObject({
      item: {
        id: notNull(created.id),
      },
    });
  });

  test('findMany with only id member', async function () {
    const { createOne, ProductEntity } = getMocks();
    const created = await createOne();

    const sut = await ProductEntity.findMany({
      filter: { storeId: created.storeId },
      context: {},
    });

    expect(sut).toMatchObject({
      items: [
        {
          id: notNull(created.id),
        },
      ],
    });
  });

  test('query edges', async () => {
    const { createOne } = getMocks();
    await createOne();

    const schema = createGraphQLSchema();

    const resp = await CircularDeps.graphql({
      schema,
      contextValue: { userId: () => '123' },
      source:
        '{paginate(filter: { storeId: "123" }) {edges {cursor node{id}} pageInfo {endCursor} }}',
      variableValues: {},
    });

    expect(resp).toEqual({
      data: {
        paginate: {
          edges: [
            {
              cursor: expect.stringMatching(/^~!/),
              node: {
                id: expect.stringMatching(/^~!/),
              },
            },
          ],
          pageInfo: {
            endCursor: expect.stringMatching(/^~!/),
          },
        },
      },
    });
  });

  test('query with condition', async function () {
    const { createOne, transporter } = getMocks();
    const spy = jest.spyOn(transporter, 'paginate');
    await createOne();

    const schema = createGraphQLSchema();

    const response = await CircularDeps.graphql({
      schema,
      contextValue: { userId: () => '123' },
      source:
        '{paginate(filter: { storeId: "123" } condition: {id:{ eq: 333 }} ) {edges {cursor node{id}}}}',
      variableValues: {},
    });

    expect(response).toEqual({
      data: {
        paginate: {
          edges: [],
        },
      },
    });

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(
      expect.objectContaining({
        filter: {
          storeId: '123',
        },
        condition: {
          id: {
            $eq: 333,
          },
        },
      })
    );
    spy.mockRestore();
  });

  test('querying empty result expected', async () => {
    getMocks();

    const schema = createGraphQLSchema();

    const invalidCondition = await CircularDeps.graphql({
      schema,
      contextValue: { userId: () => '123' },
      source:
        '{paginate(filter: { storeId: "123" } condition: {id:{eq: null}}) {edges {cursor node{id}} pageInfo {endCursor} }}',
      variableValues: {},
    });

    expect(invalidCondition).toEqual({
      data: {
        paginate: {
          edges: [],
          pageInfo: {
            endCursor: null,
          },
        },
      },
    });
  });

  test('print schema', () => {
    getMocks();

    const schema = createGraphQLSchema();

    expect(schema.utils.print().split('\n')).toEqual([
      'type Query {',
      '  paginate(after: ID, condition: ProductQueryConditionsInput, filter: paginateInput_filterInput!, first: Int): ProductConnection!',
      '}',
      '',
      'type ProductConnection {',
      '  edges: [Product_Edge]!',
      '  pageInfo: PageInfo!',
      '}',
      '',
      'type Product_Edge {',
      '  cursor: String!',
      '  node: ProductEntity!',
      '}',
      '',
      'type ProductEntity {',
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
      '  attributes: ProductEntity_attributes',
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
      'scalar ProductEntity_attributes',
      '',
      'type Dimensions {',
      '  weight: String',
      '  length: String',
      '  height: String',
      '  width: String',
      '}',
      '',
      'type PageInfo {',
      '  endCursor: String',
      '  hasNextPage: Boolean!',
      '  hasPreviousPage: Boolean!',
      '  startCursor: String',
      '}',
      '',
      'input ProductQueryConditionsInput {',
      '  createdAt: QueryCondition',
      '  createdBy: QueryCondition',
      '  id: QueryCondition',
      '  ulid: QueryCondition',
      '  updatedAt: QueryCondition',
      '  updatedBy: QueryCondition',
      '  sku: QueryCondition',
      '  storeId: QueryCondition',
      '  title: QueryCondition',
      '  stock: QueryCondition',
      '  shortDescription: QueryCondition',
      '  brand: QueryCondition',
      '  detailsUrl: QueryCondition',
      '  alcoholic: QueryCondition',
      '  thumbUrl: QueryCondition',
      '  breadcrumb: QueryCondition',
      '  mapOfImages: QueryCondition',
      '  attributes: QueryCondition',
      '  currentPrice: QueryCondition',
      '  priceFrom: QueryCondition',
      '  sellPrice: QueryCondition',
      '  dimensions: QueryCondition',
      '  tags: QueryCondition',
      '  slug: QueryCondition',
      '  mainCategoryId: QueryCondition',
      '  categories: QueryCondition',
      '  spotlight: QueryCondition',
      '  html: QueryCondition',
      '}',
      '',
      '"""',
      'Union of:',
      ' - { between:{ def:[{ type: string , list:true},{ type: float , list:true}], optional:true, type: union }, contains:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, eq:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, exists:{ type: boolean , optional:true}, gt:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, gte:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, in:{ type: any , list:true, optional:true}, lte:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, matchString:{ type: string , optional:true}, ne:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, startsWith:{ type: string , optional:true}, type:{ def:[String,Number,Binary,Boolean,Null,List,Map,StringSet,NumberSet], optional:true, type: enum }}',
      ' - { def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }',
      '"""',
      'scalar QueryCondition',
      '',
      'input paginateInput_filterInput {',
      '  id: ID',
      '  storeId: ID',
      '  sku: String',
      '}',
      '',
      'type Mutation {',
      '  productCreate(sku: String!, storeId: ID!, title: String!, stock: StockInput!, shortDescription: String, brand: String!, detailsUrl: String, alcoholic: Boolean!, thumbUrl: String, breadcrumb: [BreadCrumbInput], mapOfImages: [ProductImageMapInput], attributes: productCreateInput_attributes, currentPrice: Float!, priceFrom: Float, sellPrice: Float!, dimensions: DimensionsInput, tags: [String], slug: String, mainCategoryId: ID, categories: [String]!, spotlight: Boolean, html: String): ProductEntity!',
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
      'scalar productCreateInput_attributes',
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

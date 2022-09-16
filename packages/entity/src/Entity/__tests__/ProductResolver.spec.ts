import { CircularDeps, createResolver, Infer } from '@brabo/schema';
import { createGraphQLSchema } from '@brabo/schema/lib/createGraphQLSchema';
import { notNull, PromiseType } from '@brabo/utils';
import { assert, IsExact } from 'conditional-type-checks';

import { PaginationResult } from '../../Transporter';

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
      args: ProductEntity.paginateByStore.queryArgs,
      name: 'paginate',
      async resolve(_, args, context) {
        type Args = typeof args;

        assert<
          IsExact<
            Args['filter'],
            {
              // id?: string | undefined;
              sku?: string | undefined;
              storeId: string;
            }
          >
        >(true);

        assert<IsExact<Args['first'], ExpectedArgs['first']>>(true);
        assert<IsExact<Args['after'], ExpectedArgs['after']>>(true);

        return ProductEntity.paginateByStore({
          ...args,
          context,
        });
      },
    });

    type ExpectedArgs = {
      after?: string | undefined;
      filter: {
        sku?: string | undefined;
        storeId: string;
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
      '  alcoholic: Boolean!',
      '  attributes: ProductEntity_attributes',
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
      'scalar Date',
      '',
      'scalar Ulid',
      '',
      'scalar ProductEntity_attributes',
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
      '  alcoholic: QueryCondition',
      '  attributes: QueryCondition',
      '  brand: QueryCondition',
      '  categories: QueryCondition',
      '  currentPrice: QueryCondition',
      '  detailsUrl: QueryCondition',
      '  html: QueryCondition',
      '  priceFrom: QueryCondition',
      '  sellPrice: QueryCondition',
      '  shortDescription: QueryCondition',
      '  sku: QueryCondition',
      '  slug: QueryCondition',
      '  spotlight: QueryCondition',
      '  storeId: QueryCondition',
      '  tags: QueryCondition',
      '  thumbUrl: QueryCondition',
      '  title: QueryCondition',
      '}',
      '',
      '"""',
      'Union of:',
      ' - { between:{ def:[{ list:true, type: string },{ list:true, type: float }], optional:true, type: union }, contains:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, eq:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, exists:{ optional:true, type: boolean }, gt:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, gte:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, in:{ list:true, optional:true, type: any }, lte:{ def:[{ type: string },{ type: float },{ type: null }], optional:true, type: union }, matchString:{ optional:true, type: string }, ne:{ def:[{ type: string },{ type: float },{ type: boolean },{ type: null }], optional:true, type: union }, startsWith:{ optional:true, type: string }, type:{ def:[String,Number,Binary,Boolean,Null,List,Map,StringSet,NumberSet], optional:true, type: enum }}',
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
      '  productCreate(alcoholic: Boolean = false, attributes: productCreateInput_attributes, brand: String!, categories: [String]!, currentPrice: Float!, detailsUrl: String, html: String, priceFrom: Float, sellPrice: Float!, shortDescription: String, sku: String!, slug: String, spotlight: Boolean, storeId: ID!, tags: [String], thumbUrl: String, title: String!): ProductEntity!',
      '}',
      '',
      'scalar productCreateInput_attributes',
    ]);
  });
});

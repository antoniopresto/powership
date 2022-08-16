import { createResolver, createType, Infer, ObjectType } from '@darch/schema';
import { objectMock } from '@darch/schema';
import { getTypeName, PromiseType } from '@darch/utils';
import { slugify } from '@darch/utils/lib/slugify';

import { MongoTransporter } from '../../Mongo';
import { AppMock, createAppMock } from '../../Mongo/__tests__/createAppMock';
import { createEntity, EntityGeneratedFields } from '../Entity';
import { assert, IsExact } from 'conditional-type-checks';
import { PaginationResult } from '../../Transporter';

describe('ProductResolver', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  beforeEach(async function () {
    await ObjectType.reset();
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  it('works', async () => {
    const ProductType = createType('Product', {
      object: {
        sku: 'string',
        storeId: 'ID',
        title: 'string',
        shortDescription: 'string?',
        brand: 'string',
        detailsUrl: 'string?',
        alcoholic: { boolean: true, defaultValue: false },
        thumbUrl: 'string?',
        attributes: 'record?',
        currentPrice: 'float',
        priceFrom: 'float?',
        sellPrice: 'float',
        tags: '[string]?',
        slug: 'string?',
        categories: ['string'],
        spotlight: 'boolean?',
        html: 'string?',
      },
    } as const);

    const ProductEntity = createEntity({
      name: 'Product',
      transporter,
      type: ProductType,
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'],
          SK: ['.sku'],
        },
      ],
    });

    const obj: any = objectMock(ProductEntity.originType._object!.definition);
    const defaultMock = objectMock(EntityGeneratedFields);

    const shape = Object.entries({ ...defaultMock, ...obj }).reduce(
      (acc, [name, val]) => {
        const tn = getTypeName(val);
        const cons = eval(tn);
        return {
          ...acc,
          [name]: expect.any(cons),
        };
      },
      {}
    );

    await expect(
      ProductEntity.findOne({ filter: {}, context: {} })
    ).rejects.toThrow('INVALID_FILTER');

    await expect(
      ProductEntity.findOne({ filter: { batatas: '123' } as any, context: {} })
    ).rejects.toThrow('INVALID_FILTER');

    const productCreateResolver = createResolver({
      type: ProductEntity.type,
      name: 'productCreate',
      kind: 'mutation',
      args: ProductEntity.inputDefinition,
      async resolve(_root, args, context) {
        const storeId = '123';

        const item = {
          ...args,
          storeId,
        };

        item.slug = `${slugify(args.title)}_:${ProductEntity.getDocumentId(
          item
        )}`;

        const result = await ProductEntity.createOne({
          item,
          context,
        });

        if (!result.item) {
          throw new Error('Failed to create product.');
        }

        return result.item;
      },
    });

    const res = await productCreateResolver.resolve(
      {},
      obj,
      { userId: () => '123' },
      {} as any
    );

    expect(res).toEqual(shape);

    type ExpectedArgs = {
      filter: {
        storeId: string;
        id?: string | undefined;
        sku?: string | undefined;
      };
      limit?: number | undefined;
      after?: string | undefined;
    };

    const productPagination = createResolver({
      type: ProductEntity.paginationType,
      args: ProductEntity.paginateByStore.queryArgs,
      name: 'paginate',
      async resolve(_, args, context) {
        type Args = typeof args;
        assert<IsExact<Args, ExpectedArgs>>(true);
        return ProductEntity.paginateByStore({ ...args, context });
      },
    });

    type TProduct = Infer<typeof ProductEntity>;
    type Params = Parameters<typeof productPagination.resolve>;
    assert<IsExact<Params[1], ExpectedArgs>>(true);

    type Result = PromiseType<ReturnType<typeof productPagination.resolve>>;
    type EntityPagination = PaginationResult<TProduct>;
    assert<EntityPagination extends Result ? true : false>(true);

    const resp = await productPagination.resolve(
      {},
      { filter: { storeId: '123' } },
      { userId: () => '123' },
      {} as any
    );

    expect(resp).toMatchObject({
      edges: [
        {
          cursor: expect.stringMatching('#'),
          node: {
            id: expect.stringMatching('#'),
          },
        },
      ],
      pageInfo: {
        endCursor: expect.stringMatching('#'),
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: expect.stringMatching('#'),
      },
    });
  });
});

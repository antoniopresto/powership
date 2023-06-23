import { MongoTransporter } from '@powership/mongo';
import { AppMock, createAppMock } from '@powership/mongo/lib/test-utils';
import {
  createResolver,
  createSchema,
  createType,
  GraphType,
  objectMock,
  ObjectType,
} from '@powership/schema';
import { getTypeName, slugify } from '@powership/utils';

import { createEntity } from '../Entity';
import { Entity } from '../EntityInterfaces';

export const BreadCrumbType = createType('BreadCrumb', {
  object: {
    id: 'ID',
    active: 'boolean?',
    name: 'string',
    parentId: 'ID?',
  },
});

export const DimensionsType = createType('Dimensions', {
  object: {
    weight: 'string?',
    length: 'string?',
    height: 'string?',
    width: 'string?',
  },
});

export const ProductImageMapType = createSchema('ProductImageMap', {
  key: 'string?',
  kind: 'string?',
  allowZoom: 'boolean?',
});

export const StockType = createType('Stock', {
  object: {
    available: 'boolean',
    count: 'float?',
    maxCartQty: 'float?',
    track: {
      type: 'boolean',
      description: 'Should track count',
      optional: true,
    },
  },
});

const productDef = {
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
    breadcrumb: {
      type: BreadCrumbType,
      list: true,
      optional: true,
    },
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
    tags: '[string]?',
    slug: 'string?',
    mainCategoryId: 'ID?',
    categories: '[string]',
    spotlight: 'boolean?',
    html: 'string?',
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
} as const;

type ProductType = GraphType<typeof productDef>;

type ProductEntity = Entity<
  (typeof productDef)['object'],
  [
    {
      PK: ['.storeId'];
      SK: ['.sku'];
      name: '_id';
    }
  ]
>;

const p = {} as ProductEntity;

p.findOne;

type Mock = {
  [K: string]: any;
  ProductEntity: ProductEntity;
  ProductType: ProductType;
};

export function setupProductTest(withTransporter = true): {
  getMocks(): Mock;
} {
  jest.setTimeout(20000);
  let mockApp: AppMock;
  let transporter!: MongoTransporter;

  beforeEach(async function () {
    await ObjectType.reset();
    mockApp = createAppMock();
    await mockApp.start();
    if (withTransporter) {
      transporter = new MongoTransporter({
        client: mockApp.client!,
        collection: 'temp1',
      });
    }
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  function getMocks(): Mock {
    const ProductType = createType('Product', productDef);

    const ProductEntity = createEntity({
      indexes: [
        {
          PK: ['.storeId'],
          SK: ['.sku'],
          name: '_id',
        },
      ],
      name: 'Product',
      transporter,
      type: ProductType,
    }) as unknown as ProductEntity;

    const mockObject = () =>
      objectMock(
        ProductEntity.originType.__lazyGetter.objectType!.definition
      ) as any;

    const shape = Object.entries({ ...mockObject() }).reduce(
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

    const productCreateResolver = createResolver({
      args: ProductEntity.extendInput.def(),
      kind: 'mutation',
      name: 'productCreate',
      async resolve(_root, args, context) {
        const storeId = '123';

        const item = {
          ...args,
          storeId,
        };

        item.slug = `${slugify(item.title)}_:${ProductEntity.getDocumentId(
          item
        )}`;

        const result = await ProductEntity.createOne({
          context,
          // @ts-ignore
          item, // FIXME args.breadcrumb inferring as single breadcrumb
        });

        if (!result.item) {
          throw new Error('Failed to create product.');
        }

        return result.item;
      },
      type: ProductEntity.type,
    });

    const productPagination = createResolver({
      args: ProductEntity.paginate.queryArgs,
      name: 'paginate',
      async resolve(_, args, context) {
        return await ProductEntity.paginate({ ...args, context });
      },
      type: ProductEntity.paginationType,
    });

    function createOne(override?: Record<string, any>) {
      return productCreateResolver.resolve(
        {},
        { ...mockObject(), ...override },
        { userId: () => '123' },
        {} as any
      );
    }

    return {
      ProductEntity,
      ProductType,
      createOne,
      mockApp,
      mockObject,
      obj: mockObject(),
      productPagination,
      shape,
      transporter,
    } as unknown as Mock;
  }

  return {
    getMocks,
  };
}

import {
  createResolver,
  createType,
  GraphType,
  objectMock,
  ObjectType,
} from '@backland/schema';
import { getTypeName } from '@backland/utils';
import { slugify } from '@backland/utils/lib/slugify';

import { MongoTransporter } from '@backland/mongo';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { createEntity } from '../Entity';
import { createEntityDefaultFields, Entity } from '../EntityInterfaces';
import { createSchema } from '@backland/schema';

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
    _v: 'string',
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

type ProductEntity = Entity<{
  indexes: [
    {
      PK: ['.storeId'];
      SK: ['.sku'];
      field: '_id';
      name: 'byStore';
    }
  ];
  name: 'Product';
  transporter;
  type: ProductType;
}>;

type Mock = {
  [K: string]: any;
  ProductEntity: ProductEntity;
  ProductType: ProductType;
};

export function setupProductTest(): {
  getMocks(): Mock;
} {
  let mockApp: AppMock;
  let transporter!: MongoTransporter;

  beforeEach(async function () {
    await ObjectType.reset();
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      client: mockApp.client!,
      collection: 'temp1',
    });
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
          field: '_id',
          name: 'byStore',
        },
      ],
      name: 'Product',
      transporter,
      type: ProductType,
    });

    const mockObject = () =>
      objectMock(ProductEntity.originType._object!.definition) as any;
    const defaultMock: any = objectMock(createEntityDefaultFields());

    const shape = Object.entries({ ...defaultMock, ...mockObject() }).reduce(
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
      args: ProductEntity.inputDefinition,
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
          item,
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
        return ProductEntity.paginate({ ...args, context });
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
    };
  }

  return {
    getMocks,
  };
}

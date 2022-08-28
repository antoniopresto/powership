import {
  createResolver,
  createType,
  objectMock,
  ObjectType,
} from '@darch/schema';
import { getTypeName } from '@darch/utils';
import { slugify } from '@darch/utils/lib/slugify';

import { MongoTransporter } from '../../Mongo';
import { AppMock, createAppMock } from '../../Mongo/__tests__/createAppMock';
import { createEntity, EntityGeneratedFields } from '../Entity';

export function setupProductTest() {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

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

  function getMocks() {
    const ProductType = createType('Product', {
      object: {
        alcoholic: { boolean: true, defaultValue: false },
        attributes: 'record?',
        brand: 'string',
        categories: ['string'],
        currentPrice: 'float',
        detailsUrl: 'string?',
        html: 'string?',
        priceFrom: 'float?',
        sellPrice: 'float',
        shortDescription: 'string?',
        sku: 'string',
        slug: 'string?',
        spotlight: 'boolean?',
        storeId: 'ID',
        tags: '[string]?',
        thumbUrl: 'string?',
        title: 'string',
      },
    } as const);

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
    const defaultMock = objectMock(EntityGeneratedFields);

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
      args: ProductEntity.paginateByStore.queryArgs,
      name: 'paginate',
      async resolve(_, args, context) {
        return ProductEntity.paginateByStore({ ...args, context });
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
      createOne,
      mockApp,
      mockObject,
      obj: mockObject(),
      productCreateResolver,
      productPagination,
      shape,
      transporter,
    };
  }

  return {
    getMocks,
  };
}

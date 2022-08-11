import { createEntity } from '../Entity';
import { AppMock, createAppMock } from '../../Mongo/__tests__/createAppMock';
import { MongoTransporter } from '../../Mongo';
import { createType, ObjectType } from '@darch/schema';

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

    const entity = createEntity({
      name: 'Product',
      transporter: transporter,
      type: ProductType,
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'], //
          SK: ['.sku'],
        },
      ],
    });

    await expect(entity.findOne({ filter: {}, context: {} })).rejects.toThrow(
      'INVALID_FILTER'
    );

    await expect(
      entity.findOne({ filter: { batatas: '123' } as any, context: {} })
    ).rejects.toThrow('INVALID_FILTER');
  });
});

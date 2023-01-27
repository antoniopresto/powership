import { createType } from '../GraphType/GraphType';
import { createObjectType } from '../ObjectType';
import { objectMock } from '../mockObject';

describe('mockObject', () => {
  it('works', async () => {
    const graphType = createType({
      union: ['string', '[int]?'],
    });

    const ProductType = createType('Product', {
      object: {
        sku: 'string',
        storeId: 'ID',
        title: 'string',
        shortDescription: 'string?',
        brand: 'string',
        detailsUrl: 'string?',
        alcoholic: { boolean: true,
defaultValue: false },
        thumbUrl: 'string?',
        attributes: 'record?',
        currentPrice: 'float',
        priceFrom: 'float?',
        sellPrice: 'float',
        tags: '[string]?',
        slug: 'string?',
        categories: '[string]',
        spotlight: 'boolean?',
        html: 'string?',
        lit: { literal: { a: 1 } },
        objectType: createObjectType({
          name: 'string',
          list: { array: { of: 'string',
min: 2 } },
        }),
        graphType,
      },
    } as const);

    expect(objectMock(ProductType.__lazyGetter.objectType!.definition)).toEqual(
      {
        alcoholic: expect.any(Boolean),
        attributes: expect.any(Object),
        brand: expect.any(String),
        categories: expect.any(Array),
        currentPrice: expect.any(Number),
        detailsUrl: expect.any(String),
        html: expect.any(String),
        priceFrom: expect.any(Number),
        sellPrice: expect.any(Number),
        shortDescription: expect.any(String),
        sku: expect.any(String),
        slug: expect.any(String),
        spotlight: expect.any(Boolean),
        storeId: expect.any(String),
        tags: expect.any(Array),
        thumbUrl: expect.any(String),
        title: expect.any(String),
        lit: { a: 1 },
        objectType: {
          name: expect.any(String),
          list: [expect.any(String), expect.any(String)],
        },
        graphType: expect.anything(),
      }
    );
  });
});

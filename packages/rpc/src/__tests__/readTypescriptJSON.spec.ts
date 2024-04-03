import { jsonToType } from '../jsonToType';
import { readTypescriptJSON } from '../readTypescriptJSON';

describe('readTypescriptJSON', () => {
  // afterEach();

  test('basic test', () => {
    const sut = readTypescriptJSON('./src/__tests__/example1.ts');

    expect(sut).toEqual({
      $ref: '#/definitions/Product',
      $schema: 'http://json-schema.org/draft-07/schema#',
      definitions: {
        Product: {
          additionalProperties: false,
          properties: {
            categories: {
              description: 'Product categories',
              items: {
                type: 'string',
              },
              type: 'array',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
          required: ['id', 'name', 'categories'],
          type: 'object',
        },
      },
    });
  });

  test('jsonToType', () => {
    const sut = readTypescriptJSON('./src/__tests__/example1.ts');
    const parsed = jsonToType(sut);
    expect(parsed).toEqual({
      categories: {
        description: 'Product categories',
        list: true,
        type: 'string',
      },
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    });
  });

  test('ecommerce example', () => {
    const sut = readTypescriptJSON('./src/__tests__/example2.ts');

    const parsed = jsonToType(sut);

    // TODO use flatten def
    
    // TODO handle circular
    //  - idea: use a intermediary "ast" where `#NAME` is an alias to a type
    //  - idea: from ast, generate "get-or-set" named functions, like graphql-server
    //    - function Products(){}
    //  - handle auth, transform resolver, etc (all from tm)
    // TODO test multiple files and circular
    expect(parsed).toEqual([
      {
        def: {
          brand: {
            type: 'string',
          },
          categories: {
            // type: 'array',
          },
          description: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          images: {
            // type: 'array',
          },
          name: {
            type: 'string',
          },
          // skus: ,
          tags: {
            // type: 'array',
          },
        },
        name: 'Product',
        type: 'object',
      },
      {
        def: {
          altText: {
            optional: true,
            type: 'string',
          },
          url: {
            type: 'string',
          },
        },
        name: 'Image',
        type: 'object',
      },
      {
        def: {
          id: {
            type: 'string',
          },
          images: {
            // type: 'array',
          },
          inventoryLevel: {
            type: 'float',
          },
          price: {
            type: 'float',
          },
          // product: {},
          variationAttributes: {
            type: 'array',
          },
        },
        name: 'SKU',
        type: 'object',
      },
      {
        def: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        name: 'VariationAttribute',
        type: 'object',
      },
      {
        def: {
          geohash: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          quantity: {
            type: 'float',
          },
          skuId: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          warehouseId: {
            type: 'string',
          },
        },
        name: 'InventoryItem',
        type: 'object',
      },
      {
        def: {
          address: {
            city: {
              type: 'string',
            },
            country: {
              type: 'string',
            },
            postalCode: {
              type: 'string',
            },
            state: {
              type: 'string',
            },
            street1: {
              type: 'string',
            },
            street2: {
              optional: true,
              type: 'string',
            },
          },
          geohash: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        name: 'Warehouse',
        type: 'object',
      },
      {
        def: {
          city: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          postalCode: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          street1: {
            type: 'string',
          },
          street2: {
            optional: true,
            type: 'string',
          },
        },
        name: 'Address',
        type: 'object',
      },
      {
        def: {
          createdAt: {
            type: 'string',
          },
          deliveryAddress: {
            city: {
              type: 'string',
            },
            country: {
              type: 'string',
            },
            postalCode: {
              type: 'string',
            },
            state: {
              type: 'string',
            },
            street1: {
              type: 'string',
            },
            street2: {
              optional: true,
              type: 'string',
            },
          },
          id: {
            type: 'string',
          },
          items: {
            type: 'array',
          },
          paymentDetails: {
            method: {
              type: 'string',
            },
            status: {
              type: 'string',
            },
            transactionId: {
              optional: true,
              type: 'string',
            },
          },
          shippingMethod: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          userId: {
            type: 'string',
          },
        },
        name: 'Order',
        type: 'object',
      },
      {
        def: {
          quantity: {
            type: 'float',
          },
          skuId: {
            type: 'string',
          },
          unitPrice: {
            type: 'float',
          },
        },
        name: 'OrderItem',
        type: 'object',
      },
      {
        def: {
          method: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          transactionId: {
            optional: true,
            type: 'string',
          },
        },
        name: 'PaymentDetails',
        type: 'object',
      },
      {
        def: {
          description: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          ownerId: {
            type: 'string',
          },
          policies: {
            type: 'array',
          },
          ratingAverage: {
            type: 'float',
          },
          ratingCount: {
            type: 'float',
          },
        },
        name: 'Store',
        type: 'object',
      },
      {
        def: {
          description: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
        },
        name: 'StorePolicy',
        type: 'object',
      },
      {
        def: {
          authenticationData: {
            hashedPassword: {
              type: 'string',
            },
          },
          email: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          preferences: {
            currency: {
              type: 'string',
            },
            language: {
              type: 'string',
            },
          },
          userType: {
            type: 'string',
          },
        },
        name: 'User',
        type: 'object',
      },
      {
        def: {
          hashedPassword: {
            type: 'string',
          },
        },
        name: 'AuthenticationData',
        type: 'object',
      },
      {
        def: {
          currency: {
            type: 'string',
          },
          language: {
            type: 'string',
          },
        },
        name: 'UserPreferences',
        type: 'object',
      },
      {
        def: {
          comment: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          productId: {
            type: 'string',
          },
          rating: {
            type: 'float',
          },
          userId: {
            type: 'string',
          },
        },
        name: 'Review',
        type: 'object',
      },
    ]);
  });
});

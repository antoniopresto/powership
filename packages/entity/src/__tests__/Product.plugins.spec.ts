import { createEntity } from '../Entity';

import { setupProductTest } from './setupProductTest';

describe('ProductResolver.plugins', () => {
  const { getMocks } = setupProductTest();

  test('add plugins', async function () {
    const { ProductType, transporter, mockObject } = getMocks();

    const ProductEntity = createEntity({
      indexes: [
        {
          PK: ['.storeId'],
          SK: ['.sku'],
          name: '_id',
        },
      ],
      name: 'Product2',
      transporter,
      type: ProductType,
    }).addHooks((hooks) => {
      hooks.createDefinition.pushMiddleware(function cd(definition) {
        definition.WORKED = { type: 'int' };
      });

      hooks.preParse.pushMiddleware(function pp(context) {
        if (context.op === 'createOne') {
          context.options.item.WORKED = 123;
        }
        return context;
      });
    });

    const created = await ProductEntity.createOne({
      item: mockObject(),
      context: {},
    });

    expect(created).toMatchObject({
      item: {
        WORKED: 123,
      },
    });

    expect(ProductEntity.type.definition).toMatchObject({
      def: {
        WORKED: { type: 'int' },
      },
    });
  });
});

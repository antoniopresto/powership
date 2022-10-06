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
          field: '_id',
          name: 'byStore',
        },
      ],
      name: 'Product2',
      transporter,
      type: ProductType,
    }).addHooks({
      createDefinition(definition) {
        definition.WORKED = { type: 'int' };
      },
      preParse(context) {
        if (context.op === 'createOne') {
          context.options.item.WORKED = 123;
        }
        return context;
      },
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

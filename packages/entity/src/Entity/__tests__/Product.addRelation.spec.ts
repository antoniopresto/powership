import { createEntity } from '../Entity';

import { setupProductTest } from './setupProductTest';

describe('ProductResolver.addRelations', () => {
  const { getMocks } = setupProductTest();

  test('works', async function () {
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
    }).addRelations({
      type: 'string',
      name: 'batata',
      resolve() {
        return 'batata';
      },
    });

    const item = mockObject();

    const created = await ProductEntity.createOne({
      item,
      context: {},
    });

    expect(created).not.toHaveProperty('item.batata');
    expect(created).toHaveProperty('item.createdAt', expect.any(Date)); // entity generated

    expect(ProductEntity.type.definition).toMatchObject({
      def: {
        batata: { type: 'string' },
      },
    });

    const found = await ProductEntity.findOne({
      filter: { id: created.item!.id },
      context: {},
    });

    expect(found.item).toEqual({ ...created.item, batata: 'batata' });
  });
});

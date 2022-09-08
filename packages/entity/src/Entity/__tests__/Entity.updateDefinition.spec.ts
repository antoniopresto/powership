import { Infer } from '@darch/schema';
import { assert, IsExact } from 'conditional-type-checks';

import { setupProductTest } from './setupProductTest';

describe('ProductResolver.edgeType', () => {
  const { getMocks } = setupProductTest();

  test('works', async function () {
    const { ProductEntity, ProductType } = await getMocks();

    const updateDefinition = ProductEntity.updateDefinition;
    type UD = Infer<typeof updateDefinition>;
    assert<IsExact<UD, Partial<Infer<typeof ProductType>>>>(true);

    expect(
      Object.entries(ProductEntity.updateDefinition).map(
        ([key, { optional }]) => [key, optional]
      )
    ).toEqual([
      ['alcoholic', true],
      ['attributes', true],
      ['brand', true],
      ['categories', true],
      ['currentPrice', true],
      ['detailsUrl', true],
      ['html', true],
      ['priceFrom', true],
      ['sellPrice', true],
      ['shortDescription', true],
      ['sku', true],
      ['slug', true],
      ['spotlight', true],
      ['storeId', true],
      ['tags', true],
      ['thumbUrl', true],
      ['title', true],
    ]);
  });
});

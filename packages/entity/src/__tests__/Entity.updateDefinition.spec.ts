import { Infer } from '@backland/schema';
import { assert, IsExact } from 'conditional-type-checks';

import { setupProductTest } from './setupProductTest';

describe('ProductResolver.edgeType', () => {
  const { getMocks } = setupProductTest();

  test('works', async function () {
    const { ProductEntity, ProductType } = await getMocks();

    const updateDefinition = ProductEntity.extendUpdate.def();

    type UD = Infer<{ object: typeof updateDefinition }>;
    assert<IsExact<UD, Partial<Infer<typeof ProductType>>>>(true);

    expect(
      Object.entries(updateDefinition).map(([key, { optional }]) => [
        key,
        optional,
      ])
    ).toEqual([
      ['_v', true],
      ['createdAt', true],
      ['createdBy', true],
      ['id', true],
      ['ulid', true],
      ['updatedAt', true],
      ['updatedBy', true],
      ['_c', true],
      ['_e', true],
      ['_id', true],
      ['_idPK', true],
      ['_idSK', true],
      ['sku', true],
      ['storeId', true],
      ['title', true],
      ['stock', true],
      ['shortDescription', true],
      ['brand', true],
      ['detailsUrl', true],
      ['alcoholic', true],
      ['thumbUrl', true],
      ['breadcrumb', true],
      ['mapOfImages', true],
      ['attributes', true],
      ['currentPrice', true],
      ['priceFrom', true],
      ['sellPrice', true],
      ['dimensions', true],
      ['tags', true],
      ['slug', true],
      ['mainCategoryId', true],
      ['categories', true],
      ['spotlight', true],
      ['html', true],
    ]);
  });
});

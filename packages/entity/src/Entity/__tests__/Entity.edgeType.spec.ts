import { setupProductTest } from './setupProductTest';

describe('ProductResolver.edgeType', () => {
  const { getMocks } = setupProductTest();

  test('without limit', async function () {
    const { ProductEntity } = await getMocks();

    let sut = ProductEntity.edgeType.print();

    expect(sut.slice(0, 4)).toEqual([
      'type Product_Edge {',
      '  cursor: String!',
      '  node: ProductEntity!',
      '}',
    ]);
  });
});

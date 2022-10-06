import { setupProductTest } from './setupProductTest';

describe('ProductResolver.hasMany', () => {
  const { getMocks } = setupProductTest();

  async function mock() {
    const { createOne, ...mocks } = getMocks();
    const created = [
      await createOne({ sku: 'a' }),
      await createOne({ sku: 'b' }),
      await createOne({ sku: 'c' }),
    ];

    return {
      created,
      ...mocks,
    };
  }

  test('without limit', async function () {
    const { created, ProductEntity } = await mock();

    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'ASC',
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[2].id,
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: created[0].id,
    });
  });

  test('with limit ASC', async function () {
    const { created, ProductEntity } = await mock();

    // ASC
    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'ASC',
      first: 1,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[0].id,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: created[0].id,
    });
  });

  test('with limit DESC', async function () {
    const { created, ProductEntity } = await mock();

    // DESC
    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'DESC',
      first: 1,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[2].id,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: created[2].id,
    });
  });

  test('with limit hasMore ASC', async function () {
    const { created, ProductEntity } = await mock();

    // ASC
    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'ASC',
      first: 2,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[1].id,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: created[0].id,
    });
  });

  test('with limit hasMore DESC', async function () {
    const { created, ProductEntity } = await mock();

    // DESC
    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'DESC',
      first: 2,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[1].id,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: created[2].id,
    });
  });

  test('after using cursor from with limit hasMore ASC', async function () {
    const { created, ProductEntity } = await mock();

    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'ASC',
      first: 2,
      context: {},
    });

    sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      after: sut.pageInfo.endCursor,
      sort: 'ASC',
      first: 2,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[2].id,
      hasNextPage: false,
      hasPreviousPage: true, //  because we are using "after" cursor
      startCursor: created[2].id,
    });
  });

  test('after using cursor from with limit hasMore DESC', async function () {
    const { created, ProductEntity } = await mock();

    let sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      sort: 'DESC',
      first: 2,
      context: {},
    });

    sut = await ProductEntity.paginate({
      filter: { storeId: created[0].storeId },
      after: sut.pageInfo.endCursor,
      sort: 'DESC',
      first: 1,
      context: {},
    });

    expect(sut.pageInfo).toEqual({
      endCursor: created[0].id,
      hasNextPage: false,
      hasPreviousPage: true, // wrong because we are using "after" cursor to infer hasPreviousPage, but performance worth it
      startCursor: created[0].id,
    });
  });
});

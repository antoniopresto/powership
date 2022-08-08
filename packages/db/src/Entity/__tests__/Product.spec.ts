import { createType } from '@darch/schema';
import { ULID_REGEX } from '@darch/schema/lib/fields/UlidField';

import { MongoTransporter } from '../../Mongo/MongoTransporter';
import { AppMock, createAppMock } from '../../Mongo/__tests__/createAppMock';
import { mountID } from '../../Transporter/CollectionIndex';

import { createEntity } from '../Entity';

jest.setTimeout(9999999);
describe('Product', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  function _getEntity() {
    const type = createType('Product', {
      object: {
        title: { string: { min: 2 } },
        storeId: { ID: { autoCreate: false } },
        SKU: { string: { min: 3 } },
        category: 'string?',
      },
    });

    return createEntity({
      transporter,
      name: 'Product',
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'],
          SK: ['.ulid'],
        },
        {
          name: 'byStoreAndSKU',
          field: '_id1',
          PK: ['.storeId'],
          SK: ['.SKU'],
        },
      ],
      type,
    });
  }

  beforeEach(async function () {
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

  it('create entity', async () => {
    const entity = _getEntity();
    expect(typeof entity).toEqual('object');
  });

  it('TS distributed filter types', async () => {
    const entity = createEntity({
      transporter,
      name: 'Product',
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'],
          SK: ['.ulid'],
        },
        {
          name: 'byStoreAndSKU',
          field: '_id1',
          PK: ['.category'],
          SK: ['.storeId'],
        },
      ],
      type: createType('Product', {
        object: {
          title: { string: { min: 2 } },
          storeId: 'ID',
          SKU: { string: { min: 3 } },
        },
      }),
    });

    await entity.findOne({ filter: { storeId: '123' }, context: {} });

    await entity.findOne({
      filter: { category: '456' },
      context: {},
    });
  });

  it('create', async () => {
    const entity = _getEntity();

    let product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({ item: null });

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
      context: {},
    });

    product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: expect.stringMatching(/^product#store1↠/),
        _id1: expect.stringMatching(/^product#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        createdBy: null,
      },
    });
  });

  it('byStore', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
      context: {},
    });

    const product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: expect.stringMatching(/^product#store1↠/),
        _id1: expect.stringMatching(/^product#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        createdBy: null,
      },
    });
  });

  it('findManyByStoreAndSKU', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
      context: {},
    });

    const product = await entity.findManyByStoreAndSKU({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product.items).toHaveLength(2);

    expect(entity.findManyByStoreAndSKU.indexInfo).toEqual([
      {
        PK: {
          definition: ['.storeId'],
          requiredFields: ['storeId'],
        },
        SK: {
          definition: ['.SKU'],
          requiredFields: ['SKU'],
        },
        entity: 'product',
        index: expect.any(Object),
      },
    ]);
  });

  it('findById', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
      context: {},
    });

    const id1 = mountID({
      PK: 'store1',
      SK: 'sku_batata',
      entity: 'product',
    });

    const sut = await entity.findById({ id: id1, context: {} });

    expect(sut.item).toMatchObject({
      _id: expect.stringMatching(/product#store1↠01/),
    });
  });

  it('findBySKU', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'ORANGE',
        SKU: 'sku_ORANGE',
        storeId: 'store1',
      },
      context: {},
    });

    await entity.createOne({
      item: {
        title: 'APPLE',
        SKU: 'sku_APPLE',
        storeId: 'store1',
      },
      context: {},
    });

    const apple = await entity.findOne({
      filter: { storeId: 'store1', SKU: 'sku_APPLE' },
      context: {},
    });

    const orange = await entity.findOneByStoreAndSKU({
      filter: { storeId: 'store1', SKU: 'sku_ORANGE' },
      context: {},
    });

    expect(orange.item).toMatchObject({
      _id1: 'product#store1↠sku_ORANGE',
    });

    expect(apple.item).toMatchObject({
      _id1: 'product#store1↠sku_APPLE',
    });
  });

  it('update', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
      context: {},
    });

    await expect(
      entity.updateOne({
        filter: { SKU: 'sku_batata', storeId: 'store1' },
        update: { $set: { SKU: 'sku_batata2', storeId: 'store12' } },
        context: {
          userId() {
            return 'user1';
          },
        },
      })
    ).rejects.toThrow(
      [
        'The field "SKU" cannot be updated as it is used in index.',
        'The field "storeId" cannot be updated as it is used in index.',
      ].join('\n')
    );

    const update = await entity.updateOne({
      filter: { SKU: 'sku_batata', storeId: 'store1' },
      update: { $set: { category: 'updated', category_2: 'added' } },
      context: {
        userId() {
          return 'user1';
        },
      },
    });

    expect(update).toMatchObject({
      created: false,
      item: {
        SKU: 'sku_batata',
        updatedAt: expect.any(Date),
        updatedBy: 'user1',
      },
      updated: true,
    });
  });

  it('delete', async () => {
    const entity = _getEntity();

    const update = await entity.updateOne({
      upsert: true,
      filter: { SKU: 'sku_batata', storeId: 'store1' },
      update: {
        $set: {
          category: 'updated',
          category_2: 'added',
          SKU: 'sku_batata',
          storeId: 'store1',
        },
      },
      context: {
        userId() {
          return 'user1';
        },
      },
    });

    expect(update).toEqual({});
  });
});

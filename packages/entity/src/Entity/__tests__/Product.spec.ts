import { createType, ObjectType } from '@darch/schema';
import { ULID_REGEX } from '@darch/schema/lib/fields/UlidField';

import { MongoTransporter } from '../../Mongo';
import { AppMock, createAppMock } from '../../Mongo/__tests__/createAppMock';
import { mountID } from '../../Transporter';
import { createEntity } from '../Entity';
import { createEntityDefaultFields } from '../EntityInterfaces';

jest.setTimeout(9999999);
describe('Product', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  const type = createType('Product', {
    object: {
      title: { string: { min: 2 } },
      storeId: { ID: { autoCreate: false } },
      SKU: { string: { min: 3 } },
      category: 'string?',
    },
  });

  const _getOptions = () => {
    return {
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
    } as const;
  };

  function _getEntity() {
    return createEntity(_getOptions());
  }

  beforeEach(async function () {
    await ObjectType.reset();
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

  test('properties', () => {
    const entity = _getEntity();
    const options = _getOptions();

    expect(entity.name).toEqual('Product');
    expect(entity.indexes).toEqual(options.indexes);
    expect(entity.transporter).toEqual(options.transporter);
    expect(entity.indexGraphTypes).toMatchObject({});
    expect(entity.loaders).toMatchObject({
      updateOneByStoreAndSKU: expect.any(Function),
    });
    expect(typeof entity.parse).toEqual('function');
    expect(entity.originType).toEqual(options.type);
    const { __dschm__, ...def } = options.type.definition.def as any;
    expect(entity.inputDefinition).toEqual(def);

    expect(Object.keys(entity.type.definition.def).sort()).toEqual(
      Object.keys({
        ...createEntityDefaultFields(),
        ...options.type.definition.def,
      }).sort()
    );
  });

  it('create entity', async () => {
    const entity = _getEntity();
    expect(typeof entity).toEqual('object');
  });

  it('TS distributed filter types', async () => {
    const type = createType('Product', {
      object: {
        title: { string: { min: 2 } },
        storeId: 'ID',
        SKU: { string: { min: 3 } },
        category: 'string?',
      },
    });

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
      type,
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
        id: expect.any(String),
        _id: expect.stringMatching(/^product:_id#store1↠/),
        _id1: expect.stringMatching(/^product:_id1#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
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
        _id: expect.stringMatching(/^product:_id#store1↠/),
        _id1: expect.stringMatching(/^product:_id1#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        id: expect.any(String),
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
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
      entity: 'product',
      PK: 'store1',
      SK: 'sku_batata',
      indexField: '_id1',
    });

    const sut = await entity.findById({ id: id1, context: {} });

    expect(sut.item).toMatchObject({
      _id: expect.stringMatching(/_id#store1↠01/),
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
      _id1: 'product:_id1#store1↠sku_ORANGE',
    });

    expect(apple.item).toMatchObject({
      _id1: 'product:_id1#store1↠sku_APPLE',
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
        'Use $setOnInsert when updating using {"upsert": true}',
        'The field "storeId" cannot be updated as it is used in index.',
        'Use $setOnInsert when updating using {"upsert": true}',
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

  it('upsert', async () => {
    const entity = _getEntity();

    const update = await entity.updateOne({
      upsert: true,
      filter: { SKU: 'sku_batata', storeId: 'store1' },
      update: {
        $set: {
          category: 'updated',
          category_2: 'added',
        },
        $setOnInsert: {
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

    expect(update).toMatchObject({
      created: true,
      item: {
        SKU: 'sku_batata',
        _id: expect.stringMatching(/product:_id#store1↠01.*/),
        _id1: 'product:_id1#store1↠sku_batata',
        _id1PK: 'store1',
        _id1SK: 'sku_batata',
        _idPK: 'store1',
        createdBy: 'user1',
        storeId: 'store1',
        category: 'updated',
        category_2: 'added',
        ulid: expect.stringMatching(ULID_REGEX),
        updatedAt: expect.any(Date),
        updatedBy: 'user1',
      },
      updated: false,
    });
  });

  it('delete', async () => {
    const entity = _getEntity();

    const created = await entity.createOne({
      item: {
        title: 'ORANGES BAHIA',
        SKU: 'sku_ORANGE',
        category: 'fruits',
        storeId: 'store',
      },
      context: {
        userId() {
          return 'CREATOR_558';
        },
      },
    });

    const id = created.item!.id;

    let found = await entity.findById({ id, context: {} });

    expect(found).toMatchObject({
      item: {},
    });

    const deletedItem = await entity.deleteOne({
      filter: { id: created.item!.id },
      context: {},
    });

    expect(deletedItem).toMatchObject({
      item: {
        id,
      },
    });

    found = await entity.findById({ id, context: {} });

    expect(found).toMatchObject({ item: null });
  });

  describe('GraphQL utils', () => {
    const entity = _getEntity();

    test('indexGraphTypes', () => {
      expect(entity.indexGraphTypes.byStoreAndSKU.id).toEqual(
        'ProductByStoreAndSKUIndex'
      );
    });

    test('toFilterFields', async () => {
      expect(entity.findManyByStoreAndSKU.filterDef).toEqual({
        SKU: {
          def: {
            min: 3,
          },
          list: false,
          optional: true,
          type: 'string',
        },
        id: {
          optional: true,
          type: 'ID',
        },
        storeId: {
          def: {
            autoCreate: false,
          },
          list: false,
          optional: true,
          type: 'ID',
        },
      });

      expect(entity.findOne.filterDef).toEqual({
        SKU: {
          def: {
            min: 3,
          },
          list: false,
          optional: true,
          type: 'string',
        },
        id: {
          optional: true,
          type: 'ID',
        },
        storeId: {
          def: {
            autoCreate: false,
          },
          list: false,
          optional: true,
          type: 'ID',
        },
        ulid: {
          optional: true,
          type: 'ulid',
        },
      });

      // await Darch.writeTypes();
    });
  });
});

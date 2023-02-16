import { MongoTransporter } from '@swind/mongo';
import { AppMock, createAppMock } from '@swind/mongo/lib/test-utils';
import { createType, ObjectType, parseField } from '@swind/schema';
import { ULID_REGEX } from '@swind/schema/lib/fields/UlidField';

import { createEntity } from '../Entity';

describe('Product', () => {
  const { getEntity, getOptions, after, before } = mokit();

  beforeEach(before);
  afterEach(after);

  test('properties', () => {
    const entity = getEntity();
    const options = getOptions();

    expect(entity.name).toEqual('Product');
    expect(entity.indexes).toEqual(options.indexes);
    expect(entity.transporter).toEqual(options.transporter);
    expect(entity.indexGraphTypes).toMatchObject({});
    expect(typeof entity.parse).toEqual('function');
    expect(entity.originType).toEqual(options.type);
    const { __dschm__, ...def } = parseField(options.type.definition)
      .def as any;

    expect(entity.extendInput.def()).toEqual(def);

    expect(Object.keys(parseField(entity.type.definition).def).sort()).toEqual([
      'SKU',
      '__dschm__',
      '_c',
      '_e',
      '_id',
      '_id1PK',
      '_id1SK',
      '_idPK',
      '_idSK',
      '_v',
      'category',
      'createdAt',
      'createdBy',
      'id',
      'storeId',
      'title',
      'ulid',
      'updatedAt',
      'updatedBy',
    ]);
  });

  it('create entity', async () => {
    const entity = getEntity();
    expect(typeof entity).toEqual('object');
  });

  it('TS distributed filter types', async () => {
    const { transporter } = getEntity();

    const type = createType('Product2', {
      object: {
        title: { string: { min: 2 } },
        storeId: 'ID',
        SKU: { string: { min: 3 } },
        category: 'string?',
      },
    });

    const entity = createEntity({
      transporter,
      name: 'Product2',
      indexes: [
        {
          name: '_id',
          PK: ['.storeId'],
          SK: ['.ulid'],
        },
        {
          name: '_id1',
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
    const entity = getEntity();

    let product = await entity.findOne({
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

    product = await entity.findOne({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toMatchObject({
      item: {
        SKU: 'sku0',
        id: expect.any(String),
        _c: expect.any(String),
        _e: 'product',
        _v: expect.stringMatching(ULID_REGEX),
        _id: expect.stringMatching(/^product⋮_id⋮store1⋮/),
        _id1: expect.stringMatching(/^product⋮_id1⋮store1⋮sku0/),
        _id1PK: 'product⋮_id1⋮store1⋮',
        _id1SK: 'sku0',
        _idPK: 'product⋮_id⋮store1⋮',
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
    const entity = getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
      context: {},
    });

    const product = await entity.findOne({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toMatchObject({
      item: {
        SKU: 'sku0',
        _e: 'product',
        _v: expect.stringMatching(ULID_REGEX),
        _id: expect.stringMatching(/^product⋮_id⋮store1⋮/),
        _id1: expect.stringMatching(/^product⋮_id1⋮store1⋮sku0/),
        _id1PK: 'product⋮_id1⋮store1⋮',
        _id1SK: 'sku0',
        _idPK: 'product⋮_id⋮store1⋮',
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

  it('findMany', async () => {
    const entity = getEntity();

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

    const product = await entity.findMany({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product.items).toHaveLength(2);

    expect(entity.findOne.indexInfo).toMatchObject([
      {
        PK: {
          definition: ['.storeId'],
          parsed: {
            PK_SK: 'PK',
            foundParts: [],
            indexField: '_id',
            invalidFields: [
              {
                details: 'Expected string or number, found undefined.',
                documentField: '.storeId',
                indexField: '_id',
                indexPartKind: 'PK',
                reason: 'missing',
              },
            ],
            isFilter: false,
            requiredFields: ['storeId'],
            valid: false,
          },
          requiredFields: ['storeId'],
        },
        SK: {
          definition: ['.ulid'],
          parsed: {
            PK_SK: 'SK',
            foundParts: [],
            indexField: '_id',
            invalidFields: [
              {
                details: 'Expected string or number, found undefined.',
                documentField: '.ulid',
                indexField: '_id',
                indexPartKind: 'SK',
                reason: 'missing',
              },
            ],
            isFilter: false,
            requiredFields: ['ulid'],
            valid: false,
          },
          requiredFields: ['ulid'],
        },
        entity: 'product',
        index: {
          PK: ['.storeId'],
          SK: ['.ulid'],
          name: '_id',
        },
      },
      {
        PK: {
          definition: ['.storeId'],
          parsed: {
            PK_SK: 'PK',
            foundParts: [],
            indexField: '_id1',
            invalidFields: [
              {
                details: 'Expected string or number, found undefined.',
                documentField: '.storeId',
                indexField: '_id1',
                indexPartKind: 'PK',
                reason: 'missing',
              },
            ],
            isFilter: false,
            requiredFields: ['storeId'],
            valid: false,
          },
          requiredFields: ['storeId'],
        },
        SK: {
          definition: ['.SKU'],
          parsed: {
            PK_SK: 'SK',
            foundParts: [],
            indexField: '_id1',
            invalidFields: [
              {
                details: 'Expected string or number, found undefined.',
                documentField: '.SKU',
                indexField: '_id1',
                indexPartKind: 'SK',
                reason: 'missing',
              },
            ],
            isFilter: false,
            requiredFields: ['SKU'],
            valid: false,
          },
          requiredFields: ['SKU'],
        },
        entity: 'product',
        index: {
          PK: ['.storeId'],
          SK: ['.SKU'],
          name: '_id1',
        },
      },
    ]);
  });

  it('findById', async () => {
    const entity = getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    const created = await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
      context: {},
    });

    const cursor = created.item!.id;

    const sut = await entity.findById({ id: cursor, context: {} });

    expect(sut.item).toMatchObject({
      _id: expect.stringMatching(/^product⋮_id⋮store1⋮01/),
    });
  });

  it('findOne', async () => {
    const entity = getEntity();

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

    const orange = await entity.findOne({
      filter: { storeId: 'store1', SKU: 'sku_ORANGE' },
      context: {},
    });

    expect(orange.item).toMatchObject({
      _id1: 'product⋮_id1⋮store1⋮sku_ORANGE⋮',
    });

    expect(apple.item).toMatchObject({
      _id1: 'product⋮_id1⋮store1⋮sku_APPLE⋮',
    });
  });

  it('update', async () => {
    const entity = getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    const created = await entity.createOne({
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
    ).rejects.toThrow('Use $setOnInsert when updating using {"upsert": true}');

    const update = await entity.updateOne({
      filter: { SKU: 'sku_batata', storeId: 'store1' },
      update: { $set: { category: 'updated', category_2: 'added' } },
      context: {
        userId() {
          return 'user1';
        },
      },
    } as any);

    expect(update).toMatchObject({
      created: false,
      item: {
        SKU: 'sku_batata',
        _v: expect.stringMatching(ULID_REGEX),
        updatedAt: expect.any(Date),
        updatedBy: 'user1',
      },
      updated: true,
    });

    expect(created.item!._v).not.toEqual(update.item!._v);
  });

  xit('upsert', async () => {
    const entity = getEntity();

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
          title: 'batata',
        },
      },
      context: {
        userId() {
          return 'user1';
        },
      },
    } as any);

    expect(update).toMatchObject({
      created: true,
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        _id: expect.stringMatching(/product⋮_id⋮store1⋮01.*/),
        _id1: 'product⋮_id1⋮store1⋮sku_batata',
        _id1PK: 'product⋮_id⋮store1',
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
    const entity = getEntity();

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
});

describe('Product GraphQL utils', () => {
  const { getEntity, after, before } = mokit();
  beforeEach(before);
  afterEach(after);

  test('indexGraphTypes', () => {
    const entity = getEntity();
    expect(entity.indexGraphTypes._id.clone((it) => it.def())).toEqual({
      storeId: expect.objectContaining({ type: 'ID' }),
      ulid: expect.objectContaining({ type: 'ulid' }),
    });
  });

  test('toFilterFields', async () => {
    const entity = getEntity();
    expect(entity.findOne.filterDef.def()).toEqual({
      SKU: {
        def: {
          min: 3,
        },
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
        optional: true,
        type: 'ID',
      },
      ulid: {
        optional: true,
        type: 'ulid',
      },
    });
  });
});

function mokit() {
  const res = {
    mockApp: {} as AppMock,
    transporter: {} as MongoTransporter,
    getOptions() {
      return {
        transporter: res.transporter,
        name: 'Product',
        indexes: [
          {
            name: '_id',
            PK: ['.storeId'],
            SK: ['.ulid'],
          },
          {
            name: '_id1',
            PK: ['.storeId'],
            SK: ['.SKU'],
          },
        ],
        type,
      } as const;
    },
    getEntity() {
      return createEntity(res.getOptions());
    },
    async before() {
      await ObjectType.reset();
      res.mockApp = createAppMock();
      await res.mockApp.start();

      res.transporter = new MongoTransporter({
        collection: 'temp1',
        client: res.mockApp.client!,
      });
    },
    async after() {
      await res.mockApp.reset();
    },
  };

  const type = createType('Product', {
    object: {
      title: { string: { min: 2 } },
      storeId: { ID: { autoCreate: false } },
      SKU: { string: { min: 3 } },
      category: 'string?',
    },
  });

  return res;
}

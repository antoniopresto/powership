import { AppMock, createAppMock } from '../test-utils';
import { MongoTransporter } from '../MongoTransporter';
import { AnyCollectionIndexConfig } from '@backland/transporter';
import { encodeNumber, ulid } from '@backland/utils';
import { createObjectType, objectMock } from '@backland/schema';

describe('uniqIds', () => {
  // afterEach();
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  const object = createObjectType({
    PKV: 'string',
    SKV: 'int',
    ulid: { ulid: { autoCreate: true } },
  });

  function mock_it() {
    return objectMock(object.definition);
  }

  const indexConfig: AnyCollectionIndexConfig = {
    entity: 'entity_foo',
    indexes: [
      {
        //
        name: 'second',
        field: '_id2',
        PK: ['.PKV'],
        SK: ['.SKV'],
      },
      {
        //
        name: 'first',
        field: '_id',
        PK: ['.ulid'],
      },
    ],
  };

  function _put(
    config: Omit<
      Parameters<MongoTransporter['createOne']>[0],
      'indexConfig' | 'context'
    >
  ) {
    return transporter.createOne({
      context: {},
      indexConfig,
      ...config,
    });
  }

  function _get(
    config: Omit<
      Parameters<MongoTransporter['findById']>[0],
      'indexConfig' | 'context'
    >
  ) {
    return transporter.findById({
      context: {},
      indexConfig,
      ...config,
    });
  }

  beforeEach(async function () {
    mockApp = await createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  test('uniq', async () => {
    const m1 = mock_it();
    const m2 = mock_it();

    const a = await _put({
      item: m1,
    });

    const b = await _put({
      item: { ...m1, ulid: ulid() },
    });

    const c = await _put({
      item: m2,
    });

    expect(a.item).toEqual({
      ...m1,
      _id: `entity_foo:_id#${m1.ulid}↠`,
      _idPK: m1.ulid,
      _idSK: '',
      _id2: expect.stringMatching(`entity_foo:_id2#${m1.PKV}`),
      _id2PK: m1.PKV,
      _id2SK: encodeNumber(m1.SKV),
      id: expect.any(String),
    });

    expect(b).toEqual({
      created: false,
      error: expect.stringMatching(
        "Can't create two documents with same index. Existing document found with condition: {"
      ),
      item: null,
      updated: false,
    });

    expect(c.item).toMatchObject({ PKV: m2.PKV });
  });

  test('uniq replace', async () => {
    const m1 = mock_it();
    const m2 = mock_it();

    const a = await _put({
      item: m1,
    });

    const b = await _put({
      item: { ...m1, SKV: 'newnewnew' },
      replace: true,
    });

    const c = await _put({
      item: m2,
    });

    const m1_match = {
      ...m1,
      _id: `entity_foo:_id#${m1.ulid}↠`,
      _idPK: m1.ulid,
      _idSK: '',
      _id2: expect.stringMatching(`entity_foo:_id2#${m1.PKV}`),
      _id2PK: m1.PKV,
      _id2SK: encodeNumber(m1.SKV),
      id: expect.any(String),
    };

    expect(a.item).toEqual(m1_match);

    expect(b).toEqual({
      created: false,
      error: null,
      item: { ...m1_match, _id2SK: 'newnewnew', SKV: 'newnewnew' },
      updated: true,
    });

    expect(b.item!.id).not.toBe(a.item!.id);

    const old = await _get({ id: a.item!.id });
    expect(old.item).toBe(null);

    expect(c.item).toMatchObject({ PKV: m2.PKV });
  });

  test('uniq with condition', async () => {
    const m1 = mock_it();
    const m2 = mock_it();

    const a = await _put({
      item: m1,
    });

    const b = await _put({
      item: { ...m1, SKV: 'newnewnew' },
      condition: { SKV: { $ne: a.item!.SKV } },
    });

    const c = await _put({
      item: m2,
    });

    const m1_match = {
      ...m1,
      _id: `entity_foo:_id#${m1.ulid}↠`,
      _idPK: m1.ulid,
      _idSK: '',
      _id2: expect.stringMatching(`entity_foo:_id2#${m1.PKV}`),
      _id2PK: m1.PKV,
      _id2SK: encodeNumber(m1.SKV),
      id: expect.any(String),
    };

    expect(a.item).toEqual(m1_match);

    expect(b).toEqual({
      created: false,
      error: expect.stringMatching('E11000 duplicate key error collection'),
      item: null,
      updated: false,
    });

    const old = await _get({ id: a.item!.id });
    expect(old.item).toBeTruthy();

    expect(c.item).toMatchObject({ PKV: m2.PKV });
  });

  test('uniq replace with condition', async () => {
    const m1 = mock_it();
    const m2 = mock_it();

    const a = await _put({
      item: m1,
    });

    const b = await _put({
      item: { ...m1, SKV: 'newnewnew' },
      condition: { SKV: { $ne: a.item!.SKV } },
      replace: true,
    });

    const c = await _put({
      item: m2,
    });

    const m1_match = {
      ...m1,
      _id: `entity_foo:_id#${m1.ulid}↠`,
      _idPK: m1.ulid,
      _idSK: '',
      _id2: expect.stringMatching(`entity_foo:_id2#${m1.PKV}`),
      _id2PK: m1.PKV,
      _id2SK: encodeNumber(m1.SKV),
      id: expect.any(String),
    };

    expect(a.item).toEqual(m1_match);

    expect(b).toEqual({
      created: false,
      error: expect.stringMatching('E11000 duplicate key error collection'),
      item: null,
      updated: false,
    });

    const old = await _get({ id: a.item!.id });
    expect(old.item).toBeTruthy();

    expect(c.item).toMatchObject({ PKV: m2.PKV });
  });
});

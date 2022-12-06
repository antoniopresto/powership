import { mockApp } from '../../__tests__/mockApp';
import { createType, ObjectType } from '@backland/schema';
import { createEntity } from '../../Entity';
import { assert, IsExact } from 'conditional-type-checks';
import { EntityDefaultFields } from '../../EntityInterfaces';
import { ulid } from '@backland/utils';

describe('Entity.indexRelations', () => {
  afterEach(ObjectType.reset);
  beforeEach(ObjectType.reset);

  const mock = mockApp();

  function _getMock() {
    const accessType = createType('AccessType', {
      object: {
        accountId: 'string',
        kind: 'string',
        value: 'string',
      },
    });

    const accessEntity = createEntity({
      name: 'AccessType',
      type: accessType,
      transporter: mock.transporter,
      indexes: [
        {
          name: 'accountId',
          PK: ['.accountId'],
          field: '_id',
          relatedTo: 'Account',
        },
      ],
    });

    const accountType = createType('Account', {
      object: {
        accountId: 'string',
        username: 'string',
      },
    });

    const accountEntity = createEntity({
      name: 'Account',
      type: accountType,
      transporter: mock.transporter,
      indexes: [
        {
          name: 'accountId',
          PK: ['.accountId'],
          field: '_id',
        },
      ],
    }).addIndexRelation('access', accessEntity);

    return { accessType, accessEntity, accountEntity, accountType };
  }

  test('validate PK to be equal in relation', async () => {
    const accessType = createType('AccessType', {
      object: {
        accountId123: 'string',
        kind: 'string',
        value: 'string',
      },
    });

    const accessEntity = createEntity({
      name: 'AccessType',
      type: accessType,
      transporter: mock.transporter,
      indexes: [
        {
          name: 'accountId',
          PK: ['.accountId123'],
          field: '_id',
          relatedTo: 'Account',
        },
      ],
    });

    const accountType = createType('Account', {
      object: {
        accountId: 'string',
        username: 'string',
        access: { array: { of: accessType, min: 1 } },
      },
    });

    expect(() => {
      const ett = createEntity({
        name: 'Account',
        type: accountType,
        transporter: mock.transporter,
        indexes: [
          {
            name: 'accountId',
            PK: ['.accountId'],
            field: '_id',
          },
        ],
      }).addIndexRelation('access', accessEntity);

      ett.name; // touch
    }).toThrow(
      'Found different index configuration in relation "access". The index "_id" is different between the entities "Account" and "AccessType"'
    );
  });

  test('create related entity doc', async () => {
    const { accountEntity } = _getMock();

    const created = await accountEntity.createOne({
      item: {
        accountId: '123',
        username: 'antonio',
        access: [
          {
            accountId: '123',
            kind: 'email',
            value: 'antonio@example.com',
          },
        ],
      },
      context: {},
    });

    type P = ReturnType<typeof accountEntity.parse>;
    type T = NonNullable<typeof created.item>;

    type ExpectedInput = {
      accountId: string;
      username: string;
      access: {
        accountId: string;
        kind: string;
        value: string;
      }[];
    };

    type ExpectedOutput = EntityDefaultFields &
      Omit<ExpectedInput, 'access'> & { access: T['access'] };

    assert<IsExact<P, T>>(true);
    assert<IsExact<ExpectedOutput, T>>(true);

    expect(created.item).toMatchObject({
      _id: 'account:_id#123»',
      _idPK: 'account:_id#123»',
      _idSK: '',
      access: [
        {
          accountId: '123',
          kind: 'email',
          value: 'antonio@example.com',
          _v: expect.any(String),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ],
      accountId: '123',
      username: 'antonio',
    });
  });

  test('create uniq related entity doc', async () => {
    const accessType = createType('AccessType', {
      object: {
        accountId: 'ID',
        meta: 'record?',
        verified: 'boolean?',

        data: {
          union: [
            {
              object: {
                kind: { literal: 'email' },
                value: 'email',
              },
            },

            {
              object: {
                kind: { literal: 'phone' },
                value: 'phone',
              },
            },
          ],
        },
      },
    } as const);

    const accessEntity = createEntity({
      name: 'AccessType',
      type: accessType,
      transporter: mock.transporter,
      indexes: [
        {
          PK: ['.accountId'],
          SK: ['.data.kind', '.ulid'],
          field: '_id',
          name: 'accountId',
          relatedTo: 'Account',
        },
        {
          PK: ['.data.kind', '.data.value'],
          field: '_id2',
          name: 'kind_value',
        },
      ],
    });

    const accountType = createType('Account', {
      object: {
        accountId: 'string',
        username: 'string',
      },
    });

    const accountEntity = createEntity({
      name: 'Account',
      type: accountType,
      transporter: mock.transporter,
      indexes: [
        {
          name: 'accountId',
          PK: ['.accountId'],
          field: '_id',
        },
        {
          PK: ['.username'],
          field: '_id2',
          name: 'username',
        },
      ],
    }).addIndexRelation('access', accessEntity);

    const accountId_a = ulid();

    const a = await accountEntity.createOne({
      item: {
        accountId: accountId_a,
        username: 'antonio',
        access: [
          {
            accountId: accountId_a,
            data: {
              value: 'antonio@example.com',
              kind: 'email',
            },
          },
        ],
      },
    });

    expect(a).toMatchObject({
      error: null,
      item: expect.any(Object),
    });

    const accountId_b = ulid();

    const same_email_diff_username = await accountEntity.createOne({
      item: {
        accountId: accountId_b,
        username: 'rafaela',
        access: [
          {
            accountId: accountId_b,
            data: {
              value: 'antonio@example.com',
              kind: 'email',
            },
          },
        ],
      },
    });

    expect(same_email_diff_username).toEqual({
      created: false,
      error: expect.stringMatching(
        'accesstype:_id2#email#antonio@example.com»'
      ),
      item: null,
      updated: false,
    });

    const diff_email_same_username = await accountEntity.createOne({
      item: {
        accountId: accountId_b,
        username: 'antonio',
        access: [
          {
            accountId: accountId_b,
            data: {
              value: 'rafaela@example.com',
              kind: 'email',
            },
          },
        ],
      },
    });

    expect(diff_email_same_username).toEqual({
      created: false,
      error: expect.stringMatching('account:_id2#antonio»'),
      item: null,
      updated: false,
    });

    const accounts = await mock.transporter
      .getCollection({})
      .find({})
      .toArray();

    expect(accounts).toHaveLength(2); // first account, first access
  });

  test('findMany', async () => {
    const { accountEntity } = _getMock();

    const context = {};

    const created = await Promise.all([
      accountEntity.createOne({
        item: {
          accountId: '123',
          username: 'antonio',
          access: [
            {
              accountId: '123',
              kind: 'email',
              value: 'antonio@example.com',
            },
          ],
        },
        context,
      }),
      accountEntity.createOne({
        item: {
          accountId: '456',
          username: 'rafaela',
          access: [
            {
              accountId: '456',
              kind: 'email',
              value: 'rafaela@example.com',
            },
          ],
        },
        context,
      }),
    ]);

    expect(created).toBeTruthy();

    const found = await accountEntity.findMany({
      filter: { accountId: { $gte: '1' } },
      context,
    });

    expect(found.items).toEqual([
      {
        _e: 'account',
        _id: 'account:_id#123»',
        _idPK: 'account:_id#123»',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _e: 'accesstype',
            _id: 'account:_id#123»accesstype«',
            _idPK: 'account:_id#123»accesstype«',
            _idSK: '',
            _rt: ['account:_id#123»'],
            _v: expect.any(String),
            accountId: '123',
            createdAt: expect.any(Date),
            id: expect.any(String),
            kind: 'email',
            ulid: expect.any(String),
            updatedAt: expect.any(Date),
            value: 'antonio@example.com',
          },
        ],
        accountId: '123',
        createdAt: expect.any(Date),
        id: expect.any(String),
        ulid: expect.any(String),
        updatedAt: expect.any(Date),
        username: 'antonio',
      },
      {
        _e: 'account',
        _id: 'account:_id#456»',
        _idPK: 'account:_id#456»',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _e: 'accesstype',
            _rt: ['account:_id#456»'],
            _id: 'account:_id#456»accesstype«',
            _idPK: 'account:_id#456»accesstype«',
            _idSK: '',
            _v: expect.any(String),
            accountId: '456',
            createdAt: expect.any(Date),
            id: expect.any(String),
            kind: 'email',
            ulid: expect.any(String),
            updatedAt: expect.any(Date),
            value: 'rafaela@example.com',
          },
        ],
        accountId: '456',
        createdAt: expect.any(Date),
        id: expect.any(String),
        ulid: expect.any(String),
        updatedAt: expect.any(Date),
        username: 'rafaela',
      },
    ]);
  });

  test('findOne', async () => {
    const { accountEntity } = _getMock();

    const context = {};

    const created = await Promise.all([
      accountEntity.createOne({
        item: {
          accountId: '123',
          username: 'antonio',
          access: [
            {
              accountId: '123',
              kind: 'email',
              value: 'antonio@example.com',
            },
          ],
        },
        context,
      }),
      accountEntity.createOne({
        item: {
          accountId: '456',
          username: 'rafaela',
          access: [
            {
              accountId: '456',
              kind: 'email',
              value: 'rafaela@example.com',
            },
          ],
        },
        context,
      }),
    ]);

    expect(created).toBeTruthy();

    const found = await accountEntity.findMany({
      filter: { accountId: '123' },
      context,
    });

    expect(found.items).toEqual([
      {
        _id: 'account:_id#123»',
        _e: 'account',
        _idPK: 'account:_id#123»',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _e: 'accesstype',
            _id: 'account:_id#123»accesstype«',
            _idPK: 'account:_id#123»accesstype«',
            _rt: ['account:_id#123»'],
            _idSK: '',
            _v: expect.any(String),
            accountId: '123',
            createdAt: expect.any(Date),
            id: expect.any(String),
            kind: 'email',
            ulid: expect.any(String),
            updatedAt: expect.any(Date),
            value: 'antonio@example.com',
          },
        ],
        accountId: '123',
        createdAt: expect.any(Date),
        id: expect.any(String),
        ulid: expect.any(String),
        updatedAt: expect.any(Date),
        username: 'antonio',
      },
    ]);
  });
});

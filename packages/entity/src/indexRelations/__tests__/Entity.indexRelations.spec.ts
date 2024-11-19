import { createType, resetTypesCache } from '@powership/schema';
import { ulid } from '@powership/utils';
import { assert, IsExact } from 'conditional-type-checks';

import { createEntity } from '../../Entity';
import { EntityDocumentBase } from '../../EntityInterfaces';
import { mockApp } from '../../__tests__/mockApp';

describe('Entity.indexRelations', () => {
  afterEach(resetTypesCache);
  beforeEach(resetTypesCache);

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
          PK: ['.accountId'],
          name: '_id',
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
          PK: ['.accountId'],
          name: '_id',
        },
      ],
    }).addIndexRelation('access', accessEntity);

    return { accessType, accessEntity, accountEntity, accountType };
  }

  test('format index fields before create', async () => {
    const unformatted = '+55 (11) 90000-0000';

    const PhoneThing = createType('PhoneThing', {
      object: {
        phone: 'phone',
      },
    });

    const PhoneThingEntity = createEntity({
      name: 'PhoneThing',
      type: PhoneThing,
      transporter: mock.transporter,
      indexes: [
        {
          PK: ['.phone'],
          name: '_id',
        },
      ],
    });

    const created = await PhoneThingEntity.createOne({
      item: {
        phone: unformatted,
      },
      context: {},
    });

    expect(created.item).toEqual(
      expect.objectContaining({
        _id: 'phonething⋮_id⋮+5511900000000⋮⋮',
        phone: '+5511900000000',
      })
    );
  });

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
          PK: ['.accountId123'],
          name: '_id',
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
            PK: ['.accountId'],
            name: '_id',
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

    type ExpectedOutput = EntityDocumentBase &
      Omit<ExpectedInput, 'access'> & { access: T['access'] };

    assert<IsExact<P, T>>(true);
    assert<IsExact<ExpectedOutput, T>>(true);

    expect(created.item).toMatchObject({
      _id: 'account⋮_id⋮123⋮⋮',
      _idPK: 'account⋮_id⋮123⋮',
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
          name: '_id',
          relatedTo: 'Account',
        },
        {
          PK: ['.data.kind', '.data.value'],
          name: '_id2',
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
          PK: ['.accountId'],
          name: '_id',
        },
        {
          PK: ['.username'],
          name: '_id2',
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
        "Can't create two documents with same index"
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
      error: expect.stringMatching('account⋮_id2⋮antonio⋮'),
      item: null,
      updated: false,
    });

    const accounts = await mock.transporter
      .getCollection({})
      .find({})
      .toArray();

    expect(accounts).toEqual([
      expect.objectContaining({
        _idPK: expect.stringMatching(/account⋮_id⋮01.*⊰accesstype⋮/),
        _idSK: expect.stringMatching(/email∙01/),
      }),

      expect.objectContaining({
        _idPK: expect.stringMatching(/account⋮_id⋮01/),
        _idSK: '',
      }),
    ]); // first account, first access
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
      filter: { accountId: '123' },
      context,
    });

    expect(found.items).toMatchObject([
      {
        _c: '~!YWNjb3VudOKLrl9pZOKLrjEyM+KLruKLrg==',
        _e: 'account',
        _id: 'account⋮_id⋮123⋮⋮',
        _idPK: 'account⋮_id⋮123⋮',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _c: '~!YWNjb3VudOKLrl9pZOKLrjEyM+KKsGFjY2Vzc3R5cGXii67ii64=',
            _e: 'accesstype',
            _id: 'account⋮_id⋮123⊰accesstype⋮⋮',
            _idPK: 'account⋮_id⋮123⊰accesstype⋮',
            _idSK: '',
            _rpk: ['account⋮_id⋮123⊰'],
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

    expect(found.items).toMatchObject([
      {
        _c: '~!YWNjb3VudOKLrl9pZOKLrjEyM+KLruKLrg==',
        _id: 'account⋮_id⋮123⋮⋮',
        _e: 'account',
        _idPK: 'account⋮_id⋮123⋮',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _c: '~!YWNjb3VudOKLrl9pZOKLrjEyM+KKsGFjY2Vzc3R5cGXii67ii64=',
            _e: 'accesstype',
            _id: 'account⋮_id⋮123⊰accesstype⋮⋮',
            _idPK: 'account⋮_id⋮123⊰accesstype⋮',
            _rpk: ['account⋮_id⋮123⊰'],
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

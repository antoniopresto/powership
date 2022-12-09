import { createSchema, createType, Infer, ULID_REGEX } from '@backland/schema';

import { MongoTransporter } from '@backland/mongo';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { createEntity } from '../Entity';
import { tupleEnum } from '@backland/utils';

describe('Aliases', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  beforeEach(async function () {
    // await ObjectType.reset();
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

  test('create', async () => {
    const entity = _getEntity(transporter);

    let user = await entity.findOne({
      filter: { username: 'antonio' },
      context: {},
    });

    expect(user).toEqual({ item: null });

    const mock = userMock();
    await entity.createOne({
      item: mock,
      context: {},
    });

    user = await entity.findOne({
      filter: { username: mock.username },
      context: {},
    });

    expect(user).toEqual({
      item: {
        _e: 'user',
        email: 'antonio@mail.com',
        access: [
          {
            createdAt: expect.any(Date),
            kind: 'email',
            updatedAt: expect.any(Date),
            value: 'antonio@mail.com',
            verified: false,
          },
        ],
        _id: 'user⋮_id⋮antonio⋮',
        _idPK: 'user⋮_id⋮antonio⋮',
        _v: expect.stringMatching(ULID_REGEX),
        _idSK: '',
        firstName: 'antonio',
        id: '~!dXNlcjpfaWQjYW50b25pb8K7',
        lastName: 'Silva',
        ulid: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        username: 'antonio',
      },
    });
  });

  describe('update', () => {
    test('array item', async () => {
      const entity = _getEntity(transporter);
      const mock = userMock();
      await entity.createOne({
        item: mock,
        context: {},
      });

      const created = await entity.findOne({
        filter: { username: mock.username },
        context: {},
      });

      expect(created.item).toBeTruthy();

      const updated = await entity.updateOne({
        filter: { username: mock.username },
        condition: { 'access.kind': 'email' },
        update: { $set: { 'access.0.value': 'antonio@newexample.com' } }, // fixme use position $
        context: {},
      });

      expect(updated).toEqual({
        created: false,
        item: {
          _e: 'user',
          _id: 'user⋮_id⋮antonio⋮',
          _idPK: 'user⋮_id⋮antonio⋮',
          _idSK: '',
          _v: expect.any(String),
          access: [
            {
              createdAt: expect.any(Date),
              kind: 'email',
              updatedAt: expect.any(Date),
              value: 'antonio@newexample.com',
              verified: false,
            },
          ],
          createdAt: expect.any(Date),
          email: 'antonio@newexample.com', // ⚠️ updated when update access[0].value
          firstName: 'antonio',
          id: expect.any(String),
          lastName: 'Silva',
          ulid: expect.any(String),
          updatedAt: expect.any(Date),
          updatedBy: null,
          username: 'antonio',
        },
        updated: true,
      });
    });

    test('throw when remove item used in required alias', async () => {
      const entity = _getEntity(transporter);
      const mock = userMock();
      await entity.createOne({
        item: mock,
        context: {},
      });

      const created = await entity.findOne({
        filter: { username: mock.username },
        context: {},
      });

      expect(created.item).toBeTruthy();

      await expect(
        entity.updateOne({
          filter: { username: mock.username },
          condition: { 'access.kind': 'email' },
          update: { $remove: ['access.0'] },
          context: {},
        })
      ).rejects.toThrow('field "email": RequiredField');
    });

    test('update optional item used in  alias', async () => {
      const entity = _getEntity(transporter);
      const mock = userMock();

      const access: AccessType = {
        kind: 'phone',
        value: '+5511941382908',
        updatedAt: new Date(),
        createdAt: new Date(),
        verified: false,
      };

      mock.access.push(access);

      await entity.createOne({
        item: mock,
        context: {},
      });

      const created = await entity.findOne({
        filter: { username: mock.username },
        context: {},
      });

      expect(created.item).toHaveProperty('phone', access.value);

      const update = await entity.updateOne({
        filter: { username: mock.username },
        update: { $remove: ['access.1'] },
        context: {},
      });

      expect(update.item).not.toHaveProperty('phone');
    });

    test('check for version on updating document with aliases', async () => {
      const entity = _getEntity(transporter);
      const mock = userMock();

      const access: AccessType = {
        kind: 'phone',
        value: '+5511941382908',
        updatedAt: new Date(),
        createdAt: new Date(),
        verified: false,
      };

      mock.access.push(access);

      await entity.createOne({
        item: mock,
        context: {},
      });

      await entity.findOne({
        filter: { username: mock.username },
        context: {},
      });

      const sut = Promise.all([
        entity.updateOne({
          filter: { username: mock.username },
          update: { $remove: ['access.1'] },
          context: { __testDelay: 100 },
        }),
        entity.updateOne({
          filter: { username: mock.username },
          update: { $remove: ['access.1'] },
          context: {},
        }),
      ]);

      await expect(sut).rejects.toThrow(
        'UPDATE_DOCUMENT_WITH_ALIAS_FIELDS_ERROR_2'
      );
    });
  });
});

export const AccountType = createType('Account', {
  object: {
    username: 'string',
    providers: { string: {}, list: true, optional: true },
  },
} as const);

const accessTypesEnum = tupleEnum('phone', 'email', 'oauth', 'custom');

const AccessTypeBase = createSchema({
  createdAt: { date: { autoCreate: true } },
  meta: 'record?',
  updatedAt: { date: { autoCreate: true } },
} as const);

const AccessTypeSchema = createType({
  union: [
    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.phone },
        value: accessTypesEnum.phone,
        verified: 'boolean',
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.email },
        value: accessTypesEnum.email,
        verified: 'boolean',
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.oauth },
        provider: { description: 'Provider name', string: {} },
        authToken: 'string',
        value: { alias: 'provider' },
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.custom },
        meta: 'record',
        value: 'string',
      },
    },
  ],
} as const);

type AccessType = Infer<typeof AccessTypeSchema>;

const UserType = AccountType.clone((t) =>
  t
    .extendDefinition({
      firstName: 'string',
      lastName: 'string',
      access: { array: { of: AccessTypeSchema } },
      email: {
        alias: {
          type: 'email',
          aggregate: [
            { $pick: 'access' }, //
            { $sort: { createdAt: -1 } },
            { $matchOne: { kind: 'email' } },
            { $pick: 'value' }, //
          ],
        },
      },

      phone: {
        description: 'First user phone',
        optional: true,
        alias: {
          type: 'phone',
          aggregate: [
            { $pick: 'access' }, //
            { $sort: { createdAt: -1 } },
            { $matchOne: { kind: 'phone' } },
            { $pick: 'value' }, //
          ],
        },
      },
    })
    .graphType('User')
);

function _getEntity(transporter: MongoTransporter) {
  return createEntity({
    name: 'User',
    transporter,
    type: UserType,
    indexes: [
      {
        name: 'byUsername',
        field: '_id',
        PK: ['.username'],
      },
    ],
  });
}

function userMock() {
  const access: AccessType = {
    kind: 'email',
    value: 'antonio@mail.com',
    updatedAt: new Date(),
    createdAt: new Date(),
    verified: false,
  };

  return UserType.parse({
    firstName: 'antonio',
    lastName: 'Silva',
    username: 'antonio',
    access: [access],
  });
}

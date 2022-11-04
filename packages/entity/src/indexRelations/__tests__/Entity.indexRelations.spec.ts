import { mockApp } from '../../__tests__/mockApp';
import { createType } from '@backland/schema';
import { createEntity } from '../../Entity';

describe('Entity.indexRelations', () => {
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
    }).addIndexRelations({
      access: { entity: accessEntity },
    });

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
      }).addIndexRelations({
        access: { entity: accessEntity },
      });

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

    expect(created.item).toMatchObject({
      _id: 'account:_id#123↠',
      _idPK: '123',
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

    expect(found.items).toEqual([
      {
        _id: 'account:_id#123↠',
        _idPK: '123',
        _idSK: '',
        _v: expect.any(String),
        access: [
          {
            _id: 'account:_id#123≻accesstype↠',
            _idPK: '123',
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

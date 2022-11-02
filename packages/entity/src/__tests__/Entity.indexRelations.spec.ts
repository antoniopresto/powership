import { mockApp } from './mockApp';
import { createType } from '@backland/schema';
import { createEntity } from '../Entity';

jest.setTimeout(999999999);
describe('Entity.indexRelations', () => {
  const mock = mockApp();

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
});

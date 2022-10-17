import { createType } from '@backland/schema';

import { MongoTransporter } from '@backland/mongo';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { createEntity } from '../Entity';

jest.setTimeout(9999999);
describe('Account', () => {
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

  function _getEntity() {
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
    return UserType.parse({
      firstName: 'antonio',
      lastName: 'Silva',
      username: 'antonio',
      __private: {
        password: { value: '123456' },
      },
    });
  }

  it('create', async () => {
    const entity = _getEntity();

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
        __private: {
          password: {
            ...mock.__private.password,
            updatedAt: expect.any(Date),
          },
        },
        _id: 'user:_id#antonio↠',
        _idPK: 'antonio',
        _idSK: '',
        firstName: 'antonio',
        id: '~!dXNlcjpfaWQjYW50b25pb+KGoA==',
        lastName: 'Silva',
        ulid: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        username: 'antonio',
        email: null,
      },
    });
  });
});

export const AccountType = createType('Account', {
  object: {
    username: 'string',
    email: { alias: 'providers' },
    providers: { string: {}, list: true, optional: true },
    __private: {
      object: {
        password: {
          object: {
            value: 'string',
            updatedAt: { date: { autoCreate: true }, optional: true },
          },
        },
      },
    },
  },
} as const);

export const UserType = AccountType.edit()
  .extendDefinition({
    firstName: 'string',
    lastName: 'string',
  })
  .graphType('User');

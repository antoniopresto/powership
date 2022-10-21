import { AccountsPassword } from '../AccountsPassword';
import { createDefaultAccountEntity } from '../entity';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';

const expectedUser = {
  _id: expect.stringMatching('account:_id#01'),
  _id2: 'account:_id2#antoniopresto↠',
  _id2PK: 'antoniopresto',
  _id2SK: '',
  _idPK: expect.stringMatching('01'),
  _idSK: '',
  _v: expect.stringMatching('01'),
  access: [
    {
      createdAt: expect.any(Date),
      kind: 'email',
      updatedAt: expect.any(Date),
      value: 'antonio@example.com',
      verified: false,
    },
  ],
  accessTypesByValue: {
    'email#antonio@example.com': {
      createdAt: expect.any(Date),
      kind: 'email',
      updatedAt: expect.any(Date),
      value: 'antonio@example.com',
      verified: false,
    },
  },
  accountId: expect.stringMatching('01'),
  createdAt: expect.any(Date),
  deactivated: false,
  email: 'antonio@example.com',
  id: expect.stringMatching('='),
  permissions: [expect.stringMatching('admin_profile:01')],
  tokenByKind: {
    password: {
      createdAt: expect.any(Date),
      kind: 'password',
      reason: 'signup',
      value: expect.any(String),
    },
  },
  tokens: [
    {
      createdAt: expect.any(Date),
      kind: 'password',
      reason: 'signup',
      value: expect.stringMatching(/.{100,}/),
    },
  ],
  ulid: expect.stringMatching('01'),
  updatedAt: expect.any(Date),
  username: 'antoniopresto',
};

describe('AccountsPassword', () => {
  let mockApp: AppMock;

  beforeAll(async () => {
    mockApp = createAppMock();
    await mockApp.start();
  });

  afterAll(async () => {
    await mockApp.reset();
  });

  function accounts() {
    const accountEntity = createDefaultAccountEntity().clone((options) => {
      return {
        ...options,
        transporter: mockApp.transporter,
      };
    });

    return new AccountsPassword({
      accountEntity,
    });
  }

  test('new', async () => {
    const accountsPassword = accounts();
    expect(accountsPassword.accountEntity).toBeTruthy();
  });

  test('createUser', async () => {
    const accountsPassword = accounts();

    const sut = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    expect(sut).toEqual(expectedUser);
  });
});

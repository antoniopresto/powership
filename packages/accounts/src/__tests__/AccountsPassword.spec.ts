import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';

jest.setTimeout(1000000);
describe('AccountsPassword', () => {
  let mockApp: AppMock;

  beforeEach(async () => {
    mockApp = createAppMock();
    await mockApp.start();
  });

  afterEach(async () => {
    await mockApp.reset();
    jest.resetModules();
  });

  function accounts() {
    const { AccountsEntity } = require('../entity/AccountEntity');
    const { TokenEntity } = require('../entity/TokenEntity');
    const { AccountPassword } =
      require('../AccountPassword') as typeof import('../AccountPassword');

    AccountsEntity.setOption('transporter', mockApp.transporter);
    TokenEntity.setOption('transporter', mockApp.transporter);

    return new AccountPassword({});
  }

  test('instantiate AccountsPassword', async () => {
    const accountsPassword = accounts();
    expect(accountsPassword.accountEntity).toBeTruthy();
  });

  test('createUser', async () => {
    const accountsPassword = accounts();

    const account = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    const token = await accountsPassword.tokenEntity.findOne({
      filter: {
        accountId: account.accountId,
        kind: 'password',
        createdFor: account.accountId,
      },
      context: {},
    });

    expect(token).toMatchObject({
      item: { accountId: account.accountId },
    });

    expect(account).toEqual(_expectedUser());
  });

  test('userByPasswordLogin', async () => {
    const accountsPassword = accounts();

    await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    await expect(
      accountsPassword.userByPasswordLogin({
        password: 'wrongpass',
        username: 'antoniopresto',
      })
    ).rejects.toThrow('LOGIN_FAILED');

    const sut = await accountsPassword.userByPasswordLogin({
      password: '1234567',
      username: 'antoniopresto',
    });

    expect(sut).toEqual(_expectedUser());
  });

  test('verifyEmail', async () => {
    const accountsPassword = accounts();

    const user = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    const sut = await accountsPassword.verifyEmail({
      accountId: user.id,
      email: user.email,
    });

    const exp = _expectedUser() as any;
    exp.updatedBy = null;
    exp.access[0].verified = true;
    expect(sut).toEqual(exp);
  });
});

function _expectedUser() {
  return {
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
    accountId: expect.stringMatching('01'),
    createdAt: expect.any(Date),
    deactivated: false,
    email: 'antonio@example.com',
    id: expect.stringMatching('='),
    permissions: [expect.stringMatching('admin_profile:01')],
    ulid: expect.stringMatching('01'),
    updatedAt: expect.any(Date),
    username: 'antoniopresto',
  };
}

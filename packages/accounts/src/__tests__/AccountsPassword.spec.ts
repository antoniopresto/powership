import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { TokenEntity } from '../entity/TokenEntity';

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
    const { AccountPassword } =
      require('../AccountPassword') as typeof import('../AccountPassword');

    return new AccountPassword({ transporter: mockApp.transporter });
  }

  test('createUser', async () => {
    const accountsPassword = accounts();

    const account = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    const token = await TokenEntity.findMany({
      filter: {
        accountId: account.accountId,
        kind: 'password',
        createdFor: account.accountId,
      },
      context: {},
    });

    const { accountId } = account;
    expect(token).toEqual({
      items: [
        expect.objectContaining({
          _id: expect.stringMatching(
            new RegExp(
              `^account:_id#${accountId}≻accountstoken↠password#${accountId}#`
            )
          ),
        }),
      ],
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

    expect(sut).toMatchObject({
      username: 'antoniopresto',
    });

    expect(sut.access).toBeUndefined(); // because login with username
  });

  test('verifyEmail', async () => {
    const accountsPassword = accounts();

    const user = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    const updated = await accountsPassword.verifyEmail({
      accountId: user.accountId,
      email: 'antonio@example.com',
    });

    expect(updated.verified).toBe(true);
  });

  test('changePassword', async () => {
    const accountsPassword = accounts();

    const user = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    await accountsPassword.userByPasswordLogin({
      password: '1234567',
      username: 'antoniopresto',
    });

    await accountsPassword.setPassword({
      newPassword: 'new1234',
      accountId: user.accountId,
    });

    await expect(async () => {
      await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
      });
    }).rejects.toThrow('LOGIN_FAILED');
  });

  test('addEmailVerificationToken', async () => {
    const accountsPassword = accounts();

    const user = await accountsPassword.createUser({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    const sut = await accountsPassword.addEmailVerificationToken({
      accountId: user.accountId,
      email: 'antonio@example.com',
    });

    expect(sut).toMatchObject({
      createdFor: 'antonio@example.com',
      kind: 'email_verification',
      value: expect.stringMatching(/.{40}/),
    });
  });

  test('addResetPasswordToken', async () => {
    const accountsPassword = accounts();

    const sut = await accountsPassword.addResetPasswordToken({
      accountId: '1234',
    });

    expect(sut).toMatchObject({
      createdFor: '1234',
      kind: 'password_recovery',
      value: expect.stringMatching(/.{40}/),
    });
  });

  test('removeAllResetPasswordTokens', async () => {
    const accountsPassword = accounts();

    await Promise.all([
      accountsPassword.addResetPasswordToken({
        accountId: '1234',
      }),
      accountsPassword.addResetPasswordToken({
        accountId: '1234',
      }),
      accountsPassword.addResetPasswordToken({
        accountId: '1234',
      }),
      accountsPassword.addResetPasswordToken({
        accountId: '1234',
      }),
    ]);

    const sut = await accountsPassword.removeAllResetPasswordTokens({
      accountId: '1234',
    });

    expect(sut).toEqual({ deletedCount: 4 });
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
      expect.objectContaining({
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        verified: false,
        data: {
          kind: 'email',
          value: 'antonio@example.com',
        },
      }),
    ],
    tokens: [
      expect.objectContaining({
        createdAt: expect.any(Date),
        kind: 'password',
        updatedAt: expect.any(Date),
        value: expect.any(String),
      }),
    ],
    accountId: expect.stringMatching('01'),
    createdAt: expect.any(Date),
    deactivated: false,
    id: expect.stringMatching('='),
    permissions: [expect.stringMatching('admin_profile:01')],
    ulid: expect.stringMatching('01'),
    updatedAt: expect.any(Date),
    username: 'antoniopresto',
  };
}

import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { TokenEntity } from '../entity/TokenEntity';
import { LoaderContext } from '@backland/transporter';
import { SessionRequest } from '../Sessions';

describe('Accounts', () => {
  let mockApp: AppMock;

  beforeEach(async () => {
    mockApp = createAppMock();
    await mockApp.start();
  });

  afterEach(async () => {
    await mockApp.reset();
    jest.resetModules();
  });

  function _accounts() {
    const { Accounts } = require('../Accounts') as typeof import('../Accounts');

    return new Accounts({
      transporter: mockApp.transporter,
      sessions: { getTokenSecret: () => '987654321' },
    });
  }

  function _request(): { context: LoaderContext; request: SessionRequest } {
    return {
      context: {},
      request: {
        requestIp: '12345678',
        userAgent: 'IE',
        loggedOnly: true,
        onCallDestroySession() {},
      },
    };
  }

  test('createUser', async () => {
    const accountsPassword = _accounts();

    const account = await accountsPassword.createAccount({
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
    const accountsPassword = _accounts();

    await accountsPassword.createAccount({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    await expect(
      accountsPassword.userByPasswordLogin({
        password: 'wrongpass',
        username: 'antoniopresto',
        ..._request(),
      })
    ).rejects.toThrow('LOGIN_FAILED');

    const sut = await accountsPassword.userByPasswordLogin({
      password: '1234567',
      username: 'antoniopresto',
      ..._request(),
    });

    expect(sut).toMatchObject({
      authToken: expect.stringMatching(/\w{100,200}/),
      account: {
        username: 'antoniopresto',
      },
    });

    expect(sut.account.session).toEqual([sut.sessionDocument]);
  });

  test('verifyEmail', async () => {
    const accountsPassword = _accounts();

    const user = await accountsPassword.createAccount({
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
    const accountsPassword = _accounts();

    const user = await accountsPassword.createAccount({
      password: '1234567',
      username: 'antoniopresto',
      email: 'antonio@example.com',
      request: {},
    });

    await accountsPassword.userByPasswordLogin({
      password: '1234567',
      username: 'antoniopresto',
      ..._request(),
    });

    await accountsPassword.setPassword({
      newPassword: 'new1234',
      accountId: user.accountId,
    });

    await expect(async () => {
      await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
        ..._request(),
      });
    }).rejects.toThrow('LOGIN_FAILED');
  });

  test('addEmailVerificationToken', async () => {
    const accountsPassword = _accounts();

    const user = await accountsPassword.createAccount({
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
    const accountsPassword = _accounts();

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
    const accountsPassword = _accounts();

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

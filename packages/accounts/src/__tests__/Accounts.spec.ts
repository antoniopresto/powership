import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
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

    const token = await accountsPassword.TokenEntity.findMany({
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

    const loginRequest = _request();

    const sut = await accountsPassword.userByPasswordLogin({
      password: '1234567',
      username: 'antoniopresto',
      ...loginRequest,
    });

    expect(sut).toMatchObject({
      authToken: expect.stringMatching(/\w{100,200}/),
      account: {
        username: 'antoniopresto',
      },
    });

    expect(sut.account.session).toEqual([sut.sessionDocument]);

    expect(loginRequest.request.user).toMatchObject({
      username: 'antoniopresto',
    });
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

  describe('logout', () => {
    test('logout simple', async () => {
      const accountsPassword = _accounts();

      const account = await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const loginRequest = _request();

      const { authToken } = await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
        ...loginRequest,
      });

      expect(loginRequest.request.user).toMatchObject({
        username: 'antoniopresto',
      });

      const spyUpdate = jest.spyOn(
        accountsPassword.SessionEntity,
        'updateMany'
      );

      await accountsPassword.logout({
        authToken,
        request: loginRequest.request,
      });

      expect(spyUpdate).toBeCalledWith(
        expect.objectContaining({
          filter: {
            id: expect.stringMatching(/^~!/),
            accountId: account.accountId,
          },
        })
      );

      expect(loginRequest.request.user).toEqual(undefined);
      spyUpdate.mockRestore();
    });

    test('logout with changed secret', async () => {
      const accountsPassword = _accounts();

      const account = await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const loginRequest = _request();

      const { authToken } = await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
        ...loginRequest,
      });

      expect(loginRequest.request.user).toMatchObject({
        username: 'antoniopresto',
      });

      accountsPassword.sessions.getTokenSecret = () => 'invalid12344444';

      const spyUpdate = jest.spyOn(
        accountsPassword.SessionEntity,
        'updateMany'
      );

      await accountsPassword.logout({
        authToken,
        request: loginRequest.request,
      });

      expect(spyUpdate).toBeCalledWith(
        expect.objectContaining({
          filter: {
            accountId: account.accountId,
          },
        })
      );

      expect(loginRequest.request.user).toEqual(undefined);
      spyUpdate.mockRestore();
    });
  });

  describe('handleRequest', () => {
    test('loggedOnly', async () => {
      const accountsPassword = _accounts();

      await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const loggedOnly = _request();
      loggedOnly.request.loggedOnly = true;

      await expect(
        accountsPassword.handleRequest(loggedOnly.request)
      ).rejects.toThrow('Unauthorized');
    });

    test('not loggedOnly', async () => {
      const accountsPassword = _accounts();

      await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const req = _request();
      req.request.loggedOnly = false;

      const next = await accountsPassword.handleRequest(req.request);
      expect(next.user).toBeUndefined();
      expect(next.sessionDestroyed).toBeUndefined();
      expect(next.authToken).toBeUndefined();
    });

    test('invalid token', async () => {
      const accountsPassword = _accounts();

      await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const { request } = _request();
      request.loggedOnly = false;

      await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
        request,
      });

      request.authToken = '12345';

      await expect(accountsPassword.handleRequest(request)).rejects.toThrow(
        'TokenVerificationFailed'
      );
    });

    test('invalid token signature', async () => {
      const accountsPassword = _accounts();

      await accountsPassword.createAccount({
        password: '1234567',
        username: 'antoniopresto',
        email: 'antonio@example.com',
        request: {},
      });

      const { request } = _request();

      await accountsPassword.userByPasswordLogin({
        password: '1234567',
        username: 'antoniopresto',
        request,
      });

      accountsPassword.sessions.getTokenSecret = () => 'new_secret';

      await expect(accountsPassword.handleRequest(request)).rejects.toThrow(
        'TokenVerificationFailed'
      );
    });
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

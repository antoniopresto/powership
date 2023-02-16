import {
  hashString,
  hooks,
  NodeLogger,
  nonNullValues,
  StringValue,
  ulid,
  Waterfall,
} from '@swind/utils';

import { AccountDocument, AccountEntity } from './entity/AccountEntity';
import { SessionEntity, SessionInput } from './entity/SessionEntity';
import { ConnectionInformation } from './types/ConnectionInformation';
import { LoginResult } from './types/LoginResult';
import { SessionDocument } from './types/SessionType';
import { AccountError } from './utils/AccountError';
import {
  createRandomAuthTokenString,
  parseAuthTokenString,
  ParsedAuthToken,
  signAccountJWT,
  verifySessionJWT,
} from './utils/crypto';

export const DEFAULT_TOKEN_DURATION = '7d';

export interface SessionsOptions {
  tokenDuration?: StringValue;
  getTokenSecret: (request: SessionRequest) => string | Promise<string>;
}

export class Sessions {
  private options: Required<SessionsOptions>;

  hooks: AccountSessionHooks;

  getTokenSecret: NonNullable<SessionsOptions['getTokenSecret']>;

  constructor(options: SessionsOptions) {
    this.options = { tokenDuration: DEFAULT_TOKEN_DURATION, ...options };
    this.getTokenSecret = options.getTokenSecret;

    this.hooks = createAccountSessionHooks(options);
    const self = this;

    this.hooks.onRequest.register(async function sessionHandler(request) {
      await self.trySetSession(request);
      return request;
    });
  }

  handleRequest = async <T extends SessionRequest>(request: T): Promise<T> => {
    return (await this.hooks.onRequest.exec(request, {})) as T; // the first hook handler is registered in constructor
  };

  getConnectionInfo = (request: SessionRequest): ConnectionInformation => {
    return nonNullValues(
      {
        userAgent: request.userAgent,
        ip: request.requestIp,
      },
      'Invalid ConnectionInformation in request.'
    );
  };
  /**
   * Checks for tokens in the provided session object and renew
   * tokens if session is valid
   * @param sessionRequest
   */
  public async trySetSession(
    sessionRequest: SessionRequest
  ): Promise<LoginResult | undefined> {
    if (sessionRequest.authToken) {
      const refreshInput: Omit<RefreshTokensInput, 'secret'> = {
        request: sessionRequest,
        authToken: sessionRequest.authToken,
      };

      const result = await this.refreshTokens({
        ...refreshInput,
        secret: await this.getTokenSecret(sessionRequest),
      });

      const res = await this.hooks.onRefreshTokens.exec(
        { ...sessionRequest, result },
        sessionRequest
      );

      return res.result;
    }

    return;
  }

  refreshTokens = async (input: RefreshTokensInput): Promise<LoginResult> => {
    const {
      authToken, //
      secret,
      request,
    } = input;

    try {
      let parsedAuthToken: ParsedAuthToken;

      try {
        const { data: tokenString } = verifySessionJWT({
          authToken: authToken,
          secret,
        });
        parsedAuthToken = parseAuthTokenString(tokenString, 'A');
      } catch (err) {
        throw new AccountError(
          'TokenVerificationFailed',
          'Tokens are not valid.'
        );
      }

      const { accountCursor } = parsedAuthToken;
      const filter = { id: accountCursor.cursor };

      const { item: account } = await AccountEntity.findOne({
        filter,
        context: request,
      });

      if (!account) {
        throw new AccountError('UserNotFound', { filter });
      }

      return await this.upsertRefreshTokenAndSessionDocument({
        currentAuthTokenData: parsedAuthToken,
        account,
        request,
        op: 'update',
      });
    } catch (caughtError: any) {
      const error = await this.hooks.onUpsertSessionError.exec(
        caughtError,
        request
      );

      if (typeof error?.message === 'string') {
        throw error;
      } else {
        throw caughtError;
      }
    }
  };

  /**
   * @description Creates a authToken
   * @description Create a new session if existingSession is null
   *   - tokens are strings created by Sessions.createTokenString
   *       containing ParsedAuthToken data
   */
  public async upsertRefreshTokenAndSessionDocument(
    input: {
      account: AccountDocument;
      request: RefreshTokensInput['request'];
    } & (
      | { op: 'insert' }
      | {
          op: 'update';
          currentAuthTokenData: ParsedAuthToken;
        }
    )
  ): Promise<LoginResult> {
    const { account, request } = input;
    const connectionInfo = this.getConnectionInfo(request);

    const accountId = account.accountId;

    let updatedOrNewSession: SessionDocument | undefined = undefined;
    let randomAuthTokenString: string | undefined = undefined;

    if (input.op === 'update') {
      const { currentAuthTokenData, account, request } = input;
      nonNullValues({
        currentAuthToken: currentAuthTokenData,
        account,
        request,
      });

      if (
        currentAuthTokenData.dataUAHash !== hashString(connectionInfo.userAgent)
      ) {
        throw new AccountError('InvalidSession', 'AGENT_CHANGED');
      }

      const currentSessionId = currentAuthTokenData.sessionCursor.cursor;

      randomAuthTokenString = createRandomAuthTokenString({
        s: currentSessionId,
        a: account.id,
        connectionInfo,
        k: 'A',
      });

      const updated = await SessionEntity.updateOne({
        filter: {
          id: currentSessionId,
        },
        update: {
          $set: {
            token: randomAuthTokenString,
            connectionInfo,
          },
        },
      });

      if (!updated.item) {
        throw new AccountError(
          'SessionNotFound',
          updated.error ||
            `Session "${currentAuthTokenData.sessionCursor.cursor}" not found.`
        );
      }

      updatedOrNewSession = updated.item;
    }

    if (input.op === 'insert') {
      const sessionInput: SessionInput = {
        accountId,
        token: '', // added below
        valid: true,
        ulid: ulid(),
        connectionInfo,
      };

      sessionInput.id = SessionEntity.getDocumentId(sessionInput);

      randomAuthTokenString = sessionInput.token = createRandomAuthTokenString({
        s: sessionInput.id,
        a: account.id,
        connectionInfo,
        k: 'A',
      });

      const created = await SessionEntity.createOne({
        item: sessionInput,
      });

      if (!created.item || created.error) {
        NodeLogger.logError(created.error);
        throw new AccountError(
          'AuthenticationFailed',
          'Can not create session'
        );
      }

      updatedOrNewSession = created.item;
    }

    const nonNull = nonNullValues({
      usedSession: updatedOrNewSession,
      op: input.op,
      randomAuthTokenString,
    });

    updatedOrNewSession = nonNull.usedSession;
    randomAuthTokenString = nonNull.randomAuthTokenString;

    if (updatedOrNewSession.valid !== true) {
      throw new AccountError(
        'InvalidSession',
        `Session ${updatedOrNewSession.id} is marked with valid: ${updatedOrNewSession.valid}.`
      );
    }

    const secret = await this.getTokenSecret(request);

    const newSignedToken = signAccountJWT({
      secret,
      data: randomAuthTokenString,
      config: {
        expiresIn: this.options.tokenDuration,
      },
    });

    account.sessions = [
      ...(account.sessions || []).filter(
        (el) => el.id !== updatedOrNewSession!.id
      ),
      updatedOrNewSession,
    ];

    request.authToken = newSignedToken;
    request.user = account;

    return {
      sessionDocument: updatedOrNewSession,
      authToken: newSignedToken,
      account,
    };
  }

  logout = async (input: {
    authToken: string;
    request: SessionRequest;
  }): Promise<boolean> => {
    const { authToken, request } = input;

    const { accountId } = nonNullValues(
      { accountId: request.user?.accountId },
      'No user found'
    );

    const invalidated = await this.invalidateSessions({
      mode: 'one',
      accountId,
      request,
      authToken,
    });

    return !!invalidated;
  };

  invalidateSessions = async (
    input:
      | {
          accountId: string;
          request: SessionRequest;
        } & ({ authToken: string; mode: 'one' } | { mode: 'all' })
  ): Promise<number> => {
    const { request, accountId } = input;

    const authToken = input.mode === 'one' ? input.authToken : undefined;

    const filter = await (async () => {
      if (authToken) {
        const secret = await this.getTokenSecret(request);

        try {
          const jwtData = verifySessionJWT({
            authToken: authToken,
            secret,
            config: {
              ignoreExpiration: true,
            },
          });
          const { sessionCursor } = parseAuthTokenString(jwtData.data, 'A');
          return { id: sessionCursor.cursor, accountId };
        } catch (e) {
          if (request.user) {
            // in case jwt verification failed, because secret changed, etc.
            return { accountId: request.user.accountId };
          }
        }
      }
      return { accountId };
    })();

    const invalidated = await SessionEntity.updateMany({
      filter,
      condition: { valid: true, accountId },
      update: {
        $set: {
          valid: false,
        },
      },
    });

    await request.onCallDestroySession?.(request);
    delete request.authToken;
    delete request.user;
    request.sessionDestroyed = true;

    if (!invalidated.modifiedCount) {
      throw new AccountError(
        'SessionNotFound',
        invalidated.error || `No session found for account "${accountId}".`
      );
    }

    return invalidated.modifiedCount;
  };
}

export type SessionRequest = {
  authToken?: string;
  sessionDestroyed?: boolean;
  requestIp: string;
  userAgent: string;
  onCallDestroySession: null | ((request: SessionRequest) => unknown);
  user?: AccountDocument;
};

export type SessionHooksContext = {};

export function createAccountSessionHooks(_options: SessionsOptions) {
  // function onPluginExecEnd(current: SessionRequest) { // TODO
  //   if (!current || typeof current !== 'object') {
  //     throw new AccountError('InvalidRequest');
  //   }
  //
  //   if (
  //     current.onCallDestroySession &&
  //     typeof current.onCallDestroySession !== 'function'
  //   ) {
  //     throw new AccountError(
  //       'InvalidRequest',
  //       'Expected onCallDestroySession to be a function.'
  //     );
  //   }
  //
  //   if (!current.authToken) return current;
  //
  //   if (typeof current.requestIp !== 'string') {
  //     throw new AccountError('InvalidLocationInfoIP');
  //   }
  //
  //   if (typeof current.userAgent !== 'string') {
  //     throw new AccountError('InvalidLocationInfoUserAgent');
  //   }
  //
  //   return current;
  // }

  return {
    onRequest: hooks.waterfall() as Waterfall<
      SessionRequest,
      SessionHooksContext
    >,
    onRefreshTokens: hooks.waterfall() as unknown as Waterfall<
      SessionRequest & { result: LoginResult },
      SessionHooksContext
    >,
    onUpsertSessionError: hooks.waterfall() as unknown as Waterfall<
      Error,
      SessionRequest
    >,
  };
}

export type AccountSessionHooks = ReturnType<typeof createAccountSessionHooks>;

export interface RefreshTokensInput {
  authToken: string;
  request: SessionRequest;
  secret: string;
}

import { LoaderContext } from '@backland/transporter';
import {
  hashString,
  NodeLogger,
  StringValue,
  ulid,
  Waterfall,
} from '@backland/utils';
import { createHooks } from 'plugin-hooks';

import { AccountDocument, AccountEntity } from './entity/AccountEntity';
import { SessionEntity, SessionInput } from './entity/SessionEntity';
import {
  ConnectionInformation,
  LoginResult,
  SessionDocument,
  User,
} from './interfaces';
import { AccountError } from './utils/AccountError';
import {
  createSessionTokenString,
  ParsedSessionToken,
  parseSessionTokenString,
  signAccountJWT,
  verifySessionJWT,
} from './utils/crypto';

export type SessionDurationConfig = {
  sessionToken: StringValue;
  refreshToken: StringValue;
};

export interface SessionsOptions {
  durations?: SessionDurationConfig;
  getTokenSecret: (
    input: Pick<RefreshTokensInput, 'request' | 'context' | 'connectionInfo'>
  ) => string | Promise<string>;
}

const _defaultSessionDuration = () =>
  ({
    sessionToken: '90m',
    refreshToken: '7d',
  } as const);

export class Sessions {
  private options: Required<SessionsOptions>;

  hooks: AccountSessionHooks;

  getTokenSecret: NonNullable<SessionsOptions['getTokenSecret']>;

  constructor(options: SessionsOptions) {
    this.options = { durations: _defaultSessionDuration(), ...options };
    this.getTokenSecret = options.getTokenSecret;

    this.hooks = createAccountSessionHooks(options);
    const self = this;

    this.hooks.onRequest.register(function sessionHandler(request) {
      return self.onRequest(request);
    });
  }

  handleRequest = async <T extends SessionRequest>(request: T): Promise<T> => {
    return (await this.hooks.onRequest.exec(request, {})) as T;
  };

  onRequest = async (request: SessionRequest) => {
    await this.trySetSession(request);
  };

  public async destroy(req: SessionRequest): Promise<void> {
    await req.onCallDestroySession(req);
    delete req.authToken;
    req.sessionDestroyed = true;
  }

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
        context: sessionRequest,
        authToken: sessionRequest.authToken,
        connectionInfo: {
          ip: sessionRequest.requestIp,
          userAgent: sessionRequest.userAgent,
        },
      };

      const result = await this.refreshTokens({
        ...refreshInput,
        secret: await this.getTokenSecret(refreshInput),
      });

      const res = await this.hooks.onRefreshTokens.exec(
        { ...sessionRequest, result },
        sessionRequest
      );

      sessionRequest.authToken = res.result.refreshToken;

      return result;
    }

    return;
  }

  refreshTokens = async (input: RefreshTokensInput): Promise<LoginResult> => {
    try {
      const {
        authToken, //
        connectionInfo,
        secret,
        context,
      } = input;

      let parsedAuthToken: ParsedSessionToken;

      try {
        const { data: tokenString } = verifySessionJWT({
          sessionToken: authToken,
          secret,
        });
        parsedAuthToken = parseSessionTokenString(tokenString, 'R');
      } catch (err) {
        throw new AccountError(
          'TokenVerificationFailed',
          'Tokens are not valid.'
        );
      }

      const { dataAID } = parsedAuthToken;

      const { item: account } = await AccountEntity.findOne({
        filter: { [dataAID.indexField]: dataAID.idValue },
        context,
      });

      if (!account) {
        throw new AccountError('UserNotFound', 'User not found.');
      }

      return await this.upsertRefreshTokenAndSessionDocument({
        authToken: parsedAuthToken,
        account,
        connectionInfo,
        request: input.request,
        context: input.context,
      });
    } catch (caughtError: any) {
      const error = await this.hooks.onUpsertSessionError.exec(
        caughtError,
        input.request
      );

      if (typeof error?.message === 'string') {
        throw error;
      } else {
        throw caughtError;
      }
    }
  };

  /**
   * @description Creates a refreshToken
   * @description Create a new session if existingSession is null
   *   - tokens are strings created by Sessions.createTokenString
   *       containing ParsedSessionToken data
   */
  public async upsertRefreshTokenAndSessionDocument(input: {
    authToken: ParsedSessionToken | null;
    account: AccountDocument;
    connectionInfo: ConnectionInformation;
    request: RefreshTokensInput['request'];
    context: RefreshTokensInput['context'];
  }): Promise<LoginResult> {
    const { authToken, account, connectionInfo } = input;

    const accountId = account.accountId;

    let usedSession: SessionDocument;

    if (authToken) {
      if (authToken.dataUAHash !== hashString(connectionInfo.userAgent)) {
        throw new AccountError('InvalidSession', 'AGENT_CHANGED');
      }

      const updated = await SessionEntity.updateOne({
        filter: {
          id: authToken.dataSID.input,
        },
        update: {
          $set: {
            connectionInfo,
          },
        },
      });

      if (!updated.item) {
        throw new AccountError(
          'SessionNotFound',
          updated.error || `Session "${authToken.dataSID.input}" not found.`
        );
      }

      usedSession = updated.item;
    } else {
      const sessionInput: SessionInput = {
        accountId,
        token: '', // added below
        valid: true,
        ulid: ulid(),
        connectionInfo,
      };

      sessionInput.id = SessionEntity.getDocumentId(sessionInput);
      sessionInput.token = createSessionTokenString({
        s: sessionInput.id,
        a: accountId,
        k: 'S',
        connectionInfo,
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

      usedSession = created.item;
    }

    if (usedSession.valid !== true) {
      throw new AccountError(
        'InvalidSession',
        `Session ${usedSession.id} is marked with valid: ${usedSession.valid}.`
      );
    }

    const secret = await this.getTokenSecret({
      context: input.context,
      request: input.request,
      connectionInfo,
    });

    const sessionToken = signAccountJWT({
      secret,
      data: usedSession.token,
      config: {
        expiresIn: this.options.durations.sessionToken,
      },
    });

    const refreshTokenString = createSessionTokenString({
      s: usedSession.id,
      a: usedSession.accountId,
      k: 'R',
      connectionInfo,
    });

    const refreshToken = signAccountJWT({
      secret,
      data: refreshTokenString,
      config: {
        expiresIn: this.options.durations.refreshToken,
      },
    });

    account.session = [
      ...(account.session || []).filter((el) => el.id !== usedSession!.id),
      usedSession,
    ];

    return {
      sessionDocument: usedSession,
      sessionToken,
      refreshToken,
      authToken: refreshToken,
      account,
    };
  }
}

export type SessionRequest = {
  authToken?: string;
  sessionDestroyed?: boolean;
  requestIp: string;
  userAgent: string;
  onCallDestroySession(request: SessionRequest): unknown;
  loggedOnly: boolean;
  user?: User;
};

export type SessionHooksContext = {};

export function createAccountSessionHooks(_options: SessionsOptions) {
  const factory = createHooks<SessionRequest, SessionHooksContext>({
    onPluginExecEnd(ctx) {
      const current = ctx.current;

      if (!current || typeof current !== 'object') {
        throw new AccountError('InvalidRequest');
      }

      if (current.loggedOnly && !current.authToken) {
        throw new AccountError('SessionNotFound');
      }

      if (typeof current.onCallDestroySession !== 'function') {
        throw new AccountError('InvalidRequest');
      }

      if (!current.authToken) return ctx;

      if (typeof current.requestIp !== 'string') {
        throw new AccountError('InvalidLocationInfoIP');
      }

      if (typeof current.userAgent !== 'string') {
        throw new AccountError('InvalidLocationInfoUserAgent');
      }

      return ctx;
    },
  });

  return {
    onRequest: factory.waterfall() as Waterfall<
      SessionRequest,
      SessionHooksContext
    >,
    onRefreshTokens: factory.parallel() as unknown as Waterfall<
      SessionRequest & { result: LoginResult },
      SessionHooksContext
    >,
    onUpsertSessionError: factory.waterfall() as unknown as Waterfall<
      Error,
      SessionRequest
    >,
  };
}

export type AccountSessionHooks = ReturnType<typeof createAccountSessionHooks>;

export interface RefreshTokensInput {
  authToken: string; // refreshToken
  connectionInfo: ConnectionInformation;
  context: LoaderContext;
  request: SessionRequest;
  secret: string;
}

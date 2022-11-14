import { getByPath, NodeLogger } from '@backland/utils';

export class AccountError extends Error {
  __isAccountError = true;
  __kind = 'AccountError';

  public code: AccountErrorCode;

  constructor(code: AccountErrorCode, details: any = 'ACCOUNT_ERROR') {
    super(code);
    this.code = code;
    NodeLogger.logError(code, details);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  static is(input: unknown): input is AccountError {
    return getByPath(input, '__isAccountError') === true;
  }
}

export type AccountErrorCode = keyof typeof AccountErrorsKindEnum;

export enum RequestErrors {
  'InvalidRequest' = 'InvalidRequest',
  'InvalidLocationInfoUserAgent' = 'InvalidLocationInfoUserAgent',
  'InvalidLocationInfoIP' = 'InvalidLocationInfoIP',
  'InvalidEncodedSession' = 'InvalidEncodedSession',
}
export enum AuthenticateWithServiceErrors {
  /**
   * Service is not registered on the server
   */
  ServiceNotFound = 'ServiceNotFound',
  /**
   * User is deactivated, so not allowed to login
   */
  UserDeactivated = 'UserDeactivated',
  /**
   * Service failed to authenticate the user
   */
  AuthenticationFailed = 'AuthenticationFailed',
}

export enum LoginWithServiceErrors {
  /**
   * Service is not registered on the server
   */
  ServiceNotFound = 'ServiceNotFound',
  /**
   * User is deactivated, so not allowed to login
   */
  UserDeactivated = 'UserDeactivated',
  /**
   * Service failed to authenticate the user
   */
  AuthenticationFailed = 'AuthenticationFailed',
}

export enum ImpersonateErrors {
  /**
   * Will throw if user is not found.
   */
  UserNotFound = 'UserNotFound',
  /**
   * Session is not valid
   */
  InvalidSession = 'InvalidSession',
  /**
   * Impersonated user not found
   * If option `ambiguousErrorMessages` is true, this will never throw.
   */
  ImpersonatedUserNotFound = 'ImpersonatedUserNotFound',
  // Thrown by FindSessionBysessionTokenErrors
  /**
   * Will throw if access token is missing.
   */
  InvalidToken = 'InvalidToken',
  /**
   * Will throw if verification of the access token failed.
   */
  TokenVerificationFailed = 'TokenVerificationFailed',
  /**
   * Will throw if session is not found.
   */
  SessionNotFound = 'SessionNotFound',
}

export enum RefreshTokensErrors {
  /**
   * Will throw if access or refresh token are missing.
   */
  InvalidTokens = 'InvalidTokens',
  /**
   * Will throw if verification of the access token or refresh token failed.
   */
  TokenVerificationFailed = 'TokenVerificationFailed',
  /**
   * Will throw if session is not found.
   */
  SessionNotFound = 'SessionNotFound',
  /**
   * Will throw if user is not found.
   */
  UserNotFound = 'UserNotFound',
  /**
   * Session is not valid
   */
  InvalidSession = 'InvalidSession',
}

export enum LogoutErrors {
  /**
   * Session is not valid
   */
  InvalidSession = 'InvalidSession',
  // Thrown by FindSessionBysessionTokenErrors
  /**
   * Will throw if access token is missing.
   */
  InvalidToken = 'InvalidToken',
  /**
   * Will throw if verification of the access token failed.
   */
  TokenVerificationFailed = 'TokenVerificationFailed',
  /**
   * Will throw if session is not found.
   */
  SessionNotFound = 'SessionNotFound',
}

export enum FindSessionBysessionTokenErrors {
  /**
   * Will throw if access token is missing.
   */
  InvalidToken = 'InvalidToken',
  /**
   * Will throw if verification of the access token failed.
   */
  TokenVerificationFailed = 'TokenVerificationFailed',
  /**
   * Will throw if session is not found.
   */
  SessionNotFound = 'SessionNotFound',
}

export enum ResumeSessionErrors {
  /**
   * Will throw if user is not found.
   */
  UserNotFound = 'UserNotFound',
  /**
   * Session is not valid
   */
  InvalidSession = 'InvalidSession',
  // Thrown by FindSessionBySessionTokenErrors
  /**
   * Will throw if access token is missing.
   */
  InvalidToken = 'InvalidToken',
  /**
   * Will throw if verification of the access token failed.
   */
  TokenVerificationFailed = 'TokenVerificationFailed',
  /**
   * Will throw if session is not found.
   */
  SessionNotFound = 'SessionNotFound',
}

export const AccountErrorsKindEnum = {
  ...AuthenticateWithServiceErrors,
  ...LoginWithServiceErrors,
  ...ImpersonateErrors,
  ...RefreshTokensErrors,
  ...LogoutErrors,
  ...ResumeSessionErrors,
  ...RequestErrors,
};

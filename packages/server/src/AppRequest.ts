import { Unauthorized } from 'http-errors';

import { AppLogger } from './AppLogger';
import {
  BaseRequestHandler,
  HeaderRecordInit,
  RequestBody,
} from './BaseRequestHandler';

export type AppRequestInit = {
  locals?: Record<string, unknown>;
  url: string | undefined;
  headers: HeaderRecordInit | Headers;
  body: RequestBody;
  method: string;
  userId?: string;
  permissions?: string[];
};

export let __LOCAL_DEV_USERID__ =
  process.env.NODE_ENV === 'development' ? '__LOCAL_DEV_USERID__' : null;

export class AppRequest extends BaseRequestHandler {
  private _userId?: string;
  private _permissions: Set<string>;
  input: AppRequestInit;

  constructor(input: AppRequestInit) {
    super(input);
    this.input = input;
    const { locals = {}, userId, permissions = [] } = input;
    this.locals = locals;
    this._userId = userId;
    this._permissions = new Set<string>(permissions);
  }

  getPermissions = () => {
    return [...this._permissions.values()];
  };

  locals: Record<string, unknown>;

  userIdOptional(): string | undefined {
    return this._userId || __LOCAL_DEV_USERID__ || undefined;
  }

  assertPermission(permission: string): boolean {
    const userId = this.userId();
    if (this.hasPermission(permission)) return true;
    AppLogger.error('Unauthorized', { userId, permission });
    throw new Unauthorized();
  }

  hasPermission(permission: string): boolean {
    if (__LOCAL_DEV_USERID__) return true;
    return this._permissions.has(permission);
  }

  userId(strict = true): string {
    const userId = this.userIdOptional();
    if (userId) return userId;
    if (strict) {
      throw new Unauthorized();
    }
    return '';
  }

  static create = (input: AppRequestInit): AppRequest => {
    return new AppRequest(input);
  };
}

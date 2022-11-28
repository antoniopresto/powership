import { DeleteManyResult, Transporter } from '@backland/transporter';
import { NodeLogger, ulid, uniqBy } from '@backland/utils';

import { SessionRequest, Sessions, SessionsOptions } from './Sessions';
import {
  AccessTypeEntity as __AccessTypeEntity,
  AccessTypeDocument,
} from './entity/AccessTypeEntity';
import { AccountEntity as __AccountEntity } from './entity/AccountEntity';
import type {
  AccountDocument,
  AccountEntity,
  AccountInput,
} from './entity/AccountEntity';
import { SessionEntity as __SessionEntity } from './entity/SessionEntity';
import { TokenEntity as __TokenEntity } from './entity/TokenEntity';
import type { TokenDocument } from './entity/TokenEntity';
import {
  AccessType,
  accessTypesEnum,
  AccessTypeUnion,
} from './types/AccessType';
import { LoginResult } from './types/LoginResult';
import { Token, tokenKindEnum } from './types/TokenType';
import { PasswordHash } from './utils/PasswordHash';
import { createRandomToken } from './utils/crypto';

export interface AccountsOptions {
  transporter: Transporter;
  sessions: SessionsOptions;
}

export type CreateUserPasswordInput = {
  [K: string]: unknown;
  email: string;
  password: string;
  request?: Record<string, any>;
  username: string;
  extraContacts?: AccessTypeUnion[];
};

export class Accounts {
  get addHooks() {
    return this.AccountEntity.addHooks as AccountEntity['addHooks'];
  }

  sessions: Sessions;

  AccountEntity = __AccountEntity;
  TokenEntity = __TokenEntity;
  AccessTypeEntity = __AccessTypeEntity;
  SessionEntity = __SessionEntity;

  constructor(options: AccountsOptions) {
    const { transporter } = options;
    this.sessions = new Sessions(options.sessions);
    this.AccountEntity.setOption('transporter', transporter);
    this.TokenEntity.setOption('transporter', transporter);
    this.AccessTypeEntity.setOption('transporter', transporter);
    this.SessionEntity.setOption('transporter', transporter);
  }

  /**
   * Create a new account by providing an email and/or a username and password.
   * Emails are saved lowercased.
   */
  public async createAccount(
    input: CreateUserPasswordInput
  ): Promise<AccountDocument> {
    const {
      password,
      email,
      username,
      request,
      extraContacts = [],
      ...cleanUser
    } = input;

    const accountId = ulid();

    const passwordToken: Token = {
      accountId,
      kind: tokenKindEnum.password,
      reason: 'signup',
      createdFor: accountId,
      value: await PasswordHash.hash({ password }),
    };

    const emailAccess: AccessType = {
      accountId,
      verified: false,
      data: {
        kind: accessTypesEnum.email,
        value: email.toLowerCase(),
      },
    };

    const accessTypes = uniqBy(
      extraContacts.filter(
        (el) =>
          !(
            el.kind === emailAccess.data.kind &&
            el.value === emailAccess.data.value
          )
      ),
      (el) => `${el.kind}_${el.value}`
    ).map((data) => {
      return {
        accountId,
        verified: false,
        data,
      };
    });

    const user: AccountInput = {
      ...cleanUser,
      accountId,
      accessTypes: [emailAccess, ...accessTypes],
      tokens: [passwordToken],
      sessions: [],
      deactivated: false,
      permissions: [`admin_profile:${accountId}`],
      username,
    };

    const ret = await this.AccountEntity.createOne({
      context: request || {},
      item: user,
    });

    if (!ret.item) {
      throw new Error(ret.error || 'Failed to create user');
    }

    return ret.item as AccountDocument;
  }

  /**
   * Marks the user's email address as verified.
   * @param input
   * @param input.accountId Id used to update the user.
   * @param input.email The email address to mark as verified.
   */
  public async verifyEmail(input: {
    accountId: string;
    email: string;
  }): Promise<AccessTypeDocument> {
    const { accountId, email } = input;

    const ret = await this.AccessTypeEntity.updateOne({
      filter: { accountId },
      condition: {
        'data.kind': 'email',
        'data.value': email.toLowerCase(),
      },
      context: {},
      update: {
        $set: {
          verified: true,
        },
      },
    });

    if (!ret.item) {
      throw new Error(ret.error || 'User not found');
    }

    return ret.item;
  }

  /**
   * Change the password for a user.
   * @param input.accountId Id used to update the user.
   * @param input.newPassword A new password for the user.
   */
  public async setPassword(input: {
    accountId: string;
    newPassword: string;
  }): Promise<TokenDocument> {
    const { accountId, newPassword } = input;

    const passwordToken: Token = {
      accountId: accountId,
      kind: tokenKindEnum.password,
      createdFor: accountId,
      value: await PasswordHash.hash({ password: newPassword }),
    };

    const ret = await this.TokenEntity.updateOne({
      context: {},
      upsert: true,
      filter: {
        accountId: accountId,
        kind: tokenKindEnum.password,
        createdFor: accountId,
      },
      update: {
        $set: { value: passwordToken.value },
        $setOnInsert: passwordToken,
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item;
  }

  /**
   * Add an email verification token to a user.
   * @param input.accountId Id used to update the user.
   * @param input.email Which address of the user's to link the token to.
   * @param input.token Random token used to verify the user email.
   */
  public async addEmailVerificationToken(input: {
    accountId: string;
    email: string;
    token?: string;
  }): Promise<TokenDocument> {
    const { accountId, email, token = createRandomToken() } = input;

    const tokenItem: Token = {
      accountId: accountId,
      kind: tokenKindEnum.email_verification,
      value: token,
      createdFor: email,
    };

    // TODO clear old tokens

    const ret = await this.TokenEntity.createOne({
      context: {},
      item: tokenItem,
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as TokenDocument;
  }

  /**
   * Add a reset password token to a user.
   * @param options.accountId Id used to update the user.
   * @param options.reason Reason to use for the token.
   * @param options.token a random token
   */
  public async addResetPasswordToken(options: {
    accountId: string;
    reason?: string;
    token?: string;
  }): Promise<TokenDocument> {
    const { accountId, reason, token = createRandomToken() } = options;

    const tokenItem: Token = {
      accountId,
      createdFor: accountId,
      kind: tokenKindEnum.password_recovery,
      reason: reason,
      value: token,
    };

    const ret = await this.TokenEntity.createOne({
      context: {},
      item: tokenItem,
    });

    if (ret.error) {
      NodeLogger.logError(ret.error);
    }

    if (!ret.item) {
      throw new Error('INVALID_OPERATION');
    }

    return ret.item as TokenDocument;
  }

  /**
   * Remove all the reset password tokens for a user.
   * @param input.accountId Id used to update the user.
   * @param input.context
   */
  public async removeAllResetPasswordTokens(input: {
    accountId: string;
    context?: Record<string, any>;
  }): Promise<DeleteManyResult> {
    const { accountId, context = {} } = input;

    return await this.TokenEntity.deleteMany({
      context,
      filter: {
        accountId,
        kind: tokenKindEnum.password_recovery,
      } as any,
    });
  }

  findUser = async ({
    username,
    context = {},
  }: {
    username: string;
    context?: any;
  }): Promise<AccountDocument | null> => {
    return (
      await this.AccountEntity.findOne({
        filter: { username },
        context,
      })
    ).item;
  };

  async userByPasswordLogin(input: {
    username: string;
    password: string;
    request: SessionRequest;
  }): Promise<LoginResult> {
    const { username, password, request } = input;

    const foundUser = await this.findUser({
      username,
    });

    if (!foundUser) {
      throw new Error('LOGIN_FAILED');
    }

    const { item: token } = await this.TokenEntity.findOne({
      filter: {
        accountId: foundUser.accountId,
        kind: tokenKindEnum.password,
        createdFor: foundUser.accountId,
      },
      context: {},
    });

    if (!token) {
      throw new Error('LOGIN_FAILED');
    }

    const hash = token.value;

    const { valid: isPasswordValid } = await PasswordHash.verify({
      password,
      hash,
    });

    if (!isPasswordValid) {
      throw new Error('LOGIN_FAILED');
    }

    const result = await this.sessions.upsertRefreshTokenAndSessionDocument({
      account: foundUser,
      request,
      op: 'insert',
    });

    request.authToken = result.authToken;
    request.user = result.account;
    return result;
  }

  get handleRequest() {
    return this.sessions.handleRequest;
  }

  get refreshTokens() {
    return this.sessions.refreshTokens;
  }

  get logout() {
    return this.sessions.logout;
  }
}

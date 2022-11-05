import crypto from 'crypto';

import { Transporter } from '@backland/transporter';
import { ulid } from '@backland/utils';

import {
  AccessTypeDocument,
  AccessTypeEntity,
} from './entity/AccessTypeEntity';
import {
  AccountDocument,
  AccountEntity,
  AccountInput,
} from './entity/AccountEntity';
import { TokenDocument, TokenEntity } from './entity/TokenEntity';
import { AccessType, accessTypesEnum } from './types/AccessType';
import { Token, tokenKindEnum } from './types/TokenType';
import { PasswordHash } from './utils/PasswordHash';

export interface PasswordHandlerOptions {
  transporter?: Transporter;
}

export type CreateUserPasswordInput = {
  [K: string]: unknown;
  email: string;
  password: string;
  request?: Record<string, any>;
  username: string;
};

export class AccountPassword<Options extends PasswordHandlerOptions> {
  get addHooks() {
    return AccountEntity.addHooks as AccountEntity['addHooks'];
  }

  constructor(options: Options) {
    const { transporter } = options;
    if (transporter) {
      AccountEntity.setOption('transporter', transporter);
      TokenEntity.setOption('transporter', transporter);
      AccessTypeEntity.setOption('transporter', transporter);
    }
  }

  /**
   * Create a new user by providing an email and/or a username and password.
   * Emails are saved lowercased.
   */
  public async createUser({
    password,
    email,
    username,
    request,
    ...cleanUser
  }: CreateUserPasswordInput): Promise<AccountDocument> {
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

    const user: AccountInput = {
      ...cleanUser,
      accountId,
      access: [emailAccess],
      tokens: [passwordToken],
      deactivated: false,
      permissions: [`admin_profile:${accountId}`],
      username,
    };

    const ret = await AccountEntity.createOne({
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

    const ret = await AccessTypeEntity.updateOne({
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
   * @param accountId Id used to update the user.
   * @param newPassword A new password for the user.
   */
  public async setPassword(
    accountId: string,
    newPassword: string
  ): Promise<TokenDocument> {
    const passwordToken: Token = {
      accountId: accountId,
      kind: tokenKindEnum.password,
      createdFor: accountId,
      value: await PasswordHash.hash({ password: newPassword }),
    };

    const ret = await TokenEntity.updateOne({
      context: {},
      upsert: true,
      filter: {
        accountId: accountId,
        kind: tokenKindEnum.password,
        createdFor: accountId,
      },
      update: {
        $set: passwordToken,
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as TokenDocument;
  }

  /**
   * Add an email verification token to a user.
   * @param accountId Id used to update the user.
   * @param email Which address of the user's to link the token to.
   * @param token Random token used to verify the user email.
   */
  public async addEmailVerificationToken(
    accountId: string,
    email: string,
    token: string
  ): Promise<TokenDocument> {
    const tokenItem: Token = {
      accountId: accountId,
      kind: tokenKindEnum.email_verification,
      value: token,
      createdFor: email,
    };

    const ret = await TokenEntity.updateOne({
      context: {},
      filter: { accountId: accountId, kind: tokenItem.kind, createdFor: email },
      upsert: true,
      update: {
        $set: tokenItem,
      },
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
    reason: string;
    token?: string;
  }): Promise<TokenDocument> {
    const { accountId, reason } = options;
    const token =
      options.token ||
      (await PasswordHash.hash({ password: crypto.randomUUID() }));

    const tokenItem: Token = {
      accountId,
      createdFor: accountId,
      kind: tokenKindEnum.password_recovery,
      reason: reason,
      value: token,
    };

    const ret = await TokenEntity.updateOne({
      context: {},
      upsert: true,
      filter: {
        accountId,
        kind: tokenKindEnum.password_recovery,
        createdFor: accountId,
      },
      update: {
        $set: tokenItem,
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as TokenDocument;
  }

  /**
   * Remove all the reset password tokens for a user.
   * @param accountId Id used to update the user.
   * @param context
   */
  public async removeAllResetPasswordTokens(
    accountId: string,
    context: Record<string, any> = {}
  ): Promise<void> {
    await TokenEntity.deleteMany({
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
      await AccountEntity.findOne({
        filter: { username },
        context,
      })
    ).item;
  };

  async userByPasswordLogin(input: {
    username: string;
    password: string;
  }): Promise<AccountDocument> {
    const { username, password } = input;

    const foundUser = await this.findUser({
      username,
    });

    if (!foundUser) {
      throw new Error('LOGIN_FAILED');
    }

    const { item: token } = await TokenEntity.findOne({
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

    return foundUser as AccountDocument;
  }
}

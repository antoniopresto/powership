import { DeleteManyResult, Transporter } from '@backland/transporter';
import { NodeLogger, ulid } from '@backland/utils';

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
import { generateRandomToken } from './utils/tokens';

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

    const ret = await TokenEntity.updateOne({
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
    const { accountId, email, token = generateRandomToken() } = input;

    const tokenItem: Token = {
      accountId: accountId,
      kind: tokenKindEnum.email_verification,
      value: token,
      createdFor: email,
    };

    // TODO clear old tokens

    const ret = await TokenEntity.createOne({
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
    const { accountId, reason, token = generateRandomToken() } = options;

    const tokenItem: Token = {
      accountId,
      createdFor: accountId,
      kind: tokenKindEnum.password_recovery,
      reason: reason,
      value: token,
    };

    const ret = await TokenEntity.createOne({
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
   * Add a session token to a user.
   * @param options.accountId Id used to update the user.
   * @param options.reason Reason to use for the token.
   * @param options.token a random token
   */
  public async addSessionToken(options: {
    accountId: string;
    reason?: string;
    token?: string;
  }): Promise<TokenDocument> {
    const { accountId, reason, token = generateRandomToken() } = options;

    const tokenItem: Token = {
      accountId,
      createdFor: accountId,
      kind: tokenKindEnum.session,
      reason: reason,
      value: token,
    };

    const ret = await TokenEntity.createOne({
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

    return await TokenEntity.deleteMany({
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

  // /**
  //  * @description Refresh a user token.
  //  * @param {string} token - User session token.
  //  * @param {boolean} isImpersonated - Should be true if impersonating another user.
  //  * @param {User} user - The user object.
  //  * @returns {Promise<Tokens>} - Return a new accessToken and refreshToken.
  //  */
  // createTokens({
  //   token,
  //   isImpersonated = false,
  //   user,
  // }: {
  //   token: string;
  //   isImpersonated?: boolean;
  //   user: AccountDocument;
  // }) {
  //   const jwtData: AccountJwtData = {
  //     token,
  //     isImpersonated,
  //     accountId: user.accountId,
  //   };
  //
  //   const accessToken = signJWT({
  //     payload: jwtData,
  //     secret: ,
  //   });
  //
  //   const refreshToken = signJWT({
  //     secret: this.getSecretOrPrivateKey(),
  //   });
  //
  //   return { accessToken, refreshToken };
  // }
}

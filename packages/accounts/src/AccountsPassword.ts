import { ulid } from '@backland/utils';
import crypto from 'crypto';
import { AccessType, accessTypesEnum } from './AccessType';
import { Account, AccountInput, AccountSchema } from './AccountSchema';
import { Password } from './Password';
import { Token, tokenKindEnum } from './TokenType';
import { AccountsEntity } from './AccountsEntity';
import { EntityDocument } from '@backland/entity';

export interface PasswordHandlerOptions<
  TEntity extends AccountsEntity = AccountsEntity
> {
  accountEntity: TEntity;
}

export type CreateUserPasswordInput = {
  [K: string]: unknown;
  email: string;
  password: string;
  request?: Record<string, any>;
  username: string;
};

export class AccountsPassword<TEntity extends AccountsEntity> {
  private options: PasswordHandlerOptions<TEntity>;

  accountEntity: AccountsEntity;

  get addHooks() {
    return this.accountEntity.addHooks as TEntity['addHooks'];
  }

  constructor(options: PasswordHandlerOptions<TEntity>) {
    const accountEntity = options.accountEntity;
    this.options = options;
    this.accountEntity = accountEntity as TEntity;
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
  }: CreateUserPasswordInput): Promise<DocType<TEntity>> {
    const date = new Date();
    const accountId = ulid();

    const passwordToken: Token = {
      createdAt: date,
      kind: tokenKindEnum.password,
      reason: 'signup',
      value: await Password.hash({ password }),
    };

    const emailAccess: AccessType = {
      createdAt: date,
      kind: accessTypesEnum.email,
      updatedAt: date,
      value: email.toLowerCase(),
      verified: false,
    };

    const user: AccountInput = {
      ...cleanUser,
      access: [emailAccess],
      deactivated: false,
      permissions: [`admin_profile:${accountId}`],
      tokens: [passwordToken],
      username,
    };

    const ret = await this.accountEntity.createOne({
      context: request || {},
      item: AccountSchema.parse(user),
    });

    if (!ret.item) {
      throw new Error(ret.error || 'Failed to create user');
    }

    return ret.item as DocType<TEntity>;
  }

  /**
   * Marks the user's email address as verified.
   * @param input
   * @param input.userId Id used to update the user.
   * @param input.email The email address to mark as verified.
   */
  public async verifyEmail(input: {
    id: string;
    email: string;
  }): Promise<DocType<TEntity>> {
    const { id, email } = input;

    const ret = await this.accountEntity.updateOne({
      condition: {
        'access.value': email,
      },
      context: {},
      filter: { id },
      update: {
        $set: {
          'access.$.verified': true,
        },
      },
    });

    if (!ret.item) {
      throw new Error(ret.error || 'User not found');
    }

    return ret.item as DocType<TEntity>;
  }

  /**
   * Change the password for a user.
   * @param userId Id used to update the user.
   * @param newPassword A new password for the user.
   */
  public async setPassword(
    userId: string,
    newPassword: string
  ): Promise<DocType<TEntity>> {
    const passwordToken: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.password,
      value: await Password.hash({ password: newPassword }),
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      condition: {
        $or: [
          { 'tokens.kind': tokenKindEnum.password },
          { 'tokens.kind': { $exists: false } },
        ],
      },
      update: {
        $remove: ['tokens.$'],
        $append: { tokens: passwordToken },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as DocType<TEntity>;
  }

  /**
   * Add an email verification token to a user.
   * @param userId Id used to update the user.
   * @param email Which address of the user's to link the token to.
   * @param token Random token used to verify the user email.
   */
  public async addEmailVerificationToken(
    userId: string,
    email: string,
    token: string
  ): Promise<DocType<TEntity>> {
    const tokenItem: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.email_verification,
      value: token,
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      condition: {
        $or: [
          { 'tokens.kind': tokenKindEnum.email_verification },
          { 'tokens.kind': { $exists: false } },
        ],
      },
      update: {
        $remove: ['tokens.$'],
        $append: { tokens: tokenItem },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as DocType<TEntity>;
  }

  /**
   * Add a reset password token to a user.
   * @param options.userId Id used to update the user.
   * @param options.reason Reason to use for the token.
   * @param options.token a random token
   */
  public async addResetPasswordToken(options: {
    userId: string;
    reason: string;
    token?: string;
  }): Promise<DocType<TEntity>> {
    const { userId, reason } = options;
    const token =
      options.token || (await Password.hash({ password: crypto.randomUUID() }));

    const tokenItem: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.password_recovery,
      reason: reason,
      value: token,
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      condition: {
        $or: [
          { 'tokens.kind': tokenKindEnum.password_recovery },
          { 'tokens.kind': { $exists: false } },
        ],
      },
      update: {
        $remove: ['tokens.$'],
        $append: { tokens: tokenItem },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as DocType<TEntity>;
  }

  /**
   * Remove all the reset password tokens for a user.
   * @param userId Id used to update the user.
   * @param context
   */
  public async removeAllResetPasswordTokens(
    userId: string,
    context: Record<string, any> = {}
  ): Promise<DocType<TEntity>> {
    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      condition: {
        $or: [{ 'tokens.kind': tokenKindEnum.password_recovery }],
      },
      update: {
        $remove: ['tokens.$'],
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }

    return ret.item as DocType<TEntity>;
  }

  findUser = async ({
    username,
    context = {},
  }: {
    username: string;
    context?: any;
  }): Promise<AnyUser | null> => {
    return (
      await this.accountEntity.findOne({
        filter: { username } as any,
        context,
      })
    ).item as unknown as AnyUser | null;
  };

  async userByPasswordLogin(input: {
    username: string;
    password: string;
  }): Promise<DocType<TEntity>> {
    const { username, password } = input;

    const foundUser = await this.findUser({ username });

    if (!foundUser) {
      throw new Error('LOGIN_FAILED');
    }

    const token = foundUser.tokens.find(
      (el) => el.kind === tokenKindEnum.password
    );
    const hash: string | undefined = token?.value;

    if (!hash) {
      throw new Error('LOGIN_FAILED');
    }

    const { valid: isPasswordValid } = await Password.verify({
      password,
      hash,
    });

    if (!isPasswordValid) {
      throw new Error('LOGIN_FAILED');
    }

    return foundUser as any;
  }
}

type AnyUser = {
  [K in keyof DocType<AccountsEntity>]: DocType<AccountsEntity>[K];
} & {};

type DocType<TEntity> = TEntity extends { parse(...args: any[]): infer Res }
  ? EntityDocument<Res> & Account
  : Account;

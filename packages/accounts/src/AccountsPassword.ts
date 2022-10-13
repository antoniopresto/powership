import { ulid } from '@backland/utils';

import { AccessType, accessTypesEnum } from './AccessType';
import { AccessTypesRecord, Account } from './AccountSchema';
import { Password } from './Password';
import { Token, tokenKindEnum } from './TokenType';
import { AccountEntity, createDefaultAccountEntity } from './entity';

export interface PasswordHandlerOptions<
  TEntity extends AccountEntity = AccountEntity
> {
  accountEntity?: TEntity;
}

export type CreateUserPasswordInput = {
  [K: string]: unknown;
  email: string;
  password: string;
  request?: Record<string, any>;
  username: string;
};

export class AccountsPassword<TEntity extends AccountEntity = AccountEntity> {
  private options: PasswordHandlerOptions<TEntity>;

  accountEntity: AccountEntity;

  get addHooks() {
    return this.accountEntity.addHooks as TEntity['addHooks'];
  }

  constructor(options: PasswordHandlerOptions<TEntity> = {}) {
    const accountEntity =
      options.accountEntity || (createDefaultAccountEntity() as TEntity);

    this.options = {
      accountEntity,
      ...options,
    };

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
  }: CreateUserPasswordInput): Promise<{ id: string }> {
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

    const accessTypes = {
      [`${accessTypesEnum.email}_${emailAccess.value}`]: emailAccess,
    } as unknown as AccessTypesRecord;

    const user: Account = {
      ...cleanUser,
      accessTypes,
      accountId,
      deactivated: false,
      id: accountId,
      permissions: [`admin_profile:${accountId}`],
      tokens: {
        password: passwordToken,
      },
      username,
    };

    const ret = await this.accountEntity.createOne({
      context: request || {},
      item: user,
    });

    if (ret.error) {
      throw new Error(ret.error);
    }

    return { id: ret.item!.id };
  }

  /**
   * Marks the user's email address as verified.
   * @param userId Id used to update the user.
   * @param email The email address to mark as verified.
   */
  public async verifyEmail(userId: string, email: string): Promise<void> {
    const emailKey = `accessTypes.email_${email}`;

    const ret = await this.accountEntity.updateOne({
      condition: {
        [emailKey]: { $exists: true },
      },
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          [`${emailKey}.verified`]: true,
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  /**
   * Change the password for a user.
   * @param userId Id used to update the user.
   * @param newPassword A new password for the user.
   */
  public async setPassword(userId: string, newPassword: string): Promise<void> {
    const passwordToken: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.password,
      value: await Password.hash({ password: newPassword }),
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          [`tokens.${tokenKindEnum.password}`]: passwordToken,
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
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
  ): Promise<void> {
    const tokenItem: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.email_verification,
      value: token,
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          [`tokens.${tokenKindEnum.email_verification}`]: tokenItem,
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  /**
   * Add a reset password token to a user.
   * @param userId Id used to update the user.
   * @param token Random token used to verify the user email.
   * @param reason Reason to use for the token.
   */
  public async addResetPasswordToken(
    userId: string,
    token: string,
    reason: string
  ): Promise<void> {
    const tokenItem: Token = {
      createdAt: new Date(),
      kind: tokenKindEnum.password_recovery,
      reason,
      value: token,
    };

    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          [`tokens.${tokenKindEnum.password_recovery}`]: tokenItem,
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  /**
   * Remove all the reset password tokens for a user.
   * @param userId Id used to update the user.
   * @param context
   */
  public async removeAllResetPasswordTokens(
    userId: string,
    context: Record<string, any> = {}
  ): Promise<void> {
    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $remove: [`tokens.${tokenKindEnum.password_recovery}`],
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }
}

import { ulid } from '@backland/utils';

import { Account, tokenTypeEnum } from './AccountSchema';
import { Password } from './Password';
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

export class PasswordHandler<TEntity extends AccountEntity = AccountEntity> {
  private options: PasswordHandlerOptions<TEntity>;

  accountEntity: TEntity;

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

    const user: Account = {
      ...cleanUser,
      accountId,
      deactivated: false,
      id: accountId,
      permissions: [`admin_profile:${accountId}`],
      providers: [
        {
          createdAt: date,
          kind: 'email',
          updatedAt: date,
          value: email.toLowerCase(),
        },
      ],
      tokens: [
        {
          createdAt: date,
          reason: 'signup',
          type: 'password',
          value: await Password.hash({ password }),
        },
      ],
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
    const ret = await this.accountEntity.updateOne({
      condition: {
        'providers.kind': 'email',
        'providers.value': email.toLowerCase(),
        'tokens.type': tokenTypeEnum.email_verification,
      },
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          'providers.$.verified': true,
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
    const ret = await this.accountEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          '__private.password.bcrypt': newPassword,
        },
      },
    });

    await this.tokenEntity.deleteOne({
      condition: {
        kind: tokenKindEnum.reset_password,
      },
      context: {},
      filter: { ownerId: userId },
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
      contact: email.toLowerCase(),
      kind: tokenKindEnum.email_verification,
      ownerId: userId,
      value: token,
    };

    await this.tokenEntity.updateOne({
      condition: {
        contact: email.toLowerCase(),
        kind: tokenKindEnum.email_verification,
      },
      context: {},
      filter: {
        ownerId: userId,
      },
      update: {
        $set: tokenItem,
      },
      upsert: true,
    });
  }

  /**
   * Add a reset password token to a user.
   * @param userId Id used to update the user.
   * @param email Which address of the user's to link the token to.
   * @param token Random token used to verify the user email.
   * @param reason Reason to use for the token.
   */
  public async addResetPasswordToken(
    userId: string,
    email: string,
    token: string,
    reason: string
  ): Promise<void> {
    const tokenItem: Token = {
      contact: email.toLowerCase(),
      kind: tokenKindEnum.reset_password,
      ownerId: userId,
      reason,
      value: token,
    };

    await this.tokenEntity.updateOne({
      condition: {
        contact: email.toLowerCase(),
        kind: tokenKindEnum.reset_password,
      },
      context: {},
      filter: {
        ownerId: userId,
      },
      update: {
        $set: tokenItem,
      },
      upsert: true,
    });
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
    const tokens = await this.tokenEntity.findMany({
      context,
      filter: { kind: tokenKindEnum.reset_password, ownerId: userId },
    });

    await Promise.allSettled(
      tokens.items.map(async (el) => {
        await this.tokenEntity.deleteOne({ context, filter: { id: el.id } });
      })
    ).then((el) =>
      el
        .filter((el) => el.status === 'rejected')
        .forEach((el) => {
          // @ts-ignore
          console.error(el.reason);
        })
    );
  }
}

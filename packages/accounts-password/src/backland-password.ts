import { CreateUserServicePassword, DatabaseInterfaceServicePassword, User } from '@accounts/types';
import { BacklandUser } from '@backland/account-types';
import { Token, tokenKindEnum } from './types/TokenSchema';
import { TokenEntity, UserEntity } from './types/entity';

export interface BacklandPasswordOptions {
  userEntity: UserEntity;
  tokenEntity: TokenEntity;
}

const defaultOptions = {};

export class BacklandServicePassword implements DatabaseInterfaceServicePassword {
  // Merged options that can be used
  private options: BacklandPasswordOptions & typeof defaultOptions;
  userEntity: UserEntity;
  tokenEntity: TokenEntity;

  constructor(options: BacklandPasswordOptions) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.userEntity = options.userEntity;
    this.tokenEntity = options.tokenEntity;
  }

  /***/
  public async setupIndexes(): Promise<void> {}

  /**
   * Create a new user by providing an email and/or a username and password.
   * Emails are saved lowercased.
   */
  public async createUser({
    password,
    email,
    origin,
    ...cleanUser
  }: CreateUserServicePassword & { username: string }): Promise<string> {
    const user: BacklandUser = {
      ...cleanUser,
      __private: {
        password: {
          bcrypt: password,
        },
      },
    };

    if (email) {
      user.emails = [{ address: email.toLowerCase() }];
    }

    const ret = await this.userEntity.createOne({ context: {}, item: user });

    if (ret.error) {
      throw new Error(ret.error);
    }

    return ret.item!.id;
  }

  /**
   * Get a user by his id.
   * @param userId Id used to query the user.
   * @param context request context
   */
  public async findUserById(
    userId: string,
    context: Record<string, any> = {}
  ): Promise<User | null> {
    return this.userEntity.findById({ id: userId, context });
  }

  /**
   * Get a user by one of his emails.
   * Email will be lowercased before running the query.
   * @param email Email used to query the user.
   * @param context request context
   */
  public async findUserByEmail(
    email: string,
    context: Record<string, any> = {}
  ): Promise<User | null> {
    const user = await this.userEntity.findOne({ filter: { email: email.toLowerCase() }, context });
    return user.item || null;
  }

  /**
   * Get a user by his username.
   */
  public async findUserByUsername(
    username: string,
    context: Record<string, any> = {}
  ): Promise<User | null> {
    const user = await this.userEntity.findOne({
      filter: { username: username.toLowerCase() },
      context,
    });
    return user.item || null;
  }

  /**
   * Return the user password hash.
   * If the user has no password set, will return null.
   * @param userId Id used to query the user.
   * @param context
   */
  public async findPasswordHash(
    userId: string,
    context: Record<string, any> = {}
  ): Promise<string | null> {
    const user = await this.findUserById(userId, context);
    return user?.__private?.password?.bcrypt ?? null;
  }

  /**
   * Get a user by one of the email verification token.
   * @param token Verification token used to query the user.
   * @param context
   */
  public async findUserByEmailVerificationToken(
    token: string,
    context: Record<string, any> = {}
  ): Promise<User | null> {
    const ret = await this.tokenEntity.findOne({
      filter: { value: token },
      condition: { kind: tokenKindEnum.email_verification },
      context,
    });
    if (!ret.item?.ownerId) return null;
    return this.userEntity.findById({ id: ret.item.ownerId, context });
  }

  /**
   * Get a user by one of the reset password token.
   * @param token Reset password token used to query the user.
   * @param context
   */
  public async findUserByResetPasswordToken(
    token: string,
    context: Record<string, any> = {}
  ): Promise<User | null> {
    const ret = await this.tokenEntity.findOne({
      context,
      filter: { value: token },
      condition: { kind: tokenKindEnum.reset_password },
    });

    if (!ret.item) {
      return null;
    }

    return this.userEntity.findById({ context, id: ret.item.ownerId });
  }

  /**
   * Add an email address for a user.
   * @param userId Id used to update the user.
   * @param newEmail A new email address for the user.
   * @param verified Whether the new email address should be marked as verified.
   */
  public async addEmail(userId: string, newEmail: string, verified: boolean): Promise<void> {
    const ret = await this.userEntity.updateOne({
      filter: { id: userId },
      context: {},
      update: {
        $addToSet: {
          // @ts-ignore
          emails: {
            address: newEmail.toLowerCase(),
            verified,
          },
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  /**
   * Remove an email address for a user.
   * @param userId Id used to update the user.
   * @param email The email address to remove.
   */
  public async removeEmail(userId: string, email: string): Promise<void> {
    const ret = await this.userEntity.updateOne({
      filter: { id: userId },
      context: {},
      update: {
        $pull: {
          // @ts-ignore
          emails: { address: email.toLowerCase() },
        },
      },
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  /**
   * Marks the user's email address as verified.
   * @param userId Id used to update the user.
   * @param email The email address to mark as verified.
   */
  public async verifyEmail(userId: string, email: string): Promise<void> {
    const ret = await this.userEntity.updateOne({
      filter: { id: userId },
      context: {},
      update: {
        $set: {
          'emails.$.verified': true,
        },
      },
    });

    await this.tokenEntity.deleteOne({
      filter: { ownerId: userId },
      condition: {
        kind: tokenKindEnum.email_verification,
        contact: email,
      },
      context: {},
    });

    if (!ret.item) {
      throw new Error('User not found');
    }
  }

  public async setUsername(): Promise<void> {
    // const id = this.options.convertUserIdToMongoObjectId ? toMongoID(userId) : userId;
    // const ret = await this.userCollection.updateOne(
    //   { _id: id },
    //   {
    //     $set: {
    //       username: newUsername,
    //       [this.options.timestamps.updatedAt]: this.options.dateProvider(),
    //     },
    //   }
    // );
    // if (
    //   (ret.modifiedCount && ret.modifiedCount === 0) ||
    //   (ret.result && ret.result.nModified === 0)
    // ) {
    throw new Error('NOT_ALLOWED');
    // }
  }

  /**
   * Change the password for a user.
   * @param userId Id used to update the user.
   * @param newPassword A new password for the user.
   */
  public async setPassword(userId: string, newPassword: string): Promise<void> {
    const ret = await this.userEntity.updateOne({
      context: {},
      filter: { id: userId },
      update: {
        $set: {
          '__private.password.bcrypt': newPassword,
        },
      },
    });

    await this.tokenEntity.deleteOne({
      filter: { ownerId: userId },
      condition: {
        kind: tokenKindEnum.reset_password,
      },
      context: {},
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
      filter: {
        ownerId: userId,
      },
      condition: {
        contact: email.toLowerCase(),
        kind: tokenKindEnum.email_verification,
      },
      context: {},
      upsert: true,
      update: {
        $set: tokenItem,
      },
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
      value: token,
      reason,
    };

    await this.tokenEntity.updateOne({
      filter: {
        ownerId: userId,
      },
      condition: {
        contact: email.toLowerCase(),
        kind: tokenKindEnum.reset_password,
      },
      context: {},
      upsert: true,
      update: {
        $set: tokenItem,
      },
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
      filter: { ownerId: userId, kind: tokenKindEnum.reset_password },
      context,
    });

    await Promise.allSettled(
      tokens.items.map(async (el) => {
        await this.tokenEntity.deleteOne({ filter: { id: el.id }, context });
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

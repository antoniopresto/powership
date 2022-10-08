import { DocumentMethods } from '@backland/transporter';
import { As, Merge } from '@backland/utils';

import { AccountsToken } from './AccountsTokenSchema';
import { AccountsUser } from './UserSchema';

export type UserEntity<T extends AccountsUser = AccountsUser> =
  AccountsEntityBase<T>;

export type TokenEntity<T extends AccountsToken = AccountsToken> =
  AccountsEntityBase<T>;

export type CommonEntityFields = { name: string };

export type AccountsEntityBase<
  T extends Record<string, any>,
  PK extends string = As<keyof T, string>,
  SK extends string | undefined = As<keyof T, string> | undefined
> = DocumentMethods<T, PK, SK> extends infer M
  ? {
      [K in keyof Merge<CommonEntityFields, M>]: Merge<
        CommonEntityFields,
        M
      >[K];
    }
  : any;

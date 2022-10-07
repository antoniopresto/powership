import { TokenEntity, UserEntity } from './entity';

export interface AccountsMongoOptions {
  userEntity: UserEntity;
  tokenEntity: TokenEntity;
}

import { createResolver } from '@powership/schema';

import { AnyEntity } from './EntityInterfaces';

export class EntityResolversChain<TEntity extends AnyEntity = AnyEntity> {
  private entity: TEntity;

  constructor(entity: TEntity) {
    this.entity = entity;
  }

  create = <Name extends string>(name: Name) => {
    const {
      type,
      edgeType,
      databaseType,
      inputType,
      paginationType,
      originType,
      indexGraphTypes,
    } = this.entity;

    const current = {
      name,
    } as const;
  };
}




const x = 

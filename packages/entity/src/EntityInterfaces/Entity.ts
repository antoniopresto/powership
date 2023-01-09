import { DocumentIndexItem } from '@backland/transporter';
import { AnyFunction } from '@backland/utils';

import { EntityTypesContext } from './Context';
import { EntityFromContext } from './EntityFromContext';

export interface Entity<Input, Indexes>
  extends EntityFromContext<EntityTypesContext<Input, Indexes>> {
  name: string;
}

export type _AnyEntity = EntityFromContext<
  EntityTypesContext<{}, DocumentIndexItem[]>
>;

export type AnyEntity = {
  [K in keyof _AnyEntity]: _AnyEntity[K] extends AnyFunction
    ? AnyFunction
    : any;
} & {};

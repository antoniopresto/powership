import { DocumentIndexItem } from '@powership/transporter';

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
  [K in keyof _AnyEntity]: any;
};

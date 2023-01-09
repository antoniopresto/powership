import { ObjectDefinitionInput, ObjectFieldInput } from '@backland/schema';
import { LoaderContext } from '@backland/transporter';

import { EntityFieldResolver } from '../EntityOptions';

import { EntityTypesContext } from './Context';

export interface EntityAddRelation<
  Parent,
  EContext extends EntityTypesContext<any, any>
> {
  <
    Context extends LoaderContext,
    Definition extends ObjectFieldInput,
    ArgsDef extends ObjectDefinitionInput
  >(
    options: EntityFieldResolver<
      Context,
      Definition,
      ArgsDef,
      EContext['document']
    >
  ): Parent;
}

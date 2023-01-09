import { ObjectDefinitionInput, ObjectFieldInput } from '@backland/schema';
import { LoaderContext } from '@backland/transporter';

import { EntityFieldResolver } from '../EntityOptions';

import { AnyEntityTypesContext } from './Context';

export interface EntityAddRelation<
  Parent,
  EContext extends AnyEntityTypesContext
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

import { ObjectDefinitionInput, ObjectFieldInput } from '@swind/schema';
import { LoaderContext } from '@swind/transporter';

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

import type { FieldDefinitionWithType } from '../_fieldDefinitions';

import type { Infer } from './Infer';

export interface GraphTypeLikeFieldDefinition {
  __isGraphType: true;
  definition: any;
}

export interface GraphTypeInTypeFieldDefinition
  extends FieldDefinitionWithType<GraphTypeLikeFieldDefinition> {}

export type InferGraphType<Input> =
  //
  Input extends unknown
    ? Input extends GraphTypeLikeFieldDefinition
      ? Infer<Input['definition']>
      : never
    : never;

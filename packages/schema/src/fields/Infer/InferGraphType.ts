import type { CommonFieldDefinition } from '../_fieldDefinitions';

import type { InferField } from './InferField';

export interface GraphTypeLikeFieldDefinition {
  __isGraphType: true;
  definition: any;
}

export interface GraphTypeInTypeFieldDefinition
  extends CommonFieldDefinition<GraphTypeLikeFieldDefinition> {}

export type InferGraphType<Input> =
  //
  Input extends unknown
    ? Input extends GraphTypeLikeFieldDefinition
      ? InferField<Input['definition']>
      : never
    : never;

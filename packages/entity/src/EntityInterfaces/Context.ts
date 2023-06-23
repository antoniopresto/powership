import { Infer, ObjectDefinitionInput } from '@powership/schema';
import { DocumentIndexItem } from '@powership/transporter';
import { IsKnown, Merge } from '@powership/utils';

import { EntityOptions } from '../EntityOptions';
import { EntityDocumentBaseDef } from '../defaultFields';

import { EntityDocument, EntityDocumentInput } from './Document';

export interface EntityTypesContext<InputDef, Indexes> {
  /**
   *
   */
  originDefinition: IsKnown<InputDef> extends 1
    ? [InputDef] extends [ObjectDefinitionInput]
      ? InputDef
      : {}
    : {};

  /**
   *
   */
  indexes: IsKnown<Indexes> extends 1
    ? Indexes extends
        | ReadonlyArray<DocumentIndexItem<string>>
        | DocumentIndexItem<string>[]
      ? Indexes
      : []
    : [];

  /**
   *
   */
  outputDefinition: this['originDefinition'] extends infer D
    ? Merge<EntityDocumentBaseDef, D>
    : {};

  /**
   *
   */
  options: EntityOptions<this['originDefinition'], this['indexes']>;

  /**
   *
   */
  documentBase: this['originDefinition'] extends infer D
    ? Infer<{ object: D }>
    : {};

  /**
   *
   */
  documentCreationInput: this['documentBase'] extends infer D
    ? EntityDocumentInput<D>
    : {};

  /**
   *
   */
  document: this['documentBase'] extends infer D ? EntityDocument<D> : {};
}

export type AnyEntityTypesContext = {
  [K in keyof EntityTypesContext<any, any>]: any;
} & {};

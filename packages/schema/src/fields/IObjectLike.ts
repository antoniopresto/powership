import { FieldDefinitionConfig } from '../TObjectConfig';

import { TAnyFieldType } from './FieldType';
import { FinalFieldDefinition } from './_parseFields';

export interface ObjectLike {
  __isBacklandObject: true;
  definition: { [K: string]: any };
}

export interface GraphTypeLike {
  __field: TAnyFieldType;
  __isGraphType: true;
  readonly _object: ObjectLike | undefined;
  definition: FinalFieldDefinition;
  definitionInput: FieldDefinitionConfig;
  readonly id: string;
}

import { FieldDefinitionConfig } from '../TObjectConfig';

import { TAnyFieldType } from './FieldType';
import { FinalFieldDefinition } from './_parseFields';

export interface ObjectLike {
  definition: { [K: string]: any };
  __isDarchObject: true;
}

export interface GraphTypeLike {
  __isGraphType: true;
  definition: FinalFieldDefinition;
  definitionInput: FieldDefinitionConfig;
  __field: TAnyFieldType;
  readonly id: string;
  readonly _object: ObjectLike | undefined;
}

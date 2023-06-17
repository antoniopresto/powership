import { Infer } from '../Infer';
import { FieldDefinition } from '../fields/_parseFields';

export type $type_def = FieldDefinition;

export type $type<T extends $type_def, _P1, _P2> = T extends unknown
  ? Infer<T>
  : never;

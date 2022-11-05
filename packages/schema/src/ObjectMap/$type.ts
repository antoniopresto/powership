import { Infer } from '../Infer';
import { FieldInput } from '../fields/_parseFields';

export type $type_def = FieldInput;

export type $type<T extends $type_def, _P1, _P2> = T extends unknown
  ? Infer<T>
  : never;

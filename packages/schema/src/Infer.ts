import { SchemaLike } from './fields/ISchemaLike';
import {
  FieldAsString,
  FinalFieldDefinition,
  InferField,
  SchemaInTypeFieldDefinition,
} from './fields/_parseFields';

export type Infer<T> = T extends SchemaLike
  ? InferField<{ type: 'schema'; def: T['definition'] }>
  : //
  T extends SchemaInTypeFieldDefinition
  ? InferField<{
      type: 'schema';
      def: T['type']['definition'];
      list: T['list'];
      optional: T['optional'];
    }>
  : //
  T extends FinalFieldDefinition
  ? InferField<T>
  : T extends FieldAsString
  ? InferField<T>
  : T extends FinalFieldDefinition
  ? InferField<T>
  : T extends any[]
  ? InferField<T[number]>
  : T extends Readonly<any[]>
  ? InferField<T[number]>
  : T extends { [K: string]: any }
  ? InferField<{ type: 'schema'; def: T }>
  : never;

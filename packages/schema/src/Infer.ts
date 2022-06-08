import type { DarchType } from './DarchType';
import { ObjectLike } from './fields/IObjectLike';
import {
  FieldAsString,
  FinalFieldDefinition,
  InferField,
  ObjectInTypeFieldDefinition,
  ToFinalField,
} from './fields/_parseFields';

export type Infer<T> =
  //
  //
  T extends ObjectLike
    ? InferField<{ type: 'object'; def: T['definition'] }>
    : //
    // Type
    T extends DarchType<infer Def>
    ? InferField<ToFinalField<Def>>
    : //
    T extends ObjectLike
    ? InferField<{ type: 'object'; def: T['definition'] }>
    : //
    T extends ObjectInTypeFieldDefinition
    ? InferField<{
        type: 'object';
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
    ? InferField<{ type: 'object'; def: T }>
    : never;

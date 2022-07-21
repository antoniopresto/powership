import { GraphType } from './GraphType/GraphType';
import { ObjectLike } from './fields/IObjectLike';
import {
  FieldAsString,
  FinalFieldDefinition,
  InferField,
  ObjectInTypeFieldDefinition,
  ToFinalField,
} from './fields/_parseFields';

type MAX_DEEP = 7;

export interface __Infer<T, Level extends ReadonlyArray<number> = [0]> {
  VALUE: Level['length'] extends MAX_DEEP
    ? any
    : //
    //
    // === start LiteralField ===
    T extends
        | { type: 'literal' }
        | { literal: any }
        | Readonly<{ type: 'literal' } | { literal: any }>
    ? ToFinalField<T>['__infer']
    : // === end LiteralField ===

    T extends ObjectLike
    ? InferField<{ type: 'object'; def: T['definition'] }>
    : //
    // Type
    T extends GraphType<infer Def>
    ? ToFinalField<Def> extends { __infer: infer _In }
      ? _In
      : { NO_GO_HORSE_STAY_HORSE: T }
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
    : T extends [any]
    ? Infer<T[0], [...Level, 0]>[]
    : T extends Readonly<[any]>
    ? Infer<T[0], [...Level, 0]>[]
    : T extends { [K: string]: any }
    ? InferField<{ type: 'object'; def: T }>
    : never;
}

export type Infer<
  T,
  Level extends ReadonlyArray<number> = [0]
> = Level['length'] extends MAX_DEEP
  ? any
  : //
  //
  T extends {
      parse(input: any, options?: any): infer Parsed;
    }
  ? Parsed
  : //
  //
  __Infer<T, Level> extends { VALUE: infer Result }
  ? Result
  : never;

import { IsKnown } from '@brabo/utils';

import { GraphType } from './GraphType/GraphType';
import { ObjectLike } from './fields/IObjectLike';
import {
  FieldAsString,
  FinalFieldDefinition,
  InferField,
  ObjectInTypeFieldDefinition,
  ToFinalField,
} from './fields/_parseFields';

export type Infer<T> = {
  0: { literal: { INVALID_DEFINITION: T } };
  1: T extends
    | {
        type: 'literal';
      }
    | {
        literal: any;
      }
    | Readonly<
        | {
            type: 'literal';
          }
        | {
            literal: any;
          }
      >
    ? ToFinalField<T>['__infer']
    : T extends ObjectLike
    ? InferField<{
        def: T['definition'];
        type: 'object';
      }>
    : T extends GraphType<infer Def>
    ? ToFinalField<Def> extends {
        __infer: infer _In;
      }
      ? _In
      : {
          NO_GO_HORSE_STAY_HORSE: T;
        }
    : T extends ObjectLike
    ? InferField<{
        def: T['definition'];
        type: 'object';
      }>
    : T extends ObjectInTypeFieldDefinition
    ? InferField<{
        def: T['type']['definition'];
        list: T['list'];
        optional: T['optional'];
        type: 'object';
      }>
    : T extends FinalFieldDefinition
    ? InferField<T>
    : T extends FieldAsString
    ? InferField<T>
    : T extends FinalFieldDefinition
    ? InferField<T>
    : T extends [any]
    ? Infer<T[0]>[]
    : T extends Readonly<[any]>
    ? Infer<T[0]>[]
    : T extends {
        [K: string]: any;
      }
    ? InferField<{
        def: T;
        type: 'object';
      }>
    : never;
}[IsKnown<T>];

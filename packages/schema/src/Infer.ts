import { GraphType } from './GraphType/GraphType';
import { ObjectLike } from './fields/IObjectLike';
import {
  FieldAsString,
  FinalFieldDefinition,
  InferField,
  ObjectInTypeFieldDefinition,
  ToFinalField,
} from './fields/_parseFields';

export type Infer<T> = T extends
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
      type: 'object';
      def: T['definition'];
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
      type: 'object';
      def: T['definition'];
    }>
  : T extends ObjectInTypeFieldDefinition
  ? InferField<{
      type: 'object';
      def: T['type']['definition'];
      list: T['list'];
      optional: T['optional'];
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
      type: 'object';
      def: T;
    }>
  : never;

import {
  GraphType,
  ObjectDefinitionInput,
  ObjectType,
} from '@powership/schema';
import { Difference } from '@powership/utils';
import {
  Compute,
  IsKnown,
  PathParsed,
  Paths,
  PathType,
} from '@powership/utils';
import * as Y from 'yjs';

import { DSResolver, ResolverCreatorParam } from './DSResolver';
import { AsPromise } from './interfaceUtils';
/**
 * DeepState interface, represents a deep state graph with a given Type and SchemaDefinition.
 * Provides various methods for interacting with the graph.
 * @template Type - The root type of the graph
 * @template SchemaDefinition - The schema defining the structure of the graph
 * @template Methods - The methods available on the graph
 */
export interface IDeepState<Type, SchemaDefinition = unknown, Methods = unknown>
  extends GraphType<{
      object: SchemaDefinition extends unknown
        ? SchemaDefinition extends ObjectDefinitionInput
          ? SchemaDefinition
          : { $string: 'any' }
        : { $string: 'any' };
    }>,
    DeepStateBase<Type, SchemaDefinition, Methods> {}

export interface DeepStateBase<
  Type,
  SchemaDefinition = unknown,
  Methods = unknown
> {
  symbol: Symbol;
  isDeepState: true;
  schema: ObjectType<SchemaDefinition>;
  state: Type;
  doc: Y.Doc;
  map: Y.Map<Type>;
  subscriptions: Set<
    DeepStateSubscription<Type> & { path: PathParsed<Paths<Type>> }
  >;
  unsubscribe: Unsubscribe;
  subscribe<Path extends Paths<Type>>(
    path: Path,
    callback: DeepStateSubscription<Type, Path>
  ): Unsubscribe;

  /**
   * takes a path within a given type and returns the value at that path
   * @template Type - The root type from which the path extends
   */
  get<Path extends Paths<Type>>(
    path: Path
  ): PathType<Type, Path> extends infer R
    ? R extends unknown
      ? R extends object
        ? { [K in keyof R]: R[K] } & {}
        : R
      : any
    : any;

  /**
   * Set the value in a giving path or using a callback updater
   * @param path
   * @param value
   */
  set<Path extends Paths<Type>>(path: Path, value: PathType<Type, Path>): this;
  set(
    updater: (
      current: Type,
      context: { set: DeepStateSetter<Type> }
    ) => Type | void
  ): this;
  set(partial: Partial<Type>): this;

  updateMany(param: {
    updates: { [L in Paths<Type>]: [L, PathType<Type, L>] }[Paths<Type>][];
    ignoreTransaction?: boolean;
  }): this;

  /**
   * creates methods for a given Type and SchemaDefinition.
   * @template Type - The root type of the graph
   * @template SchemaDefinition - The schema defining the structure of the graph
   * @template Methods - The methods available on the graph
   */
  methods<Result>(
    creator: (
      creatorParam: ResolverCreatorParam<Type, SchemaDefinition>
    ) => Result
  ): IsKnown<Methods> extends 1
    ? {
        [K in Exclude<keyof Methods, keyof Result>]: Methods[K] extends unknown
          ? Methods[K]
          : any;
      } extends infer Prev
      ? IDeepState<
          Type,
          SchemaDefinition,
          Prev & Result extends infer R ? { [K in keyof R]: R[K] } & {} : any
        >
      : any
    : IDeepState<Type, SchemaDefinition, Result>;

  /**
   * call a method on the graph.
   * @template Type - The root type of the graph
   * @template Methods - The methods available on the graph
   */
  call<Method extends keyof Methods>(
    method: Method,
    args: Methods[Method] extends (
      root: any,
      args: infer Args,
      ...rest: any[]
    ) => any
      ? { [K in keyof Args]: Args[K] extends unknown ? Args[K] : unknown }
      : any
  ): AsPromise<
    Methods[Method] extends (..._args: any[]) => infer Result ? Result : unknown
  >;

  /**
   * creates resolvers for a given Type and SchemaDefinition.
   * @template Type - The root type of the graph
   * @template SchemaDefinition - The schema defining the structure of the graph
   * @template Methods - The methods available on the graph
   */
  resolvers<Resolvers>(
    creator: (utils: ResolverCreatorParam<Type, SchemaDefinition>) => Resolvers
  ): {
    [K in keyof Resolvers]: Resolvers[K] extends DSResolver<
      infer Result,
      any,
      any
    >
      ? Result
      : never;
  } extends infer ResolverResults
    ? IDeepState<
        Compute<
          ({
            [K in Exclude<keyof Type, keyof ResolverResults>]: Type[K];
          } & {}) &
            ResolverResults
        >,
        SchemaDefinition,
        Methods
      >
    : never;
}

export type DeepStateSetter<Type> = <P extends Paths<Type>>(
  path: P,
  value: PathType<Type, P>
) => void;

export interface SubscriptionContext<
  RootType,
  Value,
  Path extends Paths<Value>
> {
  subscriptionPath: Path;
  oldValue: Value | undefined;
  newValue: Value;
  affected: <P extends Paths<Value>>(
    path: P
  ) => void | {
    oldValue: PathType<Value, P>;
    newValue: PathType<Value, P>;
  };
  set: DeepStateSetter<RootType>;
  differences: Difference<Value>[];
}

export interface DeepStateSubscription<
  Type,
  Path extends Paths<Type> = Paths<Type>
> {
  (
    newValue: PathType<Type, Path>,
    context: SubscriptionContext<
      Type,
      PathType<Type, Path>,
      Paths<PathType<Type, Path>, 10>
    >
  ): unknown;
}

export const DEEPSTATE_ERRORS = {
  FAILED_TO_SET: 'DS_FAILED_TO_SET_ERROR',
  INVALID_STATE_FOUND: 'DS_INVALID_STATE_FOUND_ERROR',
  UNEXPECTED: 'DS_UNEXPECTED_ERROR',
  INVALID_UPDATE_EXPRESSION: 'DS_INVALID_UPDATE_EXPRESSION_ERROR',
} as const;

export type DEEPSTATE_ERROR =
  (typeof DEEPSTATE_ERRORS)[keyof typeof DEEPSTATE_ERRORS];

export type Unsubscribe = () => void;

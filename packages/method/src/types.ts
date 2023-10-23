import { FieldInput, Infer, ObjectDefinitionInput } from '@powership/schema';
import {
  AnyFunction,
  Compute,
  IsKnown,
  List,
  MaybePromise,
  StringValue,
} from '@powership/utils';

import type { App } from './App';

/**
 * Enum representing the types of method requests.
 * - 'query': For read-only fetch operations - may be cached.
 * - 'mutation': For write operations that change data - can't be cached.
 */
export type MethodKind = 'query' | 'mutation';

/**
 * Interface for additional context that methods might require.
 */
export interface AppRequestContext {}

/**
 * Interface for additional information that methods might use.
 */
export interface AppRequestInfo {
  app?: App<any>;
  appOptions?: AppOptions<any, any>;
  requests?: Omit<MethodRequest<any, any, any>, 'context'>[];
}

export interface MethodRequestOptions {
  /**
   * Max cache age.
   * Applied to requests for methods with kind "query", ignored by mutations.
   * Can be any value accepted by `ms` (https://github.com/vercel/ms)
   */
  maxAge?: number | StringValue;
  context?: AppRequestContext;
}

/**
 * Type definition for a method.
 * @template Args - The type definition for the args fields.
 * @template Output - The type definition for the output fields.
 */
export type MethodDefinition<
  Args extends ObjectDefinitionInput,
  Output extends FieldInput,
  Name extends Readonly<string>
> = {
  kind: MethodKind; // The kind of method, either 'query' or 'mutation'.
  name: Name; // The name of the method.
  output: Output; // The output type definition.
  args: Args; // The args type definition.
  throwOnInvalidResultingListItems?: boolean; // Optional flag to throw on invalid list items.
};

/**
 * Type definition for the payload of a method.
 * @template Args - The type definition for the args fields.
 * @template Context - The type definition for the method context.
 * @template Parent - The type definition for the parent object.
 */
export type MethodPayload<
  Args extends ObjectDefinitionInput,
  Context extends AppRequestContext = AppRequestContext,
  Parent extends any = any
> = {
  parent?: Parent; // The parent object.
  args: Infer<{ object: Args }>; // The actual args data.
  context: Context; // The root context.
  requestInfo: AppRequestInfo; // Additional method information.
};

/**
 * Type definition for fetch operations.
 * @template Args - The type definition for the args fields.
 * @template Output - The type definition for the output fields.
 */
export type Fetcher<
  Args extends ObjectDefinitionInput,
  Output extends FieldInput
> = (args: Infer<{ object: Args }>) => Promise<Infer<Output>>;

/**
 * Type definition for handling method operations.
 * @template Args - The type definition for the args fields.
 * @template Output - The type definition for the output fields.
 * @template Context - The type definition for the method context.
 * @template Parent - The type definition for the parent object.
 */
export type Handler<
  Args extends ObjectDefinitionInput,
  Output extends FieldInput,
  Context extends AppRequestContext = AppRequestContext,
  Parent extends any = any
> = [IsKnown<Output>] extends [1]
  ? [IsKnown<Args>] extends [1]
    ? (
        args: Infer<{ object: Args }>,
        payload: Compute<MethodPayload<Args, Context, Parent>>
      ) => Promise<Infer<Output>>
    : never
  : never;

export interface MethodLike {
  methodName: string;
  __isPSMethod: true;
  call: AnyFunction;
}

export interface AppRequestError {
  message: string;
  method: string;
}

export interface MethodRequest<Method, Args extends object, Result> {
  method: Extract<Method, string>;
  args: Args;
  options: MethodRequestOptions;
  context: AppRequestContext;
  result?:
    | { data: Result; error: null }
    | { data: null; error: AppRequestError };
}

export interface MethodRequestResult<Method, Args extends object, Result>
  extends MethodRequest<Method, Args, Result> {
  result:
    | { data: Result; error: null }
    | { data: null; error: AppRequestError };
}

export type MethodRequestResultUnion<
  Methods extends Readonly<[MethodLike, ...MethodLike[]]>
> = {
  [Method in keyof InferMethodTypes<Methods>]: MethodRequestResult<
    Method,
    InferMethodTypes<Methods>['args'],
    InferMethodTypes<Methods>['result']
  >;
}[keyof InferMethodTypes<Methods>];

export type MethodRequestUnion<
  Methods extends Readonly<[MethodLike, ...MethodLike[]]>
> = {
  [Method in keyof InferMethodTypes<Methods>]: MethodRequest<
    Method,
    InferMethodTypes<Methods>['args'],
    InferMethodTypes<Methods>['result']
  >;
}[keyof InferMethodTypes<Methods>];

export type AppOptions<
  Methods extends Readonly<[MethodLike, ...MethodLike[]]>,
  Context extends AppRequestContext
> = {
  name: string;

  batchRequests?: boolean;

  /**
   * Time to wait for new requests before dispatch calls
   */
  batchTimeoutMS?: number;

  maxBatchCallsCount?: number;

  buildRequestContext(
    request: Omit<MethodRequestUnion<Methods>, 'context'>[]
  ): MaybePromise<Context>;

  /**
   * Runs before returning the value
   * to the caller
   * @param requests
   */
  beforeCall?(requests: MethodPayload<any, any>[]): MaybePromise<void>;

  /**
   * Runs before returning the value
   * to the caller
   * @param requests
   */
  onResult?(requests: MethodRequestResultUnion<Methods>[]): MaybePromise<void>;
};

export type ObjectOfMethods<M extends Readonly<[MethodLike, ...MethodLike[]]>> =
  (
    List.ObjectOf<M> extends infer R
      ? {
          [K in keyof R as R[K] extends { methodName: infer NM }
            ? NM extends string
              ? NM
              : never
            : never]: R[K];
        } & {}
      : never
  ) extends infer R
    ? R extends unknown
      ? R extends { [K: string]: MethodLike }
        ? { [K in keyof R]: R[K] extends MethodLike ? R[K] : never } & {}
        : never
      : never
    : never;

export type InferMethodTypes<
  M extends Readonly<[MethodLike, ...MethodLike[]]>
> = (
  List.ObjectOf<M> extends infer R
    ? {
        [K in keyof R as R[K] extends { methodName: infer NM }
          ? NM extends string
            ? NM
            : never
          : never]: R[K] extends {}
          ? R[K] extends {
              argsType: infer Input;
              outputType: infer Output;
            }
            ? {
                args: Infer<Input>;
                output: Infer<Output>;
              }
            : never
          : never;
      } & {}
    : never
) extends infer R
  ? R extends unknown
    ? R extends { [K: string]: { args: unknown; output: unknown } }
      ? { [K in keyof R]: R[K] } & {}
      : never
    : never
  : never;

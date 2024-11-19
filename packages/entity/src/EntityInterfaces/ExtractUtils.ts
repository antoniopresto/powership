import { Entity } from './Entity';
import { EntityTypesContext } from './Context';
import { _EntityLoaderMethods } from './EntityLoaderMethods';

export type EntityExtractConfig<E> = E extends Entity<infer Config, any>
  ? Config
  : never;

export type EntityExtractIndexes<E> = E extends Entity<any, infer Indexes>
  ? Indexes
  : never;

export type EntityExtractContext<E> = E extends Entity<
  infer Config,
  infer Indexes
>
  ? EntityTypesContext<Config, Indexes>
  : never;

export type EntityExtractMethods<E> = E extends Entity<
  infer Config,
  infer Indexes
>
  ? _EntityLoaderMethods<EntityTypesContext<Config, Indexes>> extends infer R
    ? {
        [K in keyof R]: R[K] extends unknown
          ? R[K] extends (config: infer MethodParam) => infer Result
            ? {
                config: MethodParam;
                result: Result;
              }
            : never
          : never;
      } & {}
    : never
  : never;

export type EntityExtractMethodParam<E> = E extends Entity<
  infer Config,
  infer Indexes
>
  ? _EntityLoaderMethods<EntityTypesContext<Config, Indexes>> extends infer R
    ? {
        [K in keyof R]: R[K] extends unknown
          ? R[K] extends (config: infer MethodParam) => any
            ? MethodParam
            : never
          : never;
      } & {}
    : never
  : never;

export type EntityExtractMethodsResult<E> = E extends Entity<
  infer Config,
  infer Indexes
>
  ? _EntityLoaderMethods<EntityTypesContext<Config, Indexes>> extends infer R
    ? {
        [K in keyof R]: R[K] extends unknown
          ? R[K] extends (...args: any[]) => infer Result
            ? Result
            : never
          : never;
      } & {}
    : never
  : never;

export type EntityUpdateParam<E> = EntityExtractMethods<E> extends infer R
  ? R extends {
      updateMany: { config: { update: infer Update } };
      [K: string]: any;
    }
    ? Update extends unknown
      ? {
          [K in keyof Update]: Update[K] extends unknown ? Update[K] : never;
        } & {}
      : never
    : never
  : never;

export type EntityFilters<E> = EntityExtractMethods<E> extends infer R
  ? R extends {
      updateMany: {
        config: {
          filter: infer Filter;
          condition?: infer Condition;
        };
      };
      [K: string]: any;
    }
    ? Filter extends unknown
      ? Condition extends unknown
        ? {
            filter: {
              [K in keyof Filter]: Filter[K] extends unknown
                ? Filter[K]
                : never;
            } & {};
            condition?: {
              [K in keyof Condition]: Condition[K] extends unknown
                ? Condition[K]
                : never;
            } & {};
          }
        : never
      : never
    : never
  : never;

/* prettier-ignore */
/* eslint-disable */
import * as GraphType from './GraphType/GraphType';
import * as ObjectType from './ObjectType';
import * as MetaField from './fields/MetaFieldField';
import * as fieldTypes from './fields/fieldTypes';
import * as implementObject from './implementObject';

// @only-server
import * as graphql from 'graphql';
// @only-server
import * as graphqlParser from './GraphType/GraphQLParser';
// @only-server
import * as objectToTypescript from './objectToTypescript';
// @only-server
import * as prettier from 'prettier';
// @only-server
import * as createGraphQLSchema from './createGraphQLSchema';
// @only-server
import * as getQueryExamples from './GraphType/getQueryExamples';
// @only-server
import * as createResolver from './GraphType/createResolver';
// @only-server
import * as clientUtils from './GraphType/generateClientUtils';

const sharedCode = {
  GraphType,
  ObjectType,
  fieldTypes,
  MetaField,
  implementObject,
};

// @only-server
const serverCode = {
  graphql,
  graphqlParser,
  objectToTypescript,
  prettier,
  createGraphQLSchema,
  getQueryExamples,
  createResolver,
  clientUtils,
};

export const __DarchModulesRecord__ = {
  // @only-server
  ...serverCode,
  ...sharedCode,
} as const;

export type DarchModulesRecord = typeof __DarchModulesRecord__;

type NOK<T> = Exclude<keyof T, 'prototype' | number | symbol | 'default'>;

type AllKeys<T> = {
  [K in NOK<T>]: NOK<T[K]>;
}[NOK<T>];

type SubProps<P, K> = {
  [S in keyof P as K extends keyof P[S] ? K : never]: K extends keyof P[S]
    ? P[S][K]
    : never;
};

type Caramelo<P> = {
  [K in AllKeys<P>]: K extends keyof SubProps<P, K> ? SubProps<P, K>[K] : never;
};

export type DarchModules = Caramelo<DarchModulesRecord>;

export const Darch = {} as DarchModules;

Object.entries(__DarchModulesRecord__).forEach(([key, value]) => {
  const mod: any = value;

  Darch[key] = mod?.default ? mod.default : mod;

  Object.entries(mod || {}).forEach(([subKey, subModule]) => {
    Darch[subKey] = subModule;
  });
});

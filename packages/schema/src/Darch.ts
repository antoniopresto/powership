import { isBrowser } from '@darch/utils/lib/isBrowser';

const sharedCode = {
  GraphType: {
    server: false,
    module: () =>
      require('./GraphType/GraphType') as typeof import('./GraphType/GraphType'),
  },
  ObjectType: {
    server: false,
    module: () => require('./ObjectType') as typeof import('./ObjectType'),
  },
  fieldTypes: {
    server: false,
    module: () =>
      require('./fields/fieldTypes') as typeof import('./fields/fieldTypes'),
  },
  MetaField: {
    server: false,
    module: () =>
      require('./fields/MetaFieldField') as typeof import('./fields/MetaFieldField'),
  },
  implementObject: {
    server: false,
    module: () =>
      require('./implementObject') as typeof import('./implementObject'),
  },
};

const serverCode = {
  graphql: {
    server: true,
    // @only-server
    module: () => require('graphql') as typeof import('graphql'),
  },

  graphqlParser: {
    server: true,
    // @only-server
    module: () =>
      require('./GraphType/GraphQLParser') as typeof import('./GraphType/GraphQLParser'),
  },

  objectToTypescript: {
    server: true,
    // @only-server
    module: () =>
      require('./objectToTypescript') as typeof import('./objectToTypescript'),
  },

  prettier: {
    server: true,
    // @only-server
    module: () => require('prettier') as typeof import('prettier'),
  },

  createGraphQLSchema: {
    server: true,
    // @only-server
    module: () =>
      require('./createGraphQLSchema') as typeof import('./createGraphQLSchema'),
  },

  getQueryExamples: {
    server: true,
    // @only-server
    module: () =>
      require('./GraphType/getQueryExamples') as typeof import('./GraphType/getQueryExamples'),
  },

  createResolver: {
    server: true,
    // @only-server
    module: () =>
      require('./GraphType/createResolver') as typeof import('./GraphType/createResolver'),
  },

  clientUtils: {
    server: true,
    // @only-server
    module: () =>
      require('./GraphType/generateClientUtils') as typeof import('./GraphType/generateClientUtils'),
  },
};

export const __DarchModulesRecord__ = {
  ...serverCode,
  ...sharedCode,
} as const;

export type DarchModulesRecord = typeof __DarchModulesRecord__;

type Exports = {
  [K in keyof DarchModulesRecord]: DarchModulesRecord[K] extends {
    module: () => infer M;
  }
    ? M
    : never;
};

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

export type DarchModules = Caramelo<Exports>;

export const Darch = {} as DarchModules;

Object.entries(__DarchModulesRecord__).forEach(([key, value]) => {
  if (isBrowser() && value.server) {
    return;
  }

  const mod: any = value.module();

  Darch[key] = mod?.default ? mod.default : mod;

  Object.entries(mod || {}).forEach(([subKey, subModule]) => {
    Darch[subKey] = subModule;
  });
});

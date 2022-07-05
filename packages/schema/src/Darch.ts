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

const resolved = {} as {
  [K: string]: {
    value?: unknown;
    server: boolean;
  };
};

Object.entries(__DarchModulesRecord__).forEach(([key, value]) => {
  if (isBrowser() && value.server) {
    resolved[key] = {
      server: true,
    };
    return;
  }

  const mod: any = value.module();

  resolved[key] = {
    server: value.server,
    value: mod?.default ? mod.default : mod,
  };

  Object.entries(mod || {}).forEach(([subKey, subModule]) => {
    resolved[subKey] = {
      value: subModule,
      server: value.server,
    };
  });
});

// @ts-ignore
export const Darch: DarchModules = new Proxy({} as any, {
  get(_o, k: any) {
    const result = resolved[k];

    if (result?.value === undefined) {
      let errMessage = `Failed to require "${k}".`;

      if (result?.server || isBrowser()) {
        errMessage = `Can't load "${k}". It can be server-only.`;
      }

      throw new Error(errMessage);
    }

    return result.value;
  },

  has(_o, k: any) {
    const value = resolved[k].value;
    return value !== undefined;
  },

  ownKeys() {
    return Reflect.ownKeys(resolved);
  },

  getOwnPropertyDescriptor(_o, k: any) {
    return Object.getOwnPropertyDescriptor(resolved, k);
  },
});

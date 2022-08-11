import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { dynamicRequire } from '@darch/utils/lib/dynamicRequire';
import { isBrowser } from '@darch/utils/lib/isBrowser';

import { fieldTypeNames } from './fields/fieldTypeNames';
import type { FieldCreators } from './fields/fieldTypes';

const nodeModule = typeof module !== undefined ? module : undefined;

function getModules() {
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
    GraphQLParser: {
      server: true,
      // @only-server
      module: () =>
        // @only-server
        require('./GraphType/GraphQLParser') as typeof import('./GraphType/GraphQLParser'),
    },

    objectToTypescript: {
      server: true,
      // @only-server
      module: (): typeof import('./objectToTypescript') => {
        try {
          // too big to include in bundles
          // @only-server
          return dynamicRequire('./objectToTypescript', nodeModule);
        } catch (e: any) {
          return function objectToTypescript() {
            throw new Error(
              '⚠️ Darch.objectToTypescript is not available when bundled.\n' +
                e.stack
            );
          } as any;
        }
      },
    },

    prettier: {
      server: true,
      // @only-server
      module: (): typeof import('prettier') => {
        try {
          // too big to include in bundled code
          // @only-server
          return dynamicRequire('prettier', nodeModule);
        } catch (e: any) {
          return {
            format(code) {
              console.warn(
                '⚠️ Darch.prettier is not available when bundled.' + e.stack
              );
              return code;
            },
          } as any;
        }
      },
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
      module: () => require('./Resolver') as typeof import('./Resolver'),
    },

    clientUtils: {
      server: true,
      // @only-server
      module: () =>
        require('./GraphType/generateClientUtils') as typeof import('./GraphType/generateClientUtils'),
    },

    typesWriter: {
      server: true,
      // @only-server
      module: (): typeof import('./typesWriter') => {
        return require('./typesWriter');
      },
    },
  };

  return {
    ...serverCode,
    ...sharedCode, // shared should override others

    graphql: {
      // Too big to show in logs, let at last position
      server: true,
      // @only-server
      module: () => require('graphql') as typeof import('graphql'),
    },
  } as const;
}

type ModulesMap = ReturnType<typeof getModules>;

type Exports = {
  [K in keyof ModulesMap]: ModulesMap[K] extends { module: () => infer M }
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

export type DarchModules = Exports & Caramelo<Exports> & FieldCreators;

const cache = new Map();

function get(key: string) {
  let existing = cache.get(key);
  if (cache.has(key)) return existing!;

  const modules = getModules();

  Object.entries(modules).forEach(([key, value]) => {
    if (cache.has(key)) return;

    // parser -> parser
    // parser -> vizinho

    if (isBrowser() && value.server) {
      cache.set(key, undefined);
      return;
    }

    const moduleObject = value.module() as any;
    if (!moduleObject) {
      return;
    }

    let mainModule = moduleObject.default ? moduleObject.default : moduleObject;

    if (mainModule?.[key]) {
      mainModule = mainModule[key];
    }

    Object.entries(moduleObject || {}).forEach(([subKey, subModule]) => {
      if (subKey !== key) {
        cache.set(subKey, subModule);
      }

      if (
        typeof mainModule === 'function' &&
        mainModule[subKey] === undefined
      ) {
        mainModule[subKey] = subModule;
      }
    });

    cache.set(key, mainModule);
  });

  const fieldTypes = modules.fieldTypes.module();

  fieldTypeNames.forEach((key) => {
    const creator = fieldTypes.create[key];
    cache.set(key, creator);
  });

  return cache.get(key);
}

export const Darch = new Proxy({} as DarchModules, {
  get(_, key: string) {
    const item = get(key);
    if (!item) {
      throw new RuntimeError(`${key} is not available at this environment.`, {
        validModules: [...cache.entries()]
          .filter((el) => el[1] !== undefined)
          .map((el) => el[0]),
      });
    }
    return item;
  },
});

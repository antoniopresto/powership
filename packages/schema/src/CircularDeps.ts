/*
 * Handles circular dependencies with type safety
 */
import { RuntimeError } from '@powership/utils';
import { isBrowser } from '@powership/utils';
// @only-server
import { parsePhoneNumber } from '@powership/utils';

import { fieldTypeNames } from './fields/fieldTypeNames';
import type { FieldCreators } from './fields/fieldTypes';

function getModules() {
  const sharedCode = {
    GraphType: {
      module: () =>
        require('./GraphType/GraphType') as typeof import('./GraphType/GraphType'),
      server: false,
    },
    fieldInstanceFromDef: {
      module: () =>
        require('./fieldInstanceFromDef') as typeof import('./fieldInstanceFromDef'),
      server: false,
    },
    MetaField: {
      module: () =>
        require('./fields/MetaFieldField') as typeof import('./fields/MetaFieldField'),
      server: false,
    },
    ObjectType: {
      module: () => require('./ObjectType') as typeof import('./ObjectType'),
      server: false,
    },
    fieldTypes: {
      module: () =>
        require('./fields/fieldTypes') as typeof import('./fields/fieldTypes'),
      server: false,
    },
    implementObject: {
      module: () =>
        require('./implementObject') as typeof import('./implementObject'),
      server: false,
    },

    mockObject: {
      module: () => require('./mockObject') as typeof import('./mockObject'),
      server: false,
    },
  };

  const serverCode = {
    tsfy: {
      // @only-server
      module: () => require('./tsfy/index') as typeof import('./tsfy'),
      server: true,
    },

    GraphQLParser: {
      // @only-server
      module: () =>
        // @only-server
        require('./GraphType/GraphQLParser') as typeof import('./GraphType/GraphQLParser'),

      server: true,
    },

    parsePhoneNumberServerSide: {
      // @only-server
      module: () => ({
        // @only-server
        parsePhoneNumber,
      }),

      server: true,
    },

    clientUtils: {
      // @only-server
      module: () =>
        require('./GraphType/generateClientUtils') as typeof import('./GraphType/generateClientUtils'),

      server: true,
    },

    createGraphQLSchema: {
      // @only-server
      module: () =>
        require('./createGraphQLSchema') as typeof import('./createGraphQLSchema'),

      server: true,
    },

    createResolver: {
      // @only-server
      module: () => require('./Resolver') as typeof import('./Resolver'),

      server: true,
    },

    getQueryTemplates: {
      // @only-server
      module: () =>
        require('./GraphType/getQueryTemplates') as typeof import('./GraphType/getQueryTemplates'),

      server: true,
    },

    objectToTypescript: {
      // @only-server
      module: (): typeof import('./objectToTypescript').objectToTypescript => {
        try {
          // @only-server
          return (a, b, c) =>
            import('./objectToTypescript').then(({ objectToTypescript }) => {
              return objectToTypescript(a, b, c);
            });
        } catch (e: any) {
          return function objectToTypescript() {
            throw new Error(
              '⚠️ Powership.objectToTypescript is not available when bundled.\n' +
                e.stack
            );
          } as any;
        }
      },

      server: true,
    },

    formatWithPrettier: {
      // @only-server
      module: (): typeof import('@powership/utils').formatWithPrettier => {
        try {
          // too big to include in bundled code
          // @only-server
          return ((a, b) =>
            import('@powership/utils').then(({ formatWithPrettier }): any => {
              return formatWithPrettier(a, b);
            })) as any;
        } catch (e: any) {
          return function formatWithPrettier(code) {
            console.warn(
              '⚠️ Powership.prettier is not available when bundled.' + e.stack
            );
            return Promise.resolve(code);
          } as any;
        }
      },

      server: true,
    },

    typesWriter: {
      // @only-server
      module: () => require('./writeTypes') as typeof import('./writeTypes'),
      server: true,
    },
  };

  return {
    ...serverCode,
    ...sharedCode, // shared should override others

    graphql: {
      // @only-server
      module: () => require('graphql') as typeof import('graphql'),

      // Too big to show in logs, let at last position
      server: true,
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

export type PowershipModules = Exports & Caramelo<Exports> & FieldCreators;

const cache = new Map();

function get(key: string) {
  let existing = cache.get(key);
  if (cache.has(key)) return existing!;

  const modules = getModules();

  Object.entries(modules).forEach(([moduleName, value]) => {
    if (cache.has(moduleName)) return;

    if (isBrowser() && value?.server) {
      cache.set(moduleName, undefined);
      return;
    }

    const moduleObject = value?.module?.() as any;
    if (!moduleObject) {
      return;
    }

    let mainModule = moduleObject?.default
      ? moduleObject.default
      : moduleObject;

    if (mainModule?.[moduleName]) {
      mainModule = mainModule[moduleName];
    }

    // for-loops are needed for module iteration (at least in bun.js)
    for (let subKey in moduleObject) {
      const subModule = moduleObject[subKey];

      if (subKey !== moduleName) {
        cache.set(subKey, subModule);
      }

      if (
        typeof mainModule === 'function' &&
        mainModule[subKey] === undefined
      ) {
        mainModule[subKey] = subModule;
      }
    }

    cache.set(moduleName, mainModule);
  });

  const fieldTypes = modules.fieldTypes.module();

  fieldTypeNames.forEach((key) => {
    const creator = fieldTypes.create[key];
    cache.set(key, creator);
  });

  return cache.get(key);
}

export const CircularDeps = new Proxy({} as PowershipModules, {
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

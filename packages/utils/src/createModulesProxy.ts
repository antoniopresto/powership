/*
 * Handles circular dependencies with type safety
 */

import { RuntimeError } from './RuntimeError';
import { isBrowser } from './isBrowser';
import { AnyFunction, Compute } from './typings';

export type ProxyGetModule<T> = () => T;

export type ProxyModuleConfig<T extends any, ServerOnly extends boolean> = {
  module: ProxyGetModule<T>;
  server: ServerOnly;
};

export type ModulesProxyRecord = { [K: string]: ProxyModuleConfig<any, any> };

type Exports<ModulesMap extends ModulesProxyRecord> = {
  [K in keyof ModulesMap]: ModulesMap[K] extends { module: () => infer M }
    ? M
    : never;
};

export type ModulesProxyResult<ModulesMap extends ModulesProxyRecord> =
  Exports<ModulesMap> & {
    transform: <T>(
      callback: (current: ModulesProxyResult<ModulesMap>) => T
    ) => T;
  };

export function createModulesProxy<ModulesMap extends ModulesProxyRecord>(
  getModules: () => ModulesMap
): Compute<ModulesProxyResult<ModulesMap>> {
  let cache = new Map();

  function fillCache(mKey: string) {
    if (cache.has(mKey)) return;

    const modules = getModules();

    Object.entries(modules).forEach(([key, value]) => {
      if (mKey !== key) return;

      if (isBrowser() && value.server) {
        cache.set(key, undefined);
        return;
      }

      const moduleObject = value.module() as any;
      if (!moduleObject) {
        return;
      }

      let mainModule = moduleObject.default
        ? moduleObject.default
        : moduleObject;

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
  }

  const transformations: AnyFunction[] = [];

  function get(key: string) {
    let existing = cache.get(key);
    if (cache.has(key)) return existing!;
    fillCache(key);
    if (transformations.length) {
      const res = {} as ModulesProxyResult<any>;

      for (let entry of cache.entries()) {
        res[entry[0]] = entry[1];
      }

      const transformed = transformations.reduce((acc: any, next) => {
        return next(acc);
      }, res);

      cache.clear();
      Object.entries(transformed).forEach(([k, v]) => {
        cache.set(k, v);
      });
    }
    return cache.get(key);
  }

  function _create() {
    function transform(
      cb: Parameters<ModulesProxyResult<ModulesMap>['transform']>[0]
    ) {
      transformations.push(cb);
      return _create();
    }

    return new Proxy({} as any, {
      get(_, key: string) {
        if (key === 'transform') {
          return transform;
        }

        const item = get(key);
        if (!item) {
          throw new RuntimeError(
            `${key} is not available at this environment.`,
            {
              validModules: [...cache.entries()]
                .filter((el) => el[1] !== undefined)
                .map((el) => el[0]),
            }
          );
        }
        return item;
      },
    });
  }

  return _create();
}

import { RuntimeError } from '@swind/utils';

export interface WithCache<Cache extends Record<string, any>> {
  <K extends keyof Cache>(key: K, onCreate?: () => Cache[K]): Cache[K];
  cache: Map<string, Cache[keyof Cache]>;
}

export function withCache<Cache extends Record<string, any>>(
  parent: any
): WithCache<Cache> {
  const cache = new Map();

  function getOrSet<K extends keyof Cache>(
    key: K,
    onCreate?: () => Cache[K]
  ): Cache[K] {
    if (!cache.has(key)) {
      if (typeof onCreate !== 'function') {
        throw new RuntimeError(`missing cache ${String(key)}`, {
          cache,
          parent,
        });
      }

      cache.set(key, onCreate());
    }
    return cache.get(key);
  }

  getOrSet.cache = cache;

  return getOrSet;
}

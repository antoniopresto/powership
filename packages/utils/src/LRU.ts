import { LRUCache } from 'lru-cache';

export type LRUOptions<K = unknown, V = any, FC = any> = LRUCache.Options<
  K,
  V,
  FC
>;

export { LRUCache as LRU };

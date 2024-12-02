import { simpleObjectHash } from './simpleObjectHash';
import { getTypeName } from './getTypeName';

export type MemoCacheKey = object;

export let MEMO_CACHE_DEFAULT_MAX_SIZE = 600;

export class MemoCache<T> {
  private cache: WeakMap<MemoCacheKey, T>;
  private readonly maxSize: number;
  private readonly keyMap: Map<string, MemoCacheKey>;

  constructor(maxSize: number = MEMO_CACHE_DEFAULT_MAX_SIZE) {
    if (maxSize <= 0) {
      throw new Error('maxSize must be greater than 0');
    }
    this.cache = new WeakMap();
    this.keyMap = new Map();
    this.maxSize = maxSize;
  }

  private generateKey = (value: any): string => {
    try {
      return simpleObjectHash(value);
    } catch (error: any) {
      throw new Error(
        `Failed to generate key: ${
          error.message
        }. Value is of type ${getTypeName(value)}`
      );
    }
  };

  private createWeakKey = (): MemoCacheKey => {
    return Object.create(null);
  };

  get = (key: unknown): T | undefined => {
    try {
      const stringKey = this.generateKey(key);
      const weakKey = this.keyMap.get(stringKey);
      return weakKey ? this.cache.get(weakKey) : undefined;
    } catch (error: any) {
      throw new Error(`Failed to get value: ${error.message}`);
    }
  };

  getOrSet = (key: unknown, create: () => T): T => {
    let value = this.get(key);

    if (value === undefined) {
      value = create();
      this.set(key, value);
    }

    return value;
  };

  set = (key: unknown, value: T): T => {
    try {
      if (value === undefined) {
        throw new Error('Cannot cache undefined values');
      }

      const stringKey = this.generateKey(key);
      const existingWeakKey = this.keyMap.get(stringKey);

      if (existingWeakKey) {
        this.cache.set(existingWeakKey, value);
        return value;
      }

      if (this.keyMap.size >= this.maxSize) {
        const [[firstKey]] = this.keyMap;
        this.keyMap.delete(firstKey);
      }

      const weakKey = this.createWeakKey();
      this.keyMap.set(stringKey, weakKey);
      this.cache.set(weakKey, value);

      return value;
    } catch (error: any) {
      throw new Error(`Failed to set value: ${error.message}`);
    }
  };

  has = (value: unknown): boolean => {
    try {
      const stringKey = this.generateKey(value);
      return this.keyMap.has(stringKey);
    } catch (error: any) {
      throw new Error(`Failed to check key existence: ${error.message}`);
    }
  };

  delete = (value: unknown): boolean => {
    try {
      const stringKey = this.generateKey(value);
      const weakKey = this.keyMap.get(stringKey);
      if (!weakKey) return false;

      const result = this.keyMap.delete(stringKey);
      this.cache.delete(weakKey);
      return result;
    } catch (error) {
      throw new Error(
        `Failed to delete key: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    }
  };

  clear = (): void => {
    this.keyMap.clear();
    this.cache = new WeakMap();
  };

  get size(): number {
    return this.keyMap.size;
  }
}

import { MemoryDB, Options } from '@backland/memorydb';
import type { Filter, UpdateFilter } from 'mongodb';

import { ensureArray } from '../ensureArray';

export type MemoryDBOptions = Options & {
  //
};

export class ObjectDB<
  T extends Record<string, any> = Record<string, any>
> extends MemoryDB {
  constructor(options?: MemoryDBOptions) {
    super(options);
  }

  put = (input: T | T[]) => {
    const list = ensureArray(input);
    return list.map((el) => {
      return this.insert(el);
    });
  };

  all = (): T[] => {
    return this.getAllData();
  };

  update = (query: Filter<T>, update: UpdateFilter<T>) => {
    return super.update(query, update);
  };

  find = (query: Filter<T>) => {
    return super.find(query);
  };

  findOne = (query: Filter<T>) => {
    return super.findOne(query);
  };
}

export function createObjectDB(options?: Options) {
  return new ObjectDB(options);
}

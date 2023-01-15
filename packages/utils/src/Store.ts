import { hooks as Hooks, Parallel } from './hooks';
import { ObjectEntries } from './typeUtils';

export type InternalEvent = 'PRUNING' | 'INITIAL';

export type EventMetadataObjectBase = { [K: string]: unknown };
export type EventMetadataBase = EventMetadataObjectBase | InternalEvent;

export type StoreEvent<
  K,
  V,
  Meta extends EventMetadataBase = EventMetadataBase
> = {
  value: V;
  key: K;
  exists: boolean;
  index: number;
  length: number;
  meta?: Meta;
};

export type Nullable<
  T extends object,
  Nullish extends null | undefined = undefined
> = {
  [K in keyof T]-?: T[K] | Nullish;
} & {};

export type StoreEventOptions<
  Meta extends EventMetadataBase = EventMetadataBase
> = {
  silently?: boolean;
  meta?: Meta;
};

export interface StoreOptions<
  Dict extends Record<string, unknown> = Record<string, unknown>
> {
  values?: ObjectEntries<Dict>;
  maxLength?: number;
}

export interface Store<
  Dict extends Record<string, unknown> = Record<string, unknown>,
  K extends Extract<keyof Dict, string> = Extract<keyof Dict, string>,
  V extends Dict[Extract<keyof Dict, string>] = Dict[Extract<
    keyof Dict,
    string
  >]
> {
  hooks: {
    get: Parallel<Nullable<StoreEvent<K, V>>, undefined>;
    set: Parallel<StoreEvent<K, V>, undefined>;
    remove: Parallel<Nullable<StoreEvent<K, V>>, undefined>;
    missingKeyError: Parallel<
      { message: string; [K: string]: unknown },
      unknown
    >;
  };
  onGet: this['hooks']['get']['register'];
  onSet: this['hooks']['set']['register'];
  onRemove: this['hooks']['remove']['register'];
  onMissingKeyError: this['hooks']['missingKeyError']['register'];
  entries: [K, V][];

  remove<Key extends K>(
    key: Key,
    eventOptions?: StoreEventOptions
  ): Nullable<StoreEvent<Key, Dict[Key]>>;

  set<Key extends K>(
    key: Key,
    value: Dict[Key],
    eventOptions?: StoreEventOptions
  ): StoreEvent<Key, Dict[Key]>;

  get<Key extends K>(key: Key, options?: StoreEventOptions): Dict[Key];

  has<Key extends K>(key: Key, options?: StoreEventOptions): Key | undefined;

  length: number;
}

export function createStore<
  Dict extends Record<string, unknown> = Record<string, unknown>
>(init?: ObjectEntries<Dict> | StoreOptions<Dict>): Store<Dict> {
  const { values, maxLength = 20000 } = Array.isArray(init)
    ? { values: init }
    : init || {};

  const entries: [any, any][] = [];
  let indexes = {} as Record<any, number>;

  const hooks: Store['hooks'] = {
    set: Hooks.parallel(),
    remove: Hooks.parallel(),
    get: Hooks.parallel(),
    missingKeyError: Hooks.parallel(),
  };

  if (values) {
    values.map(([k, v]) => {
      set(k, v, { silently: true, meta: 'INITIAL' });
    });
    _reindex();
  }

  function _reindex() {
    indexes = entries.reduce((acc, [k], currentIndex) => {
      return {
        ...acc,
        [k]: currentIndex,
      };
    }, Object.create(null) as typeof indexes);
    return indexes;
  }

  function has(key: any): any {
    return indexes[key] !== undefined ? `${indexes[key]}` : undefined;
  }

  function set(key: any, value: any, eventOptions?: StoreEventOptions) {
    const index = has(key);

    if (index) {
      entries[index] = [key, value];
    } else {
      if (entries.length > maxLength - 1) {
        const firstKey = entries[0];
        remove(firstKey[0], { meta: 'PRUNING' });
      }
      indexes[key] = entries.length;
      entries.push([key, value]);
    }

    if (eventOptions?.meta !== 'INITIAL') {
      _reindex();
    }

    const res: StoreEvent<any, any> = {
      value,
      key,
      length: entries.length,
      index: indexes[key],
      exists: true,
      meta: eventOptions?.meta,
    };

    if (!eventOptions?.silently) {
      hooks.set.exec(res);
    }

    return res;
  }

  function get(key: any, eventOptions?: StoreEventOptions) {
    const index = indexes[key];
    const value = entries[index]?.[1];

    const res: Required<StoreEvent<any, any>> = {
      value,
      key,
      length: entries.length,
      index,
      exists: index !== undefined,
      meta: eventOptions?.meta as any,
    };

    if (!eventOptions?.silently) {
      hooks.get.exec(res);
    }

    if (!res.exists) {
      throw new Error(`Missing value for key "${key}"`);
    }

    return res.value;
  }

  function remove(key: any, eventOptions?: StoreEventOptions): any {
    const exists = has(key);
    const value = exists ? entries[exists] : undefined;
    const index = indexes[key] as number | undefined;

    if (exists) {
      delete entries[exists];
      _reindex();
    }

    const res: Nullable<StoreEvent<any, any>> = {
      value,
      key,
      length: entries.length,
      index,
      exists: !!exists,
      meta: eventOptions?.meta as any,
    };

    if (!eventOptions?.silently) {
      hooks.remove.exec(res);
    }

    return res;
  }

  const res: Store<any, any> = {
    hooks,
    onGet: hooks.get.register,
    onSet: hooks.set.register,
    onRemove: hooks.remove.register,
    onMissingKeyError: hooks.missingKeyError.register,
    entries,
    remove,
    set,
    get,
    has,
    length: entries.length,
  };

  Object.defineProperty(res, 'length', {
    get() {
      return entries.length;
    },
  });

  return res;
}

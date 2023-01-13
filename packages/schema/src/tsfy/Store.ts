import { hooks as Hooks } from '@backland/utils';

export type InternalEvent = 'PRUNING' | 'INITIAL';

export type StoreEvent<K, V, Meta extends Record<string, any> = {}> = {
  value: V;
  key: K;
  exists: boolean;
  index: number;
  length: number;
  meta?: Meta | InternalEvent;
};

export type Nullable<
  T extends object,
  Nullish extends null | undefined = undefined
> = {
  [K in keyof T]-?: T[K] | Nullish;
} & {};

export type StoreEventOptions<Meta extends Record<string, any> = {}> = {
  silently?: boolean;
  meta?: Meta;
};

export interface StoreOptions<K extends string = string, V = any> {
  values?: [K, V][];
  maxLength?: number;
}

export function createStore<K extends string, V>(
  init?: [K, V][] | StoreOptions<K, V>
) {
  const { values, maxLength = 20000 } = Array.isArray(init)
    ? { values: init }
    : init || {};

  const entries: [K, V][] = [];
  let indexes = {} as Record<K, number>;

  type TEvent = StoreEvent<K, V>;

  const hooks = {
    set: Hooks.parallel<TEvent>(),
    remove: Hooks.parallel<Nullable<TEvent>>(),
    get: Hooks.parallel<Nullable<TEvent>>(),
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

  function has(key: K) {
    return indexes[key] !== undefined ? `${indexes[key]}` : undefined;
  }

  function set(key: K, value: V, eventOptions?: StoreEventOptions) {
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

    const res: TEvent = {
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

  function get(key: K, eventOptions?: StoreEventOptions): V {
    const index = indexes[key];
    const value = entries[index]?.[1];

    const res: Required<TEvent> = {
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

  function remove(key: K, eventOptions?: StoreEventOptions) {
    const exists = has(key);
    const value = exists ? entries[exists] : undefined;
    const index = indexes[key] as number | undefined;

    if (exists) {
      delete entries[exists];
      _reindex();
    }

    const res: Nullable<TEvent> = {
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

  const res = {
    onGet: hooks.get.register,
    onSet: hooks.set.register,
    onRemove: hooks.remove.register,
    entries,
    remove,
    set,
    get,
    length: entries.length,
  } as const;

  Object.defineProperty(res, 'length', {
    get() {
      return entries.length;
    },
  });

  return res;
}

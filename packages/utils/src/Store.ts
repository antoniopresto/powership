import { DotNotations } from 'aggio';

import { ensureArray } from './ensureArray';
import { getByPath } from './getByPath';
import { hooks as Hooks, Parallel } from './hooks';
import { simpleObjectHash } from './simpleObjectHash';
import { ValueByPath, ObjectEntries } from './typeUtils';

export type InternalEvent = 'PRUNING' | 'INITIAL' | 'CLEAR';

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
  hashBy?: DotNotations<Dict[keyof Dict]>[];
}

export interface GroupByOptions {
  onMany?: 'error' | 'last' | 'first';
  onNull?: string;
}

export type RecordBy<Dict extends Record<string, any>, Field extends string> = {
  [K in ValueByPath<Dict[keyof Dict], Field> extends infer Key
    ? Key extends string | number
      ? Key
      : string
    : never]: Dict[keyof Dict][];
};

export interface Store<
  Dict extends Record<string, unknown> = Record<string, unknown>,
  K extends Extract<keyof Dict, string> = Extract<keyof Dict, string>,
  V extends Dict[Extract<keyof Dict, string>] = Dict[Extract<
    keyof Dict,
    string
  >]
> {
  hashBy: string[] | null;

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
  values: V[];
  keys: K[];

  remove<Key extends K>(
    key: Key,
    eventOptions?: StoreEventOptions
  ): Nullable<StoreEvent<Key, Dict[Key]>>;

  delete: this['remove'];

  set<Key extends K>(
    key: Key,
    value: Dict[Key],
    eventOptions?: StoreEventOptions
  ): StoreEvent<Key, Dict[Key]>;

  add(
    value: Dict[keyof Dict],
    eventOptions?: StoreEventOptions
  ): StoreEvent<keyof Dict, Dict[keyof Dict]>;

  get<Key extends K>(key: Key, options?: StoreEventOptions): Dict[Key];

  getOptional<Key extends K>(
    key: Key,
    options?: StoreEventOptions
  ): Dict[Key] | undefined;

  has<Key extends K>(key: Key, options?: StoreEventOptions): Key | undefined;

  clear(): number;

  groupBy<Group extends DotNotations<Dict[keyof Dict]>>(
    groups: Group[] | Group,
    options?: GroupByOptions
  ): {
    [K: string]: Dict[keyof Dict][];
  };

  recordBy<Group extends DotNotations<Dict[keyof Dict]>>(
    groups: Group[] | Group,
    options?: GroupByOptions
  ): Store<RecordBy<Dict, Group>>;

  keyBy(
    groups: DotNotations<Dict[keyof Dict]>[] | DotNotations<Dict[keyof Dict]>,
    options?: GroupByOptions
  ): {
    [K: string]: Dict[keyof Dict];
  };

  length: number;
}

export function createStore<
  Dict extends Record<string, unknown> = Record<string, unknown>
>(init?: ObjectEntries<Dict> | StoreOptions<Dict>): Store<Dict> {
  const {
    values,
    maxLength = 20000,
    hashBy = null,
  } = Array.isArray(init) ? { values: init } : init || {};

  const entries: [keyof Dict, any][] = [];
  let indexes = {} as Record<any, number>;

  const hooks: Store['hooks'] = {
    set: Hooks.parallel(),
    remove: Hooks.parallel(),
    get: Hooks.parallel(),
    missingKeyError: Hooks.parallel(),
  };

  if (values) {
    values.map(
      ([
        k,
        v,
      ]) => {
        set(k, v, { silently: true, meta: 'INITIAL' });
      }
    );
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
      entries[index] = [
        key,
        value,
      ];
    } else {
      if (entries.length > maxLength - 1) {
        const firstKey = entries[0];
        remove(firstKey[0], { meta: 'PRUNING' });
      }
      indexes[key] = entries.length;
      entries.push([
        key,
        value,
      ]);
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

  function add(value: any, eventOptions?: StoreEventOptions) {
    const key = (() => {
      if (hashBy) {
        return hashBy
          .map((part) => {
            return getByPath(value, part);
          })
          .join('#');
      }
      return simpleObjectHash(value);
    })();

    return set(key, eventOptions);
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

  function clear() {
    const current = entries.length;
    entries.forEach(function clearItem([key]) {
      remove(key, { meta: 'CLEAR' });
    });
    return current;
  }

  const groupBy: Store['groupBy'] = function groupBy(groups, { onNull } = {}) {
    const res = Object.create(null);
    groups = ensureArray(groups);

    groups.forEach((group) => {
      entries.forEach(
        ([
          ,
          value,
        ]) => {
          const key = (getByPath(value, group) ?? onNull) + '';
          res[key] = res[key] || [];
          res[key].push(value);
        }
      );
    });

    return res;
  };

  const keyBy: Store['keyBy'] = function keyBy(groups, options) {
    const errors: string[] = [];
    const { onMany = 'last' } = options || {};

    const _grouped = groupBy(groups, options);

    const res = Object.create(null);

    Object.entries(_grouped).forEach(
      ([
        key,
        items,
      ]) => {
        if (items.length > 1) {
          switch (onMany) {
            case 'error': {
              return errors.push(
                `Found ${items.length} items with key "${key}"`
              );
            }
            case 'first': {
              return (res[key] = items[0]);
            }
            case 'last': {
              return (res[key] = items[items.length - 1]);
            }
          }
        }

        res[key] = items[0];
      }
    );

    if (errors.length) {
      throw new Error(errors.join('\n'));
    }
    return res;
  };

  const recordBy: Store['recordBy'] = function recordBy(paths, options) {
    const groups = groupBy(paths, options);
    const groupKey = ensureArray(paths).join('#');

    const store = createStore();

    Object.entries(groups).forEach(
      ([
        key,
        values,
      ]) => {
        values.forEach((value) => {
          Object.defineProperty(value, groupKey, {
            value: key,
            enumerable: false,
          });
          store.set(key, values);
        });
      }
    );

    return store as any;
  };

  const res: Store<any, any> = {
    hashBy,
    hooks,
    onGet: hooks.get.register,
    onSet: hooks.set.register,
    onRemove: hooks.remove.register,
    onMissingKeyError: hooks.missingKeyError.register,
    entries,
    remove,
    set,
    add,
    get,
    has,
    clear,
    groupBy,
    keyBy,
    recordBy,
    getOptional(key, options) {
      try {
        return get(key, options);
      } catch (e) {
        return undefined;
      }
    },
    delete: remove,
    length: entries.length,
    keys: undefined as any,
    values: undefined as any,
  };

  Object.defineProperties(res, {
    length: {
      get() {
        return entries.length;
      },
    },
    keys: {
      get() {
        return entries.map((el) => el[0]);
      },
    },
    values: {
      get() {
        return entries.map((el) => el[1]);
      },
    },
  });

  return res;
}

import { current, Draft, isDraft, produce } from 'immer';
import { ulid } from 'ulid';

import { groupBy } from './groupBy';
import { ChangeList } from './objectDiff';
import { pick } from './pick';
import { setByPath } from './setByPath';
import {
  AnyFunction,
  AnyRecord,
  Entries,
  GetFieldByDotPath,
  MaybePromise,
  ObjectPath,
} from './typeUtils';

export type StatePath<Values> = ObjectPath<Values> | '';

export class StateConfig {
  flushDelay: number | false = 1;
  queueLimit = 100;
  historyLimit = 3000;
  onUnmount?: (current: State<any>) => any;
}

export class State<Values extends AnyRecord> {
  private config = new StateConfig();

  // states
  private main: Values; // main state
  private staging: Values;

  private listeners = new Map<
    StateSubscriptionID,
    StateSubscription<any, any>
  >();

  private queue: ChangeList[] = [];
  private readonly history: ChangeList[] = [];

  stateId = '';

  get current() {
    return this.staging;
  }

  private utilsCache = {
    id: '',
    entries: [] as Entries<Values>,
  };

  get utils() {
    if (this.utilsCache.id === this.stateId) return this.utilsCache;
    this.utilsCache.id = this.stateId;
    this.utilsCache.entries = Object.entries(this.current) as any;
    return this.utilsCache;
  }

  get entries() {
    return this.utils.entries;
  }

  constructor(value: Values, options?: Partial<StateConfig>) {
    this.main = value;
    this.staging = value;
    Object.assign(this.config, options);
    this.subscribe = this.subscribe.bind(this);
  }

  unmount = () => {
    this.unsubscribe('*');
    this.config.onUnmount?.(this);
  };

  unsubscribe = (id: StateSubscriptionID): void => {
    if (id === '*') {
      this.listeners.forEach((el) => el.unsubscribe());
      this.listeners.clear();

      return;
    }

    this.listeners.delete(id);
  };

  subscribe(
    callback: (event: StateEvent<Values, ''>) => MaybePromise<void>
  ): StateSubscription<Values, ''>;

  subscribe<Path extends StatePath<Values>>(
    path: Path,
    callback: (event: StateEvent<Values, Path>) => MaybePromise<void>
  ): StateSubscription<Values, Path>;

  subscribe(...args: any[]) {
    let path = args.length === 2 ? args[0] : '';
    const callback = args.length === 2 ? args[1] : args[0];

    const id = `${path}#${ulid()}`;

    const { unsubscribe } = this;

    const subscription: StateSubscription<any, any> = {
      exec: callback,
      id,
      path,
      unsubscribe() {
        unsubscribe(id);
      },
    };

    this.listeners.set(id, subscription);

    return subscription;
  }

  get<T>(
    getter: (current: Draft<Values>) => T
  ): T extends Draft<infer R> ? R : T;

  get<Path extends StatePath<Values>>(
    path: Path
  ): GetFieldByDotPath<Values, Path>;

  get(getter: AnyFunction | string) {
    this.flush();
    //
    if (typeof getter === 'function') {
      let res: any = undefined;
      produce(this.current, (draft) => {
        res = getter(draft);
      });
      return isDraft(res) ? current(res) : res;
    }

    return pick(this.main, getter);
  }

  set<Path extends StatePath<Values>>(
    path: Path,
    value: GetFieldByDotPath<Values, Path>
  ): this;

  set(
    value: Partial<Values> | ((current: Draft<Values>) => MaybePromise<any>),
    immediate?: boolean
  ): this;

  set(...args) {
    if (typeof args[0] === 'string') {
      const [
        path,
        value,
      ] = args;

      return this.schedule((draft) => {
        setByPath(draft, path, value);
      });
    }

    const [
      value,
      immediate,
    ] = args;

    return this._setState(value, immediate);
  }

  setImmediate = <Path extends StatePath<Values>>(
    path: Path,
    value: GetFieldByDotPath<Values, Path>
  ): this => {
    return this.schedule((draft) => {
      setByPath(draft, path, value);
    }, true);
  };

  private flushTimeoutRef?: ReturnType<typeof setTimeout>;

  private schedule = (setter: AnyFunction, immediate = false) => {
    const { queueLimit, flushDelay } = this.config;

    const [
      next,
      diff,
    ] = this.produce(this.staging, setter);

    this.queue.push(diff);
    this.staging = next; // 1️⃣ of 2️⃣ - UPDATING THE STAGING STATE

    clearTimeout(this.flushTimeoutRef);

    if (immediate || this.queue.length >= queueLimit || flushDelay === false) {
      this.flush();
    } else if (typeof flushDelay === 'number') {
      this.flushTimeoutRef = setTimeout(() => {
        this.flush();
      }, flushDelay);
    }

    return this;
  };

  flush = () => {
    const { queue, main, listeners } = this;

    if (!queue.length) {
      return this;
    }

    const listenersByPath = groupBy([...listeners.values()], (el) => el.path);

    this.queue = [];

    const [
      next,
      batchedDiff,
    ] = this.produce(main, (draft) => {
      // 2️⃣of 2️⃣ UPDATING THE MAIN STATE
      queue.forEach((diff) => {
        diff.apply(draft);
      });
    });

    this.main = next;
    this.pushHistory(batchedDiff);

    const callbacks: AnyFunction[] = [];

    batchedDiff.forEach((patch) => {
      //
      const { paths, newValue: value } = patch;
      paths.forEach((path) => {
        const pathSubscribers = listenersByPath[path];

        if (pathSubscribers?.length) {
          const event: StateEvent<any, any> = {
            path,
            value,
            state: this,
          };

          pathSubscribers.forEach((sub) => {
            callbacks.push(() => {
              sub.exec(event);
            });
          });
        }
      });
    });

    for (let cb of callbacks) {
      cb();
    }

    if (listenersByPath['']) {
      const event: StateEvent<any, any> = {
        path: '',
        value: this.main,
        state: this,
      };
      listenersByPath[''].forEach((callback) => {
        callback.exec(event);
      });
    }

    return this;
  };

  private pushHistory = (changes: ChangeList) => {
    const { historyLimit } = this.config;
    if (!changes.differences.length) return;

    this.history.push(changes);

    if (this.history.length > historyLimit) {
      this.history.shift();
    }

    this.stateId = changes.ulid;
  };

  go = (stateId: string) => {
    this.flush();
    const until = this.history.findIndex((el) => el.ulid === stateId);
    if (until === -1) return this;
    const changes = this.history.slice(until + 1).reverse();

    const [next] = this.produce(this.staging, (draft) => {
      changes.forEach((change) => {
        change.revert(draft);
      });
    });

    return this.set(next, true);
  };

  undo = () => {
    this.flush();
    const last = this.history.pop();
    if (!last) return this;

    const [next] = this.produce(this.staging, (draft) => {
      last.revert(draft);
    });

    this.set(next, true);
    this.history.pop(); // removing the last undo from history, can be simply improved later
    return this;
  };

  /**
   * Marks a reference to the current state and returns
   * a function to jump back to the referenced state
   */
  stateRef = () => {
    const stateId = this.stateId;
    return () => {
      return this.go(stateId);
    };
  };

  private produce = (
    staging: Values,
    setter: AnyFunction
  ): [Values, ChangeList<Values>] => {
    //
    const next = produce(staging, setter);
    const diff = new ChangeList(staging, next);

    return [
      next,
      diff,
    ];
  };

  private _setState = (
    value: Partial<Values> | ((current: Draft<Values>) => MaybePromise<void>),
    immediate = false
  ) => {
    this.schedule((draft) => {
      if (typeof value === 'function') {
        value(draft);
      } else {
        Object.entries(value).forEach(
          ([
            key,
            _value,
          ]) => {
            draft[key] = _value;
          }
        );
      }
    }, immediate);

    return this;
  };

  extend = <Ext extends AnyRecord>(
    extend: (value: State<Values>) => Ext
  ): Omit<State<Values>, keyof Ext> & Ext extends infer X
    ? { [K in keyof X]: X[K] } & {}
    : never => {
    const self: any = this;
    const ext = extend(self);
    Object.entries(ext).forEach(
      ([
        key,
        value,
      ]) => {
        if (typeof value === 'function') {
          value = value.bind(self);
        }
        self[key] = value;
      }
    );
    return self;
  };

  static create = <V extends AnyRecord>(value: V): State<V> => {
    return new State<V>(value);
  };
}

export type StateSubscriptionID = string; // `${Path}#${ULID}`

export interface StateSubscription<
  Values extends AnyRecord,
  Path extends StatePath<Values>
> {
  exec(event: StateEvent<Values, Path>): MaybePromise<void>;
  unsubscribe(): MaybePromise<void>;
  path: Path;
  id: StateSubscriptionID;
}

export interface StateEvent<
  Values extends AnyRecord,
  Path extends StatePath<Values>
> {
  path: Path;
  value: GetFieldByDotPath<Values, Path>;
  state: State<Values>;
}

export function createState<Values extends AnyRecord>(
  initial: Values
): State<Values> {
  return new State(initial);
}

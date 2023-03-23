import { applyPatches, Draft, enablePatches, produceWithPatches } from 'immer';
import { ulid } from 'ulid';

import { groupBy } from './groupBy';
import { pick } from './pick';
import { setByPath } from './setByPath';
import {
  AnyFunction,
  AnyRecord,
  GetFieldByDotPath,
  MaybePromise,
  ObjectDotNotations,
} from './typeUtils';

export type StatePath<Values> = ObjectDotNotations<Values> | '';

export class StateConfig {
  flushDelay: number | false = 1;
  queueLimit = 100;
  historyLimit = 500;
}

export class State<Values extends AnyRecord> {
  static patchesEnabled = false;
  private config = new StateConfig();

  // states
  private main: Values; // main state
  private staging: Values;

  private listeners = new Map<
    StateSubscriptionID,
    StateSubscription<any, any>
  >();

  private queue: StateChange[] = [];

  private readonly history: StateChange[] = [];

  get stateId() {
    return this.history[this.history.length - 1]?.id || '';
  }

  get current() {
    return { ...this.staging };
  }

  constructor(value: Values, options?: Partial<StateConfig>) {
    if (!State.patchesEnabled) {
      enablePatches();
      State.patchesEnabled = true;
    }

    this.main = value;
    this.staging = value;
    Object.assign(this.config, options);
    this.subscribe = this.subscribe.bind(this);
  }

  unsubscribe = (id: StateSubscriptionID) => {
    this.listeners.delete(id);
    return this;
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

  get<Path extends StatePath<Values>>(
    path: Path
  ): GetFieldByDotPath<Values, Path> {
    this.flush();
    return pick(this.main, path);
  }

  set = <
    Path extends StatePath<Values>,
    Value extends GetFieldByDotPath<Values, Path>
  >(
    path: Path,
    value: Value
  ): this => {
    return this.schedule((draft) => {
      setByPath(draft, path, value);
    });
  };

  setImmediate = <
    Path extends StatePath<Values>,
    Value extends GetFieldByDotPath<Values, Path>
  >(
    path: Path,
    value: Value
  ): this => {
    return this.schedule((draft) => {
      setByPath(draft, path, value);
    }, true);
  };

  private flushTimeoutRef?: ReturnType<typeof setTimeout>;

  private schedule = (setter: AnyFunction, immediate = false) => {
    const { queueLimit, flushDelay } = this.config;

    const [nextState, patches] = this.produce(this.staging, setter);

    this.queue.push(...patches);

    this.staging = nextState; // 1️⃣ of 2️⃣ - UPDATING THE STAGING STATE

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
    const listenersByPath = groupBy([...listeners.values()], (el) => el.path);

    this.queue = [];

    const [nextState, patches, reversePatches] = this.produce(
      main,
      function (draft) {
        applyPatches(draft, queue);
      }
    );

    this.pushHistory(...reversePatches);

    this.main = nextState; // 2️⃣of 2️⃣ UPDATING THE MAIN STATE
    const callbacks: AnyFunction[] = [];

    patches.forEach((patch) => {
      const itr = [...patch.path];

      while (itr.length) {
        const path = itr.join('.');
        const pathSubscribers = listenersByPath[path];

        if (pathSubscribers?.length) {
          const value = pick(this.main, path);

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

        itr.pop();
      }
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

  apply = (
    value: Partial<Values> | ((current: Draft<Values>) => MaybePromise<void>),
    immediate = false
  ) => {
    this.schedule((draft) => {
      if (typeof value === 'function') {
        value(draft);
      } else {
        Object.entries(value).forEach(([key, _value]) => {
          draft[key] = _value;
        });
      }
    }, immediate);

    return this;
  };

  private pushHistory = (...patches: StateChange[]) => {
    const { historyLimit } = this.config;
    this.history.push(...patches);

    if (this.history.length > historyLimit) {
      this.history.shift();
    }
  };

  private produce = (
    value: Values,
    callback: AnyFunction
  ): [Values, StateChange[], StateChange[]] => {
    //
    const [nextState, drafts, reversePatches] = produceWithPatches(
      value,
      callback
    );

    return [
      nextState,
      drafts.map((el) => ({ ...el, id: ulid() })),
      reversePatches.map((el) => ({ ...el, id: ulid() })),
    ];
  };

  goto = (stateId: string) => {
    this.flush();
    const until = this.history.findIndex((el) => el.id === stateId);
    if (until === -1) return this;
    const changes = this.history.slice(until + 1).reverse();
    const next = applyPatches(this.staging, changes);
    return this.apply(next, true);
  };

  undo = () => {
    this.flush();
    const last = this.history.pop();
    if (!last) return this;
    const next = applyPatches(this.main, [last]);
    this.apply(next, true);
    this.history.pop(); // removing the last undo from history, can be simply improved later
    return this;
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

export interface StateChange {
  id: string;
  op: 'replace' | 'remove' | 'add';
  path: (string | number)[];
  value?: any;
}

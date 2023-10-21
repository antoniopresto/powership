import { enablePatches, produceWithPatches } from 'immer';

import { clone, Difference } from './diff';
import { ImmerPatch } from './immer';
import { isBrowser } from './isBrowser';
import { parsePath, PathParsed } from './parsePath';
import { pick } from './pick';
import { setByPath } from './setByPath';
import { getStack } from './stackTrace';
import { AnyFunction, AnyRecord, Paths, PathType } from './typings';

enablePatches();

export interface SubscriptionContext<RootType, Value, Path> {
  subscriptionPath: Path;
  oldValue: Value | undefined;
  newValue: Value;
  set: <P extends Paths<RootType>>(
    path: P,
    value: PathType<RootType, P>
  ) => void;
  differences: Difference<Value>[];
}

export type Unsubscribe = () => void;

export class MicroState<Type extends object> {
  value: Type;

  clone = () => {
    return new MicroState(this.cloneValue());
  };

  cloneValue = () => {
    return clone(this.value);
  };

  subscriptions = new Set<Function & { path: string }>();

  constructor(data: Type) {
    this.value = data;
  }

  get = <K extends Paths<Type>>(key: K): PathType<Type, K> | undefined => {
    return pick(this.value, key);
  };

  set = <K extends Paths<Type>>(
    key: K,
    value: PathType<Type, K>
  ): MicroState<Type> => {
    if (!this.subscriptions.size) {
      setByPath(this.value, key, value);
      return this;
    }

    const prev = this.value;

    const [next, patches] = produceWithPatches(this.value, (draft) => {
      setByPath(draft, key as any, value);
    });

    this.value = next;
    this.emmitChanges(prev, this.value, patches);

    return this;
  };

  subscribe(
    callback: (
      value: Type,
      context: SubscriptionContext<Type, Type, ''>
    ) => void
  ): Unsubscribe;
  subscribe<Path extends Paths<Type>>(
    path: Path,
    callback: (
      value: PathType<Type, Path>,
      context: SubscriptionContext<Type, PathType<Type, Path>, Path>
    ) => void
  ): Unsubscribe;
  subscribe(...args: any[]) {
    //
    //
    const path = typeof args[0] === 'string' ? args[0] : '';
    const callback = typeof args[1] === 'function' ? args[1] : args[0];

    const subscription: any = function subscription(..._args: any[]) {
      try {
        return callback(..._args);
      } catch (e: any) {
        e.stack = getStack(callback);
        throw e;
      }
    };

    Object.defineProperties(subscription, {
      name: { value: `subscription_${path}` },
    });

    subscription.path = path;

    const subscriptions = this.subscriptions;
    subscriptions.add(subscription);

    return function unsubscribe() {
      subscriptions.delete(subscription);
    };
  }

  private emmitChanges = (prev: Type, next: Type, patches: ImmerPatch[]) => {
    const changedPaths = new Map<string, PathParsed>();

    patches.forEach((patch) => {
      const { path } = patch;
      const parsed = parsePath(path);

      parsed.affected.forEach((affected) => {
        changedPaths.set(affected, parsed);
      });
    });

    const updatesFromSubscriptions: [string, any][] = [];

    this.subscriptions.forEach((subscription) => {
      const path = changedPaths.get(subscription.path);
      if (!path) return;

      const differences = path.diff(prev, next);
      const oldValue = pick(prev, subscription.path);
      const newValue = pick(next, subscription.path);

      const subscriptionContext: SubscriptionContext<any, any, any> = {
        oldValue,
        newValue,
        differences,
        subscriptionPath: subscription.path,
        set: (setPath, value) => {
          updatesFromSubscriptions.push([setPath, value]);
        },
      };

      subscription(newValue, subscriptionContext);
    });

    updatesFromSubscriptions.forEach(([k, v]) => {
      this.set(k as any, v);
    });
  };

  static create = <Data extends object>(data: Data) => new MicroState(data);

  createRook = (React: {
    useState: AnyFunction;
    useEffect: AnyFunction;
    useMemo: AnyFunction;
  }): UseMicroState<Type> => {
    const { useState, useEffect, useMemo } = React;
    const self = this;

    return function useMicroState(...args: any[]): [any, any] {
      const path = typeof args[0] === 'function' ? '' : args[0] ?? '';
      const onChange = typeof args[0] === 'function' ? args[0] : args[1];

      const [state, setState] = useState(() => self.get(path));

      useEffect(() => {
        setState(self.get(path));

        const unsubscribe = self.subscribe(path, (newValue, context) => {
          onChange?.(newValue, context);
          setState(newValue);
        });

        return () => {
          unsubscribe();
        };
      }, [onChange, path]);

      const set = useMemo(() => {
        return function _setState(...args: any[]) {
          if (args.length === 2) {
            const subPath = parsePath([path, args[0]]);
            self.set(subPath.path as any, args[1]);
          } else {
            Object.entries(args[0]).forEach(([k, v]) => {
              // @ts-ignore
              self.set(k, v);
            });
          }
        };
      }, [path]);

      return [state, set];
    };
  };

  static createReactUtils<
    State extends object,
    TReact extends ReactLike = ReactLike
  >(React: TReact) {
    const StateContext = React.createContext(
      {} as MicroState<{ [K: string]: any }>
    );

    function StateProvider(props: {
      children: ReturnType<typeof React.createElement>;
      initialState: State;
    }) {
      const { initialState, children } = props;

      const value = React.useMemo(() => {
        const ms = new MicroState(initialState);
        MicroState.connectDevTools(ms);
        return ms;
      }, [initialState]);

      return React.createElement(StateContext.Provider, { children, value });
    }

    const useMicroState: UseMicroState<State> = function useMicroState(
      ...args: any[]
    ): [any, any] {
      const path = typeof args[0] === 'function' ? '' : args[0];
      const onChange = typeof args[0] === 'function' ? args[0] : args[1];
      const microState = React.useContext(StateContext);

      const [state, setState] = React.useState(() => microState.get(path));

      React.useEffect(() => {
        setState(microState.get(path));

        const unsubscribe = microState.subscribe(path, (newValue, context) => {
          onChange?.(newValue, context);
          setState(newValue);
        });

        return () => {
          unsubscribe();
        };
      }, [onChange, path]);

      const set = React.useMemo(() => {
        return function setState(...args: any[]) {
          if (args.length === 2) {
            const subPath = parsePath([path, args[0]]);
            microState.set(subPath.path as any, args[1]);
          } else {
            microState.set('', args[0]);
          }
        };
      }, [path]);

      return [state, set];
    };

    return { StateProvider, StateContext, useMicroState };
  }

  static connectDevTools(state: MicroState<any>) {
    if (!isBrowser()) return;
    window.__MICRO_STATE__ = state;

    if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
      const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
        name: 'MicroState',
      });

      state.subscribe((_, { differences }) => {
        const action = differences
          .map((d) => `${d.action}/${d.pathParts.join('/')}`)
          .join('|');
        devTools.send({ type: action, differences }, state.value);
      });

      devTools.init(state.value);
    }
  }
}

export interface OnChange<Type> {
  <Path extends Paths<Type>>(
    value: PathType<Type, Path>,
    context: SubscriptionContext<Type, PathType<Type, Path>, Path>
  ): void;

  (value: Type, context: SubscriptionContext<Type, Type, ''>): void;
}

export interface UseMicroState<Type extends object> {
  <Path extends Paths<Type>>(path: Path, onChange?: OnChange<Path>): [
    value: PathType<Type, Path>,
    setState: PathType<Type, Path> extends infer SubType
      ? [SubType] extends [object]
        ? <Path extends Paths<SubType>>(
            path: Path,
            value: PathType<SubType, Path>
          ) => void
        : (value: PathType<Type, Path>) => void
      : never
  ];

  (onChange?: OnChange<''>): [Type, (value: Type) => void];

  (path: undefined, onChange?: OnChange<''>): [Type, (value: Type) => void];
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: AnyRecord | undefined;
    __MICRO_STATE__: AnyRecord | undefined;
  }
}

export type ReactLike = {
  useState: AnyFunction;
  useEffect: AnyFunction;
  useMemo: AnyFunction;
  createElement: AnyFunction;
  createContext: AnyFunction;
  useContext: AnyFunction;
};

import { createDraft, Draft, isDraft } from 'immer';

import { ReactLike, ReactNodeLike } from '../ReactLike';
import { areEqual } from '../areEqual';
import { isBrowser } from '../isBrowser';
import { pick } from '../pick';
import { setByPath } from '../setByPath';
import { AnyFunction, Paths, PathType } from '../typings';

/**
 * Creates a mini state management system using Immer.
 * Allows direct mutation of state objects with no side effects, tracking changes with patches.
 * Useful for scenarios requiring state history tracking, like undo operations.
 */
export class MiniState<
  StateValue extends object,
  Methods extends _AnyMethodsRecord = {}
> {
  private currentState: StateValue;
  private listeners = new Map<
    StatePieceListener<any>,
    { picker: (state: StateValue) => any }
  >();
  private middlewares = new Set<StateChangeMiddleware<StateValue, Methods>>();
  methods = {} as Methods;

  constructor(initial: StateValue) {
    this.currentState = initial;
  }

  /**
   * Observes changes in a specific part of the state.
   * @param picker - Function to select the part of the state to observe.
   * @param onChange - Callback invoked when the observed part changes.
   * @returns Unsubscribe function to stop observing the state part.
   */
  observe<Piece>(
    picker: (state: StateValue) => Piece,
    onChange: StatePieceListener<Piece>
  ): Unsubscribe;
  observe<Path extends Paths<StateValue>>(
    path: Path,
    onChange: StatePieceListener<PathType<StateValue, Path>>
  ): Unsubscribe;
  observe(pickerOrPath: any, onChange: StatePieceListener<any>) {
    const key = onChange;

    const picker =
      typeof pickerOrPath === 'function'
        ? pickerOrPath
        : (state: StateValue) => pick(state, picker);

    this.listeners.set(key, { picker });
    return () => this.listeners.delete(key);
  }

  /**
   * Updates the state using a callback
   * @param updater - Function receiving a mutable draft of the state for updates.
   * @param _context
   */
  update(
    updater: (draft: StateValue) => void,
    _context?: _UpdateContext
  ): StateValue;
  /**
   * Updates the state value in the provided path
   * @param path dot notation to the object property to change - example: 'user.address.street'
   * @param value new value
   * @param _context internal
   */
  update<Path extends Paths<StateValue>>(
    path: Path,
    value: PathType<StateValue, Path>,
    _context?: _UpdateContext
  ): StateValue;

  update(...args: any[]): StateValue {
    //
    const sanitizedArgs = (() => {
      if (typeof args[0] === 'string') {
        const [path, value, context] = args;

        return {
          context,
          update: (draft: Draft<StateValue>) => {
            setByPath(draft, path, value);
          },
        };
      }

      if (typeof args[0] === 'function') {
        const [update, context] = args;
        return {
          context,
          update,
        };
      }

      throw new Error('invalid updater');
    })();

    if (!sanitizedArgs.context) {
      sanitizedArgs.context = {
        method: '__STATE.UPDATE__',
        payload: undefined,
      };
    }

    return this._update(sanitizedArgs);
  }

  private _update(config: {
    update: (draft: Draft<StateValue>) => void | StateValue | Draft<StateValue>;
    context: _UpdateContext;
  }): StateValue {
    const previous = this.currentState;
    const { update, context } = config;

    let draft = createDraft(this.currentState);
    let updateResult = update(draft);

    if (updateResult) {
      draft = ensureDraft(updateResult);
    }

    this.middlewares.forEach((middleware) => {
      const result = middleware({
        context: context as _MethodExecutionContext<Methods>,
        draft,
        previous,
        cloneDraft(): StateValue {
          return JSON.parse(JSON.stringify(draft));
        },
      });

      if (result) {
        draft = ensureDraft(result);
      }
    });

    const nextState = JSON.parse(JSON.stringify(draft)) as StateValue;

    this.listeners.forEach((item, onChange) => {
      const { picker } = item;

      const nextPiece = picker(nextState);
      const previousPiece = picker(previous);

      if (!areEqual(previousPiece, nextPiece)) {
        onChange({
          previous: previousPiece,
          next: nextPiece,
        });
      }
    });

    if (!context.method?.startsWith('@@INTERNAL')) {
      this._logMethod(context, nextState);
    }

    this.currentState = nextState;
    return nextState;
  }

  /**
   * Binding actions to internal state
   * @param methods
   */
  withMethods = <M extends _MethodsInitializer<StateValue>>(
    methods: M
  ): {
    [K in Exclude<keyof M, keyof MiniState<any>>]: Parameters<M[K]> extends [
      any,
      infer Payload
    ]
      ? (payload: Payload) => StateValue
      : () => StateValue;
  } extends infer Bounded
    ? Bounded extends {}
      ? MiniState<StateValue, Bounded> extends infer Instance
        ? ({ [K in keyof Instance]: Instance[K] } & {}) &
            ({ [K in keyof Bounded]: Bounded[K] } & {})
        : never
      : never
    : never => {
    //
    const self: any = this;

    self.methods = Object.entries(methods).reduce((acc, [key, fn]) => {
      const run = (payload: any) => {
        return this._update({
          update: (draft: any) => {
            // injecting the current state draft alongside the action payload
            try {
              fn(draft, payload);
            } catch (e: any) {
              throw new StateMethodError(e, key);
            }
          },
          context: {
            method: key,
            payload,
          },
        });
      };

      if (!(key in self)) {
        Object.defineProperty(self, key, { value: run });
      }

      return {
        ...acc,
        [key]: run,
      };
    }, {} as any);

    return self;
  };

  get current() {
    return this.currentState;
  }

  addMiddleware = (...items: StateChangeMiddleware<StateValue, Methods>[]) => {
    items.forEach((middleware) => {
      this.middlewares.add(middleware);
    });
    return this;
  };

  static create = <Value extends object>(initial: Value): MiniState<Value> => {
    return new MiniState(initial);
  };

  private _logMethod = (context: _UpdateContext, next: StateValue) => {
    this._devTool?.send(
      { type: `@method/${context.method}`, payload: context.payload },
      next
    );
  };

  private _devTool?: ReduxDevTools | undefined | null;

  connectDevTools = (name: string = 'State'): ReduxDevTools | null => {
    if (!isBrowser()) return null;
    if (!window.__REDUX_DEVTOOLS_EXTENSION__) return null;

    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
      name: name,
    });

    devTools.init(this.current);
    devToolsMap.set(name, devTools);

    devTools.subscribe((event) => {
      const payload = event.payload || event;
      if (payload.type !== 'JUMP_TO_ACTION') return;

      this._update({
        update: () => JSON.parse(event.state),
        context: {
          method: '@@INTERNAL/DEVTOOLS/JUMP_TO_ACTION',
          payload,
        },
      });
    });

    return devTools;
  };

  static createHooks = <S extends object, Instance extends MiniState<S, {}>>(
    React: ReactLike,
    createInstance?: (value: S) => Instance
  ) => {
    const {
      //
      createContext,
      useContext,
      useEffect,
      useState,
      createElement,
    } = React;

    const Context = createContext(null as unknown as Instance);

    function Provider(props: {
      children: ReactNodeLike;
      value: S;
      devTools?: boolean | string;
    }) {
      const { children, devTools, value } = props;

      const [instance] = useState(() =>
        createInstance ? createInstance(value) : MiniState.create(value)
      );

      useEffect(() => {
        if (!devTools) return;

        const name = typeof devTools === 'string' ? devTools : 'State';
        const connection = instance.connectDevTools(name);

        return connection?.unsubscribe;
      }, [devTools]);

      return createElement(Context.Provider, {
        value: instance,
        children,
      });
    }

    // overload with selector
    function useData<Picked>(selector: (state: S) => Picked): [Picked, S];
    // overload without selector
    function useData(): [null, S];
    // implementation
    function useData<Picked, Selector extends (state: S) => Picked>(
      selector?: Selector
    ): [Picked, S] {
      const context = useContext(Context);

      if (!context?.current) {
        throw new Error(`Context missing.`);
      }

      const [selected, setSelected] = useState(() => {
        if (!selector) return null;
        return selector(context.current);
      });

      useEffect(() => {
        if (!selector) {
          setSelected(null);
          return;
        }

        const unsubscribe = context.observe(selector, ({ next }) => {
          setSelected(next);
        });

        return () => unsubscribe();
      }, [context, selector]);

      return [selected, context];
    }

    return { Provider, useData, Context } as const;
  };
}

export const createState = MiniState.create;

type ReduxDevTools = {
  send(event: { type: string; [K: string]: any }, state: object): void;
  init: <S extends object>(state: S, liftedData?: any) => void;
  subscribe: (listener: (message: any) => void) => (() => void) | undefined;
  unsubscribe: () => void;
  error: (payload: string) => void;
};

const devToolsMap = new Map<string, ReduxDevTools | null>();

export type Unsubscribe = () => void;

export type StatePieceListener<FieldState> = (payload: {
  previous: FieldState;
  next: FieldState;
}) => void;

export type StateChangeMiddleware<
  State extends object,
  Methods extends _AnyMethodsRecord = {}
> = (payload: {
  draft: Draft<State>;
  cloneDraft(): State;
  previous: State;
  context: _MethodExecutionContext<Methods>;
}) => State | Draft<State> | void;

export type ExtractStateMethods<T> = Omit<
  T,
  keyof MiniState<{}>
> extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

/**
 * @internal
 */
export type _AnyMethodsRecord = {
  [K: string]: (...args: unknown[]) => unknown;
};

/**
 * @internal
 */
export interface _MethodsInitializer<State extends object> {
  readonly [K: string]: (current: Draft<State>, payload: any) => unknown;
}

export type _MethodExecutionContext<Methods extends _AnyMethodsRecord> = ({
  [K in keyof Methods]: {
    method: K;
    payload: Parameters<Methods[K]>[1];
    origin: AnyFunction;
  };
} & {})[keyof Methods];

type _UpdateContext = {
  method: string;
  payload: unknown;
};

class StateMethodError extends Error {
  constructor(error: Error, method: string) {
    super(`Failed to execute method ${method}\n${error.message || ''}`);
    this.stack = (error.stack || '').split('\n').slice(1).join('\n');
  }
}

function ensureDraft<T extends object>(value: T | Draft<T>): Draft<T> {
  return (isDraft(value) ? value : createDraft(value)) as Draft<T>;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:
      | null
      | undefined
      | { connect: (preConfig: object) => ReduxDevTools };
  }
}

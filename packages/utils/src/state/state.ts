import { createDraft, Draft, isDraft } from 'immer';

import { ReactLike, ReactNodeLike } from '../ReactLike';
import { areEqual } from '../areEqual';
import { pick } from '../pick';
import { setByPath } from '../setByPath';
import type { AnyFunction, Paths, PathType } from '../typings';

/**
 * Creates a mini state management system using Immer.
 * Allows direct mutation of state objects with no side effects, tracking changes with patches.
 * Useful for scenarios requiring state history tracking, like undo operations.
 */
export class State<
  StateObject extends object,
  Methods extends _AnyMethodsRecord = {}
> {
  private currentState: StateObject;
  private listeners = new Map<
    StatePieceListener<any>,
    { picker: (state: StateObject) => any }
  >();
  private middlewares = new Set<StateChangeMiddleware<StateObject, Methods>>();
  methods = {} as Methods;

  constructor(initial: StateObject) {
    this.currentState = initial;
  }

  /**
   * Observes changes in a specific part of the state.
   * @param picker - Function to select the part of the state to observe.
   * @param onChange - Callback invoked when the observed part changes.
   * @returns Unsubscribe function to stop observing the state part.
   */
  observe<Piece>(
    picker: (state: StateObject) => Piece,
    onChange: StatePieceListener<Piece>
  ): Unsubscribe;
  observe<Path extends Paths<StateObject>>(
    path: Path,
    onChange: StatePieceListener<PathType<StateObject, Path>>
  ): Unsubscribe;
  observe(pickerOrPath: any, onChange: StatePieceListener<any>) {
    const key = onChange;

    const picker =
      typeof pickerOrPath === 'function'
        ? pickerOrPath
        : (state: StateObject) => pick(state, picker);

    this.listeners.set(key, { picker });
    return () => this.listeners.delete(key);
  }

  /**
   * Updates the state using a callback
   * @param updater - Function receiving a mutable draft of the state for updates.
   * @param _context
   */
  update(
    updater: (draft: Draft<StateObject>) => void,
    _context?: _UpdateContext
  ): StateObject;
  /**
   * Updates the state value in the provided path
   * @param path dot notation to the object property to change - example: 'user.address.street'
   * @param value new value
   * @param _context internal
   */
  update<Path extends Paths<StateObject>>(
    path: Path,
    value: PathType<StateObject, Path>,
    _context?: _UpdateContext
  ): StateObject;

  update(...args: any[]): StateObject {
    //
    const sanitizedArgs = (() => {
      if (typeof args[0] === 'string') {
        const [path, value, context] = args;

        return {
          context,
          update: (draft: Draft<StateObject>) => {
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
        method: '@@DIRECT_UPDATE',
        payload: undefined,
      };
    }

    return this._update(sanitizedArgs);
  }

  private _update(config: {
    update: (
      draft: Draft<StateObject>
    ) => void | StateObject | Draft<StateObject>;
    context: _UpdateContext;
  }): StateObject {
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
      });

      if (result) {
        draft = ensureDraft(result);
      }
    });

    const nextState = JSON.parse(JSON.stringify(draft)) as StateObject;

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
  withMethods = <Actions extends _MethodsInitializer<StateObject>>(
    methods: Actions
  ): _StateMethods<StateObject, Actions> extends infer M
    ? State<StateObject, _StateMethods<StateObject, Actions>> extends infer S
      ? { [K in keyof M as K extends keyof S ? never : K]: M[K] } & ({
          [K in keyof S]: S[K];
        } & {})
      : never
    : never => {
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

  addMiddleware = (...items: StateChangeMiddleware<StateObject, Methods>[]) => {
    items.forEach((middleware) => {
      this.middlewares.add(middleware);
    });
    return this;
  };

  static create = <StateObject extends object>(
    initial: StateObject
  ): State<StateObject> => {
    return new State(initial);
  };

  private _logMethod = (context: _UpdateContext, next: StateObject) => {
    this._devTool?.send(
      { type: `@method/${context.method}`, payload: context.payload },
      next
    );
  };

  private _devTool?: ReduxDevTools | undefined;

  connectDevTools = (name: string = 'State') => {
    this._devTool = (() => {
      let devTools = devToolsMap.get(name);

      if (devTools) {
        devTools.init(this.current);
        return devTools;
      }

      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
          name: name,
        });

        if (!devTools) return;

        devTools.init(this.current);
        devToolsMap.set(name, devTools);

        devTools.subscribe((event) => {
          const payload = event.payload || event;
          if (payload.type === 'JUMP_TO_ACTION') {
            this._update({
              update: () => JSON.parse(event.state),
              context: {
                method: '@@INTERNAL/DEVTOOLS/JUMP_TO_ACTION',
                payload,
              },
            });
          }
        });

        return devTools;
      }
    })();
  };

  static createHooks = <T>(React: ReactLike, createState: () => T) => {
    const {
      //
      createContext,
      useContext,
      useEffect,
      useState,
      createElement,
    } = React;

    type State = T extends { methods: infer M }
      ? { [K in keyof M as K extends keyof T ? never : K]: M[K] } & T
      : never;

    type Current = State extends { current: infer D }
      ? { [K in keyof D]: D[K] } & {}
      : never;

    const Context = createContext<any>(null);

    function Provider(props: { children: ReactNodeLike }) {
      const [value] = useState(() => createState());

      return createElement(Context.Provider, {
        value,
        children: props.children,
      });
    }

    // overload with selector
    function useData<Picked>(
      selector: (state: Current) => Picked
    ): [Picked, Current];
    // overload without selector
    function useData(): [null, Current];
    // implementation
    function useData<Picked, Selector extends (state: Current) => Picked>(
      selector?: Selector
    ): [Picked, Current] {
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

    return { Provider, useData, Context, createState } as const;
  };
}

type ReduxDevTools = {
  subscribe(listener: AnyFunction): void;
  init(value: object): void;
  send(event: { type: string; [K: string]: any }, state: object): void;
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
  previous: State;
  context: _MethodExecutionContext<Methods>;
}) => State | Draft<State> | void;

export type ExtractStateMethods<T> = Omit<T, keyof State<{}>> extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

/**
 * @internal
 */
type _HasParameters<Action extends AnyFunction> = [
  Parameters<Action>[1]
] extends [undefined]
  ? 0
  : 1;

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

/**
 * @internal
 */
export type _StateMethods<
  State extends object,
  Actions extends _MethodsInitializer<State>
> = {
  [K in keyof Actions]: _HasParameters<Actions[K]> extends 1
    ? (payload: Parameters<Actions[K]>[1]) => State
    : () => State;
};

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

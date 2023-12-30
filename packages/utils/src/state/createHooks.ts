import { ReactLike, ReactNodeLike } from '../ReactLike';

import type { State } from './state';

export function createHooks<
  StateObject extends object,
  R extends ReactLike = ReactLike
>(React: R) {
  const {
    //
    createContext,
    useContext,
    useEffect,
    useState,
    createElement,
  } = React;

  const Context = createContext<StateObject>(null as any);

  function Provider(props: {
    initialState: State<StateObject> | (() => State<StateObject>);
    children: ReactNodeLike;
  }) {
    const [value] = useState(props.initialState);

    return createElement(Context.Provider, {
      value,
      children: props.children,
    });
  }

  // overload with selector
  function useData<Value>(
    selector: (state: StateObject) => Value
  ): [Value, State<StateObject>];
  // overload without selector
  function useData(): [null, State<StateObject>];
  // implementation
  function useData<Value, Selector extends (state: StateObject) => Value>(
    selector?: Selector
  ): [Value, State<StateObject>] {
    const context = useContext(Context);

    if (!context?.current) {
      throw new Error(`Context missing.`);
    }

    const [selected, setSelected] = useState(() => {
      if (!selector) return null;
      return selector(context.current());
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

  return [Provider, useData, Context] as const;
}

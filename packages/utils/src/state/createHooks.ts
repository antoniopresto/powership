import { ReactLike, ReactNodeLike } from '../ReactLike';

import type { State } from './state';

export function createHooks<
  StateType extends State<any>,
  R extends ReactLike = ReactLike
>(React: R) {
  type StateObject = StateType extends State<infer S> ? S : never;

  const {
    //
    createContext,
    useContext,
    useEffect,
    useState,
    createElement,
  } = React;

  const Context = createContext<StateType>(null as any);

  function Provider(props: {
    initialState: StateType | (() => StateType);
    children: ReactNodeLike;
  }) {
    const [value] = useState(props.initialState);

    return createElement(Context.Provider, {
      value,
      children: props.children,
    });
  }

  // overload with selector
  function useData<Picked>(
    selector: (state: StateObject) => Picked
  ): [Picked, StateType];
  // overload without selector
  function useData(): [null, StateType];
  // implementation
  function useData<Picked, Selector extends (state: StateObject) => Picked>(
    selector?: Selector
  ): [Picked, StateType] {
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

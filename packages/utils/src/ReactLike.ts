import { AnyFunction, AnyRecord } from './typings';

export interface _ReactElement {
  type: any;
  props: any;
  key: any;
}

export interface _ReactPortal extends _ReactElement {
  children: ReactNodeLike;
}

export type ReactNodeLike =
  | _ReactElement
  | string
  | number
  | Iterable<ReactNodeLike>
  | _ReactPortal
  | boolean
  | null
  | undefined;

export interface _ExoticComponent<P = {}> {
  (props: P): ReactNodeLike;
  readonly $$typeof: symbol;
}

export type _PropsWithChildren<P = unknown> = P & {
  children?: ReactNodeLike | undefined;
};

export interface _ReactContext<T> {
  Provider: _ExoticComponent<_PropsWithChildren<{ value: T }>>;
  Consumer: _ExoticComponent<{ children: (value: T) => ReactNodeLike }>;
  displayName?: string | undefined;
}

export interface FunctionComponentLike<P = {}> {
  (props: P, context?: any): ReactNodeLike;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

export interface ReactLike {
  useState: AnyFunction;
  useEffect: AnyFunction;
  useMemo: AnyFunction;
  createContext: <T>(initialValue: T) => _ReactContext<T>;
  useContext: AnyFunction;
  createElement<T = AnyRecord>(
    type: any,
    props?: T,
    ...children: ReactNodeLike[]
  ): _ReactElement;
}

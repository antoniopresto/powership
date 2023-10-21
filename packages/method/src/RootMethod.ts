import { Infer } from '@powership/schema';
import { List } from '@powership/utils';

import { MethodContext, MethodLike } from './Method';
export type RootMethodOptions<
  _M extends Readonly<[MethodLike, ...MethodLike[]]>
> = {
  name?: string;
};

export type _MethodsRecord<M extends Readonly<[MethodLike, ...MethodLike[]]>> =
  (
    List.ObjectOf<M> extends infer R
      ? {
          [K in keyof R as R[K] extends { methodName: infer NM }
            ? NM extends string
              ? NM
              : never
            : never]: R[K];
        } & {}
      : never
  ) extends infer R
    ? R extends unknown
      ? R extends { [K: string]: MethodLike }
        ? { [K in keyof R]: R[K] extends MethodLike ? R[K] : never } & {}
        : never
      : never
    : never;

export type _Info<M extends Readonly<[MethodLike, ...MethodLike[]]>> = (
  List.ObjectOf<M> extends infer R
    ? {
        [K in keyof R as R[K] extends { methodName: infer NM }
          ? NM extends string
            ? NM
            : never
          : never]: R[K] extends {}
          ? R[K] extends {
              argsType: infer Input;
              outputType: infer Output;
            }
            ? {
                args: Infer<Input>;
                output: Infer<Output>;
              }
            : never
          : never;
      } & {}
    : never
) extends infer R
  ? R extends unknown
    ? R extends { [K: string]: { args: unknown; output: unknown } }
      ? { [K in keyof R]: R[K] } & {}
      : never
    : never
  : never;

export class RootMethod<
  M extends Readonly<[MethodLike, ...MethodLike[]]>,
  Info extends _Info<M> = _Info<M>
> {
  private options: RootMethodOptions<M>;
  private methods: _MethodsRecord<M>;

  constructor(methods: M, options?: RootMethodOptions<M>) {
    let errors: string[] = [];

    // @ts-ignore
    this.methods = {};

    methods.forEach((m) => {
      if (this.methods[m.methodName]) {
        errors.push(
          `  ☂︎ found repeated item with methodName "${m.methodName}".`
        );
      }
      // @ts-ignore
      this.methods[m.methodName] = m;
    });

    this.options = { ...options };

    if (errors.length) {
      throw new Error('RootMethod: \n' + errors.join(`\n`));
    }
  }

  call = <Name extends keyof Info>(
    name: Name
  ): {
    with(
      args: Info[Name]['args'],
      options?: {
        rootValue?: any;
        contextValue?: MethodContext;
        operationName?: string;
      }
    ): Promise<Info[Name]['output']>;
  } => {
    const method: MethodLike = this.methods[name];

    return {
      with: async (args, options) => {
        return method.call(args, { ...options });
      },
    };
  };

  static create = <Me extends Readonly<[MethodLike, ...MethodLike[]]>>(
    methods: Me,
    options?: RootMethodOptions<Me>
  ): RootMethod<Me> => {
    return new RootMethod(methods, options);
  };
}

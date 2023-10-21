import { Infer } from '@powership/schema';
import { List } from '@powership/utils';

import { MethodContext, MethodLike } from './Method';
export type RootMethodOptions<
  _M extends Readonly<[MethodLike, ...MethodLike[]]>
> = {
  name?: string;
};

export type _MethodsRecord<M extends Readonly<[MethodLike, ...MethodLike[]]>> =
  List.ObjectOf<M> extends infer R
    ? {
        [K in keyof R as R[K] extends { methodName: infer NM }
          ? NM extends string
            ? NM
            : never
          : never]: R[K];
      } & {}
    : never;

export type _Methods<M extends Readonly<[MethodLike, ...MethodLike[]]>> =
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
    : never;

export class RootMethod<
  M extends Readonly<[MethodLike, ...MethodLike[]]>,
  Name extends string = 'RootMethod'
> {
  private methodName: Name;
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
      this.methods[m.methodName] = m;
    });

    this.methodName = options?.name || ('RootMethod' as any);
    this.options = { ...options };

    if (errors.length) {
      throw new Error('RootMethod: \n' + errors.join(`\n`));
    }
  }

  execute = (
    operations: {},
    options?: {
      rootValue?: any;
      contextValue?: MethodContext;
      operationName?: string;
    }
  ) => {};

  static create = <Me extends Readonly<[MethodLike, ...MethodLike[]]>>(
    methods: Me,
    options?: RootMethodOptions<Me>
  ): RootMethod<Me> => {
    return new RootMethod(methods, options);
  };
}

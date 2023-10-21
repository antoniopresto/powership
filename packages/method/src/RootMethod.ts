import { MethodLike } from './Method';

export type RootMethodOptions<
  _M extends Readonly<[MethodLike, ...MethodLike[]]>
> = {
  name?: string;
};

export type _MethodsRecord<M extends Readonly<[MethodLike, ...MethodLike[]]>> =
  {
    [K in keyof M as M[K] extends { methodName: infer MN }
      ? Extract<MN, string>
      : never]: M[K];
  } & {};

export class RootMethod<
  M extends Readonly<[MethodLike, ...MethodLike[]]>,
  Name extends string = 'RootMethod'
> {
  methodName: Name;
  options: RootMethodOptions<M>;
  private methods: _MethodsRecord<M> = {};

  constructor(methods: M, options?: RootMethodOptions<M>) {
    let errors: string[] = [];

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
}

export function combineMethods<
  M extends Readonly<[MethodLike, ...MethodLike[]]>
>(methods: M, options?: RootMethodOptions<M>): RootMethod<M> {
  return new RootMethod(methods, options);
}

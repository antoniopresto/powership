import {
  AppOptions,
  AppRequestContext,
  InferMethodTypes,
  MethodLike,
  MethodPayload,
  MethodRequest,
  MethodRequestOptions,
  ObjectOfMethods,
} from './types';

export class App<
  M extends Readonly<[MethodLike, ...MethodLike[]]>,
  Info extends InferMethodTypes<M> = InferMethodTypes<M>,
  Context extends AppRequestContext = AppRequestContext
> {
  static defaultOptions: Required<AppOptions<any, any>> = {
    name: 'unknown',
    batchRequests: true,
    batchTimeoutMS: 50,
    maxBatchCallsCount: 30,
    buildRequestContext() {
      throw new Error('buildRequestContext was not provided.');
    },
    onResult() {},
    beforeCall() {},
  };

  private options: Required<AppOptions<M, Context>>;
  private methods: ObjectOfMethods<M>;

  constructor(methods: M, options: AppOptions<M, Context>) {
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

    this.options = { ...App.defaultOptions, ...options };

    if (errors.length) {
      throw new Error('RootMethod: \n' + errors.join(`\n`));
    }
  }

  private queue: MethodRequest<any, any, any>[] = [];
  private timeout: any = null;
  private dispatch = async () => {
    const requests = [...this.queue];
    this.queue = [];

    const context = await this.options.buildRequestContext(requests);

    const payload: MethodPayload<any, Context> = {
      args,
      context,
      requestInfo: {
        app: this,
        appOptions: this.options,
        requests,
      },
    };

    await this.options.beforeCall([payload]);

    return method.call(args, payload);
  };

  call = <Name extends keyof Info>(
    name: Name
  ): {
    with(
      args: Info[Name]['args'],
      options?: MethodRequestOptions
    ): Promise<Info[Name]['output']>;
  } => {
    const method: MethodLike = this.methods[name];

    return {
      with: async (args, options) => {
        const request: Omit<MethodRequest<any, any, any>, 'context'> = {
          args,
          options: { ...options },
          method: name,
        };
      },
    };
  };

  static create = <
    Methods extends Readonly<[MethodLike, ...MethodLike[]]>,
    Ctx extends AppRequestContext
  >(
    methods: Methods,
    options: AppOptions<Methods, Ctx>
  ): App<Methods> => {
    return new App(methods, options);
  };
}

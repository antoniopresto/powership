import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  GraphTypeLike,
  Infer,
  isObjectType,
  ObjectDefinitionInput,
  ObjectLike,
} from '@powership/schema';
import { IsKnown, MaybePromise } from '@powership/utils';

export type MethodType = 'query' | 'mutation';

export interface MethodContext {}

export interface MethodResolveInfo {}

export type MethodDefinition<
  Result extends FieldInput,
  Args extends ObjectDefinitionInput | ObjectLike | GraphTypeLike = {}
> = {
  kind: MethodType;
  result: Result;
  args: Args;
  name: string;
  throwOnInvalidResultingListItems?: boolean;
};

export type MethodResolver<
  Result extends FieldInput,
  Args extends ObjectDefinitionInput | ObjectLike | GraphTypeLike = {},
  Context extends MethodContext = MethodContext,
  Parent extends any = any
> = [IsKnown<Result>] extends [1]
  ? [IsKnown<Args>] extends [1]
    ? (
        parent: Parent,
        args: Infer<{ object: Args }>,
        context: Context,
        info: MethodResolveInfo
      ) => MaybePromise<Infer<Result>>
    : never
  : never;

const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/; // graphql field name regex

function validateName(name: string) {
  assertType(
    name,
    'string',
    `Method definition: invalid name type "${typeof name}" found.`
  );
  if (!NAME_RX.test(name)) {
    throw new Error(`Method definition: invalid name "${name}" found.`);
  }
}

export class Method<
  ResultDefinition extends FieldInput,
  ArgsDefinition extends ObjectDefinitionInput = {},
  Context extends MethodContext = MethodContext,
  Parent extends any = any
> {
  __isPSMethod: true;
  methodName: string;
  argsName: string;
  resultName: string;
  kind: MethodType;
  argsType: GraphType<{ object: ArgsDefinition }>;
  resultType: GraphType<ResultDefinition>;

  resolve: (
    parent: Parent,
    args: Infer<{ object: ArgsDefinition }>,
    context: Context,
    info: MethodResolveInfo
  ) => Promise<Infer<ResultDefinition>>;

  private __definition: MethodDefinition<any>;

  constructor(definition: MethodDefinition<ResultDefinition, ArgsDefinition>) {
    this.__definition = definition;

    const {
      //
      name,
      result,
      args,
      kind,
    } = definition;

    validateName(name);

    assertType(kind, { enum: ['query', 'mutation'] } as const);
    this.kind = kind;

    this.methodName = name;
    this.argsName = `${name}MethodArgs`;
    this.resultName = `${name}MethodResult`;

    this.resultType = createType(this.resultName, result);

    this.argsType = ((): any => {
      if (GraphType.is(args)) {
        if (args.__lazyGetter.objectType)
          return createType(this.argsName, args);

        throw new Error(
          `Expected args to be a valid object definition or type.`
        );
      }
      return isObjectType(args)
        ? createType(this.argsName, args)
        : createType(this.argsName, { object: args });
    })();

    setTimeout(() => {
      if (typeof this.resolve === 'function') return;
      throw new Error(
        `You should register a resolver using the Method.onExec method.`
      );
    }, 10);
  }

  onExec = <P extends any>(
    resolve: MethodResolver<ResultDefinition, ArgsDefinition, Context, P>
  ): Method<ResultDefinition, ArgsDefinition, Context, P> => {
    const {
      argsType,
      resultType,
      methodName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.resolve = async function resolveMethod(
      source: any,
      args: any,
      context: any,
      info: any = {}
    ) {
      args = argsType
        ? argsType.parse(args, {
            customMessage: (_, error) => {
              return `Invalid input provided to method "${methodName}":\n ${error.message}`;
            },
          } as any)
        : args;

      const resulting = await resolve(source, args, context, info);

      return resultType.parse(resulting, {
        customMessage: (_, error) => {
          return `Invalid output from method "${methodName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    };

    return this as any;
  };
}

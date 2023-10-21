import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  Infer,
} from '@powership/schema';
import { Compute, IsKnown, MaybePromise } from '@powership/utils';

export type DispatcherRequestKind = 'query' | 'mutation';
export type DispatcherResponseKind = 'query_result' | 'mutation_result';
export type DispatcherKind = DispatcherRequestKind | DispatcherResponseKind;

export interface DispatcherContext {}

export interface DispatcherResolveInfo {}

export type DispatcherDefinition<
  Input extends FieldInput,
  Output extends FieldInput
> = {
  kind: DispatcherRequestKind;
  name: string;
  outputDefinition: Output;
  inputDefinition: Input;
  throwOnInvalidResultingListItems?: boolean;
};

export type DispatcherInputPayload<
  InputDefinition extends FieldInput,
  Context extends DispatcherContext = DispatcherContext,
  Parent extends any = any
> = {
  parent: Parent;
  input: Infer<InputDefinition>;
  context: Context;
  info: DispatcherResolveInfo;
};

export type DispatcherResolver<
  InputDefinition extends FieldInput,
  OutputDefinition extends FieldInput,
  Context extends DispatcherContext = DispatcherContext,
  Parent extends any = any
> = [IsKnown<OutputDefinition>] extends [1]
  ? [IsKnown<InputDefinition>] extends [1]
    ? (
        payload: Compute<
          DispatcherInputPayload<InputDefinition, Context, Parent>
        >
      ) => Promise<Infer<OutputDefinition>>
    : never
  : never;

const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/; // graphql field name regex

function validateName(name: string) {
  assertType(
    name,
    'string',
    `Dispatcher definition: invalid name type "${typeof name}" found.`
  );
  if (!NAME_RX.test(name)) {
    throw new Error(`Dispatcher definition: invalid name "${name}" found.`);
  }
}

export class Dispatcher<
  RequestTypeDefinition extends FieldInput,
  ResponseTypeDefinition extends FieldInput,
  Context extends DispatcherContext = DispatcherContext
> {
  __isPSDispatcher: true;
  DispatcherName: string;
  kind: DispatcherKind;
  inputType: GraphType<RequestTypeDefinition>;
  outputType: GraphType<ResponseTypeDefinition>;
  private __definition: DispatcherDefinition<any, any>;

  resolve: DispatcherResolver<
    RequestTypeDefinition,
    ResponseTypeDefinition,
    Context
  >;

  send: (
    args: Infer<RequestTypeDefinition>
  ) => Promise<Infer<ResponseTypeDefinition>>;

  constructor(
    definition: DispatcherDefinition<
      RequestTypeDefinition,
      ResponseTypeDefinition
    >
  ) {
    this.__definition = definition;

    const {
      //
      name,
      inputDefinition,
      outputDefinition,
      kind,
    } = definition;

    validateName(name);

    assertType(kind, { enum: ['query', 'mutation'] } as const);
    this.kind = kind;

    this.DispatcherName = name;

    this.outputType = GraphType.is(outputDefinition)
      ? (outputDefinition as any)
      : createType(`${name}Output`, outputDefinition);

    this.inputType = GraphType.is(inputDefinition)
      ? (inputDefinition as any)
      : createType(`${name}Input`, inputDefinition);

    this.send = function call() {
      throw new Error('Dispatcher has no onCall handler defined.');
    };

    this.resolve = async function receive() {
      throw new Error('Dispatcher has no onAnswer handler defined.');
    } as any;
  }

  setSender = (
    resolve: (
      args: Infer<RequestTypeDefinition>
    ) => Promise<Infer<ResponseTypeDefinition>>
  ) => {
    this.send = async (
      args: Infer<RequestTypeDefinition>
    ): Promise<Infer<ResponseTypeDefinition>> => {
      args = this.inputType.parse(args);
      const response = await resolve(args);
      return this.outputType.parse(response);
    };
  };

  setResolver = <Parent extends any>(
    resolve: (
      payload: Compute<
        DispatcherInputPayload<RequestTypeDefinition, Context, Parent>
      >
    ) => MaybePromise<Infer<ResponseTypeDefinition>>
  ): Dispatcher<RequestTypeDefinition, ResponseTypeDefinition, Context> => {
    const {
      inputType,
      outputType,
      DispatcherName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.resolve = async function resolveDispatcher(
      payload: DispatcherInputPayload<RequestTypeDefinition, Context, Parent>
    ) {
      let { parent, input, context, info = {} } = payload;

      input = inputType
        ? inputType.parse(input, {
            customDispatcher: (_, error) => {
              return `Invalid input provided to Dispatcher "${DispatcherName}":\n ${error.Dispatcher}`;
            },
          } as any)
        : input;

      const resulting = await resolve({
        parent,
        input,
        context,
        info,
      });

      return outputType.parse(resulting, {
        customMessage: (_, error) => {
          return `Invalid output from Dispatcher "${DispatcherName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    } as DispatcherResolver<
      RequestTypeDefinition,
      ResponseTypeDefinition,
      Context,
      Parent
    >;

    return this as any;
  };
}

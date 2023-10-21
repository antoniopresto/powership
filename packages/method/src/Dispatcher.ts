import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  Infer,
} from '@powership/schema';
import { Compute, IsKnown, MaybePromise } from '@powership/utils';

export type RequestType = 'query' | 'mutation';
export type ResponseType = 'query_result' | 'mutation_result';
export type OperationType = RequestType | ResponseType;

export interface OperationContext {}

export interface OperationInfo {}

export type OperationDefinition<
  Input extends FieldInput,
  Output extends FieldInput
> = {
  kind: RequestType;
  name: string;
  outputDefinition: Output;
  inputDefinition: Input;
  throwOnInvalidResultingListItems?: boolean;
};

export type InputPayload<
  InputDefinition extends FieldInput,
  Context extends OperationContext = OperationContext,
  Parent extends any = any
> = {
  parent: Parent;
  input: Infer<InputDefinition>;
  context: Context;
  info: OperationInfo;
};

export type OperationResolver<
  InputDefinition extends FieldInput,
  OutputDefinition extends FieldInput,
  Context extends OperationContext = OperationContext,
  Parent extends any = any
> = [IsKnown<OutputDefinition>] extends [1]
  ? [IsKnown<InputDefinition>] extends [1]
    ? (
        payload: Compute<InputPayload<InputDefinition, Context, Parent>>
      ) => Promise<Infer<OutputDefinition>>
    : never
  : never;

const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

function validateIdentifier(name: string) {
  assertType(
    name,
    'string',
    `Operation definition: invalid name type "${typeof name}" found.`
  );
  if (!NAME_RX.test(name)) {
    throw new Error(`Operation definition: invalid name "${name}" found.`);
  }
}

export class Dispatcher<
  RequestDefinition extends FieldInput,
  ResponseDefinition extends FieldInput,
  Context extends OperationContext = OperationContext
> {
  __isPSMessage: true;
  operationName: string;
  kind: OperationType;
  inputType: GraphType<RequestDefinition>;
  outputType: GraphType<ResponseDefinition>;
  private __definition: OperationDefinition<any, any>;

  resolve: OperationResolver<RequestDefinition, ResponseDefinition, Context>;

  send: (args: Infer<RequestDefinition>) => Promise<Infer<ResponseDefinition>>;

  constructor(
    definition: OperationDefinition<RequestDefinition, ResponseDefinition>
  ) {
    this.__definition = definition;

    const { name, inputDefinition, outputDefinition, kind } = definition;

    validateIdentifier(name);

    assertType(kind, { enum: ['query', 'mutation'] } as const);
    this.kind = kind;

    this.operationName = name;

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

  configureSender = (
    resolve: (
      args: Infer<RequestDefinition>
    ) => Promise<Infer<ResponseDefinition>>
  ) => {
    this.send = async (
      args: Infer<RequestDefinition>
    ): Promise<Infer<ResponseDefinition>> => {
      args = this.inputType.parse(args);
      const response = await resolve(args);
      return this.outputType.parse(response);
    };
  };

  configureResolver = <Parent extends any>(
    resolve: (
      payload: Compute<InputPayload<RequestDefinition, Context, Parent>>
    ) => MaybePromise<Infer<ResponseDefinition>>
  ): Dispatcher<RequestDefinition, ResponseDefinition, Context> => {
    const {
      inputType,
      outputType,
      operationName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.resolve = async function resolveOperation(
      payload: InputPayload<RequestDefinition, Context, Parent>
    ) {
      let { parent, input, context, info = {} } = payload;

      input = inputType
        ? inputType.parse(input, {
            customMessage: (_, error) => {
              return `Invalid input provided to operation "${operationName}":\n ${error.message}`;
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
          return `Invalid output from operation "${operationName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    } as OperationResolver<
      RequestDefinition,
      ResponseDefinition,
      Context,
      Parent
    >;

    return this as any;
  };
}

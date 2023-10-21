import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  Infer,
} from '@powership/schema';
import { Compute, IsKnown, MaybePromise } from '@powership/utils';

export type MessageRequestKind = 'query' | 'mutation';
export type MessageResponseKind = 'query_result' | 'mutation_result';
export type MessageKind = MessageRequestKind | MessageResponseKind;

export interface MessageContext {}

export interface MessageResolveInfo {}

export type MessageDefinition<
  Input extends FieldInput,
  Output extends FieldInput
> = {
  kind: MessageRequestKind;
  name: string;
  outputDefinition: Output;
  inputDefinition: Input;
  throwOnInvalidResultingListItems?: boolean;
};

export type MessageInputPayload<
  InputDefinition extends FieldInput,
  Context extends MessageContext = MessageContext,
  Parent extends any = any
> = {
  parent: Parent;
  input: Infer<InputDefinition>;
  context: Context;
  info: MessageResolveInfo;
};

export type MessageResolver<
  InputDefinition extends FieldInput,
  OutputDefinition extends FieldInput,
  Context extends MessageContext = MessageContext,
  Parent extends any = any
> = [IsKnown<OutputDefinition>] extends [1]
  ? [IsKnown<InputDefinition>] extends [1]
    ? (
        payload: Compute<MessageInputPayload<InputDefinition, Context, Parent>>
      ) => Promise<Infer<OutputDefinition>>
    : never
  : never;

const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/; // graphql field name regex

function validateName(name: string) {
  assertType(
    name,
    'string',
    `Message definition: invalid name type "${typeof name}" found.`
  );
  if (!NAME_RX.test(name)) {
    throw new Error(`Message definition: invalid name "${name}" found.`);
  }
}

export class Message<
  RequestTypeDefinition extends FieldInput,
  ResponseTypeDefinition extends FieldInput,
  Context extends MessageContext = MessageContext
> {
  __isPSMessage: true;
  messageName: string;
  kind: MessageKind;
  inputType: GraphType<RequestTypeDefinition>;
  outputType: GraphType<ResponseTypeDefinition>;
  private __definition: MessageDefinition<any, any>;

  resolve: MessageResolver<
    RequestTypeDefinition,
    ResponseTypeDefinition,
    Context
  >;

  send: (
    args: Infer<RequestTypeDefinition>
  ) => Promise<Infer<ResponseTypeDefinition>>;

  constructor(
    definition: MessageDefinition<RequestTypeDefinition, ResponseTypeDefinition>
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

    this.messageName = name;

    this.outputType = GraphType.is(outputDefinition)
      ? (outputDefinition as any)
      : createType(`${name}Output`, outputDefinition);

    this.inputType = GraphType.is(inputDefinition)
      ? (inputDefinition as any)
      : createType(`${name}Input`, inputDefinition);

    this.send = function call() {
      throw new Error('Message has no onCall handler defined.');
    };

    this.resolve = async function receive() {
      throw new Error('Message has no onAnswer handler defined.');
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
        MessageInputPayload<RequestTypeDefinition, Context, Parent>
      >
    ) => MaybePromise<Infer<ResponseTypeDefinition>>
  ): Message<RequestTypeDefinition, ResponseTypeDefinition, Context> => {
    const {
      inputType,
      outputType,
      messageName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.resolve = async function resolveMessage(
      payload: MessageInputPayload<RequestTypeDefinition, Context, Parent>
    ) {
      let { parent, input, context, info = {} } = payload;

      input = inputType
        ? inputType.parse(input, {
            customMessage: (_, error) => {
              return `Invalid input provided to message "${messageName}":\n ${error.message}`;
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
          return `Invalid output from message "${messageName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    } as MessageResolver<
      RequestTypeDefinition,
      ResponseTypeDefinition,
      Context,
      Parent
    >;

    return this as any;
  };
}

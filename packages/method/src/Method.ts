import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  Infer,
} from '@powership/schema';
import { Compute, IsKnown, MaybePromise } from '@powership/utils';

/**
 * Enum representing the types of method requests.
 * - 'query': For read-only fetch operations.
 * - 'mutation': For write operations that change data.
 */
export type MethodRequestType = 'query' | 'mutation';

/**
 * Enum representing the types of method responses.
 * - 'query_result': The result of a query operation.
 * - 'mutation_result': The result of a mutation operation.
 */
export type MethodResponseType = 'query_result' | 'mutation_result';

/**
 * Union type for method kinds, either a request or a response.
 */
export type MethodType = MethodRequestType | MethodResponseType;

/**
 * Interface for additional context that methods might require.
 */
export interface MethodContext {}

/**
 * Interface for additional information that methods might use.
 */
export interface MethodInfo {}

/**
 * Type definition for a method.
 * @template Input - The type definition for the input fields.
 * @template Output - The type definition for the output fields.
 */
export type MethodDefinition<
  Input extends FieldInput,
  Output extends FieldInput
> = {
  kind: MethodRequestType; // The kind of method, either 'query' or 'mutation'.
  name: string; // The name of the method.
  output: Output; // The output type definition.
  input: Input; // The input type definition.
  throwOnInvalidResultingListItems?: boolean; // Optional flag to throw on invalid list items.
};

/**
 * Type definition for the payload of a method.
 * @template Input - The type definition for the input fields.
 * @template Context - The type definition for the method context.
 * @template Parent - The type definition for the parent object.
 */
export type MethodPayload<
  Input extends FieldInput,
  Context extends MethodContext = MethodContext,
  Parent extends any = any
> = {
  parent: Parent; // The parent object.
  input: Infer<Input>; // The actual input data.
  context: Context; // The method context.
  info: MethodInfo; // Additional method information.
};

/**
 * Type definition for fetch operations.
 * @template Input - The type definition for the input fields.
 * @template Output - The type definition for the output fields.
 */
export type Fetcher<Input extends FieldInput, Output extends FieldInput> = (
  args: Infer<Input>
) => Promise<Infer<Output>>;

/**
 * Type definition for handling method operations.
 * @template Input - The type definition for the input fields.
 * @template Output - The type definition for the output fields.
 * @template Context - The type definition for the method context.
 * @template Parent - The type definition for the parent object.
 */
export type Handler<
  Input extends FieldInput,
  Output extends FieldInput,
  Context extends MethodContext = MethodContext,
  Parent extends any = any
> = [IsKnown<Output>] extends [1]
  ? [IsKnown<Input>] extends [1]
    ? (
        payload: Compute<MethodPayload<Input, Context, Parent>>
      ) => Promise<Infer<Output>>
    : never
  : never;

// Regular expression for validating method names.
const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/**
 * Function to validate method names.
 * Throws an error if the name is invalid.
 * @param name - The name to validate.
 */
function validateIdentifier(name: string) {
  assertType(
    name,
    'string',
    `Method definition: invalid name type "${typeof name}" found.`
  );
  if (!NAME_RX.test(name)) {
    throw new Error(`Method definition: invalid name "${name}" found.`);
  }
}

/**
 * Class representing a Method.
 * @template RequestDefinition - The type definition for the request fields.
 * @template ResponseDefinition - The type definition for the response fields.
 * @template Context - The type definition for the method context.
 */
export class Method<
  RequestDefinition extends FieldInput,
  ResponseDefinition extends FieldInput,
  Context extends MethodContext = MethodContext
> {
  __isPSMethod: true; // Internal flag to mark this as a PSMethod.
  methodName: string; // The name of the method.
  kind: MethodType; // The kind of method, either 'query' or 'mutation'.
  inputType: GraphType<RequestDefinition>; // GraphType for input validation.
  outputType: GraphType<ResponseDefinition>; // GraphType for output validation.
  private __definition: MethodDefinition<any, any>; // Private storage for method definition.

  /**
   * The handler function for this method.
   */
  handle: Handler<RequestDefinition, ResponseDefinition, Context>;

  /**
   * The fetch function for this method.
   */
  fetch: Fetcher<RequestDefinition, ResponseDefinition>;

  /**
   * Constructs a new Method instance.
   * @param definition - The method definition.
   */
  constructor(
    definition: MethodDefinition<RequestDefinition, ResponseDefinition>
  ) {
    this.__definition = definition;

    const { name, input, output, kind } = definition;

    // Validate the method name.
    validateIdentifier(name);

    // Validate the kind of method.
    assertType(kind, { enum: ['query', 'mutation'] } as const);
    this.kind = kind;

    // Set the method name.
    this.methodName = name;

    // Initialize the output type.
    this.outputType = GraphType.is(output)
      ? (output as any)
      : createType(`${name}Output`, output);

    // Initialize the input type.
    this.inputType = GraphType.is(input)
      ? (input as any)
      : createType(`${name}Input`, input);

    // Initialize the fetch function with a placeholder.
    this.fetch = function call() {
      throw new Error('Method has no fetch handler defined.');
    };

    // Initialize the handle function with a placeholder.
    this.handle = async function receive() {
      throw new Error('Method has no handle handler defined.');
    } as any;
  }

  /**
   * Sets the fetch function for this method.
   * For example, on the client side, it can be a `fetch` call to the backend.
   * @param fetcher - The fetch function.
   */
  setFetcher = (fetcher: Fetcher<RequestDefinition, ResponseDefinition>) => {
    this.fetch = async (
      args: Infer<RequestDefinition>
    ): Promise<Infer<ResponseDefinition>> => {
      args = this.inputType.parse(args);
      const response = await fetcher(args);
      return this.outputType.parse(response);
    };
  };

  /**
   * Sets the handle function for this method.
   * For example, on the server side, it can be a function that queries a database.
   * @param handle - The handle function.
   */
  setHandler = <Parent extends any>(
    handle: (
      payload: Compute<MethodPayload<RequestDefinition, Context, Parent>>
    ) => MaybePromise<Infer<ResponseDefinition>>
  ): Method<RequestDefinition, ResponseDefinition, Context> => {
    const {
      inputType,
      outputType,
      methodName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.handle = async function handleMethod(
      payload: MethodPayload<RequestDefinition, Context, Parent>
    ) {
      let { parent, input, context, info = {} } = payload;

      input = inputType
        ? inputType.parse(input, {
            customMessage: (_, error) => {
              return `Invalid input provided to method "${methodName}":\n ${error.message}`;
            },
          } as any)
        : input;

      const resulting = await handle({
        parent,
        input,
        context,
        info,
      });

      return outputType.parse(resulting, {
        customMessage: (_, error) => {
          return `Invalid output from method "${methodName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    } as Handler<RequestDefinition, ResponseDefinition, Context, Parent>;

    return this as any;
  };
}

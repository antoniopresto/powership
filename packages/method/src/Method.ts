import {
  assertType,
  createType,
  FieldInput,
  GraphType,
  Infer,
  ObjectDefinitionInput,
  ObjectType,
} from '@powership/schema';
import { Compute, MaybePromise } from '@powership/utils';

import {
  AppRequestContext,
  Fetcher,
  Handler,
  MethodDefinition,
  MethodKind,
  MethodLike,
  MethodPayload,
} from './types';

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
  ArgsDefinition extends ObjectDefinitionInput,
  ResponseDefinition extends FieldInput,
  Name extends Readonly<string>,
  Context extends AppRequestContext = AppRequestContext
> implements MethodLike
{
  __isPSMethod: true; // Internal flag to mark this as a PSMethod.
  readonly methodName: Name; // The name of the method.
  kind: MethodKind; // The kind of method, either 'query' or 'mutation'.
  argsType: GraphType<{ object: ArgsDefinition }>; // GraphType for args validation.
  outputType: GraphType<ResponseDefinition>; // GraphType for output validation.
  private __definition: MethodDefinition<any, any, any>; // Private storage for method definition.

  /**
   * The handler function for this method.
   */
  call: Handler<ArgsDefinition, ResponseDefinition, Context>;

  /**
   * The fetch function for this method.
   */
  fetch: Fetcher<ArgsDefinition, ResponseDefinition>;

  /**
   * Constructs a new Method instance.
   * @param definition - The method definition.
   */
  constructor(
    definition: MethodDefinition<ArgsDefinition, ResponseDefinition, Name>
  ) {
    this.__definition = definition;

    const { name, args, output, kind } = definition;

    // Validate the method name.
    validateIdentifier(name);

    // Validate the kind of method.
    assertType(kind, { enum: ['query', 'mutation'] } as const);
    this.kind = kind;

    // Set the method name.
    this.methodName = name as Name;

    // Initialize the output type.
    this.outputType = GraphType.is(output)
      ? (output as any)
      : createType(`${name}Output`, output);

    // Initialize the args type.
    this.argsType = ((): any => {
      if (GraphType.is(args)) {
        if (!args.__lazyGetter.objectType) {
          throw new Error(
            'Invalid definition: args value should respect one of the following types: ' +
              'ObjectType<ObjectTypeDefinition>, GraphType<ObjectType> or ObjectTypeDefinition.\n'
          );
        }
        if (args.optionalId) return args;
        // @ts-ignore
        return args.clone((el) => el.graphType(`${name}Args`));
      }

      if (ObjectType.is(args)) {
        // @ts-ignore
        if (args.id) return createType(args);
        return createType(`${name}Args`, args);
      }

      // @ts-ignore
      return createType(`${name}Args`, { object: args } as any);
    })();

    // Initialize the fetch function with a placeholder.
    this.fetch = function call() {
      throw new Error('Method has no fetch handler defined.');
    };

    // Initialize the handle function with a placeholder.
    this.call = async function receive() {
      throw new Error(
        'Method has no handler defined. Register one using `method.defineHandler(handler)`.'
      );
    } as any;
  }

  /**
   * Sets the fetch function for this method.
   * For example, on the client side, it can be a `fetch` call to the backend.
   * @param fetcher - The fetch function.
   */
  setFetcher = (fetcher: Fetcher<ArgsDefinition, ResponseDefinition>) => {
    this.fetch = async (
      args: Infer<{ object: ArgsDefinition }>
    ): Promise<Infer<ResponseDefinition>> => {
      args = this.argsType.parse(args);
      const response = await fetcher(args);
      return this.outputType.parse(response);
    };
  };

  /**
   * Sets the handle function for this method.
   * For example, on the server side, it can be a function that queries a database.
   * @param handle - The handle function.
   */
  defineHandler = <Parent extends any>(
    handle: (
      args: Compute<Infer<{ object: ArgsDefinition }>>,
      payload: Compute<MethodPayload<ArgsDefinition, Context, Parent>>
    ) => MaybePromise<Infer<ResponseDefinition>>
  ): Method<ArgsDefinition, ResponseDefinition, Name, Context> => {
    const {
      argsType,
      outputType,
      methodName,
      __definition: { throwOnInvalidResultingListItems },
    } = this;

    this.call = async function handleMethod(
      args: any,
      payload: MethodPayload<ArgsDefinition, Context, Parent>
    ) {
      let { parent, context, requestInfo } = payload;

      args = argsType.parse(args, {
        customMessage: (_, error) => {
          return `Invalid args provided to method "${methodName}":\n ${error.message}`;
        },
      });

      const resulting = await handle(args, {
        parent,
        args,
        context,
        requestInfo,
      });

      return outputType.parse(resulting, {
        customMessage: (_, error) => {
          return `Invalid output from method "${methodName}": ${error.message}`;
        },
        excludeInvalidListItems: !throwOnInvalidResultingListItems,
      });
    } as Handler<ArgsDefinition, ResponseDefinition, Context, Parent>;

    return this as any;
  };
}

import {
  ExtendObjectDefinition,
  Infer,
  ObjectDefinitionInput,
  ObjectFieldInput,
} from '@swind/schema';
import { IsKnown, MaybePromise } from '@swind/utils';

import { DSRequest } from './DSRequest';

export interface ResolverCreatorParam<Type, SchemaDefinition = unknown> {
  shape: IsKnown<SchemaDefinition> extends 1
    ? SchemaDefinition extends ObjectDefinitionInput
      ? ExtendObjectDefinition<
          { type: 'object'; def: SchemaDefinition },
          { type: 'object'; def: SchemaDefinition }
        >
      : any
    : any;

  resolver<
    ArgsShape extends ObjectDefinitionInput,
    ResultShape extends ObjectFieldInput
  >(
    args: ArgsShape,
    result: ResultShape
  ): {
    resolve(
      resolver: <Request extends DSRequest>(
        root: Type,
        args: Infer<{ object: ArgsShape }>,
        request: Request
      ) => MaybePromise<Infer<ResultShape> | null>
    ): DSResolver<Infer<ResultShape>, Infer<{ object: ArgsShape }>, Type>;
  };
}

export interface DSResolver<Result, Args, Root> {
  <Request extends DSRequest>(
    root: Root,
    args: Args,
    request: Request
  ): MaybePromise<Result>;
}

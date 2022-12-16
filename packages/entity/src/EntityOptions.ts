import {
  GraphType,
  LazyParseGraphTypePayload,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ResolverResolve,
} from '@backland/schema';
import {
  DocumentBase,
  DocumentIndexesConfig,
  Transporter,
} from '@backland/transporter';
import { LoggerOptions } from '@backland/utils';

export type EntityOptions<
  InputDocumentDefinition extends ObjectDefinitionInput = ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig<
    keyof InputDocumentDefinition
  > = DocumentIndexesConfig<keyof InputDocumentDefinition>
> = {
  indexes: Indexes;
  name: string;
  transporter?: Transporter;
  type: GraphType<{ object: InputDocumentDefinition }>;
  logs?: LoggerOptions;
  allowExtraFields?: boolean;
};

export type EntityFieldResolver<
  Context,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined,
  Root
> = {
  args?: ArgsDef;
  name: string;
  resolve: ResolverResolve<Context, Root, TypeDef, ArgsDef>;
  type: TypeDef;
};

export type _EntityGraphType = {
  __lazyGetter: LazyParseGraphTypePayload;
  definition: { def: unknown };
  parse(...args: any[]): DocumentBase;
};

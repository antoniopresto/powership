import {
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ResolverResolve,
} from '@backland/schema';
import { DocumentIndexesConfig, Transporter } from '@backland/transporter';
import { LoggerOptions } from '@backland/utils';

export type EntityOptions<
  InputDocumentDefinition extends ObjectDefinitionInput = ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig = DocumentIndexesConfig
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

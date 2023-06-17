import {
  GraphType,
  ObjectFieldInput,
  ResolverResolve,
  SchemaDefinition,
} from '@swind/schema';
import { DocumentIndexesConfig, Transporter } from '@swind/transporter';
import { LoggerOptions } from '@swind/utils';

export type EntityOptions<
  InputDocumentDefinition extends SchemaDefinition = SchemaDefinition,
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
  ArgsDef extends SchemaDefinition | undefined,
  Root
> = {
  args?: ArgsDef;
  name: string;
  resolve: ResolverResolve<Context, Root, TypeDef, ArgsDef>;
  type: TypeDef;
};

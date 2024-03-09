import {
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ResolverResolve,
} from '@powership/schema';
import { DocumentIndexesConfig, Transporter } from '@powership/transporter';
import { LoggerOptions } from '@powership/utils';

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
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined,
  Root
> = {
  args?: ArgsDef;
  name: string;
  resolve: ResolverResolve<Root, TypeDef, ArgsDef>;
  type: TypeDef;
};

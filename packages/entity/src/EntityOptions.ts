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
import { IsKnown } from '@backland/utils';

export type EntityOptions<
  InputDocumentDefinition extends ObjectDefinitionInput = ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig<
    keyof InputDocumentDefinition
  > = DocumentIndexesConfig<keyof InputDocumentDefinition>
> = IsKnown<InputDocumentDefinition> extends 1
  ? IsKnown<Indexes> extends 1
    ? {
        indexes: Indexes;
        name: string;
        transporter?: Transporter;
        type: GraphType<{ object: InputDocumentDefinition }>;
      }
    : {
        indexes: any;
        name: string;
        transporter?: Transporter;
        type: _EntityGraphType;
      }
  : {
      indexes: any;
      name: string;
      transporter?: Transporter;
      type: _EntityGraphType;
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

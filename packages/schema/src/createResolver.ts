import { SchemaDefinitionInput, SchemaFieldInput } from './fields/_parseFields';
import { Infer } from './Infer';
import { createType, isSchema, parseSchemaField, Schema } from './Schema';
import { ComposeOutputType, schemaComposer } from 'graphql-compose';
import type { Resolver as GCResolver } from 'graphql-compose';
import { GraphQLFieldConfig, GraphQLResolveInfo } from 'graphql';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { fieldToGraphql, schemaToGQL } from './schemaToGQL';
import { ValidationCustomMessage } from './applyValidator';
import { schemaMetaFieldKey } from './fields/MetaFieldField';

export class Resolver<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  private readonly __gcResolver: GCResolver;

  constructor(
    readonly options: CreateResolverOptions<TypeDef, ArgsDef, Context, Source>
  ) {
    const { args, type, name, description, resolve, ...rest } = options;

    let parsedArgsType: Schema<any> | undefined;
    let parseArgs:
      | ((
          input: any,
          options?: { customMessage?: ValidationCustomMessage }
        ) => any)
      | undefined;

    if (isPossibleArgsDef(args)) {
      const argsSchema = createType(name, args);
      parsedArgsType = argsSchema.graphqlInputType().getFields();
      parseArgs = argsSchema.parse.bind(argsSchema);
    } else {
      parsedArgsType = undefined;
    }

    let outputType: ComposeOutputType<any>;
    let parseOutPut: (input: any) => any;

    if (isSchema(type)) {
      parseOutPut = (input) =>
        type.parse.call(type, input, {
          customMessage: (_, error) => {
            return `Invalid payload:\n ${error.message}`;
          },
        });

      outputType = type.entity();
    } else {
      const field = parseSchemaField('', type, true);

      parseOutPut = (input) =>
        field.parse.call(field, input, (_, error) => {
          return `Invalid payload:\n ${error.message}`;
        });

      if (field.type === 'schema') {
        const payloadName = field.def[schemaMetaFieldKey]?.id || name;

        const otc = schemaToGQL(payloadName, field.def);

        outputType = otc;
      } else {
        const asFinal = field.toSchemaFieldType();

        const otc = fieldToGraphql({
          field: asFinal,
          fieldName: 'Payload',
          parentName: name,
        });

        outputType = otc.type;
      }
    }

    async function finalResolve(rp: ResolveParams<any, any, any>) {
      rp.args =
        parseArgs?.(rp.args, {
          customMessage: (_, error) => {
            return `Invalid input:\n ${error.message}`;
          },
        }) || rp.args;

      const result = await resolve(rp);

      return parseOutPut(result);
    }

    this.__gcResolver = schemaComposer.createResolver({
      ...rest,
      resolve: finalResolve,
      description,
      args: parsedArgsType,
      type: outputType,
      name,
    } as any);

    Resolver.register.set(name, this);
  }

  get displayName(): string {
    return this.__gcResolver.displayName!;
  }

  set displayName(name: string) {
    this.__gcResolver.displayName = name;
  }

  getArgNames = (): string[] => {
    return this.__gcResolver.getArgNames();
  };

  resolve: this['options']['resolve'] = async (resolveParams) => {
    return this.__gcResolver.resolve(resolveParams);
  };

  getFieldConfig = <
    Extend extends GraphQLFieldConfig<Source, Context, Infer<ArgsDef>>
  >(
    extend?: Extend
  ): GraphQLFieldConfig<any, any> => {
    const fieldConfig = this.__gcResolver.getFieldConfig();

    return {
      ...fieldConfig,
      ...extend,
    };
  };

  static resetRegister = () => {
    Resolver.register.clear();
  };

  static register = new StrictMap();

  // TODO:
  // wrapResolver
  // addFilterArg
  // setArgType
  // resolver.getArgITC('filter').removeField(newFieldName);
  // hasArg
  // getArgTC
  // cloneArg
}

function isPossibleArgsDef(args: any): args is Readonly<SchemaDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}

export function createResolver<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput = { [K: string]: 'unknown?' },
  Context = unknown,
  Source = unknown
>(
  options: CreateResolverOptions<TypeDef, ArgsDef, Context, Source>
): Resolver<TypeDef, ArgsDef, Context, Source> {
  return new Resolver(options);
}

createResolver.Resolver = Resolver;

type DirectiveArgs = {
  [key: string]: any;
};

type Directive = {
  name: string;
  args?: DirectiveArgs;
};

type Extensions = {
  [key: string]: any;
  directives?: Directive[];
};

type ProjectionType = { [K: string]: any };

export interface CreateResolverOptions<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  type: TypeDef;
  name: string;

  resolve: (
    paramsObject: ResolveParams<
      ArgsDef extends { [K: string]: SchemaFieldInput }
        ? Infer<ArgsDef>
        : undefined,
      Context,
      Source
    >
  ) => Promise<Infer<TypeDef>>;

  args?: ArgsDef;
  kind: 'query' | 'mutation' | 'subscription';
  description?: string;
  deprecationReason?: string | null;
  projection?: ProjectionType;
  // parent?: Resolver<any, any, any, any>;
  extensions?: Extensions;
  directives?: Directive[];
}

// export type InferResolver<T> = T extends CreateResolverOptions<
//   infer Type,
//   infer Args,
//   infer Context,
//   infer Source
// >
//   ? {
//       Type: Infer<Type>;
//       Args: [Args] extends [{ [K: string]: any }] ? Infer<Args> : undefined;
//       Context: Context;
//       Source: Source;
//     }
//   : never;

export type ResolveParams<Args, Context, Source> = {
  source: Source;
  args: Args;
  context: Context;
  info: GraphQLResolveInfo;
  projection: ProjectionType;
  [opt: string]: any;
};

import { StrictMap } from '@darch/utils/lib/StrictMap';
import { GraphQLFieldConfig, GraphQLResolveInfo } from 'graphql';

import { Infer } from './Infer';
import { createType, Schema } from './Schema';
import { SchemaDefinitionInput, SchemaFieldInput } from './fields/_parseFields';

export class Resolver<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  fieldConfig: GraphQLFieldConfig<Source, Context>;
  resolve: ResolveFunction<TypeDef, ArgsDef, Context, Source>;

  constructor(
    readonly options: CreateResolverOptions<TypeDef, ArgsDef, Context, Source>
  ) {
    const { args, type, name, description, resolve, ...rest } = options;

    const argsSchema = isPossibleArgsDef(args)
      ? createType(`${name}Input`, args)
      : undefined;

    const payloadType = createType(`${name}Payload`, {
      payload: type as 'any',
    });

    // if (list !== undefined) {
    //   payloadType.definition.payload.list = list;
    // }
    //
    // if (optional !== undefined) {
    //   payloadType.definition.payload.optional = optional;
    // }

    this.resolve = async function typeCheckResolveWrapper(
      source,
      args: any,
      context,
      info
    ) {
      args = argsSchema
        ? argsSchema.parse(args, {
            customMessage: (_, error) => {
              return `Invalid input provided to resolver "${name}":\n ${error.message}`;
            },
          })
        : args;

      const result = await resolve(source, args, context, info);

      const { payload } = payloadType.parse(
        { payload: result },
        {
          customMessage: (_, error) =>
            `Invalid output from resolver "${name}": ${error.message}`,
        }
      );

      return payload;
    };

    const ArgsType = argsSchema ? argsSchema.graphqlInputType() : undefined;

    this.fieldConfig = {
      ...rest,
      resolve: this.resolve,
      description,
      args: ArgsType?.getFields(),
      type: payloadType.graphqlType().getFields().payload.type,
    };

    Resolver.register.set(name, this);
  }

  static reset = () => {
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
  resolve: ResolveFunction<TypeDef, ArgsDef, Context, Source>;
  args?: ArgsDef;
  description?: string;
  deprecationReason?: string | null;
  projection?: ProjectionType;
  // parent?: Resolver<any, any, any, any>;
  extensions?: Extensions;
  directives?: Directive[];
}

export interface ResolveFunction<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput,
  Context = unknown,
  Source = unknown,
  List = false,
  Optional = false
> {
  (
    source: Source,
    args: ArgsDef extends { [K: string]: SchemaFieldInput }
      ? Infer<ArgsDef>
      : undefined,
    context: Context,
    info: GraphQLResolveInfo
  ): Promise<AsOptional<AsList<Infer<TypeDef>, List>, Optional>>;
}

type AsList<T, Is> = [Is] extends [true] ? T[] : T;
type AsOptional<T, Is> = [Is] extends [true] ? T | undefined | null : T;

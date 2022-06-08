import { StrictMap } from '@darch/utils/lib/StrictMap';
import { GraphQLFieldConfig, GraphQLResolveInfo } from 'graphql';

import { Infer } from './Infer';
import { createDarchObject, ObjectType } from './ObjectType';
import { ObjectDefinitionInput, ObjectFieldInput } from './fields/_parseFields';

export class Resolver<
  TypeDef extends ObjectFieldInput | ObjectType<ObjectDefinitionInput>,
  ArgsDef extends ObjectDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  fieldConfig: GraphQLFieldConfig<Source, Context>;
  resolve: ResolveFunction<TypeDef, ArgsDef, Context, Source>;

  constructor(
    readonly options: CreateResolverOptions<TypeDef, ArgsDef, Context, Source>
  ) {
    const { args, type, name, description, resolve, ...rest } = options;

    const argsObject = isPossibleArgsDef(args)
      ? createDarchObject(`${name}Input`, args)
      : undefined;

    const payloadType = createDarchObject(`${name}Payload`, {
      payload: type as 'any',
    });

    this.resolve = async function typeCheckResolveWrapper(
      source,
      args: any,
      context,
      info
    ) {
      args = argsObject
        ? argsObject.parse(args, {
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

    const ArgsType = argsObject ? argsObject.graphqlInputType() : undefined;

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

function isPossibleArgsDef(args: any): args is Readonly<ObjectDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}

export function createResolver<
  TypeDef extends ObjectFieldInput | ObjectType<ObjectDefinitionInput>,
  ArgsDef extends ObjectDefinitionInput = { [K: string]: 'unknown?' },
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
  TypeDef extends ObjectFieldInput | ObjectType<ObjectDefinitionInput>,
  ArgsDef extends ObjectDefinitionInput,
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
  TypeDef extends ObjectFieldInput | ObjectType<ObjectDefinitionInput>,
  ArgsDef extends ObjectDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  (
    source: Source,
    args: ArgsDef extends { [K: string]: ObjectFieldInput }
      ? Infer<ArgsDef>
      : {},
    context: Context,
    info: GraphQLResolveInfo
  ): Promise<Infer<TypeDef>>;
}

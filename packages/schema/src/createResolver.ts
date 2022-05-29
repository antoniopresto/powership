import { StrictMap } from '@darch/utils/lib/StrictMap';
import {
  GraphQLFieldConfig,
  GraphQLInputFieldMap,
  GraphQLResolveInfo,
} from 'graphql';

import { Infer } from './Infer';
import { createType, parseSchemaField, Schema } from './Schema';
import { ValidationCustomMessage } from './applyValidator';
import { SchemaDefinitionInput, SchemaFieldInput } from './fields/_parseFields';
import { fieldToGraphql } from './schemaToGQL';

export class Resolver<
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput,
  Context = unknown,
  Source = unknown
> {
  private readonly __gcResolver: any;

  constructor(
    readonly options: CreateResolverOptions<TypeDef, ArgsDef, Context, Source>
  ) {
    const { args, type, name, description, resolve, ...rest } = options;

    let parsedArgsType: GraphQLInputFieldMap | undefined;
    let parseArgs:
      | ((
          input: any,
          options?: { customMessage?: ValidationCustomMessage }
        ) => any)
      | undefined;

    if (isPossibleArgsDef(args)) {
      const fields: GraphQLInputFieldMap = {};

      Object.keys(args).forEach((key) => {
        const typeDef = parseSchemaField(key, args[key]);

        const fieldTC = fieldToGraphql({
          field: typeDef,
          parentName: `${name}Input`,
          fieldName: key,
        });

        return (fields[key] = fieldTC.type.getType() as any);
      });

      const argsSchema = createType(`${name}Input`, args);
      parseArgs = argsSchema.parse.bind(argsSchema);
    } else {
      parsedArgsType = undefined;
    }

    const payloadType = createType(`${name}Payload`, {
      payload: type,
    });

    const parseOutput = (payload: any) => {
      return payloadType.parse({ payload })['payload'];
    };

    async function finalResolve(rp: ResolveParams<any, any, any>) {
      rp.args =
        parseArgs?.(rp.args, {
          customMessage: (_, error) => {
            return `Invalid input:\n ${error.message}`;
          },
        }) || rp.args;

      const result = await resolve(rp);

      return parseOutput(result);
    }

    // this.__gcResolver = schemaComposer.createResolver({
    //   ...rest,
    //   resolve: finalResolve,
    //   description,
    //   args: parsedArgsType,
    //   type: payloadType.entity(),
    //   name,
    // } as any);

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

  static argsToGQL = (options: {
    name: string;
    args: SchemaDefinitionInput;
  }) => {
    const { args, name } = options;

    let result: GraphQLInputFieldMap | undefined;

    let parseArgs:
      | ((
          input: any,
          options?: { customMessage?: ValidationCustomMessage }
        ) => any)
      | undefined;

    if (isPossibleArgsDef(args)) {
      const fields: GraphQLInputFieldMap = {};

      Object.keys(args).forEach((key) => {
        const typeDef = parseSchemaField(key, args[key]);

        const fieldTC = fieldToGraphql({
          field: typeDef,
          parentName: `${name}Input`,
          fieldName: key,
        });

        return (fields[key] = fieldTC.type.getType() as any);
      });

      const argsSchema = createType(`${name}Input`, args);
      parseArgs = argsSchema.parse.bind(argsSchema);
      result = fields;
    } else {
      result = undefined;
    }

    return {
      parseArgs,
      result,
    };
  };
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

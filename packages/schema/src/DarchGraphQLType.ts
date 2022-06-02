import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import type {
  GraphQLFieldConfig,
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
  GraphQLResolveInfo,
} from 'graphql';

import { TAnyFieldType } from './FieldType';
import {
  ConvertFieldResult,
  GraphQLParser,
  GraphQLParserResult,
} from './GraphQLParser/GraphQLParser';
import { Infer } from './Infer';
import { createSchema, Schema } from './Schema';
import { getSchemaDefinitionId } from './fields/MetaFieldField';
import { SubSchemaField } from './fields/SubSchema';
import {
  SchemaDefinitionInput,
  SchemaFieldInput,
  ToFinalField,
} from './fields/_parseFields';
import { parseSchemaField } from './parseSchemaDefinition';
import type { SchemaToTypescriptOptions } from './schemaToTypescript';
import { withCache, WithCache } from './withCache';

export class DarchGraphQLType<Definition extends SchemaFieldInput> {
  readonly definition: ToFinalField<Definition>;

  __field: TAnyFieldType;

  __withCache: WithCache<{
    graphqlInputType: GraphQLNamedInputType;
    graphQLInterface: GraphQLInterfaceType;
    graphQLType: GraphQLNamedType;
    graphQLParsed: ConvertFieldResult;
  }>;

  readonly id: string;
  readonly _schema?: Schema<any>;

  constructor(definition: Definition);
  constructor(name: string, definition: Definition);

  constructor(...args: any[]) {
    let name: string | undefined = undefined;
    let definition: Definition;

    if (args.length === 2) {
      name = args[0];
      definition = args[1];
    } else {
      definition = args[0];
    }

    this.__field = parseSchemaField('temp', definition, true);

    this.__withCache = withCache(this);

    if (SubSchemaField.is(this.__field)) {
      if (name && this.__field.schema.id && this.__field.schema.id !== name) {
        this.__field.schema = this.__field.schema.clone(name);
      } else if (name) {
        this.__field.schema.identify(name);
      } else {
        name = getSchemaDefinitionId(this.__field.schema.definition);
      }

      this._schema = this.__field.schema;
    }

    if (!name) {
      throw new RuntimeError(`Expected name to be provided, found ${name}`, {
        parameters: args,
      });
    }

    this.id = name;

    this.definition =
      this.__field.toSchemaFieldType() as ToFinalField<Definition>;
  }

  parse = (
    ...args: Parameters<TAnyFieldType['parse']>
  ): Infer<ToFinalField<Definition>> => {
    return this.__field.parse(...args);
  };

  _toGraphQL = () => {
    return this.__withCache('graphQLParsed', () => {
      return GraphQLParser.fieldToGraphQL({
        field: this.__field,
        path: [`DarchGraphQLType_${this.id}`],
        plainField: this.__field.toSchemaFieldType(),
        fieldName: this.id,
        parentName: this.id,
      });
    });
  };

  graphQLType = (
    ...args: Parameters<ConvertFieldResult['type']>
  ): GraphQLNamedType => {
    return this.__withCache('graphQLType', () => {
      return this._toGraphQL().type(...args) as any;
    });
  };

  graphQLInputType = (
    ...args: Parameters<ConvertFieldResult['inputType']>
  ): GraphQLNamedInputType => {
    return this.__withCache('graphqlInputType', () => {
      return this._toGraphQL().inputType(...args) as any;
    });
  };

  graphQLInterface = (
    ...args: Parameters<GraphQLParserResult['interfaceType']>
  ): GraphQLInterfaceType => {
    return this.__withCache('graphQLInterface', () => {
      if (!this._schema) {
        throw new RuntimeError(
          'graphQLInterface is only available for schema type',
          {
            type: this.__field.type,
          }
        );
      }

      return GraphQLParser.schemaToGraphQL({
        schema: this._schema,
      }).interfaceType(...args);
    });
  };

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    const { GraphQLSchema, printSchema } = Schema.serverUtils().graphql;

    const schema = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });

    return printSchema(schema).split('\n');
  };

  typescriptPrint = (
    options?: SchemaToTypescriptOptions & { name?: string }
  ) => {
    const schema =
      this._schema ||
      createSchema({
        [this.id]: this.definition,
      });

    return Schema.serverUtils().schemaToTypescript.schemaToTypescript(
      options?.name || this.id,
      schema,
      options
    );
  };

  resolver = <
    Context = unknown,
    Source = unknown,
    ArgsDef extends SchemaDefinitionInput = SchemaDefinitionInput
  >(
    options: DarchGraphQLFieldConfigInput<Context, Source, Definition, ArgsDef>
  ): DarchGraphQLFieldConfigOutput<Context, Source, Definition, ArgsDef> => {
    const { args, name = this.id, resolve, ...rest } = options;

    const parsePayload = this.parse.bind(this);

    const argsSchema = isPossibleArgsDef(args)
      ? new DarchGraphQLType(`${name}Input`, { schema: args })
      : undefined;

    async function typeCheckResolveWrapper(
      source,
      args: any,
      context: any,
      info: any
    ): Promise<any> {
      args = argsSchema
        ? argsSchema.parse(args, (_, error) => {
            return `Invalid input provided to resolver "${name}":\n ${error.message}`;
          })
        : args;

      const result = await resolve(source, args, context, info);

      return parsePayload(
        result,
        (_, error) => `Invalid output from resolver "${name}": ${error.message}`
      );
    }

    const ArgsType: any = argsSchema
      ? argsSchema.graphQLInputType()
      : undefined;

    const type: any = this.graphQLType();

    return {
      ...rest,
      resolve: typeCheckResolveWrapper,
      args: ArgsType?.ofType?.getFields(),
      type,
    };
  };
}

export function createType<Definition extends SchemaFieldInput>(
  definition: Definition
): DarchGraphQLType<Definition>;

export function createType<Definition extends SchemaFieldInput>(
  name: string,
  definition: Definition
): DarchGraphQLType<Definition>;

export function createType(...args: any[]) {
  return new DarchGraphQLType(
    // @ts-ignore
    ...args
  );
}

export interface DarchGraphQLFieldConfigInput<
  Context = unknown,
  Source = unknown,
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput> =
    | SchemaFieldInput
    | Schema<SchemaDefinitionInput>,
  //
  ArgsDef extends SchemaDefinitionInput = SchemaDefinitionInput
  //
> extends Omit<
    GraphQLFieldConfig<Source, Context>,
    'resolve' | 'type' | 'args'
  > {
  name: string;
  args?: ArgsDef;
  resolve: ResolveFunction<Context, Source, TypeDef, ArgsDef>;
}

export interface DarchGraphQLFieldConfigOutput<
  Context = unknown,
  Source = unknown,
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput> =
    | SchemaFieldInput
    | Schema<SchemaDefinitionInput>,
  //
  ArgsDef extends SchemaDefinitionInput = SchemaDefinitionInput
  //
> extends Omit<GraphQLFieldConfig<Source, Context>, 'resolve'> {
  resolve: ResolveFunction<Context, Source, TypeDef, ArgsDef>;
}

export interface ResolveFunction<
  Context = unknown,
  Source = unknown,
  TypeDef extends SchemaFieldInput | Schema<SchemaDefinitionInput> =
    | SchemaFieldInput
    | Schema<SchemaDefinitionInput>,
  ArgsDef extends SchemaDefinitionInput = SchemaDefinitionInput
> {
  (
    source: Source,
    args: ArgsDef extends { [K: string]: SchemaFieldInput }
      ? Infer<ArgsDef>
      : {},
    context: Context,
    info: GraphQLResolveInfo
  ): Promise<Infer<TypeDef>>;
}

function isPossibleArgsDef(args: any): args is Readonly<SchemaDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}

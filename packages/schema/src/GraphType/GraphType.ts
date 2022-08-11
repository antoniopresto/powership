import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { assertSame } from '@darch/utils/lib/assertSame';
import { isProduction } from '@darch/utils/lib/env';
import { isBrowser } from '@darch/utils/lib/isBrowser';
import type {
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
} from 'graphql';

import { Darch } from '../Darch';
import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';
import { FieldDefinitionConfig } from '../TObjectConfig';
import { TAnyFieldType, ValidationCustomMessage } from '../fields/FieldType';
import { GraphTypeLike } from '../fields/IObjectLike';
import { getObjectDefinitionId } from '../fields/MetaFieldField';
import { ObjectField } from '../fields/ObjectField';
import {
  ObjectDefinitionInput,
  ObjectFieldInput,
  ToFinalField,
} from '../fields/_parseFields';
import type { ObjectToTypescriptOptions } from '../objectToTypescript';
import { parseObjectField } from '../parseObjectDefinition';

import type { ConvertFieldResult, GraphQLParserResult } from './GraphQLParser';
import type { AnyResolver, Resolver, ResolverConfig } from './createResolver';

export class GraphType<Definition extends ObjectFieldInput>
  implements GraphTypeLike
{
  static __isGraphType = true;
  readonly __isGraphType = true;

  static register = new StrictMap<string, GraphTypeLike>();
  static resolvers = new StrictMap<string, AnyResolver>();

  static reset = async () => {
    this.resolvers.clear();
    this.register.clear();
  };

  readonly definition: ToFinalField<Definition>;
  readonly definitionInput: FieldDefinitionConfig;

  __field: TAnyFieldType;

  readonly id: string;
  readonly _object: ObjectType<any> | undefined;

  clone<Ext extends ObjectDefinitionInput>(
    name: string,
    extend?: Ext
  ): ToFinalField<Definition>['type'] extends 'object'
    ? GraphType<{ object: ToFinalField<Definition>['def'] & Ext }>
    : GraphType<Definition> {
    if (this._object) {
      return createType(this._object.clone((extend as any) || {}, name)) as any;
    }
    return createType(name, this.definition) as any;
  }

  constructor(
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(
    name: string,
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(...args: any[]) {
    let name: string | undefined = undefined;
    let definition: ObjectFieldInput;

    if (args.length === 2) {
      name = args[0];
      definition = args[1];
    } else {
      definition = args[0];
    }

    this.definitionInput = definition;
    this.__field = parseObjectField('temp', definition, true);

    if (ObjectField.is(this.__field)) {
      if (
        name &&
        this.__field.utils.object.id &&
        this.__field.utils.object.id !== name
      ) {
        this.__field.utils.object = this.__field.utils.object.clone(name);
      } else if (name) {
        this.__field.utils.object.identify(name);
      } else {
        name = getObjectDefinitionId(
          this.__field.utils.object.definition,
          true // make nullable, the error below about undefined name is more clear
        );
      }

      this._object = this.__field.utils.object;
    }

    if (!name) {
      throw new RuntimeError(`Expected name to be provided, found ${name}`, {
        name,
        definition,
      });
    }

    this.id = name;

    this.definition = this.__field.asFinalFieldDef as any;

    if (GraphType.register.has(name)) {
      const existing = GraphType.register.get(name);

      if (!isProduction()) {
        assertSame(
          `Different type already registered with name "${name}"`,
          this.definition,
          existing.definition
        );
      }
    } else {
      if (!isBrowser()) {
        Darch.typesGen?.DarchWatchTypesPubSub.emit('created', {
          graphType: this,
        });
      }
      GraphType.register.set(name, this as any);
    }
  }

  parse = (
    input: any,
    options?:
      | ValidationCustomMessage
      | { customMessage: ValidationCustomMessage }
  ): Infer<ToFinalField<Definition>> => {
    const customMessage =
      options && typeof options === 'object' ? options.customMessage : options;

    return this.__field.parse(input, customMessage);
  };

  _toGraphQL = (): ConvertFieldResult => {
    // @ts-ignore
    return Darch.GraphQLParser.fieldToGraphQL({
      field: this.__field,
      path: [`Type_${this.id}`],
      plainField: this.__field.asFinalFieldDef,
      fieldName: this.id,
      parentName: this.id,
    }) as any;
  };

  graphQLType = (
    ...args: Parameters<ConvertFieldResult['type']>
  ): GraphQLNamedType => {
    return this._toGraphQL().type(...args) as any;
  };

  graphQLInputType = (
    ...args: Parameters<ConvertFieldResult['inputType']>
  ): GraphQLNamedInputType => {
    return this._toGraphQL().inputType(...args) as any;
  };

  graphQLInterface = (
    ...args: Parameters<GraphQLParserResult['interfaceType']>
  ): GraphQLInterfaceType => {
    if (!this._object) {
      throw new RuntimeError(
        'graphQLInterface is only available for object type',
        {
          type: this.__field.type,
        }
      );
    }
    // @ts-ignore
    return Darch.GraphQLParser.objectToGraphQL({
      object: this._object,
    }).interfaceType(...args) as any;
  };

  addRelation = <
    FieldTypeDef extends ObjectFieldInput,
    Name extends string,
    Context = unknown,
    ArgsDef extends ObjectDefinitionInput = ObjectDefinitionInput
  >(
    options: { type: FieldTypeDef; name: Name } & ResolverConfig<
      Context,
      unknown,
      FieldTypeDef,
      ArgsDef
    > extends infer Options
      ? {
          [K in keyof Options]: Options[K];
        }
      : never
  ): this => {
    const object = this._object;

    const type = createType(options.name, options.type);

    const { name } = options;

    if (!object) {
      throw new RuntimeError(`Can't add relation to a not object type`, {
        object,
        type,
        options,
      });
    }

    const allOptions = {
      type,
      ...(options as any),
    };

    // @ts-ignore circular
    const resolver = Darch.createResolver(allOptions) as any;

    // registering relations to be added when creating graphql schema
    resolver.__isRelation = true;
    resolver.__relatedToGraphTypeId = this.id;
    object.addGraphQLMiddleware((hooks) => {
      hooks.onFieldConfigMap.register(function onFieldConfigMap(fields) {
        fields[name] = resolver;
      });
    });

    return this as any;
  };

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    // @ts-ignore circular
    const { GraphQLSchema, printSchema } = Darch.graphql as any;

    const object = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });

    return printSchema(object).split('\n');
  };

  typescriptPrint = (
    options?: ObjectToTypescriptOptions & { name?: string }
  ): Promise<string> => {
    const object =
      this._object ||
      createObjectType({
        [this.id]: this.definition,
      });

    // @ts-ignore circular
    return Darch.objectToTypescript(
      options?.name || this.id,
      object,
      options
    ) as any;
  };

  createResolver = <
    ArgsDef extends ObjectDefinitionInput | Readonly<ObjectDefinitionInput>
  >(
    options: Readonly<
      Omit<ResolverConfig<any, any, Definition, ArgsDef>, 'type'>
    >
  ): Resolver<any, any, Definition, ArgsDef> => {
    // @ts-ignore circular
    return Darch.createResolver({
      type: this,
      ...options,
    } as any) as any;
  };

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends FieldDefinitionConfig>(
    id: string,
    def: T
  ): GraphType<T> => {
    const existing =
      GraphType.register.has(id) && (GraphType.register.get(id) as any);

    if (existing) return existing;

    return new GraphType<any>(id, def) as any;
  };

  static is(input: any): input is GraphType<any> {
    return input?.__isGraphType === true;
  }

  static isTypeDefinition(input: any): input is {
    type: GraphTypeLike;
    list?: boolean;
    optional?: boolean;
    description?: string;
    defaultValue?: unknown;
  } {
    return input?.type?.__isGraphType === true;
  }
}

export function createType<Definition extends ObjectFieldInput>(
  definition: Definition
): GraphType<Definition>;

export function createType<Definition extends ObjectFieldInput>(
  name: string,
  definition: Definition
): GraphType<Definition>;

export function createType(...args: any[]) {
  return new GraphType(
    // @ts-ignore
    ...args
  );
}

export function getType(name: string): GraphTypeLike {
  return GraphType.register.get(name);
}

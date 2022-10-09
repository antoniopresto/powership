import { RuntimeError } from '@backland/utils/lib/RuntimeError';
import { StrictMap } from '@backland/utils/lib/StrictMap';
import { assertSame } from '@backland/utils/lib/assertSame';
import { isProduction } from '@backland/utils/lib/env';
import { isBrowser } from '@backland/utils/lib/isBrowser';
import type {
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
} from 'graphql';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';
import type { AnyResolver } from '../Resolver';
import { FieldDefinitionConfig } from '../TObjectConfig';
import { extendDefinition, ExtendDefinitionResult } from '../extendDefinition';
import { FieldParserConfig, TAnyFieldType } from '../fields/FieldType';
import { GraphTypeLike } from '../fields/IObjectLike';
import { getObjectDefinitionId } from '../fields/MetaFieldField';
import { ObjectField } from '../fields/ObjectField';
import { ObjectFieldInput, ToFinalField } from '../fields/_parseFields';
import type { ObjectToTypescriptOptions } from '../objectToTypescript';
import { parseObjectField } from '../parseObjectDefinition';

import type { ConvertFieldResult, GraphQLParserResult } from './GraphQLParser';

export class GraphType<Definition extends ObjectFieldInput> {
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
  __id: string | undefined;

  get id(): string {
    if (this.optionalId) return this.optionalId;

    throw new RuntimeError(
      [
        'The method you are trying to execute needs the used graphType identified.' +
          ' Use ``myGraphType.identify("name")`` and try again.',
        'You can also read that information from ``myGraphType.optionalId.`',
        '',
        '',
      ].join('\n'),
      this.definitionInput
    );
  }

  get optionalId(): string | undefined {
    return this.__id;
  }

  readonly _object: ObjectType<any> | undefined;

  constructor(
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(
    name: string,
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(...args: any[]) {
    // @ts-ignore
    GraphType.__construct(this, ...args);
    if (this.__id) this.identify(this.__id);
  }

  static __construct = (
    self: GraphType<any>,
    ...args: [string, any] | [any]
  ) => {
    let name: string | undefined = undefined;
    let definition: ObjectFieldInput;

    if (args.length === 2) {
      name = args[0];
      definition = args[1] as ObjectFieldInput;
    } else {
      definition = args[0] as ObjectFieldInput;
    }

    Object.assign(self, {
      definitionInput: definition,
    });

    self.__field = parseObjectField('temp', definition, true);

    if (
      ObjectField.is(self.__field) &&
      ObjectType.is(self.__field.utils.object)
    ) {
      if (
        name &&
        self.__field.utils.object.id &&
        self.__field.utils.object.id !== name
      ) {
        self.__field.utils.object = self.__field.utils.object
          .clone()
          .objectType(name);
      } else if (name) {
        self.__field.utils.object.identify(name);
      } else {
        name = getObjectDefinitionId(
          self.__field.utils.object.definition,
          true // make nullable, the error below about undefined name is more clear
        );
      }

      Object.assign(self, {
        _object: self.__field.utils.object,
      });
    }

    if (!name) {
      throw new Error(
        `createType: Expected name to be provided: createType(typeName, definition);`
      );
    }

    Object.assign(self, {
      definition: self.__field.asFinalFieldDef,
    });

    if (name) {
      self.identify(name);
    }
  };

  private __hiddenField: boolean = false;

  identify = (name: string) => {
    const self = this as any;

    self.__id = name;
    self.__field.id = name;
    self.definition = self.__field.asFinalFieldDef;

    if (GraphType.register.has(name)) {
      const existing = GraphType.register.get(name);

      if (!isProduction()) {
        assertSame(
          `Different type already registered with name "${name}"`,
          // @ts-ignore
          this.definition,
          existing.definition
        );
      }
    } else {
      if (!isBrowser()) {
        CircularDeps.typesWriter?.BacklandWatchTypesPubSub.emit('created', {
          graphType: this,
        });
      }
      GraphType.register.set(name, this as any);
    }
  };

  set hiddenField(value) {
    this.__field.hiddenField = value;
    this.__hiddenField = value;
  }

  get hiddenField() {
    return this.__hiddenField;
  }

  parse = (
    input: any,
    options?: FieldParserConfig
  ): Infer<ToFinalField<Definition>> => {
    const customMessage =
      options && typeof options === 'object' ? options.customMessage : options;

    const _options = typeof options === 'object' ? options : {};
    if (this.__hiddenField && !_options.includeHidden) return undefined as any;

    try {
      return this.__field.parse(input, customMessage) as any;
    } catch (e: any) {
      e.message = `➤ ${this.id} ${e.message}`;
      throw e;
    }
  };

  _toGraphQL = (): ConvertFieldResult => {
    // @ts-ignore
    return CircularDeps.GraphQLParser.fieldToGraphQL({
      field: this.__field,
      fieldName: this.id,
      parentName: this.id,
      path: [`Type_${this.id}`],
      plainField: this.__field.asFinalFieldDef,
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
      throw new Error('graphQLInterface is only available for object type');
    }
    // @ts-ignore
    return CircularDeps.GraphQLParser.objectToGraphQL({
      object: this._object,
    }).interfaceType(...args) as any;
  };

  edit(): ExtendDefinitionResult<
    ToFinalField<Definition>,
    ToFinalField<Definition>
  > {
    return extendDefinition(this.definition) as any;
  }

  clone(): ExtendDefinitionResult<this, this> {
    return extendDefinition(this);
  }

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    // @ts-ignore circular
    const { GraphQLSchema, printSchema } = CircularDeps.graphql as any;

    const object = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });

    return printSchema(object).split('\n');
  };

  typescriptPrint = (
    options?: ObjectToTypescriptOptions & { name?: string }
  ): Promise<string> => {
    // @ts-ignore
    const object =
      this._object ||
      createObjectType({
        [this.id]: this.definition,
      });

    // @ts-ignore circular
    return CircularDeps.objectToTypescript(
      options?.name || this.id,
      object,
      options
    ) as any;
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
    defaultValue?: unknown;
    description?: string;
    hiddenField?: boolean;
    list?: boolean;
    name?: string;
    optional?: boolean;
    type: GraphTypeLike;
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

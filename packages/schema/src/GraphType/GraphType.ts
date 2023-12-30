import {
  createStore,
  inspectObject,
  isBrowser,
  RuntimeError,
} from '@powership/utils';
import type {
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
} from 'graphql';

import type { GraphTypeLike } from '../fields/IObjectLike';
import type { ObjectFieldInput } from '../fields/_parseFields';
import * as Internal from '../internal';
import type { ObjectToTypescriptOptions } from '../objectToTypescript';

// @only-server
import type { ConvertFieldResult, GraphQLParserResult } from './GraphQLParser';

export class GraphType<Definition extends ObjectFieldInput> {
  static assert(type: any): asserts type is GraphType<any> {
    if (!GraphType.is(type)) {
      throw new Error(
        `AssertError: type is not a GraphType.\n${inspectObject(type)}`
      );
    }
  }

  static __isGraphType = true;
  readonly __isGraphType = true;

  static register = createStore<Record<string, GraphTypeLike>>();

  static reset = async () => {
    // @only-server
    Internal._resolvers.clear();
    this.register.clear();
  };

  readonly definition: Definition;

  id!: string;
  private _optionalId: string | undefined = undefined;

  get optionalId() {
    return this._optionalId;
  }

  constructor(
    definition: Definition extends ObjectFieldInput
      ? Definition | (() => Definition)
      : never
  );

  constructor(
    name: string,
    definition: Definition extends ObjectFieldInput
      ? Definition | (() => Definition)
      : never
  );

  constructor(...args: GraphTypeArgs) {
    Internal.initGraphType(this, args);

    const self = this;

    Object.defineProperties(this, {
      id: {
        enumerable: false,
        get() {
          if (self._optionalId) return self._optionalId;
          throw new RuntimeError(
            [
              'The method you are trying to execute expects the GraphType used to be previously identified.\n' +
                'Examples:\n' +
                ' - `myNiceType.identify("Foo")`\n' +
                " - `createType('Bar', FieldDefinition)`",
            ].join('\n'),
            this.__lazyGetter.definitionInput
          );
        },
      },
    });
  }

  // used to lazy process input definition to improve circular dependency in types
  __lazyGetter: LazyParseGraphTypePayload;

  touched = false;

  touch() {
    // just dispatch lazy loader getters
    this.__lazyGetter.id;
    return this;
  }

  private __hidden: boolean = false;

  identify = (name: string) => {
    this._optionalId = name;

    if (GraphType.register.has(name)) {
      //
    } else {
      if (!isBrowser()) {
        // @only-server
        Internal.PowershipWatchTypesPubSub.emit('created', {
          graphType: this as any,
        });
      }
      GraphType.register.set(name, this as any);
    }
  };

  set hidden(value) {
    this.__lazyGetter.field.hidden = value;
    this.__hidden = value;
  }

  get hidden() {
    return this.__hidden;
  }

  parse = (
    input: any,
    options?: Internal.FieldParserConfig
  ): Internal.Infer<Definition> => {
    const field = this.__lazyGetter.field;

    try {
      const _options = typeof options === 'object' ? options : {};

      const { includeHidden = true } = _options;

      if (this.__hidden && !includeHidden) return undefined as any;

      return field.parse(input, _options) as any;
    } catch (e: any) {
      let message = e.message;

      if (field.list) {
        message = `➤  ${message}`;
      } else {
        message = `➤ ${this.optionalId || ''} ${e.message}`;
      }

      e.message = message;
      throw e;
    }
  };

  _toGraphQL = (): ConvertFieldResult => {
    // @only-server
    return Internal.GraphQLParser.fieldToGraphQL({
      field: this.__lazyGetter.field,
      fieldName: this.id,
      parentName: this.id,
      path: [`Type_${this.id}`],
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
    if (!this.__lazyGetter.objectType) {
      throw new Error('graphQLInterface is only available for object type');
    }
    // @only-server
    return Internal.GraphQLParser.objectToGraphQL({
      object: this.__lazyGetter.objectType,
    }).interfaceType(...args) as any;
  };

  clone<T>(
    handler: (input: Internal.ExtendObjectDefinition<this, this>) => T
  ): T {
    const parsed = Internal.parseField(this.definition);
    const input: any = Internal.extendObjectDefinition(parsed);
    return handler(input);
  }

  override<T>(handler: (input: Internal.ExtendType<this>) => T): T {
    const input = Internal.extendType(this.definition) as any;
    return handler(input);
  }

  beforeInitialize: ((
    definition: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload)[] = [];

  mutateFields<Def extends Internal.ObjectDefinitionInput>(
    callback: (input: Internal.ExtendObjectDefinition<this, this>) => Def
  ): GraphType<{ object: Def }> {
    if (this.touched) {
      throw new Error(
        `Called "mutateFields" after type "${
          this.optionalId || ''
        }" was touched.`
      );
    }

    if (this.optionalId) {
      // ObjectType.register.remove(this.optionalId); // FIXME
    }

    this.beforeInitialize.push((payload) => {
      if (payload.definition.type !== 'object') {
        throw new Error(`mutateFields can only be used with object types.`);
      }

      try {
        const input: any = Internal.extendObjectDefinition(payload.definition);
        payload.definition.def = callback(input);
        payload.objectType = Internal.createObjectType({
          [this.id]: this.definition,
        }) as any;
        (payload.field as any).utils.object = payload.objectType;
        return payload;
      } catch (e: any) {
        e.message = `Failed to execute mutateFields with the result from callback: ${inspectObject(
          { callback }
        )}`;
        throw e;
      }
    });

    return this as any;
  }

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    // @only-server
    const { GraphQLSchema, printSchema } = Internal;
    // @only-server
    const object = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });
    // @only-server
    return printSchema(object).split('\n');
  };

  typescriptPrint = (
    options?: ObjectToTypescriptOptions & { name?: string }
  ): Promise<string> => {
    const name = options?.name || this.id;

    // @ts-ignore
    const object =
      this.__lazyGetter.objectType ||
      Internal.createObjectType({
        [name]: this.definition,
      });

    // @only-server
    return Internal.objectToTypescript(name, object, options) as any;
  };

  optionalType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<Internal.MakeTypeOptional<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}Optional` : undefined;
    return this.override((it) => it.optional()).graphType(_id) as any;
  };

  requiredType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<Internal.MakeTypeRequired<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}NotNull` : undefined;
    return this.override((it) => it.required()).graphType(_id) as any;
  };

  listType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<Internal.MakeTypeList<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}List` : undefined;
    return this.override((it) => it.list()).graphType(_id) as any;
  };

  singleType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<Internal.MakeTypeSingle<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}Item` : undefined;
    return this.override((it) => it.single()).graphType(_id) as any;
  };

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends Internal.FieldDefinitionConfig>(
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
    hidden?: boolean;
    list?: boolean;
    name?: string;
    optional?: boolean;
    type: GraphTypeLike;
  } {
    return input?.type?.__isGraphType === true;
  }
}

export type LazyParseGraphTypePayload = {
  // id can be from args or from the inner type, like an object type with id
  definition: Internal.FinalFieldDefinition;
  definitionInput: ObjectFieldInput | (() => ObjectFieldInput);
  field: Internal.TAnyFieldType;
  id: string | undefined;
  idFromArgs: string | undefined;
  objectType?: any;
};

export type GraphTypeArgs<Def extends ObjectFieldInput = ObjectFieldInput> =
  | [string, Def | (() => Def)]
  | [Def | (() => Def)];

export function createType<Definition extends ObjectFieldInput>(
  definition: Definition | (() => Definition)
): GraphType<Definition>;

export function createType<Definition extends ObjectFieldInput>(
  name: string,
  definition: Definition | (() => Definition)
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

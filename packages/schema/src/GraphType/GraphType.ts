import '../__globals__';
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
// @only-server
import {
  // @only-server
  GraphQLSchema,
  // @only-server
  printSchema,
} from 'graphql';

import { FieldParserConfig } from '../applyValidator';
import type { ExtendObjectDefinition } from '../extendObjectDefinition';
import type {
  ExtendType,
  MakeTypeList,
  MakeTypeOptional,
  MakeTypeRequired,
  MakeTypeSingle,
} from '../extendType';
import type { TAnyFieldType } from '../fields/FieldType';
import type { GraphTypeLike } from '../fields/IObjectLike';
import type { Infer } from '../fields/Infer';
import type {
  FinalFieldDefinition,
  ObjectDefinitionInput,
  ObjectFieldInput,
} from '../fields/_parseFields';
import {
  objectToTypescript,
  ObjectToTypescriptOptions,
} from '../objectToTypescript';
// @only-server
import { PowershipWatchTypesPubSub } from '../generateTypes';

import { ConvertFieldResult, GraphQLParserResult } from './GraphQLParser';
// @only-server
import { initGraphType } from './initGraphType';

// @only-server
import '../Resolver';
// @only-server
import './GraphQLParser';

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
    powership._resolvers.clear();
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
    initGraphType(this, args);

    const self = this;

    Object.defineProperties(this, {
      id: {
        enumerable: false,
        get() {
          if (self._optionalId) return self._optionalId;
          throw new RuntimeError(
            [
              'The method you are trying to execute requires the GraphType to be identified.\n' +
                'Examples:\n' +
                ' - `Type.identify("Foo")`\n' +
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
        PowershipWatchTypesPubSub.emit('created', {
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

  validate = (
    input: any,
    options?: FieldParserConfig
  ): input is Infer<Definition> => {
    try {
      this.parse(input, options);
      return true;
    } catch (e) {
      return false;
    }
  };

  parse = (input: any, options?: FieldParserConfig): Infer<Definition> => {
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
    return powership.GraphQLParser.fieldToGraphQL({
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
    return powership.GraphQLParser.objectToGraphQL({
      object: this.__lazyGetter.objectType,
    }).interfaceType(...args) as any;
  };

  clone<T>(handler: (input: ExtendObjectDefinition<this, this>) => T): T {
    const parsed = powership.parseField(this.definition);
    const input: any = powership.extendObjectDefinition(parsed);
    return handler(input);
  }

  override<T>(handler: (input: ExtendType<this>) => T): T {
    const input = powership.extendType(this.definition) as any;
    return handler(input);
  }

  beforeInitialize: ((
    definition: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload)[] = [];

  mutateFields<Def extends ObjectDefinitionInput>(
    callback: (input: ExtendObjectDefinition<this, this>) => Def
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
        const input: any = powership.extendObjectDefinition(payload.definition);
        payload.definition.def = callback(input);
        payload.objectType = powership.createObjectType({
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
      powership.createObjectType({
        [name]: this.definition,
      });

    // @only-server
    return objectToTypescript(name, object, options) as any;
  };

  optionalType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeOptional<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}Optional` : undefined;
    return this.override((it) => it.optional()).graphType(_id) as any;
  };

  requiredType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeRequired<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}NotNull` : undefined;
    return this.override((it) => it.required()).graphType(_id) as any;
  };

  listType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeList<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}List` : undefined;
    return this.override((it) => it.list()).graphType(_id) as any;
  };

  singleType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeSingle<Definition>>
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
  static getOrSet = <T extends ObjectFieldInput>(
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
  definition: FinalFieldDefinition;
  definitionInput: ObjectFieldInput | (() => ObjectFieldInput);
  field: TAnyFieldType;
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
  if (args.length === 1 && GraphType.is(args[0])) {
    return args[0];
  }
  return new GraphType(
    // @ts-ignore
    ...args
  );
}

export function getType(name: string): GraphTypeLike {
  return GraphType.register.get(name);
}

Object.assign(powership, {
  GraphType,
  createType,
});

declare global {
  interface powership {
    GraphType: typeof GraphType;
    createType: typeof createType;
  }
}

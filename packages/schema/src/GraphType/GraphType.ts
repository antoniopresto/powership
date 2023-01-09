import {
  inspectObject,
  isBrowser,
  RuntimeError,
  StrictMap,
} from '@backland/utils';
import type {
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
} from 'graphql';

import { BacklandModules, CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';
import {
  createObjectType,
  FieldInput,
  FinalFieldDefinition,
  ObjectDefinitionInput,
  ObjectType,
  parseField,
} from '../ObjectType';
import type { AnyResolver } from '../Resolver';
import { FieldDefinitionConfig } from '../TObjectConfig';
import {
  extendObjectDefinition,
  ExtendObjectDefinition,
} from '../extendObjectDefinition';
import {
  extendType,
  ExtendType,
  MakeTypeList,
  MakeTypeOptional,
  MakeTypeRequired,
  MakeTypeSingle,
} from '../extendType';
import { FieldParserConfig, TAnyFieldType } from '../fields/FieldType';
import { GraphTypeLike } from '../fields/IObjectLike';
import { getObjectDefinitionId } from '../fields/MetaFieldField';
import { ObjectField } from '../fields/ObjectField';
import { ObjectFieldInput } from '../fields/_parseFields';
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

  readonly definition: Definition;

  get id(): string {
    if (this.optionalId) return this.optionalId;

    throw new RuntimeError(
      [
        'The method you are trying to execute needs the graphType used to be identified.' +
          ' Use ``myType.identify("name")`` and try again.',
        'You can also read that information from ``myType.optionalId.``',
        '',
        '',
      ].join('\n'),
      this.__lazyGetter.definitionInput
    );
  }

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
    const { initializer, idFromArgs } = lazyCreateGraphTypeInitPayload(
      args,
      (payload) => {
        this.beforeInitialize.forEach((next) => {
          payload = next(payload);
        });

        this.touched = true;

        return payload;
      }
    );

    Object.defineProperty(this, '__lazyGetter', {
      get() {
        return initializer(this);
      },
    });

    Object.defineProperty(this, 'definition', {
      enumerable: true,
      get() {
        return initializer(this).definition;
      },
    });

    if (idFromArgs) {
      this.identify(idFromArgs);
    }
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
        CircularDeps.typesWriter?.BacklandWatchTypesPubSub.emit('created', {
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

  parse = (input: any, options?: FieldParserConfig): Infer<Definition> => {
    try {
      const field = this.__lazyGetter.field;

      if (this.__lazyGetter.objectType) {
        return this.__lazyGetter.objectType.parse(input, options as {}) as any;
      }

      const customMessage =
        options && typeof options === 'object'
          ? options.customMessage
          : options;

      const _options = typeof options === 'object' ? options : {};

      const { includeHidden = true } = _options;

      if (this.__hidden && !includeHidden) return undefined as any;

      return field.parse(input, customMessage) as any;
    } catch (e: any) {
      e.message = `➤ ${this.optionalId || ''} ${e.message}`;
      throw e;
    }
  };

  _toGraphQL = (): ConvertFieldResult => {
    // @ts-ignore
    return CircularDeps.GraphQLParser.fieldToGraphQL({
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
    // @ts-ignore
    return CircularDeps.GraphQLParser.objectToGraphQL({
      object: this.__lazyGetter.objectType,
    }).interfaceType(...args) as any;
  };

  clone<T>(handler: (input: ExtendObjectDefinition<this, this>) => T): T {
    const parsed = parseField(this.definition);
    const input: any = extendObjectDefinition(parsed);
    return handler(input);
  }

  override<T>(handler: (input: ExtendType<this>) => T): T {
    const input = extendType(this.definition) as any;
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
      ObjectType.register.delete(this.optionalId);
    }

    this.beforeInitialize.push((payload) => {
      if (payload.definition.type !== 'object') {
        throw new Error(`mutateFields can only be used with object types.`);
      }

      try {
        const input: any = extendObjectDefinition(payload.definition);
        payload.definition.def = callback(input);
        payload.objectType = createObjectType({
          [this.id]: this.definition,
        }) as any;
        (payload.field as ObjectField<any>).utils.object = payload.objectType;
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
      this.__lazyGetter.objectType ||
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
  definitionInput:
    | ObjectFieldInput
    | ((utils: BacklandModules) => ObjectFieldInput);
  field: TAnyFieldType;
  // object lazy created when the corresponding getter in GraphType is called
  id: string | undefined;
  idFromArgs: string | undefined;
  objectType?: ObjectType<any>;
};

export type GraphTypeArgs<Def extends ObjectFieldInput = ObjectFieldInput> =
  | [string, Def | ((utils: BacklandModules) => Def)]
  | [Def | ((utils: BacklandModules) => Def)];

// used to lazy parse args to improve circular types usage
export function lazyCreateGraphTypeInitPayload(
  args: GraphTypeArgs,
  onLoad?: (
    payload: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload | void
) {
  let payload: LazyParseGraphTypePayload;

  let id: string | undefined = undefined;

  let definitionInput:
    | ObjectFieldInput
    | ((utils: BacklandModules) => ObjectFieldInput);

  let idFromArgs;
  if (args.length === 2) {
    idFromArgs = id = args[0];
    definitionInput = args[1];
  } else {
    definitionInput = args[0];
  }

  function initializer(self: GraphType<FieldInput>): LazyParseGraphTypePayload {
    if (payload) return payload;

    const def =
      typeof definitionInput === 'function'
        ? definitionInput(CircularDeps)
        : definitionInput;

    const field = parseObjectField('temp', def, {
      returnInstance: true,
    }) as TAnyFieldType & { utils: { object?: any } };

    if (ObjectField.is(field) && ObjectType.is(field.utils.object)) {
      if (id && field.utils.object.id && field.utils.object.id !== id) {
        field.utils.object = field.utils.object.clone((el) =>
          el.objectType(id)
        );
      } else if (id) {
        field.utils.object.identify(id);
      } else {
        // @ts-ignore (deep)
        id = getObjectDefinitionId(
          field.utils.object.definition,
          true // make nullable, the error below about undefined name is more clear
        );
      }
    }

    payload = {
      definition: field.asFinalFieldDef,

      definitionInput,

      field,
      // id can be from inner type, like an object type with id or defined in an argument of createType
      id,
      idFromArgs,
      objectType: field.utils?.object,
    };

    if (id) {
      self.identify(id);
    }

    const res = onLoad?.(payload);

    if (res !== undefined) {
      return res;
    }

    return payload;
  }

  return {
    // id can also be from inner type, like an object type with id
    definitionInput,
    idFromArgs,
    initializer,
  };
}

export function createType<Definition extends ObjectFieldInput>(
  definition: Definition | ((utils: BacklandModules) => Definition)
): GraphType<Definition>;

export function createType<Definition extends ObjectFieldInput>(
  name: string,
  definition: Definition | ((utils: BacklandModules) => Definition)
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

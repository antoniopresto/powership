import {
  assertEqual,
  BJSON,
  createStore,
  nonNullValues,
  RuntimeError,
} from '@powership/utils';
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLFloat,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInputObjectTypeConfig,
  GraphQLInputType,
  GraphQLInt,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLObjectTypeConfig,
  GraphQLOutputType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
  isNullableType,
  printSchema,
} from 'graphql';

import type {
  GraphQLInterfaceTypeConfig,
  ThunkObjMap,
  ThunkReadonlyArray,
} from 'graphql/type/definition';

import { ObjectTypeLikeFieldDefinition } from '../fields/Infer';
import { FieldTypeName } from '../fields/_fieldDefinitions';
import { FinalFieldDefinition } from '../fields/_parseFields';

import { GraphQLNullType } from './GraphQLNullType';
import { GraphQLUlidType } from './GraphQLUlidType';

import {
  __getCachedFieldInstance,
  AliasField,
  ArrayField,
  cleanMetaField,
  CursorField,
  DateField,
  getObjectDefinitionMetaField,
  isHiddenFieldName,
  isObjectType,
  LiteralField,
  ObjectField,
  ObjectHelpers,
  ObjectType,
  parseTypeName,
  PhoneValidationOptions,
  TAnyFieldType,
  UnionField,
  validatePhoneNumber,
} from '../types';

import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

export function createHooks() {
  return {
    // onField: hooks.parallel<ConvertFieldResult, GraphQLFieldConfig<any, any>>(),
    // onFieldConfigMap: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
    // onFieldResult: hooks.parallel<ConvertFieldResult>(),
    // willCreateObjectType: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
  };
}

export type ParserHooks = ReturnType<typeof createHooks>;

export interface GraphQLParseMiddleware {
  (hooks: ParserHooks): any;
}

export type CommonTypeOptions = {
  middleware?: GraphQLParseMiddleware;
};

export type ParseTypeOptions = Partial<GraphQLObjectTypeConfig<any, any>> &
  CommonTypeOptions;

export type ParseInputTypeOptions = Partial<GraphQLInputObjectTypeConfig> &
  CommonTypeOptions;

export type ParseInterfaceOptions = Partial<
  GraphQLInterfaceTypeConfig<any, any>
> &
  CommonTypeOptions;

export interface GraphQLParserResult {
  getInputType: (options?: ParseInputTypeOptions) => GraphQLInputObjectType;
  getType: (options?: ParseTypeOptions) => GraphQLObjectType;
  inputToString(): string;
  interfaceType: (options?: ParseInterfaceOptions) => GraphQLInterfaceType;
  object: ObjectType<{}>;
  typeToString(): string;
}

export interface ConvertFieldResult {
  description?: string;
  fieldName: string;
  inputType: (options?: ParseInputTypeOptions) => GraphQLInputType;
  plainField: FinalFieldDefinition;
  type: (options?: ParseTypeOptions) => GraphQLOutputType;
  typeName: string;
}

const resultsCache = createStore<Record<string, GraphQLParserResult>>();
const graphqlTypesRegister = createStore<Record<string, any>>();
const fieldsRegister = createStore<Record<string, ConvertFieldResult>>();

function wrapCreationWithCache(name: string, create: (...args: any[]) => any) {
  return function creator(...args) {
    if (graphqlTypesRegister.has(name)) {
      return graphqlTypesRegister.get(name);
    }
    const result = create(...args);
    graphqlTypesRegister.set(name, result);
    return graphqlTypesRegister.get(name);
  };
}

export type GraphQLPhoneTypeOptions = PhoneValidationOptions & {
  description?: string;
  name?: string;
};

const validator = (ast, options: GraphQLPhoneTypeOptions) => {
  const { kind, value } = ast;

  if (kind !== Kind.STRING) {
    throw new GraphQLError(
      `Query error: Can only parse strings got a: ${kind}`,
      [ast]
    );
  }

  return validatePhoneNumber(value, options);
};

export class GraphQLPhoneType extends GraphQLScalarType {
  constructor(options: GraphQLPhoneTypeOptions = {}) {
    const { name = 'Phone', description } = options || {};

    super({
      description,
      name,
      parseLiteral: (ast) => validator(ast, options),
      parseValue: (value) => {
        const ast = {
          kind: Kind.STRING,
          value,
        };
        return validator(ast, options);
      },
      serialize: (value) => {
        const ast = {
          kind: Kind.STRING,
          value,
        };
        return validator(ast, options);
      },
    });
  }
}

export const GraphQLDateType = new GraphQLScalarType({
  name: 'Date',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }

    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Query error: Can only parse string or integer to Date but got a: ${ast.kind}`,
        [ast]
      );
    }

    const result = new Date(ast.value);
    if (Number.isNaN(result.getTime())) {
      throw new GraphQLError('Query error: Invalid date', [ast]);
    }

    return result;
  },
  parseValue(value: any) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      throw new TypeError('Field error: value is an invalid Date');
    }

    return date;
  },
  serialize(value) {
    return DateField.serialize(value).toJSON();
  },
});

export class GraphQLParser {
  static resultsCache = resultsCache;
  static graphqlTypesRegister = graphqlTypesRegister;
  static fieldsRegister = fieldsRegister;

  static reset = () => {
    resultsCache.clear();
    graphqlTypesRegister.clear();
    fieldsRegister.clear();
  };

  static objectIds = (object: ObjectTypeLikeFieldDefinition) => {
    if (!isObjectType(object)) {
      throw new RuntimeError(`Invalid Object.`, {
        object,
      });
    }

    const { id: objectId } = nonNullValues(
      { id: object.id },
      'The provided object should be identified before converting. ' +
        'You can use object.identify("abc")'
    );

    const cacheId = `${[objectId].filter(Boolean).join()}`;
    //
    return { cacheId, object, objectId };
  };

  static objectToGraphQL(init: {
    object: { [K in keyof ObjectType<any>]: any } & {};
    path?: string[]; // family tree of an object/field
  }): GraphQLParserResult {
    const { path } = init;
    const objectInput = init.object;

    const { cacheId, objectId } = this.objectIds(objectInput);
    const { implements: parents } = objectInput.meta;

    if (resultsCache.has(cacheId)) {
      return resultsCache.get(cacheId);
    }

    // save reference for circular dependencies
    const graphqlParsed = {} as GraphQLParserResult;
    resultsCache.set(cacheId, graphqlParsed);

    const buildFields = <T>(
      options: CommonTypeOptions & {
        fields?: ThunkObjMap<{ [K: string]: any; type: any }>;
        interfaces?: ThunkReadonlyArray<GraphQLInterfaceType>;
      },

      _getType: (data: ConvertFieldResult) => T
    ) => {
      const { interfaces: currentInterfacesOption } = options;

      options.interfaces = (): GraphQLInterfaceType[] => {
        const currentInterfaces =
          typeof currentInterfacesOption === 'function'
            ? currentInterfacesOption()
            : currentInterfacesOption || [];

        const types = parents
          ? parents.map(
              (parent) => ObjectType.register.get(parent) as ObjectType<any>
            )
          : [];

        return [
          ...currentInterfaces,
          ...types.map((type) => {
            return type.graphqlInterfaceType();
          }),
        ];
      };

      options.fields = () => {
        const helpers: ObjectHelpers = objectInput.helpers();
        const objectMiddleware = objectInput.graphQLMiddleware || [];

        const builders: ConvertFieldResult[] = [];
        const hooks = createHooks();
        options.middleware?.(hooks);
        objectMiddleware.forEach((fn) => fn(hooks));

        const fieldsConfigMap: GraphQLFieldConfigMap<any, any> = {};

        const aliases: {
          fieldName: string;
          instance: AliasField;
          parentName: string;
          path: string[];
        }[] = [];

        helpers.list.forEach(({ name: fieldName, instance, plainField }) => {
          if (isHiddenFieldName(fieldName)) return;
          if (plainField.hidden) return;

          if (plainField.type === 'alias') {
            AliasField.assert(instance);

            const subTypeName = parseTypeName({
              field: plainField,
              fieldName,
              parentName: objectId,
            });

            aliases.push({
              fieldName: subTypeName,
              instance,
              parentName: objectId,
              path: [objectId, fieldName],
            });
            return;
          }

          const field = this.fieldToGraphQL({
            field: instance,
            fieldName,
            parentName: objectId,
            path: path || [objectId],
          });

          // hooks.onFieldResult.dispatch(field);
          builders.push(field);
        });

        function _useConvertFieldResult(next: ConvertFieldResult) {
          const field: GraphQLFieldConfig<any, any> = {
            description: next.description,
            type: _getType(next) as any,
          };

          const origin =
            // @ts-ignore
            (objectInput.definition[next.fieldName] as FinalFieldDefinition) ||
            undefined;

          if (origin?.hidden) return;

          if (origin?.defaultValue !== undefined) {
            // @ts-ignore
            field.defaultValue = origin.defaultValue;
          }

          fieldsConfigMap[next.fieldName] = field;

          // hooks.onField.dispatch(next, field);
        }
        builders.forEach(_useConvertFieldResult);

        aliases.forEach(({ instance, fieldName, parentName, path }) => {
          const { type } = instance.asFinalFieldDef.def as {
            type: FinalFieldDefinition; // already parsed during parseObjectDefinition
          };

          _useConvertFieldResult(
            this.fieldToGraphQL({
              field: __getCachedFieldInstance(type),
              fieldName,
              parentName,
              path,
            })
          );
        });

        // hooks.onFieldConfigMap.dispatch(fieldsConfigMap);
        // hooks.willCreateObjectType.dispatch(fieldsConfigMap);

        return fieldsConfigMap;
      };

      return options;
    };

    function getType(_options: ParseTypeOptions = {}) {
      const __options = { fields: {}, name: objectId, ..._options };
      const { name } = __options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      buildFields(__options, (el) => el.type());
      const result = new GraphQLObjectType(__options);
      graphqlTypesRegister.set(__options.name, result);

      return result;
    }

    function getInputType(
      _options: ParseInputTypeOptions = {}
    ): GraphQLInputObjectType {
      const options = { fields: {}, name: `${objectId}Input`, ..._options };
      const { name } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      buildFields(options, (el) => el.inputType());
      const result = new GraphQLInputObjectType(options);
      graphqlTypesRegister.set(name, result);
      return result;
    }

    function interfaceType(_options: ParseInterfaceOptions = {}) {
      const options = { fields: {}, name: `${objectId}Interface`, ..._options };
      const { name } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      buildFields(options, (el) => el.type());
      const result = new GraphQLInterfaceType(options);
      graphqlTypesRegister.set(name, result);
      return result;
    }

    function getSDL() {
      const result = getType();

      const object = new GraphQLSchema({
        types: [result],
      });

      return printSchema(object);
    }

    function getInputSDL() {
      const object = new GraphQLSchema({
        types: [getInputType()],
      });

      return printSchema(object);
    }

    const parsed: GraphQLParserResult = {
      getInputType,
      getType,
      inputToString: getInputSDL,
      interfaceType,
      object: objectInput as any,
      typeToString: getSDL,
    };

    Object.assign(graphqlParsed, parsed);

    return graphqlParsed;
  }

  static fieldToGraphQL(init: {
    field: TAnyFieldType;
    fieldName: string;
    parentName: string;
    path: string[];
  }): ConvertFieldResult {
    const { fieldName, parentName } = init;
    const fieldClone = init.field;
    const plainField = fieldClone.asFinalFieldDef;

    const { optional, typeName } = fieldClone;
    const { description } = plainField;

    const path = [...init.path, fieldName];

    const cacheId = path.join('--');

    if (resultsCache.has(cacheId)) {
      return fieldsRegister.get(cacheId);
    }

    // save reference for circular dependencies
    const fieldParsed = {} as ConvertFieldResult;
    fieldsRegister.set(cacheId, fieldParsed);

    const subTypeName = parseTypeName({
      field: fieldClone,
      fieldName,
      parentName,
    });

    const self = this;

    // @ts-ignore
    const creators: {
      [T in FieldTypeName]: () => Omit<
        ConvertFieldResult,
        'typeName' | 'fieldName' | 'path' | 'plainField' | 'composers'
      >;
    } = {
      ID() {
        return { inputType: () => GraphQLID, type: () => GraphQLID };
      },
      alias() {
        return {} as any; // handled in object parser;
      },
      any() {
        const create = wrapCreationWithCache(
          'Any',
          () => new GraphQLScalarType({ name: 'Any' })
        );
        return { inputType: create, type: create };
      },
      array() {
        const {
          utils: { listItemType: innerFieldType },
        } = fieldClone as ArrayField<any>;

        const id = parseTypeName({
          field: innerFieldType,
          fieldName,
          parentName,
        });

        const convertFieldResult = self.fieldToGraphQL({
          field: innerFieldType,
          fieldName,
          parentName,
          path,
        });

        return {
          inputType: wrapCreationWithCache(`${id}ListInput`, (...args) => {
            return new GraphQLList(convertFieldResult.inputType(...args));
          }),
          type: wrapCreationWithCache(`${id}List`, (...args) => {
            return new GraphQLList(convertFieldResult.type(...args));
          }),
        };
      },
      boolean() {
        return {
          inputType: () => GraphQLBoolean,
          type: () => GraphQLBoolean,
        };
      },
      cursor(): any {
        const cursor = fieldClone as CursorField;

        return {
          inputType: cursor.utils.object.graphqlInputType,
          type: cursor.utils.object.graphqlType,
        };
      },
      date() {
        return {
          inputType: () => GraphQLDateType,
          type: () => GraphQLDateType,
        };
      },
      email() {
        return {
          inputType: () => GraphQLString,
          type: () => GraphQLString,
        };
      },
      enum() {
        function createEnum(options?: any) {
          const values: any = {};
          assertEqual(fieldClone.type, 'enum');

          fieldClone.def.forEach((key: string) => {
            values[key] = {
              value: key,
            };
          });

          return new GraphQLEnumType({
            name: subTypeName,
            ...options,
            values,
          });
        }

        return {
          inputType: wrapCreationWithCache(subTypeName, createEnum),
          type: wrapCreationWithCache(subTypeName, createEnum),
        };
      },
      float() {
        return {
          inputType: () => GraphQLFloat,
          type: () => GraphQLFloat,
        };
      },
      int() {
        return {
          inputType: () => GraphQLInt,
          type: () => GraphQLInt,
        };
      },
      literal() {
        if (!LiteralField.is(fieldClone)) throw new Error('ts');
        const { description, def } = fieldClone;

        const recordName = parseTypeName({
          field: fieldClone,
          fieldName,
          parentName,
        });

        function createLiteral(options: any) {
          return new GraphQLScalarType<'internal', 'external'>({
            ...options,

            description: JSON.stringify(
              description || `Literal value: ${def.value}`
            ),

            name: recordName,

            parseValue(value: any) {
              return LiteralField.utils.deserialize({
                ...def,
                value,
              });
            },

            serialize(value: any) {
              return LiteralField.utils.deserialize({
                ...def,
                value,
              });
            },
          });
        }

        return {
          inputType: wrapCreationWithCache(recordName, createLiteral),
          type: wrapCreationWithCache(recordName, createLiteral),
        };
      },
      meta() {
        throw new Error('meta field');
      },
      null() {
        return {
          inputType: () => GraphQLNullType,
          type: () => GraphQLNullType,
        };
      },
      object() {
        assertEqual(fieldClone.type, 'object');

        const id = parseTypeName({
          field: fieldClone,
          fieldName,
          parentName,
        });

        const def = ObjectType.is(fieldClone.def)
          ? fieldClone.def.clone((el) => el.def())
          : fieldClone.def;

        const object = ObjectType.getOrSet(
          id,
          // @ts-ignore
          def
        );

        const res = self.objectToGraphQL({
          object,
        });

        return { inputType: res.getInputType, type: res.getType };
      },
      phone() {
        return {
          inputType: () => new GraphQLPhoneType(),
          type: () => new GraphQLPhoneType(),
        };
      },
      record() {
        const recordName = parseTypeName({
          field: fieldClone,
          fieldName,
          parentName,
        });

        function createRecord(options: any) {
          return new GraphQLScalarType({
            ...options,

            name: recordName,

            parseValue(value) {
              return fieldClone.parse(value);
            },

            serialize(value) {
              return fieldClone.parse(value);
            },
          });
        }

        return {
          inputType: wrapCreationWithCache(recordName, createRecord),
          type: wrapCreationWithCache(recordName, createRecord),
        };
      },
      string() {
        return {
          inputType: () => GraphQLString,
          type: () => GraphQLString,
        };
      },
      ulid() {
        return {
          inputType: () => GraphQLUlidType,
          type: () => GraphQLUlidType,
        };
      },
      undefined() {
        const create = wrapCreationWithCache(
          'Undefined',
          () => new GraphQLScalarType({ name: 'Undefined' })
        );
        return { inputType: create, type: create };
      },

      union() {
        if (!UnionField.is(fieldClone)) throw fieldClone;
        let descriptions: string[] = [];

        // if all types are objects it can be used as normal GraphQL union
        // otherwise we need to create a scalar, since GraphQL only accepts unions of objects
        //    -  https://github.com/graphql/graphql-js/issues/207
        // GraphQL union items cannot be used as input, so we always use scalars for inputs:
        //    - https://github.com/graphql/graphql-spec/issues/488
        let areAllObjects = true;

        fieldClone.utils.fieldTypes.forEach((field) => {
          if (field.type !== 'object') areAllObjects = false;
          descriptions.push(describeField(field.definition));
        });

        let description: string | undefined = undefined;

        descriptions = descriptions.map((el) => el.trim());
        description = descriptions.join(' | ');

        if (description.length > 100) {
          description = `Union of:\n${descriptions
            .map((el) => ` - ${el}`)
            .join('\n')}`;
        } else {
          description = `Union of ${descriptions.join(' | ')}`.trim();
        }
        description = description.replace(/  /g, ' ');

        const scalarUnion = new GraphQLScalarType({
          description,
          name: subTypeName,
          parseValue(value) {
            return fieldClone.parse(value);
          },
          serialize(value) {
            return fieldClone.parse(value);
          },
        });

        return {
          inputType: wrapCreationWithCache(subTypeName, () => {
            return scalarUnion;
          }),
          type: wrapCreationWithCache(subTypeName, (...options) => {
            if (!areAllObjects) return scalarUnion;

            return new GraphQLUnionType({
              name: subTypeName,
              ...options,
              types: fieldClone.utils.fieldTypes.map((field, index) => {
                if (!ObjectField.is(field)) throw field;
                let object: any = field.utils.object;
                if (!object.id) {
                  object = object.clone((el) =>
                    el.objectType(`${subTypeName}_${index}`)
                  );
                }
                return object.graphqlType();
              }),
            });
          }),
        };
      },

      unknown() {
        const GraphQLUnknownType = new GraphQLScalarType({ name: subTypeName });

        return {
          inputType: () => GraphQLUnknownType,
          type: () => GraphQLUnknownType,
        };
      },
    };

    const result: ConvertFieldResult = {
      description,
      fieldName,
      inputType(...args) {
        if (typeName === 'alias') {
          // dev only assertion, aliasing should be handled in parseObject
          throw new Error(`can't handle alias in convertField.`);
        }

        let _result = creators[typeName]().inputType(...args);

        if (fieldClone.list) {
          _result = new GraphQLList(_result);
        }

        if (!optional && fieldClone.defaultValue === undefined) {
          _result = new GraphQLNonNull(_result);
        }

        return _result;
      },
      plainField,
      type(...args) {
        if (typeName === 'alias') {
          // dev only assertion, aliasing should be handled in parseObject
          throw new Error(`can't handle alias in convertField.`);
        }

        let _result = creators[typeName]().type(...args);

        if (fieldClone.list) {
          _result = new GraphQLList(_result);
        }

        if (!optional && isNullableType(_result)) {
          _result = new GraphQLNonNull(_result);
        }

        return _result;
      },

      typeName,
    };

    Object.assign(fieldParsed, result);

    return result;
  }
}

export function describeField(field: FinalFieldDefinition): string {
  if (field.name) return field.name;

  if (field.type === 'literal') {
    const value = BJSON.stringify(LiteralField.utils.deserialize(field.def), {
      quoteKeys(key) {
        return ` ${key}`;
      },
    });

    return `${value}`;
  }

  return BJSON.stringify(field, {
    handler(payload) {
      const { value } = payload;

      if (value?.type === 'object' && value.def) {
        const meta = getObjectDefinitionMetaField(value?.def || {});
        if (meta?.def.id) return meta.def.id;
        return describeField(cleanMetaField(value.def));
      }

      return undefined;
    },
    quoteKeys(key) {
      return ` ${key}`;
    },
    quoteValues(value, { key }) {
      if (value === false) return '';
      if (key === 'type') return ` ${value} `;
      return `${value}`;
    },
  });
}

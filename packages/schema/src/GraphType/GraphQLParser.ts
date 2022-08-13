import { TypeAssertionError } from '@darch/utils';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { assertSame } from '@darch/utils/lib/assertSame';
import { isProduction } from '@darch/utils/lib/env';
import { hooks } from '@darch/utils/lib/hooks';
import { nonNullValues } from '@darch/utils/lib/invariant';
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
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
  printSchema,
} from 'graphql';
import {
  GraphQLInterfaceTypeConfig,
  ThunkObjMap,
  ThunkReadonlyArray,
} from 'graphql/type/definition';

import { isObject, ObjectType } from '../ObjectType';
import { assertSameDefinition } from '../assertSameDefinition';
import type { CursorField } from '../fields/CursorField';
import { TAnyFieldType } from '../fields/FieldType';
import { LiteralField } from '../fields/LitarealField';
import { ObjectField } from '../fields/ObjectField';
import type { UnionField } from '../fields/UnionField';
import { FieldTypeName } from '../fields/_fieldDefinitions';
import {
  FinalFieldDefinition,
  ObjectDefinitionInput,
} from '../fields/_parseFields';
import { parseTypeName } from '../parseTypeName';

import { GraphQLDateType } from './GraphQLDateType';
import { GraphQLNullType } from './GraphQLNullType';
import { GraphQLUlidType } from './GraphQLUlidType';
import { GraphQLUnknownType } from './GraphQLUnknownType';

export function createHooks() {
  return {
    willCreateObjectType: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
    onFieldResult: hooks.parallel<ConvertFieldResult>(),
    onField: hooks.parallel<ConvertFieldResult, GraphQLFieldConfig<any, any>>(),
    onFieldConfigMap: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
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
  typeToString(): string;
  inputToString(): string;
  getInputType: (options?: ParseInputTypeOptions) => GraphQLInputObjectType;
  getType: (options?: ParseTypeOptions) => GraphQLObjectType;
  interfaceType: (options?: ParseInterfaceOptions) => GraphQLInterfaceType;
  object: ObjectType<any>;
}

export interface ConvertFieldResult {
  fieldName: string;
  typeName: string;
  inputType: (options?: ParseInputTypeOptions) => GraphQLInputType;
  type: (options?: ParseTypeOptions) => GraphQLOutputType;
  description?: string;
  plainField: FinalFieldDefinition;
}

const resultsCache = new StrictMap<string, GraphQLParserResult>();
const graphqlTypesRegister = new StrictMap<string, any>();
const fieldsRegister = new StrictMap<string, ConvertFieldResult>();

function wrapCreation(name: string, create: (...args: any[]) => any) {
  return function creator(...args) {
    if (graphqlTypesRegister.has(name)) {
      return graphqlTypesRegister.get(name);
    }
    const result = create(...args);
    graphqlTypesRegister.set(name, result);
    return graphqlTypesRegister.get(name);
  };
}

export class GraphQLParser {
  static resultsCache = resultsCache;
  static graphqlTypesRegister = graphqlTypesRegister;
  static fieldsRegister = fieldsRegister;

  static reset = () => {
    resultsCache.clear();
    graphqlTypesRegister.clear();
    fieldsRegister.clear();
  };

  static objectToGraphQL<T extends ObjectDefinitionInput>(options: {
    object: ObjectType<T>;
    path?: string[]; // family tree of an object/field
  }): GraphQLParserResult {
    const { object, path } = options;

    if (!isObject(object)) {
      throw new RuntimeError(`Invalid Object.`, {
        object,
      });
    }

    const { id: objectId } = nonNullValues(
      { id: object.id },
      'The provided object should be identified before converting. ' +
        'You can use object.identify("abc")'
    );

    const { implements: parents } = object.meta;

    if (resultsCache.has(objectId)) {
      const cached = resultsCache.get(objectId);
      if (!isProduction()) {
        assertSameDefinition(
          objectId,
          cached.object.definition,
          object.definition
        );
      }
      return cached;
    }

    // save reference for circular dependencies
    const graphqlParsed = {} as GraphQLParserResult;
    resultsCache.set(objectId, graphqlParsed);

    const buildFields = <T>(
      options: CommonTypeOptions & {
        fields?: ThunkObjMap<{ type: any; [K: string]: any }>;
        interfaces?: ThunkReadonlyArray<GraphQLInterfaceType>;
      },

      getType: (data: ConvertFieldResult) => T
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
        const helpers = object.helpers();
        const objectMiddleware = object.graphQLMiddleware || [];

        const builders: ConvertFieldResult[] = [];
        const hooks = createHooks();
        options.middleware?.(hooks);
        objectMiddleware.forEach((fn) => fn(hooks));

        helpers.list.forEach(({ name: fieldName, instance, plainField }) => {
          const field = this.fieldToGraphQL({
            field: instance,
            parentName: objectId,
            fieldName,
            path: path || [objectId],
            plainField,
          });

          hooks.onFieldResult.exec(field);

          builders.push(field);
        });

        const fieldsConfigMap = builders.reduce((acc, next) => {
          const field: GraphQLFieldConfig<any, any> = {
            type: getType(next) as any,
            description: next.description,
          };

          const origin =
            (object.definition[next.fieldName] as FinalFieldDefinition) ||
            undefined;

          if (origin?.defaultValue !== undefined) {
            // @ts-ignore
            field.defaultValue = origin.defaultValue;
          }

          const objMap: GraphQLFieldConfigMap<any, any> = {
            ...acc,
            [next.fieldName]: field,
          };

          hooks.onField.exec(next, field);

          return objMap;
        }, {} as GraphQLFieldConfigMap<any, any>);

        hooks.onFieldConfigMap.exec(fieldsConfigMap);

        hooks.willCreateObjectType.exec(fieldsConfigMap);
        return fieldsConfigMap;
      };

      return options;
    };

    function getType(_options: ParseTypeOptions = {}) {
      const options = { name: objectId, fields: {}, ..._options };
      const { name } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      buildFields(options, (el) => el.type());
      const result = new GraphQLObjectType(options);
      graphqlTypesRegister.set(options.name, result);

      return result;
    }

    function getInputType(
      _options: ParseInputTypeOptions = {}
    ): GraphQLInputObjectType {
      const options = { name: `${objectId}Input`, fields: {}, ..._options };
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
      const options = { name: `${objectId}Interface`, fields: {}, ..._options };
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
      getType,
      inputToString: getInputSDL,
      typeToString: getSDL,
      getInputType,
      interfaceType,
      object,
    };

    Object.assign(graphqlParsed, parsed);

    return graphqlParsed;
  }

  static fieldToGraphQL(options: {
    field: TAnyFieldType;
    parentName: string;
    fieldName: string;
    path: string[];
    plainField: FinalFieldDefinition;
  }): ConvertFieldResult {
    const { field, fieldName, parentName, plainField } = options;
    const { list, optional, typeName } = field;
    const { description } = plainField;

    const path = [...options.path, fieldName];

    const cacheId = path.join('--');

    if (resultsCache.has(cacheId)) {
      const cached = fieldsRegister.get(cacheId);
      if (!isProduction()) {
        assertSame(
          `Different definitions to the same field "${cacheId}"`,
          cached.plainField,
          plainField
        );
      }
      return cached;
    }

    // save reference for circular dependencies
    const fieldParsed = {} as ConvertFieldResult;
    fieldsRegister.set(cacheId, fieldParsed);

    const subTypeName = parseTypeName({
      field,
      fieldName,
      parentName,
    });

    const self = this;

    // @ts-ignore
    const create: {
      [T in FieldTypeName]: () => Omit<
        ConvertFieldResult,
        'typeName' | 'fieldName' | 'path' | 'plainField'
      >;
    } = {
      meta() {
        throw new Error('meta field');
      },
      null() {
        return {
          inputType: () => GraphQLNullType,
          type: () => GraphQLNullType,
        };
      },
      boolean() {
        return { inputType: () => GraphQLBoolean, type: () => GraphQLBoolean };
      },
      ID() {
        return { inputType: () => GraphQLID, type: () => GraphQLID };
      },
      undefined() {
        const create = wrapCreation(
          'Undefined',
          () => new GraphQLScalarType({ name: 'Undefined' })
        );
        return { inputType: create, type: create };
      },
      any() {
        const create = wrapCreation(
          'Any',
          () => new GraphQLScalarType({ name: 'Any' })
        );
        return { inputType: create, type: create };
      },
      cursor(): any {
        const cursor = field as CursorField;

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
        return { inputType: () => GraphQLString, type: () => GraphQLString };
      },
      enum() {
        function createEnum(options?: any) {
          const values: any = {};
          if (field.type !== 'enum') throw TypeAssertionError;

          field.def.forEach((key: string) => {
            values[key] = {
              value: key,
            };
          });

          return new GraphQLEnumType({
            ...options,
            name: subTypeName,
            values,
          });
        }

        return {
          inputType: wrapCreation(subTypeName, createEnum),
          type: wrapCreation(subTypeName, createEnum),
        };
      },
      float() {
        return { inputType: () => GraphQLFloat, type: () => GraphQLFloat };
      },
      int() {
        return { inputType: () => GraphQLInt, type: () => GraphQLInt };
      },
      string() {
        return { inputType: () => GraphQLString, type: () => GraphQLString };
      },
      ulid() {
        return {
          inputType: () => GraphQLUlidType,
          type: () => GraphQLUlidType,
        };
      },
      unknown() {
        return {
          inputType: () => GraphQLUnknownType,
          type: () => GraphQLUnknownType,
        };
      },
      object() {
        if (field.type !== 'object') throw TypeAssertionError;

        const id = parseTypeName({
          parentName,
          field,
          fieldName,
        });

        const def = ObjectType.is(field.def) ? field.def.definition : field.def;
        const object = ObjectType.getOrSet(id, def);

        const res = self.objectToGraphQL({
          object,
        });

        return { inputType: res.getInputType, type: res.getType };
      },
      union() {
        function createUnion(options?: any) {
          const union = field as UnionField<any, any>;

          return new GraphQLUnionType({
            ...options,
            name: subTypeName,
            types: union.utils.fieldTypes.map((field, index) => {
              if (!ObjectField.is(field)) {
                // also relevant: https://github.com/graphql/graphql-js/issues/207
                throw new RuntimeError(
                  `GraphQL union items must be objects: https://github.com/graphql/graphql-spec/issues/215`,
                  {
                    field,
                    path,
                  }
                );
              }

              let object = field.utils.object;

              if (!object.id) {
                object = object.clone().identify(`${subTypeName}_${index}`);
              }

              return object.graphqlType();
            }),
          });
        }

        return {
          inputType: () => {
            throw new RuntimeError(
              `GraphQL union items cannot be used as input: https://github.com/graphql/graphql-spec/issues/488`,
              { field: [...path, subTypeName].join(' > ') }
            );
          },
          type: wrapCreation(subTypeName, createUnion),
        };
      },

      record() {
        const recordName = parseTypeName({
          parentName,
          field,
          fieldName,
        });

        function createRecord(options: any) {
          return new GraphQLScalarType({
            ...options,

            name: recordName,

            serialize(value) {
              return field.parse(value);
            },

            parseValue(value) {
              return field.parse(value);
            },

            // to improve error message by record field
            // parseLiteral(ast) {
            //   if (ast.kind !== Kind.OBJECT) {
            //     throw new GraphQLError(
            //       `Query error: Can only parse object to Record but got a: ${ast.kind}`,
            //       [ast]
            //     );
            //   }
            //
            //   let result;
            //   try {
            //     result = field.parse(ast.kind);
            //   }catch (e){
            //           //     throw new GraphQLError('Query error: Invalid Record', [ast]);
            //   }
            //
            //   return result;
            // },
          });
        }

        return {
          inputType: wrapCreation(recordName, createRecord),
          type: wrapCreation(recordName, createRecord),
        };
      },

      literal() {
        if (!LiteralField.is(field)) throw new Error('ts');
        const { description, def } = field;

        const recordName = parseTypeName({
          parentName,
          field,
          fieldName,
        });

        function createLiteral(options: any) {
          return new GraphQLScalarType<'internal', 'external'>({
            ...options,

            name: recordName,

            description: JSON.stringify(
              description || `Literal value: ${def.value}`
            ),

            serialize(value: any) {
              return LiteralField.utils.deserialize({
                ...def,
                value,
              });
            },

            parseValue(value: any) {
              return LiteralField.utils.deserialize({
                ...def,
                value,
              });
            },
          });
        }

        return {
          inputType: wrapCreation(recordName, createLiteral),
          type: wrapCreation(recordName, createLiteral),
        };
      },
    };

    const result: ConvertFieldResult = {
      description,
      typeName,
      fieldName,
      plainField,
      type(...args) {
        let result = create[typeName]().type(...args);

        if (list) {
          result = new GraphQLList(result);
        }

        if (!optional) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },

      inputType(...args) {
        let result = create[typeName]().inputType(...args);

        if (list) {
          result = new GraphQLList(result);
        }

        if (!optional && field.defaultValue === undefined) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },
    };

    Object.assign(fieldParsed, result);

    return result;
  }
}

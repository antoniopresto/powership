import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { isProduction } from '@darch/utils/lib/env';
import { nonNullValues } from '@darch/utils/lib/invariant';
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLInputObjectType,
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
import { GraphQLInterfaceTypeConfig } from 'graphql/type/definition';

import { TAnyFieldType } from '../FieldType';
import { isSchema, Schema } from '../Schema';
import { assertSameDefinition, assertSameField } from '../assertSameDefinition';
import type { CursorField } from '../fields/CursorField';
import { SubSchemaField } from '../fields/SubSchema';
import type { UnionField } from '../fields/UnionField';
import { FieldTypeName } from '../fields/_fieldDefinitions';
import {
  FinalFieldDefinition,
  SchemaDefinitionInput,
} from '../fields/_parseFields';
import { parseTypeName } from '../parseTypeName';

import { GraphQLDateType } from './GraphQLDateType';
import { GraphQLNullType } from './GraphQLNullType';
import { GraphQLUlidType } from './GraphQLUlidType';
import { GraphQLUnknownType } from './GraphQLUnknownType';

export type ParseTypeOptions = Partial<GraphQLObjectTypeConfig<any, any>>;

export type ParseInterfaceOptions = Partial<
  GraphQLInterfaceTypeConfig<any, any>
>;

export interface GraphQLParserResult {
  typeToString(): string;
  inputToString(): string;
  getInputType: (options?: ParseTypeOptions) => GraphQLInputObjectType;
  getType: (options?: ParseTypeOptions) => GraphQLObjectType;
  interfaceType: (options?: ParseInterfaceOptions) => GraphQLInterfaceType;
  schema: Schema<any>;
}

export interface ConvertFieldResult {
  fieldName: string;
  typeName: string;
  inputType: (options?: ParseTypeOptions) => GraphQLInputType;
  type: (options?: ParseTypeOptions) => GraphQLOutputType;
  description?: string;
  plainField: FinalFieldDefinition;
}

const resultsCache = new StrictMap<string, GraphQLParserResult>();
const graphqlTypesRegister = new StrictMap<string, any>();
const fieldsRegister = new StrictMap<string, ConvertFieldResult>();

export class GraphQLParser {
  static resultsCache = resultsCache;
  static graphqlTypesRegister = graphqlTypesRegister;
  static fieldsRegister = fieldsRegister;

  static reset = () => {
    resultsCache.clear();
    graphqlTypesRegister.clear();
    fieldsRegister.clear();
  };

  static schemaToGraphQL<T extends SchemaDefinitionInput>(options: {
    schema: Schema<T>;
    path?: string[]; // family tree of a schema/field
  }): GraphQLParserResult {
    const { schema, path } = options;

    if (!isSchema(schema)) {
      throw new RuntimeError(`Invalid Schema.`, {
        schema,
      });
    }

    const { id: schemaId } = nonNullValues(
      { id: schema.id },
      'The provided schema should be identified before converting. ' +
        'You can use schema.identify("abc")'
    );

    const { implements: _implements } = schema.meta;

    if (resultsCache.has(schemaId)) {
      const cached = resultsCache.get(schemaId);
      if (!isProduction()) {
        assertSameDefinition(
          schemaId,
          cached.schema.definition,
          schema.definition
        );
      }
      return cached;
    }

    // save reference for circular dependencies
    const graphqlParsed = {} as GraphQLParserResult;
    resultsCache.set(schemaId, graphqlParsed);

    const helpers = schema.helpers();
    const builders: ConvertFieldResult[] = [];

    helpers.list.forEach(({ name: fieldName, instance, plainField }) => {
      builders.push(
        this.fieldToGraphQL({
          field: instance,
          parentName: schemaId,
          fieldName,
          path: path || [schemaId],
          plainField,
        })
      );
    });

    function getType(options: ParseTypeOptions = {}) {
      const { name = schemaId, interfaces } = options;

      const parents = _implements
        ? () =>
            _implements.map((parent) =>
              (
                Schema.register.get(parent) as Schema<any>
              ).graphqlInterfaceType()
            )
        : undefined;

      if (parents) {
        const original = interfaces;

        if (typeof original === 'function') {
          options.interfaces = function darchWrapped() {
            return [...original(), ...parents()];
          };
        } else if (Array.isArray(original)) {
          options.interfaces = function darchWrapped() {
            return [...original, ...parents()];
          };
        } else {
          options.interfaces = parents;
        }
      }

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      const fields = builders.reduce((acc, next) => {
        return {
          ...acc,
          [next.fieldName]: {
            type: next.type(),
            description: next.description,
          },
        };
      }, {});

      const result = new GraphQLObjectType({
        name,
        fields,
        ...options,
      });

      graphqlTypesRegister.set(name, result);

      return result;
    }

    function getInputType(options: ParseTypeOptions = {}) {
      const { name = `${schemaId}Input` } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      const inputFields = builders.reduce((acc, next) => {
        const type = next.inputType?.();
        if (!type) return acc;

        return {
          ...acc,
          [next.fieldName]: {
            type,
            description: next.description,
          },
        };
      }, {});

      const result = new GraphQLInputObjectType({
        name,
        fields: inputFields,
        ...(options as any),
      });

      graphqlTypesRegister.set(name, result);

      return result;
    }

    function interfaceType(options: ParseInterfaceOptions = {}) {
      const { name = `${schemaId}Interface` } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      const inputFields = builders.reduce((acc, next) => {
        const type = next.inputType?.();
        if (!type) return acc;

        return {
          ...acc,
          [next.fieldName]: {
            type,
            description: next.description,
          },
        };
      }, {});

      const result = new GraphQLInterfaceType({
        name,
        fields: inputFields,
        ...(options as any),
      });

      graphqlTypesRegister.set(name, result);

      return result;
    }

    function getSDL() {
      const result = getType();

      const schema = new GraphQLSchema({
        types: [result],
      });

      return printSchema(schema);
    }

    function getInputSDL() {
      const schema = new GraphQLSchema({
        types: [getInputType()],
      });

      return printSchema(schema);
    }

    const parsed: GraphQLParserResult = {
      getType,
      inputToString: getInputSDL,
      typeToString: getSDL,
      getInputType,
      interfaceType,
      schema,
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
        assertSameField(cacheId, cached.plainField, plainField);
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
        const res = new GraphQLScalarType({ name: 'Undefined' });
        return { inputType: () => res, type: () => res };
      },
      any() {
        const res = new GraphQLScalarType({ name: 'Any' });
        return { inputType: () => res, type: () => res };
      },
      cursor() {
        const cursor = field as CursorField;

        return {
          inputType: cursor.schema.graphqlInputType,
          type: cursor.schema.graphqlType,
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

        return { inputType: createEnum, type: createEnum };
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
      schema() {
        const id = parseTypeName({
          parentName,
          field,
          fieldName,
        });

        const schema = Schema.getOrSet(id, field.def);

        const res = self.schemaToGraphQL({
          schema,
        });

        return { inputType: res.getInputType, type: res.getType };
      },
      union() {
        function createUnion(options?: any) {
          const union = field as UnionField<any, any>;

          return new GraphQLUnionType({
            ...options,
            name: subTypeName,
            types: union.fieldTypes.map((field) => {
              if (!SubSchemaField.is(field)) {
                // also relevant: https://github.com/graphql/graphql-js/issues/207
                throw new RuntimeError(
                  `GraphQL union items must be objects: https://github.com/graphql/graphql-spec/issues/215`,
                  {
                    field,
                    path,
                  }
                );
              }

              return field.schema.graphqlType();
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
          type: createUnion,
        };
      },

      record() {
        function createRecord(options: any) {
          const recordName = parseTypeName({
            parentName,
            field,
            fieldName,
          });

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

        return { inputType: createRecord, type: createRecord };
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

        if (!optional) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },
    };

    Object.assign(fieldParsed, result);

    return result;
  }
}

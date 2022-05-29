import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { isProduction } from '@darch/utils/lib/env';
import { nonNullValues } from '@darch/utils/lib/invariant';
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
  printSchema,
} from 'graphql';

import { TAnyFieldType } from '../FieldType';
import { isSchema, Schema } from '../Schema';
import { assertSameDefinition } from '../assertSameDefinition';
import type { CursorField } from '../fields/CursorField';
import { SubSchemaField } from '../fields/SubSchema';
import type { UnionField } from '../fields/UnionField';
import { FieldTypeName } from '../fields/_fieldDefinitions';
import { SchemaDefinitionInput } from '../fields/_parseFields';
import { parseTypeName } from '../parseTypeName';

import { GraphQLDateType } from './GraphQLDateType';
import { GraphQLNullType } from './GraphQLNullType';
import { GraphQLUlidType } from './GraphQLUlidType';
import { GraphQLUnknownType } from './GraphQLUnknownType';

export type ParseTypeOptions = {
  name?: string;
};

export interface DarchGraphQLParserResult {
  typeToString(): string;
  inputToString(): string;
  getInputType: (options?: ParseTypeOptions) => GraphQLInputObjectType;
  getType: (options?: ParseTypeOptions) => GraphQLObjectType;
  schema: Schema<any>;
}

export interface ConvertFieldResult {
  fieldName: string;
  typeName: string;
  inputType: (() => GraphQLInputType | null) | null;
  type: () => GraphQLOutputType;
}

const resultsCache = new StrictMap<string, DarchGraphQLParserResult>();
const graphqlTypesRegister = new StrictMap<string, any>();

export class DarchGraphQLParser {
  static resultsCache = resultsCache;
  static graphqlTypesRegister = graphqlTypesRegister;

  static reset = () => {
    resultsCache.clear();
    graphqlTypesRegister.clear();
  };

  static parse<T extends SchemaDefinitionInput>(options: {
    schema: Schema<T>;
    path?: string[]; // family tree of a schema/field
  }): DarchGraphQLParserResult {
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
    const graphqlParsed = {} as DarchGraphQLParserResult;
    resultsCache.set(schemaId, graphqlParsed);

    const helpers = schema.helpers();
    const builders: ConvertFieldResult[] = [];

    helpers.list.forEach(({ name: fieldName, instance }) => {
      builders.push(
        this.convertField({
          field: instance,
          parentName: schemaId,
          fieldName,
          path: path || [schemaId],
        })
      );
    });

    function getType(options: ParseTypeOptions = {}) {
      const { name = schemaId } = options;

      if (graphqlTypesRegister.has(name)) {
        return graphqlTypesRegister.get(name);
      }

      const fields = builders.reduce((acc, next) => {
        return {
          ...acc,
          [next.fieldName]: {
            type: next.type(),
          },
        };
      }, {});

      const result = new GraphQLObjectType({
        name,
        fields,
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
        if (!type) return next;

        return {
          ...acc,
          [next.fieldName]: {
            type,
          },
        };
      }, {});

      const result = new GraphQLInputObjectType({
        name,
        fields: inputFields,
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

    const parsed: DarchGraphQLParserResult = {
      getType,
      inputToString: getInputSDL,
      typeToString: getSDL,
      getInputType,
      schema,
    };

    Object.assign(graphqlParsed, parsed);

    return graphqlParsed;
  }

  static convertField(options: {
    field: TAnyFieldType;
    parentName: string;
    fieldName: string;
    path: string[];
  }): ConvertFieldResult {
    const { field, fieldName, parentName } = options;
    const { list, optional, typeName } = field;

    const path = [...options.path, fieldName];

    const subTypeName = parseTypeName({
      field,
      fieldName,
      parentName,
    });

    const self = this;

    const create: {
      [T in FieldTypeName]: () => Omit<
        ConvertFieldResult,
        'typeName' | 'fieldName'
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
        function createEnum() {
          const values: any = {};

          field.def.forEach((key: string) => {
            values[key] = {
              value: key,
            };
          });

          return new GraphQLEnumType({
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

        const res = self.parse({
          schema,
        });

        return { inputType: res.getInputType, type: res.getType };
      },
      union() {
        function createUnion() {
          const union = field as UnionField<any, any>;

          return new GraphQLUnionType({
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

        return { inputType: null, type: createUnion };
      },

      record() {
        function createRecord() {
          const recordName = parseTypeName({
            parentName,
            field,
            fieldName,
          });

          return new GraphQLScalarType({
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

    return {
      typeName,
      fieldName,
      type() {
        let result = create[typeName]().type();

        if (list) {
          result = new GraphQLList(result);
        }

        if (!optional) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },

      inputType() {
        let result = create[typeName]().inputType?.();
        if (!result) return null;

        if (list) {
          result = new GraphQLList(result);
        }

        if (!optional) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },
    };
  }
}

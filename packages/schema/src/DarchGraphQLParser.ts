import {
  GraphQLDate,
  ObjectTypeComposer,
  schemaComposer,
} from 'graphql-compose';

import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { nonNullValues } from '@darch/utils/lib/invariant';

import { isSchema, parseSchemaField, Schema } from './Schema';

import { SchemaDefinitionInput } from './fields/_parseFields';
import { TAnyFieldType } from './FieldType';
import { parseTypeName } from './parseTypeName';

import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFieldConfigMap,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
  GraphQLString,
  GraphQLUnionType,
  isNonNullType,
  isObjectType,
} from 'graphql';

import type { UnionField } from './fields/UnionField';
import type { CursorField } from './fields/CursorField';

export interface DarchGraphQLParserResult {
  type: GraphQLObjectType;
  toSDL(): string;
  __otc(): ObjectTypeComposer;
}

export class DarchGraphQLParser {
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

    const { id: name } = nonNullValues(
      { id: schema.id },
      'The provided schema should be identified before converting. ' +
        'You can use schema.identify("abc")'
    );

    if (schema.__graphqlParsed) {
      return schema.__graphqlParsed;
    }

    schema.__graphqlParsed = {} as DarchGraphQLParserResult; // save reference for circular dependencies

    const fields: GraphQLFieldConfigMap<any, any> = {};

    const helpers = schema.helpers();

    helpers.list.forEach(({ name: fieldName, instance }) => {
      const graphqlField = this.convertField({
        field: instance,
        parentName: name,
        fieldName,
        path: path || [name],
      });

      fields[fieldName] = {
        type: graphqlField,
      };
    });

    const gqlType = new GraphQLObjectType({
      name,
      fields,
    });

    let otc: ObjectTypeComposer;

    function __otc() {
      return (otc = otc || schemaComposer.createObjectTC(gqlType));
    }

    function toSDL() {
      return __otc().toSDL();
    }

    Object.assign(schema.__graphqlParsed, {
      type: gqlType,
      toSDL,
      __otc,
    });

    return schema.__graphqlParsed;
  }

  static convertField(options: {
    field: TAnyFieldType;
    parentName: string;
    fieldName: string;
    path: string[];
  }): GraphQLOutputType {
    const { field, fieldName, parentName } = options;
    const { list, optional, typeName } = field;

    const path = [...options.path, fieldName];

    const subTypeName = parseTypeName({
      field,
      fieldName,
      parentName,
    });

    const self = this;

    let gqlType: GraphQLOutputType = {
      meta() {
        throw new Error('meta field');
      },
      null() {
        return new GraphQLScalarType({
          name: 'Null',
        });
      },
      boolean() {
        return GraphQLBoolean;
      },
      undefined() {
        return new GraphQLScalarType({ name: 'Undefined' });
      },
      any() {
        return new GraphQLScalarType({ name: 'Any' });
      },
      cursor() {
        const cursor = field as CursorField;
        return self.parse({
          schema: cursor.schema,
        }).type;
      },
      date() {
        return GraphQLDate;
      },
      email() {
        return GraphQLString;
      },
      enum() {
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
      },
      float() {
        return GraphQLFloat;
      },
      int() {
        return GraphQLInt;
      },
      string() {
        return GraphQLString;
      },
      ulid() {
        return new GraphQLScalarType({ name: 'Ulid' });
      },
      unknown() {
        return new GraphQLScalarType({ name: 'Unknown' });
      },
      schema() {
        const id = parseTypeName({
          parentName,
          field,
          fieldName,
        });

        const schema = Schema.getOrSet(id, field.def);

        return self.parse({
          schema,
        }).type;
      },
      union() {
        const union = field as UnionField<any, any>;

        return new GraphQLUnionType({
          name: subTypeName,
          types: () =>
            union.fieldTypes.map((field) => {
              let graphqlType = self.convertField({
                field: parseSchemaField(subTypeName, field, true),
                parentName: subTypeName,
                fieldName: fieldName,
                path,
              });

              if (isNonNullType(graphqlType)) {
                graphqlType = graphqlType.ofType;
              }

              if (!isObjectType(graphqlType)) {
                // also relevant: https://github.com/graphql/graphql-js/issues/207
                throw new RuntimeError(
                  `GraphQL union items must be objects: https://github.com/graphql/graphql-spec/issues/215`,
                  {
                    field,
                    graphqlType,
                    path,
                  }
                );
              }

              return graphqlType;
            }),
        });
      },
      record() {
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
      },
    }[typeName]();

    if (list) {
      gqlType = new GraphQLList(gqlType);
    }

    if (!optional) {
      gqlType = new GraphQLNonNull(gqlType);
    }

    return gqlType;
  }
}

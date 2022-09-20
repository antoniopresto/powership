import { assertEqual, DJSON } from '@darch/utils';
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
import {
  cleanMetaField,
  getObjectDefinitionMetaField,
} from '../fields/MetaFieldField';
import { ObjectField } from '../fields/ObjectField';
import { UnionField } from '../fields/UnionField';
import { FieldTypeName } from '../fields/_fieldDefinitions';
import { FinalFieldDefinition } from '../fields/_parseFields';
import { parseTypeName } from '../parseTypeName';

import { GraphQLDateType } from './GraphQLDateType';
import { GraphQLNullType } from './GraphQLNullType';
import { GraphQLUlidType } from './GraphQLUlidType';

export function createHooks() {
  return {
    onField: hooks.parallel<ConvertFieldResult, GraphQLFieldConfig<any, any>>(),
    onFieldConfigMap: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
    onFieldResult: hooks.parallel<ConvertFieldResult>(),
    willCreateObjectType: hooks.parallel<GraphQLFieldConfigMap<any, any>>(),
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

  static objectToGraphQL<T>(options: {
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
        // @ts-ignore
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
        fields?: ThunkObjMap<{ [K: string]: any; type: any }>;
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
            fieldName,
            parentName: objectId,
            path: path || [objectId],
            plainField,
          });

          hooks.onFieldResult.exec(field);

          builders.push(field);
        });

        const fieldsConfigMap = builders.reduce((acc, next) => {
          const field: GraphQLFieldConfig<any, any> = {
            description: next.description,
            type: getType(next) as any,
          };

          const origin =
            // @ts-ignore
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
      const options = { fields: {}, name: objectId, ..._options };
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
      object: object as any,
      typeToString: getSDL,
    };

    Object.assign(graphqlParsed, parsed);

    return graphqlParsed;
  }

  static fieldToGraphQL(options: {
    field: TAnyFieldType;
    fieldName: string;
    parentName: string;
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
      ID() {
        return { inputType: () => GraphQLID, type: () => GraphQLID };
      },
      any() {
        const create = wrapCreation(
          'Any',
          () => new GraphQLScalarType({ name: 'Any' })
        );
        return { inputType: create, type: create };
      },
      boolean() {
        return { inputType: () => GraphQLBoolean, type: () => GraphQLBoolean };
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
          assertEqual(field.type, 'enum');

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
      literal() {
        if (!LiteralField.is(field)) throw new Error('ts');
        const { description, def } = field;

        const recordName = parseTypeName({
          field,
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
          inputType: wrapCreation(recordName, createLiteral),
          type: wrapCreation(recordName, createLiteral),
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
        assertEqual(field.type, 'object');

        const id = parseTypeName({
          field,
          fieldName,
          parentName,
        });

        // @ts-ignore
        const def = ObjectType.is(field.def) ? field.def.definition : field.def;
        // @ts-ignore
        const object = ObjectType.getOrSet(id, def);

        const res = self.objectToGraphQL({
          object,
        });

        return { inputType: res.getInputType, type: res.getType };
      },
      record() {
        const recordName = parseTypeName({
          field,
          fieldName,
          parentName,
        });

        function createRecord(options: any) {
          return new GraphQLScalarType({
            ...options,

            name: recordName,

            parseValue(value) {
              return field.parse(value);
            },

            serialize(value) {
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
      string() {
        return { inputType: () => GraphQLString, type: () => GraphQLString };
      },
      ulid() {
        return {
          inputType: () => GraphQLUlidType,
          type: () => GraphQLUlidType,
        };
      },
      undefined() {
        const create = wrapCreation(
          'Undefined',
          () => new GraphQLScalarType({ name: 'Undefined' })
        );
        return { inputType: create, type: create };
      },

      union() {
        if (!UnionField.is(field)) throw field;
        let descriptions: string[] = [];

        // if all types are objects it can be used as normal GraphQL union
        // otherwise we need to create a scalar, since GraphQL only accepts unions of objects
        //    -  https://github.com/graphql/graphql-js/issues/207
        // GraphQL union items cannot be used as input, so we always use scalars for inputs:
        //    - https://github.com/graphql/graphql-spec/issues/488
        let areAllObjects = true;

        field.utils.fieldTypes.forEach((field) => {
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
            return field.parse(value);
          },
          serialize(value) {
            return field.parse(value);
          },
        });

        return {
          inputType: wrapCreation(subTypeName, () => {
            return scalarUnion;
          }),
          type: wrapCreation(subTypeName, (...options) => {
            if (!areAllObjects) return scalarUnion;

            return new GraphQLUnionType({
              name: subTypeName,
              ...options,
              types: field.utils.fieldTypes.map((field, index) => {
                if (!ObjectField.is(field)) throw field;
                let object: ObjectType<any> = field.utils.object;
                if (!object.id) {
                  object = object.clone().objectType(`${subTypeName}_${index}`);
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
        let result = create[typeName]().inputType(...args);

        if (list) {
          result = new GraphQLList(result);
        }

        if (!optional && field.defaultValue === undefined) {
          result = new GraphQLNonNull(result);
        }

        return result;
      },
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

      typeName,
    };

    Object.assign(fieldParsed, result);

    return result;
  }
}

export function describeField(field: FinalFieldDefinition) {
  if (field.alias) return field.alias;

  return DJSON.stringify(field, {
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

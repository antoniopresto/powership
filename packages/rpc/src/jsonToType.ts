import { FieldDefinition, FinalFieldDefinition } from '@powership/schema';
import { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';

export function jsonToType(json: JSONSchema7Definition): { [K: string]: FieldDefinition } {
  const $schema = getObject(json, (t) => t.$schema);
  const definitions = getObject(json, (t) => t.definitions);
  const type = getObject(json, (t) => t.type);
  const isObject = !type && $schema?.endsWith?.('/schema#') && !!definitions;

  if (!isObject) {
    throw new Error('jsonToType: received invalid json.');
  }

  const schema: { [K: string]: FieldDefinition } = Object.create(null);

  for (let fn in definitions) {
    const subSchema = definitions[fn];
    const { properties, required } = subSchema;

    for (let prop in properties) {
      const element = properties[prop];

      const field = parseField(element.type, element);

      if (field.type === 'object') {
        field.name = [prop].map((el) => el.slice(0, 1).toUpperCase() + el.slice(1)).join('');
      }

      if (!required?.includes(prop)) {
        field.optional = true;
      }

      if (element.description) {
        field.description = element.description;
      }

      schema[prop] = field;

      Object.defineProperties(schema[prop], {
        parent: {
          enumerable: false,
          get() {
            return properties;
          },
        },
        parentSchema: {
          enumerable: false,
          get() {
            return subSchema;
          },
        },
      });
    }
  }

  return schema;
}

function parseField<TN extends JSONSchema7TypeName>(
  typename: TN | TN[],
  definition: JSONSchema7
): FinalFieldDefinition {
  if (Array.isArray(typename)) {
    return { type: 'union', def: typename.map((el) => parseField(el, definition)) };
  }

  // TODO represent other schema fields (ID, alias, etc);

  switch (typename) {
    case 'null':
      return { type: 'null' };
    case 'boolean':
      return { type: 'boolean' };
    case 'object': {
      return { type: 'object', def: jsonToType(definition) };
    }
    case 'array': {
      const items = getObject(definition, (el) => el.items);
      if (!items || Array.isArray(items) || typeof items !== 'object') {
        throw new Error(`unexpected type for array.items ${items}`);
      }
      return { ...parseField(items.type, items), list: true };
    }
    case 'number': {
      return { type: 'float' };
    }
    case 'string': {
      return { type: 'string' };
    }
    case 'integer': {
      return { type: 'int' };
    }
    default: {
      throw new Error(`invalid type "${typename}"`);
    }
  }
}

function getObject<T, R>(value: T, get: (value: DeepNullableJSON7<T>) => R): R {
  if (!value || typeof value !== 'object') return undefined as any;
  return get(value as any);
}

export type DeepNullableJSON7<T> = T extends unknown
  ? T extends boolean
    ? never
    : [T] extends [object]
    ? Required<{ [K in keyof T]: T[K] extends unknown ? DeepNullableJSON7<T[K]> : never } & {}>
    : T
  : never;

// export function _jsonToType(
//   parentName: string,
//   json: JSONSchema7Definition
// ) {
//   let definition: Internal.FinalObjectDefinition;
//
//   if (Internal.isObjectType(object)) {
//     definition = object.definition as Internal.FinalObjectDefinition;
//   } else {
//     // @ts-ignore
//     definition = Internal.createObjectType(
//       object as Internal.ObjectDefinitionInput
//     ).definition;
//   }
//
//   const description = Internal.isObjectType(object)
//     ? object.description
//     : undefined;
//
//   const topProperties: Record<string, JSONSchema4> = {};
//   const required: string[] = [];
//
//   const topJSON: JSONSchema4 & { properties: JSONSchema4 } = {
//     additionalProperties: false,
//     properties: topProperties,
//     required,
//     title: parentName,
//     type: 'object',
//   };
//
//   if (description) {
//     topJSON.description = description;
//   }
//
//   const composers: ParsedField['composers'] = [];
//   getKeys(definition).forEach((fieldName) => {
//     if (Internal.isHiddenFieldName(fieldName)) return;
//     const field = definition[fieldName];
//     if (field.hidden) return;
//
//     const parsedField = parseGraphQLField({
//       field,
//       fieldName,
//       options,
//       parentName,
//     });
//
//     if (parsedField.required) {
//       required.push(fieldName);
//     }
//
//     topProperties[fieldName] = parsedField.jsonItem;
//
//     composers.push(...parsedField.composers);
//   });
//
//   composers.forEach((composer) => {
//     const value = composer.compose(topProperties);
//     setByPath(topProperties, composer.key, value);
//   });
//
//   return topJSON;
// }
//
// type ParsedField = {
//   composers: { compose: (parent: JSONSchema4) => JSONSchema4; key: string }[];
//   jsonItem: JSONSchema4;
//   required: boolean;
// };
//
// function parseGraphQLField(params: {
//   field: Internal.FinalFieldDefinition;
//   fieldName: string;
//   options: ObjectToJSONOptions;
//   parentName: string | null;
// }): ParsedField {
//   let { field, fieldName, parentName, options } = params;
//   field = Internal.parseField(field);
//   const { ignoreDefaultValues } = options;
//   let { type, list, optional, description, defaultValue } = field;
//   const composers: ParsedField['composers'] = [];
//
//   nonNullValues({ type });
//
//   let required = !optional && type !== 'undefined';
//
//   const jsonItem: JSONSchema4 = {
//     // title, // will generate extra types in typescript
//   };
//
//   if (ignoreDefaultValues) {
//     defaultValue = undefined;
//   }
//
//   if (defaultValue !== undefined) {
//     required = false;
//     jsonItem.default = defaultValue;
//   }
//
//   if (description) {
//     jsonItem.description = description;
//   }
//
//   if (type === 'array' || list) {
//     const parsedListItem = parseGraphQLField({
//       field:
//         type === 'array'
//           ? Internal.parseObjectField(fieldName, field.def.of)
//           : { ...field, list: false },
//       fieldName,
//       options,
//       parentName,
//     });
//
//     return {
//       composers,
//       jsonItem: {
//         items: parsedListItem.jsonItem,
//         type: 'array',
//       },
//       required: !optional,
//     };
//   }
//
//   const typeParsers: { [K in Internal.FieldTypeName]: () => any } = {
//     ID() {
//       jsonItem.type = 'string';
//       jsonItem.tsType = 'ID';
//     },
//     alias() {
//       const type = Internal.__getCachedFieldInstance(field);
//       Internal.AliasField.assert(type);
//
//       composers.push({
//         compose(parent) {
//           if (typeof type.def === 'string') {
//             return pick(parent, type.def) as any;
//           } else {
//             return parseGraphQLField({
//               field: type.utils.fieldType.asFinalFieldDef,
//               fieldName,
//               options,
//               parentName,
//             }).jsonItem;
//           }
//         },
//         key: fieldName,
//       });
//     },
//     any() {
//       jsonItem.type = 'any';
//     },
//     array() {
//       // handled above
//     },
//     boolean() {
//       jsonItem.type = 'boolean';
//     },
//     cursor() {
//       jsonItem.type = 'object';
//       jsonItem.tsType = 'Cursor';
//     },
//     date() {
//       jsonItem.type = 'string';
//       jsonItem.format = 'date-time';
//       jsonItem.tsType = 'Date';
//     },
//     email() {
//       jsonItem.type = 'string';
//       jsonItem.tsType = 'Email';
//     },
//     enum() {
//       const def = field.def as string[];
//       expectedType({ def }, 'array');
//
//       if (def.length == 1) {
//         jsonItem.const = def[0];
//       } else {
//         jsonItem.type = 'string';
//         jsonItem.enum = def;
//       }
//     },
//     float() {
//       jsonItem.type = 'number';
//     },
//     int() {
//       jsonItem.type = 'integer';
//     },
//     literal() {
//       if (!Internal.LiteralField.isFinalTypeDef(field)) throw 'err';
//       const parsed =
//         field.def['__o.proto__'] === 'String'
//           ? field.def.value
//           : BJSON.parse(field.def.value);
//
//       jsonItem.const = parsed;
//
//       const tsType = BJSON.stringify(parsed, {
//         handler: ({ serializer, value }) => {
//           const typeName = getTypeName(value);
//           if (['Object', 'Array'].includes(typeName)) return;
//           if (typeName === 'String') return JSON.stringify(value);
//           if (typeName === 'Number') return value;
//           return serializer?.formatter?.tsName(value) || typeName;
//         },
//         quoteValues: (str) => `${str}`,
//       });
//
//       jsonItem.tsType = tsType;
//     },
//     meta() {},
//     null() {
//       jsonItem.type = 'null';
//     },
//     object() {
//       const objectName = Internal.parseTypeName({
//         field,
//         fieldName: '',
//         parentName: parentName || '',
//       });
//
//       Object.assign(jsonItem, jsonToType(objectName, field.def, options), {
//         title: '',
//       });
//     },
//     phone() {
//       Object.assign(jsonItem, {
//         maxLength: 20,
//         minLength: 10,
//         pattern: Internal.E164_PHONE_REGEX.toString(),
//       });
//
//       jsonItem.tsType = 'Phone';
//     },
//     record() {
//       if (field.type !== 'record' || !field.def) {
//         throw new RuntimeError(`invalid record field definition.`, {
//           fieldDef: field,
//         });
//       }
//
//       jsonItem.type = 'object';
//     },
//     string() {
//       jsonItem.type = 'string';
//     },
//     ulid() {
//       jsonItem.type = 'string';
//       jsonItem.tsType = 'Ulid';
//     },
//     undefined() {
//       jsonItem.type = 'null';
//     },
//     union() {
//       const def = field.def as Internal.FinalFieldDefinition[];
//       expectedType({ def }, 'array');
//
//       jsonItem.anyOf = def.map((type) => {
//         return parseGraphQLField({
//           field: type,
//           fieldName,
//           options,
//           parentName,
//         }).jsonItem;
//       });
//     },
//     unknown() {
//       jsonItem.type = 'any';
//       jsonItem.tsType = 'unknown';
//     },
//   };
//
//   if (!typeParsers[type]) {
//     throw new RuntimeError(`invalid field type ${type}`, { field }, 0, 20);
//   }
//
//   typeParsers[type]();
//
//   return { composers, jsonItem, required };
// }

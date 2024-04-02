import { ObjectDefinitionInput } from '@powership/schema';
import type { JSONSchema7, JSONSchema7Definition } from 'json-schema';

export function jsonToType(json: JSONSchema7Definition) {
  const $schema = getObject(json, (t) => t.$schema);
  const definitions = getObject(json, (t) => t.definitions);
  const type = getObject(json, (t) => t.type);
  const isObject = !type && $schema?.endsWith?.('/schema#') && !!definitions;

  if (isObject) {
    const schema = {};

    for (let field in definitions) {
      const subSchema = definitions[field];
      const { properties, required } = subSchema;

      for (let prop in properties) {
        const element = properties[prop];
        schema[prop] = {
          type: element.type, // todo handle array
          name: prop,
          description: element.description,
          examples: element.examples,
          optional: !required?.includes(prop),
        };

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

  return json;
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

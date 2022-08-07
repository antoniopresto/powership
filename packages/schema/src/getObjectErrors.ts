import type { ObjectType } from './ObjectType';
import { isMetaField } from './fields/MetaFieldField';
import { isFieldTypeName, types } from './fields/fieldTypes';

export function validateObjectFields(params: {
  createObjectType: (def: any) => { getErrors: Function; parse: Function };
  parentType?: string;
  fieldName: string;
  definition: any;
  value: any;
}): {
  errors: string[];
  parsed?: any;
} {
  const { fieldName, definition, value, parentType, createObjectType } = params;

  if (isMetaField(definition, fieldName)) {
    return {
      errors: [],
    };
  }

  function prefixError(msg: string) {
    return parentType
      ? `• ${parentType}[${fieldName}] ${msg}`
      : `➤ field "${fieldName}": ${msg.replace(/\.$/, '')}.`;
  }

  if (value === undefined && !definition?.def?.autoCreate) {
    if (definition.optional) {
      return {
        errors: [],
      };
    } else {
      if (definition.type === 'union') {
        return {
          errors: [
            prefixError(
              `expected value to match one of the following types: ${definition.def
                .map((el) => el.type)
                .join(' or ')}`
            ),
          ],
        };
      }

      return {
        errors: [
          prefixError(`expected type ${definition.type}, found undefined`),
        ],
      };
    }
  }

  if (definition.list) {
    if (!Array.isArray(value)) {
      return {
        errors: [prefixError(`expected array, found ${typeof value}`)],
      };
    }

    const parsed: any[] = [];
    const errors: string[] = [];

    value.forEach(function (item, key) {
      const result = validateObjectFields({
        createObjectType: createObjectType,
        fieldName: key + '',
        parentType: fieldName,
        definition: {
          ...definition,
          list: false,
        },
        value: item,
      });
      parsed.push(result.parsed);
      errors.push(...result.errors);
    });

    return { parsed, errors };
  }

  if (definition.type === 'object') {
    const def = definition.def;

    if (typeof value !== 'object') {
      return {
        errors: [prefixError(`expected object, found ${typeof value}`)],
      };
    }

    const object: ObjectType<any> = createObjectType(def) as any;
    const result = object.safeParse(value);

    return {
      parsed: result.parsed,
      errors: result.errors.map((e) => prefixError(e)),
    };
  }

  try {
    if (!isFieldTypeName(definition.type)) {
      throw new Error(`${definition.type} is not a valid type`);
    }

    const Constructor = types[definition.type];
    const fieldInstance = Constructor.create(definition.def);
    return {
      parsed: fieldInstance.parse(value),
      errors: [],
    };
  } catch (e: any) {
    return {
      errors: [prefixError(`${e.message}`)],
    };
  }
}

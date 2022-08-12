import type { FinalFieldDefinition, ObjectType } from './ObjectType';
import { isMetaField } from './fields/MetaFieldField';
import { __getCachedFieldInstance } from './ObjectType';
import { getTypeName } from '@darch/utils';

export function validateObjectFields(params: {
  createObjectType: (def: any) => { getErrors: Function; parse: Function };
  parentType?: string;
  fieldName: string;
  definition: FinalFieldDefinition;
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
    const tn = getTypeName(value).toLowerCase();

    if (tn !== 'object') {
      return {
        errors: [prefixError(`expected object, found ${tn}`)],
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
    const field = __getCachedFieldInstance(definition);
    const parsed = field.parse(value);

    return {
      parsed,
      errors: [],
    };
  } catch (e: any) {
    return {
      errors: [prefixError(`${e.message}`)],
    };
  }
}

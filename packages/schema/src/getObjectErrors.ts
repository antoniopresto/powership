import type { FinalFieldDefinition } from './ObjectType';
import { __getCachedFieldInstance } from './ObjectType';
import { isMetaField } from './fields/MetaFieldField';

export function validateObjectFields(params: {
  definition: FinalFieldDefinition;
  fieldName: string;
  fieldParserOptions?: { excludeInvalidListItems?: boolean };
  parentType?: string;
  value: any;
}): {
  errors: string[];
  parsed?: any;
} {
  const { fieldName, definition, value, parentType, fieldParserOptions } =
    params;

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

  try {
    const field = __getCachedFieldInstance(definition);
    const parsed = field.parse(value, fieldParserOptions);

    return {
      errors: [],
      parsed,
    };
  } catch (e: any) {
    return {
      errors: [prefixError(`${e.message}`)],
    };
  }
}

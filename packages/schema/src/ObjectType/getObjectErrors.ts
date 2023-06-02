import { isMetaField } from '../fields/MetaFieldField';

import type { FinalFieldDefinition } from './ObjectType';
import { SchemaParser } from './SchemaParser';

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
    const field = SchemaParser.parse(definition);
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

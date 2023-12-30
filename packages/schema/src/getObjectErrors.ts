import * as Internal from './internal';

export function validateObjectFields(params: {
  definition: Internal.FinalFieldDefinition;
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

  if (Internal.isMetaField(definition, fieldName)) {
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
    const field = Internal.__getCachedFieldInstance(definition);
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

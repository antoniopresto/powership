import { FinalFieldDefinition } from './fields/_parseFields';

function validateObjectFields(params: {
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

  if (powership.isMetaField(definition, fieldName)) {
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
    const field = powership.__getCachedFieldInstance(definition);
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

Object.assign(powership, {
  validateObjectFields,
});

declare global {
  interface powership {
    validateObjectFields: typeof validateObjectFields;
  }
}

export {};

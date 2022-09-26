import { getTypeName } from '@backland/utils';

import {
  FieldParserOptionsObject,
  FieldTypeParser,
  parseValidationError,
} from '../applyValidator';

import { createFieldTypeError } from './FieldTypeErrors';
import { FieldDefinitions } from './_fieldDefinitions';

export function arrayFieldParse(config: {
  arrayOptions: Omit<FieldDefinitions['array'], 'of'>;
  input: any;
  parser: FieldTypeParser<any>;
  parserOptions: FieldParserOptionsObject;
}) {
  const { parser, parserOptions, input, arrayOptions } = config;

  if (!input || !Array.isArray(input)) {
    throw createFieldTypeError(
      'unexpectedType',
      `expected Array, found ${getTypeName(input)}`
    );
  }

  const { excludeInvalidListItems, customMessage } = parserOptions;

  const { min, length, max } = arrayOptions;

  const found = input.length;

  if (min !== undefined && found < min) {
    throw createFieldTypeError('minSize', {
      expected: { min },
      found,
    });
  }

  if (max !== undefined && found > max) {
    throw createFieldTypeError('maxSize', {
      expected: { max },
      found,
    });
  }

  if (length !== undefined && found !== length) {
    throw createFieldTypeError('sizeMismatch', {
      expected: { length },
      found,
    });
  }

  const values: any = [];

  input.forEach((item, key) => {
    try {
      const parsed = parser(item);
      values.push(parsed);
    } catch (originalError: any) {
      if (excludeInvalidListItems) {
        return;
      }

      const error = parseValidationError(item, customMessage, originalError);

      error.message = `${error.message} at position ${key}`;
      throw error;
    }
  });

  return values;
}

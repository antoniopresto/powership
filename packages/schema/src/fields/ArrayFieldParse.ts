import { getTypeName } from '@powership/utils';

import {
  FieldParserOptionsObject,
  FieldTypeParser,
  parseValidationError,
} from '../applyValidator';

import { FieldTypeError } from './FieldTypeErrors';
import { FieldDefinitions } from './_fieldDefinitions';

export function arrayFieldParse(config: {
  arrayOptions: Omit<FieldDefinitions['array'], 'of'>;
  input: any;
  parser: FieldTypeParser<any>;
  parserOptions: FieldParserOptionsObject;
}) {
  const { parser, parserOptions, input, arrayOptions } = config;

  if (!input || !Array.isArray(input)) {
    throw new FieldTypeError(
      'unexpectedType',
      `expected Array, found ${getTypeName(input)}`
    );
  }

  const { excludeInvalidListItems, customMessage } = parserOptions;

  const { min, length, max } = arrayOptions;

  const found = input.length;

  if (min !== undefined && found < min) {
    throw new FieldTypeError(
      'minSize',
      `expected min ${min}, found: ${found}.`
    );
  }

  if (max !== undefined && found > max) {
    throw new FieldTypeError(
      'maxSize',
      `expected max ${max}, found: ${found}.`
    );
  }

  if (length !== undefined && found !== length) {
    throw new FieldTypeError(
      'sizeMismatch',
      `expected length ${length}, found ${found}.`
    );
  }

  const values: any = [];

  input.forEach((item, key) => {
    try {
      const parsed = parser(item, parserOptions);
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

import { symbols } from '@powership/utils';
import { ArrayFieldDef } from './ArrayField';
import {
  FieldParserOptionsObject,
  FieldTypeParser,
  parseValidationError,
  ValidationError,
  ValidatorPathSegment,
} from '../validator';

export function arrayFieldParse(config: {
  arrayOptions: Omit<ArrayFieldDef, 'of'>;
  input: any;
  parser: FieldTypeParser<any>;
  parserOptions: FieldParserOptionsObject & { path?: ValidatorPathSegment[] };
}) {
  const { parser, parserOptions, input, arrayOptions } = config;
  const { path = [] } = parserOptions;

  if (!Array.isArray(input)) {
    throw new ValidationError([
      {
        path,
        value: input,
        message: `Expected Array, received ${typeof input}`,
        symbol: symbols.type_mismatch,
      },
    ]);
  }

  const { min, length, max } = arrayOptions;
  const found = input.length;

  if (min !== undefined && found < min) {
    throw new ValidationError([
      {
        path,
        value: input,
        message: `Array must contain at least ${min} items, found ${found}`,
        symbol: symbols.array_too_short,
      },
    ]);
  }

  if (max !== undefined && found > max) {
    throw new ValidationError([
      {
        path,
        value: input,
        message: `Array must contain at most ${max} items, found ${found}`,
        symbol: symbols.array_too_long,
      },
    ]);
  }

  if (length !== undefined && found !== length) {
    throw new ValidationError([
      {
        path,
        value: input,
        message: `Array must contain exactly ${length} items, found ${found}`,
        symbol: symbols.array_invalid_item,
      },
    ]);
  }

  const values: any = [];
  const errors: ValidationError[] = [];

  input.forEach((item, index) => {
    const itemPath = [...path, index];

    try {
      const parsed = parser(item, {
        ...parserOptions,
        path: itemPath,
      });
      values.push(parsed);
    } catch (error: any) {
      if (parserOptions.excludeInvalidListItems) {
        return;
      }

      if (ValidationError.is(error)) {
        errors.push(error);
        return;
      }

      errors.push(
        parseValidationError(item, parserOptions.customMessage, error, itemPath)
      );
    }
  });

  if (errors.length) {
    throw new ValidationError(errors.flatMap((error) => error.errors));
  }

  return values;
}

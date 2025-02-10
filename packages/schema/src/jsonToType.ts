import {
  customError,
  EmailRegex,
  entries,
  getTypeName,
  IndexCursor,
  inspectObject,
  isPlainObject,
  joinPathsCamelCase,
  memoize,
  stringCase,
  watchable,
} from '@powership/utils';

import type { Infer } from './Infer';
import { FieldTypeName } from './fields/_fieldDefinitions';
import type {
  FinalFieldDefinition,
  FinalObjectDefinition,
  FlattenFieldDefinition,
} from './fields/_parseFields';
import {
  create,
  createObjectType,
  createType,
  GraphType,
  ULID_REGEX,
} from './types';

export const JSONFieldCase = Object.keys(stringCase).concat('camelCase') as (
  | keyof typeof stringCase
  | 'camelCase'
)[];

export const JSONToSchemaOptions = watchable(() => {
  return createObjectType({
    fieldCase: { enum: JSONFieldCase, optional: true },
    examples: 'boolean?',
    name: 'string?',
    json: { record: { type: 'any', keyType: 'string' } },
  });
});

export type JSONToSchemaOptions = Infer<ReturnType<typeof JSONToSchemaOptions>>;

export function jsonToType(
  init: JSONToSchemaOptions
): GraphType<{ object: { $string: 'unknown' } }> {
  const { name } = init;

  const definition = valueToTypeDef({ ...init, value: init.json });
  const type = createType(definition);

  if (name) {
    type.identify(name);
  }

  return type as any;
}

export function jsonToSchemaDefinition(options: JSONToSchemaOptions): {
  [K: string]: FinalFieldDefinition;
} {
  const res = valueToTypeDef({ ...options, value: options.json });

  if ('object' in res && typeof res.object === 'object') {
    return res.object as FinalObjectDefinition;
  }

  throw customError({
    message: 'Invalid field',
    details: res,
    stackFrom: jsonToSchemaDefinition,
  });
}

export function isCursorString(value: any): value is string {
  if (!value || typeof value !== 'string') return false;
  try {
    IndexCursor.parse(value, { destination: 'document' });
    return true;
  } catch (e) {
    return false;
  }
}

const phoneType = memoize(() => create.phone({}));

export const valuesToPowershipTypeRecord: {
  [L in FieldTypeName]: (value: any) => boolean;
} = {
  null: (value) => value === null,
  undefined: (value) => value === undefined,
  string: (value) => typeof value === 'string',
  boolean: (value) => typeof value === 'boolean',
  float: (value) =>
    getTypeName(value) === 'Number' && !!`${value}`.match(/^\d*\.\d*$/),
  int: (value) =>
    getTypeName(value) === 'Number' && !!`${value}`.match(/^\d*$/),
  array: Array.isArray,
  object: (value) => isPlainObject(value),
  cursor: isCursorString,
  date: (value) => getTypeName(value) === 'Date',
  email: (value) =>
    Boolean(value && typeof value === 'string' && EmailRegex.test(value)),
  ID: (value) => !!value && typeof value === 'string' && ULID_REGEX.test(value),
  phone: (value) => phoneType().is(value),
  record: (value) =>
    !!value && typeof value === 'object' && !isPlainObject(value),
  ulid: (value) => typeof value === 'string' && ULID_REGEX.test(value),
  union: () => false,
  unknown: () => false,
  alias: () => false,
  any: () => false,
  literal: () => false,
  meta: () => false,
  enum: () => false,
};

export const powershipValueTypeCheckEntries = entries(
  valuesToPowershipTypeRecord
);

export function valueToTypeDef(
  options: Omit<JSONToSchemaOptions, 'json'> & { value: any }
): FlattenFieldDefinition {
  const { fieldCase = 'keep', examples, value } = options;

  const typename: FieldTypeName = (function iifeTypename() {
    return (
      powershipValueTypeCheckEntries.find(([, check]) => {
        return check(value);
      })?.[0] || 'unknown'
    );
  })();

  const field: FlattenFieldDefinition = {
    [typename]: {} as any,
  } as any;

  if (examples && typename !== 'object') {
    field.description = `Eg: ${inspectObject(value).trim()}`;
  }

  if ('array' in field) {
    const child = (value as any[]).map((el) => {
      return valueToTypeDef({ ...options, value: el });
    });
    field.array.of = (function iife() {
      if (!child.length) return 'unknown';
      return child.length === 1 ? child[0] : { union: child };
    })();
  }

  if (typename === 'object') {
    field[typename] = entries(value).reduce((acc, [key, subValue]) => {
      if (fieldCase) {
        if (fieldCase === 'camelCase') {
          key = joinPathsCamelCase(key);
        } else {
          key = stringCase[fieldCase](key);
        }
      }

      return {
        ...acc,
        [key]: valueToTypeDef({ ...options, value: subValue }),
      };
    }, {});
  }

  return field;
}

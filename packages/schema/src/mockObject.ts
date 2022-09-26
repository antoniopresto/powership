// Converts a schema to a placeholder object
import {
  randomFloat,
  randomInt,
  randomItem,
  randomName,
  slugify,
  ulid,
} from '@backland/utils';

import { Infer } from './Infer';
import { CursorField } from './fields/CursorField';
import { LiteralField } from './fields/LitarealField';
import { createEmptyMetaField, isMetaFieldKey } from './fields/MetaFieldField';
import { FieldTypeName } from './fields/_fieldDefinitions';
import { FinalFieldDefinition } from './fields/_parseFields';

export type ObjectMockOptions = {
  maxArrayLength?: number;
  randomNumber?: () => number;
  randomText?: () => string;
};

export function objectMock<T extends { [K: string]: FinalFieldDefinition }>(
  definition: T,
  options?: ObjectMockOptions
): Infer<T> {
  const placeHolder: any = {};

  Object.entries(definition).forEach(([key, def]) => {
    if (isMetaFieldKey(key)) return;
    placeHolder[key] = fieldToMock(def, options);
  });

  return placeHolder;
}

export function fieldToMock(
  parsedField: FinalFieldDefinition,
  options?: ObjectMockOptions
): any {
  const {
    randomText = randomName,
    maxArrayLength = 1,
    randomNumber,
  } = options || {};

  let { list, def, type } = parsedField;

  if (type === 'array') {
    // FIXME min, max, exact, def.def can be a string, etc
    return fieldToMock({ ...def, list: true }, options);
  }

  const values: { [L in FieldTypeName]: () => unknown } = {
    ID: () => ulid(),
    any: () => '_ANY_',
    array: () => undefined, // handled below,
    boolean: () => randomItem(true, false),
    cursor: () => objectMock(CursorField.object().definition, options),
    date: () => new Date(randomInt(Date.now())),
    email: () => {
      return `${slugify(randomText().toLowerCase())}@${slugify(
        randomText().toLowerCase()
      )}.${randomItem('.com', '.net', '.com.br', '.co', '.sh')}`;
    },
    enum: () => (Array.isArray(def) ? def[0] : undefined),
    float: () => (randomNumber || randomFloat)(),
    int: () => (randomNumber || randomInt)(),
    literal: () => LiteralField.utils.deserialize(def),
    meta: () => createEmptyMetaField(),
    null: () => null,
    object: () => (def ? objectMock(def, options) : undefined),
    record: () => ({ [randomText()]: 123 }),
    string: () => randomText(),
    ulid: () => ulid(),
    undefined: () => undefined,
    union: () => (Array.isArray(def) ? fieldToMock(def[0]) : undefined),
    unknown: () => Date,
  };

  if (list) {
    return [
      ...Array(randomInt(Math.min(3, maxArrayLength), maxArrayLength)),
    ].map(() => {
      return values[type]();
    });
  }

  return values[type]();
}

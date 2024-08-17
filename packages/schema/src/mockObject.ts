// Converts a schema to a placeholder object
import {
  randomInt,
  randomItem,
  randomName,
  setByPath,
  slugify,
  ulid,
} from '@powership/utils';

import { Infer } from './Infer';
import type { FieldComposer } from './fields/FieldType';
import type { FieldTypeName } from './fields/_fieldDefinitions';
import type { FieldInput } from './fields/_parseFields';

export type ObjectMockOptions = {
  maxArrayLength?: number;
  randomNumber?: () => number;
  randomText?: () => string;
};

export function objectMock<T extends { [K: string]: FieldInput }>(
  definition: T,
  options?: ObjectMockOptions
): Infer<{ object: T }> {
  const placeHolder: any = {};

  const composers: { composer: FieldComposer; key: string }[] = [];
  Object.entries(definition).forEach(([key, fieldInput]) => {
    if (powership.isMetaFieldKey(key)) return;
    const def = powership.parseObjectField(key, fieldInput);

    if (def.type === 'alias') {
      const instance = powership.__getCachedFieldInstance(def);
      composers.push({ composer: instance.composer!, key });
    }
    placeHolder[key] = fieldToMock(def, options);
  });

  composers.forEach((el) => {
    setByPath(placeHolder, el.key, el.composer.compose(placeHolder));
  });

  return placeHolder;
}

export function fieldToMock(
  fieldInput: FieldInput,
  options?: ObjectMockOptions
): any {
  const {
    randomText = randomName,
    maxArrayLength = 1,
    randomNumber,
  } = options || {};

  let { list, def, type } = powership.parseObjectField('temp', fieldInput);

  if (type === 'array') {
    const min = def.min === undefined ? 1 : def.min;
    const max = def.max === undefined ? Math.max(min, 1) : def.max;
    const length = Math.min(min, max);

    return [...Array(length)].map(() => {
      return fieldToMock(def.of, options);
    });
  }

  const values: { [L in FieldTypeName]: () => unknown } = {
    ID: () => ulid(),
    alias: () => undefined,
    any: () => '_ANY_',
    array: () => undefined,
    // handled below,
    boolean: () => randomItem(true, false),
    cursor: () =>
      objectMock(powership.CursorField.object().definition, options),
    date: () => new Date(randomInt(Date.now())),
    email: () => {
      return `${slugify(randomText().toLowerCase())}@${slugify(
        randomText().toLowerCase()
      )}${randomItem('.com', '.net', '.com.br', '.co', '.sh')}`;
    },
    enum: () => (Array.isArray(def) ? def[0] : undefined),
    float: () => (randomNumber || randomInt)(),
    int: () => (randomNumber || randomInt)(),
    literal: () => powership.LiteralField.utils.deserialize(def),
    meta: () => powership.createEmptyMetaField(),
    null: () => null,
    object: () => (def ? objectMock(def, options) : undefined),
    phone: () => '+5511912345678',
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

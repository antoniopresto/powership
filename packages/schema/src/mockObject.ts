// Converts a schema to a placeholder object
import {
  randomFloat,
  randomInt,
  randomItem,
  randomName,
  slugify,
  ulid,
} from '@darch/utils';

import { Infer } from './Infer';
import { CursorField } from './fields/CursorField';
import { LiteralField } from './fields/LitarealField';
import { createEmptyMetaField, isMetaFieldKey } from './fields/MetaFieldField';
import { FieldTypeName } from './fields/_fieldDefinitions';
import { FinalFieldDefinition } from './fields/_parseFields';

export function objectMock<T extends { [K: string]: FinalFieldDefinition }>(
  definition: T,
  options?: { randomText?: () => string }
): Infer<T> {
  const { randomText = randomName } = options || {};
  const placeHolder: any = {};

  function fieldToMock(parsedField: FinalFieldDefinition): any {
    const { list, def, type } = parsedField;

    const values: { [L in FieldTypeName]: () => unknown } = {
      any: () => ({ ANY: 'YES' }),
      int: () => randomInt(),
      object: () => (def ? objectMock(def, options) : undefined),
      string: () => randomText(),
      boolean: () => randomItem(true, false),
      unknown: () => Date,
      record: () => ({ [randomText()]: 123 }),
      float: () => randomFloat(),
      undefined: () => undefined,
      cursor: () => objectMock(CursorField.object().definition, options),
      date: () => new Date(randomInt(Date.now())),
      email: () => {
        return `${slugify(randomText().toLowerCase())}@${slugify(
          randomText().toLowerCase()
        )}.${randomItem('.com', '.net', '.com.br', '.co', '.sh')}`;
      },
      enum: () => (Array.isArray(def) ? def[0] : undefined),
      ulid: () => ulid(),
      union: () => (Array.isArray(def) ? fieldToMock(def[0]) : undefined),
      ID: () => ulid(),
      literal: () => LiteralField.utils.deserialize(def),
      null: () => null,
      meta: () => createEmptyMetaField(),
    };

    if (list) {
      return [...Array(randomInt(3, 5))].map(() => {
        return values[type]();
      });
    }

    return values[type]();
  }

  Object.entries(definition).forEach(([key, def]) => {
    if (isMetaFieldKey(key)) return;
    placeHolder[key] = fieldToMock(def);
  });

  return placeHolder;
}
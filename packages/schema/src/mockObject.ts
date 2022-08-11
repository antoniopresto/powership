// Converts a schema to a placeholder object
import { createEmptyMetaField, isMetaFieldKey } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';
import { ulid, slugify, randomNumber, randomItem } from '@darch/utils';
import { Infer } from './Infer';
import { CursorField } from './fields/CursorField';
import { FieldTypeName } from './fields/_fieldDefinitions';

export function schemaToMockPlaceholder<
  T extends { [K: string]: FinalFieldDefinition }
>(definition: T, options?: { randomText?: () => string }): Infer<T> {
  const { randomText = randomName } = options || {};
  const placeHolder: any = {};

  function fieldToMock(parsedField: FinalFieldDefinition): any {
    const { list, def, optional, type } = parsedField;

    if (optional) return undefined;

    const values: { [L in FieldTypeName]: () => unknown } = {
      any: () => ({ ANY: 'YES' }),
      int: () => 1,
      object: () => (def ? schemaToMockPlaceholder(def, options) : undefined),
      string: () => randomText(),
      boolean: () => true,
      unknown: () => Date,
      record: () => ({ [randomText()]: 123 }),
      float: () => randomNumber(),
      undefined: () => undefined,
      cursor: () => schemaToMockPlaceholder(CursorField.object().definition, options),
      date: () => new Date(randomNumber(Date.now())),
      email: () => `${slugify(randomText())}@${slugify(randomText())}.com`,
      enum: () => (Array.isArray(def) ? def[0] : undefined),
      ulid: () => ulid(),
      union: () => (Array.isArray(def) ? fieldToMock(def[0]) : undefined),
      ID: () => 1,
      literal: () => randomText(),
      null: () => null,
      meta: () => createEmptyMetaField(),
    };

    const val = values[type]();

    if (list) return [val];
    return val;
  }

  Object.entries(definition).forEach(([key, def]) => {
    if (isMetaFieldKey(key)) return;
    placeHolder[key] = fieldToMock(def);
  });

  return placeHolder;
}

export const objectToMock = schemaToMockPlaceholder;
export const schemaToMock = schemaToMockPlaceholder;

const names = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Minas Gerais',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Pará',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Paraná',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Roraima',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins',
  'Rafaela',
  'Antonio',
  'Maggie',
  'Cacau',
];

function randomName() {
  return randomItem(names);
}

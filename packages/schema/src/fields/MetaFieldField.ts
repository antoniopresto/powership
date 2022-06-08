// MetaField is a special field type used to add metadata to an object

import { expectedType } from '@darch/utils/lib/expectedType';
import { nonNullValues } from '@darch/utils/lib/invariant';

import { FieldType, FieldTypeParser } from './FieldType';

export type Serializable = null | undefined | Stringifiable | SerializableList;

interface Stringifiable {
  toString(): string;
}

interface SerializableList extends Array<Serializable> {}

export type MetaFieldDef = {
  id: string | null;
  description?: string;
  implements?: string[];
  [K: string]: Serializable;
};

export class MetaField extends FieldType<MetaField, 'meta', MetaFieldDef> {
  get asFinalField(): { type: 'meta'; def: MetaFieldDef } {
    return { type: 'meta', def: this.def };
  }

  parse: FieldTypeParser<MetaField>;

  constructor(def: MetaFieldDef = { id: null }) {
    super('meta', def);
    this.toOptional();
    const { id, description } = def;

    expectedType({ id }, ['string', 'null']);
    expectedType({ description }, ['string'], true);

    this.parse = this.applyParser({
      parse: (input: MetaField) => {
        expectedType({ value: input?.['id'] }, 'string');
        expectedType({ value: input?.['description'] }, 'string', true);

        return input;
      },
    });
  }

  static create = (def: MetaFieldDef = { id: null }): MetaField => {
    return new MetaField(def);
  };

  toString = () => `${this.typeName}(${this.def?.id || ''})`;
}

export const objectMetaFieldKey = '__dschm__';

export function isMetaFieldKey(t: any): t is typeof objectMetaFieldKey {
  return t === objectMetaFieldKey;
}

export function isMetaField(
  t: any,
  fieldName?: string
): t is MetaField['asFinalField'] {
  if (fieldName && fieldName !== objectMetaFieldKey) return false;
  return (
    t && typeof t === 'object' && t.type === 'meta' && typeof t.def === 'object'
  );
}

export function getObjectDefinitionMetaField(
  input: Record<string, any>
): MetaField['asFinalField'] | undefined {
  return input[objectMetaFieldKey];
}

export function getObjectDefinitionId(definition: Record<string, any>): string {
  return nonNullValues(
    {
      id: getObjectDefinitionMetaField(definition)?.def?.id,
    },
    'Object not identified.'
  ).id;
}

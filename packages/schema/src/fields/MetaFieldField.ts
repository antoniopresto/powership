// MetaField is a special field type used to add metadata to a schema

import { expectedType } from '@darch/utils/lib/expectedType';
import { nonNullValues } from '@darch/utils/lib/invariant';

import { FieldType, FieldTypeParser } from '../FieldType';

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

  graphql = () => 'Meta';

  toString = () => `${this.typeName}(${this.def?.id || ''})`;
}

export const schemaMetaFieldKey = '__dschm__';

export function isMetaFieldKey(t: any): t is typeof schemaMetaFieldKey {
  return t === schemaMetaFieldKey;
}

export function isMetaField(
  t: any,
  fieldName?: string
): t is MetaField['asFinalField'] {
  if (fieldName && fieldName !== schemaMetaFieldKey) return false;
  return (
    t && typeof t === 'object' && t.type === 'meta' && typeof t.def === 'object'
  );
}

export function getSchemaDefinitionMetaField(
  input: Record<string, any>
): MetaField['asFinalField'] | undefined {
  return input[schemaMetaFieldKey];
}

export function getSchemaDefinitionId(definition: Record<string, any>): string {
  return nonNullValues(
    {
      id: getSchemaDefinitionMetaField(definition)?.def?.id,
    },
    'Schema not identified.'
  ).id;
}

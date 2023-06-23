// MetaField is a special field type used to add metadata to an object

import { expectedType } from '@powership/utils';
import { getTypeName } from '@powership/utils';
import { nonNullValues } from '@powership/utils';
import { Serializable } from '@powership/utils';

import { CustomFieldConfig } from '../CustomFieldConfig';

import { FieldType, FieldTypeParser } from './FieldType';

export type MetaFieldDef = {
  [K: string]: Serializable;
  description?: string;
  id: string | null;
  implements?: string[];
  custom?: CustomFieldConfig;
};

export class MetaField extends FieldType<MetaField, 'meta', MetaFieldDef> {
  parse: FieldTypeParser<MetaField>;

  constructor(def: MetaFieldDef = { id: null }) {
    super({ def: def, name: 'meta' });
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

export function createEmptyMetaField(): MetaField['asFinalFieldDef'] {
  return {
    def: { id: null },
    defaultValue: undefined,
    type: 'meta',
  };
}

export function cleanMetaField(input: any) {
  if (!input || typeof input !== 'object') return input;

  const defType = getTypeName(input.def).toLowerCase();

  if (defType === 'object') {
    const { __dschm__, ...def } = input.def;
    return {
      ...input,
      def,
    };
  }

  if (input[objectMetaFieldKey]) {
    const { __dschm__, ...rest } = input;
    return rest;
  }

  return input;
}

export function isMetaFieldKey(t: any): t is typeof objectMetaFieldKey {
  return t === objectMetaFieldKey;
}

export function isMetaField(
  t: any,
  fieldName?: string
): t is MetaField['asFinalFieldDef'] {
  if (fieldName && fieldName !== objectMetaFieldKey) return false;
  return (
    t && typeof t === 'object' && t.type === 'meta' && typeof t.def === 'object'
  );
}

export function getObjectDefinitionMetaField(
  input: Record<string, any>
): MetaField['asFinalFieldDef'] | undefined {
  return input[objectMetaFieldKey];
}

export function getObjectDefinitionId(
  definition: Record<string, any>,
  nullable: true
): string | undefined;

export function getObjectDefinitionId(definition: Record<string, any>): string;

export function getObjectDefinitionId(
  definition: Record<string, any> = {},
  nullable = false
) {
  const id = getObjectDefinitionMetaField(definition)?.def?.id;

  if (nullable) return id || undefined;

  return nonNullValues(
    {
      id,
    },
    'Object not identified.'
  ).id;
}

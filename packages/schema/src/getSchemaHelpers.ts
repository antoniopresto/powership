import { getKeys } from '@darch/utils/lib/getKeys';

import { TAnyFieldType } from './FieldType';
import type { Schema } from './Schema';
import { isMetaFieldKey, MetaFieldDef } from './fields/MetaFieldField';
import {
  FinalFieldDefinition,
  SchemaDefinitionInput,
} from './fields/_parseFields';
import { __getCachedFieldInstance } from './parseSchemaDefinition';

export type SchemaFieldListItem<T extends SchemaDefinitionInput> = {
  instance: TAnyFieldType;
  name: Extract<keyof T, string>;
  plainField: FinalFieldDefinition;
};

export type SchemaHelpers<T extends SchemaDefinitionInput> = {
  list: SchemaFieldListItem<T>[];
  meta: MetaFieldDef | undefined;
  keys: Extract<keyof T, string>[];
};

export function getSchemaHelpers<T extends SchemaDefinitionInput>(
  schema: Schema<T>
): SchemaHelpers<T> {
  const list: SchemaFieldListItem<T>[] = [];
  const definition = schema.definition;
  const keys = getKeys(schema.definition);
  let meta: MetaFieldDef | undefined;

  keys.forEach((fieldName) => {
    const field = definition[fieldName];

    if (isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = __getCachedFieldInstance(field);

    list.push({
      name: fieldName,
      instance,
      plainField: field,
    });
  });

  return {
    list,
    meta,
    keys,
  };
}

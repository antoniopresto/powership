import { isMetaFieldKey, MetaFieldDef } from './fields/MetaFieldField';
import { __getCachedFieldInstance } from './parseSchemaDefinition';
import type { Schema } from './Schema';
import { TAnyFieldType } from './FieldType';
import { SchemaDefinitionInput } from './fields/_parseFields';
import { getKeys } from '@darch/utils/lib/getKeys';

export type SchemaFieldListItem<T extends SchemaDefinitionInput> = {
  instance: TAnyFieldType;
  name: Extract<keyof T, string>;
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
    });
  });

  return {
    list,
    meta,
    keys,
  };
}

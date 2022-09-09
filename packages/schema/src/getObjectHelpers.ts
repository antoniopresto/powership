import { getKeys } from '@brabo/utils/lib/getKeys';

import type { FinalFieldDefinition, ObjectType } from './ObjectType';
import { AnyField } from './fields/AnyField';
import { isMetaFieldKey, MetaFieldDef } from './fields/MetaFieldField';
import { ObjectDefinitionInput } from './fields/_parseFields';
import { __getCachedFieldInstance } from './parseObjectDefinition';

export type ObjectFieldListItem<T extends ObjectDefinitionInput> = {
  instance: AnyField;
  name: Extract<keyof T, string>;
  plainField: FinalFieldDefinition;
};

export type ObjectHelpers<T extends ObjectDefinitionInput> = {
  keys: Extract<keyof T, string>[];
  list: ObjectFieldListItem<T>[];
  meta: MetaFieldDef | undefined;
};

export function getObjectHelpers<T extends ObjectDefinitionInput>(
  object: ObjectType<T>
): ObjectHelpers<T> {
  const list: ObjectFieldListItem<T>[] = [];
  const definition = object.definition;
  const keys = getKeys(object.definition);
  let meta: MetaFieldDef | undefined;

  keys.forEach((fieldName) => {
    const field: FinalFieldDefinition = definition[fieldName];

    if (isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = __getCachedFieldInstance(field);

    list.push({
      instance,
      name: fieldName,
      plainField: field,
    });
  });

  return {
    keys,
    list,
    meta,
  };
}

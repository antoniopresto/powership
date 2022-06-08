import { getKeys } from '@darch/utils/lib/getKeys';

import type { ObjectType } from './ObjectType';
import { TAnyFieldType } from './fields/FieldType';
import { isMetaFieldKey, MetaFieldDef } from './fields/MetaFieldField';
import {
  FinalFieldDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';
import { __getCachedFieldInstance } from './parseObjectDefinition';

export type ObjectFieldListItem<T extends ObjectDefinitionInput> = {
  instance: TAnyFieldType;
  name: Extract<keyof T, string>;
  plainField: FinalFieldDefinition;
};

export type ObjectHelpers<T extends ObjectDefinitionInput> = {
  list: ObjectFieldListItem<T>[];
  meta: MetaFieldDef | undefined;
  keys: Extract<keyof T, string>[];
};

export function getObjectHelpers<T extends ObjectDefinitionInput>(
  object: ObjectType<T>
): ObjectHelpers<T> {
  const list: ObjectFieldListItem<T>[] = [];
  const definition = object.definition;
  const keys = getKeys(object.definition);
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

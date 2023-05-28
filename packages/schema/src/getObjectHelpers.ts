import { getKeys } from '@swind/utils';

import type { FinalFieldDefinition } from './ObjectType/ObjectType';
import { __getCachedFieldInstance } from './ObjectType/parseObjectDefinition';
import { TAnyFieldType } from './fields/FieldType';
import { isMetaFieldKey, MetaFieldDef } from './fields/MetaFieldField';

export type ObjectFieldListItem = {
  instance: TAnyFieldType;
  name: string;
  plainField: FinalFieldDefinition;
};

export type ObjectHelpers = {
  keys: string[];
  list: ObjectFieldListItem[];
  meta: MetaFieldDef | undefined;
};

export function getObjectHelpers(object: any): ObjectHelpers {
  const list: ObjectFieldListItem[] = [];
  const definition = object.definition;
  const keys = getKeys(object.definition);
  let meta: MetaFieldDef | undefined;

  keys.forEach((fieldName) => {
    const field = definition[fieldName];

    if (isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = __getCachedFieldInstance(field);

    if (instance.asFinalFieldDef.hidden) return;

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

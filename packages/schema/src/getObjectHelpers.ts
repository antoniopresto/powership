import { getKeys } from '@powership/utils';

import * as Internal from './internal';

export type ObjectFieldListItem = {
  instance: Internal.TAnyFieldType;
  name: string;
  plainField: Internal.FinalFieldDefinition;
};

export type ObjectHelpers = {
  keys: string[];
  list: ObjectFieldListItem[];
  meta: Internal.MetaFieldDef | undefined;
};

export function getObjectHelpers(object: any): ObjectHelpers {
  const list: ObjectFieldListItem[] = [];
  const definition = object.definition;
  const keys = getKeys(object.definition);
  let meta: Internal.MetaFieldDef | undefined;

  keys.forEach((fieldName) => {
    const field = definition[fieldName];

    if (Internal.isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = Internal.__getCachedFieldInstance(field);

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

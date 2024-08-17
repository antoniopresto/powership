import { getKeys } from '@powership/utils';

import { TAnyFieldType } from './fields/FieldType';
import type { MetaFieldDef } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';

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

    if (powership.isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = powership.__getCachedFieldInstance(field);

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

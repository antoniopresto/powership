import { RuntimeError } from '@swind/utils';

import { __getCachedFieldInstance } from './ObjectType/parseObjectDefinition';
import { getObjectDefinitionMetaField } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';

export function parseTypeName(input: {
  field: FinalFieldDefinition;
  fieldName: string;
  parentName: string;
}) {
  const { field, parentName, fieldName } = input;
  const userDefined = getUserDefinedTypeName(field);

  let result =
    userDefined || `${parentName}${fieldName ? `_${fieldName}` : ''}`;

  if (!result) {
    throw new RuntimeError(
      `parseTypeName: failed to generate a valid type name`,
      input
    );
  }

  return result;
}

export function getUserDefinedTypeName(field: FinalFieldDefinition) {
  if (field.name && typeof field.name === 'string') return field.name;

  const cached = __getCachedFieldInstance(field);
  if (cached.id) return cached.id;

  return field.type === 'object'
    ? getObjectDefinitionMetaField(field.def)?.def.id
    : null;
}

import { RuntimeError } from '@powership/utils';

import type { FinalFieldDefinition } from './fields/_parseFields';

function parseTypeName(input: {
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

function getUserDefinedTypeName(field: FinalFieldDefinition) {
  if (field.name && typeof field.name === 'string') return field.name;

  const cached = powership.__getCachedFieldInstance(field);
  if (cached.id) return cached.id;

  return field.type === 'object'
    ? powership.getObjectDefinitionMetaField(field.def)?.def.id
    : null;
}

Object.assign(powership, {
  parseTypeName,
});

declare global {
  interface powership {
    parseTypeName: typeof parseTypeName;
  }
}

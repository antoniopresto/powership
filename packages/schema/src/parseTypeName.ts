import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { upperFirst } from '@darch/utils/lib/upperFirst';

import { getObjectDefinitionMetaField } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';

export function parseTypeName(input: {
  parentName: string;
  fieldName: string;
  field: FinalFieldDefinition;
}) {
  const { field, parentName, fieldName } = input;

  const metaName =
    field.type === 'object'
      ? getObjectDefinitionMetaField(field.def)?.def.id
      : null;

  let result = metaName || `${parentName}${fieldName ? `_${fieldName}` : ''}`;

  if (
    field.type === 'union' ||
    field.type === 'enum' ||
    field.type === 'record'
  ) {
    result += `${upperFirst(field.type)}`;
  }

  if (!result) {
    throw new RuntimeError(
      `parseTypeName: failed to generate a valid type name`,
      input
    );
  }

  return result;
}

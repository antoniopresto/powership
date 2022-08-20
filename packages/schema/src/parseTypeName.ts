import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { getObjectDefinitionMetaField } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';
import { __getCachedFieldInstance } from './parseObjectDefinition';

export function parseTypeName(input: {
  parentName: string;
  fieldName: string;
  field: FinalFieldDefinition;
}) {
  const { field, parentName, fieldName } = input;

  const cached = __getCachedFieldInstance(field);
  if (cached.id) return cached.id;

  const metaName =
    field.type === 'object'
      ? getObjectDefinitionMetaField(field.def)?.def.id
      : null;

  let result = metaName || `${parentName}${fieldName ? `_${fieldName}` : ''}`;

  if (!result) {
    throw new RuntimeError(
      `parseTypeName: failed to generate a valid type name`,
      input
    );
  }

  return result;
}

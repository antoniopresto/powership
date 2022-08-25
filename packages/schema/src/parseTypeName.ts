import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { getObjectDefinitionMetaField } from './fields/MetaFieldField';
import { FinalFieldDefinition } from './fields/_parseFields';
import { __getCachedFieldInstance } from './parseObjectDefinition';

export function parseTypeName(input: {
  field: FinalFieldDefinition;
  fieldName: string;
  parentName: string;
}) {
  const { field, parentName, fieldName } = input;
  if (field.__as && typeof field.__as === 'string') return field.__as;

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

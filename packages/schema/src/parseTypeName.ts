import { FinalFieldDefinition } from './fields/_parseFields';
import { getSchemaDefinitionMetaField } from './fields/MetaFieldField';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { upperFirst } from '@darch/utils/lib/upperFirst';

export function parseTypeName(input: {
  parentName: string;
  fieldName: string;
  field: FinalFieldDefinition;
}) {
  const { field, parentName, fieldName } = input;

  const metaName =
    field.type === 'schema'
      ? getSchemaDefinitionMetaField(field.def)?.def.id
      : null;

  let result = metaName || `${parentName}_${fieldName}`;

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

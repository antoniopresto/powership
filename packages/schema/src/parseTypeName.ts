import { FinalFieldDefinition } from './fields/_parseFields';
import { getSchemaMetaField } from './fields/MetaFieldField';
import { camelCase, upperFirst } from 'graphql-compose';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';

export function parseTypeName(input: {
  parentName: string;
  fieldName: string;
  field: FinalFieldDefinition;
}) {
  const { field, parentName, fieldName } = input;

  const metaName =
    field.type === 'schema' ? getSchemaMetaField(field.def)?.def.id : null;

  const result =
    metaName || `${PascalCase(parentName)}${PascalCase(fieldName)}`;

  if (!result) {
    throw new RuntimeError(
      `parseTypeName: failed to generate a valid type name`,
      input
    );
  }

  return result;
}

function PascalCase(name: string) {
  return upperFirst(camelCase(name));
}

import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { FieldType, TAnyFieldType } from './fields/FieldType';
import { FinalFieldDefinition } from './fields/_parseFields';
import { types } from './fields/fieldTypes';
import { AnyField } from './fields/AnyField';

export function fieldInstanceFromDef(
  definition: FinalFieldDefinition
): AnyField {
  if (!types[definition.type]) {
    throw new RuntimeError(
      `invalid field definition. types["${definition?.type}"] is undefined`,
      {
        definition,
      }
    );
  }

  const fieldConstructor = types[definition.type] as typeof AnyField;

  let field = fieldConstructor.create(definition.def);

  if (definition.list) {
    field = field.toList();
  }

  if (definition.optional) {
    field = field.toOptional();
  }

  if (definition.defaultValue !== undefined) {
    field = field.setDefaultValue(definition.defaultValue);
  }

  if (definition.description) {
    field = field.describe(definition.description);
  }

  return field;
}

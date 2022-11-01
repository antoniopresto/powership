import { RuntimeError } from '@backland/utils';

import { AnyField } from './fields/AnyField';
import { FinalFieldDefinition } from './fields/_parseFields';
import { types } from './fields/fieldTypes';

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
    field = field.toList(definition.list);
  }

  if (definition.optional) {
    field = field.toOptional();
  }

  if (definition.name) {
    field.name = definition.name;
  }

  if (definition.hidden) {
    field.hidden = definition.hidden;
  }

  if (definition.defaultValue !== undefined) {
    field = field.setDefaultValue(definition.defaultValue);
  }

  if (definition.description) {
    field = field.describe(definition.description);
  }

  return field;
}

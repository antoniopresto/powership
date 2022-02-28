import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { ParsedFieldDefinition } from './TSchemaParser';
import { AnyFieldTypeInstance, fieldTypeConstructors } from './fields/fieldTypes';

export function fieldInstanceFromDef(definition: ParsedFieldDefinition<any>): AnyFieldTypeInstance {
  if (!fieldTypeConstructors.hasOwnProperty(definition.type)) {
    throw new RuntimeError(`invalid field definition. fieldTypeConstructors["${definition?.type}"] is undefined`, {
      definition,
    });
  }

  let field: AnyFieldTypeInstance = fieldTypeConstructors[definition.type].create(definition.def);

  if (definition.list) {
    field = field.list();
  }

  if (definition.optional) {
    field = field.optional();
  }

  return field;
}

import { RuntimeError } from '@powership/utils';

import type { AnyField } from './fields/AnyField';
import type { FinalFieldDefinition } from './fields/_parseFields';

function fieldInstanceFromDef(definition: FinalFieldDefinition): AnyField {
  if (!powership.types[definition.type]) {
    throw new RuntimeError(
      `invalid field definition. types["${definition?.type}"] is undefined`,
      {
        definition,
      }
    );
  }

  const fieldConstructor = powership.types[definition.type] as typeof AnyField;

  let field = fieldConstructor.create(definition.def);

  if (definition.list) {
    // @ts-ignore
    field = field.toList(definition.list);
  }

  if (definition.optional) {
    // @ts-ignore
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

  if (definition.$) {
    field.$ = definition.$;
  }

  return field;
}

Object.assign(powership, {
  fieldInstanceFromDef,
});

declare global {
  interface powership {
    fieldInstanceFromDef: typeof fieldInstanceFromDef;
  }
}

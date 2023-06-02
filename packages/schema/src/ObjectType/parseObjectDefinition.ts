import { fieldInstanceFromDef } from '../fieldInstanceFromDef';
import { TAnyFieldType } from '../fields/FieldType';
import { FieldDefinition, FinalFieldDefinition } from '../fields/_parseFields';

import { ParseFieldOptions, SchemaParser } from './SchemaParser';
/**
 * @deprecated use SchemaParser
 */
export function parseObjectField(
  fieldName: string,
  definition: FieldDefinition,
  options: ParseFieldOptions & { returnInstance?: boolean } = {}
): any {
  const { returnInstance } = options;

  const parsed = new SchemaParser(options)
    .parse({ definition }, null)
    .getField('definition');

  if (returnInstance) {
    return parsed;
  }

  return parsed.asFinalFieldDef;
}
/**
 * @deprecated use SchemaParser
 */
export function parseField(definition: FieldDefinition) {
  return parseObjectField('__parseField__', definition);
}
/**
 * @deprecated use SchemaParser
 */
export function parseFieldDefinitionConfig<
  T extends FieldDefinition,
  Options extends ParseFieldOptions
>(definition: T, options?: Options) {
  const parser = new SchemaParser(options);
  return parser.parse({ definition }, null).getField('definition');
}

/**
 * @deprecated use SchemaParser
 */
export function parseObjectDefinition(
  input: Record<string, any>,
  options: Omit<ParseFieldOptions, 'returnInstance'> = {}
) {
  const parser = new SchemaParser(options);
  return parser.parse(input, null);
}

/**
 * @deprecated use SchemaParser
 * @param input
 * @param options
 */
export function parseFlattenFieldDefinition(
  input: any,
  options: ParseFieldOptions & { returnInstance?: boolean } = {}
): FinalFieldDefinition | false {
  const { getField, definition } = new SchemaParser(options).parse(
    { def: input },
    null
  );
  if (options.returnInstance) {
    return getField('def');
  }
  return definition.def;
}

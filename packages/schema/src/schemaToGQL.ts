import { DarchGraphQLParser } from './DarchGraphQLParser/DarchGraphQLParser';
import { createSchema } from './Schema';
import { SchemaDefinitionInput } from './TSchemaConfig';
import { FinalSchemaDefinition } from './fields/_parseFields';

/**
 * @Deprecated - use DarchGraphQLParser instead
 * @param typeName
 * @param definition
 */
export function schemaToGQL(
  typeName: string,
  definition: SchemaDefinitionInput | FinalSchemaDefinition
) {
  const schema = createSchema(typeName, definition);

  return DarchGraphQLParser.parse({
    schema,
  });
}

import { GraphQLParser } from './GraphQLParser/GraphQLParser';
import { createSchema } from './Schema';
import { SchemaDefinitionInput } from './TSchemaConfig';
import { FinalSchemaDefinition } from './fields/_parseFields';

/**
 * @Deprecated - use GraphQLParser instead
 * @param typeName
 * @param definition
 */
export function schemaToGQL(
  typeName: string,
  definition: SchemaDefinitionInput | FinalSchemaDefinition
) {
  const schema = createSchema(typeName, definition);

  return GraphQLParser.schemaToGraphQL({
    schema,
  });
}

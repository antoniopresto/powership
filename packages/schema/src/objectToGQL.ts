import { GraphQLParser } from './GraphType/GraphQLParser';
import { createObjectType } from './ObjectType';
import { SchemaDefinition } from './TObjectConfig';
import { FinalObjectDefinition } from './fields/_parseFields';

/**
 * @Deprecated - use GraphType instead
 * @param typeName
 * @param definition
 */
export function objectToGQL(
  typeName: string,
  definition: SchemaDefinition | FinalObjectDefinition
) {
  const object = createObjectType(typeName, definition);

  return GraphQLParser.objectToGraphQL({
    object,
  });
}

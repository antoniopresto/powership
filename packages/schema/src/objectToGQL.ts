import { GraphQLParser } from './GraphQLParser/GraphQLParser';
import { createObjectType } from './ObjectType';
import { ObjectDefinitionInput } from './TObjectConfig';
import { FinalObjectDefinition } from './fields/_parseFields';

/**
 * @Deprecated - use GraphQLParser instead
 * @param typeName
 * @param definition
 */
export function objectToGQL(
  typeName: string,
  definition: ObjectDefinitionInput | FinalObjectDefinition
) {
  const object = createObjectType(typeName, definition);

  return GraphQLParser.objectToGraphQL({
    object,
  });
}

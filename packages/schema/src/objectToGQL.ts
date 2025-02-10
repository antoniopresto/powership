// @only-server
import { GraphQLParser } from './GraphType/GraphQLParser';
import type {
  FinalObjectDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';
import { createObjectType } from './types';

/**
 * @Deprecated - use GraphType instead
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

// @onlyServer
import { GraphQLParser } from './GraphType/GraphQLParser';
import { createObjectType } from './ObjectType';
import type {
  FinalObjectDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';

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

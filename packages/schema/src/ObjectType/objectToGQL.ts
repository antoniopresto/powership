import { GraphQLParser } from '../GraphType/GraphQLParser';
import { SchemaDefinition } from '../TObjectConfig';
import { FinalObjectDefinition } from '../fields/_parseFields';

import { createObjectType } from './ObjectType';

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

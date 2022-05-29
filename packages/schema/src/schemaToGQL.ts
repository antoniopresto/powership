import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import type { ObjectTypeComposer } from 'graphql-compose';
import { schemaComposer } from 'graphql-compose';

import { DarchGraphQLParser } from './DarchGraphQLParser/DarchGraphQLParser';
import { FieldType, TAnyFieldType } from './FieldType';
import { createSchema } from './Schema';
import { SchemaDefinitionInput } from './TSchemaConfig';
import {
  FinalFieldDefinition,
  FinalSchemaDefinition,
} from './fields/_parseFields';
import { types } from './fields/fieldTypes';

export interface SchemaToGQLOptions {
  typeName: string;
  definition: SchemaDefinitionInput | FinalSchemaDefinition;
}

/**
 * @Deprecated - use DarchGraphQLParser instead
 * @param typeName
 * @param definition
 */
export function schemaToGQL(
  typeName: string,
  definition: SchemaDefinitionInput | FinalSchemaDefinition
): ObjectTypeComposer;

export function schemaToGQL(options: {
  typeName: string;
  definition: SchemaDefinitionInput | FinalSchemaDefinition;
}): ObjectTypeComposer;

export function schemaToGQL(...args: any): ObjectTypeComposer {
  const { typeName, definition } = normalizeOptions(args);

  const schema = createSchema(typeName, definition);

  return DarchGraphQLParser.parse({
    schema,
  }) as any;
}

export function fieldToGraphql(params: {
  field: FinalFieldDefinition;
  parentName: string;
  fieldName: string;
}) {
  const { fieldName, field, parentName } = params;

  function getType() {
    try {
      const { def } = field;

      const typeConstructor = types[field.type] as typeof FieldType;

      if (!typeConstructor?.create) {
        throw new RuntimeError(
          `Failed to find constructor for field type ${field?.type}`,
          {
            field,
            typeConstructor,
            types,
          }
        );
      }

      const type: TAnyFieldType = typeConstructor.create(def);
      const gqlDef = type.graphql({ fieldName, parentName });

      if (typeof gqlDef === 'string') {
        return gqlDef;
      }

      if (isSDL(gqlDef)) {
        return schemaComposer.createTC(gqlDef.sdl);
      }

      if (hasFields(gqlDef)) {
        return schemaComposer.createObjectTC(gqlDef);
      }
    } catch (err) {
      throw new RuntimeError(`Failed to create type for "${fieldName}".`, {
        err,
        field,
      });
    }

    throw new Error(
      `invalid graphql definition for field "${fieldName}" with type "${field.type}"`
    );
  }

  const type: any = getType();

  const tempName = `${fieldName}${parentName}Temp`;

  const otc = schemaComposer.createObjectTC({
    name: tempName,
    fields: { [tempName]: type },
  });

  const gqlField = otc.getField(tempName);

  if (field.list) {
    gqlField.type = gqlField.type.getTypePlural();
  }

  if (!field.optional) {
    gqlField.type = gqlField.type.getTypeNonNull();
  }

  if (field.description) {
    gqlField.description = field.description;
  }

  const result = otc.getField(tempName);

  schemaComposer.delete(tempName);

  return result;
}

function isSDL(t: any): t is { name: string; sdl: string } {
  return typeof t?.sdl === 'string' && typeof t?.name === 'string';
}

function hasFields(
  t: any
): t is { name: string; fields: Record<string, string> } {
  return typeof t?.fields === 'object' && typeof t?.name === 'string';
}

function normalizeOptions(
  args:
    | [string, SchemaDefinitionInput | FinalSchemaDefinition]
    | [SchemaToGQLOptions]
): SchemaToGQLOptions {
  if (args.length === 1 && typeof args[0] === 'object') return args[0];
  if (typeof args[0] !== 'string' || typeof args[1] !== 'object')
    throw new Error('invalid args');

  const [typeName, definition] = args;

  return {
    typeName,
    definition,
  };
}

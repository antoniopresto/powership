import { jsonToTypescript } from '@darch/utils/lib/jsonToTypescript';

import { SchemaDefinitionInput } from './TSchemaConfig';
import { SchemaLike } from './fields/ISchemaLike';
import { schemaToJSON } from './schemaToJSON';

export type SchemaToTypescriptOptions = {
  bannerComment?: string;
  format?: boolean;
  unreachableDefinitions?: boolean;
  additionalProperties?: boolean;
  strictIndexSignatures?: boolean;
};

const defaultBannerComment = `
 /* tslint:disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */
`;

/**
 * Creates a typescript declaration from a schema
 * @param name
 * @param schema
 * @param options
 */
export async function schemaToTypescript(
  name: string,
  schema: SchemaLike | SchemaDefinitionInput,
  options?: SchemaToTypescriptOptions
) {
  const {
    bannerComment = defaultBannerComment,
    format = true,
    unreachableDefinitions = false,
    strictIndexSignatures = true,
  } = options || {};

  const json = schemaToJSON(name, schema);

  return jsonToTypescript(json, name, {
    bannerComment,
    format,
    unreachableDefinitions,
    strictIndexSignatures,
  });
}

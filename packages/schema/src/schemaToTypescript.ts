import { compile } from 'json-schema-to-typescript';

import { Schema } from './Schema';
import { SchemaDefinitionInput } from './TSchemaConfig';
import { schemaToJSON } from './schemaToJSON';

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
  schema: Schema<any> | SchemaDefinitionInput,
  options?: {
    bannerComment?: string;
    format?: boolean;
    unreachableDefinitions?: boolean;
    additionalProperties?: boolean;
    strictIndexSignatures?: boolean;
  }
) {
  const {
    bannerComment = defaultBannerComment,
    format = true,
    unreachableDefinitions = false,
    strictIndexSignatures = true,
  } = options || {};

  const json = schemaToJSON(name, schema);

  return compile(json, name, {
    bannerComment,
    format,
    unreachableDefinitions,
    strictIndexSignatures,
  });
}

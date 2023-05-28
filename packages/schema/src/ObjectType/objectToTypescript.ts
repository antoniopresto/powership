import { jsonToTypescript } from '@swind/utils';

import { SchemaDefinition } from '../TObjectConfig';
import { ObjectLike } from '../fields/IObjectLike';

import { objectToJSON } from './objectToJSON';

export type ObjectToTypescriptOptions = {
  additionalProperties?: boolean;
  bannerComment?: string;
  format?: boolean;
  ignoreDefaultValues?: boolean;
  strictIndexSignatures?: boolean;
  unreachableDefinitions?: boolean;
};

const defaultBannerComment = ``;

/**
 * Creates a typescript declaration from an object
 * @param name
 * @param object
 * @param options
 */
export async function objectToTypescript(
  name: string,
  object: ObjectLike | SchemaDefinition,
  options?: ObjectToTypescriptOptions
): Promise<string> {
  const {
    bannerComment = defaultBannerComment,
    format = true,
    unreachableDefinitions = false,
    strictIndexSignatures = true,
  } = options || {};

  const json = objectToJSON(name, object, options);

  return (await jsonToTypescript(json, name, {
    bannerComment,
    format,
    strictIndexSignatures,
    unreachableDefinitions,
  })) as any;
}

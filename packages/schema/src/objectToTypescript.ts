import { jsonToTypescript } from '@darch/utils/lib/jsonToTypescript';

import { ObjectDefinitionInput } from './TObjectConfig';
import { ObjectLike } from './fields/IObjectLike';
import { objectToJSON } from './objectToJSON';

export type ObjectToTypescriptOptions = {
  bannerComment?: string;
  format?: boolean;
  unreachableDefinitions?: boolean;
  additionalProperties?: boolean;
  strictIndexSignatures?: boolean;
  ignoreDefaultValues?: boolean;
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
  object: ObjectLike | ObjectDefinitionInput,
  options?: ObjectToTypescriptOptions
): Promise<string> {
  const {
    bannerComment = defaultBannerComment,
    format = true,
    unreachableDefinitions = false,
    strictIndexSignatures = true,
  } = options || {};

  const json = objectToJSON(name, object, options);

  return jsonToTypescript(json, name, {
    bannerComment,
    format,
    unreachableDefinitions,
    strictIndexSignatures,
  }) as any;
}

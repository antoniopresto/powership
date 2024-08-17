import { jsonToTypescript } from '@powership/utils';

import type { ObjectLike } from './fields/IObjectLike';
import type { ObjectDefinitionInput } from './fields/_parseFields';
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

  return (await jsonToTypescript(json, name, {
    bannerComment,
    format,
    strictIndexSignatures,
    unreachableDefinitions,
  })) as any;
}

Object.assign(powership, {
  objectToTypescript,
});

declare global {
  interface powership {
    objectToTypescript: typeof objectToTypescript;
  }
}

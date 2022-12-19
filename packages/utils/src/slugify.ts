import slugify from 'slugify';

export type SlugifyOptions = Parameters<typeof slugify>[1] extends infer R
  ? R extends object
    ? R
    : never
  : never;

export { slugify };

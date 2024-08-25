import { camelCase } from 'lodash';
import { upperFirst } from 'lodash';
import { snakeCase } from 'lodash';

import { randomItem } from './randomItem';
import { slugify } from './slugify';

export function capitalize(input: string) {
  return upperFirst(input);
}

export function joinPathsCamelCase(...parts: (string | null | undefined)[]) {
  return camelCase(joinPathsSnakeCase(...parts));
}

export function joinPathsSnakeCase(...parts: (string | null | undefined)[]) {
  return parts.filter(Boolean).join('_');
}

export function removeDiacritics(string: string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function stringToValue(string: string) {
  return snakeCase(removeDiacritics(string));
}

export const stringCase = {
  keep: (s: string) => s,
  capitalized: (s: string) => capitalize(s),
  lowercase: (s: string) => s.toLowerCase(),
  random: (s: string): string => {
    return stringCase[randomItem(Object.keys(stringCase))](s);
  },
  undefined: (s: string) => stringCase.random(s),
  slugify: (s: string) => slugify(s),
  snakeCase: (s: string) => snakeCase(s),
  camelCase,
  removeDiacritics,
  valuefy: stringToValue,
};

export { camelCase };

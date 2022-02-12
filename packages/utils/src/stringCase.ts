import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

export function capitalize(input: string) {
  return upperFirst(input);
}

export function joinPathsCamelCase(...parts: (string | null | undefined)[]) {
  return camelCase(joinPathsSnakeCase(...parts));
}

export function joinPathsSnakeCase(...parts: (string | null | undefined)[]) {
  return parts.filter(Boolean).join('_');
}

// preventing direct code dependency from external lib.

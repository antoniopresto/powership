export function pathParser(path: string | string[]) {
  if (!path?.length) return [];

  return Array.isArray(path)
    ? [...path]
    : path
        .replace(/\[([0-9]*)]/gim, '.$1')
        .replace(/^\./, '') // when the first item is [number]
        .split('.');
}

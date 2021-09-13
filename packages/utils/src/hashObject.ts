import objectHash from 'object-hash';

export function hashObject(obj: any) {
  return objectHash(obj, {
    respectType: false,
  });
}

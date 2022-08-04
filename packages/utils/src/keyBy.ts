export function keyBy<
  T extends Record<any, any>,
  GetKey extends (current: T) => T[keyof T]
>(
  arr: T[],
  getKey: GetKey,
  onDuplicate?: <K extends keyof T>(key: K, value: T[K]) => any
): Record<ReturnType<GetKey>, T> {
  const temp: any = {};

  arr.forEach((el) => {
    const key = getKey(el);
    if (onDuplicate && temp.hasOwnProperty(key)) {
      onDuplicate(key, el as any);
    }
    temp[key] = el;
  });

  return temp;
}

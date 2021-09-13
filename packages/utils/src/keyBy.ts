export function keyBy<
  T extends Record<any, any>,
  GetKey extends (current: T) => T[keyof T]
>(arr: T[], getKey: GetKey): Record<ReturnType<GetKey>, T> {
  const temp: any = {};

  arr.forEach((el) => {
    temp[getKey(el)] = el;
  });

  return temp;
}

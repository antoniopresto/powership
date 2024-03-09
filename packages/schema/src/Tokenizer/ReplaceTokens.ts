export type FilterStringListBorder<
  String extends string[],
  Border extends string,
> =
  //
  String extends unknown
    ? Border extends unknown
      ? Border extends string
        ? String extends string[]
          ? String extends [infer Head, ...infer Tail]
            ? Head extends string
              ? Tail extends []
                ? [ReplaceBorder<Head, Border>]
                : Tail extends string[]
                  ? [
                      ReplaceBorder<Head, Border>,
                      ...FilterStringListBorder<Tail, Border>,
                    ]
                  : []
              : never
            : never
          : never
        : never
      : never
    : never;

export type ReplaceBorder<T extends string, S extends string> =
  //
  S extends ''
    ? T
    : T extends unknown
      ? T extends string
        ? T extends `${S}${infer R}`
          ? ReplaceBorder<R, S>
          : T extends `${infer R}${S}`
            ? ReplaceBorder<R, S>
            : T
        : never
      : never;

declare global {
  interface Array<T> {
    filter(
      filter: BooleanConstructor
    ): (T extends undefined ? never : T extends null ? never : T)[];
  }
}

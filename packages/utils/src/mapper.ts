import { NullableToPartial, Union } from './typings/index';

// (item: Item, index: number, acc: T[]>) => T | null) => Mapper<T>
export interface Mapper<Item extends object> {
  map<T extends object>(
    cb: (current: Item, index: number, acc: T[]) => T | null
  ): Mapper<T>;

  combine(): _NullableNullable<Item>;

  current(): Item[];
}

export function mapper<Item extends object>(
  items: (Item | undefined | null)[]
): Mapper<Item> {
  if (!Array.isArray(items)) {
    throw new Error(`Current value is not an array.`);
  }

  items = items.filter((el) => el && typeof el === 'object');

  const self: Mapper<Item> = {
    current() {
      return items.filter((el) => el && typeof el === 'object') as Item[];
    },
    combine() {
      const partial: any = {};
      items.forEach((el) => {
        if (!el || typeof el !== 'object') return;
        Object.assign(partial, el);
      });
      return partial;
    },
    map(cb) {
      const newItems: any[] = [];

      items.forEach((el, index) => {
        if (!el || typeof el !== 'object') return;
        const res = cb(el, index, newItems);
        if (!res || typeof res !== 'object') return;
        newItems.push(res);
      });

      return mapper(newItems);
    },
  };

  return self;
}

export type _UndefinedKeys<T> = keyof Union.Merge<
  Extract<
    T extends unknown
      ? { [K in keyof T as T[K] extends undefined ? K : never]: K } & {}
      : {},
    object
  >
>;

export type _NullableNullable<Obj extends object> =
  _UndefinedKeys<Obj> extends infer UK
    ? Union.Merge<
        {
          [K in keyof Obj as [Obj[K]] extends [undefined] ? never : K]: Obj[K];
        } & {}
      > extends infer Union
      ? NullableToPartial<
          {
            [K in keyof Union]: K extends UK ? Union[K] | undefined : Union[K];
          } & {}
        >
      : never
    : never;

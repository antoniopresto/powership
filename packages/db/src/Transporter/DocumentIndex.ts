export type IndexKeyHash<Keys> = `.${Extract<Keys, string>}` | `#${string}`;

export type EntityIndexConfig<T extends Record<string, unknown>> = {
  field: string;
  PK: IndexKeyHash<Extract<keyof T, string>>[];
  SK?: IndexKeyHash<Extract<keyof T, string>>[];xw
};

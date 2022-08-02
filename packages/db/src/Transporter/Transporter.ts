import { MaybeArray, Merge, tuple } from '@darch/utils/lib/typeUtils';

import { SanitizedUpdateOperations } from './sanitizeUpdateExpressions';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { Darch } from '@darch/schema';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { devAssert } from '@darch/utils/lib/devAssert';
import {
  createDocumentIndexMapper,
  DocumentIndexConfig,
  DocumentIndexMapper,
} from './DocumentIndex';

export const FieldTypes = tuple(
  'String',
  'Number',
  'Binary',
  'Boolean',
  'Null',
  'List',
  'Map',
  'StringSet',
  'NumberSet'
);

export type FieldType = typeof FieldTypes[number];

export type PKSKValueType = string | number;

export type AllFieldFilter = {
  $eq: PKSKValueType | boolean | null;
  $ne: PKSKValueType | boolean | null;
  $lte: PKSKValueType;
  $lt: PKSKValueType;
  $gt: PKSKValueType;
  $gte: PKSKValueType;
  $between: [string, string] | [number, number];
  $exists: boolean;
  $type: FieldType;
  $startsWith: string;
  $contains: string | number | boolean | null;
  $matchString: string;
  $in: unknown[];
};

export type FieldFilter = {
  [K in keyof AllFieldFilter]?: AllFieldFilter[K];
};

export type AllIndexFilter = {
  $eq: PKSKValueType;
  $lte: PKSKValueType;
  $lt: PKSKValueType;
  $gt: PKSKValueType;
  $gte: PKSKValueType;
  $startsWith: PKSKValueType;
  $between: [string, string] | [number, number];
};

export type IndexFilter = {
  [K in keyof AllIndexFilter]?: AllIndexFilter[K];
};

export type AttributeFilterRecord<T extends string = string> = {
  [K in T]?:
    | PKSKValueType
    | FieldFilter
    | {
        $and?: AttributeFilterRecord[];
        $or?: AttributeFilterRecord[];
        $not?: AttributeFilterRecord;
      };
};

export type IndexFilterRecord<T extends string = string> = {
  [K in T]?:
    | PKSKValueType
    | IndexFilter
    | {
        $and?: IndexFilterRecord[];
        $or?: IndexFilterRecord[];
        $not?: IndexFilterRecord;
      };
};

export type DocumentBase<T extends { [K: string]: unknown } = {}> = {
  [K in keyof T]: T[K];
};

export type TransporterLoaderConfig<TQuery> = {
  query: TQuery;
  dataloaderContext: Record<string, any> | null;
};

export type QuerySort = 'ASC' | 'DESC';

export type QueryConfig = {
  filter: IndexFilter[];
  startingKey?: IndexFilter;
  consistent?: boolean;
  limit?: number;
  sort?: QuerySort;
  projection?: string[];
};

export type LoadQueryConfig = TransporterLoaderConfig<QueryConfig>;

export type GetItemConfig<IndexFieldKey extends string> =
  TransporterLoaderConfig<{
    filter: IndexFilterRecord;
    consistent?: boolean;
    projection?: string[];
  }>;

export type PutItemConfig<T extends DocumentBase> = {
  item: T;
  indexConfig: DocumentIndexConfig<T>;
  condition?: AttributeFilterRecord;
  replace?: boolean; // defaults to false
};

export type UpdateItemConfig<
  IndexFieldKey extends string,
  Item extends DocumentBase
> = {
  filter: IndexFilterRecord;
  update: SanitizedUpdateOperations<Item>;
  indexConfig: DocumentIndexConfig<Item>;
  upsert?: boolean;
  condition?: AttributeFilterRecord;
};

export type DeleteItemConfig<
  IndexFieldKey extends string,
  Item extends { [key: string]: any }
> = {
  filter: IndexFilterRecord;
  indexConfig: DocumentIndexConfig<Item>;
  condition?: AttributeFilterRecord;
};

type UnsetUpdateExpression<Item> = Item extends Record<infer K, any>
  ? K extends string
    ? Item[K] extends unknown[]
      ? `${K}[${number}]` | K
      : // : Item[K] extends Record<string, any>
        // ? `${K}.${UnsetUpdateExpression<Item[K]>}`
        K
    : never
  : never;

type ListUpdateExpression<Item> = {
  [K in keyof Item]?: Item[K] extends (infer T)[] ? T[] | T : never;
};

export type UpdateExpression<
  Item extends Record<string, any> = Record<string, unknown>
> = {
  $set?: { [K in keyof Item]?: Item[K] }; // attr | set | list
  $setIfNull?: { [K in keyof Item]?: Item[K] }; // attr | set | list
  $setOnInsert?: { [K in keyof Item]?: Item[K] }; // attr | set | list
  $inc?: { [K in keyof Item]?: Item[K] extends number ? number : never }; // number
  $append?: ListUpdateExpression<Item>; // list
  $prepend?: ListUpdateExpression<Item>; // list
  $remove?: MaybeArray<UnsetUpdateExpression<Item>>; // attr | set | list
  $pull?: { [K in keyof Item]?: Item[K] extends (infer T)[] ? T[] : never }; // from array or set
  $addToSet?: { [K in keyof Item]?: Item[K] extends (infer T)[] ? T[] : never }; //  array or set
};

export type UpdateExpressionKey = keyof UpdateExpression<any>;

export const FieldFilterOperators: {
  [K in keyof FieldFilter]: (input: any) => FieldFilter[K];
} = {
  $eq: Darch.union(['null', 'boolean', 'string', 'float'] as const).parse,
  $ne: Darch.union(['null', 'boolean', 'string', 'float'] as const).parse,
  $lte: Darch.union(['string', 'float'] as const).parse,
  $lt: Darch.union(['string', 'float'] as const).parse,
  $gt: Darch.union(['string', 'float'] as const).parse,
  $gte: Darch.union(['string', 'float'] as const).parse,

  $between(input: any): [string, string] | [number, number] {
    const is =
      Array.isArray(input) &&
      input.length === 2 &&
      ((typeof input[0] === 'string' && typeof input[1] === 'string') ||
        (getTypeName(input[0]) === 'Number' &&
          getTypeName(input[1]) === 'Number'));

    if (!is) {
      throw new RuntimeError(`invalid input for $between`, { input });
    }

    return input as any;
  },

  $exists: Darch.boolean().parse,

  $type(input: any): FieldType {
    return FieldTypes.includes(input)
      ? input
      : devAssert('invalid input for $type', { input });
  },

  $startsWith: Darch.string().parse,
  $contains: Darch.union(['string', 'float', 'boolean', 'null'] as const).parse,
  $matchString: Darch.string().parse,
  $in: Darch.unknown().toList().parse,

  // $and(input: unknown) {
  //   if (!Array.isArray(input)) {
  //     return devAssert(`Expected input be an array`, { input });
  //   }
  //
  //   return input.map((sub: unknown, index) => {
  //     assertFieldFilter(sub, `at position ${index}`);
  //     return sub;
  //   });
  // },
  //
  // $or(input) {
  //   if (!Array.isArray(input)) {
  //     return devAssert(`Expected input be an array`, { input });
  //   }
  //
  //   return input.map((sub: unknown, index) => {
  //     assertFieldFilter(sub, `at position ${index}`);
  //     return sub;
  //   });
  // },
  //
  // $not(input: unknown) {
  //   assertFieldFilter(input);
  //   return input;
  // },
};

export const AttributeFilterKeys = tuple(
  '$eq',
  '$ne',
  '$lte',
  '$lt',
  '$gt',
  '$gte',
  '$between',
  '$exists',
  '$type',
  '$startsWith',
  '$contains',
  '$matchString',
  '$in'
);

export type AttributeFilterKey = typeof AttributeFilterKeys[number];

export function isAttributeFilterKey(key: unknown): key is AttributeFilterKey {
  if (typeof key !== 'string') return false;
  return AttributeFilterKeys.includes(key as any);
}

export const TopLevelFilterKeys = tuple('$not', '$or', '$and');
export type TopLevelFilterKey = typeof TopLevelFilterKeys[number];

export function isTopLevelFilterKey(key: unknown): key is TopLevelFilterKey {
  if (typeof key !== 'string') return false;
  return TopLevelFilterKeys.includes(key as any);
}

export type PutItemResult<T> = {
  created: boolean;
  updated: boolean;
  item: T | null;
  error?: string | null | undefined;
};

export type UpdateItemResult<T> = {
  updated: boolean;
  created: boolean;
  item: T | null;
  error?: string;
};

export abstract class Transporter {
  _client: any;

  abstract connect(): Promise<any>;

  // abstract loadQuery(options: LoadQueryConfig): Promise<{
  //   items: DocumentBase[];
  // }>;

  //
  // abstract getItem(options: GetItemConfig): Promise<{
  //   item: DocumentBase | null;
  // }>;
  //

  abstract putItem<T extends DocumentBase>(
    options: PutItemConfig<T>
  ): Promise<PutItemResult<T>>;

  abstract updateItem<IndexKey extends string, T extends DocumentBase>(
    options: UpdateItemConfig<IndexKey, T>
  ): Promise<UpdateItemResult<T>>;

  // abstract deleteItem<T extends DocumentBase>(
  //   options: DeleteItemOptions
  // ): Promise<{
  //   item: T | null;
  // }>;

  getIndexMapper<Doc extends DocumentBase>(
    indexConfig: DocumentIndexConfig<Doc>
  ) {
    return createDocumentIndexMapper(indexConfig);
  }
}

export function isPlainQueryKey(input: any): input is PKSKValueType {
  const tn = getTypeName(input);
  return tn === 'String' || tn === 'Number';
}

export function assertFieldFilter(
  input: any,
  message?: string
): asserts input is FieldFilter {
  const keys =
    input && typeof input === 'object' ? Object.keys(input) : undefined;

  if (!keys?.length || keys.length < 2) {
    devAssert(`invalid filter input ${message || ''}`, { input });
  }

  Object.entries(input).forEach(([k, v]) => {
    const parse = FieldFilterOperators[k]?.parse;
    if (!parse) devAssert(`invalid operator ${message || ''}`, { operator: k });
    return parse(v);
  });
}

export function isFieldFilter(input: any): input is FieldFilter {
  try {
    assertFieldFilter(input);
    return true;
  } catch (e) {
    return false;
  }
}

export function isFilterOrPKSKValue(
  input: any
): input is PKSKValueType | FieldFilter {
  return isPlainQueryKey(input) || isFieldFilter(input);
}

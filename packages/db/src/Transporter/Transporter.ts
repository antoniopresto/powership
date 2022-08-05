import { MaybeArray, tuple } from '@darch/utils/lib/typeUtils';

import { parseUpdateExpression } from './parseUpdateExpression';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { Darch } from '@darch/schema';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { devAssert } from '@darch/utils/lib/devAssert';
import {
  getDocumentIndexFields,
  DocumentIndexConfig,
  createDocumentIndexBasedFilters,
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

export type PKSKValueType = string | number | null;

export type AllFilterOperations = {
  $eq: PKSKValueType | boolean;
  $ne: PKSKValueType | boolean;
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

export type OneFilterOperation = {
  [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] };
}[keyof AllFilterOperations];

export type RootFilterOperators = {
  $and?: FilterRecord[];
  $or?: FilterRecord[];
  $not?: FilterRecord;
};

export type FilterConditions = {
  [K in keyof (AllFilterOperations &
    RootFilterOperators)]?: (AllFilterOperations & RootFilterOperators)[K];
};

export type FilterRecord =
  | { [K: string]: Partial<AllFilterOperations> | PKSKValueType | undefined }
  | { $and?: RootFilterOperators['$and'] }
  | { $or?: RootFilterOperators['$or'] }
  | { $not?: RootFilterOperators['$not'] };

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

export type IndexFilterRecord<IndexFieldKeys extends string = string> =
  | {
      [K in IndexFieldKeys]?:
        | Partial<AllIndexFilter>
        | PKSKValueType
        | undefined;
    }
  | { $and?: IndexFilterRecord<IndexFieldKeys>[] }
  | { $or?: IndexFilterRecord<IndexFieldKeys>[] }
  | { $not?: IndexFilterRecord<IndexFieldKeys> };

export type DocumentBase = Record<string, any>;

export type TransporterLoaderConfig<TQuery> = {
  query: TQuery;
  dataloaderContext: Record<string, any> | null;
};

export type QuerySort = 'ASC' | 'DESC';

export type QueryConfig = {
  filter: IndexFilterRecord;
  indexConfig: DocumentIndexConfig;
  startingKey?: IndexFilterRecord;
  consistent?: boolean;
  limit?: number;
  sort?: QuerySort;
  projection?: string[];
};

export type LoadQueryConfig = TransporterLoaderConfig<QueryConfig>;

export type GetItemConfig = TransporterLoaderConfig<{
  filter: IndexFilterRecord;
  indexConfig: DocumentIndexConfig;
  consistent?: boolean;
  projection?: string[];
}>;

export type GetItemResult = {
  item: DocumentBase | null;
};

export type PutItemConfig<T extends DocumentBase> = {
  item: T;
  indexConfig: DocumentIndexConfig<T>;
  condition?: FilterRecord;
  replace?: boolean; // defaults to false
};

export type UpdateItemConfig<
  IndexFieldKey extends string,
  Item extends DocumentBase
> = {
  filter: IndexFilterRecord;
  update: UpdateExpression;
  indexConfig: DocumentIndexConfig<Item>;
  upsert?: boolean;
  condition?: FilterRecord;
};

export type DeleteItemConfig<
  IndexFieldKey extends string,
  Item extends { [key: string]: any }
> = {
  filter: IndexFilterRecord<IndexFieldKey>;
  indexConfig: DocumentIndexConfig<Item>;
  condition?: FilterRecord;
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

export type UpdateExpressionKey = Extract<keyof UpdateExpression<any>, string>;

export const FilterConditionsParsers: {
  [K in keyof FilterConditions]-?: (input: any) => FilterConditions[K];
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

  $and(input: unknown) {
    if (!Array.isArray(input)) {
      return devAssert(`Expected input be an array`, { input });
    }

    return input.map((sub: unknown, index) => {
      assertFieldFilter(sub, `at position ${index}`);
      return sub;
    });
  },

  $or(input) {
    if (!Array.isArray(input)) {
      return devAssert(`Expected input be an array`, { input });
    }

    return input.map((sub: unknown, index) => {
      assertFieldFilter(sub, `at position ${index}`);
      return sub;
    });
  },

  $not(input: unknown) {
    assertFieldFilter(input);
    return input;
  },
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

export const TopLevelFilterKeys = tuple('$not', '$or', '$and');
export type TopLevelFilterKey = typeof TopLevelFilterKeys[number];

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
  error?: string | null | undefined;
};

export type LoadQueryResult = {
  items: DocumentBase[];
};

export type DeleteItemResult<T> = {
  item: T | null;
};

export abstract class Transporter {
  _client: any;

  abstract connect(): Promise<any>;

  abstract loadQuery(options: LoadQueryConfig): Promise<LoadQueryResult>;

  abstract getItem(options: GetItemConfig): Promise<GetItemResult>;

  abstract putItem<T extends DocumentBase>(
    options: PutItemConfig<T>
  ): Promise<PutItemResult<T>>;

  abstract updateItem<IndexKey extends string, T extends DocumentBase>(
    options: UpdateItemConfig<IndexKey, T>
  ): Promise<UpdateItemResult<T>>;

  abstract deleteItem<T extends DocumentBase>(
    options: DeleteItemConfig<string, T>
  ): Promise<DeleteItemResult<T>>;

  createDocumentIndexBasedFilters = createDocumentIndexBasedFilters;
  getDocumentIndexFields = getDocumentIndexFields;
  parseUpdateExpression = parseUpdateExpression;
}

export function assertFieldFilter(
  input: any,
  message?: string
): asserts input is FilterRecord {
  const keys =
    input && typeof input === 'object' ? Object.keys(input) : undefined;

  if (!keys?.length || keys.length < 2) {
    devAssert(`invalid filter input ${message || ''}`, { input });
  }

  Object.entries(input).forEach(([k, v]) => {
    const parse = FilterConditionsParsers[k]?.parse;
    if (!parse) devAssert(`invalid operator ${message || ''}`, { operator: k });
    parse(v);
  });
}

export function isFilterConditionKey(
  input: unknown
): input is keyof FilterConditions {
  return typeof input === 'string' && !!FilterConditionsParsers[input];
}

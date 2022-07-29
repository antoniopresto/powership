import { MaybeArray, tuple } from '@darch/utils/lib/typeUtils';

import { SanitizedUpdateOperations } from './sanitizeUpdateExpressions';

export const AttributeTypes = tuple(
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

export type AttributeType = typeof AttributeTypes[number];

export type KeyType = string | number;
export type KeyTypeName = 'string' | 'number';

export type AttributeFilter = {
  $attribute: string;
  $eq?: KeyType | boolean | null;
  $ne?: KeyType | boolean | null;
  $lte?: KeyType;
  $lt?: KeyType;
  $gt?: KeyType;
  $gte?: KeyType;
  $between?: [string, string] | [number, number];
  $exists?: boolean;
  $type?: AttributeType;
  $startsWith?: string;
  $contains?: string | number | boolean | null;
  $matchString?: string;
  // $size?: number;
  $in?: any[];
};

export type KeyCondition = {
  $eq?: KeyType;
  $lte?: KeyType;
  $lt?: KeyType;
  $gt?: KeyType;
  $gte?: KeyType;
  $startsWith?: KeyType;
  $between?: [string, string] | [number, number];
};

export type AttributeConditions<T extends string> = {
  [K in T]?: Omit<AttributeFilter, '$attribute'>;
};

export type TopLevelCondition<T extends string> = {
  $and?: AttributeConditions<T>[];
  $or?: AttributeConditions<T>[];
  $not?: ConditionExpressions<T>;
};

export type ConditionExpressions<T extends string = string> =
  | TopLevelCondition<T>
  | AttributeConditions<T>;

export type QueryFilterItem = {
  field: string;
  PK: KeyType | KeyCondition;
  SK?: KeyType | KeyCondition;
};

export type DocumentBase<T extends { [K: string]: unknown } = {}> = {
  [K in keyof T]: T[K];
};

export type TransporterLoaderConfig<TQuery> = {
  query: TQuery;
  dataloaderContext: Record<string, any> | null;
};

export type QuerySort = 'ASC' | 'DESC';

export type QueryFilterConfig = QueryFilterItem | QueryFilterItem[];

export type QueryConfig = {
  filter: QueryFilterConfig;
  startingKey?: QueryFilterItem;
  consistent?: boolean;
  limit?: number;
  sort?: QuerySort;
  projection?: string[];
};

export type LoadQueryConfig = TransporterLoaderConfig<QueryConfig>;

export type GetItemConfig = TransporterLoaderConfig<{
  filter: QueryFilterConfig;
  consistent?: boolean;
  projection?: string[];
}>;

export type PutItemOptions<T> = {
  item: T;
  condition?: ConditionExpressions;
  replace?: boolean;
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

export type UpdateItemConfig<Item extends { [key: string]: any }> = {
  filter: QueryFilterConfig;
  update: SanitizedUpdateOperations<Item>;
  upsert?: boolean;
  condition?: ConditionExpressions<Extract<keyof Item, string>>;
};

export type DeleteItemOptions = {
  filter: QueryFilterConfig;
  condition?: ConditionExpressions;
};

export const TopLevelFilterOperatorKeys = tuple('$and', '$or', '$not');
export type TopLevelFilterOperatorKey =
  typeof TopLevelFilterOperatorKeys[number];

export function isValidateTopLevelOperatorKey(
  key: any
): key is TopLevelFilterOperatorKey | string {
  return !!(
    typeof key === 'string' &&
    key &&
    (TopLevelFilterOperatorKeys.includes(key as any) || !key.startsWith('$'))
  );
}

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
  // '$size',
  '$in'
);

export type AttributeFilterKey = typeof AttributeFilterKeys[number];

export function isValidAttributeFilterKey(key: any): key is AttributeFilterKey {
  return AttributeFilterKeys.includes(key);
}

export type PutItemPayload<T> = {
  updated: boolean;
  created: boolean;
  item: T | null;
  error: string | null;
  original: any;
};

export type UpdateItemPayload<T> = {
  updated: boolean;
  created: boolean;
  item: T | null;
};

export abstract class Transporter {
  _client: any;

  abstract connect(): Promise<any>;

  abstract loadQuery(options: LoadQueryConfig): Promise<{
    items: DocumentBase[];
  }>;

  abstract getItem(options: GetItemConfig): Promise<{
    item: DocumentBase | null;
  }>;

  abstract putItem<T extends DocumentBase>(
    options: PutItemOptions<T>
  ): Promise<PutItemPayload<T>>;

  abstract updateItem<T extends DocumentBase>(
    options: UpdateItemConfig<T>
  ): Promise<UpdateItemPayload<T>>;

  abstract deleteItem<T extends DocumentBase>(
    options: DeleteItemOptions
  ): Promise<{
    item: T | null;
  }>;
}

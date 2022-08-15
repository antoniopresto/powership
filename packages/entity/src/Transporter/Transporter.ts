import { Darch } from '@darch/schema';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { devAssert } from '@darch/utils/lib/devAssert';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { MaybeArray, tuple } from '@darch/utils/lib/typeUtils';

import {
  CollectionIndexConfig,
  DocumentIndexField,
  getDocumentIndexFields,
} from './CollectionIndex';
import { parseUpdateExpression } from './parseUpdateExpression';

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

export type FilterRecord<Doc extends DocumentBase = Record<string, any>> =
  | {
      [K in keyof Doc]?:
        | Partial<AllFilterOperations>
        | PKSKValueType
        | undefined;
    }
  | { $and?: RootFilterOperators['$and'] }
  | { $or?: RootFilterOperators['$or'] }
  | { $not?: RootFilterOperators['$not'] }
  | { [K in DocumentIndexField]?: string };

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

export type IndexFilterRecord<
  PK extends string = string,
  SK extends string | undefined = string
> =
  | (
      | ({
          [K in PK]: Partial<AllIndexFilter> | PKSKValueType | undefined;
        } & {
          [K in SK as SK extends string ? SK : never]?:
            | Partial<AllIndexFilter>
            | PKSKValueType
            | undefined;
        })
      | { $and?: IndexFilterRecord<PK>[] }
      | { $or?: IndexFilterRecord<PK>[] }
      | { $not?: IndexFilterRecord<PK> }
    )
  | { [K in 'id']?: string };

export type DocumentBase = Record<string, any>;

export type QuerySort = 'ASC' | 'DESC';

export type FindManyConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  filter: IndexFilterRecord<PK, SK> extends infer F
    ? F extends unknown
      ? { [K in keyof F]: F[K] } & {}
      : never
    : never;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  after?: IndexFilterRecord<PK, SK> | string;
  consistent?: boolean;
  limit?: number;
  sort?: QuerySort;
  projection?: string[];
  dataloaderContext: Record<string, any> | null;
  condition?: FilterRecord<Doc>;
};

export type FindOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  filter: IndexFilterRecord<PK, SK> extends infer F
    ? F extends unknown
      ? { [K in keyof F]: F[K] } & {}
      : never
    : never;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  consistent?: boolean;
  projection?: string[];
  condition?: FilterRecord<Doc>;
  dataloaderContext: Record<string, any> | null;
};

export type FindByIdConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  id: string;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  consistent?: boolean;
  projection?: string[];
  condition?: FilterRecord<Doc>;
  dataloaderContext: Record<string, any> | null;
};

export type FindOneResult<Doc extends DocumentBase = DocumentBase> = {
  item: Doc | null;
};

export type CreateOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  item: Doc;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  condition?: FilterRecord<Doc>;
  replace?: boolean; // defaults to false
};

export type UpdateOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  filter: IndexFilterRecord<PK, SK> extends infer F
    ? F extends unknown
      ? { [K in keyof F]: F[K] } & {}
      : never
    : never;
  update: UpdateExpression;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  upsert?: boolean;
  condition?: FilterRecord<Doc>;
};

export type DeleteOneConfig<
  Item extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  filter: IndexFilterRecord<PK, SK> extends infer F
    ? F extends unknown
      ? { [K in keyof F]: F[K] } & {}
      : never
    : never;
  indexConfig: CollectionIndexConfig<
    Item,
    PK | (SK extends undefined ? PK : SK)
  >;
  condition?: FilterRecord<Item>;
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

export type CreateOneResult<T> = {
  created: boolean;
  updated: boolean;
  item: T | null;
  error?: string | null | undefined;
};

export type UpdateOneResult<T extends DocumentBase = DocumentBase> = {
  updated: boolean;
  created: boolean;
  item: T | null;
  error?: string | null | undefined;
};

export type FindManyResult<Doc extends DocumentBase = DocumentBase> = {
  items: Doc[];
};

export type PaginationResult<Doc extends DocumentBase = DocumentBase> = {
  edges: {
    cursor: string;
    node: Doc;
  }[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | undefined;
    endCursor: string | undefined;
  };
};

export type DeleteOneResult<T extends DocumentBase = DocumentBase> = {
  item: T | null;
};

type DocumentOptions<T> = {
  [K in keyof T as K extends 'indexConfig' ? never : K]: T[K];
};

export interface DocumentMethods<
  Doc extends DocumentBase,
  PK extends string,
  SK extends string | undefined
> {
  createOne(
    options: {
      [K in keyof DocumentOptions<
        CreateOneConfig<Doc, PK, SK>
      >]: DocumentOptions<CreateOneConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<{ [K in keyof CreateOneResult<Doc>]: CreateOneResult<Doc>[K] }>;

  findMany(
    options: {
      [K in keyof DocumentOptions<
        FindManyConfig<Doc, PK, SK>
      >]: DocumentOptions<FindManyConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<{ [K in keyof FindManyResult<Doc>]: FindManyResult<Doc>[K] } & {}>;

  paginate(
    options: {
      [K in keyof DocumentOptions<
        FindManyConfig<Doc, PK, SK>
      >]: DocumentOptions<FindManyConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    { [K in keyof PaginationResult<Doc>]: PaginationResult<Doc>[K] } & {}
  >;

  findOne(
    options: {
      [K in keyof DocumentOptions<FindOneConfig<Doc, PK, SK>>]: DocumentOptions<
        FindOneConfig<Doc, PK, SK>
      >[K];
    } & {}
  ): Promise<
    {
      [K in keyof FindOneResult<Doc>]: FindOneResult<Doc>[K];
    } & {}
  >;

  findById(
    options: {
      [K in keyof DocumentOptions<
        FindByIdConfig<Doc, PK, SK>
      >]: DocumentOptions<FindByIdConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    {
      [K in keyof FindOneResult<Doc>]: FindOneResult<Doc>[K];
    } & {}
  >;

  updateOne(
    options: {
      [K in keyof DocumentOptions<
        UpdateOneConfig<Doc, PK, SK>
      >]: DocumentOptions<UpdateOneConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    { [K in keyof UpdateOneResult<Doc>]: UpdateOneResult<Doc>[K] } & {}
  >;

  deleteOne(
    options: {
      [K in keyof DocumentOptions<
        DeleteOneConfig<Doc, PK, SK>
      >]: DocumentOptions<DeleteOneConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    { [K in keyof DeleteOneResult<Doc>]: DeleteOneResult<Doc>[K] } & {}
  >;
}

export abstract class Transporter {
  _client: any;

  abstract connect(): Promise<any>;

  abstract createOne<T extends DocumentBase>(
    options: CreateOneConfig
  ): Promise<CreateOneResult<T>>;

  abstract findMany(options: FindManyConfig): Promise<FindManyResult>;

  abstract paginate(options: FindManyConfig): Promise<PaginationResult>;

  abstract findOne(options: FindOneConfig): Promise<FindOneResult>;

  abstract findById(
    options: DocumentOptions<FindByIdConfig>
  ): Promise<FindOneResult>;

  abstract updateOne(options: UpdateOneConfig): Promise<UpdateOneResult>;

  abstract deleteOne(options: DeleteOneConfig): Promise<DeleteOneResult>;

  getDocumentIndexFields = getDocumentIndexFields;
  parseUpdateExpression = parseUpdateExpression;
}

export const transporterLoaderNames = tuple(
  'createOne',
  'findById',
  'findMany',
  'findOne',
  'updateOne',
  'deleteOne'
);

export type TransporterLoaderName = typeof transporterLoaderNames[number];

export type TransporterLoadersRecord = {
  [K in TransporterLoaderName]: Transporter[K];
};

export type TransporterLoader = TransporterLoadersRecord[TransporterLoaderName];

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

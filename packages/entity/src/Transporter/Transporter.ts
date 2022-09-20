import { CircularDeps } from '@darch/schema';
import { MaybePromise } from '@darch/utils';
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

export const DEFAULT_SORT = 'ASC';

export type TransporterFieldType = typeof FieldTypes[number];

export type PKSKValueType = string | number | null;

export type AllFilterOperations = {
  $between: [string, string] | [number, number];
  $contains: string | number | boolean | null;
  $eq: PKSKValueType | boolean;
  $exists: boolean;
  $gt: PKSKValueType;
  $gte: PKSKValueType;
  $in: unknown[];
  $lt: PKSKValueType;
  $lte: PKSKValueType;
  $matchString: string;
  $ne: PKSKValueType | boolean;
  $startsWith: string;
  $type: TransporterFieldType;
};

export type OneFilterOperation = {
  [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] };
}[keyof AllFilterOperations];

export type RootFilterOperators<
  Doc extends DocumentBase = Record<string, any>
> = {
  $and?: FilterRecord<Doc>[];
  $not?: FilterRecord<Doc>;
  $or?: FilterRecord<Doc>[];
};

export type FilterConditions<Doc extends DocumentBase = DocumentBase> = {
  [K in keyof (AllFilterOperations &
    RootFilterOperators<Doc>)]?: (AllFilterOperations &
    RootFilterOperators<Doc>)[K];
};

type _DocFilters<Doc> = {
  [K in keyof Doc]?: Record<string, any> | PKSKValueType | undefined;
};
export type FilterRecord<Doc extends DocumentBase = DocumentBase> =
  | _DocFilters<Doc>
  | ({
      $and?: RootFilterOperators<Doc>['$and'];
      $not?: RootFilterOperators<Doc>['$not'];
      $or?: RootFilterOperators<Doc>['$or'];
      _id?: string;
      _id0?: string;
      _id1?: string;
      _id2?: string;
      _id3?: string;
      id?: string;
    } & _DocFilters<Doc>);

export type AllIndexFilter = {
  $between: [string, string] | [number, number];
  $eq: PKSKValueType;
  $gt: PKSKValueType;
  $gte: PKSKValueType;
  $lt: PKSKValueType;
  $lte: PKSKValueType;
  $startsWith: PKSKValueType;
};

export type IndexFilter = {
  [K in keyof AllIndexFilter]?: AllIndexFilter[K];
};

export type IndexFilterRecord<
  PK extends string = string,
  SK extends string | undefined = string
> = {
  [K in PK]: Partial<AllIndexFilter> | PKSKValueType | undefined;
} & {
  [K in SK as SK extends string ? SK : never]?:
    | Partial<AllIndexFilter>
    | PKSKValueType
    | undefined;
};

export type DocumentBase = Record<string, any>;

export type QuerySort = 'ASC' | 'DESC';

export type LoaderContext = {
  [K: string]: unknown;
  userId?(...args: unknown[]): MaybePromise<string | undefined>;
};

export type MethodFilter<
  PK extends string,
  SK extends string | undefined
> = IndexFilterRecord<PK, SK> extends infer F
  ? F extends unknown
    ? { [K in keyof F]: F[K] }
    : {}
  : {};

export type FindManyConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  after?:
    | (IndexFilterRecord<PK, SK> extends infer R
        ? { [K in keyof R]: R[K] }
        : {})
    | string;

  condition?: FilterRecord<Doc>;
  consistent?: boolean;
  context: LoaderContext;
  filter: MethodFilter<PK, SK> extends infer R ? { [K in keyof R]: R[K] } : {};
  first?: number;

  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;

  projection?: string[];
  sort?: QuerySort;
};

export type FindOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  consistent?: boolean;
  context: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  projection?: string[];
};

export type FindByIdConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  consistent?: boolean;
  context: LoaderContext;
  id: string;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  projection?: string[];
};

export type CreateOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  // defaults to false
  context: LoaderContext;
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  item: Doc;
  replace?: boolean;
};

export type UpdateOneConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  context: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  update: UpdateExpression;
  upsert?: boolean;
};

export type DeleteOneConfig<
  Item extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Item>;
  context: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Item,
    PK | (SK extends undefined ? PK : SK)
  >;
};

export type FindOneResult<Doc extends DocumentBase = DocumentBase> = {
  item: Doc | null;
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
  // from array or set
  $addToSet?: { [K in keyof Item]?: Item[K] extends (infer T)[] ? T[] : never };
  // number
  $append?: ListUpdateExpression<Item>;
  // attr | set | list
  $inc?: { [K in keyof Item]?: Item[K] extends number ? number : never };
  // list
  $prepend?: ListUpdateExpression<Item>;
  // attr | set | list
  $pull?: { [K in keyof Item]?: Item[K] extends (infer T)[] ? T[] : never };
  // list
  $remove?: MaybeArray<UnsetUpdateExpression<Item>>;
  $set?: { [K in keyof Item]?: Item[K] };
  // attr | set | list
  $setIfNull?: { [K in keyof Item]?: Item[K] };
  // attr | set | list
  $setOnInsert?: { [K in keyof Item]?: Item[K] }; //  array or set
};

export type UpdateExpressionKey = Extract<keyof UpdateExpression<any>, string>;

export const FilterConditionsParsers: {
  [K in keyof FilterConditions]-?: (input: any) => FilterConditions[K];
} = {
  $and(input: unknown) {
    if (!Array.isArray(input)) {
      return devAssert(`Expected input be an array`, { input });
    }

    return input.map((sub: unknown, index) => {
      assertFieldFilter(sub, `at position ${index}`);
      return sub;
    });
  },
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
  $contains: CircularDeps.union(['string', 'float', 'boolean', 'null'] as const)
    .parse,
  $eq: CircularDeps.union(['null', 'boolean', 'string', 'float'] as const)
    .parse,
  $exists: CircularDeps.boolean().parse,
  $gt: CircularDeps.union(['string', 'float'] as const).parse,

  $gte: CircularDeps.union(['string', 'float'] as const).parse,

  $in: CircularDeps.unknown().toList().parse,

  $lt: CircularDeps.union(['string', 'float'] as const).parse,

  $lte: CircularDeps.union(['string', 'float'] as const).parse,
  $matchString: CircularDeps.string().parse,
  $ne: CircularDeps.union(['null', 'boolean', 'string', 'float'] as const)
    .parse,
  $not(input: unknown) {
    assertFieldFilter(input);
    return input;
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

  $startsWith: CircularDeps.string().parse,

  $type(input: any): TransporterFieldType {
    return FieldTypes.includes(input)
      ? input
      : devAssert('invalid input for $type', { input });
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
  error?: string | null | undefined;
  item: T | null;
  updated: boolean;
};

export type UpdateOneResult<T extends DocumentBase = DocumentBase> = {
  created: boolean;
  error?: string | null | undefined;
  item: T | null;
  updated: boolean;
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
    endCursor: string | undefined;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | undefined;
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

  deleteOne(
    options: {
      [K in keyof DocumentOptions<
        DeleteOneConfig<Doc, PK, SK>
      >]: DocumentOptions<DeleteOneConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    { [K in keyof DeleteOneResult<Doc>]: DeleteOneResult<Doc>[K] } & {}
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

  findMany(
    options: {
      [K in keyof DocumentOptions<
        FindManyConfig<Doc, PK, SK>
      >]: DocumentOptions<FindManyConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<{ [K in keyof FindManyResult<Doc>]: FindManyResult<Doc>[K] } & {}>;

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

  paginate(
    options: {
      [K in keyof DocumentOptions<
        FindManyConfig<Doc, PK, SK>
      >]: DocumentOptions<FindManyConfig<Doc, PK, SK>>[K];
    } & {}
  ): Promise<
    { [K in keyof PaginationResult<Doc>]: PaginationResult<Doc>[K] } & {}
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
  'deleteOne',
  'paginate'
);

export type TransporterLoaderName = typeof transporterLoaderNames[number];

export type TransporterLoadersRecord = {
  [K in TransporterLoaderName]: Transporter[K];
};

export type TransporterLoader = TransporterLoadersRecord[TransporterLoaderName];

export function _ensureTransporterMethodsImplementation<
  T extends { [K in TransporterLoaderName]: unknown }
>(ops: T): T {
  transporterLoaderNames.forEach((m) => {
    if (ops[m] === undefined) throw new Error(`missing method ${m}`);
  });
  return ops;
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

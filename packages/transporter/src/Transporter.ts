import { CircularDeps } from '@backland/schema';
import { Cast, MaybePromise } from '@backland/utils';
import { RuntimeError } from '@backland/utils';
import { devAssert } from '@backland/utils';
import { getTypeName } from '@backland/utils';
import { MaybeArray, tuple } from '@backland/utils';
import {
  Join,
  MatchKeysAndValues,
  NestedPaths,
  Query,
  UpdateDefinition,
} from 'aggio';

import { CollectionIndexConfig, DocumentIndexField } from './CollectionIndex';

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

export type EntityFilters<Doc> = Query<Doc>;

export type FilterRecord<Doc extends DocumentBase = DocumentBase> =
  | EntityFilters<Doc>
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
    } & EntityFilters<Doc>);

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
  context?: LoaderContext;
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
  context?: LoaderContext;
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
  context?: LoaderContext;
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
  context?: LoaderContext;
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
  context?: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  update: UpdateExpression<Doc>;
  upsert?: boolean;
};

export type UpdateManyConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  context?: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
  update: UpdateExpression<Doc>;
  upsert?: boolean;
};

export type DeleteManyConfig<
  Doc extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Doc>;
  context?: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Doc,
    PK | (SK extends undefined ? PK : SK)
  >;
};

export type DeleteOneConfig<
  Item extends DocumentBase = DocumentBase,
  PK extends string = string,
  SK extends string | undefined = string
> = {
  condition?: FilterRecord<Item>;
  context?: LoaderContext;
  filter: MethodFilter<PK, SK> | { [K in DocumentIndexField]?: string };
  indexConfig: CollectionIndexConfig<
    Item,
    PK | (SK extends undefined ? PK : SK)
  >;
};

export type FindOneResult<Doc extends DocumentBase = DocumentBase> = {
  item: Doc | null;
};

export type ArrayOperationRecord<
  TSchema,
  KV extends string = '$each'
> = MatchKeysAndValues<TSchema> extends infer All
  ? {
      [K in keyof All as [NonNullable<All[K]>] extends [any[]] ? K : never]?:
        | Cast<NonNullable<All[K]>, any[]>[number]
        | { [Kv in KV]?: Cast<NonNullable<All[K]>, any[]>[number][] };
    }
  : any;

export type UpdateExpression<TSchema = Record<string, any>> = {
  // from array or set
  $addToSet?: ArrayOperationRecord<TSchema>;
  // number
  $append?: ArrayOperationRecord<TSchema>;
  // attr | set | list
  $inc?: UpdateDefinition<TSchema>['$inc'];
  // list
  $prepend?: ArrayOperationRecord<TSchema>;
  // attr | set | list
  $pull?: ArrayOperationRecord<TSchema, '$in'>;
  // list
  $remove?: MaybeArray<`${Join<NestedPaths<TSchema>, '.'>}${
    | `.${string}`
    | ''}`>;
  // attr | set | list
  $set?: UpdateDefinition<TSchema>['$set'];
  // attr | set | list
  $setIfNull?: UpdateDefinition<TSchema>['$set'];
  // attr | set | list
  $setOnInsert?: UpdateDefinition<TSchema>['$set'];
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

export type UpdateManyResult = {
  error?: string | null | undefined;
  modifiedCount: number | null;
  upsertedId: string | null;
};

export type DeleteManyResult = {
  deletedCount: number;
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
    endCursor: string | undefined;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | undefined;
  };
};

export type DeleteOneResult<T extends DocumentBase = DocumentBase> = {
  item: T | null;
};

export interface Transporter {
  _client: any;

  connect(): Promise<any>;

  createOne<T extends DocumentBase>(
    options: CreateOneConfig
  ): Promise<CreateOneResult<T>>;

  deleteMany(options: DeleteManyConfig): Promise<DeleteManyResult>;

  deleteOne(options: DeleteOneConfig): Promise<DeleteOneResult>;

  findById(options: FindByIdConfig): Promise<FindOneResult>;

  findMany(options: FindManyConfig): Promise<FindManyResult>;

  findOne(options: FindOneConfig): Promise<FindOneResult>;

  paginate(options: FindManyConfig): Promise<PaginationResult>;

  updateMany(options: UpdateManyConfig): Promise<UpdateManyResult>;

  updateOne(options: UpdateOneConfig): Promise<UpdateOneResult>;
}

export const transporterLoaderNames = tuple(
  'createOne',
  'findById',
  'findMany',
  'findOne',
  'updateOne',
  'updateMany',
  'deleteOne',
  'deleteMany',
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

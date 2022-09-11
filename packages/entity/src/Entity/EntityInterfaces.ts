import {
  ExtendDefinitionResult,
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  parseObjectDefinition,
  ToFinalField,
} from '@brabo/schema';
import { MaybeArray, UnionToIntersection } from '@brabo/utils';

import {
  AnyCollectionIndexConfig,
  CreateOneResult,
  DocumentBase,
  DocumentIndexItem,
  DocumentMethods,
  LoaderContext,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  TransporterLoaderName,
} from '../Transporter';

import {
  EntityGraphQLConditionsDef,
  EntityGraphQLConditionsType,
} from './EntityFilterConditionType';
import {
  EntityDocFromType,
  EntityFieldResolver,
  EntityOptions,
} from './EntityOptions';
import { EntityHookOptions } from './EntityPlugin';
import { EntityOperationInfosRecord } from './entityOperationContextTypes';
import { EdgeType, PaginationType } from './paginationUtils';

export type EntityGeneratedFields = ReturnType<
  typeof createEntityDefaultFields
>;

export const createEntityDefaultFields = () =>
  _EntityGeneratedFields({
    createdAt: { type: 'date' },
    createdBy: {
      optional: true,
      type: 'string',
    },
    id: { type: 'string' },
    ulid: { type: 'ulid' },
    updatedAt: { type: 'date' },
    updatedBy: {
      optional: true,
      type: 'string',
    },
  });

type GetLoaderFilterDef<Loader, DocDef> = Loader extends (
  config: infer Config
) => any
  ? Config extends { filter: infer Filter }
    ? UnionToIntersection<Filter> extends infer AllFilter
      ? {
          [K in keyof AllFilter as K extends keyof DocDef
            ? K
            : never]: K extends keyof DocDef ? DocDef[K] : never;
        } extends infer R
        ? {
            // transforming optional args as optional field definitions
            [K in keyof R]-?: [Extract<R[K], undefined>] extends [never]
              ? ToFinalField<R[K]>
              : Omit<
                  ToFinalField<Exclude<R[K], undefined>>,
                  '__infer' | 'optional'
                > & { optional: true } extends infer F
              ? { [K in keyof F]: F[K] } & {}
              : never;
          }
        : never
      : never
    : never
  : never;

export type DefaultEntityFields = {
  createdAt: Date;
  createdBy: string | undefined;
  id: string;
  ulid: string;
  updatedAt: Date;
  updatedBy: string | undefined;
};

export type EntityFinalDefinition<InputDef> = InputDef extends {
  __isGraphType: true;
  definition: infer D;
}
  ? D extends { def: infer Definition }
    ? {
        [K in keyof EntityGeneratedFields as K extends keyof Definition
          ? never
          : K]: EntityGeneratedFields[K];
      } & {
        [K in keyof Definition]: Definition[K];
      } extends infer R
      ? {
          [K in keyof R]: R[K];
        }
      : never
    : never
  : never;

type _GetLoaderUtils<Loader, Type> = Loader extends unknown
  ? EntityFinalDefinition<Type> extends infer Def
    ? GetLoaderFilterDef<Loader, Def> extends infer Filter
      ? Filter extends unknown
        ? {
            filterDef: Filter;
            queryArgs: {
              after: {
                optional: true;
                type: 'ID';
              };
              condition: Type extends {
                definition: infer Def;
              }
                ? Def extends { def: infer Def }
                  ? {
                      def: EntityGraphQLConditionsDef<Def>;
                      optional: true;
                      type: 'object';
                    }
                  : never
                : never;
              filter: {
                def: Filter;
                type: 'object';
              };
              first: {
                optional: true;
                type: 'int';
              };
            };
          }
        : never
      : never
    : never
  : never;

interface PrimaryEntityMethods<Options extends EntityOptions> {
  conditionsDefinition: Options['type'] extends {
    definition: infer Def;
  }
    ? Def extends { def: infer Def }
      ? {
          def: EntityGraphQLConditionsType<Def>;
          type: 'object';
        }
      : never
    : never;
  edgeType: EdgeType<Options['type']>;
  getDocumentId(doc: Record<string, any>): string;

  indexGraphTypes: {
    [K in Options['indexes'][number]['name']]: GraphType<{
      object: ObjectDefinitionInput;
    }>;
  };

  indexes: Options['indexes'];

  inputDefinition: Options['type'] extends { definition: infer Def }
    ? Def extends { def: infer Def }
      ? {
          [K in keyof Def]: ToFinalField<Def[K]>;
        }
      : never
    : never;

  name: Options['name'];

  originType: Options['type'];
  paginationType: PaginationType<Options['type']>;

  parse: (
    ...args: Parameters<Options['type']['parse']>
  ) => EntityDocFromType<Options['type']>;

  parseDocumentIndexes(doc: Record<string, any>): ParsedDocumentIndexes;

  transporter: Options['transporter'];

  type: ((x: Options['type']) => any) extends (x: infer Type) => any
    ? GraphType<{ object: EntityFinalDefinition<Type> }>
    : never;

  updateDefinition: ((x: Options['type']) => any) extends (x: infer Type) => any
    ? Type extends { definition: { def: infer D } }
      ? {
          [K in keyof D]: ToFinalField<D[K]> extends infer R
            ? {
                [K in keyof R as K extends '__infer'
                  ? never
                  : K]: K extends 'optional' ? true : R[K];
              } & {}
            : never;
        }
      : never
    : never;
}

// export type EntityGraphType<T> = T extends
export type Entity<Options extends EntityOptions> = Options['type'] extends {
  parse(...args: any): any;
}
  ? PrimaryEntityMethods<Options> extends infer PropsFromConfig
    ? EntityLoaders<
        EntityDocFromType<Options['type']>,
        {
          entity: Options['name'];
          indexes: Options['indexes'];
        }
      > extends infer Loaders
      ? {
          [K in keyof Loaders]: _GetLoaderUtils<
            Loaders[K],
            Options['type']
          > extends infer Utils
            ? [Utils] extends [never]
              ? Loaders[K]
              : Loaders[K] & Utils
            : never;
        } extends infer LoaderWithUtils
        ? {
            [K in
              | keyof PropsFromConfig
              | keyof LoaderWithUtils
              | 'loaders']: K extends keyof LoaderWithUtils
              ? LoaderWithUtils[K]
              : K extends 'loaders'
              ? LoaderWithUtils
              : //
              K extends keyof PropsFromConfig
              ? PropsFromConfig[K]
              : //
                never;
          } extends infer R
          ? WithExtend<R>
          : never
        : never
      : never
    : never
  : never;

export type _EntityMethods<Config extends EntityOptions> = WithExtend<
  PrimaryEntityMethods<Config>
>;

type WithExtend<T> = T extends {
  parse(...a: any[]): infer Doc;
}
  ? Doc extends DocumentBase
    ? {
        [K in
          | keyof T
          | 'extend'
          | 'addHooks'
          | 'addRelations']: K extends keyof T
          ? T[K]
          : //
          //
          // EXTEND
          K extends 'extend'
          ? <E>(
              transformer: (
                current: T,
                utils: { extend: <V>(value: V) => ExtendDefinitionResult<V, V> }
              ) => E
            ) => Omit<T, keyof E> & E extends infer R
              ? WithExtend<{ [K in keyof R]: R[K] } & {}>
              : never
          : //
          //
          //
          // ADD_HOOKS
          K extends 'addHooks'
          ? (
              options: MaybeArray<
                EntityHookOptions<Doc, EntityOptions['indexes']>
              >
            ) => WithExtend<T>
          : //
          //
          //
          //
          K extends 'addRelations'
          ? <
              Context extends LoaderContext,
              Definition extends ObjectFieldInput,
              ArgsDef extends ObjectDefinitionInput
            >(
              options: EntityFieldResolver<Context, Definition, ArgsDef, Doc>
            ) => WithExtend<T>
          : never;
      }
    : never
  : never;

export type EntityOperationInfoContext<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext
> = EntityOperationInfosRecord<
  Document,
  Indexes,
  Context
>[TransporterLoaderName];

type GetFieldsUsedInIndexes<IndexItem, Kind> = Kind extends keyof IndexItem
  ? IndexItem[Kind] extends Array<infer F> | ReadonlyArray<infer F>
    ? F extends `.${infer Field}`
      ? Field
      : never
    : never
  : never;

type EntityTransporterMethod<
  Method,
  Context extends LoaderContext = Record<string, any>
> = Method extends (config: infer Config) => infer Result
  ? ((
      config: Config & { context: Context } extends infer R
        ? {
            [K in keyof R as K extends 'context' ? never : K]: R[K];
          } & { context: Context }
        : never
    ) => Result) & {
      indexInfo: [ParsedIndexKey, ...ParsedIndexKey[]];
    }
  : never;

export type IndexMethods<
  Document extends DocumentBase,
  IndexItem,
  Context extends LoaderContext = Record<string, any>
> = {
  [M in keyof DocumentMethods<any, any, any>]: EntityTransporterMethod<
    DocumentMethods<
      Document,
      GetFieldsUsedInIndexes<IndexItem, 'PK'>,
      GetFieldsUsedInIndexes<IndexItem, 'SK'>
    >[M],
    Context
  >;
};

type GetIndexByName<
  Union extends DocumentIndexItem<any, any>,
  Name extends string
> = Union extends { [K: string]: unknown; name: Name } ? Union : never;

type OneIndexMethod<
  Doc extends DocumentBase,
  Indexes,
  Methods = {}
> = Indexes extends readonly [infer CurrentIndex, ...infer Rest]
  ? OneIndexMethod<
      Doc,
      Rest,
      {
        [K in keyof IndexMethods<Doc, CurrentIndex>]: K extends keyof Methods
          ? EntityTransporterMethod<
              IndexMethods<Doc, CurrentIndex>[K] extends (
                ...args: infer Args
              ) => infer Result
                ? (...args: Args) => Result
                : never
            > &
              EntityTransporterMethod<
                Methods[K] extends (...args: infer Args) => infer Result
                  ? (...args: Args) => Result
                  : never
              >
          : IndexMethods<Doc, CurrentIndex>[K];
      }
    >
  : [keyof Methods] extends [never]
  ? never
  : Methods;

type EntityLoaders<
  Doc extends DocumentBase,
  IndexConfig extends AnyCollectionIndexConfig
> = UnionToIntersection<
  {
    [IndexName in IndexConfig['indexes'][number]['name']]: {
      [M in keyof IndexMethods<any, any>]: {
        [L in `${M}${Capitalize<IndexName>}`]: IndexMethods<
          Doc,
          GetIndexByName<IndexConfig['indexes'][number], IndexName>
        >[M];
      };
    };
  }[IndexConfig['indexes'][number]['name']][Exclude<
    keyof IndexMethods<any, any>,
    'createOne'
  >]
> &
  OneIndexMethod<Doc, IndexConfig['indexes']> & {
    createOne: EntityTransporterMethod<
      DocumentMethods<
        //
        // Doc with DefaultEntityFields as optional
        {
          [K in keyof Doc as K extends keyof DefaultEntityFields
            ? never
            : K]: Doc[K];
        } & {
          [K in keyof Doc as K extends keyof DefaultEntityFields
            ? K
            : never]?: Doc[K];
        } extends infer R
          ? { [K in keyof R]: R[K] } & {}
          : never,
        // <--
        //
        GetFieldsUsedInIndexes<IndexConfig['indexes'][number], 'PK'>,
        GetFieldsUsedInIndexes<IndexConfig['indexes'][number], 'SK'>
      >['createOne'] extends infer CreateOne
        ? CreateOne extends (config: infer Config) => any
          ? (config: Config) => Promise<CreateOneResult<Doc>>
          : never
        : never
    >;
  };

function _EntityGeneratedFields<
  T extends { [K in keyof DefaultEntityFields]: ObjectFieldInput }
>(
  input: T
): {
  [K in keyof T]: {
    [S in keyof ToFinalField<T[K]> as S extends '__infer'
      ? never
      : S]: ToFinalField<T[K]>[S];
  } & {};
} {
  return parseObjectDefinition(input).definition as any;
}

export type EntityDocument<Document> = {
  [K in keyof (DefaultEntityFields & Document)]: (DefaultEntityFields &
    Document)[K];
} & {};

export type AnyEntityDocument = EntityDocument<{ [K: string]: unknown }>;

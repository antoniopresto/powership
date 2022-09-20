import {
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  parseObjectDefinition,
  ToFinalField,
} from '@brabo/schema';
import { UnionToIntersection } from '@brabo/utils';

import {
  CreateOneResult,
  DocumentBase,
  DocumentMethods,
  LoaderContext,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  TransporterLoaderName,
} from '../Transporter';

import { EntityGraphQLConditionsType } from './EntityFilterConditionType';
import { EntityDocFromType, EntityOptions } from './EntityOptions';
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

// type GetLoaderFilterDef<Loader, DocDef> = Loader extends (
//   config: infer Config
// ) => any
//   ? Config extends { filter: infer Filter }
//     ? UnionToIntersection<Filter> extends infer AllFilter
//       ? {
//           [K in keyof AllFilter as K extends keyof DocDef
//             ? K
//             : never]: K extends keyof DocDef ? DocDef[K] : never;
//         } extends infer R
//         ? {
//             // transforming optional args as optional field definitions
//             [K in keyof R]-?: [Extract<R[K], undefined>] extends [never]
//               ? ToFinalField<R[K]>
//               : Omit<
//                   ToFinalField<Exclude<R[K], undefined>>,
//                   '__infer' | 'optional'
//                 > & { optional: true } extends infer F
//               ? { [K in keyof F]: F[K] } & {}
//               : never;
//           }
//         : never
//       : never
//     : never
//   : never;

export type DefaultEntityFields = {
  createdAt: Date;
  createdBy: string | undefined;
  id: string;
  ulid: string;
  updatedAt: Date;
  updatedBy: string | undefined;
};

export type EntityFinalDefinition<InputDef> = InputDef extends {
  definition: { def: infer Definition };
}
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
  : never;

// type _GetLoaderUtils<Loader, Type> = Loader extends unknown
//   ? EntityFinalDefinition<Type> extends infer Def
//     ? GetLoaderFilterDef<Loader, Def> extends infer Filter
//       ? Filter extends unknown
//         ? {
//             filterDef: Filter;
//             queryArgs: {
//               after: {
//                 optional: true;
//                 type: 'ID';
//               };
//               condition: Type extends {
//                 definition: infer Def;
//               }
//                 ? Def extends { def: infer Def }
//                   ? {
//                       def: EntityGraphQLFieldConditionsType<Def>;
//                       optional: true;
//                       type: 'object';
//                     }
//                   : never
//                 : never;
//               filter: {
//                 def: Filter;
//                 type: 'object';
//               };
//               first: {
//                 optional: true;
//                 type: 'int';
//               };
//             };
//           }
//         : never
//       : never
//     : never
//   : never;

type _EDoc<Options extends EntityOptions> = EntityDocFromType<Options['type']>;

export type Entity<Options extends EntityOptions> = {
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
              }
            : never;
        }
      : never
    : never;
} & UnionToIntersection<
  {
    // METHODS WITH FILTER BY INDEX
    [IndexKey in _KEY<Options['indexes']>]: {
      [L in IndexKey]: MethodsWithIndexBasedFilter<
        _EDoc<Options>,
        _VAL<Options['indexes'], L>
      >; // TODO UTILS
    }[IndexKey];
  }[_KEY<Options['indexes']>]
> & {
    // CREATE_ONE
    createOne: EntityTransporterMethod<
      DocumentMethods<
        //
        // Doc with DefaultEntityFields as optional
        {
          [K in keyof _EDoc<Options> as K extends keyof DefaultEntityFields
            ? never
            : K]: _EDoc<Options>[K];
        } & {
          [K in keyof _EDoc<Options> as K extends keyof DefaultEntityFields
            ? K
            : never]?: _EDoc<Options>[K];
        },
        GetFieldsUsedInIndexes<Options['indexes'][number], 'PK'>,
        GetFieldsUsedInIndexes<Options['indexes'][number], 'SK'>
      >['createOne'] extends infer CreateOne
        ? CreateOne extends (config: infer Config) => any
          ? (config: Config) => Promise<CreateOneResult<_EDoc<Options>>>
          : never
        : never
    >;
  };

type _VAL<LIST, K> = K extends keyof LIST ? LIST[K] : any;
type _KEY<T> = Exclude<keyof T, keyof any[]>;

// type WithExtend<T> = T; // FIXME
// type WithExtend<T> = T extends {
//   parse(...a: any[]): infer Doc;
// }
//   ? Doc extends DocumentBase
//     ? {
//         [K in
//           | keyof T
//           | 'extend'
//           | 'addHooks'
//           | 'addRelations']: K extends keyof T
//           ? T[K]
//           : //
//           //
//           // EXTEND
//           K extends 'extend'
//           ? <E>(
//               transformer: (
//                 current: T,
//                 utils: { extend: <V>(value: V) => ExtendDefinitionResult<V, V> }
//               ) => E
//             ) => Omit<T, keyof E> & E extends infer R
//               ? WithExtend<{ [K in keyof R]: R[K] } & {}>
//               : never
//           : //
//           //
//           //
//           // ADD_HOOKS
//           K extends 'addHooks'
//           ? (
//               options: MaybeArray<
//                 EntityHookOptions<Doc, EntityOptions['indexes']>
//               >
//             ) => WithExtend<T>
//           : //
//           //
//           //
//           //
//           K extends 'addRelations'
//           ? <
//               Context extends LoaderContext,
//               Definition extends ObjectFieldInput,
//               ArgsDef extends ObjectDefinitionInput | undefined
//             >(
//               options: EntityFieldResolver<Context, Definition, ArgsDef, Doc>
//             ) => WithExtend<T>
//           : never;
//       }
//     : never
//   : never;

export type EntityOperationInfoContext =
  EntityOperationInfosRecord[TransporterLoaderName];

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

export type MethodsWithIndexBasedFilter<
  Document extends DocumentBase,
  IndexItem
> = {
  //  CREATE_ONE IS EXCLUDED because there is no filters
  [M in keyof DocumentMethods<any, any, any> as M extends `createOne`
    ? never
    : M]: EntityTransporterMethod<
    DocumentMethods<
      Document,
      GetFieldsUsedInIndexes<IndexItem, 'PK'>,
      GetFieldsUsedInIndexes<IndexItem, 'SK'>
    >[M],
    LoaderContext
  >;
};

// type Index = {
//   name: 'a';
//   field: '_id';
//   PK: ['.name'];
//   SK: ['.userId'];
// };
// type Index2 = {
//   name: 'b';
//   field: '_id2';
//   PK: ['.userId'];
//   SK: ['.userId'];
// };
//
// type Doc = { name: string; userId: number; age?: number };
// type GT = {
//   definition: { def: { name: 'string'; userId: 'int'; age: 'int?' } };
// };
//
// type UPK = GetFieldsUsedInIndexes<Index, 'PK'>;
// type USK = GetFieldsUsedInIndexes<Index, 'SK'>;
// type M1 = DocumentMethods<Doc, UPK, USK>;
// type M2 = IndexMethods<Doc, Index, {}>;
// type OIM = OneIndexMethod<Doc, [Index, Index2]>;
// type LU = EntityLoadersWithUtils<GT, Doc, [Index, Index2]>;
//
// const x = {} as LU;
// type P = Parameters<typeof x.findOne>[0];
// type E = PromiseType<ReturnType<typeof x.findOne>>;
// const b = {} as P;
// b.filter.userId = { $eq: '' };
// const c = x.findOne.queryArgs.filter.def;

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

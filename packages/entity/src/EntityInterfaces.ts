import {
  ExtendDefinitionResult,
  GraphType,
  LazyParseGraphTypePayload,
  ObjectDefinitionInput,
  ObjectFieldInput,
  parseObjectDefinition,
  ToFinalField,
} from '@backland/schema';
import {
  CollectionConfigIndexes,
  CreateOne,
  DocumentBase,
  LoaderContext,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  Transporter,
  TransporterLoaderName,
  TransporterLoadersRecord,
} from '@backland/transporter';
import {
  DeleteMany,
  DeleteOne,
  FindById,
  FindMany,
  FindOne,
  Paginate,
  UpdateMany,
  UpdateOne,
} from '@backland/transporter/src/IndexMethods';
import { Compute } from '@backland/utils';

import {
  EntityGraphQLConditionsType,
  EntityGraphQLFieldConditionsType,
} from './EntityFilterConditionType';
import {
  _EntityGraphType,
  EntityDocFromType,
  EntityFieldResolver,
  EntityOptions,
} from './EntityOptions';
import { EntityHooks } from './EntityPlugin';
import { EntityOperationInfosRecord } from './entityOperationContextTypes';
import {
  AddIndexRelationsFn,
  EntityIndexRelationsRecord,
} from './indexRelations/addEntityIndexRelations';
import { EdgeType, PaginationType } from './paginationUtils';

export type EntityGeneratedFields = ReturnType<
  typeof createEntityDefaultFields
>;

export type _Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

export const createEntityDefaultFields = () =>
  _EntityGeneratedFields({
    _v: {
      hidden: true,
      ulid: { autoCreate: true },
    },
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

type GetLoaderFilterDef<LoaderConfig, DocDef> =
  //
  LoaderConfig extends { filter: infer Filter }
    ? {
        [K in keyof Filter as K extends keyof DocDef
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
    : never;

export type EntityDefaultFields = {
  _v: string;
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

type Utils<
  LoaderConfig,
  Options extends EntityOptions,
  Def extends Options['type']['definition']['def'] = Options['type']['definition']['def'],
  FilterDef extends GetLoaderFilterDef<LoaderConfig, Def> = GetLoaderFilterDef<
    LoaderConfig,
    Def
  >
> = Compute<{
  indexInfo: [ParsedIndexKey, ...ParsedIndexKey[]];
  filterDef: FilterDef;
  queryArgs: {
    after: 'ID?';
    condition: {
      object: EntityGraphQLFieldConditionsType<Def>;
      optional: true;
    };
    filter: { type: 'object'; def: FilterDef };
    first: {
      optional: true;
      type: 'int';
    };
  };
}>;

type WithUtils<Loader, Options extends EntityOptions> = Loader extends (
  config: infer Config
) => infer Res
  ? ((config: Config) => Res) & Utils<Config, Options>
  : Loader;

type _Entity<
  Options extends EntityOptions,
  Def extends Options['type']['definition']['def'] = Options['type']['definition']['def'],
  InputDoc extends ReturnType<Options['type']['parse']> = ReturnType<
    Options['type']['parse']
  >,
  OutputDoc extends _getDocType<Options> = _getDocType<Options>,
  Indexes extends Options['indexes'] = Options['indexes']
> = {
  __isBLEntity: true;

  _hooks: EntityHooks;
  addIndexRelations: AddIndexRelationsFn<Options>;

  aliasPaths: string[];

  clone: <O extends EntityOptions>(
    handler: ((originalOptions: Options) => O) | Partial<O>
  ) => Entity<O>;

  conditionsDefinition: {
    def: EntityGraphQLConditionsType<Def>;
    type: 'object';
  };

  databaseType: ((x: Options['type']) => any) extends (x: infer Type) => any
    ? GraphType<{ object: EntityFinalDefinition<Type> }>
    : never;

  edgeType: EdgeType<Options['type']>;

  extendType: <T extends _EntityGraphType>(
    handler: (
      helper: ExtendDefinitionResult<Options['type'], Options['type']>,
      originalOptions: Options
    ) => T
  ) => Entity<{ [K in keyof Options]: K extends 'type' ? T : Options[K] } & {}>;

  getDocumentId(doc: Record<string, any>): string;

  readonly hasAliases: boolean;

  indexGraphTypes: {
    [K in Options['indexes'][number]['name']]: GraphType<{
      object: ObjectDefinitionInput;
    }>;
  };

  // paths of found aliases in entity schemas or sub schemas
  indexRelations: EntityIndexRelationsRecord;

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

  setOption: <ON extends keyof EntityOptions, NV extends EntityOptions[ON]>(
    optionName: ON,
    value: NV
  ) => Entity<
    _Cast<
      { [K in keyof Options]: K extends ON ? NV : Options[K] },
      EntityOptions
    >
  >;

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

  usedOptions: Options;

  createOne: CreateOne<InputDoc, _getDocType<Options>, Indexes>;
  findOne: WithUtils<FindOne<OutputDoc, Indexes>, Options>;
  findMany: WithUtils<FindMany<OutputDoc, Indexes>, Options>;
  paginate: WithUtils<Paginate<OutputDoc, Indexes>, Options>;
  deleteMany: WithUtils<DeleteMany<OutputDoc, Indexes>, Options>;
  deleteOne: WithUtils<DeleteOne<OutputDoc, Indexes>, Options>;
  findById: WithUtils<FindById<OutputDoc, Indexes>, Options>;
  updateMany: WithUtils<UpdateMany<OutputDoc, Indexes>, Options>;
  updateOne: WithUtils<UpdateOne<OutputDoc, Indexes>, Options>;
};

export type Entity<Options extends EntityOptions> =
  //
  _Entity<Options> & WithExtend<Options, _Entity<Options>>;

type _getDocType<Options extends EntityOptions> = EntityDocFromType<
  Options['type']
>;

type ExtendMethodKeys = 'addHooks' | 'addRelations' | 'extend';

type ExcludeExtend<E> = {
  [K in keyof E as K extends ExtendMethodKeys ? never : K]: E[K];
} & {};

type WithExtend<Options extends EntityOptions, Origin> = {
  addHooks: (options: (hooks: EntityHooks) => any) => Origin;

  addRelations: <
    Context extends LoaderContext,
    Definition extends ObjectFieldInput,
    ArgsDef extends ObjectDefinitionInput | undefined
  >(
    options: EntityFieldResolver<
      Context,
      Definition,
      ArgsDef,
      _getDocType<Options>
    >
  ) => ExcludeExtend<Origin> & WithExtend<Options, ExcludeExtend<Origin>>;

  extend: <TransformerReturn>(
    transformer: (
      current: ExcludeExtend<Origin> &
        WithExtend<Options, ExcludeExtend<Origin>>,
      utils: {
        extend: <V>(value: V) => ExtendDefinitionResult<V, V>;
      }
    ) => TransformerReturn
  ) => {
    [K in
      | keyof TransformerReturn
      | keyof Origin]: K extends keyof TransformerReturn
      ? TransformerReturn[K]
      : K extends keyof Origin
      ? Origin[K]
      : never;
  };
};

export type EntityOperationInfoContext<
  LoaderName extends TransporterLoaderName = TransporterLoaderName
> = EntityOperationInfosRecord[LoaderName];

export function isEntityContextOfLoader<
  LoaderName extends TransporterLoaderName
>(
  t: EntityOperationInfoContext,
  name: LoaderName
): t is EntityOperationInfoContext<LoaderName> {
  return t.loaderName === name;
}

export type EntityLoaderConfig<
  Method extends TransporterLoaderName,
  Context extends LoaderContext = Record<string, any>
> = TransporterLoadersRecord[Method] extends (config: infer Config) => any
  ? Config & { context: Context } extends infer R
    ? {
        [K in keyof R as K extends 'context' ? never : K]: R[K];
      } & { context: Context }
    : never
  : any;

function _EntityGeneratedFields<
  T extends { [K in keyof EntityDefaultFields]: ObjectFieldInput }
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

export type EntityDocument<Document extends DocumentBase = DocumentBase> = Omit<
  Document,
  keyof EntityDefaultFields
> &
  EntityDefaultFields;

export type AnyEntityDocument<Doc extends DocumentBase = DocumentBase> =
  EntityDocument<Doc>;

export type AnyEntity<
  Doc extends DocumentBase = DocumentBase,
  PK extends keyof Doc = keyof Doc,
  SK extends keyof Doc | undefined = undefined
> = Entity<{
  indexes: CollectionConfigIndexes<
    { [K in PK]: Doc[PK] } & (SK extends string ? { [K in SK]: Doc[SK] } : {})
  >;
  name: string;
  transporter: Transporter;
  type: {
    __lazyGetter: LazyParseGraphTypePayload;
    definition: any;
    parse(...args: any[]): Doc;
  };
}>;

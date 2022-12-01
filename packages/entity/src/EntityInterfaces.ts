import {
  DescribeField,
  DescribeObjectDefinition,
  ExtendDefinitionResult,
  GraphType,
  Infer,
  MakeFieldOptional,
  ObjectDefinitionInput,
  ObjectFieldInput,
} from '@backland/schema';
import {
  CreateOne,
  DocumentBase,
  DocumentIndexesConfig,
  IndexMethods,
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
} from '@backland/transporter';
import { Cast, Compute, GetFieldByDotNotation, Merge } from '@backland/utils';

import {
  EntityGraphQLConditionsType,
  EntityGraphQLFieldConditionsType,
} from './EntityFilterConditionType';
import {
  _EntityGraphType,
  EntityFieldResolver,
  EntityOptions,
} from './EntityOptions';
import { EntityHooks } from './EntityPlugin';
import {
  EntityDefaultFieldsDef,
  EntityOptionalDefaultFieldsDef,
} from './defaultFields';
import { EntityOperationInfosRecord } from './entityOperationContextTypes';
import { EntityIndexRelationConfig } from './indexRelations/addEntityIndexRelations';
import { EdgeType, PaginationType } from './paginationUtils';

export type GetLoaderFilterDef<LoaderConfig, DocDef> =
  //
  LoaderConfig extends { filter: infer Filter }
    ? {
        [K in keyof Filter as K extends keyof DocDef
          ? K
          : never]: K extends keyof DocDef
          ? Omit<DescribeField<DocDef[K]>, 'optional'> & {
              optional: true;
            }
          : never;
      }
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

export type EntityUtils<
  LoaderConfig,
  OutputDefinition extends ObjectDefinitionInput,
  FilterDef extends GetLoaderFilterDef<
    LoaderConfig,
    OutputDefinition
  > = GetLoaderFilterDef<LoaderConfig, OutputDefinition>
> = {
  indexInfo: [ParsedIndexKey, ...ParsedIndexKey[]];
  filterDef: Compute<FilterDef>;
  queryArgs: {
    after: 'ID?';
    condition: {
      object: EntityGraphQLFieldConditionsType<OutputDefinition>;
      optional: true;
    };
    filter: { type: 'object'; def: Compute<FilterDef> };
    first: {
      optional: true;
      type: 'int';
    };
  };
};

export type _EntityWithUtils<
  Loader,
  OutputDefinition extends ObjectDefinitionInput
> = Loader extends (config: infer Config) => infer Res
  ? ((config: Config) => Res) & EntityUtils<Config, OutputDefinition>
  : Loader;

export type EntityOutputDoc<Input extends ObjectDefinitionInput> = Cast<
  Compute<Merge<EntityDefaultFields, Infer<{ object: Input }>>>,
  Record<string, any>
>;

export type EntityInputDoc<Input extends ObjectDefinitionInput> = Cast<
  Compute<Merge<Partial<EntityDefaultFields>, Infer<{ object: Input }>>>,
  Record<string, any>
>;

export type EntityInputDef<Input extends ObjectDefinitionInput> = Cast<
  Merge<EntityOptionalDefaultFieldsDef, Input>,
  ObjectDefinitionInput
>;

export interface Entity<
  Input extends ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig
> {
  name: string;
  usedOptions: EntityOptions<Input, Indexes>;
  inputConfigTypeDefinition: Input;
  indexes: Indexes;
  outputDefinition: Cast<
    Merge<EntityDefaultFieldsDef, Input>,
    ObjectDefinitionInput
  >;
  type: GraphType<{
    object: Merge<EntityDefaultFieldsDef, Input>;
  }>;
  inputType: GraphType<{
    object: EntityInputDef<Input>;
  }>;
  createOne: CreateOne<EntityInputDoc<Input>, EntityOutputDoc<Input>, Indexes>;
  findOne: _EntityWithUtils<
    FindOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  findMany: _EntityWithUtils<
    FindMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  paginate: _EntityWithUtils<
    Paginate<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  deleteMany: _EntityWithUtils<
    DeleteMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  deleteOne: _EntityWithUtils<
    DeleteOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  findById: _EntityWithUtils<
    FindById<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  updateMany: _EntityWithUtils<
    UpdateMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  updateOne: _EntityWithUtils<
    UpdateOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;

  addIndexRelation: <E extends unknown, Name extends string>(
    name: Name,
    entity: E
  ) => Entity<
    Omit<Input, Name> & {
      [L in Name]: { array: { of: GetFieldByDotNotation<E, 'inputType'> } };
    },
    Indexes
  >;

  aliasPaths: string[];

  conditionsDefinition: {
    def: EntityGraphQLConditionsType<Input>;
    type: 'object';
  };

  databaseType: this['type'];

  edgeType: EdgeType<this['type']>;

  extendType: <T extends _EntityGraphType>(
    handler: (
      helper: ExtendDefinitionResult<this['inputType'], this['inputType']>,
      originalOptions: this['usedOptions']
    ) => T
  ) => Entity<
    T['definition']['def'] extends ObjectDefinitionInput
      ? T['definition']['def']
      : {},
    Indexes
  >;

  getDocumentId(doc: Record<string, any>): string;

  readonly hasAliases: boolean;

  indexGraphTypes: {
    [K: string]: GraphType<{
      object: ObjectDefinitionInput;
    }>;
  };

  // paths of found aliases in entity schemas or sub schemas
  indexRelations: { [K: string]: EntityIndexRelationConfig };

  originType: GraphType<{ object: Input }>;

  paginationType: PaginationType<this['type']>;

  parse: (...args: Parameters<this['type']['parse']>) => EntityOutputDoc<Input>;

  parseDocumentIndexes(doc: Record<string, any>): ParsedDocumentIndexes;

  setOption: <Key extends keyof this['usedOptions'], V>(
    optionName: Key,
    value: V
  ) => this;

  transporter: Transporter | undefined;

  updateDefinition: Compute<
    MakeFieldOptional<DescribeObjectDefinition<Input>, keyof Input>
  >;

  addHooks: (options: (hooks: EntityHooks) => any) => this;

  addRelation: <
    Context extends LoaderContext,
    Definition extends ObjectFieldInput,
    ArgsDef extends ObjectDefinitionInput
  >(
    options: EntityFieldResolver<
      Context,
      Definition,
      ArgsDef,
      EntityOutputDoc<Input>
    >
  ) => this;

  extend: <TransformerReturn>(
    transformer: (
      current: ExcludeExtend<this>,
      utils: {
        extend: <V>(value: V) => ExtendDefinitionResult<V, V>;
      }
    ) => TransformerReturn
  ) => this extends infer Origin
    ? {
        [K in
          | keyof TransformerReturn
          | keyof Origin]: K extends keyof TransformerReturn
          ? TransformerReturn[K]
          : K extends keyof Origin
          ? Origin[K]
          : never;
      }
    : never;

  hooks: EntityHooks;
  __$is_entity__: true;
}

type ExtendMethodKeys = 'addHooks' | 'addRelation' | 'extend';

type ExcludeExtend<E> = {
  [K in keyof E as K extends ExtendMethodKeys ? never : K]: E[K];
} & {};

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

export type EntityDocument<Document extends DocumentBase = DocumentBase> =
  Compute<Merge<EntityDefaultFields, Document>>;

export type AnyEntityDocument<Doc extends DocumentBase = DocumentBase> =
  EntityDocument<Doc>;

export type DocumentDefinitionAsLiterals<Doc> = {
  [K in keyof Doc]: {
    literal: Doc[K];
  };
} & {};

export interface _AnyEntity<Doc extends DocumentBase = DocumentBase>
  extends Entity<
    DocumentDefinitionAsLiterals<Omit<Doc, keyof EntityDefaultFields>>,
    DocumentIndexesConfig<keyof Omit<Doc, keyof EntityDefaultFields>>
  > {
  //
}
export interface AnyEntity<Doc extends DocumentBase = DocumentBase>
  extends Omit<_AnyEntity<Doc>, TransporterLoaderName>,
    IndexMethods<Doc, DocumentIndexesConfig> {
  //
}

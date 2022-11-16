import {
  ExtendDefinitionResult,
  GraphType,
  Infer,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ToFinalField,
} from '@backland/schema';
import {
  CreateOne,
  DocumentBase,
  DocumentIndexesConfig,
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
import { Cast, Compute, Merge } from '@backland/utils';

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
import { EntityIndexRelationsRecord } from './indexRelations/addEntityIndexRelations';
import { EdgeType, PaginationType } from './paginationUtils';

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

type Utils<
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

type WithUtils<
  Loader,
  OutputDefinition extends ObjectDefinitionInput
> = Loader extends (config: infer Config) => infer Res
  ? ((config: Config) => Res) & Utils<Config, OutputDefinition>
  : Loader;

export type EntityOutputDoc<Input extends ObjectDefinitionInput> = Cast<
  Compute<Merge<EntityDefaultFields, Infer<Input>>>,
  Record<string, any>
>;

export type EntityInputDoc<Input extends ObjectDefinitionInput> = Cast<
  Compute<Merge<Partial<EntityDefaultFields>, Infer<Input>>>,
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
  objectDefinition: Input;
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
  findOne: WithUtils<
    FindOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  findMany: WithUtils<
    FindMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  paginate: WithUtils<
    Paginate<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  deleteMany: WithUtils<
    DeleteMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  deleteOne: WithUtils<
    DeleteOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  findById: WithUtils<
    FindById<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  updateMany: WithUtils<
    UpdateMany<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;
  updateOne: WithUtils<
    UpdateOne<EntityOutputDoc<Input>, Indexes>,
    this['outputDefinition']
  >;

  addIndexRelations: <Rels extends EntityIndexRelationsRecord>(
    relations: Rels
  ) => Entity<
    {
      [K in Exclude<keyof Input, keyof Rels>]: Input[K];
    } & {
      [K in keyof Rels]: {
        type: GraphType<{
          object: Compute<
            Rels[K]['entity']['inputType']['definition']['def'],
            1
          >;
        }>;
        list: true;
      };
    } & {},
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
  indexRelations: EntityIndexRelationsRecord;

  originType: GraphType<{ object: Input }>;

  paginationType: PaginationType<this['type']>;

  parse: (...args: Parameters<this['type']['parse']>) => EntityOutputDoc<Input>;

  parseDocumentIndexes(doc: Record<string, any>): ParsedDocumentIndexes;

  setOption: <Key extends keyof this['usedOptions'], V>(
    optionName: Key,
    value: V
  ) => Merge<this['usedOptions'], { [L in Key]: V }> extends infer R
    ? R extends { type: { definition: { def: infer Def } }; indexes: infer In }
      ? Entity<
          Cast<Def, ObjectDefinitionInput>,
          Cast<In, DocumentIndexesConfig>
        >
      : never
    : never;

  transporter: Transporter | undefined;

  updateDefinition: {
    // the definition used in (CRUD) update
    [K in keyof Input]: ToFinalField<Input[K]> extends infer R
      ? {
          [K in keyof R as K extends '__infer'
            ? never
            : K]: K extends 'optional' ? true : R[K];
        }
      : never;
  };

  addHooks: (options: (hooks: EntityHooks) => any) => this;

  addRelations: <
    Context extends LoaderContext,
    Definition extends ObjectFieldInput,
    ArgsDef extends ObjectDefinitionInput | undefined
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

type ExtendMethodKeys = 'addHooks' | 'addRelations' | 'extend';

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

export interface AnyEntity<Doc extends DocumentBase = DocumentBase>
  extends Entity<
    DocumentDefinitionAsLiterals<Omit<Doc, keyof EntityDefaultFields>>,
    DocumentIndexesConfig<keyof Omit<Doc, keyof EntityDefaultFields>>
  > {
  //
}

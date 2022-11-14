import {
  ExtendDefinitionResult,
  GraphType,
  Infer,
  ObjectDefinitionInput,
  ObjectFieldInput,
  parseObjectDefinition,
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
} from '@backland/transporter/src/IndexMethods';
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
import { EntityOperationInfosRecord } from './entityOperationContextTypes';
import { EntityIndexRelationsRecord } from './indexRelations/addEntityIndexRelations';
import { EdgeType, PaginationType } from './paginationUtils';

export type EntityGeneratedFieldsDefinition = ReturnType<
  typeof createEntityDefaultFields
>;

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

export interface Entity<
  Input extends ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig
> {
  name: string;
  usedOptions: EntityOptions<Input, Indexes>;
  inputDefinition: Input;
  indexes: Indexes;
  outputDefinition: Cast<
    Merge<EntityGeneratedFieldsDefinition, Input>,
    ObjectDefinitionInput
  >;
  type: GraphType<{
    object: Merge<EntityGeneratedFieldsDefinition, Input>;
  }>;
  inputType: GraphType<{ object: Input }>;

  // __inputDoc, __outputDoc are empty values, used to register the inputDoc type,
  __inputDoc: Infer<Input>;
  __outputDoc: Compute<Merge<EntityDefaultFields, this['__inputDoc']>>;

  createOne: CreateOne<this['__inputDoc'], this['__outputDoc'], Indexes>;
  //
  findOne: WithUtils<
    FindOne<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  findMany: WithUtils<
    FindMany<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  paginate: WithUtils<
    Paginate<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  deleteMany: WithUtils<
    DeleteMany<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  deleteOne: WithUtils<
    DeleteOne<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  findById: WithUtils<
    FindById<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  updateMany: WithUtils<
    UpdateMany<this['__outputDoc'], Indexes>,
    this['outputDefinition']
  >;
  updateOne: WithUtils<
    UpdateOne<this['__outputDoc'], Indexes>,
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
            Rels[K]['entity']['usedOptions']['type']['definition']['def'],
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

  parse: (...args: Parameters<this['type']['parse']>) => this['__outputDoc'];

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
      this['__outputDoc']
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

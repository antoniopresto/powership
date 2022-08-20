import {
  createType,
  Darch,
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ObjectType,
  parseObjectDefinition,
  ToFinalField,
} from '@darch/schema';
import { isMetaFieldKey } from '@darch/schema/lib/fields/MetaFieldField';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { devAssert } from '@darch/utils/lib/devAssert';
import { hooks, Waterfall } from '@darch/utils/lib/hooks';
import { nonNullValues, notNull } from '@darch/utils/lib/invariant';
import { capitalize } from '@darch/utils/lib/stringCase';
import { AnyFunction, UnionToIntersection } from '@darch/utils/lib/typeUtils';

import {
  AnyCollectionIndexConfig,
  CollectionIndexConfig,
  CreateOneResult,
  DocumentBase,
  DocumentIndexItem,
  DocumentMethods,
  getDocumentIndexFields,
  getParsedIndexKeys,
  LoaderContext,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  Transporter,
  TransporterLoader,
  TransporterLoaderName,
  transporterLoaderNames,
  validateIndexNameAndField,
} from '../Transporter';

import {
  EntityGraphQLConditionsDef,
  EntityGraphQLConditionsType,
  graphQLFilterToTransporterFilter,
  objectToGraphQLConditionType,
} from './EntityFilterConditionType';
import {
  getOperationInfo,
  LoaderOperationsRecord,
} from './entityOperationContextTypes';
import { PageInfoType, PaginationType } from './paginationUtils';

export * from './paginationUtils';

type _GraphType = {
  _object?: ObjectType<any>;
  __isGraphType: true;
  parse(...args: any[]): DocumentBase;
  definition: { def: unknown };
};

export interface EntityOptions<
  TName extends string = string,
  Type extends _GraphType = _GraphType,
  TTransporter extends Transporter = Transporter
> {
  type: Type;
  name: TName;
  indexes: CollectionIndexConfig<ReturnType<Type['parse']>, TName>['indexes'];
  transporter?: TTransporter;
}

export type DefaultEntityFields = {
  id: string;
  ulid: string;
  createdBy: string | undefined;
  updatedBy: string | undefined;
  createdAt: Date;
  updatedAt: Date;
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

type Merge<A, B> = {
  [K in keyof A as K extends keyof B ? never : K]: A[K];
} & ({ [K in keyof B]: B[K] } & {}) extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

type _GetLoaderUtils<Loader, Type> =
  EntityFinalDefinition<Type> extends infer Def
    ? GetLoaderFilterDef<Loader, Def> extends infer Filter
      ? Filter extends unknown
        ? {
            filterDef: Filter;
            queryArgs: {
              filter: {
                type: 'object';
                def: Filter;
              };
              limit: {
                type: 'int';
                optional: true;
              };
              after: {
                type: 'ID';
                optional: true;
              };
              condition: Type extends {
                definition: infer Def;
              }
                ? Def extends { def: infer Def }
                  ? {
                      type: 'object';
                      def: EntityGraphQLConditionsDef<Def>;
                      optional: true;
                    }
                  : never
                : never;
            };
          }
        : never
      : never
    : never;

// export type EntityGraphType<T> = T extends
export type Entity<Options extends EntityOptions> = Options['type'] extends {
  parse(...args: any): any;
}
  ? Merge<
      {
        name: Options['name'];
        indexes: Options['indexes'];
        type: //
        ((x: Options['type']) => any) extends (x: infer Type) => any
          ? GraphType<{ object: EntityFinalDefinition<Type> }>
          : never;

        originType: Options['type'];

        inputDefinition: Options['type'] extends { definition: infer Def }
          ? Def extends { def: infer Def }
            ? {
                [K in keyof Def]: ToFinalField<Def[K]>;
              }
            : never
          : never;

        paginationType: PaginationType<Options['type']>;

        parse: (
          ...args: Parameters<Options['type']['parse']>
        ) => EntityDocFromType<Options['type']>;
        transporter: Options['transporter'];
      },
      EntityLoaders<
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
          ? LoaderWithUtils & {
              loaders: LoaderWithUtils;

              indexGraphTypes: {
                [K in Options['indexes'][number]['name']]: GraphType<{
                  object: ObjectDefinitionInput;
                }>;
              };

              getDocumentId(doc: Record<string, any>): string;

              parseDocumentIndexes(
                doc: Record<string, any>
              ): ParsedDocumentIndexes;

              conditionsDefinition: Options['type'] extends {
                definition: infer Def;
              }
                ? Def extends { def: infer Def }
                  ? {
                      type: 'object';
                      def: EntityGraphQLConditionsType<Def>;
                    }
                  : never
                : never;
            }
          : never
        : never
    > extends infer FinalEntity
    ? FinalEntity & {
        extend<Extension extends { [K: string]: unknown }>(
          handler: (current: FinalEntity) => Extension
        ): FinalEntity & Extension;
      }
    : never
  : never;

const ulidField = Darch.ulid({ autoCreate: true });
const createUlid = () => ulidField.parse(undefined);

export function createEntity<Options extends EntityOptions>(
  options: Readonly<Options>
): Entity<Options> {
  const {
    indexes,
    transporter: defaultTransporter,
    type,
    name: entityName,
  } = options;

  const entityNameLowercase = entityName.toLowerCase();

  const objectType = nonNullValues({
    entityTypeObject: type._object,
  }).entityTypeObject;

  const entity = {} as Entity<Options>;
  const loaders: Record<string, any> = {};

  const originDef = objectType.cleanDefinition();

  let entityDefinition = {
    ...EntityGeneratedFields,
    ...originDef,
  };

  entity['transporter'] = defaultTransporter;

  const indexConfig: CollectionIndexConfig<any, string> = {
    entity: entityNameLowercase,
    indexes,
  };

  const conditionsType = objectToGraphQLConditionType(
    `${entityName}Conditions`,
    entityDefinition
  );

  validateIndexNameAndField(indexConfig);
  const parsedIndexKeys = getParsedIndexKeys(indexConfig);

  const _hooks: EntityHooks<
    EntityDocument<{}>,
    Options['indexes'],
    LoaderContext
  > = {
    preParse: hooks.waterfall(),
    postParse: hooks.waterfall(),
    filterResult: hooks.waterfall(),
    beforeQuery: hooks.waterfall(),
  };

  // pre parse PK, SK and ID setters
  _hooks.preParse.register(async function applyDefaultHooks(ctx) {
    async function _onUpdate(doc: Record<string, any>) {
      doc.updatedAt = new Date();
      doc.updatedBy =
        doc.updatedBy || (await ctx.options.context?.userId?.(false));
      return doc;
    }

    async function _onCreate(doc: Record<string, any>) {
      await _onUpdate(doc);
      doc.ulid = doc.ulid || createUlid();
      doc.createdAt = new Date();
      doc.createdBy =
        doc.createdBy || (await ctx.options.context?.userId?.(false));

      const parsedIndexes = getDocumentIndexFields(doc, indexConfig);

      if (!parsedIndexes.valid) {
        throw parsedIndexes.error;
      }

      doc = {
        ...parsedIndexes.indexFields,
        ...doc,
      };

      if (!doc.id) {
        doc.id = parsedIndexes.firstIndex.value;
      }

      return doc;
    }

    if (ctx.op === 'updateOne') {
      ctx.options.update.$set = await _onUpdate({
        ...ctx.options.update.$set,
      });
    }

    if (ctx.isUpsert) {
      const $setOnInsert = await _onCreate({
        ...ctx.options.update.$set,
        ...ctx.options.update.$setOnInsert,
      });
      ctx.options.update.$setOnInsert = {
        ...$setOnInsert,
      };
    }

    if (ctx.isCreate) {
      ctx.options.item = await _onCreate(ctx.options.item);
    }

    return ctx;
  });

  type EntityGraphType = GraphType<{
    object: EntityFinalDefinition<GraphType<{ object: {} }>>;
  }>;

  let entityGraphType: EntityGraphType | undefined;
  function getEntityGraphType(): EntityGraphType {
    // @ts-ignore
    return (entityGraphType =
      entityGraphType ||
      createType(`${entityName}Entity`, {
        object: entityDefinition,
      })) as any;
  }

  async function parseOperationContext(
    method: TransporterLoaderName,
    options: any
  ) {
    await defaultTransporter?.connect();

    let operationInfoContext = buildEntityOperationInfoContext(method, options);

    if ('filter' in operationInfoContext.options) {
      operationInfoContext.options.filter = graphQLFilterToTransporterFilter(
        operationInfoContext.options.filter
      );
    }
    if ('condition' in operationInfoContext.options) {
      operationInfoContext.options.condition = graphQLFilterToTransporterFilter(
        operationInfoContext.options.condition
      );
    }

    if (operationInfoContext.op === 'updateOne') {
      operationInfoContext = await _hooks.preParse.exec(
        // @ts-ignore
        operationInfoContext,
        {}
      );
    }

    if ('item' in operationInfoContext.options) {
      operationInfoContext = await _hooks.preParse.exec(
        // @ts-ignore
        operationInfoContext,
        {}
      );

      if (!('item' in operationInfoContext.options)) {
        return devAssert('MISSING_ITEM', { operationInfoContext });
      }

      try {
        operationInfoContext.options.item = getEntityGraphType().parse(
          operationInfoContext.options.item
        ) as AnyEntityDocument;

        operationInfoContext = await _hooks.postParse.exec(
          // @ts-ignore
          operationInfoContext,
          {}
        );
      } catch (e: any) {
        e.info = operationInfoContext;
        throw e;
      }
    }

    if ('filter' in operationInfoContext.options) {
      operationInfoContext = await _hooks.beforeQuery.exec(
        // @ts-ignore
        operationInfoContext,
        {}
      );
    }

    return operationInfoContext;
  }

  const indexGraphTypes = parsedIndexKeys.reduce(
    (acc, next): Record<string, GraphType<{ object: any }>> => {
      const fields: ObjectDefinitionInput = {};

      next.PK.requiredFields.forEach((fieldName) => {
        const def = entityDefinition[fieldName];
        if (!def) {
          throw new RuntimeError(
            `Field "${fieldName}" defined for index ${next.index.name} not defined in the input type.`,
            { type }
          );
        }
        fields[fieldName] = entityDefinition[fieldName];
      });

      next.SK.requiredFields.forEach((fieldName) => {
        const def = entityDefinition[fieldName];
        if (!def) {
          throw new RuntimeError(
            `Field "${fieldName}" defined for index ${next.index.name} not defined in the input type.`,
            { type }
          );
        }
        fields[fieldName] = fields[fieldName] || { ...def, optional: true };
      });

      const typeName = `${entityName}${capitalize(next.index.name)}Index`;
      return {
        ...acc,
        [next.index.name]: createType(typeName, { object: fields }),
      };
    },
    {}
  );

  function _createLoader(config: {
    method: TransporterLoaderName;
    newMethodName: string;
    indexInfo: ParsedIndexKey[];
    indexes: Options['indexes'];
  }) {
    const { indexInfo, indexes, newMethodName, method } = config;

    const loader: TransporterLoader = async function loader(...args) {
      if (args.length !== 1) {
        return devAssert(`Invalid number of arguments for ${newMethodName}`);
      }
      const { transporter = defaultTransporter } = args['0'];

      nonNullValues(
        { transporter },
        `config.transporter should be provided for "${newMethodName}" or during entity creation.`
      );

      const configInput = {
        ...args[0],
        indexConfig: {
          ...indexConfig,
          indexes,
        },
        context: args[0].context,
      };

      const operation = await parseOperationContext(method, configInput);

      const resolver: AnyFunction = transporter[method].bind(transporter);
      const result = await resolver(operation.options);

      if (result.item) {
        const [parsed] = await _hooks.filterResult.exec(
          [result.item],
          // @ts-ignore
          operation
        );

        result.item = parsed;
      }

      if (result.items) {
        result.items = await _hooks.filterResult.exec(
          result.items,
          // @ts-ignore
          operation
        );
      }

      return result;
    };

    function getFilterDef() {
      getEntityGraphType();

      function _wrap(obj: object) {
        const def: any = { id: { type: 'ID', optional: true } };

        Object.keys(obj).forEach((k) => {
          if (isMetaFieldKey(k)) return;
          def[k] = { ...obj[k], optional: true };
        });

        return def;
      }

      if (indexInfo.length === 1) {
        return _wrap({
          ...indexGraphTypes[
            indexInfo[0].index.name
          ]._object!.cleanDefinition(),
        });
      }

      const all: any = {};
      indexInfo.forEach(({ index: { name } }) => {
        const objectType = indexGraphTypes[name]._object as ObjectType<{
          a: 'any';
        }>;

        const graph = objectType.cleanDefinition();
        Object.entries(graph).forEach(([k, v]) => {
          all[k] = {
            ...v,
            optional: true,
          };
        });
      });
      return _wrap(all);
    }

    function getPaginationType() {
      const filter = getFilterDef();
      return {
        limit: {
          type: 'int',
          optional: true,
        },
        after: {
          type: 'ID',
          optional: true,
        },
        filter: {
          type: 'object',
          optional: true,
          def: filter,
        },
        condition: {
          type: conditionsType,
          optional: true,
        },
      };
    }

    Object.defineProperties(loader, {
      name: { value: newMethodName },
      indexInfo: { value: indexInfo },
      filterDef: {
        get() {
          return getFilterDef();
        },
      },
      queryArgs: {
        get() {
          return getPaginationType();
        },
      },
    });

    loaders[newMethodName] = loader;
    entity[newMethodName] = loader;
  }

  indexConfig.indexes.forEach((index) => {
    const { name: indexName } = index;
    const indexInfo = notNull(
      parsedIndexKeys.find((el) => el.index.name === indexName)
    );

    const capitalizedIndexName = capitalize(indexName);

    transporterLoaderNames.forEach((method) => {
      if (method === 'createOne') return;
      const methodName = `${method}${capitalizedIndexName}`;
      _createLoader({
        method,
        newMethodName: methodName,
        indexInfo: [indexInfo],
        indexes: [
          indexConfig.indexes.find((index) => index.name === indexName)!,
        ],
      });
    });
  });

  transporterLoaderNames.forEach((method) => {
    _createLoader({
      method,
      newMethodName: method,
      indexInfo: parsedIndexKeys,
      indexes: indexConfig.indexes,
    });
  });

  function getPaginationType() {
    const definition = {
      object: {
        edges: {
          list: true,
          object: {
            cursor: 'string',
            node: getEntityGraphType(),
          },
        },
        pageInfo: PageInfoType,
      },
    } as const;

    return createType(`${entityName}Connection`, definition);
  }

  const getters: {
    [K in Exclude<keyof Entity<any>, keyof Entity<any>['loaders']>]:
      | {
          get(): any;
        }
      | { value: any };
  } = {
    name: { value: entityName },
    indexes: { value: indexes },
    transporter: {
      get() {
        return defaultTransporter || options.transporter;
      },
    },
    type: {
      get() {
        return getEntityGraphType();
      },
    },
    indexGraphTypes: { value: indexGraphTypes },
    loaders: { value: loaders },
    parse: {
      get() {
        return getEntityGraphType().parse;
      },
    },
    originType: { value: type },
    inputDefinition: {
      value: objectType.definition,
    },
    extend: {
      value: function extend(cb) {
        const partial = cb(entity);
        if (!partial || typeof partial !== 'object') return entity;
        return Object.assign(entity, partial);
      },
    },
    getDocumentId: {
      value: function getDocumentId(doc): string {
        const indexes = getDocumentIndexFields(doc, indexConfig);
        if (indexes.error) throw indexes.error;
        return notNull(indexes.indexFields.id);
      },
    },
    parseDocumentIndexes: {
      value: function parseDocumentIndexes(doc): ParsedDocumentIndexes {
        return getDocumentIndexFields(doc, indexConfig);
      },
    },
    paginationType: {
      get() {
        return getPaginationType();
      },
    },
    conditionsDefinition: {
      get() {
        return conditionsType._object!.definition;
      },
    },
  };

  Object.defineProperties(entity, getters);

  return entity as Entity<Options>;
}

type EntityDocument<Document> = {
  [K in keyof (DefaultEntityFields & Document)]: (DefaultEntityFields &
    Document)[K];
} & {};

export type AnyEntityDocument = EntityDocument<{ [K: string]: unknown }>;

export type EntityHooks<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext
> = {
  preParse: Waterfall<
    EntityOperationInfoContext<Record<string, any>, Indexes, Context>,
    {}
  >;

  postParse: Waterfall<
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>,
    {}
  >;

  beforeQuery: Waterfall<
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>,
    {}
  >;

  filterResult: Waterfall<
    EntityDocument<Document>[],
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>
  >;
};

function buildEntityOperationInfoContext<M extends TransporterLoaderName>(
  method: M,
  options: EntityOperationInfosRecord<any, any, any>[M]['options']
): EntityOperationInfosRecord<any, any, any>[M] {
  const info = getOperationInfo(method);

  const isUpsert =
    info.isUpdate && 'upsert' in options && options.upsert === true;

  return {
    ...info,
    isUpsert,
    options,
  } as any;
}

export type EntityOperationInfoContext<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext
> = EntityOperationInfosRecord<
  Document,
  Indexes,
  Context
>[TransporterLoaderName];

export type EntityOperationInfosRecord<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext
> = {
  [Method in keyof LoaderOperationsRecord]: Method extends unknown
    ? Method extends keyof LoaderOperationsRecord
      ? LoaderOperationsRecord[Method] & {
          // ================== //
          // start infer method
          // ================== //
          options: Indexes[number] extends infer IndexItem
            ? IndexItem extends unknown
              ? Parameters<
                  IndexMethods<Document, IndexItem, Context>[Method]
                >[0] extends infer Options
                ? Options extends unknown
                  ? Options
                  : never
                : never
              : never
            : never;
          // ================== //
          // END infer Method
          // ================== //
        } extends infer R
        ? { [K in keyof R]: R[K] }
        : never
      : never
    : never;
};

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

type IndexMethods<
  Document,
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
> = Union extends { name: Name; [K: string]: unknown } ? Union : never;

type OneIndexMethod<
  Documents,
  Indexes,
  Methods = {}
> = Indexes extends readonly [infer CurrentIndex, ...infer Rest]
  ? OneIndexMethod<
      Documents,
      Rest,
      {
        [K in keyof IndexMethods<
          Documents,
          CurrentIndex
        >]: K extends keyof Methods
          ? EntityTransporterMethod<
              IndexMethods<Documents, CurrentIndex>[K] extends (
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
          : IndexMethods<Documents, CurrentIndex>[K];
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

type EntityDocFromType<Type> = Type extends {
  parse(...args: any[]): infer Result;
}
  ? Result extends DocumentBase
    ? DefaultEntityFields & Result extends infer R
      ? {
          [K in keyof R]: R[K];
        }
      : never
    : never
  : never;

export type EntityGeneratedFields = typeof EntityGeneratedFields;
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

export const EntityGeneratedFields = _EntityGeneratedFields({
  id: { type: 'string' },
  ulid: { type: 'ulid' },
  createdBy: {
    type: 'string',
    optional: true,
  },
  updatedBy: {
    type: 'string',
    optional: true,
  },
  createdAt: { type: 'date' },
  updatedAt: { type: 'date' },
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
        }
      : never
    : never
  : never;

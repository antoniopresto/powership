import {
  createType,
  FinalFieldDefinition,
  FinalObjectDefinition,
  GraphType,
  ObjectDefinitionInput,
  PowershipWatchTypesPubSub,
  isFieldTypeName,
  extendObjectDefinition,
} from '@powership/schema';

import {
  AnyCollectionIndexConfig,
  CollectionIndexConfig,
  DocumentBase,
  DocumentIndexesConfig,
  getDocumentIndexFields,
  getParsedIndexKeys,
  parseCollectionIndexConfig,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  parseEntityIndexFields,
  Transporter,
  TransporterLoader,
  TransporterLoaderName,
  transporterLoaderNames,
} from '@powership/transporter';
import {
  AnyFunction,
  capitalize,
  createAsyncPlugin,
  createProxy,
  createSyncPlugin,
  defineGetters,
  devAssert,
  ensureArray,
  invariant,
  isProduction,
  Logger,
  nonNullValues,
  notNull,
  pick,
  RuntimeError,
  simpleObjectClone,
  tupleEnum,
  ulid,
} from '@powership/utils';

import {
  graphQLFilterToTransporterFilter,
  objectToGraphQLConditionType,
} from './EntityFilterConditionType';
import {
  AnyEntity,
  Entity,
  EntityDocumentBase,
  EntityIndexRelations,
} from './EntityInterfaces';
import { EntityFieldResolver, EntityOptions } from './EntityOptions';
import { createEntityPlugin, EntityHooks } from './EntityPlugin';
import { createEntityDocumentBase } from './defaultFields';
import {
  buildEntityOperationInfoContext,
  EntityOperationInfoContext,
} from './entityOperationContextTypes';
import {
  _addEntityIndexRelations,
  EntityIndexRelationInput,
} from './indexRelations/addEntityIndexRelations';
import { indexRelationsPlugin } from './indexRelations/indexRelationsPlugin';
import { PageInfoType } from './paginationUtils';
import { aliasesPlugin } from './plugins/aliasesPlugin';
import { applyFieldResolvers } from './plugins/applyFieldResolvers';
import { versionPlugin } from './plugins/versionPlugin';

export * from './paginationUtils';

const extendMethodsEnum = tupleEnum(
  'extendType',
  'addHooks',
  'addRelation',
  'setOption',
  'clone',
  'addIndexRelation',
  'extend'
);

export let defaultGlobalTransporter: Transporter | undefined = undefined;

export function setDefaultTransporter(transporter: Transporter | undefined) {
  defaultGlobalTransporter = transporter;
}

export function createEntity<
  InputDefinition extends ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig
>(
  configOptions: () => EntityOptions<InputDefinition, Indexes>
): Entity<InputDefinition, Indexes>;

export function createEntity<
  InputDefinition extends ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig
>(
  configOptions: EntityOptions<InputDefinition, Indexes>
): Entity<InputDefinition, Indexes>;

export function createEntity(
  configOptions: Record<string, any> | (() => Record<string, any>)
): any {
  const optionMutations: ((options: EntityOptions) => EntityOptions)[] = [];
  const entityMutations: ((entity: AnyEntity) => AnyEntity)[] = [];

  let entityOptions: EntityOptions = createProxy(() => {
    const opt: EntityOptions =
      typeof configOptions === 'function'
        ? //
          configOptions()
        : configOptions;

    opt.allowExtraFields = opt.allowExtraFields ?? true;

    return optionMutations.reduce((acc, next) => {
      return next(acc);
    }, opt);
  });

  const plugins = [
    applyFieldResolvers,
    versionPlugin,
    aliasesPlugin,
    indexRelationsPlugin,
  ];

  const resolvers: EntityFieldResolver<any, any, any>[] = [];
  let gettersWereCalled = false;

  function extendEntity(cb) {
    entityMutations.push((entity) => {
      const ext_utils = { extend: extendObjectDefinition };
      const partial = cb(entity, ext_utils);
      if (!partial || typeof partial !== 'object') return entity;
      return { ...entity, ...partial };
    });
    return entity;
  }

  function addHooks(hooksToAdd) {
    plugins.push(
      ...ensureArray(hooksToAdd).map((hookConfig, index) => {
        return createEntityPlugin(
          `${entityOptions.name}MainPlugin_${index}`,
          hookConfig
        );
      })
    );
    return entity;
  }

  function addRelation(resolver) {
    resolvers.push(...ensureArray(resolver));
    return entity;
  }

  function cloneEntity(
    handler: ((originalOptions: EntityOptions) => EntityOptions) | EntityOptions
  ): AnyEntity {
    const cb = () => {
      const newValue =
        typeof handler === 'function'
          ? // @ts-ignore
            handler(entityOptions)
          : // @ts-ignore
            { ...entityOptions, ...handler };

      if (
        gettersWereCalled &&
        newValue.name === entityOptions.name &&
        !isProduction()
      ) {
        console.warn(
          `entity.clone: the cloned entity has the same name "${entityOptions.name}". \n
                You may encounter unexpected behavior if the entity has already been used.`
        );
      }

      return newValue as any;
    };

    // @ts-ignore
    return createEntity(cb) as any;
  }

  function setOption(optionName: string, value: any) {
    optionMutations.push((opt) => {
      return {
        ...opt,
        [optionName]: value,
      };
    });
    return entity;
  }

  function addIndexRelation(
    name: string,
    relationInput: EntityIndexRelationInput
  ) {
    const relation = { name, entity: relationInput };

    entityMutations.push(
      //
      (current) => {
        indexRelations[relation.name] = relation;
        return current;
      },
      //
      (opt: any) => {
        _addEntityIndexRelations(opt, [[relation.name, relation]]);
        return opt;
      }
    );

    return entity;
  }

  function extendType(
    handler: (helper: any, originalOptions: EntityOptions) => AnyEntity
  ): AnyEntity {
    // @ts-ignore
    return createEntity(() => {
      const newType = handler(
        extendObjectDefinition(entityOptions.type),
        entityOptions
      );

      return { ...entityOptions, type: newType } as any;
    }) as any;
  }

  const indexRelations: EntityIndexRelations = {};

  const entity = createProxy(_createEntity, {
    onGet(k: any): any {
      if (k === '__isEntity') return true;

      if (typeof k === 'string' && k in extendMethodsEnum) {
        // clone
        if (k === 'clone') {
          return cloneEntity;
        }

        if (k === 'setOption') {
          return setOption;
        }

        if (k === 'addIndexRelation') {
          return addIndexRelation;
        }

        if (k === 'extendType') {
          return extendType;
        }

        if (k === 'addHooks') {
          return addHooks;
        }

        if (k === 'addRelation') {
          return addRelation;
        }

        if (k === 'extend') {
          return extendEntity;
        }
      }

      return null;
    },
  });

  function _createEntity() {
    entityOptions = { ...entityOptions }; // open proxy;
    gettersWereCalled = true;

    const logger = new Logger({
      prefix: `${entityOptions.name}Entity`,
      ...entityOptions.logs,
    });

    const { debug } = logger;

    const _hooks = _createHooks();

    // keep it here, because can be changed in the above "onGet"
    const { indexes, type, name: entityName } = entityOptions;

    plugins.forEach((plugin) => {
      try {
        plugin(_hooks);
      } catch (e: any) {
        logger.error(e);

        throw new RuntimeError(`Failed to apply plugin ${plugin?.name}`, {
          message: e.message,
          plugin,
        });
      }
    });

    const inputDefinitionClone = nonNullValues({
      entityTypeObject: type.__lazyGetter.objectType,
    }).entityTypeObject!.clone((it) => it);

    let entityResult = {} as any;
    const loaders: Record<string, any> = {};

    const indexConfig: CollectionIndexConfig<any, string> = {
      entity: entityName,
      indexes,
    };

    parseCollectionIndexConfig(indexConfig); // only validating the return has lower cased fields used in _ids

    const indexFieldsDefinition = parseEntityIndexFields(indexConfig);
    const indexFieldKeys = Object.keys(indexFieldsDefinition);

    const indexAndEntityExpectedFieldsDefinition = extendObjectDefinition({
      ...createEntityDocumentBase(),
      ...indexFieldsDefinition,
    });

    function getOutputDefinition(
      optionalIndexAndDefaultFields: boolean
    ): Record<string, FinalFieldDefinition> {
      const base: any = (
        optionalIndexAndDefaultFields
          ? indexAndEntityExpectedFieldsDefinition.optional()
          : indexAndEntityExpectedFieldsDefinition
      ).def();

      return {
        ...base,
        ...inputDefinitionClone.def(),
      };
    }

    const entityOutputDefinitionWithRelations = getOutputDefinition(false);
    const outputTypeDefinition = getOutputDefinition(false);
    const databaseDefinition = getOutputDefinition(false);
    const inputDefinition =
      inputDefinitionClone.def() as unknown as FinalObjectDefinition;

    const fields = Object.keys(outputTypeDefinition);

    _hooks.createDefinition.dispatch(databaseDefinition, {
      entityOptions,
      fields,
      kind: 'databaseDefinition',
      resolvers,
    });

    _hooks.createDefinition.dispatch(outputTypeDefinition, {
      entityOptions,
      fields,
      kind: 'outputDefinition',
      resolvers,
    });

    // type without relations
    const databaseType = createType(`${entityOptions.name}DatabaseInput`, {
      // without relations and other alterations
      object: databaseDefinition,
    });

    const updateDefinitionBase = entityOptions.type.clone((t) => t.optional());
    const updateDefinition =
      updateDefinitionBase.def() as unknown as FinalObjectDefinition;

    _hooks.createDefinition.dispatch(inputDefinition, {
      entityOptions,
      fields,
      kind: 'inputDefinition',
      resolvers,
    });

    _hooks.createDefinition.dispatch(updateDefinition, {
      entityOptions,
      fields,
      kind: 'updateDefinition',
      resolvers,
    });

    entityResult['transporter'] = entityOptions.transporter;

    const conditionsType = objectToGraphQLConditionType(
      `${entityName}QueryConditions`,
      simpleObjectClone(outputTypeDefinition)
    );

    const parsedIndexKeys = getParsedIndexKeys(indexConfig);

    // pre parse PK, SK and ID setters
    _registerPKSKHook({
      entityOptions,
      hooks: _hooks,
      indexConfig,
      entity: entityResult,
    });

    _hooks.beforeQuery.pushMiddleware((ctx) => {
      if ('filter' in ctx.options) {
        preparseFilterGraphTypeFields(
          ctx.options.filter,
          ctx.entity,
          'inputType'
        );
      }
      if ('condition' in ctx.options && ctx.options.condition) {
        preparseFilterGraphTypeFields(
          ctx.options.condition,
          ctx.entity,
          'inputType'
        );
      }
    });

    const entityType = createType(`${entityName}Entity`, {
      object: simpleObjectClone(outputTypeDefinition),
    });

    const indexGraphTypes = _getIndexGraphTypes({
      entityOptions,
      entityOutputDefinitionWithRelations,
      parsedIndexKeys,
    });

    const inputType = entityOptions.type.clone((t) =>
      t
        .extendObjectDefinition({
          ...inputDefinition,
        })
        .graphType(`${entityName}Input`)
    );

    function _createLoader(config: {
      indexInfo: ParsedIndexKey[];
      loaderIndexes: EntityOptions['indexes'];
      method: TransporterLoaderName;
      newMethodName: string;
    }) {
      const { newMethodName } = config;
      defineGetters(
        entityResult,
        {
          [newMethodName]: () => {
            const { indexInfo, loaderIndexes, newMethodName, method } = config;

            const loader: TransporterLoader = async function loader(...args) {
              if (args.length !== 1) {
                return devAssert(
                  `Invalid number of arguments for ${newMethodName}`
                );
              }
              const {
                transporter = entityOptions.transporter ||
                  entityResult.transporter,
              } = args['0'];

              invariant(
                transporter,
                `config.transporter should be provided for "${newMethodName}" or during entity creation.`
              );

              await transporter.connect();

              const configInput = {
                ...args[0],
                context: args[0].context,
                indexConfig: {
                  ...indexConfig,
                  loaderIndexes: loaderIndexes,
                },
              };

              const operation = await _parseOperationContext({
                databaseType,
                entity: entityResult,
                entityOptions,
                hooks: _hooks,
                method,
                methodOptions: configInput,
                indexFieldKeys,
              });

              const context = { operation, resolvers };

              let resolver: AnyFunction = transporter[method].bind(transporter);

              resolver = (await _hooks.willResolve.dispatch(
                resolver as any,
                operation as any
              )) as any;

              const p = resolver(operation.options);

              let result = await p;

              debug(`${method}`, { options: operation.options, result });

              if (
                !result.error &&
                operation.isUpdate &&
                entityResult.aliasPaths.length &&
                !result.item
              ) {
                // checking for updates that have failed to update aliases
                // probably because of version mismatch, since we check for version match.

                if (!context.operation.getDocumentResults) {
                  // just in case of aliasesPlugin being removed
                  // aliasesPlugin sets context.operation.getDocumentResults
                  throw new Error(`UPDATE_DOCUMENT_WITH_ALIAS_FIELDS_ERROR_1`);
                }

                if (context.operation.getDocumentResults) {
                  throw new Error(`UPDATE_DOCUMENT_WITH_ALIAS_FIELDS_ERROR_2`);
                }
              }

              if (result.item) {
                const res = await _hooks.filterResult.dispatch(
                  { items: [result.item], kind: 'items' },
                  context
                );
                if (res.kind === 'items') result.item = res.items[0];
              }

              if (result.items) {
                const res = await _hooks.filterResult.dispatch(
                  { items: result.items, kind: 'items' },
                  context
                );
                if (res.kind === 'items') result.items = res.items;
              }

              if (result.edges) {
                const res = await _hooks.filterResult.dispatch(
                  { kind: 'pagination', pagination: result },
                  context
                );
                if (res.kind === 'pagination') result = res.pagination;
              }

              return result;
            };

            // create the filter with the index fields plus the "id" field
            const filterExt = (function getFilterDef() {
              if (indexInfo.length === 1) {
                return indexGraphTypes[
                  indexInfo[0].index.name
                  // @ts-ignore
                ].__lazyGetter.objectType!.clone((el) =>
                  el.optional().extendObjectDefinition({
                    id: { optional: true, type: 'ID' },
                  })
                );
              }

              const ext = extendObjectDefinition({
                object: {
                  id: { optional: true, type: 'ID' },
                },
              });

              const all = {};

              indexInfo.forEach(({ index: { name } }) => {
                // @ts-ignore
                const graph = indexGraphTypes[
                  name
                ].__lazyGetter.objectType.clone((el) => el.optional().def());

                Object.entries(graph).forEach(([k, v]) => {
                  all[k] = v;
                });
              });

              return ext.extendObjectDefinition(all);
            })();

            function getPaginationType() {
              return {
                after: {
                  optional: true,
                  type: 'ID',
                },
                condition: {
                  optional: true,
                  type: conditionsType,
                },
                filter: {
                  def: filterExt.def(),
                  type: 'object',
                },
                first: {
                  optional: true,
                  type: 'int',
                },
              };
            }

            Object.defineProperties(loader, {
              filterDef: { value: filterExt },
              indexInfo: { value: indexInfo },
              name: { value: newMethodName },
              queryArgs: {
                get() {
                  return getPaginationType();
                },
              },
            });

            loaders[newMethodName] = loader;
            return loader;
          },
        },
        {}
      );
    }

    indexConfig.indexes.forEach((index) => {
      const { name: indexName } = index;
      const indexInfo = notNull(
        parsedIndexKeys.find((el) => el.index.name === indexName)
      );

      transporterLoaderNames.forEach((method) => {
        if (method === 'createOne') return;
        _createLoader({
          indexInfo: [indexInfo],
          loaderIndexes: [
            indexConfig.indexes.find((_index) => _index.name === indexName)!,
          ],
          method,
          newMethodName: method,
        });
      });
    });

    transporterLoaderNames.forEach((method) => {
      _createLoader({
        indexInfo: parsedIndexKeys,
        loaderIndexes: indexConfig.indexes,
        method,
        newMethodName: method,
      });
    });

    const edgeType = createType(`${entityName}_Edge`, {
      object: {
        cursor: 'string',
        node: entityType,
      },
    });

    function _getConnectionType() {
      const definition = {
        object: {
          edges: {
            list: true,
            type: edgeType,
          },
          pageInfo: PageInfoType,
        },
      } as const;

      return createType(`${entityName}Connection`, definition);
    }

    function getIndexFields(itemInput: DocumentBase) {
      const indexMap = getDocumentIndexFields(itemInput, indexConfig);

      if (indexMap.error) {
        throw indexMap.error;
      }

      return indexMap.indexFields;
    }

    function getDocumentId(doc): string {
      const _indexes = getDocumentIndexFields(doc, indexConfig);
      if (_indexes.error) throw _indexes.error;
      return notNull(_indexes.indexFields._c);
    }

    const extendInput = extendObjectDefinition({
      object: inputDefinition,
    });
    const extendUpdate = extendObjectDefinition({
      object: updateDefinition,
    });

    Object.assign(entityResult, {
      inputType,
      extendType,
      addIndexRelation,
      setOption,
      cloneEntity,
      __isEntity: true,
      addHooks, // handled in proxy
      addRelation, // handled in proxy
      aliasPaths: _objectAliasPaths(databaseDefinition),
      conditionsDefinition: conditionsType.__lazyGetter.objectType!.clone(
        (el) => el.def()
      ),
      databaseType,
      edgeType: edgeType,
      indexRelations,
      extend: extendEntity, // handled in proxy
      getDocumentId,
      getIndexFields,
      indexGraphTypes: indexGraphTypes,
      indexes: indexes,
      usedOptions: entityOptions,
      name: entityName,
      originType: type,
      paginationType: _getConnectionType(),
      parse: entityType.parse,
      parseDocumentIndexes: function parseDocumentIndexes(
        doc
      ): ParsedDocumentIndexes {
        return getDocumentIndexFields(doc, indexConfig);
      },
      transporter: entityOptions.transporter,
      type: entityType,
      extendInput,
      extendUpdate,
    });

    entityResult = entityMutations.reduce((acc, next) => {
      return next(acc);
    }, entityResult);

    if (process.env.POWERSHIP_GENERATE_ENTITY_TYPES) {
      PowershipWatchTypesPubSub.emit('created', {
        custom: () => ({
          name: entityOptions.name,
          imports: [`import { Entity } from 'powership';`],
          head: ['export type ID = number | string;'],
          body: (() => {
            let { type, name, indexes } = (
              typeof configOptions === 'function'
                ? configOptions()
                : configOptions
            ) as EntityOptions;

            const typeId = type.optionalId || entityResult.type.id;
            const indexesJSON = JSON.stringify(indexes);

            const configJSON = [
              '{',
              `name: "${name}",`,
              `indexes: ${indexesJSON},`,
              `type: GraphTypeRuntime<RuntimeDefinitions['${typeId}'], RuntimeTypes['${typeId}'], '${typeId}'>,`,
              '[K: string]: any,',
              '}',
            ].join('\n');

            const config_str =
              typeof configOptions === 'function'
                ? `() => (${configJSON})`
                : `${configJSON}`;

            return [
              'export function createEntity(',
              `configOptions:`,
              config_str,
              '',
              `): Entity<RuntimeDefinitions['${typeId}']['def'], ${indexesJSON}>;`,
            ];
          })(),
        }),
      });
    }

    return entityResult;
  }

  return entity;
}

function _createHooks(): EntityHooks {
  return {
    beforeQuery: createAsyncPlugin(),
    createDefinition: createSyncPlugin(),
    filterResult: createAsyncPlugin(),
    initCreation: createSyncPlugin(),
    postParse: createAsyncPlugin(),
    preParse: createAsyncPlugin(),
    willResolve: createAsyncPlugin(),
  };
}

// pre parse PK, SK and ID setters
function _registerPKSKHook(input: {
  entityOptions: EntityOptions;
  hooks: EntityHooks;
  indexConfig: AnyCollectionIndexConfig;
  entity: AnyEntity;
}) {
  const { indexConfig, entity } = input;

  input.hooks.preParse.pushMiddleware(async function applyDefaultHooks(ctx) {
    async function _onUpdate(doc: Record<string, any>) {
      doc.updatedAt = new Date();
      doc.updatedBy =
        doc.updatedBy || (await ctx.options.context?.userId?.(false));
      doc._v = ulid();
      return doc;
    }

    async function _onCreate(doc: Record<string, any>) {
      await _onUpdate(doc);

      doc.ulid = (() => {
        if (doc.ulid) return doc.ulid;
        return ulid();
      })();

      doc.createdAt = new Date();
      doc.createdBy =
        doc.createdBy || (await ctx.options.context?.userId?.(false));

      doc = preparseFilterGraphTypeFields(doc, entity, 'inputType');

      const parsedIndexes = getDocumentIndexFields(doc, indexConfig);

      if (!parsedIndexes.valid) {
        throw parsedIndexes.error;
      }

      doc = {
        ...doc,
        ...parsedIndexes.indexFields,
      };

      if (!doc.id) {
        doc.id = doc._c;
      }

      const { allowExtraFields } = entity.usedOptions;

      return entity.databaseType.parse(doc, { allowExtraFields });
    }

    if (ctx.isUpdate) {
      ctx.options.update.$set = await _onUpdate({
        ...ctx.options.update.$set,
      });

      if (ctx.isUpsert) {
        const processedDoc = await _onCreate({
          ...ctx.options.update.$setIfNull,
          ...ctx.options.update.$setOnInsert,
          ...ctx.options.update.$set,
        });

        const originalSetFields = new Set(
          Object.keys(ctx.options.update.$set || {}).map(
            (el) => el.split('.')[0]
          )
        );

        const setFields = {};
        const setOnInsertFields = {};

        for (const [key, value] of Object.entries(processedDoc)) {
          if (originalSetFields.has(key)) {
            setFields[key] = value;
          } else {
            setOnInsertFields[key] = value;
          }
        }

        ctx.options.update.$set = setFields;
        ctx.options.update.$setOnInsert = setOnInsertFields;
        delete ctx.options.update.$setIfNull;

        const conflictingFields = Object.keys(setFields).filter(
          (key) => key in setOnInsertFields
        );

        if (conflictingFields.length > 0) {
          throw new Error(
            `Found conflicting fields in update operators: ${conflictingFields.join(
              ', '
            )}`
          );
        }
      } else {
        if (ctx.options.update.$setIfNull) {
          ctx.options.update.$setIfNull = preparseFilterGraphTypeFields(
            ctx.options.update.$setIfNull,
            ctx.entity,
            'inputType'
          );
        }

        if (ctx.options.update.$set) {
          ctx.options.update.$set = preparseFilterGraphTypeFields(
            ctx.options.update.$set,
            ctx.entity,
            'inputType'
          );
        }
      }
      //  ======= close update handling ====
    }

    if (ctx.isCreate) {
      ctx.options.item = await _onCreate(ctx.options.item);
    }

    return ctx;
  });
}

async function _parseOperationContext(input: {
  databaseType: GraphType<any>;
  entity: AnyEntity;
  entityOptions: EntityOptions;
  hooks: EntityHooks;
  method: TransporterLoaderName;
  methodOptions: any;
  indexFieldKeys: string[];
}): Promise<EntityOperationInfoContext> {
  const {
    entityOptions,
    methodOptions,
    method,
    hooks: _hooks,
    databaseType,
    entity,
    indexFieldKeys,
  } = input;

  const { transporter: defaultTransporter, allowExtraFields } = entityOptions;

  await defaultTransporter?.connect();

  let operationInfoContext = buildEntityOperationInfoContext({
    entity,
    method,
    methodOptions,
  });

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

  if (operationInfoContext.isUpdate) {
    operationInfoContext = await _hooks.preParse.dispatch(
      // @ts-ignore
      operationInfoContext,
      { entity }
    );
  }

  if ('item' in operationInfoContext.options) {
    operationInfoContext = await _hooks.preParse.dispatch(
      // @ts-ignore
      operationInfoContext,
      { entity }
    );

    if (!('item' in operationInfoContext.options)) {
      return devAssert('MISSING_ITEM', { operationInfoContext });
    }

    try {
      const parsed = databaseType.parse(operationInfoContext.options.item, {
        allowExtraFields,
        exclude: indexFieldKeys,
      }) as EntityDocumentBase;

      operationInfoContext.options.item = {
        ...operationInfoContext.options.item,
        ...parsed,
      };

      operationInfoContext = await _hooks.postParse.dispatch(
        // @ts-ignore
        operationInfoContext,
        { entity }
      );
    } catch (e: any) {
      e.info = operationInfoContext;
      e.message = `Failed to parse document before saving:\n      ${e.message}`;
      throw e;
    }
  }

  if ('filter' in operationInfoContext.options) {
    operationInfoContext = await _hooks.beforeQuery.dispatch(
      // @ts-ignore
      operationInfoContext,
      {}
    );
  }

  return operationInfoContext;
}

function _getIndexGraphTypes(input: {
  entityOptions: EntityOptions;
  entityOutputDefinitionWithRelations: Record<string, FinalFieldDefinition>;
  parsedIndexKeys: ParsedIndexKey[];
}): Record<string, GraphType<any>> {
  const {
    entityOptions,
    parsedIndexKeys,
    entityOutputDefinitionWithRelations,
  } = input;

  const { name: entityName, type } = entityOptions;

  function findFieldDef(fieldName: string) {
    let def: FinalFieldDefinition | undefined;
    fieldName.split('.').forEach((part, index) => {
      if (index === 0) {
        def = pick(entityOutputDefinitionWithRelations, part) as any;
      } else if (def && def.type === 'object') {
        def = pick(def.def, part);
      }
    });
    return def;
  }

  return parsedIndexKeys.reduce(
    (acc, next): Record<string, GraphType<{ object: any }>> => {
      const fields: ObjectDefinitionInput = {};

      next.PK.requiredFields.forEach((fieldName) => {
        const def = findFieldDef(fieldName);
        if (!def) {
          throw new RuntimeError(
            `Field "${fieldName}" defined for index ${next.index.name} not defined in the input type.`,
            { type }
          );
        }
        fields[fieldName] = def;
      });

      next.SK.requiredFields.forEach((fieldName) => {
        const def = findFieldDef(fieldName);
        if (!def) {
          throw new RuntimeError(
            `Field "${fieldName}" defined for index ${next.index.name} not defined in the input type.`,
            { type }
          );
        }
        fields[fieldName] = def;
      });

      const typeName = `${entityName}${capitalize(next.index.name)}Index`;
      return {
        ...acc,
        [next.index.name]: createType(typeName, { object: fields }),
      };
    },
    {}
  );
}

function _objectAliasPaths(
  def: FinalObjectDefinition,
  found: string[] = [],
  parent = ''
) {
  const isArray = Array.isArray(def);

  Object.entries(def).forEach(([k, v]) => {
    const currentPath = isArray ? `${parent}[${k}]` : `${parent}.${k}`;

    if (v.type === 'alias') {
      found.push(...(parent ? [currentPath, k] : [k]));
    }

    if (v.type === 'object') {
      _objectAliasPaths(v.def, found, currentPath);
    }

    if (Array.isArray(v.def)) {
      v.def.forEach((el) => {
        if (!isFieldTypeName(el?.type)) return;
        _objectAliasPaths(el, found, currentPath);
      });
    }
  });

  return found;
}

export function isEntity(value): value is AnyEntity {
  return (value as AnyEntity | undefined)?.__isEntity === true;
}

function preparseFilterGraphTypeFields<T extends Record<string, any>>(
  values: T,
  entity: AnyEntity,
  typeName: 'inputType' | 'databaseType'
): T {
  // Pre parsing fields that may be formated before filtering or updating
  // The `phone` field is the current use case.
  // It is needed also for filters on updates using upsert:true,
  // because mongo include filters in the possible generated document.
  let preParsed = Object.create(null);
  Object.entries(values).forEach(([k, v]) => {
    if (typeof v === 'string' || typeof v === 'number') {
      if (k.includes('.')) return;
      if (k.includes('[')) return;
      preParsed[k] = v;
    }
  });

  try {
    preParsed = entity[typeName].parse(preParsed, {
      allowExtraFields: true,
      partial: true,
    });
  } catch (e: any) {}

  return Object.assign(values, preParsed);
}

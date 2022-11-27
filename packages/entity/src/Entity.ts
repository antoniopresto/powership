import {
  CircularDeps,
  createType,
  extendDefinition,
  FinalFieldDefinition,
  FinalObjectDefinition,
  GraphType,
  isFieldTypeName,
  isMetaFieldKey,
  ObjectDefinitionInput,
  ObjectType,
} from '@backland/schema';
import {
  AnyCollectionIndexConfig,
  CollectionIndexConfig,
  DocumentIndexesConfig,
  getDocumentIndexFields,
  getParsedIndexKeys,
  parseCollectionIndexConfig,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  TransporterLoader,
  TransporterLoaderName,
  transporterLoaderNames,
} from '@backland/transporter';
import {
  AnyFunction,
  capitalize,
  createProxy,
  devAssert,
  ensureArray,
  getByPath,
  isProduction,
  nonNullValues,
  notNull,
  RuntimeError,
  simpleObjectClone,
  tupleEnum,
  ulid,
} from '@backland/utils';
import { hooks } from 'plugin-hooks';

import {
  graphQLFilterToTransporterFilter,
  objectToGraphQLConditionType,
} from './EntityFilterConditionType';
import {
  AnyEntity,
  AnyEntityDocument,
  Entity,
  EntityOperationInfoContext,
} from './EntityInterfaces';
import { EntityFieldResolver, EntityOptions } from './EntityOptions';
import { createEntityPlugin, EntityHooks } from './EntityPlugin';
import { createEntityDefaultFields } from './defaultFields';
import { buildEntityOperationInfoContext } from './entityOperationContextTypes';
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

const ulidField = CircularDeps.ulid({ autoCreate: true });
const createUlid = () => ulidField.parse(undefined);

const extendMethodsEnum = tupleEnum(
  'extendType',
  'addHooks',
  'addRelation',
  'setOption',
  'clone',
  'addIndexRelation',
  'extend'
);

export function createEntity<
  InputDefinition extends ObjectDefinitionInput,
  Indexes extends DocumentIndexesConfig,
  Options extends EntityOptions<InputDefinition, Indexes> = EntityOptions<
    InputDefinition,
    Indexes
  >
>(
  configOptions:
    | EntityOptions<InputDefinition, Indexes>
    | (() => EntityOptions<InputDefinition, Indexes>)
): Entity<InputDefinition, Indexes>;

export function createEntity(
  configOptions: Record<string, any> | (() => Record<string, any>)
): any {
  const optionMutations: ((options: EntityOptions) => EntityOptions)[] = [];
  const entityMutations: ((entity: AnyEntity) => AnyEntity)[] = [];

  let entityOptions = createProxy(() => {
    const opt =
      typeof configOptions === 'function'
        ? //
          configOptions()
        : configOptions;

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
  const resolvers: EntityFieldResolver<any, any, any, any>[] = [];
  let gettersWereCalled = false;

  const entity = createProxy(_createEntity, {
    onGet(k: any): any {
      if (k === '__$is_entity__') return true;

      if (typeof k === 'string' && k in extendMethodsEnum) {
        // clone
        if (k === 'clone') {
          return function cloneEntity(
            handler:
              | ((originalOptions: EntityOptions) => EntityOptions)
              | EntityOptions
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
          };
        }

        if (k === 'setOption') {
          return function setOption(optionName: string, value: any) {
            optionMutations.push((opt) => {
              return {
                ...opt,
                [optionName]: value,
              };
            });
            return entity;
          };
        }

        if (k === 'addIndexRelation') {
          return function addIndexRelation(
            name: string,
            relationInput: EntityIndexRelationInput
          ) {
            const relation = { name, entity: relationInput };

            entityMutations.push(
              //
              (entity) => {
                entity.indexRelations[relation.name] = relation;
                return entity;
              },
              //
              (opt: any) => {
                _addEntityIndexRelations(opt, [[relation.name, relation]]);
                return opt;
              }
            );

            return entity;
          };
        }

        if (k === 'extendType') {
          return function extendType(
            handler: (helper: any, originalOptions: EntityOptions) => AnyEntity
          ): AnyEntity {
            // @ts-ignore
            return createEntity(() => {
              const newType = handler(
                extendDefinition(entityOptions.type),
                entityOptions
              );

              return { ...entityOptions, type: newType } as any;
            }) as any;
          };
        }

        if (k === 'addHooks') {
          return function addHooks(hooks) {
            plugins.push(
              ...ensureArray(hooks).map((hookConfig, index) => {
                return createEntityPlugin(
                  `${entityOptions.name}MainPlugin_${index}`,
                  hookConfig
                );
              })
            );
            return entity;
          };
        }

        if (k === 'addRelation') {
          return function addRelation(resolver) {
            resolvers.push(...ensureArray(resolver));
            return entity;
          };
        }

        if (k === 'extend') {
          return function extend(cb) {
            entityMutations.push((entity) => {
              const ext_utils = { extend: extendDefinition };
              const partial = cb(entity, ext_utils);
              if (!partial || typeof partial !== 'object') return entity;
              return { ...entity, ...partial };
            });
            return entity;
          };
        }
      }

      return null;
    },
  });

  function _createEntity() {
    entityOptions = { ...entityOptions }; // open proxy;
    gettersWereCalled = true;

    const _hooks = _createHooks();

    // keep it here, because can be changed in the above "onGet"
    const {
      indexes,
      transporter: defaultTransporter,
      type,
      name: entityName,
    } = entityOptions;

    plugins.forEach((plugin) => {
      try {
        plugin(_hooks);
      } catch (e: any) {
        throw new RuntimeError(`Failed to apply plugin ${plugin?.name}`, {
          message: e.message,
          plugin,
        });
      }
    });

    const inputObjectType = nonNullValues({
      entityTypeObject: type.__lazyGetter.objectType,
    }).entityTypeObject;

    const entity = {} as any;
    const loaders: Record<string, any> = {};

    let entityOutputDefinitionWithRelations = {
      ...createEntityDefaultFields(),
      ...inputObjectType.cleanDefinition(),
    };

    const fields = Object.keys(entityOutputDefinitionWithRelations);
    let inputDef: Record<string, FinalFieldDefinition> =
      inputObjectType.cleanDefinition();

    let updateDefinition = inputObjectType.clone().optional().def();

    _hooks.createDefinition.exec(updateDefinition, {
      entityOptions,
      fields,
      kind: 'updateDefinition',
      resolvers,
    });

    const databaseDefinition = simpleObjectClone(
      entityOutputDefinitionWithRelations
    );

    _hooks.createDefinition.exec(databaseDefinition, {
      entityOptions,
      fields,
      kind: 'databaseDefinition',
      resolvers,
    });

    // type without relations
    const databaseType = createType(`${entityOptions.name}_withoutRelations`, {
      // without relations and other alterations
      object: databaseDefinition,
    });

    _hooks.createDefinition.exec(entityOutputDefinitionWithRelations, {
      entityOptions,
      fields,
      kind: 'outputDefinition',
      resolvers,
    });

    _hooks.createDefinition.exec(inputDef, {
      entityOptions,
      fields,
      kind: 'inputDefinition',
      resolvers,
    });

    entity['transporter'] = defaultTransporter;

    const indexConfig: CollectionIndexConfig<any, string> = {
      entity: entityName,
      indexes,
    };

    const conditionsType = objectToGraphQLConditionType(
      `${entityName}QueryConditions`,
      entityOutputDefinitionWithRelations
    );

    parseCollectionIndexConfig(indexConfig); // only validating the return has lower cased fields used in _ids
    const parsedIndexKeys = getParsedIndexKeys(indexConfig);

    // pre parse PK, SK and ID setters
    _registerPKSKHook({
      entityOptions,
      hooks: _hooks,
      indexConfig,
      entity,
    });

    const entityType = createType(`${entityName}Entity`, {
      object: entityOutputDefinitionWithRelations,
    });

    const indexGraphTypes = _getIndexGraphTypes({
      entityOptions,
      entityOutputDefinitionWithRelations,
      parsedIndexKeys,
    });

    const inputType = entityOptions.type
      .clone()
      .extendDefinition({
        ...createEntityDefaultFields(true),
        ...inputDef,
      })
      .graphType(`${entityName}Input`);

    function _createLoader(config: {
      indexInfo: ParsedIndexKey[];
      indexes: EntityOptions['indexes'];
      method: TransporterLoaderName;
      newMethodName: string;
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
          context: args[0].context,
          indexConfig: {
            ...indexConfig,
            indexes,
          },
        };

        const operation = await _parseOperationContext({
          databaseType,
          entity,
          entityOptions,
          hooks: _hooks,
          method,
          methodOptions: configInput,
        });

        const context = { operation, resolvers };

        let resolver: AnyFunction = transporter[method].bind(transporter);

        resolver = (await _hooks.willResolve.exec(
          resolver as any,
          operation as any
        )) as any;

        let result = await resolver(operation.options);

        if (
          !result.error &&
          operation.isUpdate &&
          entity.aliasPaths.length &&
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
          const res = await _hooks.filterResult.exec(
            { items: [result.item], kind: 'items' },
            context
          );
          if (res.kind === 'items') result.item = res.items[0];
        }

        if (result.items) {
          const res = await _hooks.filterResult.exec(
            { items: result.items, kind: 'items' },
            context
          );
          if (res.kind === 'items') result.items = res.items;
        }

        if (result.edges) {
          const res = await _hooks.filterResult.exec(
            { kind: 'pagination', pagination: result },
            context
          );
          if (res.kind === 'pagination') result = res.pagination;
        }

        return result;
      };

      // create the filter with the index fields plus the "id" field
      function getFilterDef() {
        function _addIDField(obj: object) {
          const def: any = { id: { optional: true, type: 'ID' } };

          Object.keys(obj).forEach((k) => {
            if (isMetaFieldKey(k)) return;
            def[k] = { ...obj[k], optional: true };
          });

          return def;
        }

        if (indexInfo.length === 1) {
          const obj = {
            ...indexGraphTypes[
              indexInfo[0].index.name
            ].__lazyGetter.objectType!.cleanDefinition(),
          };
          return _addIDField(obj);
        }

        const all: any = {};

        indexInfo.forEach(({ index: { name } }) => {
          const objectType = indexGraphTypes[name].__lazyGetter
            .objectType as unknown as ObjectType<{
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
        return _addIDField(all);
      }

      function getPaginationType() {
        const filter = getFilterDef();
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
            def: filter,

            type: 'object',
          },
          first: {
            optional: true,
            type: 'int',
          },
        };
      }

      Object.defineProperties(loader, {
        filterDef: {
          get() {
            return getFilterDef();
          },
        },
        indexInfo: { value: indexInfo },
        name: { value: newMethodName },
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
          indexInfo: [indexInfo],
          indexes: [
            indexConfig.indexes.find((index) => index.name === indexName)!,
          ],
          method,
          newMethodName: methodName,
        });
      });
    });

    transporterLoaderNames.forEach((method) => {
      _createLoader({
        indexInfo: parsedIndexKeys,
        indexes: indexConfig.indexes,
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

    function getPaginationType() {
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

    function getDocumentId(doc): string {
      const indexes = getDocumentIndexFields(doc, indexConfig);
      if (indexes.error) throw indexes.error;
      return notNull(indexes.indexFields.id);
    }

    Object.assign(entity, {
      inputType,
      addHooks: () => ({}), // handled in proxy
      addRelation: () => ({}), // handled in proxy
      aliasPaths: _objectAliasPaths(databaseDefinition),
      conditionsDefinition: conditionsType.__lazyGetter.objectType!.definition,
      databaseType,
      edgeType: edgeType,
      indexRelations: {},
      extend: () => ({}), // handled in proxy
      getDocumentId,
      indexGraphTypes: indexGraphTypes,
      indexes: indexes,
      usedOptions: entityOptions,
      inputConfigTypeDefinition: inputDef,
      name: entityName,
      originType: type,
      paginationType: getPaginationType(),
      parse: entityType.parse,
      parseDocumentIndexes: function parseDocumentIndexes(
        doc
      ): ParsedDocumentIndexes {
        return getDocumentIndexFields(doc, indexConfig);
      },
      transporter: defaultTransporter || entityOptions.transporter,
      type: entityType,
      updateDefinition: updateDefinition,
    });

    return entityMutations.reduce((acc, next) => {
      return next(acc);
    }, entity);
  }

  return entity;
}

function _createHooks(): EntityHooks {
  return {
    beforeQuery: hooks.waterfall(),
    createDefinition: hooks.parallel(),
    filterResult: hooks.waterfall(),
    initCreation: hooks.parallel(),
    postParse: hooks.waterfall(),
    preParse: hooks.waterfall(),
    willResolve: hooks.waterfall(),
  };
}

// pre parse PK, SK and ID setters
function _registerPKSKHook(input: {
  entityOptions: EntityOptions;
  hooks: EntityHooks;
  indexConfig: AnyCollectionIndexConfig;
  entity: AnyEntity;
}) {
  const { hooks, indexConfig, entity } = input;

  hooks.preParse.register(async function applyDefaultHooks(ctx) {
    async function _onUpdate(doc: Record<string, any>) {
      doc.updatedAt = new Date();
      doc.updatedBy =
        doc.updatedBy || (await ctx.options.context?.userId?.(false));
      doc._v = ulid();
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

      return entity.inputType.parse(doc);
    }

    if (ctx.isUpdate) {
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
}

async function _parseOperationContext(input: {
  databaseType: GraphType<any>;
  entity: AnyEntity;
  entityOptions: EntityOptions;
  hooks: EntityHooks;
  method: TransporterLoaderName;
  methodOptions: any;
}): Promise<EntityOperationInfoContext> {
  const {
    entityOptions,
    methodOptions,
    method,
    hooks: hooks,
    databaseType,
    entity,
  } = input;
  const { transporter: defaultTransporter } = entityOptions;

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
    operationInfoContext = await hooks.preParse.exec(
      // @ts-ignore
      operationInfoContext,
      { entity }
    );
  }

  if ('item' in operationInfoContext.options) {
    operationInfoContext = await hooks.preParse.exec(
      // @ts-ignore
      operationInfoContext,
      { entity }
    );

    if (!('item' in operationInfoContext.options)) {
      return devAssert('MISSING_ITEM', { operationInfoContext });
    }

    try {
      operationInfoContext.options.item = databaseType.parse(
        operationInfoContext.options.item
      ) as AnyEntityDocument;

      operationInfoContext = await hooks.postParse.exec(
        // @ts-ignore
        operationInfoContext,
        { entity }
      );
    } catch (e: any) {
      e.info = operationInfoContext;
      throw e;
    }
  }

  if ('filter' in operationInfoContext.options) {
    operationInfoContext = await hooks.beforeQuery.exec(
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
        def = getByPath(entityOutputDefinitionWithRelations, part);
      } else if (def && def.type === 'object') {
        def = getByPath(def.def, part);
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

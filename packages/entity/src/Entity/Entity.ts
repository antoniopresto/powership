import {
  createType,
  Darch,
  extendDefinition,
  GraphType,
  ObjectDefinitionInput,
  ObjectType,
} from '@darch/schema';
import { isMetaFieldKey } from '@darch/schema/lib/fields/MetaFieldField';
import { createProxy, ensureArray, simpleObjectClone } from '@darch/utils';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { devAssert } from '@darch/utils/lib/devAssert';
import { hooks } from '@darch/utils/lib/hooks';
import { nonNullValues, notNull } from '@darch/utils/lib/invariant';
import { capitalize } from '@darch/utils/lib/stringCase';
import { AnyFunction } from '@darch/utils/lib/typeUtils';

import {
  CollectionIndexConfig,
  getDocumentIndexFields,
  getParsedIndexKeys,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  Transporter,
  TransporterLoader,
  TransporterLoaderName,
  transporterLoaderNames,
  validateIndexNameAndField,
} from '../Transporter';

import {
  graphQLFilterToTransporterFilter,
  objectToGraphQLConditionType,
} from './EntityFilterConditionType';
import {
  AnyEntityDocument,
  createEntityDefaultFields,
  Entity,
  EntityOperationInfoContext,
} from './EntityInterfaces';
import {
  _EntityGraphType,
  EntityFieldResolver,
  EntityOptions,
} from './EntityOptions';
import { createEntityPlugin, EntityHooks } from './EntityPlugin';
import { buildEntityOperationInfoContext } from './entityOperationContextTypes';
import { PageInfoType } from './paginationUtils';
import { applyFieldResolvers } from './plugins/applyFieldResolvers';
import { removeUnderscoreFields } from './plugins/removeUnderscoreFields';

export * from './paginationUtils';

const ulidField = Darch.ulid({ autoCreate: true });
const createUlid = () => ulidField.parse(undefined);

export function createEntity<
  Name extends string,
  Type extends _EntityGraphType,
  TTransport extends Transporter,
  Options extends EntityOptions<Name, Type, TTransport>
>(entityOptions: Options): Entity<Options> {
  const plugins = [removeUnderscoreFields, applyFieldResolvers];
  const resolvers: EntityFieldResolver<any, any, any, any>[] = [];
  let gettersWereCalled = false;

  const entity = createProxy(_createEntity, {
    onGet(k): any {
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

      if (k === 'addRelations') {
        if (gettersWereCalled) {
          throw new Error(
            `addRelations should be used right after entity creation.`
          );
        }

        return function addRelations(resolver) {
          resolvers.push(...ensureArray(resolver));
          return entity;
        };
      }

      return null;
    },
  });

  function _createEntity() {
    gettersWereCalled = true;

    const {
      indexes,
      transporter: defaultTransporter,
      type,
      name: entityName,
    } = entityOptions;

    const _hooks: EntityHooks<any, any, any> = {
      beforeQuery: hooks.waterfall(),
      createDefinition: hooks.parallel(),
      filterResult: hooks.waterfall(),
      postParse: hooks.waterfall(),
      preParse: hooks.waterfall(),
    };

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

    const entityNameLowercase = entityName.toLowerCase();

    const inputObjectType = nonNullValues({
      entityTypeObject: type._object,
    }).entityTypeObject;

    const entity = {} as any;
    const loaders: Record<string, any> = {};

    let entityOutputDefinitionWithRelations = {
      ...createEntityDefaultFields(),
      ...inputObjectType.cleanDefinition(),
    };

    const fields = Object.keys(entityOutputDefinitionWithRelations);
    let inputDef = inputObjectType.cleanDefinition();

    _hooks.createDefinition.exec(entityOutputDefinitionWithRelations, {
      fields,
      kind: 'databaseDefinition',
      options: entityOptions,
      resolvers,
    });

    // type without relations
    const databaseType = createType(`${entityOptions.name}_withoutRelations`, {
      // without relations and other alterations
      object: simpleObjectClone(entityOutputDefinitionWithRelations),
    });

    _hooks.createDefinition.exec(entityOutputDefinitionWithRelations, {
      fields,
      kind: 'outputDefinition',
      options: entityOptions,
      resolvers,
    });

    _hooks.createDefinition.exec(inputDef, {
      fields,
      kind: 'inputDefinition',
      options: entityOptions,
      resolvers,
    });

    entity['transporter'] = defaultTransporter;

    const indexConfig: CollectionIndexConfig<any, string> = {
      entity: entityNameLowercase,
      indexes,
    };

    const conditionsType = objectToGraphQLConditionType(
      `${entityName}Conditions`,
      databaseType.definition.def
    );

    validateIndexNameAndField(indexConfig);
    const parsedIndexKeys = getParsedIndexKeys(indexConfig);

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

    const entityType = createType(`${entityName}Entity`, {
      object: entityOutputDefinitionWithRelations,
    });

    async function parseOperationContext(
      method: TransporterLoaderName,
      methodOptions: any
    ): Promise<EntityOperationInfoContext<any, any, any>> {
      await defaultTransporter?.connect();

      let operationInfoContext = buildEntityOperationInfoContext(
        method,
        methodOptions,
        entityOptions
      );

      if ('filter' in operationInfoContext.options) {
        operationInfoContext.options.filter = graphQLFilterToTransporterFilter(
          operationInfoContext.options.filter
        );
      }
      if ('condition' in operationInfoContext.options) {
        operationInfoContext.options.condition =
          graphQLFilterToTransporterFilter(
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
          operationInfoContext.options.item = databaseType.parse(
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
          const def = entityOutputDefinitionWithRelations[fieldName];
          if (!def) {
            throw new RuntimeError(
              `Field "${fieldName}" defined for index ${next.index.name} not defined in the input type.`,
              { type }
            );
          }
          fields[fieldName] = entityOutputDefinitionWithRelations[fieldName];
        });

        next.SK.requiredFields.forEach((fieldName) => {
          const def = entityOutputDefinitionWithRelations[fieldName];
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

        const operation = await parseOperationContext(method, configInput);
        const context = { context: operation, resolvers };

        const resolver: AnyFunction = transporter[method].bind(transporter);
        const result = await resolver(operation.options);

        if (result.item) {
          const [parsed] = await _hooks.filterResult.exec(
            [result.item],
            context
          );

          result.item = parsed;
        }

        if (result.items) {
          result.items = await _hooks.filterResult.exec(result.items, context);
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
            ]._object!.cleanDefinition(),
          };
          return _addIDField(obj);
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
            optional: false,
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

    const ext_utils = { extend: extendDefinition };

    function extend(cb) {
      const partial = cb(entity, ext_utils);
      if (!partial || typeof partial !== 'object') return entity;
      const res: any = { ...entity };
      Object.entries(partial).forEach(([k, v]) => {
        if (v !== undefined && v !== null) {
          res[k] = v;
        }
      });
      return res;
    }

    function getDocumentId(doc): string {
      const indexes = getDocumentIndexFields(doc, indexConfig);
      if (indexes.error) throw indexes.error;
      return notNull(indexes.indexFields.id);
    }

    const getters: {
      [K in Exclude<keyof Entity<any>, keyof Entity<any>['loaders']>]: any;
    } = {
      addHooks: () => ({}), // handled in proxy
      addRelations: () => ({}), // handled in proxy
      conditionsDefinition: conditionsType._object!.definition,
      edgeType: edgeType,
      extend,
      getDocumentId,
      indexGraphTypes: indexGraphTypes,
      indexes: indexes,
      inputDefinition: inputDef,
      loaders: loaders,
      name: entityName,
      originType: type,
      paginationType: getPaginationType(),
      parse: databaseType.parse,
      parseDocumentIndexes: function parseDocumentIndexes(
        doc
      ): ParsedDocumentIndexes {
        return getDocumentIndexFields(doc, indexConfig);
      },
      transporter: defaultTransporter || entityOptions.transporter,
      type: entityType,
    };

    Object.assign(entity, getters);

    return entity;
  }

  return entity;
}

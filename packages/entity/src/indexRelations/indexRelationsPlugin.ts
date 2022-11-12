import {
  AnyCollectionIndexConfig,
  CreateOne,
  CreateOneResult,
  DocumentBase,
} from '@backland/transporter';
import { devAssert, groupBy } from '@backland/utils';

import {
  EntityOperationInfoContext,
  isEntityContextOfLoader,
} from '../EntityInterfaces';
import { createEntityPlugin } from '../EntityPlugin';

import { EntityIndexRelationConfig } from './addEntityIndexRelations';

type RelatedDocumentFound = {
  created?: DocumentBase;
  doc: DocumentBase;
  error?: string;
  field: string;
  relationConfig: EntityIndexRelationConfig;
};

// handle entity fields from index relations
export const indexRelationsPlugin = createEntityPlugin(
  'IndexRelationsPlugin',
  (hooks) => {
    //
    hooks.createDefinition.register(function createDefinition(def, helpers) {
      if (helpers.kind === 'outputDefinition') return;
      const { entityOptions } = helpers;

      entityOptions.indexes.forEach((index) => {
        index.relations?.forEach((rel) => {
          delete def[rel.name];
        });
      });
    });

    // removing relation fields provided in createOne and saving in
    // context to be inserted in the corresponding entities later
    // TODO move to transporter
    hooks.preParse.register(function preParse(context, { entity }) {
      if (!isEntityContextOfLoader(context, 'createOne')) return;

      let { item } = context.options;

      entity.usedOptions.indexes.forEach((index) => {
        index.relations?.forEach((rel) => {
          const { [rel.name]: docs, ...rest } = item;
          //
          if (docs && typeof docs === 'object') {
            if (!Array.isArray(docs)) {
              devAssert(`Only list relation is supported in indexRelation.`);
            }

            const relationConfig = entity.indexRelations[rel.name];

            docs.forEach((doc) => {
              _setCreateOneRelatedDocumentsInContext(context, {
                doc,
                field: rel.name,
                relationConfig,
              });
            });
          }

          item = rest;
        });
      });

      context.options = {
        ...context.options,
        item,
      };
    });

    // checking for items saved in context in the above hook to save in
    // the corresponding entities
    // TODO move logic to transporter
    hooks.willResolve.register(function willResolve(resolver, context): any {
      const relationsFound = _getCreateOneRelatedRelationsInContext(context);
      if (!Array.isArray(relationsFound)) return;

      const _resolver = async function _resolver(
        config: Parameters<
          CreateOne<
            DocumentBase,
            DocumentBase,
            AnyCollectionIndexConfig['indexes']
          >
        >[0]
      ) {
        function _undo() {
          return Promise.allSettled(
            relationsFound!.map(async (rel) => {
              if (!rel.created) return;

              const { _id } = rel.created;

              rel.relationConfig.entity.deleteOne({
                context: config.context,
                filter: { _id },
              });
            })
          );
        }

        try {
          await Promise.all(
            relationsFound.map(async (input) => {
              const { relationConfig, doc } = input;

              const res = await relationConfig.entity.createOne({
                context: config.context,
                item: doc as any,
                replace: config.replace, // ⚠️
              });

              if (res.error) {
                input.error = res.error;
              }

              if (res.item) {
                input.created = res.item;
              }
            })
          );
        } catch (e) {
          throw e;
        }

        try {
          // @ts-ignore
          const created: CreateOneResult<any> = await resolver(config);

          if (created.item) {
            const byField = groupBy(relationsFound, (el) => el.field);
            Object.entries(byField).forEach(([field, rel]) => {
              created.item[field] = rel.map((el) => el.created).filter(Boolean);
            });
          }

          return created;
        } catch (e) {
          await _undo();
          throw e;
        }
      };

      // @ts-ignore
      Object.defineProperty(_resolver, 'name', { value: resolver.name });

      return _resolver;
    });
  }
);

function _getCreateOneRelatedRelationsInContext(
  context: EntityOperationInfoContext
): RelatedDocumentFound[] | null {
  const res = context.shared.createOneRelatedDocsFound;
  if (!Array.isArray(res)) return null;
  return res;
}

function _setCreateOneRelatedDocumentsInContext(
  context: EntityOperationInfoContext,
  {
    relationConfig,
    doc,
    field,
  }: {
    doc: DocumentBase;
    field: string;
    relationConfig: EntityIndexRelationConfig;
  }
) {
  context.shared.createOneRelatedDocsFound = [
    ...(_getCreateOneRelatedRelationsInContext(context) || []),
    { doc, field, relationConfig },
  ];
}

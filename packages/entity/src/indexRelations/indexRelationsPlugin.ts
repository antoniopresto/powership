import {
  AnyDocIndexItem,
  CreateOneResult,
  DocumentBase,
  parseGraphID,
} from '@backland/transporter';
import { devAssert, groupBy, NodeLogger } from '@backland/utils';

import {
  _EntityCreateOne,
  AnyEntityDocument,
  EntityDefaultFields,
  EntityOperationInfoContext,
  isEntityContextOfLoader,
} from '../EntityInterfaces';
import { EntityOptions } from '../EntityOptions';
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

    // setting relations in respective fields
    hooks.filterResult.register(function filterResult(payload, context) {
      if (!context.operation.isFind) return;

      const relations = context.operation.entity.indexes
        .map((index: AnyDocIndexItem) => {
          return (index.relations || []).map((rel) => {
            return {
              rel,
              index,
            };
          });
        })
        .flat();

      if (!relations.length) return;

      const {
        operation: {
          entityOptions: { name: entityName },
        },
      } = context;

      const items =
        payload.kind === 'pagination'
          ? payload.pagination.edges.map((el) => el.node)
          : payload.items;

      const subDocPositions: number[] = [];
      const docsByParent: Record<string, AnyEntityDocument[]> = {};

      items.forEach((doc, pos) => {
        const idInfo = parseGraphID(doc.id);

        if (!idInfo) {
          NodeLogger.logError(`Document without entity found.`, { id: doc.id });
          return '';
        }

        if (idInfo.entity !== entityName.toLowerCase()) {
          subDocPositions.push(pos);
        }

        if (!idInfo.parent) return;
        const { input: parentId } = idInfo.parent;
        docsByParent[parentId] = docsByParent[parentId] || [];
        docsByParent[parentId].push(doc);
      });

      items.forEach((parentDoc) => {
        const relDocs = docsByParent[parentDoc.id];
        if (!relDocs?.length) return;

        relations.forEach(({ rel, index }) => {
          const indexField = `${index.field}PK`; // example: _idPK or _id2PK

          const withSameField = relDocs.filter((relDoc) => {
            return relDoc[indexField] === parentDoc[indexField];
          });

          const list = (parentDoc[rel.name] = parentDoc[rel.name] || []);

          if (!Array.isArray(list)) {
            NodeLogger.logError(`Item with relation field already defined.`, {
              id: parentDoc.id,
            });
            return;
          }

          list.push(...withSameField);
        });
      });

      subDocPositions.forEach((pos) => {
        delete items[pos];
      });
    });

    // intercepting create to create related items in input
    hooks.willResolve.register(function willResolve(resolver, context): any {
      const relationsFound = _getCreateOneRelatedRelationsInContext(context);
      if (!Array.isArray(relationsFound)) return;

      const _resolver = async function _resolver(
        config: Parameters<_EntityCreateOne<EntityOptions>>[0]
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
                item: doc,
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

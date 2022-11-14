import { NodeLogger } from '@backland/utils';

import {
  AnyCollectionIndexConfig,
  DocumentIndexItem,
  parseCollectionIndexConfig,
  parseGraphID,
} from './CollectionIndex';
import { DocumentBase } from './Transporter';

export function mergeIndexRelationsResult(input: {
  items: DocumentBase[];
  indexConfig: AnyCollectionIndexConfig;
}) {
  const { items, indexConfig } = input;
  const { entity, indexes } = parseCollectionIndexConfig(indexConfig);

  const relations = indexes
    .map((index: DocumentIndexItem<any>) => {
      return (index.relations || []).map((rel) => {
        return {
          rel,
          index,
        };
      });
    })
    .flat();

  if (!relations.length) return items;

  const subDocPositions = new Set<number>();
  const docsByParent: Record<string, DocumentBase[]> = {};

  items.forEach((doc, pos) => {
    const idInfo = parseGraphID(doc.id);

    if (!idInfo) {
      NodeLogger.logError(`Document without entity found.`, { id: doc.id });
      return '';
    }

    if (idInfo.entity !== entity) {
      subDocPositions.add(pos);
    }

    if (!idInfo.parent) return;

    const { input: parentId } = idInfo.parent;
    docsByParent[parentId] = docsByParent[parentId] || [];
    docsByParent[parentId].push(doc);
    return;
  });

  items.forEach((parentDoc) => {
    const relDocs = docsByParent[parentDoc.id];
    if (!relDocs?.length) return;

    relations.forEach(({ rel, index }) => {
      const indexField = `${index.field}PK`; // example: _idPK or _id2PK

      const withSameField = relDocs.filter((relDoc) => {
        return relDoc[indexField] === parentDoc[indexField];
      });

      const parentFieldRef = (parentDoc[rel.name] = parentDoc[rel.name] || []);

      if (!Array.isArray(parentFieldRef)) {
        NodeLogger.logError(`Document relation field already set.`, {
          id: parentDoc.id,
        });
        return;
      }

      parentFieldRef.push(...withSameField);
    });
  });

  return items.filter((_, index) => {
    return !subDocPositions.has(index);
  });
}

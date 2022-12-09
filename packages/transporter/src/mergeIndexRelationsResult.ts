import { NodeLogger } from '@backland/utils';

import {
  AnyCollectionIndexConfig,
  DocumentIndexItem,
  parseCollectionIndexConfig,
  parseFilterCursor,
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
    const idInfo = parseFilterCursor(doc.id);

    if (!idInfo) {
      NodeLogger.logError(`Document without entity found.`, { id: doc.id });
      return '';
    }

    if (idInfo.entity !== entity) {
      subDocPositions.add(pos);
    }

    if (!idInfo.parentPrefix) return;

    docsByParent[idInfo.parentPrefix] = docsByParent[idInfo.parentPrefix] || [];
    docsByParent[idInfo.parentPrefix].push(doc);
    return;
  });

  items.forEach((parentDoc) => {
    const relDocs = docsByParent[parentDoc.id];
    if (!relDocs?.length) return;

    relations.forEach(({ rel, index }) => {
      const indexField = `${index.name}PK`;

      const withSameField = relDocs.filter((relDoc) => {
        const p = parentDoc[indexField];
        const relatedTo = relDoc._rpk;
        return relatedTo?.includes?.(p);
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

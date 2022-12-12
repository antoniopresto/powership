import { inspectObject, NodeLogger } from '@backland/utils';

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

  const mainDocs: DocumentBase[] = [];
  const docsByParent: Record<string, DocumentBase[]> = {};

  items.forEach((doc) => {
    const idInfo = parseFilterCursor(doc.id);

    if (!idInfo) {
      NodeLogger.logError(`Document without entity found.`, { id: doc.id });
      return;
    }

    const PKKey = idInfo.PKFieldName;
    const PKValue = idInfo.PKPart;
    const KEY = `__${PKKey}_${PKValue}__`;

    if (idInfo.entity === entity) {
      mainDocs.push(doc);
      relations.forEach(({ rel }) => {
        doc[rel.name] = docsByParent[KEY];
      });
    } else {
      if (!idInfo.parentPrefix) {
        throw new Error(
          `Unknown entity returned as relation. ${inspectObject(idInfo)}`
        );
      }

      docsByParent[KEY] = docsByParent[KEY] || [];
      docsByParent[KEY].push(doc);
    }
  });

  return mainDocs;
}

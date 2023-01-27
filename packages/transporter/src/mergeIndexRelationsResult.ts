import {
  NodeLogger,
  ParsedIndexCursor,
  parseFilterCursor,
} from '@backland/utils';

import {
  AnyCollectionIndexConfig,
  DocumentIndexItem,
  parseCollectionIndexConfig,
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

  type Item = { doc: DocumentBase; idInfo: ParsedIndexCursor; KEY: string };

  const payload = items.reduce<{ main: Item[]; child: Item[] }>(
    (acc, doc) => {
      const idInfo = parseFilterCursor(doc.id);

      if (!idInfo) {
        NodeLogger.logError(`Document without entity found.`, { id: doc.id });
        return acc;
      }

      const PKKey = idInfo.PKFieldName;

      const PKValue = idInfo.parentPrefix
        ? idInfo.parentPrefix.slice(0, -1) // slicing the RELATION_PRECEDES
        : idInfo.PKPartOpen;

      const KEY = `${PKKey}##${PKValue}`;

      if (idInfo.entity === entity) {
        return {
          ...acc,
          main: [...acc.main, { doc,
idInfo,
KEY }],
        };
      }

      return {
        ...acc,
        child: [...acc.child, { doc,
idInfo,
KEY }],
      };
    },
    { main: [],
child: [] }
  );

  return payload.main.map(({ doc, KEY }) => {
    relations.forEach(({ rel }) => {
      doc[rel.name] = payload.child
        .filter((child) => {
          return child.KEY === KEY && child.idInfo.entity === rel.entity;
        })
        .map((el) => el.doc);
    });
    return doc;
  });
}

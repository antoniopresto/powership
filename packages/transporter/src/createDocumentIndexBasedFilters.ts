import {
  nonNullValues,
  parseIndexFieldName,
  RELATION_PRECEDES,
} from '@powership/utils';

import {
  AnyCollectionIndexConfig,
  IndexBasedFilterParsed,
  parseCollectionIndexConfig,
  ParsedIndexKey,
  RelationsFilter,
} from './CollectionIndex';
import { IndexFilterRecord } from './Transporter';
import { getDocumentIndexFields } from './getDocumentIndexFields';
import { parseFilterIndexFilterParts } from './parseFilterIndexFilterParts';

/**
 * Receives a document indexConfig and a key-value filter and converts to
 * an index based search filter.
 * @param filter
 * @param indexConfig
 */
export function createDocumentIndexBasedFilters(
  filter: IndexFilterRecord,
  indexConfig: AnyCollectionIndexConfig
): IndexBasedFilterParsed {
  indexConfig = parseCollectionIndexConfig(indexConfig);

  nonNullValues({ filter });

  const parsedIndexCursors = parseFilterIndexFilterParts(filter, indexConfig);

  const relationFilters: RelationsFilter[] = [];

  if (parsedIndexCursors.isFinalParsedSearch) {
    const indexFilter = parsedIndexCursors.cursor.filter;

    indexConfig.indexes.forEach((index) => {
      if (index.relations?.length) {
        const $startsWith =
          `${parsedIndexCursors.cursor.PKPartOpen}${RELATION_PRECEDES}` as const;

        relationFilters.push({
          [parseIndexFieldName(index.name, 'PK')]: { $startsWith },
        });
      }
    });

    return {
      indexFilter,
      relationFilters: relationFilters.length ? relationFilters : undefined,
    };
  } else {
    const indexFilter = parsedIndexCursors.parts.reduce((acc, next) => {
      return { ...next.indexFilter, ...acc };
    }, {});

    parsedIndexCursors.parts.forEach(({ index, PKPartOpen }) => {
      if (index.relations?.length) {
        const $startsWith = `${PKPartOpen}${RELATION_PRECEDES}` as const;

        relationFilters.push({
          [parseIndexFieldName(index.name, 'PK')]: { $startsWith },
        });
      }
    });

    return {
      indexFilter,
      relationFilters: relationFilters.length ? relationFilters : undefined,
    };
  }
}

export function getParsedIndexKeys(
  indexConfig: AnyCollectionIndexConfig
): ParsedIndexKey[] {
  const parts = getDocumentIndexFields({}, indexConfig);
  return parts.parsedIndexKeys;
}

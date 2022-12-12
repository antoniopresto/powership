import { IndexCursor, ParsedIndexCursor } from './IndexCursor';
import { FilterRecord, IndexFilter, IndexFilterRecord } from './Transporter';
import { pickIndexKeyPartsFromDocument } from './pickIndexKeyPartsFromDocument';
import { devAssert, inspectObject } from '@backland/utils';
import { parseIndexFieldName } from './parseIndexFieldName';
import {
  AnyCollectionIndexConfig,
  DocumentIndexItem,
  ParsedIndexPart,
  parseFilterCursor,
} from './CollectionIndex';

export type ParsedIndexFilterPart = {
  parsedIndexCursor: ParsedIndexCursor;
  index: DocumentIndexItem;
  PKPartParsed: ParsedIndexPart;
  SKPartParsed: ParsedIndexPart | null;
  indexFilter: IndexFilterRecord;
};

export function parseFilterIndexFilterParts(
  filter: Record<string, any>,
  indexConfig: AnyCollectionIndexConfig
):
  | { parts: ParsedIndexFilterPart[]; isFinalParsedSearch: false }
  | { cursor: ParsedIndexCursor; isFinalParsedSearch: true } {
  const { indexes, entity } = indexConfig;

  const filterKeys = new Set(Object.keys(filter));

  const finalFilterFound: FilterRecord = {};

  for (let [key, value] of Object.entries(filter)) {
    indexes.forEach((el) => {
      const PKName = parseIndexFieldName(el.name, 'PK');
      const SKName = parseIndexFieldName(el.name, 'SK');

      if (PKName in filter && SKName in filter) {
        finalFilterFound[PKName] = filter[PKName];
        finalFilterFound[SKName] = filter[SKName];
      }

      if (SKName in filter) {
        finalFilterFound[SKName] = filter[SKName];
      }
    });

    if (key === 'id') {
      if (typeof value !== 'string') continue;

      const idParsed = parseFilterCursor(value);

      if (idParsed) {
        return {
          isFinalParsedSearch: true,
          cursor: idParsed,
        };
      }
    }
  }

  const parsedParts = indexes
    .map((index: DocumentIndexItem) => {
      const PK = pickIndexKeyPartsFromDocument({
        acceptNullable: false,
        doc: filter,
        indexField: index.name,
        indexPartKind: 'PK',
        indexParts: index.PK,
        destination: 'filter',
      });

      if (PK.isFilter) {
        throw new Error(
          `PK cant be a filter. ${inspectObject({ filter, index })}`
        );
      }

      const indexHasSK = !!index.SK?.length;

      const SK = indexHasSK
        ? pickIndexKeyPartsFromDocument({
            acceptNullable: true,
            doc: filter,
            indexField: index.name,
            indexPartKind: 'SK',
            indexParts: index.SK || [],
            destination: 'filter',
          })
        : null;

      if (!PK.valid) {
        const requiredByPK = [...PK.requiredFields].find((field) =>
          filterKeys.has(field)
        );

        if (!requiredByPK) return;

        return devAssert(
          `Error in PK, failed to mount filter.`,
          { PK },
          { depth: 10 }
        );
      }

      const parsedIndexCursor = (() => {
        const _SK = (() => {
          if (!index.SK?.length || !SK) return [];
          if (SK.isFilter) return null;
          if (SK.foundParts.length === index.SK.length) return SK.foundParts;
          return null;
        })();

        return IndexCursor.parse(
          {
            PK: PK.foundParts,
            SK: _SK,
            name: index.name,
            relatedTo: index.relatedTo,
            entity,
          },
          {
            destination: 'filter',
          }
        );
      })();

      const PKFilterValue = parsedIndexCursor.PKPart;

      const SKFilterValue = (() => {
        if (!SK) return ''; // index without SK
        if (!SK.isFilter && !SK.foundParts.length) return undefined; // filter without SK

        return SK.nullableFound
          ? SK.nullableFound.value
          : SK.isFilter
          ? (SK.conditionFound as IndexFilter)
          : SK.valid
          ? parsedIndexCursor.SKPart
          : (devAssert(
              `Error in SK, failed to mount filter.`,
              { SK },
              { depth: 10 }
            ) as '');
      })();

      const indexFilter = (() => {
        const PKName = parseIndexFieldName(index.name, 'PK');
        const SKName = parseIndexFieldName(index.name, 'SK');

        if (SKFilterValue === undefined) return { [PKName]: PKFilterValue };

        if (typeof SKFilterValue === 'string') {
          return {
            ...finalFilterFound,
            _id: parsedIndexCursor.cursor,
            [PKName]: PKFilterValue,
            [SKName]: SKFilterValue,
          };
        }

        return {
          ...finalFilterFound,
          [PKName]: PKFilterValue,
          [SKName]: SKFilterValue,
        };
      })();

      return {
        entity,
        index,
        indexField: index.name,
        PKPartParsed: PK,
        SKPartParsed: SK,
        parsedIndexCursor,
        indexFilter,
      };
    })
    .filter(Boolean);

  if (!parsedParts.length) {
    throw new Error(
      `Failed to mount index based filter: ${inspectObject({
        filter,
        indexConfig,
      })}`
    );
  }

  return { isFinalParsedSearch: false, parts: parsedParts };
}

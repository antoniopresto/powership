import {
  devAssert,
  inspectObject,
  joinCursorPartsWithTrailingSeparator,
  joinKeyParts,
  ParsedIndexCursor,
  parseFilterCursor,
  parseIndexCursor,
  parseIndexFieldName,
} from '@powership/utils';

import {
  AnyCollectionIndexConfig,
  DocumentIndexItem,
  ParsedIndexPart,
} from './CollectionIndex';
import { FilterRecord, IndexFilter, IndexFilterRecord } from './Transporter';
import { encodeIndexValue } from './encodeIndexValue';
import { pickIndexKeyPartsFromDocument } from './pickIndexKeyPartsFromDocument';

export type ParsedIndexFilterPart = {
  entity: string;
  PKPartOpen: string;
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
    .map(
      (
        index: DocumentIndexItem,
        indexPosition
      ): ParsedIndexFilterPart | undefined => {
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
          ) as never;
        }

        const { PKPartOpen, PKPart, PKFieldName, SKFieldName } =
          parseIndexCursor(
            {
              PK: PK.foundParts,
              SK: [],
              entity,
              name: index.name,
              relatedTo: index.relatedTo,
            },
            { destination: 'filter' }
          );

        const SKFilterValue = (() => {
          if (!SK) return ''; // index without SK
          if (!SK.isFilter && !SK.foundParts.length) return undefined; // filter without SK
          if (!SK?.valid) return undefined;

          if (SK.isFilter) return SK.conditionFound as IndexFilter;

          const partialSKStartsWithFilter = (() => {
            if (!index.SK?.length) return null; // just for TS, already checked in indexHasSK
            if (SK.foundParts.length === index.SK.length) return undefined;

            return {
              // the check `canContinueAsString` in
              // pickIndexKeyPartsFromDocuments ensures that
              // the start of the SK string is valid
              // valid sk has valid parts

              $startsWith: joinKeyParts(SK.foundParts, {
                destination: 'filter',
              }),
            };
          })();

          if (partialSKStartsWithFilter) return partialSKStartsWithFilter;

          if (SK.nullableFound) return SK.nullableFound.value;

          return joinKeyParts(SK.foundParts, { destination: 'filter' });
        })();

        const indexFilter = encodeIndexValue(
          (() => {
            if (SKFilterValue === undefined) {
              return { ...finalFilterFound, [PKFieldName]: PKPart };
            }

            if (indexPosition === 0 && typeof SKFilterValue === 'string') {
              const _id = joinCursorPartsWithTrailingSeparator([
                PKPartOpen,
                SKFilterValue,
              ]);

              return {
                ...finalFilterFound,
                _id,
                [PKFieldName]: PKPart,
                [SKFieldName]: SKFilterValue,
              };
            }

            return {
              ...finalFilterFound,
              [PKFieldName]: PKPart,
              [SKFieldName]: SKFilterValue,
            };
          })()
        );

        return {
          entity,
          index,
          PKPartParsed: PK,
          SKPartParsed: SK,
          PKPartOpen,
          indexFilter,
        };
      }
    )
    .filter(Boolean) as ParsedIndexFilterPart[];

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

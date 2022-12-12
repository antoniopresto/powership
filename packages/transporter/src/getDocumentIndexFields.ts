import { IndexCursor } from './IndexCursor';
import { devAssert, inspectObject } from '@backland/utils';
import { CollectionErrors, EntityErrorKind } from './CollectionErrors';
import {
  AnyCollectionIndexConfig,
  CommonIndexFields,
  FirstIndexParsed,
  InvalidParsedIndexField,
  parseCollectionIndexConfig,
  ParsedDocumentIndexes,
  ParsedIndexKey,
  parseOneIndexDocumentFields,
} from './CollectionIndex';
import { pickIndexKeyPartsFromDocument } from './pickIndexKeyPartsFromDocument';

export function getDocumentIndexFields<
  Document extends Record<string, unknown>
>(doc: Document, indexConfig: AnyCollectionIndexConfig): ParsedDocumentIndexes {
  const { indexes, entity } = parseCollectionIndexConfig(indexConfig);

  let indexFields = {} as CommonIndexFields;

  const invalidFields: InvalidParsedIndexField[] = [];
  let firstIndex: FirstIndexParsed = undefined as unknown as FirstIndexParsed; // 🤔because typescript is inferring as never in the end of this function;
  let valid = true;

  const parsedIndexKeys: ParsedIndexKey[] = [];

  indexes.forEach((index) => {
    const relatedTo = index.relatedTo?.toLowerCase();

    const PK = pickIndexKeyPartsFromDocument({
      acceptNullable: false,
      doc,
      indexField: index.name,
      indexPartKind: 'PK',
      indexParts: index.PK,
      destination: 'document',
    });

    const SK = pickIndexKeyPartsFromDocument({
      acceptNullable: !index.SK || !index.SK.length,
      doc,
      indexField: index.name,
      indexPartKind: 'SK',
      indexParts: index.SK || [],
      destination: 'document',
    });

    const parsedCursor = IndexCursor.parse(
      {
        entity,
        relatedTo,
        name: index.name,
        SK: SK.foundParts,
        PK: PK.foundParts,
      },
      { destination: 'document' }
    );

    const indexFieldsParsed = parseOneIndexDocumentFields(parsedCursor);

    parsedIndexKeys.push({
      PK: {
        definition: index.PK,
        requiredFields: PK.requiredFields,
        parsed: PK,
        destinationField: {
          key: indexFieldsParsed.PKField,
          value: indexFieldsParsed.documentFields[indexFieldsParsed.PKField],
        },
      },
      SK: {
        definition: index.SK,
        requiredFields: SK.requiredFields,
        parsed: SK,
        destinationField: {
          key: indexFieldsParsed.SKField,
          value: indexFieldsParsed.documentFields[indexFieldsParsed.SKField],
        },
      },
      indexFieldsParsed,
      entity,
      index,
    });

    if (PK.valid && SK.valid && !firstIndex) {
      firstIndex = {
        ...index,
        ...parsedCursor,
        key: index.name,
        value: parsedCursor.cursor,
      };
    }

    if (SK.conditionFound || PK.conditionFound) {
      throw devAssert('Conditions found in document.', { PK, SK });
    }

    if (!PK.valid || !SK.valid) {
      valid = false;
      invalidFields.push(...PK.invalidFields, ...SK.invalidFields);
    }

    indexFields = {
      ...indexFieldsParsed.documentFields,
      ...indexFields,
    };
  });

  if (!valid || !firstIndex) {
    const parsed = (() => {
      if (!firstIndex) {
        return {
          error: {
            invalidFields,
            reason: EntityErrorKind.INVALID_FIELDS,
          },
        };
      }
      const message = [
        'Can not mount document indexes.',
        inspectObject({ parsedIndexKeys }, { depth: 10 }),
      ];

      throw new Error(message.join(' '));
    })();

    return {
      error: new CollectionErrors(parsed.error),
      firstIndex,
      indexFields: null,
      invalidFields,
      parsedIndexKeys,
      valid: false,
    };
  }

  return {
    error: null,
    firstIndex,
    indexFields,
    invalidFields: null,
    parsedIndexKeys,
    valid,
  };
}

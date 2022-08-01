import { PKSKValueType } from './Transporter';
import { encodeNumber } from '@darch/utils/lib/conust';

export type IndexKeyHash<Keys> = `#${string}` | `.${Extract<Keys, string>}`;

// Definition for a document index
export type DocumentIndexItem<T extends Record<string, unknown>> = {
  field: `_id` | `_id${number}`;
  PK: IndexKeyHash<Extract<keyof T, string>>[];
  SK?: IndexKeyHash<Extract<keyof T, string>>[];
};

export interface DocumentIndexMapper<Document extends Record<string, unknown>> {
  (document: Record<string, any>): {};
}

type TUtil = {
  kind: 'PK' | 'SK';
  indexField: DocumentIndexItem<any>['field'];
  docFieldToExtract: string | undefined;
  hashPartToConcat: string | undefined;
};

export function createDocumentIndexMapper<
  Document extends Record<string, unknown>
>(options: {
  indices: DocumentIndexItem<any>[];
}): DocumentIndexMapper<Document> {
  const { indices } = options;

  const byIndexField: Record<string, TUtil[]> = {};
  const fieldsToExtract = new Set<string>();

  indices.forEach(({ SK = [], PK, field: indexField }) => {
    [
      ...PK.map((value) => ({ kind: 'PK', value } as const)),
      ...SK.map((value) => ({ kind: 'SK', value } as const)),
    ].forEach(({ value, kind }) => {
      //
      const docFieldToExtract = value.startsWith('.')
        ? value.slice(1)
        : undefined;

      const item: TUtil = {
        kind,
        indexField,
        docFieldToExtract,
        hashPartToConcat: value.startsWith('#') ? value.slice(1) : undefined,
      };

      if (docFieldToExtract !== undefined) {
        fieldsToExtract.add(docFieldToExtract);
      }

      (byIndexField[indexField] = byIndexField[indexField] || []).push(item);
    });
  });

  const indexEntries = Object.entries(byIndexField);

  return function documentIndexMapper(document) {
    const fieldValues: Record<string, PKSKValueType> = {};
    const missingFields = new Set<string>();

    fieldsToExtract.forEach((docFieldToExtract) => {
      const value = document[docFieldToExtract];

      if (typeof value !== 'number' && typeof value !== 'string') {
        return missingFields.add(
          `Field "${docFieldToExtract}" expected string or number, found ${typeof value}.`
        );
      }

      return (fieldValues[docFieldToExtract] = value);
    });

    if (missingFields.size) {
      throw new Error(
        'Failed to mount index: ' + [...missingFields.keys()].join(' ')
      );
    }

    const indexes: Record<string, string> = {};

    indexEntries.forEach(([indexName, utils]) => {
      const keys = { PK: [] as string[], SK: [] as string[] };

      utils.forEach(
        ({ hashPartToConcat, docFieldToExtract, indexField, kind }) => {
          //
          if (docFieldToExtract !== undefined) {
            const value = fieldValues[docFieldToExtract];
            keys[kind].push(
              typeof value === 'number' ? encodeNumber(value.toString()) : value
            );
          }

          if (hashPartToConcat !== undefined) {
            keys[kind].push(hashPartToConcat);
          }
        }
      );

      indexes[indexName] =
        keys.PK.join(KEY_SEPARATOR) +
        PK_SK_SEPARATOR +
        keys.SK.join(KEY_SEPARATOR);
    });

    return {
      indexes,
    };
  };
}

export const PK_SK_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(PK_SK_SEPARATOR, 'g');
export const KEY_SEPARATOR = '#';

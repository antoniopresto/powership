import { DocumentBase, PKSKValueType } from './Transporter';
import { encodeNumber } from '@darch/utils/lib/conust';
import { inspectObject } from '@darch/utils/lib/inspectObject';

export type IndexKeyHash<Keys = string> =
  | `#${string}`
  | `.${Extract<Keys, string>}`;

export type IndexPartKind = 'PK' | 'SK';

// Definition for a document index
export type DocumentIndexItem<Keys> = {
  field: `_id` | `_id${number}`;
  PK: IndexKeyHash<Extract<Keys, string>>[];
  SK?: IndexKeyHash<Extract<Keys, string>>[];
};

export type DocumentIndexConfig<Doc extends DocumentBase = DocumentBase> = {
  indices: DocumentIndexItem<
    [keyof Doc] extends [never] ? string : keyof Doc
  >[];
};

type ParseIndexInvalid = {
  reason: 'missing' | 'invalid';
  details: string;
  documentField: string;
  indexField: DocumentIndexItem<string>['field'];
  indexPartKind: IndexPartKind;
};

export type ParsedIndexPart = {
  invalidFields: ParseIndexInvalid[];
  value: string;
  valid: boolean;
  indexField: DocumentIndexItem<string>['field'];
};

export type ParsedDocumentIndices = {
  valid: boolean;
  invalidFields: ParsedIndexPart['invalidFields'];
  indexFields: Record<string, string> | null;
};

export interface DocumentIndexMapper<Document extends Record<string, any>> {
  (doc: Document): {};
}

export function createDocumentIndexMapper<
  Document extends Record<string, unknown>
>(options: DocumentIndexConfig<Document>): DocumentIndexMapper<Document> {
  const { indices } = options;

  function mapIndexes(doc: Document) {
    const indexFields: Record<string, string> = {};

    const result: ParsedDocumentIndices = {
      valid: true,
      indexFields,
      invalidFields: [],
    };

    indices.forEach((index) => {
      const PK = mountIndexFromParts({
        indexPartKind: 'PK',
        indexParts: index.PK,
        doc,
        indexField: index.field,
      });

      const SK = mountIndexFromParts({
        indexPartKind: 'SK',
        indexParts: index.SK || [],
        doc,
        indexField: index.field,
      });

      result.invalidFields.push(...PK.invalidFields, ...SK.invalidFields);

      if (!PK.valid || !SK.valid) {
        result.valid = false;
      }

      indexFields[index.field] = `${PK.value}${PK_SK_SEPARATOR}${SK.value}`;
    });

    if (!result.valid) {
      result.indexFields = null;
    }

    return result;
  }

  return mapIndexes;
}

export function mountIndexFromParts(param: {
  indexPartKind: IndexPartKind;
  indexField: ParsedIndexPart['indexField'];
  indexParts: string[]; // (`#${string}` | `.${string}`)[]
  doc: Record<string, any>;
}): ParsedIndexPart {
  const { indexParts, indexField, indexPartKind, doc } = param;
  const invalidFields: ParsedIndexPart['invalidFields'] = [];

  const stringParts: string[] = [];

  indexParts.forEach((keyPart) => {
    if (keyPart.startsWith('#')) {
      return stringParts.push(keyPart.slice(1));
    }

    if (keyPart.startsWith('.')) {
      const documentField = keyPart.slice(1);
      const found = doc[documentField];

      if (found === undefined || found === null) {
        return invalidFields.push({
          reason: 'missing',
          details: `Expected string or number, found ${found}.`,
          documentField: keyPart,
          indexField: indexField,
          indexPartKind,
        });
      }

      if (found && typeof found === 'string') {
        return stringParts.push(found);
      }

      if (typeof found === 'number') {
        return stringParts.push(encodeNumber(found));
      }

      return invalidFields.push({
        reason: 'invalid',
        details: `Expected string or number, found ${typeof found} with value: ${inspectObject(
          found,
          {
            tabSize: 0,
          }
        )}.`,
        documentField: keyPart,
        indexField,
        indexPartKind,
      });
    }

    return invalidFields.push({
      reason: 'invalid',
      details: `Expected key part to match ".\${string}" or "#\${string}", found ${keyPart}`,
      documentField: keyPart,
      indexField,
      indexPartKind,
    });
  });

  return {
    value: stringParts.join(ID_KEY_SEPARATOR),
    valid: !invalidFields.length,
    invalidFields,
    indexField,
  };
}

export const PK_SK_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(PK_SK_SEPARATOR, 'g');
export const ID_KEY_SEPARATOR = '#';

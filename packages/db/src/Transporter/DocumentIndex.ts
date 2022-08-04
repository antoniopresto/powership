import {
  FilterConditions,
  DocumentBase,
  isFilterConditionKey,
  IndexFilterRecord,
  OneFilterOperation,
  IndexFilter,
  FilterRecord,
} from './Transporter';
import { encodeNumber } from '@darch/utils/lib/conust';
import { inspectObject } from '@darch/utils/lib/inspectObject';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { keyBy } from '@darch/utils/lib/keyBy';
import { devAssert } from '@darch/utils/lib/devAssert';
import { getKeys } from '@darch/utils/lib/getKeys';

export const PK_SK_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(PK_SK_SEPARATOR, 'g');
export const ID_KEY_SEPARATOR = '#';

export function mountID(params: {
  entity: string;
  PK: string;
  SK: string | null;
}) {
  const { entity, PK, SK } = params;
  return `${entity}${ID_KEY_SEPARATOR}${PK}${PK_SK_SEPARATOR}${
    SK === null ? '' : SK
  }`;
}

/**
 * Receives a document indexConfig and a key-value filter and converts to
 * an index based search filter.
 * @param filter
 * @param indexConfig
 */
export function createDocumentIndexBasedFilters<
  Document extends Record<string, unknown>
>(
  filter: IndexFilterRecord,
  indexConfig: DocumentIndexConfig<Document>
): FilterRecord[] {
  const { indexes } = indexConfig;
  const entity = indexConfig.entity.toLowerCase();

  keyBy(
    indexes,
    (el) => el.field,
    (field) => {
      devAssert(`found two indexes with field "${field}"`, { indexes });
    }
  );

  const filtersRecords: FilterRecord[] = [];
  // const invalidFields: ParseIndexInvalid[] = [];

  indexes.forEach((index) => {
    const PK = mountIndexFromPartsList({
      indexPartKind: 'PK',
      indexParts: index.PK,
      doc: filter,
      indexField: index.field,
      acceptNullable: false,
    });

    const SK = mountIndexFromPartsList({
      indexPartKind: 'SK',
      indexParts: index.SK || [],
      doc: filter,
      indexField: index.field,
      acceptNullable: true,
    });

    filtersRecords.push(
      ...joinPKAndSKAsIDFilter({
        indexField: index.field,

        entity,

        PK: PK.isFilter
          ? (PK.conditionFound as IndexFilter)
          : PK.valid
          ? PK.value
          : (devAssert(`Error in PK, failed to mount filter.`, { PK }) as ''),

        SK: SK.nullableFound
          ? SK.nullableFound.value
          : SK.isFilter
          ? (SK.conditionFound as IndexFilter)
          : SK.valid
          ? SK.value
          : (devAssert(
              `Error in SK, failed to mount filter.`,
              { SK },
              { depth: 10 }
            ) as ''),
      })
    );
  });

  return filtersRecords;
}

export function getDocumentIndexFields<
  Document extends Record<string, unknown>
>(
  doc: Document,
  options: DocumentIndexConfig<Document>
): ParsedDocumentIndexes {
  const { indexes } = options;
  const entity = options.entity.toLowerCase();

  keyBy(
    indexes,
    (el) => el.field,
    (field) => {
      devAssert(`found two indexes with field "${field}"`, { indexes });
    }
  );

  const indexFields: Record<string, string> = {};
  const invalidFields: ParseIndexInvalid[] = [];
  let firstIndex: ParsedDocumentIndexes['firstIndex'] = null;
  let partialIndexFilter: ParsedDocumentIndexes['partialIndexFilter'] = null;
  let valid = true;

  indexes.forEach((index) => {
    const PK = mountIndexFromPartsList({
      indexPartKind: 'PK',
      indexParts: index.PK,
      doc,
      indexField: index.field,
      acceptNullable: false,
    });

    let id = mountID({ entity, PK: PK.value, SK: '' });

    if (PK.valid && !PK.isFilter && !partialIndexFilter) {
      partialIndexFilter = { key: index.field, value: id };
    }

    const SK = mountIndexFromPartsList({
      indexPartKind: 'SK',
      indexParts: index.SK || [],
      doc,
      indexField: index.field,
      acceptNullable: true,
    });

    id += SK.value;

    if (PK.valid && SK.valid && !firstIndex) {
      partialIndexFilter = { key: index.field, value: id };
      firstIndex = { key: index.field, value: id };
    }

    if (SK.conditionFound || PK.conditionFound) {
      throw devAssert('Conditions found in document.', { PK, SK });
    }

    if (!PK.valid || !SK.valid) {
      valid = false;
      invalidFields.push(...PK.invalidFields, ...SK.invalidFields);
    }

    indexFields[index.field] = id;
    indexFields[`${index.field}PK`] = PK.value;
    indexFields[`${index.field}SK`] = SK.value;
  });

  if (!valid || !firstIndex || !partialIndexFilter) {
    return {
      valid: false,
      firstIndex,
      partialIndexFilter,
      indexFields: null,
      invalidFields,
      error: new RuntimeError(`Failed to mount document indexes.`, {
        document: doc,
        invalidFields,
      }),
    };
  }

  return {
    valid,
    firstIndex,
    partialIndexFilter,
    indexFields,
    invalidFields: null,
    error: null,
  };
}

function joinPKAndSKAsIDFilter(options: {
  indexField: DocumentIndexField;
  entity: string;
  PK: IndexFilter | string;
  SK: IndexFilter | string | null | undefined;
}): FilterRecord[] {
  let { PK, SK, entity, indexField } = options;
  const SKField = `${indexField}SK`;

  if (PK && typeof PK === 'object' && typeof PK.$eq === 'string') PK = PK.$eq;
  if (SK && typeof SK === 'object' && typeof SK.$eq === 'string') SK = SK.$eq;

  if (typeof PK === 'string' && typeof SK === 'string') {
    return [{ [indexField]: mountID({ PK, SK, entity }) }];
  }

  if (typeof PK === 'object' && (typeof SK === 'object' || !SK)) {
    throw new RuntimeError(`Can't use PK and SK as filter at the same time.`, {
      PK,
      SK,
    });
  }

  const $and: FilterRecord[] = [];

  if (typeof PK === 'string') {
    if (typeof SK === 'string') {
      // make TS happy, the above ifs already handled it
      throw new RuntimeError(`Expected SK to be an object`, { SK });
    }

    const filters = handleSKFilter(PK, SK);

    $and.push(filters);
  } else {
    if (typeof SK !== 'string' && SK !== undefined && SK !== null) {
      // make TS happy, the above ifs already handled it
      throw new RuntimeError(`Expected SK to be a string`, { SK });
    }

    const filters = handlePKFilter(PK, SK);
    $and.push(filters);
  }

  function handlePKFilter(
    PKFilter: IndexFilter,
    SKValue: string | null | undefined
  ): IndexFilterRecord {
    const keys = getKeys(PKFilter);

    if (keys.length !== 1) {
      throw new RuntimeError('Invalid filter', { filter: PKFilter });
    }

    const comparator = keys[0];
    const pk_value = PKFilter[comparator];

    const valueError = new RuntimeError(
      `Invalid value for comparator ${comparator}`,
      {
        value: pk_value,
        comparator,
      }
    );

    function prefix(suffix: string) {
      return entity + ID_KEY_SEPARATOR + suffix;
    }

    const SKFilter = SKValue === undefined ? {} : { [SKField]: SKValue };

    switch (comparator) {
      case '$startsWith': {
        if (typeof pk_value !== 'string') {
          throw valueError;
        }

        return {
          [indexField]: { $startsWith: prefix(pk_value) },
          ...SKFilter,
        };
      }

      case '$between': {
        if (!(Array.isArray(pk_value) && pk_value.length === 2)) {
          throw valueError;
        }

        return {
          [indexField]: {
            $between: [
              prefix(
                typeof pk_value[0] === 'number'
                  ? encodeNumber(pk_value[0])
                  : pk_value[0]
              ),
              prefix(
                typeof pk_value[1] === 'number'
                  ? encodeNumber(pk_value[1])
                  : pk_value[1]
              ),
            ],
          },
          ...SKFilter,
        };
      }

      case '$eq': {
        if (typeof pk_value !== 'string') {
          throw valueError;
        }

        if (SKValue === undefined) {
          throw new RuntimeError(
            `SK cannot be undefined in a $eq comparison. Use null for a nullable field.`,
            { SK }
          );
        }

        return {
          [indexField]: {
            [comparator]: mountID({
              PK: pk_value,
              SK: SKValue,
              entity,
            }),
          },
        };
      }

      case '$gt':
      case '$gte':
      case '$lt':
      case '$lte': {
        if (typeof pk_value !== 'string') {
          throw valueError;
        }

        return {
          [comparator]: prefix(pk_value),
          ...SKFilter,
        };
      }

      default: {
        throw new Error(`invalid operator "${comparator}"`);
      }
    }
  }

  function handleSKFilter(
    PKString: string,
    SKValue: IndexFilter | null | undefined
  ): FilterRecord {
    //
    let { sk_value, comparator } = (() => {
      if (SKValue === null || SKValue === undefined) {
        return {
          sk_value: SKValue,
          comparator: SKValue === undefined ? '$startsWith' : '$eq',
        };
      }

      const keys = getKeys(SKValue);

      if (keys.length !== 1) {
        throw new RuntimeError('Invalid filter', { filter: SKValue });
      }

      const comparator = keys[0];
      const sk_value = SKValue[comparator];

      return {
        comparator,
        sk_value,
      };
    })();

    const valueError = new RuntimeError(
      `Invalid value for comparator ${comparator}.`,
      {
        SK: SKValue,
        comparator,
      }
    );

    switch (comparator) {
      case '$startsWith': {
        if (sk_value === undefined) sk_value = null;

        if (typeof sk_value !== 'string' && sk_value !== null) {
          throw valueError;
        }

        return {
          [indexField]: {
            $startsWith: mountID({
              PK: PKString,
              SK: sk_value,
              entity,
            }),
          },
        };
      }

      case '$between': {
        if (!(Array.isArray(sk_value) && sk_value.length === 2)) {
          throw valueError;
        }

        return {
          [indexField]: {
            $between: [
              mountID({
                entity,
                PK: PKString,
                SK:
                  typeof sk_value[0] === 'number'
                    ? encodeNumber(sk_value[0])
                    : sk_value[0],
              }),
              mountID({
                entity,
                PK: PKString,
                SK:
                  typeof sk_value[1] === 'number'
                    ? encodeNumber(sk_value[1])
                    : sk_value[1],
              }),
            ],
          },
        };
      }

      case '$eq': {
        if (typeof sk_value !== 'string' && sk_value !== null) {
          throw valueError;
        }

        return {
          [indexField]: {
            [comparator]: mountID({ PK: PKString, SK: sk_value, entity }),
          },
        };
      }

      case '$gt':
      case '$gte':
      case '$lt':
      case '$lte': {
        if (sk_value === undefined) sk_value = null;
        if (typeof sk_value !== 'string' && sk_value !== null) {
          throw valueError;
        }

        return {
          $and: [
            {
              [indexField]: {
                // otherwise will get items $lt, $gt, etc; from another PK
                $startsWith: mountID({ PK: PKString, SK: '', entity }),
              },
            },
            {
              [indexField]: {
                [comparator]: mountID({ PK: PKString, SK: sk_value, entity }),
              },
            },
          ],
        };
      }

      default: {
        throw new Error(`invalid operator "${comparator}"`);
      }
    }
  }

  return $and;
}

function mountIndexFromPartsList(param: {
  indexParts: string[]; // (`#${string}` | `.${string}`)[]
  indexPartKind: IndexPartKind;
  indexField: ParsedIndexPart['indexField'];
  doc: Record<string, any>;
  acceptNullable: boolean; // when mounting filter for search, SK can be omitted
}): ParsedIndexPart {
  const { indexParts, indexField, indexPartKind, doc, acceptNullable } = param;

  const invalidFields: ParsedIndexPart['invalidFields'] = [];

  const stringParts: string[] = [];
  let conditionFound: FilterConditions | undefined = undefined;
  let nullableFound: ParsedIndexPart['nullableFound'];

  indexParts.forEach((keyPart) => {
    if (nullableFound) return;

    if (keyPart.startsWith('#')) {
      return stringParts.push(keyPart.slice(1));
    }

    if (keyPart.startsWith('.')) {
      const documentField = keyPart.slice(1);
      let found = doc[documentField];

      if (found === undefined || found === null) {
        if (acceptNullable) return (nullableFound = { value: found });
        //
        return invalidFields.push({
          reason: 'missing',
          details: `Expected string or number, found ${found}.`,
          documentField: keyPart,
          indexField: indexField,
          indexPartKind,
        });
      }

      if (typeof found === 'object') {
        const keys = getKeys(found);

        if (keys.length === 1) {
          const $op = isFilterConditionKey(keys[0]) ? keys[0] : undefined;
          if ($op) {
            return (conditionFound = {
              [$op]:
                typeof found[$op] === 'number'
                  ? encodeNumber(found[$op])
                  : found[$op],
            });
          }
        }
      }

      const canContinueAsString = !invalidFields.length && !conditionFound;

      if (canContinueAsString && typeof found === 'string') {
        return stringParts.push(found);
      }

      if (canContinueAsString && typeof found === 'number') {
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

  const result: ParsedIndexPart = {
    value: nullableFound ? '' : stringParts.join(ID_KEY_SEPARATOR),
    valid: !invalidFields.length,
    invalidFields,
    indexField,
    isFilter: false,
  };

  if (nullableFound) {
    result.nullableFound = nullableFound;
  }

  if (conditionFound) {
    result.isFilter = true;
    result.conditionFound = conditionFound;
  }

  return result;
}

export type IndexKeyHash<Keys = string> =
  | `#${string}`
  | `.${Extract<Keys, string>}`;

export type IndexPartKind = 'PK' | 'SK';
export type DocumentIndexField = `_id` | `_id${number}`;

// Definition for a document index
export type DocumentIndexItem<Keys> = {
  field: DocumentIndexField;
  PK: IndexKeyHash<Extract<Keys, string>>[];
  SK?: IndexKeyHash<Extract<Keys, string>>[];
};

export type DocumentIndexConfig<Doc extends DocumentBase = DocumentBase> = {
  entity: `${string}`;
  indexes: DocumentIndexItem<
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
  isFilter: boolean;
  indexField: DocumentIndexItem<string>['field'];
  conditionFound?: OneFilterOperation;
  nullableFound?: { value: null | undefined }; // when a nullable SK filter is null | undefined
};

export type DocumentIndexFilterParsed = {
  key: DocumentIndexItem<string>['field'];
  PK: FilterConditions | string;
  SK: FilterConditions | string;
  entity: string;
};

export type ParsedDocumentIndexes =
  | {
      valid: true;
      indexFields: Record<string, string>;
      firstIndex: { key: DocumentIndexItem<string>['field']; value: string };

      partialIndexFilter: {
        key: DocumentIndexItem<string>['field'];
        value: string;
      };

      filtersFound?: DocumentIndexFilterParsed[];

      invalidFields: null;
      error: null;
    }
  | {
      valid: false;
      invalidFields: ParsedIndexPart['invalidFields'];

      partialIndexFilter: {
        key: DocumentIndexItem<string>['field'];
        value: string;
      } | null;

      firstIndex: {
        key: DocumentIndexItem<string>['field'];
        value: string;
      } | null;

      indexFields: null;
      error: RuntimeError;
    };

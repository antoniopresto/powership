import { nonNullValues, textToBase64 } from '@backland/utils';
import { RuntimeError } from '@backland/utils/lib/RuntimeError';
import { encodeNumber } from '@backland/utils/lib/conust';
import { devAssert } from '@backland/utils/lib/devAssert';
import { getKeys } from '@backland/utils/lib/getKeys';
import { inspectObject } from '@backland/utils/lib/inspectObject';
import { keyBy } from '@backland/utils/lib/keyBy';
import { NodeLogger } from '@backland/utils/lib/nodeLogger';
import { base64ToText } from '@backland/utils/lib/textToBase64';
import { Name } from '@backland/utils/lib/typeUtils';

import { CollectionErrors, EntityErrorKind } from './CollectionErrors';
import {
  DocumentBase,
  FilterConditions,
  FilterRecord,
  IndexFilter,
  IndexFilterRecord,
  isFilterConditionKey,
  OneFilterOperation,
} from './Transporter';

export const PK_SK_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(PK_SK_SEPARATOR, 'g');
export const ID_KEY_SEPARATOR = '#';
export const ID_SCAPE_CHAR = String.fromCharCode(0);

export function mountID(params: {
  PK: string;
  SK: string | null;
  entity: string;
  indexField: string;
}) {
  const { indexField, entity, PK, SK } = params;

  function encodeKey(key: string) {
    return key
      .toString()

      .replace(/↠/g, `${ID_SCAPE_CHAR}↠`)
      .replace(/#/g, `${ID_SCAPE_CHAR}#`);
  }

  const prefix = `${entity}:${indexField}`;

  return `${prefix}${ID_KEY_SEPARATOR}${encodeKey(PK)}${PK_SK_SEPARATOR}${
    SK === null ? '' : encodeKey(SK)
  }`;
}

export type GraphIBJSON = {
  // index name
  e: string;
  i: DocumentIndexField; // entity
  v: string; // id value
};

export const GRAPH_ID_PREFIX = '~!';
// a base64 encoded version of the id created by mountId
export function mountGraphID(id: string) {
  if (id.startsWith(GRAPH_ID_PREFIX)) return id;
  return `${GRAPH_ID_PREFIX}${textToBase64(id)}`;
}

export function parseGraphID(input: string): GraphIBJSON | null {
  try {
    const v = input.startsWith(GRAPH_ID_PREFIX)
      ? base64ToText(input.slice(1))
      : input;
    const [e, idRest] = v.split(':');
    const [i, rest] = idRest.split(ID_KEY_SEPARATOR);

    nonNullValues({
      e,
      i,
      rest,
      v,
    });

    assertDocumentIndexKey(i);

    return {
      e,
      i,
      v,
    };
  } catch (e) {
    NodeLogger.logError(e);
    throw new Error('INVALID_ID');
  }
}

export type IndexBasedFilterParsed = {
  PK: {
    // first primaryKey condition found in filter
    key: DocumentIndexField;
    value: string;
  };
  filters: [FilterRecord, ...FilterRecord[]];
};

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
  const { indexes, entity } = indexConfig;

  validateIndexNameAndField(indexConfig);

  let filtersRecords: FilterRecord[] = [];
  let foundPK: IndexBasedFilterParsed['PK'] | undefined = undefined;

  nonNullValues({ filter });
  const filterKeys = new Set(Object.keys(filter));

  indexes.forEach((index) => {
    filterKeys.forEach((key) => {
      const value = filter[key];

      if (key === 'id' && typeof value === 'string') {
        const id = parseGraphID(value);

        if (id) {
          foundPK = {
            key: id.i,
            value: id.v,
          };

          return filtersRecords.push({
            [id.i]: id.v,
          });
        }
      }

      if (DocumentIndexRegex.test(key) && typeof value === 'string') {
        return filtersRecords.push({
          [key]: value,
        });
      }
    });

    const PK = mountIndexFromPartsList({
      acceptNullable: false,
      doc: filter,
      indexField: index.field,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    const SK = mountIndexFromPartsList({
      acceptNullable: true,
      doc: filter,
      indexField: index.field,
      indexPartKind: 'SK',
      indexParts: index.SK || [],
    });

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

    foundPK = {
      key: index.field,
      value: PK.value,
    };

    const items = joinPKAndSKAsIDFilter({
      PK: PK.isFilter
        ? (PK.conditionFound as IndexFilter)
        : PK.valid
        ? PK.value
        : (devAssert(
            `Error in PK, failed to mount filter.`,
            { PK },
            { depth: 10 }
          ) as ''),

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

      entity,

      indexField: index.field,
    });

    filtersRecords.push(...items);
  });

  if (!filtersRecords.length || !foundPK) {
    throw new CollectionErrors({
      filter,
      possibleCondition: foundPK,
      reason: !filterKeys.size ? 'EMPTY_FILTER' : 'INVALID_FILTER',
    });
  }

  return {
    PK: foundPK,
    filters: filtersRecords as [FilterRecord, ...FilterRecord[]],
  };
}

export function getDocumentIndexFields<
  Document extends Record<string, unknown>
>(doc: Document, indexConfig: AnyCollectionIndexConfig): ParsedDocumentIndexes {
  const { indexes, entity } = indexConfig;

  validateIndexNameAndField(indexConfig);

  const indexFields: Record<string, string> = {};
  const invalidFields: InvalidParsedIndexField[] = [];
  let firstIndex: ParsedDocumentIndexes['firstIndex'] = null;
  let partialIndexFilter: ParsedDocumentIndexes['partialIndexFilter'] = null;
  let valid = true;

  const parsedIndexKeys: ParsedIndexKey[] = [];

  indexes.forEach((index) => {
    const PK = mountIndexFromPartsList({
      acceptNullable: false,
      doc,
      indexField: index.field,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    let hashedId = mountID({
      PK: PK.value,
      SK: '',
      entity: entity,
      indexField: index.field,
    });

    if (PK.valid && !PK.isFilter && !partialIndexFilter) {
      partialIndexFilter = { key: index.field, value: hashedId };
    }

    const SK = mountIndexFromPartsList({
      acceptNullable: !index.SK || !index.SK.length,
      doc,
      indexField: index.field,
      indexPartKind: 'SK',
      indexParts: index.SK || [],
    });

    parsedIndexKeys.push({
      PK: {
        definition: index.PK,
        requiredFields: PK.requiredFields,
      },
      SK: {
        definition: index.SK,
        requiredFields: SK.requiredFields,
      },
      entity,
      index,
    });

    hashedId += SK.value;

    if (PK.valid && SK.valid && !firstIndex) {
      partialIndexFilter = { key: index.field, value: hashedId };
      firstIndex = { key: index.field, value: hashedId };
    }

    if (SK.conditionFound || PK.conditionFound) {
      throw devAssert('Conditions found in document.', { PK, SK });
    }

    if (!PK.valid || !SK.valid) {
      valid = false;
      invalidFields.push(...PK.invalidFields, ...SK.invalidFields);
    }

    indexFields[index.field] = hashedId;
    indexFields[`${index.field}PK`] = PK.value;
    indexFields[`${index.field}SK`] = SK.value;
  });

  if (!valid || !firstIndex || !partialIndexFilter) {
    const parsed = (() => {
      if (!firstIndex) {
        if (partialIndexFilter) {
          return {
            error: {
              invalidFields,
              reason: EntityErrorKind.INVALID_FILTER,
            },
          };
        }

        return {
          error: {
            invalidFields,
            reason: EntityErrorKind.INVALID_FIELDS,
          },
        };
      }
      throw new Error('MISSING_CONDITION');
    })();

    return {
      error: new CollectionErrors(parsed.error),
      firstIndex,
      indexFields: null,
      invalidFields,
      parsedIndexKeys,
      partialIndexFilter,
      valid: false,
    };
  }

  // @ts-ignore
  indexFields.id = indexFields.id || mountGraphID(firstIndex.value);

  return {
    error: null,
    firstIndex,
    indexFields,
    invalidFields: null,
    parsedIndexKeys,
    partialIndexFilter,
    valid,
  };
}

function joinPKAndSKAsIDFilter(options: {
  PK: IndexFilter | string;
  SK: IndexFilter | string | null | undefined;
  entity: string;
  indexField: DocumentIndexField;
}): FilterRecord[] {
  let { PK, SK, entity, indexField } = options;
  const SKField = `${indexField}SK`;

  if (PK && typeof PK === 'object' && typeof PK.$eq === 'string') PK = PK.$eq;
  if (SK && typeof SK === 'object' && typeof SK.$eq === 'string') SK = SK.$eq;

  if (typeof PK === 'string' && typeof SK === 'string') {
    return [
      { [indexField]: mountID({ PK, SK, entity, indexField: indexField }) },
    ];
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
  ): FilterRecord {
    const keys = getKeys(PKFilter);

    if (keys.length !== 1) {
      throw new RuntimeError('Invalid filter', { filter: PKFilter });
    }

    const comparator = keys[0];
    const pk_value = PKFilter[comparator];

    const valueError = new RuntimeError(
      `Invalid value for comparator ${comparator}`,
      {
        comparator,
        value: pk_value,
      }
    );

    function prefix(suffix: string) {
      return `${entity}:${indexField}${ID_KEY_SEPARATOR}${suffix}`;
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
              indexField: indexField,
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
          comparator: SKValue === undefined ? '$startsWith' : '$eq',
          sk_value: SKValue,
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
              indexField: indexField,
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
                PK: PKString,
                SK:
                  typeof sk_value[0] === 'number'
                    ? encodeNumber(sk_value[0])
                    : sk_value[0],
                entity,
                indexField: indexField,
              }),
              mountID({
                PK: PKString,
                SK:
                  typeof sk_value[1] === 'number'
                    ? encodeNumber(sk_value[1])
                    : sk_value[1],
                entity,
                indexField: indexField,
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
            [comparator]: mountID({
              PK: PKString,
              SK: sk_value,
              entity,
              indexField: indexField,
            }),
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
                $startsWith: mountID({
                  PK: PKString,
                  SK: '',
                  entity,
                  indexField: indexField,
                }),
              },
            },
            {
              [indexField]: {
                [comparator]: mountID({
                  PK: PKString,
                  SK: sk_value,
                  entity,
                  indexField: indexField,
                }),
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
  acceptNullable: boolean;
  doc: Record<string, any>;
  indexField: ParsedIndexPart['indexField'];
  // (`#${string}` | `.${string}`)[]
  indexPartKind: IndexPartKind;
  indexParts: ReadonlyArray<IndexKeyHash>; // when mounting filter for search, SK can be omitted
}): ParsedIndexPart {
  const { indexParts, indexField, indexPartKind, doc, acceptNullable } = param;

  const invalidFields: ParsedIndexPart['invalidFields'] = [];

  const stringParts: string[] = [];
  let conditionFound: FilterConditions | undefined = undefined;
  let nullableFound: ParsedIndexPart['nullableFound'];
  const requiredFields: ParsedIndexPart['requiredFields'] = [];

  indexParts.forEach((keyPart) => {
    if (nullableFound) return;

    if (keyPart.startsWith('#')) {
      return stringParts.push(keyPart.slice(1));
    }

    if (keyPart.startsWith('.')) {
      const documentField = keyPart.slice(1);
      requiredFields.push(documentField);

      let found = doc[documentField];

      if (found === undefined || found === null) {
        if (acceptNullable) return (nullableFound = { value: found });
        //
        return invalidFields.push({
          details: `Expected string or number, found ${found}.`,
          documentField: keyPart,
          indexField: indexField,
          indexPartKind,
          reason: 'missing',
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
        details: `Expected string or number, found ${typeof found} with value: ${inspectObject(
          found,
          {
            tabSize: 0,
          }
        )}.`,
        documentField: keyPart,
        indexField,
        indexPartKind,
        reason: 'invalid',
      });
    }

    return invalidFields.push({
      details: `Expected key part to match ".\${string}" or "#\${string}", found ${keyPart}`,
      documentField: keyPart,
      indexField,
      indexPartKind,
      reason: 'invalid',
    });
  });

  const result: ParsedIndexPart = {
    indexField,
    invalidFields,
    isFilter: false,
    requiredFields,
    valid: !invalidFields.length,
    value: nullableFound ? '' : stringParts.join(ID_KEY_SEPARATOR),
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

export function getParsedIndexKeys(
  indexConfig: AnyCollectionIndexConfig
): ParsedIndexKey[] {
  const parts = getDocumentIndexFields({}, indexConfig);
  return parts.parsedIndexKeys;
}

export function validateIndexNameAndField(index: AnyCollectionIndexConfig) {
  const { indexes } = index;

  keyBy(
    indexes as any,
    (el) => el.field,
    (key) => {
      devAssert(`found two indexes with field "${key}"`, { indexes });
    }
  );

  keyBy(
    indexes as any,
    (el) => el.name,
    (key) => {
      devAssert(`found two indexes with name "${key}"`, { indexes });
    }
  );
}

export type IndexKeyHash<Keys = string> =
  | `#${string}`
  | `.${Extract<Keys, string>}`;

export type IndexPartKind = 'PK' | 'SK';

export type DocumentIndexField =
  | 'id'
  | `_id`
  | `_id0`
  | `_id1`
  | `_id2`
  | `_id3`;

export const DocumentIndexRegex = /^(_id\d*)|(id)$/;

// Definition for a document index

export type DocumentIndexItem<Keys, TName extends Name> = Readonly<{
  PK: Readonly<
    [
      IndexKeyHash<Extract<Keys, string>>,
      ...IndexKeyHash<Extract<Keys, string>>[]
    ]
  >;
  SK?: Readonly<
    [
      IndexKeyHash<Extract<Keys, string>>,
      ...IndexKeyHash<Extract<Keys, string>>[]
    ]
  >;
  field: DocumentIndexField;
  name: TName;
}>;

export type AnyDocIndexItem = DocumentIndexItem<string, Name>;

export type CollectionConfigIndexes<Doc> =
  | [
      DocumentIndexItem<keyof Doc, Name>,
      ...DocumentIndexItem<keyof Doc, Name>[]
    ]
  | Readonly<
      [
        DocumentIndexItem<keyof Doc, Name>,
        ...DocumentIndexItem<keyof Doc, Name>[]
      ]
    >;

export type CollectionIndexConfig<
  Doc extends DocumentBase,
  EntityName extends string
> = {
  entity: Readonly<EntityName>;
  indexes: CollectionConfigIndexes<Doc>;
};

export type AnyCollectionIndexConfig = CollectionIndexConfig<
  DocumentBase,
  string
>;

export type InvalidParsedIndexField = {
  details: string;
  documentField: string;
  indexField: AnyDocIndexItem['field'];
  indexPartKind: IndexPartKind;
  reason: 'missing' | 'invalid';
};

export type ParsedIndexPart = {
  conditionFound?: OneFilterOperation;
  indexField: AnyDocIndexItem['field'];
  invalidFields: InvalidParsedIndexField[];
  isFilter: boolean;
  nullableFound?: { value: null | undefined };
  requiredFields: string[];
  valid: boolean;
  value: string; // when a nullable SK filter is null | undefined
};

export type DocumentIndexFilterParsed = {
  PK: FilterConditions | string;
  SK: FilterConditions | string;
  entity: string;
  key: AnyDocIndexItem['field'];
};

export type ParsedIndexKey = {
  PK: {
    definition: Readonly<AnyDocIndexItem['PK']>;
    requiredFields: string[];
  };
  SK: {
    definition: Readonly<AnyDocIndexItem['SK']>;
    requiredFields: string[];
  };
  entity: string;
  index: AnyDocIndexItem;
};

export type ParsedDocumentIndexes =
  | {
      error: null;
      filtersFound?: DocumentIndexFilterParsed[];
      firstIndex: {
        key: AnyDocIndexItem['field'];
        value: string;
      };

      indexFields: Record<string, string>;

      invalidFields: null;

      parsedIndexKeys: ParsedIndexKey[];
      partialIndexFilter: {
        key: AnyDocIndexItem['field'];
        value: string;
      };
      valid: true;
    }
  | {
      error: CollectionErrors;
      firstIndex: {
        key: AnyDocIndexItem['field'];
        value: string;
      } | null;

      indexFields: null;

      invalidFields: ParsedIndexPart['invalidFields'];

      parsedIndexKeys: ParsedIndexKey[];
      partialIndexFilter: {
        key: AnyDocIndexItem['field'];
        value: string;
      } | null;
      valid: false;
    };

export function isDocumentIndexKey(
  input: unknown
): input is DocumentIndexField {
  return typeof input === 'string' && DocumentIndexRegex.test(input);
}

export function assertDocumentIndexKey(
  input: unknown
): asserts input is DocumentIndexField {
  if (!isDocumentIndexKey(input)) {
    throw new CollectionErrors(
      {
        reason: 'INVALID_INDEX_KEY',
      },
      input
    );
  }
}

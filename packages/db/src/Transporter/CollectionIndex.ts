import { DarchJSON } from '@darch/utils/lib/DarchJSON';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { encodeNumber } from '@darch/utils/lib/conust';
import { devAssert } from '@darch/utils/lib/devAssert';
import { getKeys } from '@darch/utils/lib/getKeys';
import { inspectObject } from '@darch/utils/lib/inspectObject';
import { keyBy } from '@darch/utils/lib/keyBy';
import { Logger } from '@darch/utils/lib/logger';
import { base64ToText } from '@darch/utils/lib/textToBase64';
import { Name } from '@darch/utils/lib/typeUtils';

import {
  DocumentBase,
  FilterConditions,
  FilterRecord,
  IndexFilter,
  IndexFilterRecord,
  isFilterConditionKey,
  OneFilterOperation,
} from './Transporter';
import { InvalidFilterError } from './errors';

export const PK_SK_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(PK_SK_SEPARATOR, 'g');
export const ID_KEY_SEPARATOR = '#';
export const ID_SCAPE_CHAR = String.fromCharCode(0);

export function mountID(params: {
  entity: string;
  PK: string;
  SK: string | null;
}) {
  const { entity, PK, SK } = params;

  function encodeKey(key: string) {
    return key
      .toString()

      .replace(/↠/g, `${ID_SCAPE_CHAR}↠`)
      .replace(/#/g, `${ID_SCAPE_CHAR}#`);
  }

  return `${entity}${ID_KEY_SEPARATOR}${encodeKey(PK)}${PK_SK_SEPARATOR}${
    SK === null ? '' : encodeKey(SK)
  }`;
}

export function isBase64Id(input: unknown): input is `_:${string}` {
  return typeof input === 'string' && input.startsWith('_:');
}

export function getIDFromString(input: string) {
  if (!isBase64Id(input)) {
    return {
      i: undefined,
      v: input,
    };
  }

  try {
    const content = base64ToText(input.slice(2));
    const { i, v } = DarchJSON.parse(content);

    if (!i || !v || typeof i !== 'string' || typeof v !== 'string') {
      throw new RuntimeError(`INVALID_ID`, { content, i, v });
    }

    return {
      i,
      v,
    };
  } catch (e) {
    Logger.logError(e);
    throw new Error('INVALID_ID');
  }
}

export function idToBase64(id: string, indexName: string) {
  if (isBase64Id(id)) return id;
  const json = { i: indexName, v: id };
  return `_:${DarchJSON.stringify(json)}`;
}

/**
 * Receives a document indexConfig and a key-value filter and converts to
 * an index based search filter.
 * @param filter
 * @param indexConfig
 */
export function createDocumentIndexBasedFilters(
  filter: IndexFilterRecord,
  indexConfig: AnyCollectionIndexConfig
): FilterRecord[] {
  const { indexes, entity } = indexConfig;

  validateIndexNameAndField(indexConfig);

  let filtersRecords: FilterRecord[] = [];

  const filterKeys = new Set(Object.keys(filter));

  indexes.forEach((index) => {
    filterKeys.forEach((key) => {
      const value = filter[key];
      if (DocumentIndexRegex.test(key) && typeof value === 'string') {
        const id = getIDFromString(value);
        if (id.i) {
          return filtersRecords.push({
            [id.i]: id.v,
          });
        } else {
          return filtersRecords.push({
            $or: indexConfig.indexes.map((index) => ({
              [index.field]: id.v,
            })),
          });
        }
      }
    });

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

    const items = joinPKAndSKAsIDFilter({
      indexField: index.field,

      entity,

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
    });

    filtersRecords.push(...items);
  });

  if (!filtersRecords.length) {
    throw new InvalidFilterError(filter);
  }

  return filtersRecords;
}

export function getDocumentIndexFields<
  Document extends Record<string, unknown>
>(doc: Document, indexConfig: AnyCollectionIndexConfig): ParsedDocumentIndexes {
  const { indexes, entity } = indexConfig;

  validateIndexNameAndField(indexConfig);

  const indexFields: Record<string, string> = {};
  const invalidFields: ParseIndexInvalid[] = [];
  let firstIndex: ParsedDocumentIndexes['firstIndex'] = null;
  let partialIndexFilter: ParsedDocumentIndexes['partialIndexFilter'] = null;
  let valid = true;

  const parsedIndexKeys: ParsedIndexKey[] = [];

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
      acceptNullable: !index.SK || !index.SK.length,
    });

    parsedIndexKeys.push({
      entity,
      index,
      PK: {
        definition: index.PK,
        requiredFields: PK.requiredFields,
      },
      SK: {
        definition: index.SK,
        requiredFields: SK.requiredFields,
      },
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
      parsedIndexKeys,
    };
  }

  return {
    valid,
    firstIndex,
    partialIndexFilter,
    indexFields,
    invalidFields: null,
    error: null,
    parsedIndexKeys,
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
  indexParts: ReadonlyArray<IndexKeyHash>; // (`#${string}` | `.${string}`)[]
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
    requiredFields,
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
export type DocumentIndexField = `_id` | `_id${number}` | 'id';
export const DocumentIndexRegex = /^(_id\d*)|(id)$/;

// Definition for a document index

export type DocumentIndexItem<Keys, TName extends Name> = Readonly<{
  name: TName;
  field: DocumentIndexField;
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
}>;

export type AnyDocIndexItem = DocumentIndexItem<string, Name>;

export type CollectionIndexConfig<
  Doc extends DocumentBase,
  EntityName extends string
> = {
  entity: Readonly<EntityName>;
  indexes: Readonly<
    [
      DocumentIndexItem<keyof Doc, Name>,
      ...DocumentIndexItem<keyof Doc, Name>[]
    ]
  >;
};
export type AnyCollectionIndexConfig = CollectionIndexConfig<
  DocumentBase,
  string
>;

type ParseIndexInvalid = {
  reason: 'missing' | 'invalid';
  details: string;
  documentField: string;
  indexField: AnyDocIndexItem['field'];
  indexPartKind: IndexPartKind;
};

export type ParsedIndexPart = {
  invalidFields: ParseIndexInvalid[];
  value: string;
  valid: boolean;
  isFilter: boolean;
  indexField: AnyDocIndexItem['field'];
  requiredFields: string[];
  conditionFound?: OneFilterOperation;
  nullableFound?: { value: null | undefined }; // when a nullable SK filter is null | undefined
};

export type DocumentIndexFilterParsed = {
  key: AnyDocIndexItem['field'];
  PK: FilterConditions | string;
  SK: FilterConditions | string;
  entity: string;
};

export type ParsedIndexKey = {
  entity: string;
  index: AnyDocIndexItem;
  PK: {
    requiredFields: string[];
    definition: Readonly<AnyDocIndexItem['PK']>;
  };
  SK: {
    requiredFields: string[];
    definition: Readonly<AnyDocIndexItem['SK']>;
  };
};

export type ParsedDocumentIndexes =
  | {
      valid: true;
      indexFields: Record<string, string>;
      firstIndex: {
        key: AnyDocIndexItem['field'];
        value: string;
      };

      partialIndexFilter: {
        key: AnyDocIndexItem['field'];
        value: string;
      };

      filtersFound?: DocumentIndexFilterParsed[];

      invalidFields: null;
      error: null;
      parsedIndexKeys: ParsedIndexKey[];
    }
  | {
      valid: false;
      invalidFields: ParsedIndexPart['invalidFields'];

      partialIndexFilter: {
        key: AnyDocIndexItem['field'];
        value: string;
      } | null;

      firstIndex: {
        key: AnyDocIndexItem['field'];
        value: string;
      } | null;

      indexFields: null;
      error: RuntimeError;
      parsedIndexKeys: ParsedIndexKey[];
    };

import { createSchema } from '@backland/schema';
import { $Any, getByPath, nonNullValues, textToBase64 } from '@backland/utils';
import { RuntimeError } from '@backland/utils';
import { encodeNumber } from '@backland/utils';
import { devAssert } from '@backland/utils';
import { getKeys } from '@backland/utils';
import { inspectObject } from '@backland/utils';
import { keyBy } from '@backland/utils';
import { NodeLogger } from '@backland/utils';
import { base64ToText } from '@backland/utils';

import { CursorID } from './Cursor';
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

export type IndexToIDHelpers = {
  PKPartOpen: string;
  PKPart: string;
  SKPart: string;
  fullID: string;
  graphID: string;
  documentIndexFields: {
    [K: string]: string | null | string[];
  };
};

export function createIndexToIDHelpers(params: {
  PKEscapedString: string;
  SKEscapedString: string | null;
  entity: string;
  indexConfig: DocumentIndexItem;
  relatedTo: string | undefined;
}): IndexToIDHelpers {
  const {
    indexConfig: { name: indexField },
    PKEscapedString,
    SKEscapedString,
  } = params;

  const entity = params.entity.toLowerCase();
  const relatedTo = params.relatedTo?.toLowerCase();

  const {
    cursor: fullID,
    PKPart,
    PKPartOpen,
    SKPart,
    parentCursor,
  } = CursorID.parse({
    entity,
    relatedTo,
    name: indexField,
    PK: [PKEscapedString],
    SK: SKEscapedString ? [SKEscapedString] : [],
  });

  const graphID = mountGraphID({ fullID });

  const documentIndexFields: Record<any, any> = (() => {
    const _field = indexField.endsWith('PK')
      ? indexField.slice(0, -2)
      : indexField;

    return {
      [_field || 'PK']: fullID,
      [`${_field}PK`]: PKPart,
      [`${_field}SK`]: SKEscapedString,
      _e: entity,
    };
  })();

  if (parentCursor) {
    documentIndexFields['_rt'] = [parentCursor];
  }

  return {
    PKPart,
    SKPart,
    fullID,
    graphID,
    PKPartOpen,
    documentIndexFields,
  };
}

export type GraphIDJSON = {
  // index name
  input: string;
  entity: string;
  parent: GraphIDJSON | null; // related to (parent entity)
  indexField: DocumentIndexFieldKey; // entity
  fullID: string; // id value
  PK: string;
  SK: string | null;
};

export const CURSOR_PREFIX = '~!';
// a base64 encoded version of the id created by mountId
export function mountGraphID({ fullID }: { fullID: string }) {
  if (fullID.startsWith(CURSOR_PREFIX)) return fullID;
  return `${CURSOR_PREFIX}${textToBase64(fullID)}`;
}

export function parseCursorString(initFullID: string): GraphIDJSON | null {
  try {
    let fullID = initFullID.startsWith(CURSOR_PREFIX)
      ? base64ToText(initFullID.slice(1))
      : initFullID;

    const {
      //
      entity,
      name,
      PKPart,
      SKPart,
      parentCursor,
    } = CursorID.parse(fullID);

    const parent = parentCursor ? parseCursorString(parentCursor) : null;

    return {
      entity,
      indexField: name,
      fullID,
      parent,
      input: initFullID,
      PK: PKPart,
      SK: SKPart,
    };
  } catch (e) {
    NodeLogger.logError(e);
    throw new Error('INVALID_ID');
  }
}

export type IndexBasedFilterParsed = {
  PK: {
    // first primaryKey condition found in filter
    key: DocumentIndexFieldKey;
    value: string;
  };
  filters: FilterRecord;
  relationFilters: FilterRecord[] | undefined;
  foundKeyPairs: IndexFilterKeyPairInfo[];
  isFullKeyFilter: boolean; // true if (PK is string) && (SK is string or index.SK is undefined)
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
  const { indexes, entity } = parseCollectionIndexConfig(indexConfig);

  const indexFields: string[] = [
    'id',
    ...indexConfig.indexes.map((el) => el.name),
  ];

  let filtersRecords: FilterRecord[] = [];
  let foundPK: IndexBasedFilterParsed['PK'] | undefined = undefined;

  nonNullValues({ filter });
  const filterKeys = new Set(Object.keys(filter));

  const relationFilters: FilterRecord[] = [];

  const foundKeyPairs: IndexFilterKeyPairInfo[] = [];

  indexes.forEach((index) => {
    //

    const indexFieldAsFilterKey = index.name.endsWith('PK')
      ? index.name
      : `${index.name}PK`;
    const indexFieldAsFilterValue = filter[indexFieldAsFilterKey];

    if (typeof indexFieldAsFilterValue === 'string') {
      // for the case of a filter like "bananaPK", where
      // "banana" is the index field.
      filtersRecords.push({
        [indexFieldAsFilterKey]: indexFieldAsFilterValue,
      });

      return (foundPK = foundPK || {
        key: indexFieldAsFilterKey,
        value: indexFieldAsFilterValue,
      });
    }

    filterKeys.forEach((key) => {
      const value = filter[key];

      if (typeof value !== 'string') return;

      if (key === 'id') {
        const id = parseCursorString(value);

        if (id) {
          return (foundPK = foundPK || {
            key: id.indexField,
            value: id.fullID,
          });
        }
      }

      if (indexFields.includes(key)) {
        return filtersRecords.push({
          [key]: value,
        });
      }

      return;
    });

    const PK = pickIndexKeyPartsFromDocument({
      acceptNullable: false,
      doc: filter,
      indexField: index.name,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    const SK = pickIndexKeyPartsFromDocument({
      acceptNullable: true,
      doc: filter,
      indexField: index.name,
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

    const parsedCursorID = CursorID.parse({
      PK: PK.foundParts,
      SK: SK.foundParts,
      name: index.name,
      relatedTo: index.relatedTo,
      entity,
    });

    foundPK = foundPK || {
      key: index.name,
      value: parsedCursorID.PKPart,
    };

    if (index.relations?.length) {
      index.relations.forEach((rel) => {
        const $startsWith = CursorID.joinCursorPartsWithTrailingSeparator([
          parsedCursorID.cursor,
          rel.entity,
        ]);

        relationFilters.push({
          [index.name]: { $startsWith },
        });
      });
    }

    const indexKeyPairInfo: IndexFilterKeyPairInfo = {
      parsePK: PK,
      parseSK: SK,

      PK: PK.isFilter
        ? (PK.conditionFound as IndexFilter)
        : PK.valid
        ? parsedCursorID.PKPart
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
        ? parsedCursorID.SKPart
        : (devAssert(
            `Error in SK, failed to mount filter.`,
            { SK },
            { depth: 10 }
          ) as ''),

      entity,

      index,

      indexField: index.name,
    };

    foundKeyPairs.push(indexKeyPairInfo);
    const items = joinPKAndSKAsIDFilter(indexKeyPairInfo);

    filtersRecords.push(...items);
  });

  if (!filtersRecords.length || !foundPK) {
    throw new CollectionErrors({
      filter,
      possibleCondition: foundPK,
      reason: !filterKeys.size ? 'EMPTY_FILTER' : 'INVALID_FILTER',
    });
  }

  let hasNotFullKeyFilter = false;

  foundKeyPairs.forEach(({ index, SK, PK }) => {
    if (hasNotFullKeyFilter) return;
    const indexHasSK = !!index.SK?.length;
    if (indexHasSK) {
      if (!SK || typeof SK !== 'string') return (hasNotFullKeyFilter = true);
    }
    if (!PK || typeof PK !== 'string') {
      return (hasNotFullKeyFilter = true);
    }
    return;
  });

  const isFullKeyFilter = !hasNotFullKeyFilter;

  const mainEntityFilter =
    filtersRecords.length === 1 ? filtersRecords[0] : { $and: filtersRecords };

  return {
    PK: foundPK,
    filters: mainEntityFilter,
    relationFilters: relationFilters.length ? relationFilters : undefined,
    foundKeyPairs,
    isFullKeyFilter,
  };
}

export function getDocumentIndexFields<
  Document extends Record<string, unknown>
>(doc: Document, indexConfig: AnyCollectionIndexConfig): ParsedDocumentIndexes {
  const { indexes, entity } = parseCollectionIndexConfig(indexConfig);

  const indexFields: Record<string, string> = {};

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
    });

    const SK = pickIndexKeyPartsFromDocument({
      acceptNullable: !index.SK || !index.SK.length,
      doc,
      indexField: index.name,
      indexPartKind: 'SK',
      indexParts: index.SK || [],
    });

    const parsedIndex = CursorID.parse({
      entity,
      relatedTo,
      name: index.name,
      SK: SK.foundParts,
      PK: PK.foundParts,
    });

    const indexIDHelpers = createIndexToIDHelpers({
      PKEscapedString: parsedIndex.PKPart,
      SKEscapedString: parsedIndex.SKPart,
      relatedTo,
      entity,
      indexConfig: index,
    });

    parsedIndexKeys.push({
      PK: {
        definition: index.PK,
        requiredFields: PK.requiredFields,
        parsed: PK,
      },
      SK: {
        definition: index.SK,
        requiredFields: SK.requiredFields,
        parsed: SK,
      },
      entity,
      index,
    });

    if (PK.valid && SK.valid && !firstIndex) {
      firstIndex = {
        ...indexIDHelpers,
        ...index,
        key: index.name,
        value: indexIDHelpers.PKPart,
      };
    }

    if (SK.conditionFound || PK.conditionFound) {
      throw devAssert('Conditions found in document.', { PK, SK });
    }

    if (!PK.valid || !SK.valid) {
      valid = false;
      invalidFields.push(...PK.invalidFields, ...SK.invalidFields);
    }

    Object.assign(indexFields, indexIDHelpers.documentIndexFields);
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

  indexFields.id = indexFields.id || mountGraphID(firstIndex);

  return {
    error: null,
    firstIndex,
    indexFields,
    invalidFields: null,
    parsedIndexKeys,
    valid,
  };
}

export type IndexFilterKeyPairInfo = {
  PK: IndexFilter | string;
  SK: IndexFilter | string | null | undefined;
  entity: string;
  index: AnyDocIndexItem;
  indexField: DocumentIndexFieldKey;
  parsePK: ParsedIndexPart;
  parseSK: ParsedIndexPart;
};

function joinPKAndSKAsIDFilter(
  options: IndexFilterKeyPairInfo
): FilterRecord[] {
  let { PK, SK, entity, indexField, index } = options;
  const { relatedTo } = index;
  const SKField = `${indexField}SK`;

  if (PK && typeof PK === 'object' && typeof PK.$eq === 'string') PK = PK.$eq;
  if (SK && typeof SK === 'object' && typeof SK.$eq === 'string') SK = SK.$eq;

  if (typeof PK === 'string' && typeof SK === 'string') {
    return [
      {
        [indexField]: createIndexToIDHelpers({
          PKEscapedString: PK,
          SKEscapedString: SK,
          entity,
          indexConfig: index,
          relatedTo,
        }).fullID,
      },
    ];
  }

  const $and: FilterRecord[] = [];

  let _ensuredSameEntity = false;
  function _ensureSameEntity() {
    if (_ensuredSameEntity) return;
    _ensuredSameEntity = true;

    if ($and.find((el) => !!el[indexField]?.$startsWith)) return;

    $and.unshift({
      [indexField]: {
        $startsWith: createIndexToIDHelpers({
          entity,
          indexConfig: index,
          relatedTo: undefined,
          PKEscapedString: '',
          SKEscapedString: '',
        }).PKPartOpen,
      },
    });
  }

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

    const valueError = () =>
      new RuntimeError(`Invalid value for comparator ${comparator}`, {
        comparator,
        value: pk_value,
      });

    function _prefix(suffix: string) {
      return createIndexToIDHelpers({
        PKEscapedString: suffix,
        SKEscapedString: null,
        entity,
        indexConfig: index,
        relatedTo,
      }).fullID.slice(0, -1);
    }

    const SKFilter = SKValue === undefined ? {} : { [SKField]: SKValue };

    switch (comparator) {
      case '$startsWith': {
        if (typeof pk_value !== 'string') {
          throw valueError();
        }

        return {
          [indexField]: {
            $startsWith: _prefix(pk_value),
          },
          ...SKFilter,
        };
      }

      case '$between': {
        if (!(Array.isArray(pk_value) && pk_value.length === 2)) {
          throw valueError();
        }

        _ensureSameEntity();

        return {
          [indexField]: {
            $between: [
              _prefix(
                typeof pk_value[0] === 'number'
                  ? encodeNumber(pk_value[0])
                  : pk_value[0]
              ),
              _prefix(
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
          throw valueError();
        }

        if (SKValue === undefined) {
          throw new RuntimeError(
            `SK cannot be undefined in a $eq comparison. Use null for a nullable field.`,
            { SK }
          );
        }

        return {
          [indexField]: {
            [comparator]: createIndexToIDHelpers({
              PKEscapedString: pk_value,
              SKEscapedString: SKValue,
              entity,
              indexConfig: index,
              relatedTo,
            }).fullID,
          },
        };
      }

      case '$gt':
      case '$gte':
      case '$lt':
      case '$lte': {
        if (typeof pk_value !== 'string') {
          throw valueError();
        }

        _ensureSameEntity();

        return {
          [indexField]: { [comparator]: _prefix(pk_value) },
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
            $startsWith: createIndexToIDHelpers({
              PKEscapedString: PKString,
              SKEscapedString: sk_value,
              entity,
              indexConfig: index,
              relatedTo,
            }).fullID,
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
              createIndexToIDHelpers({
                PKEscapedString: PKString,
                SKEscapedString:
                  typeof sk_value[0] === 'number'
                    ? encodeNumber(sk_value[0])
                    : sk_value[0],
                entity,
                indexConfig: index,
                relatedTo,
              }).fullID,
              createIndexToIDHelpers({
                PKEscapedString: PKString,
                SKEscapedString:
                  typeof sk_value[1] === 'number'
                    ? encodeNumber(sk_value[1])
                    : sk_value[1],
                entity,
                indexConfig: index,
                relatedTo,
              }).fullID,
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
            [comparator]: createIndexToIDHelpers({
              PKEscapedString: PKString,
              SKEscapedString: sk_value,
              entity,
              indexConfig: index,
              relatedTo,
            }).fullID,
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
                $startsWith: createIndexToIDHelpers({
                  PKEscapedString: PKString,
                  SKEscapedString: '',
                  entity,
                  indexConfig: index,
                  relatedTo,
                }).fullID,
              },
            },
            {
              [indexField]: {
                [comparator]: createIndexToIDHelpers({
                  PKEscapedString: PKString,
                  SKEscapedString: sk_value,
                  entity,
                  indexConfig: index,
                  relatedTo,
                }).fullID,
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

function pickIndexKeyPartsFromDocument(param: {
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

      let found = getByPath(doc, documentField);

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
    foundParts: stringParts,
    indexField,
    invalidFields,
    isFilter: false,
    requiredFields,
    valid: !invalidFields.length,
    PK_SK: indexPartKind,
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

export type IndexKeyHash<Keys = string> =
  | `#${string}`
  | `.${Extract<Keys, string>}`;

export type IndexPartKind = 'PK' | 'SK';

export type DocumentIndexFieldKey = string;

// Definition for a document index

export interface IndexPKSKPartsListConfig<DocKeys extends $Any.Key = string>
  extends ReadonlyArray<IndexKeyHash<Extract<DocKeys, string>>> {}

export interface DocumentIndexesConfig<DocKeys extends $Any.Key = string>
  extends ReadonlyArray<DocumentIndexItem<DocKeys>> {}

export type DocumentIndexItem<DocKeys extends $Any.Key = string> = {
  PK: IndexPKSKPartsListConfig<DocKeys>;
  SK?: IndexPKSKPartsListConfig<DocKeys>;
  name: DocumentIndexFieldKey;
  relatedTo?: string;
  relations?: ReadonlyArray<DocumentIndexRelation>; // child entities related to that index
};

// each relation is made at the same index field (_id, or _id1, etc)
export type DocumentIndexRelation = {
  entity: string;
  name: string;
};

export type AnyDocIndexItem = DocumentIndexItem;

export type CollectionConfigIndexes<
  Doc extends DocumentBase,
  K extends string = Extract<keyof Doc, string>
> = DocumentIndexItem<K>[] | ReadonlyArray<DocumentIndexItem<K>>;

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
  indexField: AnyDocIndexItem['name'];
  indexPartKind: IndexPartKind;
  reason: 'missing' | 'invalid';
};

export type ParsedIndexPart = {
  conditionFound?: OneFilterOperation;
  foundParts: string[];
  indexField: AnyDocIndexItem['name'];
  invalidFields: InvalidParsedIndexField[];
  isFilter: boolean;
  nullableFound?: { value: null | undefined };
  requiredFields: string[];
  valid: boolean;
  PK_SK: 'PK' | 'SK';
};

export type DocumentIndexFilterParsed = {
  PK: FilterConditions | string;
  SK: FilterConditions | string;
  entity: string;
  key: AnyDocIndexItem['name'];
};

export type ParsedIndexKey = {
  PK: {
    definition: Readonly<AnyDocIndexItem['PK']>;
    requiredFields: string[];
    parsed: ParsedIndexPart;
  };
  SK: {
    definition: Readonly<AnyDocIndexItem['SK']>;
    requiredFields: string[];
    parsed: ParsedIndexPart;
  };
  entity: string;
  index: AnyDocIndexItem;
};

export interface FirstIndexParsed extends DocumentIndexItem, IndexToIDHelpers {
  key: AnyDocIndexItem['name'];
  value: string;
}

export type ParsedDocumentIndexes =
  | {
      error: null;
      filtersFound?: DocumentIndexFilterParsed[];
      firstIndex: FirstIndexParsed;

      indexFields: Record<string, string>;

      invalidFields: null;

      parsedIndexKeys: ParsedIndexKey[];

      valid: true;
    }
  | {
      error: CollectionErrors;
      firstIndex: FirstIndexParsed | null;

      indexFields: null;
      uniqIndexCondition?: undefined;

      invalidFields: ParsedIndexPart['invalidFields'];

      parsedIndexKeys: ParsedIndexKey[];

      valid: false;
    };

export const relationSchema = createSchema({
  entity: { string: { min: 1 } },
  name: { string: { min: 1 } },
});

export const indexItemSchema = createSchema({
  PK: { array: { of: 'string', min: 1 } },
  SK: { array: { of: 'string', min: 1 }, optional: true },
  name: { string: { min: 1 } },
  relatedTo: 'string?',
  relations: { array: { of: relationSchema, min: 1 }, optional: true },
});

export const indexConfigSchema = createSchema({
  entity: { string: { min: 1 } },
  indexes: {
    array: {
      of: indexItemSchema,
      min: 1,
    },
  },
});

export function parseCollectionIndexConfig<T extends AnyCollectionIndexConfig>(
  indexConfig: T
): T {
  indexConfigSchema.parse(indexConfig, {
    customErrorMessage: 'Invalid indexConfig',
  });

  const { indexes } = indexConfig;
  const entity = indexConfig.entity.toLowerCase();

  const parsed: AnyCollectionIndexConfig = {
    indexes: indexes.map(
      (el: DocumentIndexItem<any>): DocumentIndexItem<any> => {
        return {
          PK: el.PK,
          SK: el.SK,
          name: el.name,
          relatedTo: el.relatedTo?.toLowerCase(),
          relations: el.relations?.map((rel) => {
            return {
              entity: rel.entity.toLowerCase(),
              name: rel.name,
            };
          }),
        };
      }
    ) as AnyCollectionIndexConfig['indexes'],
    entity,
  };

  keyBy(
    indexes as any,
    (el) => (el as AnyCollectionIndexConfig['indexes'][number]).name,
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

  return parsed as T;
}

import { createSchema } from '@backland/schema';
import { getByPath, nonNullValues, textToBase64 } from '@backland/utils';
import { RuntimeError } from '@backland/utils';
import { encodeNumber } from '@backland/utils';
import { devAssert } from '@backland/utils';
import { getKeys } from '@backland/utils';
import { inspectObject } from '@backland/utils';
import { keyBy } from '@backland/utils';
import { NodeLogger } from '@backland/utils';
import { base64ToText } from '@backland/utils';

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
export const RELATION_SEPARATOR = '≻';
export const ID_KEY_SEPARATOR = '#';
export const ID_SCAPE_CHAR = String.fromCharCode(0);

export type PK_SK_SEPARATOR = typeof PK_SK_SEPARATOR;
export type RELATION_SEPARATOR = typeof RELATION_SEPARATOR;
export type ID_KEY_SEPARATOR = typeof ID_KEY_SEPARATOR;
export type ID_SCAPE_CHAR = typeof ID_SCAPE_CHAR;

export const SPECIAL_ID_CHARACTERS = [
  PK_SK_SEPARATOR,
  RELATION_SEPARATOR,
  ID_KEY_SEPARATOR,
  ID_KEY_SEPARATOR,
];

function WITHOUT_ESCAPING_SEPARATORS_JoinIndexPartsFoundInDocument(
  parts: string[]
) {
  return parts.join(ID_KEY_SEPARATOR);
}

function ESCAPE_SEPARATORS_AND_JoinIndexPartsFoundInDocument(parts: string[]) {
  return parts
    .map((part) => {
      // For when we are creating a new key (joining parts with separators) and
      // that document parts can already be strings using
      // separators (like an _id field for example).
      // Escaping that keys we are preventing from matching wrong documents
      // using $startsWith, for example.
      return part
        .toString()
        .replace(/↠/g, `${ID_SCAPE_CHAR}↠`)
        .replace(/#/g, `${ID_SCAPE_CHAR}#`);
    })
    .join(ID_KEY_SEPARATOR);
}

export function mountID(params: {
  PK: string;
  SK: string | null;
  entity: string;
  indexField: string;
  relatedTo: string | undefined;
}) {
  const { indexField, PK, SK } = params;
  const entity = params.entity.toLowerCase();
  const relatedTo = params.relatedTo?.toLowerCase();

  const { prefix, postPK } = (() => {
    if (!relatedTo) return { postPK: '', prefix: `${entity}:${indexField}` };
    // relatedTo:
    // allows parent entities to filter using $startsWith,
    // but only works if the child and parent entity have the same PK definition
    // example:
    //  - parent has PK .accountId => will generate id: `accounts:123`
    //  - child  has PK .accountId => will generate id: `accounts:123${RELATION_SEPARATOR}${childEntityName}`
    return {
      postPK: `${RELATION_SEPARATOR}${entity}`,
      prefix: `${relatedTo}:${indexField}`,
    };
  })();

  return `${prefix}${ID_KEY_SEPARATOR}${PK}${postPK}${PK_SK_SEPARATOR}${
    SK === null ? '' : SK
  }`;
}

export type GraphIDJSON = {
  // index name
  input: string;
  entity: string;
  parent: GraphIDJSON | null; // related to (parent entity)
  indexField: DocumentIndexField; // entity
  idValue: string; // id value
};

export const GRAPH_ID_PREFIX = '~!';
// a base64 encoded version of the id created by mountId
export function mountGraphID(id: string) {
  if (id.startsWith(GRAPH_ID_PREFIX)) return id;
  return `${GRAPH_ID_PREFIX}${textToBase64(id)}`;
}

export function parseGraphID(input: string): GraphIDJSON | null {
  try {
    let idValue = input.startsWith(GRAPH_ID_PREFIX)
      ? base64ToText(input.slice(1))
      : input;

    let parent: GraphIDJSON | null = null;
    let childEntity: string | null = null;
    const relParts = idValue.split(RELATION_SEPARATOR);

    if (relParts.length > 1) {
      parent = parseGraphID(
        mountGraphID(relParts[0] + PK_SK_SEPARATOR) // remounting to change "input" on parseGraphID result
      );
      childEntity = relParts[1].split(PK_SK_SEPARATOR)[0];
    }

    let [e, idRest] = idValue.split(':');
    const [indexField, rest] = idRest.split(ID_KEY_SEPARATOR);

    const entity = childEntity || e;

    nonNullValues({
      entity,
      indexField,
      rest,
      idValue,
    });

    assertDocumentIndexKey(indexField);

    return {
      entity,
      indexField,
      idValue,
      parent,
      input,
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

  let filtersRecords: FilterRecord[] = [];
  let foundPK: IndexBasedFilterParsed['PK'] | undefined = undefined;

  nonNullValues({ filter });
  const filterKeys = new Set(Object.keys(filter));

  const relationFilters: FilterRecord[] = [];

  const foundKeyPairs: IndexFilterKeyPairInfo[] = [];

  indexes.forEach((index) => {
    filterKeys.forEach((key) => {
      const value = filter[key];

      if (key === 'id' && typeof value === 'string') {
        const id = parseGraphID(value);

        if (id) {
          foundPK = {
            key: id.indexField,
            value: id.idValue,
          };

          return filtersRecords.push({
            [id.indexField]: id.idValue,
          });
        }
      }

      if (DocumentIndexRegex.test(key) && typeof value === 'string') {
        return filtersRecords.push({
          [key]: value,
        });
      }
    });

    const PK = pickIndexKeyPartsFromDocument({
      acceptNullable: false,
      doc: filter,
      indexField: index.field,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    const SK = pickIndexKeyPartsFromDocument({
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

    const PKString = WITHOUT_ESCAPING_SEPARATORS_JoinIndexPartsFoundInDocument(
      PK.foundParts
    );

    const SKString = WITHOUT_ESCAPING_SEPARATORS_JoinIndexPartsFoundInDocument(
      SK.foundParts
    );

    foundPK = {
      key: index.field,
      value: PKString,
    };

    if (index.relations?.length) {
      index.relations.forEach((rel) => {
        relationFilters.push({
          [index.field]: {
            $startsWith:
              mountID({
                PK: PKString,
                SK: null,
                entity,
                indexField: index.field,
                relatedTo: undefined,
              }).slice(0, -1) + // removing ending PK_SK_SEPARATOR "↠"
              RELATION_SEPARATOR +
              rel.entity.toLowerCase(),
          },
        });
      });
    }

    const indexKeyPairInfo: IndexFilterKeyPairInfo = {
      parsePK: PK,
      parseSK: SK,

      PK: PK.isFilter
        ? (PK.conditionFound as IndexFilter)
        : PK.valid
        ? PKString
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
        ? SKString
        : (devAssert(
            `Error in SK, failed to mount filter.`,
            { SK },
            { depth: 10 }
          ) as ''),

      entity,

      index,

      indexField: index.field,
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
  let firstIndex: ParsedDocumentIndexes['firstIndex'] = null;
  let valid = true;

  const parsedIndexKeys: ParsedIndexKey[] = [];

  indexes.forEach((index) => {
    const relatedTo = index.relatedTo?.toLowerCase();

    const PK = pickIndexKeyPartsFromDocument({
      acceptNullable: false,
      doc,
      indexField: index.field,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    let PKEscapedString = ESCAPE_SEPARATORS_AND_JoinIndexPartsFoundInDocument(
      PK.foundParts
    );

    const SK = pickIndexKeyPartsFromDocument({
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

    const SKEscapedString = ESCAPE_SEPARATORS_AND_JoinIndexPartsFoundInDocument(
      SK.foundParts
    );

    const hashedId = mountID({
      PK: PKEscapedString,
      SK: SKEscapedString,
      entity: entity,
      indexField: index.field,
      relatedTo,
    });

    if (PK.valid && SK.valid && !firstIndex) {
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
    // example _id2PK: "..."
    indexFields[`${index.field}PK`] = PKEscapedString;
    // example: "_id2SK": "..."
    indexFields[`${index.field}SK`] = SKEscapedString;
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
      throw new Error('MISSING_CONDITION');
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

  // @ts-ignore
  indexFields.id = indexFields.id || mountGraphID(firstIndex.value);

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
  indexField: DocumentIndexField;
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
        [indexField]: mountID({
          PK,
          SK,
          entity,
          indexField: indexField,
          relatedTo,
        }),
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
        $startsWith: mountID({
          entity,
          indexField,
          relatedTo: undefined,
          PK: '',
          SK: '',
        }).slice(0, -1),
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
      return (
        mountID({
          PK: suffix,
          SK: null,
          entity,
          indexField,
          relatedTo,
        })
          // removing PK separator "↠"
          .slice(0, -1)
      );
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
            [comparator]: mountID({
              PK: pk_value,
              SK: SKValue,
              entity,
              indexField: indexField,
              relatedTo,
            }),
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
            $startsWith: mountID({
              PK: PKString,
              SK: sk_value,
              entity,
              indexField: indexField,
              relatedTo,
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
                relatedTo,
              }),
              mountID({
                PK: PKString,
                SK:
                  typeof sk_value[1] === 'number'
                    ? encodeNumber(sk_value[1])
                    : sk_value[1],
                entity,
                indexField: indexField,
                relatedTo,
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
              relatedTo,
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
                  relatedTo,
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
                  relatedTo,
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

    if (keyPart === RELATION_SEPARATOR) {
      return stringParts.push(keyPart);
    }

    if (keyPart.startsWith(ID_KEY_SEPARATOR)) {
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
  | typeof RELATION_SEPARATOR
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

export type DocumentIndexItem<
  Keys extends string,
  TName extends string
> = Readonly<{
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
  relatedTo?: string;
  relations?: DocumentIndexRelation[]; // child entities related to that index
}>;

// each relation is made at the same index field (_id, or _id1, etc)
export type DocumentIndexRelation = {
  entity: string;
  name: string;
};

export type AnyDocIndexItem = DocumentIndexItem<string, string>;

export type CollectionConfigIndexes<
  Doc extends DocumentBase,
  K extends string = Extract<keyof Doc, string>
> =
  | [
      DocumentIndexItem<K, string>, //
      ...DocumentIndexItem<K, string>[]
    ]
  | Readonly<
      [
        DocumentIndexItem<K, string>, //
        ...DocumentIndexItem<K, string>[]
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
  foundParts: string[];
  indexField: AnyDocIndexItem['field'];
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

export const relationSchema = createSchema({
  entity: { string: { min: 1 } },
  name: { string: { min: 1 } },
});

export const indexItemSchema = createSchema({
  PK: { array: { of: 'string', min: 1 } },
  SK: { array: { of: 'string', min: 1 }, optional: true },
  field: { string: { min: 1 } },
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
      (el: DocumentIndexItem<any, any>): DocumentIndexItem<any, any> => {
        return {
          PK: el.PK,
          SK: el.SK,
          field: el.field,
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

  return parsed as T;
}

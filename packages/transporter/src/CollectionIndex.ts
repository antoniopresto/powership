import { createSchema } from '@backland/schema';
import {
  $Any,
  getByPath,
  nonNullValues,
  textToBase64,
  tuple,
} from '@backland/utils';
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

export type UniqIndexCondition = {
  _id: { $startsWith: string };
  $not: { $or: { [K in DocumentIndexField]?: string }[] };
};

export type IndexToIDHelpers = {
  /*
  // example:
  {
      mountRelationCondition: (relatedIndex: string) => ({$startsWith: string}),
      PKPart: 'users:_id#abc↠',
      PKPartWithoutPKSKSeparator: 'users:_id#abc',
      SKPart: '123',
      documentIndexFields: {
        _id: 'users:_id#abc↠123',
        _idPK: 'abc',
        _idSK: '123',
      },
      fullID: 'users:_id#abc↠123',
      graphID: '~!dXNlcnM6X2lkI2FiY+KGoDEyMw==',
      entityPrefix: 'users:_id',
    }
   */
  PKPartWithoutPKSKSeparator: string;
  PKPart: string;
  SKPart: string;
  fullID: string;
  graphID: string;
  entityPrefix: string;
  mountRelationCondition: (relatedEntity: string) => { $startsWith: string };
  documentIndexFields: {
    [K in
      | `${DocumentIndexField}`
      | `${DocumentIndexField}PK`
      | `${DocumentIndexField}SK`]?: string;
  };
};

export function createIndexToIDHelpers(params: {
  PKEscapedString: string;
  SKEscapedString: string | null;
  entity: string;
  indexField: DocumentIndexField;
  relatedTo: string | undefined;
}): IndexToIDHelpers {
  const { indexField, PKEscapedString, SKEscapedString } = params;
  const entity = params.entity.toLowerCase();
  const relatedTo = params.relatedTo?.toLowerCase();

  const { entityPrefix, postPK } = (() => {
    if (!relatedTo)
      return {
        postPK: '',
        entityPrefix: `${entity}:${indexField}${ID_KEY_SEPARATOR}`,
      };
    // relatedTo:
    // allows parent entities to filter using $startsWith,
    // but only works if the child and parent entity have the same PK definition
    // example:
    //  - parent has PK .accountId => will generate id: `accounts:123`
    //  - child  has PK .accountId => will generate id: `accounts:123${RELATION_SEPARATOR}${childEntityName}`
    return {
      postPK: `${RELATION_SEPARATOR}${entity}`,
      entityPrefix: `${relatedTo}:${indexField}${ID_KEY_SEPARATOR}`,
    };
  })();

  const PKPartWithoutPKSKSeparator = `${entityPrefix}${PKEscapedString}${postPK}`;

  const PKPart = `${PKPartWithoutPKSKSeparator}${PK_SK_SEPARATOR}`;
  const SKPart = `${SKEscapedString === null ? '' : SKEscapedString}`;
  const fullID = `${PKPart}${SKPart}`;
  const graphID = mountGraphID(fullID);

  function mountRelationCondition(relatedEntity: string) {
    return {
      $startsWith: `${PKPartWithoutPKSKSeparator}${RELATION_SEPARATOR}${relatedEntity}`,
    };
  }

  const documentIndexFields = {
    [indexField]: fullID,
    [`${indexField}PK`]: PKEscapedString,
    [`${indexField}SK`]: SKEscapedString,
  };

  return {
    PKPart,
    SKPart,
    fullID,
    graphID,
    PKPartWithoutPKSKSeparator,
    mountRelationCondition,
    entityPrefix,
    documentIndexFields,
  };
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

      return;
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

    const PKEscapedString =
      WITHOUT_ESCAPING_SEPARATORS_JoinIndexPartsFoundInDocument(PK.foundParts);

    const SKEscapedString =
      WITHOUT_ESCAPING_SEPARATORS_JoinIndexPartsFoundInDocument(SK.foundParts);

    foundPK = {
      key: index.field,
      value: PKEscapedString,
    };

    if (index.relations?.length) {
      index.relations.forEach((rel) => {
        const indexIDHelpers = createIndexToIDHelpers({
          PKEscapedString: PKEscapedString,
          SKEscapedString: null,
          entity,
          indexField: index.field,
          relatedTo: undefined,
        });

        relationFilters.push({
          [index.field]: indexIDHelpers.mountRelationCondition(rel.entity),
        });
      });
    }

    const indexKeyPairInfo: IndexFilterKeyPairInfo = {
      parsePK: PK,
      parseSK: SK,

      PK: PK.isFilter
        ? (PK.conditionFound as IndexFilter)
        : PK.valid
        ? PKEscapedString
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
        ? SKEscapedString
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

  const uniqIndexCondition: UniqIndexCondition = {
    _id: { $startsWith: '' },
    $not: { $or: [] },
  };

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

    const SKEscapedString = ESCAPE_SEPARATORS_AND_JoinIndexPartsFoundInDocument(
      SK.foundParts
    );

    const indexIDHelpers = createIndexToIDHelpers({
      PKEscapedString,
      SKEscapedString,
      entity: entity,
      indexField: index.field,
      relatedTo,
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

    if (index.field === '_id' && PK.valid) {
      uniqIndexCondition._id.$startsWith = indexIDHelpers.entityPrefix;
    }

    if (PK.valid && SK.valid && !firstIndex) {
      firstIndex = { key: index.field, value: indexIDHelpers.fullID };
    }

    if (SK.conditionFound || PK.conditionFound) {
      throw devAssert('Conditions found in document.', { PK, SK });
    }

    if (!PK.valid || !SK.valid) {
      valid = false;
      invalidFields.push(...PK.invalidFields, ...SK.invalidFields);
    }

    Object.assign(indexFields, indexIDHelpers.documentIndexFields);
    uniqIndexCondition.$not.$or.push({
      [index.field]: indexIDHelpers.fullID,
    });
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

  // @ts-ignore
  indexFields.id = indexFields.id || mountGraphID(firstIndex.value);

  nonNullValues({
    'uniqIndexCondition._id.$startsWith': uniqIndexCondition._id.$startsWith,
  });

  return {
    error: null,
    firstIndex,
    indexFields,
    uniqIndexCondition,
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
        [indexField]: createIndexToIDHelpers({
          PKEscapedString: PK,
          SKEscapedString: SK,
          entity,
          indexField: indexField,
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
          indexField,
          relatedTo: undefined,
          PKEscapedString: '',
          SKEscapedString: '',
        }).PKPartWithoutPKSKSeparator,
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
        indexField,
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
              indexField: indexField,
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
              indexField: indexField,
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
                indexField: indexField,
                relatedTo,
              }).fullID,
              createIndexToIDHelpers({
                PKEscapedString: PKString,
                SKEscapedString:
                  typeof sk_value[1] === 'number'
                    ? encodeNumber(sk_value[1])
                    : sk_value[1],
                entity,
                indexField: indexField,
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
              indexField: indexField,
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
                  indexField: indexField,
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
                  indexField: indexField,
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

export const DocumentIndexFields = tuple('id', `_id`, `_id1`, `_id2`, `_id3`);

export type DocumentIndexField = typeof DocumentIndexFields[number];

export const DocumentIndexRegex = /^(_id\d*)|(id)$/;

// Definition for a document index

export interface IndexPKSKPartsListConfig<DocKeys extends $Any.Key = string>
  extends ReadonlyArray<IndexKeyHash<Extract<DocKeys, string>>> {}

export interface DocumentIndexesConfig<DocKeys extends $Any.Key = string>
  extends ReadonlyArray<DocumentIndexItem<DocKeys>> {}

export type DocumentIndexItem<DocKeys extends $Any.Key = string> = {
  PK: IndexPKSKPartsListConfig<DocKeys>;
  SK?: IndexPKSKPartsListConfig<DocKeys>;
  field: DocumentIndexField;
  name: string;
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

export type ParsedDocumentIndexes =
  | {
      error: null;
      filtersFound?: DocumentIndexFilterParsed[];
      firstIndex: {
        key: AnyDocIndexItem['field'];
        value: string;
      };

      indexFields: Record<string, string>;
      uniqIndexCondition: UniqIndexCondition;

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
      uniqIndexCondition?: undefined;

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
      (el: DocumentIndexItem<any>): DocumentIndexItem<any> => {
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

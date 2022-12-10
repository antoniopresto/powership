import { createSchema } from '@backland/schema';
import { $Any, getByPath, nonNullValues, textToBase64 } from '@backland/utils';
import { encodeNumber } from '@backland/utils';
import { devAssert } from '@backland/utils';
import { getKeys } from '@backland/utils';
import { inspectObject } from '@backland/utils';
import { keyBy } from '@backland/utils';
import { NodeLogger } from '@backland/utils';
import { base64ToText } from '@backland/utils';

import { CollectionErrors, EntityErrorKind } from './CollectionErrors';
import { IndexCursor, ParsedIndexCursor } from './IndexCursor';
import { RELATION_PRECEDES } from './IndexCursor/joinIndexCursor';
import {
  DocumentBase,
  FilterConditions,
  FilterRecord,
  IndexFilter,
  IndexFilterRecord,
  isFilterConditionKey,
  OneFilterOperation,
} from './Transporter';

export const CURSOR_PREFIX = '~!';
// a base64 encoded version of the id created by mountId
export function mountGraphID({ cursor }: { cursor: string }) {
  if (cursor.startsWith(CURSOR_PREFIX)) return cursor;
  return `${CURSOR_PREFIX}${textToBase64(cursor)}`;
}

export function parseFilterCursor(
  initFullID: string
): ParsedIndexCursor | null {
  try {
    let fullID = initFullID.startsWith(CURSOR_PREFIX)
      ? base64ToText(initFullID.slice(1))
      : initFullID;
    return IndexCursor.parse(fullID, { destination: 'document' });
  } catch (e) {
    NodeLogger.logError(e);
    throw new Error('INVALID_ID');
  }
}

export type IndexFilterFound =
  | { _id?: string } & { [L in `${string}PK`]: string } & {
      [L in `${string}SK`]: string;
    };

export type RelationsFilter = { [k: string]: string };
export type IndexBasedFilterParsed = {
  indexFilter: IndexFilterFound;
  attributeFilter: FilterRecord | undefined;
  relationFilters: RelationsFilter[] | undefined;
  foundKeyPairs: IndexFilterKeyPairInfo[];
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
  indexConfig = parseCollectionIndexConfig(indexConfig);

  let attributeFilters: FilterRecord[] = [];

  nonNullValues({ filter });

  const relationFilters: RelationsFilter[] = [];
  const foundKeyPairs: IndexFilterKeyPairInfo[] = [];

  const parsedIndexCursors = _parseIndexCursors(filter, indexConfig);
  const foundIndexFilter = _getIndexFilter(filter, parsedIndexCursors);

  parsedIndexCursors.forEach(
    ({ index, parsedIndexCursor, PKPartParsed, SKPartParsed }) => {
      const keyIsInIndexFilter = index.name in foundIndexFilter;

      if (index.relations?.length) {
        relationFilters.push({
          [`${index.name}PK`]: parsedIndexCursor.PKPartOpen + RELATION_PRECEDES,
        });
      }

      const indexKeyPairInfo: IndexFilterKeyPairInfo = {
        parsePK: PKPartParsed,
        parseSK: SKPartParsed,

        PK: parsedIndexCursor.PKPart,

        SK: (() => {
          if (SKPartParsed.foundEmptyCondition) return undefined;

          return SKPartParsed.nullableFound
            ? SKPartParsed.nullableFound.value
            : SKPartParsed.isFilter
            ? (SKPartParsed.conditionFound as IndexFilter)
            : SKPartParsed.valid
            ? parsedIndexCursor.SKPart
            : (devAssert(
                `Error in SK, failed to mount filter.`,
                { SKPartParsed },
                { depth: 10 }
              ) as '');
        })(),

        entity: indexConfig.entity,

        index,

        indexField: index.name,
      };

      foundKeyPairs.push(indexKeyPairInfo);
      const attrFilter =
        !keyIsInIndexFilter && createSKFilter(indexKeyPairInfo);

      if (attrFilter) {
        attributeFilters.push(attrFilter);
      }
    }
  );

  const mainEntityFilter = (() => {
    if (!attributeFilters.length) return;
    return attributeFilters.length === 1
      ? attributeFilters[0]
      : { $and: attributeFilters };
  })();

  return {
    indexFilter: foundIndexFilter,
    attributeFilter: mainEntityFilter,
    relationFilters: relationFilters.length ? relationFilters : undefined,
    foundKeyPairs,
  };
}

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
    });

    const SK = pickIndexKeyPartsFromDocument({
      acceptNullable: !index.SK || !index.SK.length,
      doc,
      indexField: index.name,
      indexPartKind: 'SK',
      indexParts: index.SK || [],
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
      ..._getDocumentIndexFields(parsedCursor),
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

export type IndexFilterKeyPairInfo = {
  PK: string;
  SK: IndexFilter | string | null | undefined;
  entity: string;
  index: AnyDocIndexItem;
  indexField: DocumentIndexFieldKey;
  parsePK: ParsedIndexPart;
  parseSK: ParsedIndexPart;
};

function createSKFilter(
  options: IndexFilterKeyPairInfo
): FilterRecord | undefined {
  let { SK, indexField } = options;

  if (SK === undefined || SK === null) {
    return undefined;
  }

  const SKField = `${indexField}SK`;

  if (SK && typeof SK === 'object' && typeof SK.$eq === 'string') SK = SK.$eq;

  if (typeof SK === 'string') {
    return {
      [SKField]: SK,
    };
  }

  let [[comparator, sk_value], ...rest] = Object.entries(SK);

  if (rest.length) {
    throw new Error(
      `More than one condition to SK found: ${inspectObject({ SK })}`
    );
  }

  switch (comparator) {
    case '$startsWith': {
      if (!sk_value || typeof sk_value !== 'string') {
        return devAssert('Expected $startsWith value to be a string.', {
          sk_value,
        });
      }

      return {
        [SKField]: {
          $startsWith: sk_value,
        },
      };
    }

    case '$between': {
      if (!(Array.isArray(sk_value) && sk_value.length === 2)) {
        return devAssert('Expected $between to be an array with length 2.', {
          sk_value,
        });
      }

      return {
        [SKField]: {
          $between: sk_value.map((el) =>
            typeof el === 'string' ? el : encodeNumber(el)
          ),
        },
      };
    }

    case '$eq': {
      if (typeof sk_value !== 'string' && sk_value !== null) {
        return devAssert('Expected $eq value to be string or null.', {
          sk_value,
        });
      }

      return {
        [SKField]: {
          [comparator]: sk_value,
        },
      };
    }

    case '$gt':
    case '$gte':
    case '$lt':
    case '$lte': {
      if (sk_value === undefined) sk_value = null;
      if (typeof sk_value !== 'string' && sk_value !== null) {
        return devAssert(`Expected ${comparator} value to be string or null.`, {
          sk_value,
        });
      }

      return {
        [SKField]: {
          [comparator]: sk_value,
        },
      };
    }

    default: {
      throw new Error(`invalid operator "${comparator}"`);
    }
  }
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

  let foundEmptyCondition = false;
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

        if (!keys.length && acceptNullable) {
          foundEmptyCondition = true;
          return (nullableFound = { value: undefined });
        }

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

  if (foundEmptyCondition) {
    result.foundEmptyCondition = foundEmptyCondition;
  }

  if (nullableFound) {
    result.nullableFound = nullableFound;
  }

  if (foundEmptyCondition || conditionFound) {
    result.isFilter = true;
  }

  if (conditionFound) {
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
  foundEmptyCondition?: boolean;
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

export interface FirstIndexParsed
  extends Omit<DocumentIndexItem, 'relatedTo'>,
    ParsedIndexCursor {
  key: AnyDocIndexItem['name'];
  value: string;
  relatedTo: string | null;
}

export type ParsedDocumentIndexes =
  | {
      error: null;
      filtersFound?: DocumentIndexFilterParsed[];
      firstIndex: FirstIndexParsed;

      indexFields: CommonIndexFields;

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

export type CommonIndexFields = {
  _c: string; // cursor
  _e: string; // entity
  _id: string; // full id
  _rpk: string[]; // relatedTo
} & {
  [L in `${string}PK`]: string; // PK part
} & {
  [L in `${string}SK`]: string; // SK part
};

function _getDocumentIndexFields(
  parsedIndex: ParsedIndexCursor
): CommonIndexFields {
  const { cursor, PKPart, SKPart, name, entity, parentPrefix } = parsedIndex;

  const _c = mountGraphID({ cursor });

  const _field =
    name === 'PK' ? 'PK' : name.endsWith('PK') ? name.slice(0, -2) : name;

  return {
    _c,
    _id: cursor,
    [_field]: cursor,
    _e: entity,
    [`${_field}PK`]: PKPart,
    [`${_field}SK`]: SKPart,
    _rpk: parentPrefix ? [parentPrefix] : undefined,
  } as CommonIndexFields;
}

function _getIndexFilter(
  filters: Record<string, any>,
  indexes: _ParseIndexCursors[]
): IndexFilterFound {
  for (let [key, value] of Object.entries(filters)) {
    if (typeof value !== 'string') continue;

    if (key === 'id') {
      const idParsed = parseFilterCursor(value);
      if (idParsed) {
        return {
          _id: idParsed.cursor,
          [`${idParsed.name}PK`]: idParsed.PKPart,
          [`${idParsed.name}SK`]: idParsed.SKPart,
        };
      }
    }
  }

  const PKAndSKAreStrings = indexes.find((item) => {
    const pkValid =
      item?.PKPartParsed?.isFilter === false && item.PKPartParsed.valid;

    const skValid =
      item?.SKPartParsed?.isFilter === false && item.SKPartParsed.valid;

    return pkValid && skValid;
  });

  if (PKAndSKAreStrings) {
    const { parsedIndexCursor } = PKAndSKAreStrings;
    return {
      _id: parsedIndexCursor.cursor,
      [`${parsedIndexCursor.name}PK`]: parsedIndexCursor.PKPart,
      [`${parsedIndexCursor.name}SK`]: parsedIndexCursor.SKPart,
    };
  }

  const PKIsString = indexes.find((item) => {
    return item.PKPartParsed?.isFilter === false && item.PKPartParsed.valid;
  });

  if (PKIsString) {
    const { parsedIndexCursor } = PKIsString;
    return {
      [`${parsedIndexCursor.name}PK`]: parsedIndexCursor.PKPart,
    };
  }

  throw new Error(
    `Failed to find an index condition in filter: ${inspectObject({
      filters,
      indexes,
    })}`
  );
}

export type _ParseIndexCursors = {
  parsedIndexCursor: ParsedIndexCursor;
  index: DocumentIndexItem;
  PKPartParsed: ParsedIndexPart;
  SKPartParsed: ParsedIndexPart;
};

function _parseIndexCursors(
  filter: Record<string, any>,
  { indexes, entity }: AnyCollectionIndexConfig
): _ParseIndexCursors[] {
  const filterKeys = new Set(Object.keys(filter));

  return indexes.map((index: DocumentIndexItem) => {
    const PK = pickIndexKeyPartsFromDocument({
      acceptNullable: false,
      doc: filter,
      indexField: index.name,
      indexPartKind: 'PK',
      indexParts: index.PK,
    });

    if (PK.isFilter) {
      throw new Error(
        `PK cant be a filter. ${inspectObject({ filter, index })}`
      );
    }

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

    return {
      PKPartParsed: PK,
      SKPartParsed: SK,
      parsedIndexCursor: IndexCursor.parse(
        {
          PK: PK.foundParts,
          SK: SK.foundParts,
          name: index.name,
          relatedTo: index.relatedTo,
          entity,
        },
        {
          destination: 'filter',
        }
      ),
      index,
    };
  });
}

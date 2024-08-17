import { createObjectType } from '@powership/schema';
import {
  $Any,
  devAssert,
  keyBy,
  mountGraphID,
  ParsedIndexCursor,
  parseIndexFieldName,
} from '@powership/utils';

import { CollectionErrors } from './CollectionErrors';
import {
  DocumentBase,
  FilterConditions,
  FilterRecord,
  OneFilterOperation,
} from './Transporter';

export type IndexFilterFound =
  | { _id?: string } & { [L in `${string}PK`]: string } & {
      [L in `${string}SK`]?: string | FilterRecord;
    };

export type RelationsFilter = { [k: string]: { $startsWith: `${string}⊰` } };

export type IndexBasedFilterParsed = {
  indexFilter: IndexFilterFound;
  relationFilters: RelationsFilter[] | undefined;
};

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
> = ReadonlyArray<DocumentIndexItem<K>>;

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
  fullIndexFound: string | null;
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
    destinationField: { key: string; value: string };
  };
  SK: {
    definition: Readonly<AnyDocIndexItem['SK']>;
    requiredFields: string[];
    parsed: ParsedIndexPart;
    destinationField: { key: string; value: string };
  };
  entity: string;
  indexFieldsParsed: DocumentIndexFieldsParsed;
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

export const relationSchema = createObjectType({
  entity: { string: { min: 1 } },
  name: { string: { min: 1 } },
});

export const indexItemSchema = createObjectType({
  PK: { array: { of: 'string', min: 1 } },
  SK: { array: { of: 'string', min: 1 }, optional: true },
  name: { string: { min: 1 } },
  relatedTo: 'string?',
  relations: { array: { of: relationSchema, min: 1 }, optional: true },
});

export const indexConfigSchema = createObjectType({
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
  _rpk?: string[]; // relatedTo
} & {
  [L in `${string}PK`]: string; // PK part
} & {
  [L in `${string}SK`]: string; // SK part
};

export interface DocumentIndexFieldsParsed {
  documentFields: CommonIndexFields;
  PKField: string;
  SKField: string;
}

export function parseOneIndexDocumentFields(
  parsedIndex: ParsedIndexCursor
): DocumentIndexFieldsParsed {
  const { cursor, PKPart, SKPart, name, entity, parentPrefix } = parsedIndex;

  const _c = mountGraphID({ cursor });

  const _field =
    name === 'PK' ? 'PK' : name.endsWith('PK') ? name.slice(0, -2) : name;

  const PKField = parseIndexFieldName(_field, 'PK');
  const SKField = parseIndexFieldName(_field, 'SK');

  const documentFields = {
    _c,
    _id: cursor,
    [_field]: cursor,
    _e: entity,
    [PKField]: PKPart,
    [SKField]: SKPart,
  } as CommonIndexFields;

  if (parentPrefix) {
    documentFields._rpk = [parentPrefix];
  }

  return { documentFields, PKField, SKField };
}

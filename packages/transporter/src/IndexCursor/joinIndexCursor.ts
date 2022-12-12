import { nonNullValues } from '@backland/utils';
import { FilterRecord } from '../Transporter';

export interface InitIndexCursor {
  PK: string[];
  SK: string[] | null;
  entity: string;
  name: string;
  relatedTo?: string;
}

export interface ParseCursorOptions extends JoinKeyPartsOptions {
  //
}

export interface JoinKeyPartsOptions {
  destination: 'filter' | 'document';
}

export interface ParsedIndexCursor {
  entity: string;
  name: string;
  relatedTo: string | null;
  parentPrefix: string | null;
  cursor: string;
  PKPartOpen: string;
  PKPart: string;
  PKFieldName: string;
  SKFieldName: string;
  filter: FilterRecord;
  SKPart: string | null | undefined;
}

export const CURSOR_CHARS = {
  INDEX_PART_SEP: '⋮',
  KEY_PART_SEP: '∙',
  RELATION_PRECEDES: '⊰',
  ESCAPE_INDEX_PART_SEP: '⦙',
  ESCAPE_KEY_PART_SEP: '⦁',
} as const;

export const {
  INDEX_PART_SEP,
  ESCAPE_KEY_PART_SEP,
  ESCAPE_INDEX_PART_SEP,
  KEY_PART_SEP,
  RELATION_PRECEDES,
} = CURSOR_CHARS;

export function joinIndexCursor(
  init: InitIndexCursor,
  options: ParseCursorOptions
) {
  const { relatedTo } = init;

  if (relatedTo) {
    return _joinIndexCursorWithParent(
      {
        ...init,
        relatedTo,
      },
      options
    );
  }

  const { entity, name } = init;

  return (
    [
      entity.toLowerCase(),
      name,
      joinPKSK(init, options), //
    ].join('⋮') + '⋮'
  );
}

export function escapeCursorChars(init: string) {
  return init
    .replaceAll(INDEX_PART_SEP, ESCAPE_INDEX_PART_SEP)
    .replaceAll(KEY_PART_SEP, ESCAPE_KEY_PART_SEP);
}

export function joinKeyParts(init: string[], options: JoinKeyPartsOptions) {
  return init
    .map((part) => {
      return options.destination === 'filter' ? part : escapeCursorChars(part);
    })
    .join('∙');
}

export function joinPKSK(
  init: { PK: string[]; SK: string[] | null },
  options: JoinKeyPartsOptions
) {
  const PKPart = joinKeyParts(init.PK, options);

  if (init.SK === null) {
    return PKPart; // the case when destination is a filter and SK is not informed
  }

  return [
    PKPart, //
    joinKeyParts(init.SK, options),
  ].join('⋮');
}

export interface InitIndexCursorWithParent extends InitIndexCursor {
  relatedTo: string;
}

export function _joinIndexCursorWithParent(
  init: InitIndexCursorWithParent,
  options: JoinKeyPartsOptions
) {
  const { entity, relatedTo } = nonNullValues(
    init,
    '_joinIndexCursorWithParent called with invalid parameters.'
  );

  const parentCursor = joinCursorPartsWithTrailingSeparator([
    relatedTo.toLowerCase(),
    init.name,
    joinKeyParts(init.PK, options),
  ]);

  return joinCursorPartsWithTrailingSeparator([
    parentCursor,
    entity.toLowerCase(),
    init.SK === null ? null : joinKeyParts(init.SK, options),
  ]);
}

export function joinCursorPartsWithTrailingSeparator(parts: (string | null)[]) {
  const _parts: string[] = parts
    .filter((el) => el !== null && el !== undefined)
    .map((el) => el!.replace(/(⋮*)$/, ''));

  const isLikePartialIndexFilter = _parts.length !== parts.length;

  if (isLikePartialIndexFilter) return _parts.join('⋮');

  return _parts.join('⋮') + '⋮';
}

export function splitCursorParts(init: string) {
  const duplicateRelationsToKeep = init.replace(/⊰/g, '⊰⊰');
  return stripTrailingIndexSep(duplicateRelationsToKeep).split(/[⋮⊰]/);
}

export function stripTrailingIndexSep(init: string) {
  return init.replace(/⋮$/, '');
}

export function cursorPrefixToRelationPrefix(init: string) {
  return init.replace(/⋮$/, RELATION_PRECEDES);
}

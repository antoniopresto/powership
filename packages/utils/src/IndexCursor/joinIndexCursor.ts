import { nonNullValues } from '../invariant';
import { devAssert } from '../devAssert';

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
  filter: Record<string, any>;
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

export const INDEX_PART_SEP_REGEX = new RegExp(`${INDEX_PART_SEP}`);
export const KEY_PART_SEP_REGEX = new RegExp(`${KEY_PART_SEP}`);

export function escapeCursorChars(init: string) {
  return init
    .replace(INDEX_PART_SEP_REGEX, ESCAPE_INDEX_PART_SEP)
    .replace(KEY_PART_SEP_REGEX, ESCAPE_KEY_PART_SEP);
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
    { entity: init.entity, relatedTo: init.relatedTo },
    'joinIndexCursorWithParent called with invalid parameters.'
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
  init = stripTrailingIndexSep(init);
  const temp = init.split(/⋮/);
  return temp
    .map((el) => {
      const parts = el.split('⊰');
      if (parts.length === 2) {
        return [parts[0] + '⊰', parts[1]];
      }
      if (parts.length > 2) devAssert(`Unexpected index part found ${el}.`);
      return el;
    })
    .flat();
}

export function stripTrailingIndexSep(init: string) {
  return init.replace(/⋮$/, '');
}

export function pushTrailingIndexSep(init: string) {
  return init + '⋮';
}

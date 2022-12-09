import { inspectObject, nonNullValues } from '@backland/utils';

import {
  cursorPrefixToRelationPrefix,
  INDEX_PART_SEP,
  InitIndexCursor,
  joinCursorPartsWithTrailingSeparator,
  joinIndexCursor,
  ParseCursorOptions,
  ParsedIndexCursor,
  RELATION_PRECEDES,
  splitCursorParts,
} from './joinIndexCursor';

export function parseIndexCursor(
  init: string | string[] | InitIndexCursor,
  options: ParseCursorOptions
): ParsedIndexCursor {
  const { parts, fullID } = (() => {
    if (typeof init === 'string') {
      return {
        parts: splitCursorParts(init),
        fullID: init,
      };
    }

    if (Array.isArray(init)) {
      return {
        parts: init,
        fullID: joinCursorPartsWithTrailingSeparator(init),
      };
    }

    const fullID = joinIndexCursor(init, options);

    return {
      fullID,
      parts: splitCursorParts(fullID),
    };
  })();

  const MIN_PARTS = 4;
  if (parts.length < MIN_PARTS) {
    throw new Error(
      `Invalid cursor, missing parts. ${inspectObject({
        MIN_PARTS,
        parts,
        fullID: init,
      })}`
    );
  }

  const isRelation = parts.length > 4;

  if (isRelation) {
    try {
      return _parseSubIndexCursor({
        parts: parts,
      });
    } catch (e: any) {
      e.message = `parseIndexCursor cannot parse child relation ${fullID} ${e.message}`;
      throw e;
    }
  } else {
    const [entity, name, PK, SK] = parts;

    const data = nonNullValues({ entity, name, PK, SK });

    const entityName = entity.toLowerCase();

    const PKPartOpen = [
      entityName,
      INDEX_PART_SEP,
      name,
      INDEX_PART_SEP,
      PK,
    ].join('');

    return {
      name: data.name,
      entity: entityName,
      PKPart: PKPartOpen + INDEX_PART_SEP,
      PKPartOpen: PKPartOpen,
      SKPart: SK,
      cursor: joinCursorPartsWithTrailingSeparator([PKPartOpen, SK]),
      relatedTo: null,
      parentPrefix: null,
    };
  }
}

export function _parseSubIndexCursor(init: {
  parts: string[];
  parentPrefix?: string;
}): ParsedIndexCursor {
  const { parts } = init;

  const { parentPrefix, childParts } = (() => {
    if (init.parentPrefix) {
      if (!init.parentPrefix.endsWith(RELATION_PRECEDES)) {
        throw new Error(`Expected ${init} to end with "${RELATION_PRECEDES}"`);
      }

      return {
        parentPrefix: init.parentPrefix,
        childParts: parts,
      };
    }

    const parentParts = parts.slice(0, -2);
    const childParts = parts.slice(-2);

    const parentPrefix = cursorPrefixToRelationPrefix(
      joinCursorPartsWithTrailingSeparator(parentParts)
    );

    return { parentPrefix, childParts };
  })();

  const [parentEntity, name] = splitCursorParts(parentPrefix);
  const [childEntity, SKPart, ...childRest] = childParts;

  nonNullValues({
    childEntity,
  });

  const PKPartOpen = [parentPrefix + childEntity].join('');
  const PKPart = PKPartOpen + INDEX_PART_SEP;

  const child: ParsedIndexCursor = {
    entity: childEntity,
    name,
    PKPart,
    PKPartOpen,
    SKPart,
    cursor: joinCursorPartsWithTrailingSeparator([PKPart, SKPart]),
    relatedTo: parentEntity,
    parentPrefix,
  };

  if (childRest.length) {
    return _parseSubIndexCursor({
      parts: childParts,
      parentPrefix: PKPartOpen + RELATION_PRECEDES,
    });
  }

  return child;
}

import { inspectObject } from '../inspectObject';
import { nonNullValues } from '../invariant';

import {
  INDEX_PART_SEP,
  InitIndexCursor,
  joinCursorPartsWithTrailingSeparator,
  joinIndexCursor,
  ParseCursorOptions,
  ParsedIndexCursor,
  RELATION_PRECEDES,
  splitCursorParts,
} from './joinIndexCursor';
import { parseIndexFieldName } from './parseIndexFieldName';

export const MIN_DOCUMENT_INDEX_KEY_PARTS = 4;
export const MIN_FILTER_INDEX_KEY_PARTS = 3;

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

  const MIN_PARTS =
    options.destination === 'filter'
      ? MIN_FILTER_INDEX_KEY_PARTS
      : MIN_DOCUMENT_INDEX_KEY_PARTS;

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
      return _parseSubIndexCursor(
        {
          parts: parts,
        },
        options
      );
    } catch (e: any) {
      e.message = `parseIndexCursor cannot parse child relation ${fullID} ${e.message}`;
      throw e;
    }
  } else {
    const [entity, name, PK, SK] = parts;
    return indexToCursor(
      { entity, name, PK, SK, relatedTo: undefined, parentPrefix: undefined },
      options
    );
  }
}

export function _parseSubIndexCursor(
  init: {
    parts: string[];
    parentPrefix?: string;
  },
  options: ParseCursorOptions
): ParsedIndexCursor {
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

    const parentPrefix = ((value) => {
      return value.endsWith('⊰')
        ? value // when coming from filter
        : value + '⊰'; //  when coming from a new document field
    })(parentParts.join('⋮'));

    return { parentPrefix, childParts };
  })();

  const [parentEntity, name] = splitCursorParts(parentPrefix);
  const [childEntity, SKPart, ...childRest] = childParts;

  nonNullValues({
    childEntity,
  });

  const PKPartOpen = [parentPrefix + childEntity].join('');
  const PKPart = PKPartOpen + INDEX_PART_SEP;

  const child = indexToCursor(
    {
      parentPrefix,
      relatedTo: parentEntity,
      SK: SKPart,
      PK: PKPart,
      name,
      entity: childEntity,
    },
    options
  );

  if (childRest.length) {
    return _parseSubIndexCursor(
      {
        parts: childParts,
        parentPrefix: PKPartOpen + RELATION_PRECEDES,
      },
      options
    );
  }

  return child;
}

export function indexToCursor(
  init: {
    name: string;
    entity: string;
    PK: string;
    SK: string | undefined;
    relatedTo: string | undefined;
    parentPrefix: string | undefined;
  },
  options: ParseCursorOptions
): ParsedIndexCursor {
  const { name, entity, PK, SK, relatedTo, parentPrefix } = init;
  const data = nonNullValues({ entity, name, PK });

  const entityName = entity.toLowerCase();

  const PKPartOpen = (() => {
    if (parentPrefix) return [parentPrefix, entityName];
    return [entityName, INDEX_PART_SEP, name, INDEX_PART_SEP, PK];
  })().join('');

  const PKFieldName = parseIndexFieldName(name, 'PK');
  const SKFieldName = parseIndexFieldName(name, 'SK');

  const cursor = joinCursorPartsWithTrailingSeparator([
    PKPartOpen,
    SK === undefined ? '' : SK,
  ]);

  const PKPart = PKPartOpen + INDEX_PART_SEP;

  const SKPart = (() => {
    if (SK === undefined && options.destination === 'filter') return null;
    return SK;
  })();

  const filter: Record<string, any> = {
    [PKFieldName]: PKPart,
  };

  if (SKPart !== null) {
    filter[SKFieldName] = SKPart;
  }

  return {
    name: data.name,
    entity: entityName,
    PKPart,
    PKPartOpen: PKPartOpen,
    SKPart,
    cursor,
    relatedTo: relatedTo || null,
    parentPrefix: parentPrefix || null,
    PKFieldName,
    SKFieldName,
    filter,
  };
}

import {
  _joinCursorParts,
  _splitCursorParts,
  INDEX_PART_SEP,
  InitCursorID,
  joinCursorID,
  ParsedCursorID,
} from './joinCursorID';
import { inspectObject, nonNullValues } from '@backland/utils';

export function parseCursorID(
  init: string | string[] | InitCursorID
): ParsedCursorID {
  //
  const { parts, fullID } = (() => {
    if (typeof init === 'string')
      return {
        parts: _splitCursorParts(init),
        fullID: init,
      };

    if (Array.isArray(init))
      return {
        parts: init,
        fullID: _joinCursorParts(init),
      };

    const fullID = joinCursorID(init);

    return {
      fullID,
      parts: _splitCursorParts(fullID),
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
      return _parseSubCursorID({
        parts: parts,
      });
    } catch (e: any) {
      e.message = `parseCursorID cannot parse child relation ${fullID} ${e.message}`;
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
      PK: data.PK.split('∙'),
      SK: data.SK.length ? data.SK.split('∙') : [],
      parent: null,
      PKPart: PKPartOpen + INDEX_PART_SEP,
      PKPartOpen: PKPartOpen,
      SKPart: SK,
      cursor: _joinCursorParts([PKPartOpen, SK]),
    };
  }
}

export function _parseSubCursorID(init: {
  parts: string[];
  parent?: ParsedCursorID;
}): ParsedCursorID {
  const { parts } = init;

  const { parent, childParts } = (() => {
    if (init.parent) {
      return {
        parent: init.parent,
        childParts: parts,
      };
    }

    const parentParts = parts.slice(0, -3);
    const childParts = parts.slice(-3);

    return {
      parent: parseCursorID(parentParts),
      childParts: childParts,
    };
  })();

  const [childEntity, PK, SK, ...childRest] = childParts;

  nonNullValues({
    childEntity,
    PK,
  });

  const child = parseCursorID([childEntity, parent.name, PK, SK]);

  const PKPartOpen = [parent.cursor, child.entity, INDEX_PART_SEP, PK].join('');

  const PKPart = PKPartOpen + INDEX_PART_SEP;

  child.PKPartOpen = PKPartOpen;
  child.PKPart = PKPart;
  child.cursor = `${PKPart}${child.SKPart}${INDEX_PART_SEP}`;

  child.parent = parent;
  child.parentCursor = parent.cursor;

  if (childRest.length) {
    return _parseSubCursorID({
      parts: childParts,
      parent: child,
    });
  }

  return child;
}

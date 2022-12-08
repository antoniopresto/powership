import {
  _joinCursorParts,
  _splitCursorParts,
  ParsedCursorID,
} from './joinCursorID';
import { inspectObject, nonNullValues } from '@backland/utils';

export function parseCursorID(init: string | string[]): ParsedCursorID {
  const parts = Array.isArray(init) ? init : _splitCursorParts(init);

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

  const [entity, name, PK, SK, ...rest] = parts;

  const data = nonNullValues({ entity, name, PK, SK });

  const fullID = Array.isArray(init) ? _joinCursorParts(init) : init;

  const current: ParsedCursorID = {
    name: data.name,
    entity: data.entity,
    PK: data.PK.split('∙'),
    SK: data.SK.length ? data.SK.split('∙') : [],
    parent: null,
    cursor: fullID,
  };

  if (!rest.length) {
    return current;
  }

  try {
    return _parseSubCursorID({
      fullID,
      parent: current,
      parts: rest,
    });
  } catch (e: any) {
    e.message = `parseCursorID can not parse child relation ${fullID} ${e.message}`;
    throw e;
  }
}

export function _parseSubCursorID(init: {
  parent: ParsedCursorID;
  parts: string[];
  fullID: string;
}): ParsedCursorID {
  const { parent, fullID, parts } = init;

  const [childEntity, PK, SK, ...childRest] = parts;

  nonNullValues({
    childEntity,
    PK,
    SK,
  });

  const child = parseCursorID([childEntity, parent.name, PK, SK]);

  const childLength = _joinCursorParts([childEntity, PK, SK, ...childRest]);

  const parentID = parent.cursor.slice(0, childLength.length * -1);

  child.cursor = fullID;
  parent.cursor = parentID;
  child.parent = parent;
  child.parentCursor = parentID;

  if (childRest.length) {
    return _parseSubCursorID({
      parts: childRest,
      parent: child,
      fullID: fullID,
    });
  }

  return child;
}

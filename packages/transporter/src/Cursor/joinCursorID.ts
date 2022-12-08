import { inspectObject, nonNullValues } from '@backland/utils';

export interface InitCursorID {
  PK: string[];
  SK: string[];
  entity: string;
  name: string;
  relatedTo?: string;
  parentCursor?: string;
}

export interface ParsedCursorID extends InitCursorID {
  PK: string[];
  SK: string[];
  entity: string;
  name: string;
  parent: ParsedCursorID | null;
  cursor: string;
}

export function joinCursorID(init: InitCursorID) {
  if (init.parentCursor || init.relatedTo) {
    const { parentCursor, relatedTo } = nonNullValues(
      { parentCursor: init.parentCursor, relatedTo: init.relatedTo },
      'joinCursorID expects parameters "parentCursor" and "relatedTo" to be provided together' +
        inspectObject({ init })
    );

    return _joinCursorIDWithParent({
      ...init,
      parentCursor,
      relatedTo,
    });
  }

  const { entity, name } = init;

  return (
    [
      entity.toLowerCase(),
      name,
      joinPKSK(init), //
    ].join('⋮') + '⋮'
  );
}

export function joinPKSK(init: { PK: string[]; SK: string[] }) {
  return [init.PK.join('∙'), init.SK.join('∙')].join('⋮');
}

export interface InitCursorIDWithParent extends InitCursorID {
  relatedTo: string;
  parentCursor: string;
}

export function _joinCursorIDWithParent(init: InitCursorIDWithParent) {
  const { entity, parentCursor } = nonNullValues(
    init,
    '_joinCursorIDWithParent called with invalid parameters.'
  );

  const expectedStartsWith =
    parentCursor.split('⋮').slice(0, 2).join('⋮') + '⋮';

  if (
    !parentCursor.match(/.[^⋮]⋮$/) ||
    !expectedStartsWith.startsWith(expectedStartsWith)
  ) {
    throw new Error(
      'joinIndexWithParent found different entities or index to join: ' +
        inspectObject({
          expectedStartsWith,
          parentCursor,
          init,
        })
    );
  }

  const parentWithoutCloser = parentCursor.replace(/⋮$/, '');

  return (
    [parentWithoutCloser, entity.toLowerCase(), joinPKSK(init)].join('⋮') + '⋮'
  );
}

export function _joinCursorParts(parts: string[]) {
  return parts.join('⋮') + '⋮';
}

export function _splitCursorParts(init: string) {
  return init.replace(/⋮$/, '').split('⋮');
}

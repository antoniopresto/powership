import { assertSame } from '@backland/utils/lib/assertSame';

import { parseObjectDefinition } from './parseObjectDefinition';

export function assertSameDefinition(id: string, a: any, b: any) {
  a = parseObjectDefinition(a, {
    deep: { omitMeta: true },
    omitMeta: true,
  }).definition;

  b = parseObjectDefinition(b, {
    deep: { omitMeta: true },
    omitMeta: true,
  }).definition;

  assertSame(
    `An Object with name "${id}" is already registered with another definition.`,
    a,
    b
  );
}

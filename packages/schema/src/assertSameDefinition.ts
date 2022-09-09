import { assertSame } from '@brabo/utils/lib/assertSame';

import { ObjectDefinitionInput } from './fields/_parseFields';
import { parseObjectDefinition } from './parseObjectDefinition';

export function assertSameDefinition(
  id: string,
  a: ObjectDefinitionInput,
  b: ObjectDefinitionInput
) {
  a = parseObjectDefinition(a, { omitMeta: true }).definition;
  b = parseObjectDefinition(b, { omitMeta: true }).definition;

  assertSame(
    `An Object with name "${id}" is already registered with another definition.`,
    a,
    b
  );
}

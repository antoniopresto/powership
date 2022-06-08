import { AssertionError } from 'assert';

import { areEqual } from '@darch/utils/lib/areEqual';
import { assertSame } from '@darch/utils/lib/assertSame';

import {
  FinalFieldDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';
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

export function assertSameField(
  path: string,
  a: FinalFieldDefinition,
  b: FinalFieldDefinition
) {
  if (!areEqual(a, b)) {
    throw new AssertionError({
      expected: a,
      actual: b,
      message: `Different definitions to the same field "${path}"`,
    });
  }
}

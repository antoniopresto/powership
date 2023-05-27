import { CircularDeps } from '../CircularDeps';

import type { FieldTypeName } from './_fieldDefinitions';
import type { types } from './fieldTypes';

export function assertFieldInstance<Field extends FieldTypeName>(
  field: Field,
  input: any
): asserts input is InstanceType<(typeof types)[Field]> {
  if (!(input instanceof CircularDeps.types[field])) {
    throw new Error(
      `Expected input to be instance of "${CircularDeps.types[field].name}"`
    );
  }
}

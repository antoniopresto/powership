import { assert, IsExact } from 'conditional-type-checks';

import { KNOWN_UNKNOWN_OBJECT } from '../_parseFields';
import { InferField } from '../_parseFields';

test('KNOWN_UNKNOWN_OBJECT', () => {
  type TUnion = InferField<KNOWN_UNKNOWN_OBJECT>;
  assert<IsExact<TUnion, Record<string, any>>>(true);
});

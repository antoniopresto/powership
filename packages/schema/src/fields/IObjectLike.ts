import { LazyParseGraphTypePayload } from '../GraphType/GraphType';

import { FinalFieldDefinition } from './_parseFields';

export interface ObjectLike {
  __isPowershipObject: true;
  definition: { [K: string]: any };
}

export interface GraphTypeLike {
  __isGraphType: true;
  __lazyGetter: LazyParseGraphTypePayload;
  definition: FinalFieldDefinition;
  readonly id: string;
  readonly optionalId: string | undefined;
}

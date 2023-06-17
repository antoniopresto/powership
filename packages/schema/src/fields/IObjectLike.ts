import { LazyParseGraphTypePayload } from '../GraphType/GraphType';

import { FinalFieldDefinition } from './_parseFields';

export interface ObjectLike {
  __isSolarwindObject: true;
  definition: any;
  [K: string]: any;
}

export interface GraphTypeLike {
  __isGraphType: true;
  __lazyGetter: LazyParseGraphTypePayload;
  definition: FinalFieldDefinition;
  readonly id: string;
  readonly optionalId: string | undefined;
  [K: string]: any;
}

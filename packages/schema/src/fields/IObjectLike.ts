import type { AnyRecord } from '@powership/utils';

import type { LazyParseGraphTypePayload } from '../GraphType/GraphType';

import { FieldParserConfig } from '../validator';

export interface ObjectLike {
  __isPowershipObject: true;
  definition: { [K: string]: any };
}

export interface GraphTypeLike {
  __isGraphType: true;
  __lazyGetter: LazyParseGraphTypePayload;
  definition: AnyRecord;
  readonly id: string;
  readonly optionalId: string | undefined;
  parse(value: any, options?: FieldParserConfig): any;
}

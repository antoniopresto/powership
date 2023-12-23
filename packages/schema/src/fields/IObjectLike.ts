import { AnyRecord } from '@powership/utils';

import { LazyParseGraphTypePayload } from '../GraphType/GraphType';
import { FieldParserConfig } from '../applyValidator';

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

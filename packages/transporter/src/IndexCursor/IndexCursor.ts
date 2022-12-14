import {
  escapeCursorChars,
  joinCursorPartsWithTrailingSeparator,
  joinIndexCursor,
  joinKeyParts,
  joinPKSK,
  stripTrailingIndexSep,
} from './joinIndexCursor';
import { parseIndexCursor } from './parseIndexCursor';

export type { InitIndexCursor, ParsedIndexCursor } from './joinIndexCursor';

export const IndexCursor = {
  join: joinIndexCursor,
  joinCursorPartsWithTrailingSeparator,
  stripTrailingIndexSep,
  joinPKSK,
  joinKeyParts,
  escape: escapeCursorChars,
  parse: parseIndexCursor,
};

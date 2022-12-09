import {
  cursorPrefixToRelationPrefix,
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
  prefixToRelationPrefix: cursorPrefixToRelationPrefix,
  joinPKSK,
  joinKeyParts,
  escape: escapeCursorChars,
  parse: parseIndexCursor,
};

import {
  escapeCursorChars,
  joinCursorID,
  joinKeyParts,
  joinPKSK,
} from './joinCursorID';

import { parseCursorID } from './parseCursorID';

export type { InitCursorID, ParsedCursorID } from './joinCursorID';

export const CursorID = {
  join: joinCursorID,
  joinPKSK,
  joinKeyParts,
  escape: escapeCursorChars,
  parse: parseCursorID,
};

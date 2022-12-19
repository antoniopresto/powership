import { base64ToText, textToBase64 } from '../textToBase64';
import { NodeLogger } from '../nodeLogger';
import { ParsedIndexCursor } from './joinIndexCursor';
import { IndexCursor } from './IndexCursor';

export const CURSOR_PREFIX = '~!';

// a base64 encoded version of the id created by mountId
export function mountGraphID({ cursor }: { cursor: string }) {
  if (cursor.startsWith(CURSOR_PREFIX)) return cursor;
  return `${CURSOR_PREFIX}${textToBase64(cursor)}`;
}

export function parseFilterCursor(
  initFullID: string
): ParsedIndexCursor | null {
  try {
    let fullID = initFullID.startsWith(CURSOR_PREFIX)
      ? base64ToText(initFullID.slice(1))
      : initFullID;
    return IndexCursor.parse(fullID, { destination: 'filter' });
  } catch (e) {
    NodeLogger.logError(e);
    throw new Error('INVALID_ID');
  }
}

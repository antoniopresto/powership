// https://github.com/facebook/react/blob/3e94bce765d355d74f6a60feb4addb6d196e3482/packages/react-dom/src/server/ReactThreadIDAllocator.js#L13-L12
// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indexes can be used to reference a tightly packed array. As opposed to being used in a Map.
// The first allocated index is 1.

import { invariant } from './invariant';

type ThreadID = number;

let nextAvailableThreadIDs = new Uint16Array(16);
for (let i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}
nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  const oldArray = nextAvailableThreadIDs;
  const oldSize = oldArray.length;
  const newSize = oldSize * 2;
  invariant(
    newSize <= 0x10000,
    'Maximum number of concurrent threads exceeded. '
  );
  const newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;
  for (let i = oldSize; i < newSize - 1; i++) {
    nextAvailableThreadIDs[i] = i + 1;
  }
  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

export function allocThreadID(): ThreadID {
  const nextID = nextAvailableThreadIDs[0];
  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }
  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}

export function freeThreadID(id: ThreadID) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

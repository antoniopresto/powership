import { CacheContext } from './IMongoDataLoader';
import { MongoDataLoader } from './MongoDataLoader';

// create or retrieve a dataloader
// based on collection + onlyOne + fields + sort.
// see hashMongoDLQuery
export function getMongoDataloader(
  // cacheContext:
  //   Any key-value object where the dataloaders will be appended
  //   to make a new query ignoring the previous cached queries just pass
  //   a new cacheContext
  cacheContext: CacheContext,

  dataloaderHash: string // from parseMongoDLOptions
): MongoDataLoader {
  if (!cacheContext || typeof cacheContext !== 'object') {
    throw new Error(`invalid cacheContext`);
  }

  cacheContext.__mongoDataloader = cacheContext.__mongoDataloader || {};

  if (!cacheContext.__mongoDataloader[dataloaderHash]) {
    cacheContext.__mongoDataloader[dataloaderHash] = new MongoDataLoader();
  }

  return cacheContext.__mongoDataloader[dataloaderHash];
}

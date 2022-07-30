import { hashObject } from '@darch/utils/lib/hashObject';

import { MongoDataLoaderKey, MongoLoadQueryParams } from './IMongoDataLoader';

export type ParsedMongoDLParams = ReturnType<typeof parseMongoDLParams>;

export function parseMongoDLParams(options: MongoLoadQueryParams) {
  const dataloaderHash = hashObject({
    collection: options.collection,
    onlyOne: options.onlyOne,
    projection: options.projection,
    sort: options.sort,
  });

  const queryHash = hashObject(options.query);

  // the config used to make or retrieve the query
  const dataLoaderKey: MongoDataLoaderKey = {
    db: options.db,
    query: options.query,
    queryHash: queryHash,
    dataloaderHash: dataloaderHash,
    collection: options.collection,
    onlyOne: !!options.onlyOne,
    projection: options.projection,
    sort: options.sort,
  };

  return {
    dataloaderHash,
    queryHash,
    dataLoaderKey,
    _isParsed: true,
  };
}

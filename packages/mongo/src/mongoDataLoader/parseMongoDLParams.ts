import { BJSON } from '@backland/utils/lib/BJSON';
import { hashObject } from '@backland/utils/lib/hashObject';
import { ObjectId } from 'mongodb';

import { MongoDataLoaderKey, MongoFindManyParams } from './IMongoDataLoader';

export type ParsedMongoDLParams = ReturnType<typeof parseMongoDLParams>;

export function parseMongoDLParams(options: MongoFindManyParams) {
  const dataloaderHash = hashObject({
    collection: options.collection,
    onlyOne: options.onlyOne,
    projection: options.projection,
    sort: options.sort,
  });

  const queryHash = BJSON.stringify(options.query, {
    handler({ value, serializer }) {
      if (serializer) return undefined;
      if (!isObjectId(value)) return undefined;
      return value.toHexString();
    },
  });

  // the config used to make or retrieve the query
  const dataLoaderKey: MongoDataLoaderKey = {
    collection: options.collection,
    dataloaderHash: dataloaderHash,
    db: options.db,
    onlyOne: !!options.onlyOne,
    projection: options.projection,
    query: options.query,
    queryHash: queryHash,
    sort: options.sort,
  };

  return {
    _isParsed: true,
    dataLoaderKey,
    dataloaderHash,
    queryHash,
  };
}

export function isObjectId(input: any): input is ObjectId {
  return typeof input?.toHexString === 'function' && !!input.id;
}

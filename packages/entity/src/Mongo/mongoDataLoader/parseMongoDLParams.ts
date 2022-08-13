import { DarchJSON } from '@darch/utils/lib/DarchJSON';
import { hashObject } from '@darch/utils/lib/hashObject';
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

  const queryHash = DarchJSON.stringify(options.query, {
    handler({ value, serializer }) {
      if (serializer) return undefined;
      if (!isObjectId(value)) return undefined;
      return value.toHexString();
    },
  });

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

export function isObjectId(input: any): input is ObjectId {
  return typeof input?.toHexString === 'function' && !!input.id;
}

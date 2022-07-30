import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { CacheContext, MongoLoadQueryParams } from './IMongoDataLoader';
import { getMongoDataloader } from './getMongoDataloader';
import { parseMongoDLParams } from './parseMongoDLParams';

export function mongoLoadById(
  options: Omit<MongoLoadQueryParams, 'query' | 'sort' | 'onlyOne'> & {
    id: any;
  },
  cacheContext: CacheContext
) {
  const { id, ...rest } = options;

  return mongoLoadQuery(
    {
      ...rest,
      query: { _id: id },
      onlyOne: true,
    },
    cacheContext
  );
}

export function mongoLoadByIds(
  options: Omit<MongoLoadQueryParams, 'query' | 'sort' | 'onlyOne'> & {
    ids: any[];
  },
  cacheContext: CacheContext
) {
  const { ids, ...rest } = options;

  return Promise.all(
    ids.map((id) => {
      return mongoLoadById(
        {
          ...rest,
          id,
        },
        cacheContext
      );
    })
  );
}

export function mongoLoadQuery(
  options: MongoLoadQueryParams,
  dataloaderContext?: CacheContext | null
) {
  if (!dataloaderContext || typeof dataloaderContext !== 'object') {
    throw new RuntimeError(`Invalid dataloaderContext`, { dataloaderContext });
  }

  const config = parseMongoDLParams(options);

  const dataloader = getMongoDataloader(dataloaderContext, config.dataloaderHash);

  return dataloader.loadQuery(config);
}

import { RuntimeError } from '@darch/utils/lib/RuntimeError';

import { CacheContext, MongoFindManyParams } from './IMongoDataLoader';
import { getMongoDataloader } from './getMongoDataloader';
import { parseMongoDLParams } from './parseMongoDLParams';

export function mongoLoadById(
  options: Omit<MongoFindManyParams, 'query' | 'sort' | 'onlyOne'> & {
    id: any;
  },
  cacheContext: CacheContext
) {
  const { id, ...rest } = options;

  return mongoFindMany(
    {
      ...rest,
      query: { _id: id },
      onlyOne: true,
    },
    cacheContext
  );
}

export function mongoLoadByIds(
  options: Omit<MongoFindManyParams, 'query' | 'sort' | 'onlyOne'> & {
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

export function mongoFindMany(
  options: MongoFindManyParams,
  context?: CacheContext | null
) {
  if (!context || typeof context !== 'object') {
    throw new RuntimeError(`Invalid context`, { context });
  }

  const config = parseMongoDLParams(options);

  const dataloader = getMongoDataloader(context, config.dataloaderHash);

  return dataloader.findMany(config);
}

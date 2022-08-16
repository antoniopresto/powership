import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import DataLoader from 'dataloader';
import sift from 'sift';

import {
  MongoDataLoaderKey,
  MongoDataLoaderOptions,
  MongoFindManyParams,
} from './IMongoDataLoader';
import { ParsedMongoDLParams, parseMongoDLParams } from './parseMongoDLParams';

export class MongoDataLoader {
  private _dataloader: DataLoader<MongoDataLoaderKey, any, string>;
  private _dataloaderHash?: string;

  constructor(options: MongoDataLoaderOptions = {}) {
    this._dataloader = new DataLoader(
      (queries) => {
        return this.fetchData(queries);
      },
      {
        ...options,

        cacheKeyFn: (key) => {
          this.validateDataloaderHash(key);
          return key.queryHash;
        },
      }
    );
  }

  findMany = (
    params: ParsedMongoDLParams | MongoFindManyParams
  ): Promise<any> & { __usedParameters: ParsedMongoDLParams } => {
    const parsedOptions = ensureParsedParams([params])[0];
    const result: any = this._dataloader.load(parsedOptions.dataLoaderKey);

    Object.defineProperty(result, '__usedParameters', {
      get() {
        return params;
      },
    });

    return result;
  };

  loadManyQueries = (
    options: ParsedMongoDLParams[] | MongoFindManyParams[]
  ): Promise<any> & { __usedParameters: ParsedMongoDLParams[] } => {
    const parsedOptions = ensureParsedParams(options);

    const result: any = this._dataloader.loadMany(
      parsedOptions.map((el) => el.dataLoaderKey)
    );

    Object.defineProperty(result, '__usedParameters', {
      get() {
        return parsedOptions;
      },
    });

    return result;
  };

  // when a query doesn't have `limit` or `skip`, we can fetch the data
  // joining all queries into a $or and then separating the results
  fetchData = async (
    queryList: readonly MongoDataLoaderKey[]
  ): Promise<any[]> => {
    let condition: any = { $or: [] };

    const { sort, projection, collection, db } = queryList[0];

    queryList.forEach((el) => {
      condition.$or.push(el.query);
    });

    let cursor = db
      .collection(collection)
      .find(condition, { sort, projection });

    let queryResult = await cursor.toArray();

    return queryList.map((key) => {
      if (!queryResult || !queryResult.filter) return undefined;

      const curr = queryResult.filter(sift(key.query));

      return key.onlyOne ? curr[0] : curr;
    });
  };

  // checks if the same dataloader is used to load more than one query config,
  // using different sort, projection or collection
  private validateDataloaderHash(key: MongoDataLoaderKey) {
    this._dataloaderHash = this._dataloaderHash || key.dataloaderHash;

    if (this._dataloaderHash !== key.dataloaderHash) {
      throw new RuntimeError(
        'MongoDataLoader: using more than one configuration for the same dataloader.' +
          '\n Check if the query.projection, query.collection and query.sort are equal between all grouped queries.',
        {
          currentHash: this._dataloaderHash,
          incomingHash: key.dataloaderHash,
        },
        1
      );
    }
  }
}

function ensureParsedParams(
  opt: (ParsedMongoDLParams | MongoFindManyParams)[]
): ParsedMongoDLParams[] {
  return opt.map((item) => {
    if (isParsed(item)) return item;
    return parseMongoDLParams(item);
  });
}

function isParsed(el: any): el is ParsedMongoDLParams {
  return !!(el && el._isParsed);
}
import DataLoader from 'dataloader';
import { Db } from 'mongodb';

export type CacheContext = Record<string, any>;

// input object to call mongoLoadQuery
export interface MongoLoadQueryParams {
  db: Db;
  query: Record<string, any>;
  collection: string;
  onlyOne?: boolean;
  projection?: object;
  sort?: object;
}

export type MongoDataLoaderOptions = DataLoader.Options<MongoDataLoaderKey, any, string>;

export interface MongoDataLoaderKey {
  db: Db;
  query: Record<string, any>;
  queryHash: string; // from hashMongoCursor
  dataloaderHash: string; // from hashMongoCursor
  collection: string;
  onlyOne: boolean;
  projection?: Record<string, any>;
  sort?: Record<string, any>;
}

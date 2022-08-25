import DataLoader from 'dataloader';
import { Db } from 'mongodb';

export type CacheContext = Record<string, any>;

// input object to call mongoFindMany
export interface MongoFindManyParams {
  collection: string;
  db: Db;
  onlyOne?: boolean;
  projection?: object;
  query: Record<string, any>;
  sort?: object;
}

export type MongoDataLoaderOptions = DataLoader.Options<
  MongoDataLoaderKey,
  any,
  string
>;

export interface MongoDataLoaderKey {
  // from hashMongoCursor
  collection: string;
  // from hashMongoCursor
  dataloaderHash: string;
  db: Db;
  onlyOne: boolean;
  projection?: Record<string, any>;
  query: Record<string, any>;
  queryHash: string;
  sort?: Record<string, any>;
}

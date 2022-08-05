import { Filter } from 'mongodb';

import {
  DocumentBase,
  LoadQueryConfig,
  PutItemConfig,
  Transporter,
  UpdateItemConfig,
  PutItemResult,
  UpdateItemResult,
  LoadQueryResult,
  GetItemConfig,
  GetItemResult,
  DeleteItemConfig,
  DeleteItemResult,
} from '../Transporter/Transporter';

import { MongoClient } from './MongoClient';

import { mongoLoadQuery } from './mongoDataLoader/mongoLoadQuery';

import {
  parseMongoAttributeFilters,
  createMongoIndexBasedFilters,
} from './parseMongoAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';
import { Logger } from '@darch/utils/lib/logger';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';

export class MongoTransporter extends Transporter {
  _client: MongoClient;

  get db() {
    return this._client.db;
  }

  connect(dbName?: string) {
    return this._client.connect(dbName);
  }

  constructor(options: { collection: string; client: MongoClient }) {
    super();
    this._client = options.client;
    this.collection = options.collection;
  }

  collection: string;

  // TODO condition
  async loadQuery<T extends DocumentBase>(
    options: LoadQueryConfig
  ): Promise<LoadQueryResult> {
    const { query: queryConfig } = options;

    let {
      filter,
      sort = 'ASC',
      projection,
      limit,
      startingKey,
      indexConfig,
    } = queryConfig;

    const $and: Filter<any>[] = createMongoIndexBasedFilters({
      filter,
      indexConfig,
    });

    if (startingKey) {
      const rule = sort === 'DESC' ? '$lt' : '$gt';

      const startingFilter = createMongoIndexBasedFilters({
        filter: startingKey,
        indexConfig,
      });

      const [[key, value]] = Object.entries(startingFilter[0]);

      $and.push({
        [key]: { [rule]: value },
      });
    }

    const query = { $and };
    Logger.logInfo({ query });

    const collection = this.getCollection(filter);

    const idField = Object.keys($and[0])[0];
    const mongoSort = { [idField]: sort === 'DESC' ? -1 : 1 } as const;

    let items: any[] = [];

    if (limit !== undefined && limit > 1) {
      items = await collection
        .find(query, { sort: mongoSort, projection, limit })
        .toArray();
    } else {
      const onlyOne = limit === 1;

      const result = await mongoLoadQuery(
        {
          db: this._client.db,
          query,
          collection: collection.collectionName,
          projection: projection,
          onlyOne,
          sort: mongoSort,
        },
        options.dataloaderContext
      );

      if (result) {
        items = onlyOne ? [result] : result;
      }
    }

    return { items };
  }

  // TODO condition
  async getItem<T extends DocumentBase>(
    options: GetItemConfig
  ): Promise<GetItemResult> {
    const {
      query: { filter, projection, consistent, indexConfig },
      dataloaderContext,
    } = options;

    const { items } = await this.loadQuery<T>({
      dataloaderContext,
      query: {
        filter,
        projection,
        consistent,
        limit: 1,
        indexConfig,
      },
    });

    return {
      item: items?.[0] ?? null,
    };
  }

  async putItem<T extends DocumentBase>(
    options: PutItemConfig<T>
  ): Promise<PutItemResult<T>> {
    const { item: itemInput, indexConfig, replace = false } = options;

    const res: PutItemResult<T> = {
      created: false,
      updated: false,
      item: null,
      // error: undefined,
    };

    const indexMap = this.getDocumentIndexFields(itemInput, indexConfig);

    if (indexMap.error) {
      res.error = indexMap.error.detailsString;
      return res;
    }

    const item = { ...indexMap.indexFields, ...itemInput } as T;

    const collection = this.getCollection(item);

    const conditionExpression: Filter<any> = simpleObjectClone(
      indexMap.indexFields
    );

    if (options.condition) {
      conditionExpression.$and = conditionExpression.$and || [];
      conditionExpression.$and.push(
        ...parseMongoAttributeFilters(options.condition)
      );
    }

    try {
      if (replace) {
        const result = await collection.replaceOne(conditionExpression, item, {
          upsert: true,
          hint: { _id: 1 },
        });

        const updated = result?.matchedCount === 1;

        res.created = !updated;
        res.updated = updated;
        res.item = item;
      } else {
        await collection.insertOne(item);
        res.created = true;
        res.item = item;
      }
    } catch (e: any) {
      res.error = e.message;
    }

    return res;
  }

  getCollection(_info: unknown) {
    return this._client.db.collection(this.collection);
  }

  async updateItem<T extends DocumentBase>(
    options: UpdateItemConfig<string, T>
  ): Promise<UpdateItemResult<T>> {
    const { update, upsert, indexConfig, filter, condition } = options;

    const parsedFilter = this.createDocumentIndexBasedFilters(
      filter,
      indexConfig
    );

    const parsedUpdate = this.parseUpdateExpression(update, indexConfig);
    const updateExpression = parseMongoUpdateExpression(parsedUpdate);
    const collection = this.getCollection(parsedFilter);

    if (condition) {
      parsedFilter.push(...parseMongoAttributeFilters(condition));
    }

    try {
      const result = await collection.findOneAndUpdate(
        { $and: parsedFilter },
        updateExpression,
        {
          upsert,
          returnDocument: 'after',
        }
      );

      const { updatedExisting, upserted } = result.lastErrorObject || {};

      return {
        item: result.value as any,
        created: !!upserted,
        updated: !!updatedExisting,
        // error: result.lastErrorObject
      };
    } catch (e: any) {
      return {
        item: null,
        error: e.message,
        updated: false,
        created: false,
      };
    }
  }

  async deleteItem<T extends DocumentBase, IndexFieldKeys extends keyof T>(
    options: DeleteItemConfig<Extract<IndexFieldKeys, string>, T>
  ): Promise<DeleteItemResult<T>> {
    const { indexConfig, condition, filter } = options;

    const parsedFilter = this.createDocumentIndexBasedFilters(
      filter,
      indexConfig
    );

    const collection = this.getCollection(parsedFilter);

    if (condition) {
      parsedFilter.push(...parseMongoAttributeFilters(condition));
    }

    const { value } = await collection.findOneAndDelete({ $and: parsedFilter });

    return { item: value as any };
  }
}

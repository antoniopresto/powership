import { maybeRequired } from '@darch/utils/lib/maybeRequired';
import { pluralize } from '@darch/utils/lib/pluralize';

import { Filter, UpdateFilter } from 'mongodb';

import {
  DeleteItemConfig,
  DocumentBase,
  GetItemConfig,
  PKSKValueType,
  LoadQueryConfig,
  PutItemConfig,
  Transporter,
  UpdateItemConfig,
  PutItemResult,
  UpdateItemResult,
} from '../Transporter/Transporter';

import { MongoClient } from './MongoClient';

import { mongoLoadQuery } from './mongoDataLoader/mongoLoadQuery';

import { parseAttributeFilters } from './parseAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';
import { RuntimeError } from '@darch/utils/lib/RuntimeError';

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

  //
  // async loadQuery<T extends DocumentBase<any>>(
  //   options: LoadQueryConfig
  // ): Promise<{ items: T[] }> {
  //   const { query: queryConfig } = options;
  //
  //   let {
  //     SK,
  //     SKType,
  //     sort = 'ASC',
  //     projection,
  //     limit,
  //     startingKey,
  //   } = queryConfig;
  //
  //   SKType = maybeRequired({ SKType }, SK !== null);
  //
  //   const collection = this.collectionFromPK(queryConfig.PK);
  //
  //   const query = hashToMongoQuery({
  //     PK: queryConfig.PK,
  //     SK,
  //     SKType,
  //     sort,
  //     startingKey,
  //   });
  //
  //   Logger.logInfo({ query });
  //
  //   const mongoSort = { _id: sort === 'DESC' ? -1 : 1 } as const;
  //
  //   let items: any[] = [];
  //
  //   if (limit !== undefined && limit > 1) {
  //     items = await collection
  //       .find(query, { sort: mongoSort, projection, limit })
  //       .toArray();
  //   } else {
  //     const onlyOne = limit === 1;
  //
  //     const result = await mongoLoadQuery(
  //       {
  //         db: this._client.db,
  //         query,
  //         collection: collection.collectionName,
  //         projection: projection,
  //         onlyOne,
  //         sort: mongoSort,
  //       },
  //       options.dataloaderContext
  //     );
  //
  //     if (result) {
  //       items = onlyOne ? [result] : result;
  //     }
  //   }
  //
  //   return { items };
  // }
  //
  // async getItem<T extends DocumentBase>(
  //   options: GetItemConfig
  // ): Promise<{ item: T | null }> {
  //   const {
  //     query: { PK, SK, SKType, projection, consistent },
  //     dataloaderContext,
  //   } = options;
  //
  //   const { items } = await this.loadQuery<T>({
  //     dataloaderContext,
  //     query: {
  //       SK,
  //       SKType,
  //       PK,
  //       projection,
  //       consistent,
  //       limit: 1,
  //     },
  //   });
  //
  //   return {
  //     item: items?.[0] ?? null,
  //   };
  // }

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

    const indexMap = this.getIndexMapper(indexConfig)(itemInput);

    if (indexMap.error) {
      res.error = indexMap.error.detailsString;
      return res;
    }

    const item = { ...indexMap.indexFields, ...itemInput } as T;

    const collection = this.getCollection(item);

    const conditionExpression: Filter<any> = indexMap.indexFields;

    if (options.condition) {
      conditionExpression.$and = parseAttributeFilters(options.condition);
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
    const { update, upsert, indexConfig, condition, filter } = options;

    const indexMap = this.getIndexMapper(indexConfig)(filter as any);

    if (!indexMap.firstIndex) {
      return {
        item: null,
        updated: false,
        created: false,
        error: indexMap.error!.detailsString,
      };
    }

    const parsedFilter = indexMap.firstIndex;
    const updateExpression = parseMongoUpdateExpression(update);
    const collection = this.getCollection(parsedFilter);

    const conditionExpression: Filter<any> = {
      [parsedFilter.key]: parsedFilter.value,
    };

    if (options.condition) {
      conditionExpression.$and = parseAttributeFilters(options.condition);
    }

    try {
      const result = await collection.findOneAndUpdate(
        conditionExpression,
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

  // async deleteItem<T extends DocumentBase>(
  //   options: DeleteItemOptions
  // ): Promise<{ item: T | null }> {
  //   const collection = this.collectionFromPK(options.PK);
  //   const conditionExpression = this._parseItemConditionExpression(options);
  //   const { value } = await collection.findOneAndDelete(conditionExpression);
  //   return { item: value as any };
  // }
}

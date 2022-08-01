import { maybeRequired } from '@darch/utils/lib/maybeRequired';
import { pluralize } from '@darch/utils/lib/pluralize';

import { Filter, UpdateFilter } from 'mongodb';

import {
  DeleteItemOptions,
  DocumentBase,
  GetItemConfig,
  PKSKValueType,
  LoadQueryConfig,
  PutItemOptions,
  Transporter,
  UpdateItemConfig,
} from '../Transporter/Transporter';

import { MongoClient } from './MongoClient';

import { mongoLoadQuery } from './mongoDataLoader/mongoLoadQuery';

import { parseAttributeFilters } from './parseAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';
import { createDocumentIndexMapper } from '../Transporter/DocumentIndex';

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
    options: PutItemOptions<T>
  ): Promise<{
    updated: boolean;
    created: boolean;
    item: T | null;
    original: any;
    error: string | undefined;
  }> {
    const { item: itemInput, replace = false, indexConfig } = options;

    const { indexFields, indexFieldKeys } =
      createDocumentIndexMapper(indexConfig)(itemInput);

    const item = { ...indexFields, ...itemInput };

    const collection = this.getCollection(item);

    const conditionExpression: Filter<any> = indexFields;

    if (options.condition) {
      conditionExpression.$and = parseAttributeFilters(options.condition);
    }

    let result: any;
    let __error: any;

    try {
      if (replace === false) {
        //
        const indexExists = indexFieldKeys.reduce(
          (previousValue, field) => ({
            ...previousValue,
            [field]: { $exists: false },
          }),
          {}
        );

        conditionExpression.$and = [
          ...(conditionExpression.$and || []),
          indexExists,
        ];
      }

      result = await collection.replaceOne(conditionExpression, item, {
        upsert: true,
      });
    } catch (e: any) {
      __error = e;
    }

    const updated = result?.modifiedCount === 1;
    const created = Boolean(result && !result.modifiedCount);

    const res = {
      updated: updated,
      created: created,
      item: created || updated ? item : null,
      error: __error?.message,
    };

    Object.defineProperties(res, {
      __error: {
        get() {
          return __error;
        },
      },
      original: {
        get() {
          return result;
        },
      },
    });

    return res as any;
  }

  getCollection(_info: unknown) {
    return this._client.db.collection(this.collection);
  }

  // async updateItem<T extends DocumentBase>(
  //   options: UpdateItemConfig<T>
  // ): Promise<{ item: T | null; updated: boolean; created: boolean }> {
  //   const { update, upsert, PK } = options;
  //   const updateExpression: UpdateFilter<any> =
  //     parseMongoUpdateExpression(update);
  //
  //   const collection = this.collectionFromPK(PK);
  //   const conditionExpression = this._parseItemConditionExpression(options);
  //
  //   const result = await collection.findOneAndUpdate(
  //     conditionExpression,
  //     updateExpression,
  //     {
  //       upsert,
  //       returnDocument: 'after',
  //     }
  //   );
  //
  //   const { updatedExisting, upserted } = result.lastErrorObject || {};
  //
  //   return {
  //     item: result.value as any,
  //     created: !!upserted,
  //     updated: !!updatedExisting,
  //   };
  // }

  // async deleteItem<T extends DocumentBase>(
  //   options: DeleteItemOptions
  // ): Promise<{ item: T | null }> {
  //   const collection = this.collectionFromPK(options.PK);
  //   const conditionExpression = this._parseItemConditionExpression(options);
  //   const { value } = await collection.findOneAndDelete(conditionExpression);
  //   return { item: value as any };
  // }

  // _parseItemConditionExpression(options: {
  //   PK: TKeyType;
  //   SK: TKeyType | null;
  //   SKType: KeyTypeName | null;
  //   condition?: ConditionExpressions;
  // }) {
  //   const { SKType, PK, SK, condition } = options;
  //
  //   const _id = hashKey({
  //     PK,
  //     SK: SK === undefined ? null : SK,
  //     SKType,
  //   });
  //
  //   const conditionExpression: Filter<any> = {
  //     _id,
  //   };
  //
  //   if (condition) {
  //     const $and = parseMongoConditionExpression({
  //       ...condition,
  //     });
  //
  //     if ($and.length) {
  //       conditionExpression.$and = $and;
  //     }
  //   }
  //
  //   return conditionExpression;
  // }
}

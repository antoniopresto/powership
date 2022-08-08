import { Logger } from '@darch/utils/lib/logger';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { Filter } from 'mongodb';

import {
  CreateOneConfig,
  DeleteOneConfig,
  DeleteOneResult,
  FindByIdConfig,
  FindManyConfig,
  FindManyResult,
  FindOneConfig,
  FindOneResult,
  PutItemResult,
  Transporter,
  UpdateItemResult,
  UpdateOneConfig,
} from '../Transporter/Transporter';

import { MongoClient } from './MongoClient';
import { mongoFindMany } from './mongoDataLoader/mongoFindMany';
import {
  createMongoIndexBasedFilters,
  parseMongoAttributeFilters,
} from './parseMongoAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';

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

  async createOne(options: CreateOneConfig): Promise<PutItemResult<any>> {
    const { item: itemInput, indexConfig, replace = false } = options;

    const res: PutItemResult<any> = {
      created: false,
      updated: false,
      item: null,
      // error: undefined,
    };

    const indexMap = this.getDocumentIndexFields(itemInput, indexConfig);

    if (indexMap.error) {
      throw indexMap.error;
    }

    const item = { ...indexMap.indexFields, ...itemInput };

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

  async findMany(options: FindManyConfig): Promise<FindManyResult> {
    const {
      filter,
      sort = 'ASC',
      projection,
      limit,
      startingKey,
      indexConfig,
      condition,
    } = options;

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

    if (condition) {
      $and.push(...parseMongoAttributeFilters(condition));
    }

    const query = { $and };
    Logger.logInfo({ query });

    const collection = this.getCollection(filter);

    const firstKey = Object.keys($and[0])[0];
    const sortKey = firstKey && firstKey.startsWith('$') ? '_id' : firstKey;
    // TODO fixme when by id
    const mongoSort = {
      [sortKey]: sort === 'DESC' ? -1 : 1,
    } as const;

    let items: any[] = [];

    if (limit !== undefined && limit > 1) {
      items = await collection
        .find(query, { sort: mongoSort, projection, limit })
        .toArray();
    } else {
      const onlyOne = limit === 1;

      const result = await mongoFindMany(
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

  async findOne(options: FindOneConfig): Promise<FindOneResult> {
    const {
      filter,
      projection,
      consistent,
      indexConfig,
      dataloaderContext,
      condition,
    } = options;

    const { items } = await this.findMany({
      dataloaderContext,
      filter,
      projection,
      consistent,
      limit: 1,
      indexConfig,
      condition,
    });

    return {
      item: items?.[0] ?? null,
    };
  }

  async findById(options: FindByIdConfig): Promise<FindOneResult> {
    const {
      id,
      projection,
      consistent,
      indexConfig,
      dataloaderContext,
      condition,
    } = options;

    return await this.findOne({
      dataloaderContext,
      filter: { id },
      projection,
      consistent,
      indexConfig,
      condition,
    });
  }

  async updateOne(options: UpdateOneConfig): Promise<UpdateItemResult> {
    const { update, upsert, indexConfig, filter, condition } = options;

    const parsedFilter = createMongoIndexBasedFilters({
      filter,
      indexConfig,
    });

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

  async deleteOne(options: DeleteOneConfig): Promise<DeleteOneResult> {
    const { indexConfig, condition, filter } = options;

    const parsedFilter = createMongoIndexBasedFilters({
      filter,
      indexConfig,
    });

    const collection = this.getCollection(parsedFilter);

    if (condition) {
      parsedFilter.push(...parseMongoAttributeFilters(condition));
    }

    const { value } = await collection.findOneAndDelete({ $and: parsedFilter });

    return { item: value as any };
  }

  getCollection(_info: unknown) {
    return this._client.db.collection(this.collection);
  }
}

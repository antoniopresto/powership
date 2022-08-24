import { Logger } from '@darch/utils/lib/logger';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { Filter } from 'mongodb';

import {
  createDocumentIndexBasedFilters,
  CreateOneConfig,
  CreateOneResult,
  DeleteOneConfig,
  DeleteOneResult,
  FindByIdConfig,
  FindManyConfig,
  FindManyResult,
  FindOneConfig,
  FindOneResult,
  PaginationResult,
  Transporter,
  UpdateOneConfig,
  UpdateOneResult,
} from '../Transporter';

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

  constructor(options: { client: MongoClient, collection: string; }) {
    super();
    this._client = options.client;
    this.collection = options.collection;
  }

  collection: string;

  async createOne(options: CreateOneConfig): Promise<CreateOneResult<any>> {
    const { item: itemInput, indexConfig, replace = false } = options;

    const res: CreateOneResult<any> = {
      created: false,
      item: null,
      updated: false,
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
          hint: { _id: 1 },
          upsert: true,
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

  _parseQueryOptions(options: FindManyConfig) {
    const {
      filter,
      sort = 'ASC',
      projection,
      first,
      after,
      indexConfig,
      condition,
    } = options;

    const { filters, PK } = createDocumentIndexBasedFilters(
      filter,
      indexConfig
    );
    const $and = parseMongoAttributeFilters({ $and: filters });

    const firstFilterEntry = Object.entries(filters[0])[0];
    const firstFilterKey = firstFilterEntry[0];

    if (after) {
      const rule = sort === 'DESC' ? '$lt' : '$gt';

      const {
        filters: startingDocFilters,
        PK: { key },
      } = createDocumentIndexBasedFilters(
        typeof after === 'string' ? { id: after } : after,
        indexConfig
      );

      const startingFilter = parseMongoAttributeFilters({
        $and: startingDocFilters,
      });

      const value = Object.values(startingFilter[0])[0];

      $and.push({
        [key]: { [rule]: value },
      });
    }

    const mongoConditions = condition
      ? parseMongoAttributeFilters(condition)
      : undefined;

    if (mongoConditions) {
      $and.push(...mongoConditions);
    }

    const query = { $and };
    Logger.logInfo({ query });

    const collection = this.getCollection(filter);

    const sortKey =
      firstFilterKey && firstFilterKey.startsWith('$') ? '_id' : firstFilterKey;
    const mongoSort = { [sortKey]: sort === 'DESC' ? -1 : 1 } as const;

    return {
      collection,
      collectionName: collection.collectionName,
      PK,
      db: this._client.db,
      first,
      firstFilterEntry,
      firstKey: firstFilterKey,
      onlyOne: first === 1,
      projection: projection,
      query,
      sort: mongoSort,
    };
  }

  async findMany(options: FindManyConfig): Promise<FindManyResult> {
    const {
      onlyOne,
      collection,
      db,
      projection,
      sort,
      first,
      query, //
    } = this._parseQueryOptions(options);

    let items: any[] = [];

    if (onlyOne) {
      const result = await mongoFindMany(
        {
          collection: collection.collectionName,
          db,
          onlyOne,
          projection: projection,
          query,
          sort,
        },
        options.context
      );

      if (result) {
        items = onlyOne ? [result] : result;
      }
    } else {
      items = await collection
        .find(query, { limit: first, projection, sort })
        .toArray();
    }

    return { items };
  }

  async paginate(options: FindManyConfig): Promise<PaginationResult> {
    const { items } = await this.findMany({
      ...options,
      first: options.first !== undefined ? options.first + 1 : undefined,
    });

    const edges = items.map((item) => ({
      cursor: item.id,
      node: item,
    }));

    let hasNextPage = !!(options.first && items.length > options.first);

    if (hasNextPage) {
      edges.pop();
    }

    return {
      edges,
      pageInfo: {
        endCursor: items[items.length - 1]?.id,
        hasNextPage,
        hasPreviousPage: !!options.after,
        startCursor: items[0]?.id,
      },
    };
  }

  async findOne(options: FindOneConfig): Promise<FindOneResult> {
    const { filter, projection, consistent, indexConfig, context, condition } =
      options;

    const { items } = await this.findMany({
      condition,
      consistent,
      context,
      filter,
      first: 1,
      indexConfig,
      projection,
    });

    return {
      item: items?.[0] ?? null,
    };
  }

  async findById(options: FindByIdConfig): Promise<FindOneResult> {
    const { id, projection, consistent, indexConfig, context, condition } =
      options;

    return await this.findOne({
      condition,
      consistent,
      context,
      filter: { id },
      indexConfig,
      projection,
    });
  }

  async updateOne(options: UpdateOneConfig): Promise<UpdateOneResult> {
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
          returnDocument: 'after',
          upsert,
        }
      );

      const { updatedExisting, upserted } = result.lastErrorObject || {};

      return {
        created: !!upserted,
        item: result.value as any,
        updated: !!updatedExisting,
        // error: result.lastErrorObject
      };
    } catch (e: any) {
      return {
        created: false,
        error: e.message,
        item: null,
        updated: false,
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

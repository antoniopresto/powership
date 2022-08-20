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

  constructor(options: { collection: string; client: MongoClient }) {
    super();
    this._client = options.client;
    this.collection = options.collection;
  }

  collection: string;

  async createOne(options: CreateOneConfig): Promise<CreateOneResult<any>> {
    const { item: itemInput, indexConfig, replace = false } = options;

    const res: CreateOneResult<any> = {
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

  _parseQueryOptions(options: FindManyConfig) {
    const {
      filter,
      sort = 'ASC',
      projection,
      limit,
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
      db: this._client.db,
      query,
      collectionName: collection.collectionName,
      collection,
      projection: projection,
      onlyOne: limit === 1,
      limit,
      sort: mongoSort,
      firstFilterEntry,
      firstKey: firstFilterKey,
      PK,
    };
  }

  async findMany(options: FindManyConfig): Promise<FindManyResult> {
    const {
      onlyOne,
      collection,
      db,
      projection,
      sort,
      limit,
      query, //
    } = this._parseQueryOptions(options);

    let items: any[] = [];

    if (onlyOne) {
      const result = await mongoFindMany(
        {
          db,
          query,
          collection: collection.collectionName,
          projection: projection,
          onlyOne,
          sort,
        },
        options.context
      );

      if (result) {
        items = onlyOne ? [result] : result;
      }
    } else {
      items = await collection
        .find(query, { sort, projection, limit })
        .toArray();
    }

    return { items };
  }

  async paginate(options: FindManyConfig): Promise<PaginationResult> {
    const { items } = await this.findMany({
      ...options,
      limit: options.limit !== undefined ? options.limit + 1 : undefined,
    });

    const edges = items.map((item) => ({
      node: item,
      cursor: item.id,
    }));

    let hasNextPage = !!(options.limit && items.length > options.limit);

    if (hasNextPage) {
      edges.pop();
    }

    return {
      edges,
      pageInfo: {
        hasNextPage,
        hasPreviousPage: !!options.after,
        startCursor: items[0]?.id,
        endCursor: items[items.length - 1]?.id,
      },
    };
  }

  async findOne(options: FindOneConfig): Promise<FindOneResult> {
    const { filter, projection, consistent, indexConfig, context, condition } =
      options;

    const { items } = await this.findMany({
      context,
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
    const { id, projection, consistent, indexConfig, context, condition } =
      options;

    return await this.findOne({
      context,
      filter: { id },
      projection,
      consistent,
      indexConfig,
      condition,
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

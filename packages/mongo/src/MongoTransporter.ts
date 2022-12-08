import {
  createDocumentIndexBasedFilters,
  CreateOneConfig,
  CreateOneResult,
  DEFAULT_SORT,
  DeleteManyConfig,
  DeleteManyResult,
  DeleteOneConfig,
  DeleteOneResult,
  FindByIdConfig,
  FindManyConfig,
  FindManyResult,
  FindOneConfig,
  FindOneResult,
  getDocumentIndexFields,
  mergeIndexRelationsResult,
  PaginationResult,
  parseUpdateExpression,
  Transporter,
  UpdateManyConfig,
  UpdateManyResult,
  UpdateOneConfig,
  UpdateOneResult,
} from '@backland/transporter';
import { NodeLogger } from '@backland/utils';
import { Filter } from 'mongodb';

import { MongoClient } from './MongoClient';
import { mongoFindMany } from './mongoDataLoader/mongoFindMany';
import {
  createMongoIndexBasedFilters,
  parseMongoAttributeFilters,
} from './parseMongoAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';

export class MongoTransporter implements Transporter {
  _client: MongoClient;

  get db() {
    return this._client.db;
  }

  connect(dbName?: string) {
    return this._client.connect(dbName);
  }

  constructor(options: { client: MongoClient; collection: string }) {
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
      error: null,
    };

    const indexMap = getDocumentIndexFields(itemInput, indexConfig);

    if (indexMap.error) {
      throw indexMap.error;
    }

    const item = { ...itemInput, ...indexMap.indexFields };

    const collection = this.getCollection(item);

    const conditionExpression: Filter<any> = {};

    if (options.condition) {
      conditionExpression.$and = conditionExpression.$and || [];
      conditionExpression.$and.push(
        ...parseMongoAttributeFilters(options.condition)
      );
    }

    const notRepeat$OR: Filter<any>[] = [];

    indexMap.parsedIndexKeys.forEach(({ index: { name } }) => {
      const value = indexMap.indexFields[name];
      if (!value) return;
      notRepeat$OR.push(...parseMongoAttributeFilters({ [name]: value }));
    });

    conditionExpression.$or = [
      ...(conditionExpression.$or || []),
      ...notRepeat$OR,
    ];

    try {
      if (replace) {
        const result = await collection.replaceOne(conditionExpression, item, {
          hint: { _id: 1 },
          upsert: true,
        });

        const updated = result?.modifiedCount === 1;
        const upsertedId = result?.upsertedId === 1;

        res.created = !!upsertedId;
        res.updated = updated;
        res.item = { ...item, _id: upsertedId || item._id };
      } else {
        const result = await collection.findOneAndUpdate(
          conditionExpression,
          { $setOnInsert: item },
          {
            hint: { _id: 1 },
            upsert: true,
          }
        );

        const data = result.lastErrorObject || {};

        if (data.updatedExisting) {
          throw new Error(
            `Can't create two documents with same index. Existing document found with ${JSON.stringify(
              { notRepeat$OR, data },
              null,
              2
            )}`
          );
        }

        const created = !!data.upserted;

        res.created = created;
        res.updated = false;
        res.item = created ? item : null;
      }
    } catch (e: any) {
      res.error = e.message;
    }

    return res;
  }

  _parseQueryOptions(options: FindManyConfig) {
    const {
      filter,
      sort = DEFAULT_SORT,
      projection,
      first,
      after,
      indexConfig,
      condition,
    } = options;

    const { filters, relationFilters, PK } = createDocumentIndexBasedFilters(
      filter,
      indexConfig
    );

    const $and = parseMongoAttributeFilters(filters);

    const relationsMongoFilters = relationFilters
      ? parseMongoAttributeFilters({ $or: relationFilters })
      : undefined;

    const firstFilterEntry = Object.entries(filters)[0];
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

      const startingFilter = parseMongoAttributeFilters(startingDocFilters);

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
    NodeLogger.logInfo({ query });

    const collection = this.getCollection(filter);

    const sortKey =
      firstFilterKey && firstFilterKey.startsWith('$') ? '_id' : firstFilterKey;
    const mongoSort = { [sortKey]: sort === 'DESC' ? -1 : 1 } as const;

    return {
      PK,
      relationFilters,
      relationsMongoFilters,
      collection,
      collectionName: collection.collectionName,
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
    const { indexConfig } = options;

    const {
      onlyOne,
      collection,
      db,
      projection,
      sort,
      first,
      query,
      relationsMongoFilters,
    } = this._parseQueryOptions(options);

    async function _relationsQuery() {
      return relationsMongoFilters
        ? mongoFindMany(
            {
              query: { $and: relationsMongoFilters },
              collection: collection.collectionName,
              db,
            },
            options.context
          )
        : [];
    }

    async function _mainEntityQuery() {
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
          return onlyOne ? [result] : result;
        } else {
          return [];
        }
      }
      return collection
        .find(query, { limit: first, projection, sort })
        .toArray();
    }

    const all = (
      await Promise.all([_mainEntityQuery(), _relationsQuery()])
    ).flat();

    const items = mergeIndexRelationsResult({ items: all, indexConfig });

    return { items };
  }

  async paginate(options: FindManyConfig): Promise<PaginationResult> {
    const limit = options.first !== undefined ? options.first + 1 : undefined;

    const { items } = await this.findMany({
      ...options,
      first: limit,
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
        endCursor: edges[edges.length - 1]?.cursor,
        hasNextPage,
        hasPreviousPage: !!options.after,
        startCursor: edges[0]?.cursor,
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

  _parseUpdateParams(
    options:
      | { kind: 'updateOne'; params: UpdateOneConfig }
      | { kind: 'updateMany'; params: UpdateManyConfig }
  ) {
    const { update, upsert, indexConfig, filter, condition } = options.params;

    const parsedFilter = createMongoIndexBasedFilters({
      filter,
      indexConfig,
    });

    const parsedUpdate = parseUpdateExpression(update, indexConfig);
    const updateExpression = parseMongoUpdateExpression(parsedUpdate);
    const collection = this.getCollection(parsedFilter);

    if (condition) {
      parsedFilter.push(...parseMongoAttributeFilters(condition));
    }

    return {
      collection,
      condition,
      filter,
      indexConfig,
      parsedFilter,
      parsedUpdate,
      update,
      updateExpression,
      upsert,
    };
  }

  async updateOne(options: UpdateOneConfig): Promise<UpdateOneResult> {
    const { upsert, updateExpression, collection, parsedFilter } =
      this._parseUpdateParams({
        kind: 'updateOne',
        params: options,
      });

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

  async updateMany(options: UpdateManyConfig): Promise<UpdateManyResult> {
    const { upsert, updateExpression, collection, parsedFilter } =
      this._parseUpdateParams({
        kind: 'updateMany',
        params: options,
      });

    try {
      const result = await collection.updateMany(
        { $and: parsedFilter },
        updateExpression,
        {
          upsert,
        }
      );

      const { modifiedCount, upsertedId } = result;

      return {
        modifiedCount,
        upsertedId,
      };
    } catch (e: any) {
      return {
        error: e.message,
        modifiedCount: null,
        upsertedId: null,
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

  async deleteMany(options: DeleteManyConfig): Promise<DeleteManyResult> {
    const { indexConfig, condition, filter } = options;

    const parsedFilter = createMongoIndexBasedFilters({
      filter,
      indexConfig,
    });

    const collection = this.getCollection(parsedFilter);

    if (condition) {
      parsedFilter.push(...parseMongoAttributeFilters(condition));
    }

    const { deletedCount } = await collection.deleteMany({
      $and: parsedFilter,
    });

    return { deletedCount };
  }

  getCollection(_info: unknown) {
    return this._client.db.collection(this.collection);
  }
}

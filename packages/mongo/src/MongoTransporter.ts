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
} from '@powership/transporter';
import {
  Logger,
  LoggerOptions,
  NodeLogger,
  nonNullValues,
  parseIndexFieldName,
} from '@powership/utils';
import { Filter } from 'mongodb';

import { MongoClient } from './MongoClient';
import { mongoFindMany } from './mongoDataLoader/mongoFindMany';
import {
  createMongoIndexBasedFilters,
  parseMongoAttributeFilters,
} from './parseMongoAttributeFilters';
import { parseMongoUpdateExpression } from './parseMongoUpdateExpression';

export class MongoTransporter implements Transporter<MongoClient> {
  _client: MongoClient;

  get db() {
    return this._client.db;
  }

  connect(dbName?: string) {
    return this._client.connect(dbName);
  }

  logger: Logger;
  get debug() {
    return this.logger.debug;
  }

  constructor(options: {
    client: MongoClient;
    collection: string;
    logger?: LoggerOptions;
  }) {
    this._client = options.client;
    this.collection = options.collection;
    this.logger = new Logger({ prefix: 'MongoTransporter', ...options.logger });
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
        ...parseMongoAttributeFilters(options.condition),
      );
    }

    const notRepeat$OR: Filter<any>[] = [];

    indexMap.parsedIndexKeys.forEach(({ PK, SK }) => {
      notRepeat$OR.push({
        [PK.destinationField.key]: PK.destinationField.value,
        [SK.destinationField.key]: SK.destinationField.value,
      });
    });

    if (notRepeat$OR.length === 1) {
      Object.assign(conditionExpression, notRepeat$OR[0]);
    } else {
      conditionExpression.$or = [
        ...(conditionExpression.$or || []),
        ...notRepeat$OR,
      ];
    }

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
        this.debug('createOne', { result, conditionExpression, item, options });
      } else {
        const result = await collection.findOneAndUpdate(
          conditionExpression,
          { $setOnInsert: item },
          {
            hint: { _id: 1 },
            upsert: true,
            includeResultMetadata: true,
          },
        );

        const data = result.lastErrorObject || {};

        if (data.updatedExisting) {
          throw new Error(
            `Can't create two documents with same index. Existing document found with ${JSON.stringify(
              { notRepeat$OR, data },
              null,
              2,
            )}`,
          );
        }

        const created = !!data.upserted;

        res.created = created;
        res.updated = false;
        res.item = created ? item : null;
        this.debug('createOne', { result, conditionExpression, item, options });
      }
    } catch (e: any) {
      this.logger.error('createOne', e);
      res.error = e.message;
    }

    return res;
  }

  async findMany(options: FindManyConfig): Promise<FindManyResult> {
    const {
      filter,
      sort: sortInit = DEFAULT_SORT,
      projection,
      first,
      after,
      indexConfig,
      condition,
    } = options;

    const { relationFilters, indexFilter } = createDocumentIndexBasedFilters(
      filter,
      indexConfig,
    );

    const $and = parseMongoAttributeFilters(indexFilter);

    const relationsQuery = (() => {
      if (!relationFilters?.length) return undefined;
      return parseMongoAttributeFilters({ $or: relationFilters })[0];
    })();

    const sortKey = (() => {
      for (let idx of indexConfig.indexes) {
        if (idx.SK?.length) {
          return parseIndexFieldName(idx.name, 'SK');
        }
      }
      return '_id';
    })();

    if (after) {
      const { indexFilter } = createDocumentIndexBasedFilters(
        typeof after === 'string' ? { id: after } : after,
        indexConfig,
      );

      if (typeof indexFilter[sortKey] === 'string') {
        $and.push({
          [sortKey]: {
            [sortInit === 'DESC' ? '$lt' : '$gt']: indexFilter[sortKey],
          },
        });
      } else {
        $and.push({
          _id: {
            [sortInit === 'DESC' ? '$lt' : '$gt']: nonNullValues(
              {
                _id: indexFilter._id,
              },
              'Failed to mount "after" condition.',
            )._id,
          },
        });
      }
    }

    if (condition) {
      const _conditions = parseMongoAttributeFilters(condition);
      $and.push(..._conditions);
    }

    const query = $and.length > 1 ? { $and } : $and[0];

    NodeLogger.logInfo({ query });

    const collection = this.getCollection(filter);

    const sortParsed = { [sortKey]: sortInit === 'DESC' ? -1 : 1 } as const;
    const onlyOne = first === 1;
    const db = this._client.db;

    async function _relationsQuery() {
      if (!relationsQuery) return null;

      return mongoFindMany(
        {
          query: relationsQuery,
          collection: collection.collectionName,
          db,
        },
        options.context,
      );
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
            sort: sortParsed,
          },
          options.context,
        );

        if (result) {
          return onlyOne ? [result] : result;
        } else {
          return [];
        }
      }
      return collection
        .find(query, { limit: first, projection, sort: sortParsed })
        .toArray();
    }

    const { items, error, all } = await (async () => {
      try {
        const all = await Promise.all([_mainEntityQuery(), _relationsQuery()]);

        const items = (() => {
          const [main, relations] = all;
          if (!relations) return main;

          return mergeIndexRelationsResult({
            items: [...main, ...relations],
            indexConfig,
          });
        })();
        return { items, error: null, all };
      } catch (e) {
        return { items: null, all: [], error: e };
      }
    })();

    this.debug('findMany', {
      error,
      query,
      mainEntity: all[0],
      relationsQuery,
      relations: all[1],
      collection: collection.collectionName,
      onlyOne,
      projection,
      sortParsed,
      options,
    });

    if (!items) {
      throw error;
    }

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
      | { kind: 'updateMany'; params: UpdateManyConfig },
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
          includeResultMetadata: true,
          upsert,
        },
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
        },
      );

      const { modifiedCount, upsertedId } = result;

      return {
        modifiedCount,
        upsertedId: upsertedId ? upsertedId.toString() : null,
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

    const { value } = await collection.findOneAndDelete(
      { $and: parsedFilter },
      { includeResultMetadata: true },
    );

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

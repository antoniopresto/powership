import { AppMock, createAppMock } from './createAppMock';
import {
  AnyCollectionIndexConfig,
  CollectionIndexConfig,
  DocumentIndexItem,
  getDocumentIndexFields,
  getParsedIndexKeys,
  ParsedIndexKey,
  validateIndexNameAndField,
} from '../../Transporter/CollectionIndex';
import {
  DocumentBase,
  DocumentMethods,
  FilterRecord,
  Transporter,
  TransporterLoader,
  TransporterLoaderName,
  transporterLoaderNames,
} from '../../Transporter/Transporter';
import { MongoTransporter } from '../MongoTransporter';
import {
  AnyFunction,
  Merge,
  UnionToIntersection,
} from '@darch/utils/lib/typeUtils';
import { capitalize } from '@darch/utils/lib/stringCase';
import { devAssert } from '@darch/utils/lib/devAssert';
import { hooks, Waterfall } from '@darch/utils/lib/hooks';
import { nonNullValues, notNull } from '@darch/utils/lib/invariant';
import { createType, Darch } from '@darch/schema';
import { ULID_REGEX } from '@darch/schema/lib/fields/UlidField';

type GetFieldsUsedInIndexes<IndexItem, Kind> = Kind extends keyof IndexItem
  ? IndexItem[Kind] extends Array<infer F> | ReadonlyArray<infer F>
    ? F extends `.${infer Field}`
      ? Field
      : never
    : never
  : never;

type EntityTransporterMethod<
  Method,
  Context extends EntityLoaderContext = Record<string, any>
> = Method extends (config: infer Config) => infer Result
  ? ((
      config: Merge<Omit<Config, 'dataloaderContext'>, { context: Context }>
    ) => Result) & {
      indexInfo: [ParsedIndexKey, ...ParsedIndexKey[]];
    }
  : never;

type IndexMethods<
  Document,
  IndexItem,
  Context extends EntityLoaderContext = Record<string, any>
> = {
  [M in keyof DocumentMethods<any, any, any>]: EntityTransporterMethod<
    DocumentMethods<
      Document,
      GetFieldsUsedInIndexes<IndexItem, 'PK'>,
      GetFieldsUsedInIndexes<IndexItem, 'SK'>
    >[M],
    Context
  >;
};

type GetIndexByName<
  Union extends DocumentIndexItem<any, any>,
  Name extends string
> = Union extends { name: Name; [K: string]: unknown } ? Union : never;

type OneIndexMethod<
  Documents,
  Indexes,
  Methods = {}
> = Indexes extends readonly [infer CurrentIndex, ...infer Rest]
  ? OneIndexMethod<
      Documents,
      Rest,
      {
        [K in keyof IndexMethods<
          Documents,
          CurrentIndex
        >]: K extends keyof Methods
          ? EntityTransporterMethod<
              IndexMethods<Documents, CurrentIndex>[K] extends (
                ...args: infer Args
              ) => infer Result
                ? (...args: Args) => Result
                : never
            > &
              EntityTransporterMethod<
                Methods[K] extends (...args: infer Args) => infer Result
                  ? (...args: Args) => Result
                  : never
              >
          : IndexMethods<Documents, CurrentIndex>[K];
      }
    >
  : [keyof Methods] extends [never]
  ? never
  : Methods;

type EntityLoaders<
  Doc extends DocumentBase,
  IndexConfig extends AnyCollectionIndexConfig
> = UnionToIntersection<
  {
    [IndexName in IndexConfig['indexes'][number]['name']]: {
      [M in keyof IndexMethods<any, any>]: {
        [L in `${M}${Capitalize<IndexName>}`]: IndexMethods<
          Doc,
          GetIndexByName<IndexConfig['indexes'][number], IndexName>
        >[M];
      };
    };
  }[IndexConfig['indexes'][number]['name']][Exclude<
    keyof IndexMethods<any, any>,
    'createOne'
  >]
> & {
  createOne: EntityTransporterMethod<
    DocumentMethods<
      Merge<
        Omit<Doc, keyof DefaultEntityFields>,
        { [K in keyof DefaultEntityFields]?: DefaultEntityFields[K] }
      >,
      GetFieldsUsedInIndexes<IndexConfig['indexes'][number], 'PK'>,
      GetFieldsUsedInIndexes<IndexConfig['indexes'][number], 'SK'>
    >['createOne']
  >;
} & OneIndexMethod<Doc, IndexConfig['indexes']>;

const indexes = [
  // {
  //   name: 'byStoreId',
  //   field: '_id',
  //   PK: ['.storeId'],
  //   SK: ['.ulid'],
  // },
  {
    name: 'byStoreAndSKU',
    field: '_id1',
    PK: ['.storeId'],
    SK: ['.SKU'],
  },
  {
    name: 'byCategory',
    field: '_id2',
    PK: ['.category'],
  },
] as const;

type DefaultEntityFields = {
  ulid: string;
  createdBy: string | null;
  updatedBy: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type DocFromType<Type> = Type extends {
  parse(...args: any[]): infer Result;
}
  ? Result extends DocumentBase
    ? Merge<DefaultEntityFields, Result>
    : never
  : never;

type Entity<Options extends EntityOptions> = Options['type'] extends {
  parse(...args: any): infer Result;
}
  ? Merge<
      {
        entity: Options['name'];
        indexes: Options['indexes'];
        type: Options['type'];
        parse: (
          ...args: Parameters<Options['type']['parse']>
        ) => DocFromType<Options['type']>;
        transporter: Options['transporter'];
      },
      EntityLoaders<
        DocFromType<Options['type']>,
        {
          entity: Options['name'];
          indexes: Options['indexes'];
        }
      >
    >
  : never;

interface EntityOptions<
  TName extends string = string,
  Type extends { parse(...args: any[]): DocumentBase } = {
    parse(...args: any[]): DocumentBase;
  },
  TTransporter extends Transporter = Transporter
> {
  type: Type;
  name: TName;
  indexes: CollectionIndexConfig<ReturnType<Type['parse']>, TName>['indexes'];
  transporter?: TTransporter;
}

const ulidField = Darch.ulid({ autoCreate: true });
const createUlid = () => ulidField.parse(undefined);

function createEntity<Options extends EntityOptions>(
  options: Readonly<Options>
): Entity<Options> {
  const { indexes, transporter: defaultTransporter, type } = options;
  const entityName = options.name.toLowerCase();

  const entity = {} as Entity<Options>;

  entity['transporter'] = defaultTransporter;

  const indexConfig: CollectionIndexConfig<any, string> = {
    entity: entityName,
    indexes,
  };

  validateIndexNameAndField(indexConfig);
  const parsedIndexKeys = getParsedIndexKeys(indexConfig);

  const _hooks: EntityHooks<
    EntityDocument<{}>,
    Options['indexes'],
    EntityLoaderContext
  > = {
    preParse: hooks.waterfall(),
    postParse: hooks.waterfall(),
    filterResult: hooks.waterfall(),
    beforeQuery: hooks.waterfall(),
  };

  // pre parse PK, SK and ID setters
  _hooks.preParse.register(async function applyDefaultHooks(doc, ctx) {
    const possibleCreate = ctx.isCreate || ctx.isUpsert;

    if (possibleCreate) {
      doc.ulid = doc.ulid || createUlid();
    }

    if (ctx.isCreate && !doc.createdAt) {
      doc.createdAt = new Date();
      doc.updatedAt = new Date();
    }

    if (ctx.isCreate && !doc.createdBy) {
      doc.createdBy = (await ctx.context?.userId?.(false)) || null;
    }

    if (ctx.isUpdate && !doc.updatedAt) {
      doc.updatedAt = new Date();
    }

    if (ctx.isUpdate && !doc.updatedBy) {
      doc.updatedBy = (await ctx.context?.userId?.(false)) || null;
    }

    const parsedIndexes = getDocumentIndexFields(doc, indexConfig);

    if (!parsedIndexes.valid) {
      throw parsedIndexes.error;
    }

    doc = { ...parsedIndexes.indexFields, ...doc };

    return doc;
  });

  async function parseOperationContext(
    method: TransporterLoaderName,
    options: EntityParserInputOptions<DocumentBase, Options['indexes'], any>
  ) {
    await defaultTransporter?.connect();

    let operationInfoContext = buildEntityOperationInfoContext({
      op: method,
      methodOptions: options as any,
    });

    if ('item' in operationInfoContext.options) {
      const withEntityFields = await _hooks.preParse.exec(
        operationInfoContext.options.item as any,
        operationInfoContext
      );

      let _options = options.partial ? ({ partial: true } as const) : undefined;

      try {
        const parsed = type.parse(withEntityFields, _options);
        let doc: any = { ...withEntityFields, ...parsed };
        doc = await _hooks.postParse.exec(doc, operationInfoContext);
        operationInfoContext.options.item = doc;
      } catch (e: any) {
        e.info = operationInfoContext;
        throw e;
      }
    }

    if ('filter' in operationInfoContext.options) {
      let filter = operationInfoContext.options.filter;
      filter = await _hooks.beforeQuery.exec(filter, operationInfoContext);
      operationInfoContext.options.filter = filter;
    }

    return operationInfoContext;
  }

  function _createLoader(config: {
    method: TransporterLoaderName;
    newMethodName: string;
    indexInfo: ParsedIndexKey[];
  }) {
    const { indexInfo, newMethodName, method } = config;

    const loader: TransporterLoader = async function loader(...args) {
      if (args.length !== 1) {
        return devAssert(`Invalid number of arguments for ${newMethodName}`);
      }
      const { transporter = defaultTransporter } = args['0'];

      nonNullValues(
        { transporter },
        `config.transporter should be provided for "${newMethodName}" or during entity creation.`
      );

      const configInput = {
        ...args[0],
        indexConfig,
        dataloaderContext: args[0].context,
      };

      const operation = await parseOperationContext(method, configInput);

      const fn: AnyFunction = transporter[method].bind(transporter);
      const result = await fn(operation.options);

      if (result.item) {
        const [parsed] = await _hooks.filterResult.exec(
          [result.item],
          operation
        );

        result.item = parsed;
      }

      if (result.items) {
        const parsed = await _hooks.filterResult.exec(result.items, operation);
        result.items = parsed;
      }

      return result;
    };

    Object.defineProperties(loader, {
      name: { value: newMethodName },
      indexInfo: { value: indexInfo },
    });

    entity[newMethodName] = loader;
  }

  indexConfig.indexes.forEach((index) => {
    const { name: indexName } = index;
    const indexInfo = notNull(
      parsedIndexKeys.find((el) => el.index.name === indexName)
    );

    const capitalizedIndexName = capitalize(indexName);

    transporterLoaderNames.forEach((method) => {
      if (method === 'createOne') return;
      const methodName = `${method}${capitalizedIndexName}`;
      _createLoader({
        method,
        newMethodName: methodName,
        indexInfo: [indexInfo],
      });
    });
  });

  transporterLoaderNames.forEach((method) => {
    _createLoader({
      method,
      newMethodName: method,
      indexInfo: parsedIndexKeys,
    });
  });

  return entity as Entity<Options>;
}

describe('Product', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  function _getEntity() {
    const type = createType('Product', {
      object: {
        title: { string: { min: 2 } },
        storeId: { ID: { autoCreate: false } },
        SKU: { string: { min: 3 } },
      },
    });

    return createEntity({
      transporter,
      name: 'Product',
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'],
          SK: ['.ulid'],
        },
        {
          name: 'byStoreAndSKU',
          field: '_id1',
          PK: ['.storeId'],
          SK: ['.SKU'],
        },
      ],
      type,
    });
  }

  beforeEach(async function () {
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterEach(async function () {
    await mockApp.reset();
  });

  it('create entity', async () => {
    const entity = _getEntity();
    expect(typeof entity).toEqual('object');
  });

  it('TS distributed filter types', async () => {
    const entity = createEntity({
      transporter,
      name: 'Product',
      indexes: [
        {
          name: 'byStore',
          field: '_id',
          PK: ['.storeId'],
          SK: ['.ulid'],
        },
        {
          name: 'byStoreAndSKU',
          field: '_id1',
          PK: ['.category'],
          SK: ['.storeId'],
        },
      ],
      type: createType('Product', {
        object: {
          title: { string: { min: 2 } },
          storeId: 'ID',
          SKU: { string: { min: 3 } },
        },
      }),
    });

    await entity.findOne({ filter: { storeId: '123' }, context: {} });
    await entity.findOne({
      filter: { category: '456' },
      context: {},
    });
  });

  it('create', async () => {
    const entity = _getEntity();

    let product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({ item: null });

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
      context: {},
    });

    product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: expect.stringMatching(/^product#store1↠/),
        _id1: expect.stringMatching(/^product#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        createdBy: null,
      },
    });
  });

  it('byStore', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
      context: {},
    });

    const product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: expect.stringMatching(/^product#store1↠/),
        _id1: expect.stringMatching(/^product#store1↠sku0/),
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: expect.stringMatching(ULID_REGEX),
        ulid: expect.stringMatching(ULID_REGEX),
        storeId: 'store1',
        title: 'banana',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        createdBy: null,
      },
    });
  });

  it('findManyByStoreAndSKU', async () => {
    const entity = _getEntity();

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku_banana',
        storeId: 'store1',
      },
      context: {},
    });

    await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
      context: {},
    });

    const product = await entity.findManyByStoreAndSKU({
      filter: { storeId: 'store1' },
      context: {},
    });

    expect(product.items).toHaveLength(2);

    expect(entity.findManyByStoreAndSKU.indexInfo).toEqual([
      {
        PK: {
          definition: ['.storeId'],
          requiredFields: ['storeId'],
        },
        SK: {
          definition: ['.SKU'],
          requiredFields: ['SKU'],
        },
        entity: 'product',
        index: expect.any(Object),
      },
    ]);
  });

  it('findByID', async () => {
    //
  });

  it('findBySKU', async () => {
    //
  });

  it('update', async () => {
    //
  });

  it('delete', async () => {
    //
  });
});

export type EntityLoaderContext = Partial<{
  userId(strict: false): string | undefined;
  userId(strict: true): string;
  userId(): string;
}> & {};

type EntityDocument<Document> = Merge<DefaultEntityFields, Document>;

export type EntityHooks<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends EntityLoaderContext
> = {
  preParse: Waterfall<
    Partial<EntityDocument<Document>>,
    EntityOperationInfoContext<
      Partial<EntityDocument<Document>>,
      Indexes,
      Context
    >
  >;

  postParse: Waterfall<
    EntityDocument<Document>,
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>
  >;

  beforeQuery: Waterfall<
    FilterRecord<EntityDocument<Document>>,
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>
  >;

  filterResult: Waterfall<
    EntityDocument<Document>[],
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>
  >;
};

type MethodOptions<
  Document,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context
> = Indexes[number] extends infer IndexItem
  ? IndexItem extends unknown
    ? {
        [L in TransporterLoaderName]: Parameters<
          IndexMethods<Document, IndexItem>[L]
        >[0] extends infer Options
          ? Options extends unknown
            ? Options
            : never
          : never;
      }
    : never
  : never;

function buildEntityOperationInfoContext(
  parserInput: EntityParserInputOptions<DocumentBase, any, any>
): EntityOperationInfoContext<any, any, any> {
  const { op } = parserInput;

  return {
    op,
    isFind: op.startsWith('find'),
    isUpdate: op.startsWith('update'),
    isCreate: op.startsWith('create'),
    isFindMany: op.startsWith('findMany'),
    isFindOne: op.startsWith('findOne'),
    isUpdateOne: op.startsWith('updateOne'),
    isDeleteOne: op.startsWith('deleteOne'),
    isUpsert:
      parserInput.op.startsWith('updateOne') &&
      // @ts-ignore
      parserInput.methodOptions.upsert === true,
    // isUpdateMany: op === 'updateMany',
    isCreateOne: op.startsWith('createOne'),
    // isCreateMany: op === 'createMany',
    options: parserInput.methodOptions,
    context: parserInput.methodOptions.context,
  };
}

export type EntityParserInputOptions<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends EntityLoaderContext
> = (
  | {
      op: 'findOne';
      methodOptions: MethodOptions<Document, Indexes, Context>['findOne'];
    }
  | {
      op: 'findMany';
      methodOptions: MethodOptions<Document, Indexes, Context>['findMany'];
    }
  | {
      op: 'createOne';
      methodOptions: MethodOptions<Document, Indexes, Context>['createOne'];
    }
  | {
      op: 'updateOne';
      methodOptions: MethodOptions<Document, Indexes, Context>['updateOne'];
    }
  | {
      op: 'deleteOne';
      methodOptions: MethodOptions<Document, Indexes, Context>['deleteOne'];
    }
) & {
  partial?: boolean | (keyof Document)[];
};

export type EntityOperationInfoContext<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends EntityLoaderContext
> = {
  op: 'findMany' | 'findOne' | 'createOne' | 'updateOne' | 'deleteOne';
  isFind: boolean;
  isUpdate: boolean;
  isCreate: boolean;
  isFindMany: boolean;
  isFindOne: boolean;
  isUpdateOne: boolean;
  isDeleteOne: boolean;
  isUpsert: boolean;
  // isUpdateMany: boolean;
  isCreateOne: boolean;
  // isCreateMany: boolean;
  options: EntityParserInputOptions<
    Document,
    Indexes,
    Context
  >['methodOptions'];
  context: Context;
};

import { AppMock, createAppMock } from './createAppMock';
import {
  AnyCollectionIndexConfig,
  CollectionIndexConfig,
  DocumentIndexItem,
  getParsedIndexKeys,
  ParsedIndexKey,
  validateIndexNameAndField,
} from '../../Transporter/CollectionIndex';
import {
  CreateOneConfig,
  DocumentBase,
  DocumentMethods,
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
import { nonNullValues, notNull } from '@darch/utils/lib/invariant';
import { createType, Darch } from '@darch/schema';

type GetFieldsUsedInIndexes<IndexItem, Kind> = Kind extends keyof IndexItem
  ? IndexItem[Kind] extends Array<infer F> | ReadonlyArray<infer F>
    ? F extends `.${infer Field}`
      ? Field
      : never
    : never
  : never;

type TransporterToEntityMethod<M> = M extends AnyFunction
  ? ((
      config: Merge<Parameters<M>[0], { transporter?: Transporter }>
    ) => ReturnType<M>) & { indexInfo: [ParsedIndexKey, ...ParsedIndexKey[]] }
  : never;

type IndexMethods<Doc, IndexItem> = {
  [M in keyof DocumentMethods<any, any, any>]: TransporterToEntityMethod<
    DocumentMethods<
      Doc,
      GetFieldsUsedInIndexes<IndexItem, 'PK'>,
      GetFieldsUsedInIndexes<IndexItem, 'SK'>
    >[M]
  >;
};

type GetIndexByName<
  Union extends DocumentIndexItem<any, any>,
  Name extends string
> = Union extends { name: Name; [K: string]: unknown } ? Union : never;

type OneIndexMethod<Schema, Indexes, Methods = {}> = Indexes extends readonly [
  infer CurrentIndex,
  ...infer Rest
]
  ? OneIndexMethod<
      Schema,
      Rest,
      {
        [K in keyof IndexMethods<Schema, CurrentIndex>]: K extends keyof Methods
          ? TransporterToEntityMethod<
              IndexMethods<Schema, CurrentIndex>[K] extends (
                ...args: infer Args
              ) => infer Result
                ? (...args: Args) => Result
                : never
            > &
              TransporterToEntityMethod<
                Methods[K] extends (...args: infer Args) => infer Result
                  ? (...args: Args) => Result
                  : never
              >
          : IndexMethods<Schema, CurrentIndex>[K];
      }
    >
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
  createOne: TransporterToEntityMethod<
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
  {
    name: 'byStoreId',
    field: '_id',
    PK: ['.storeId'],
    SK: ['.hash'],
  },
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
  hash: string;
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

function createEntity<Options extends EntityOptions>(
  options: Readonly<Options>
): Entity<Options> {
  const { indexes, transporter: defaultTransporter } = options;
  const entityName = options.name.toLowerCase();

  const entity = {} as Entity<Options>;

  entity['transporter'] = defaultTransporter;

  const indexConfig: CollectionIndexConfig<any, string> = {
    entity: entityName,
    indexes,
  };

  validateIndexNameAndField(indexConfig);
  const parsedIndexKeys = getParsedIndexKeys(indexConfig);

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

      let config: any = {
        ...args[0],
      };

      if (method === 'createOne') {
        const defaultFields: DefaultEntityFields = {
          hash: Darch.ulid({ autoCreate: true }).parse(undefined),
        };

        config = {
          ...config,
          item: {
            ...defaultFields,
            ...config.item,
          },
        };
      }

      const fn: AnyFunction = transporter[method].bind(transporter);
      return fn({ indexConfig, ...config });
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

  _createLoader({
    indexInfo: parsedIndexKeys,
    newMethodName: 'createOne',
    method: 'createOne',
  });

  return entity;
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
          SK: ['.hash'],
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

  beforeAll(async function () {
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      collection: 'temp1',
      client: mockApp.client!,
    });
  });

  afterAll(async function () {
    await mockApp.reset();
  });

  it('create entity', async () => {
    const entity = _getEntity();
    expect(typeof entity).toEqual('object');
  });

  it('create', async () => {
    const entity = _getEntity();

    let product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      dataloaderContext: {},
    });

    expect(product).toEqual({ item: null });

    await entity.createOne({
      item: {
        title: 'banana',
        SKU: 'sku0',
        storeId: 'store1',
      },
    });

    product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      dataloaderContext: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: 'Product#store1↠',
        _id1: 'Product#store1↠sku0',
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: '',
        storeId: 'store1',
        title: 'banana',
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
    });

    const product = await entity.findOneByStore({
      filter: { storeId: 'store1' },
      dataloaderContext: {},
    });

    expect(product).toEqual({
      item: {
        SKU: 'sku0',
        _id: 'Product#store1↠',
        _id1: 'Product#store1↠sku0',
        _id1PK: 'store1',
        _id1SK: 'sku0',
        _idPK: 'store1',
        _idSK: '',
        storeId: 'store1',
        title: 'banana',
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
    });

    await entity.createOne({
      item: {
        title: 'batata',
        SKU: 'sku_batata',
        storeId: 'store1',
      },
    });

    const product = await entity.findManyByStoreAndSKU({
      filter: { storeId: 'store1' },
      dataloaderContext: {},
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

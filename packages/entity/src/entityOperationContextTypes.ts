import {
  _ensureTransporterMethodsImplementation,
  TransporterLoaderName,
} from '@powership/transporter';
import { DeepWritable, simpleObjectClone } from '@powership/utils';

import {
  AnyEntity,
  EntityDocument,
  EntityLoaderConfig,
} from './EntityInterfaces';
import { EntityOptions } from './EntityOptions';

export function buildEntityOperationInfoContext<
  M extends TransporterLoaderName
>(input: { entity: AnyEntity; method: M; methodOptions: Record<string, any> }) {
  const { method, methodOptions, entity } = input;
  const info = getOperationInfo(method);

  const { upsert } = methodOptions as { upsert?: unknown };

  const isUpsert = info.isUpdate && upsert === true;

  return {
    ...(info as any),
    entity,
    entityOptions: entity.usedOptions,
    isUpsert,
    loaderName: method,
    options: methodOptions,
    shared: {},
  } as unknown as EntityOperationInfoContext<M>;
}

function getLoaderOperationsInfoHelpers(): LoaderOperationsRecord {
  return simpleObjectClone(LoaderMethodInfoHelpers);
}

function getOperationInfo<T extends keyof LoaderOperationsRecord>(
  op: T
): LoaderOperationsRecord[T] {
  return getLoaderOperationsInfoHelpers()[op];
}

const allFalse = {
  isCreate: false,
  isCreateOne: false,
  isDelete: false,
  isDeleteMany: false,
  isDeleteOne: false,
  isFind: false,
  isFindById: false,
  isFindMany: false,
  isFindOne: false,
  isPaginate: false,
  isUpdate: false,
  isUpdateMany: false,
  isUpdateOne: false,
  isUpsert: false,
} as const;

const LoaderMethodInfoHelpers = _ensureTransporterMethodsImplementation({
  createOne: {
    ...allFalse,
    isCreate: true,
    isCreateOne: true,
    op: 'createOne',
  },
  deleteMany: {
    ...allFalse,
    isDelete: true,
    isDeleteMany: true,
    op: 'deleteMany',
  },
  deleteOne: {
    ...allFalse,
    isDelete: true,
    isDeleteOne: true,
    op: 'deleteOne',
  },
  findById: {
    ...allFalse,
    isFind: true,
    isFindById: true,
    op: 'findById',
  },
  findMany: {
    ...allFalse,
    isFind: true,
    isFindMany: true,
    op: 'findMany',
  },
  findOne: {
    ...allFalse,
    isFind: true,
    isFindOne: true,
    op: 'findOne',
  },
  paginate: {
    ...allFalse,
    isFind: true,
    isPaginate: true,
    op: 'paginate',
  },
  updateMany: {
    ...allFalse,
    isUpdate: true,
    isUpdateMany: true,
    isUpsert: false as boolean,
    op: 'updateMany',
  },
  updateOne: {
    ...allFalse,
    isUpdate: true,
    isUpdateOne: true,
    isUpsert: false as boolean,
    op: 'updateOne',
  },
} as const);

export type LoaderOperationsRecord = DeepWritable<
  typeof LoaderMethodInfoHelpers
>;

export type EntityOperationInfosRecord = {
  [Method in keyof LoaderOperationsRecord]: Method extends unknown
    ? Method extends keyof LoaderOperationsRecord
      ? LoaderOperationsRecord[Method] & {
          entity: AnyEntity;

          entityOptions: EntityOptions;

          getDocumentResults?: EntityDocument<any>[];

          loaderName: Method;

          // ================== //
          // start infer method
          // ================== //
          options: EntityLoaderConfig<Method>;

          shared: Record<string, unknown>;

          // TOO MUCH for now
          // Indexes[number] extends infer IndexItem
          // ? IndexItem extends unknown
          //   ? Parameters<
          //       MethodsWithIndexBasedFilter<Document, IndexItem, Context>[Method]
          //     >[0] extends infer Options
          //     ? Options extends unknown
          //       ? Options
          //       : never
          //     : never
          //   : never
          // : never;
          // ================== //
          // END infer Method
          // ================== //
        } extends infer R
        ? { [K in keyof R]: R[K] }
        : never
      : never
    : never;
};

export type EntityOperationInfoContext<
  LoaderName extends TransporterLoaderName = TransporterLoaderName
> = EntityOperationInfosRecord[LoaderName];

export function isEntityContextOfLoader<
  LoaderName extends TransporterLoaderName
>(
  t: EntityOperationInfoContext,
  name: LoaderName
): t is EntityOperationInfoContext<LoaderName> {
  return t.loaderName === name;
}

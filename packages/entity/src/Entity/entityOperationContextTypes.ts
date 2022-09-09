import { DeepWritable, simpleObjectClone } from '@brabo/utils';

import {
  _ensureTransporterMethodsImplementation,
  AnyCollectionIndexConfig,
  DocumentBase,
  LoaderContext,
  TransporterLoaderName,
} from '../Transporter';

import { IndexMethods } from './EntityInterfaces';
import { EntityOptions } from './EntityOptions';

export function buildEntityOperationInfoContext<
  M extends TransporterLoaderName
>(
  method: M,
  options: EntityOperationInfosRecord<any, any, any>[M]['options'],
  entityOptions: EntityOptions
): EntityOperationInfosRecord<any, any, any>[M] {
  const info = getOperationInfo(method);

  const { upsert } = options as { upsert?: unknown };

  const isUpsert = info.isUpdate && upsert === true;

  return {
    ...(info as any),
    entityOptions,
    isUpsert,
    options,
  };
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
  isDeleteOne: false,
  isFind: false,
  isFindById: false,
  isFindMany: false,
  isFindOne: false,
  isPaginate: false,
  isUpdate: false,
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

export type EntityOperationInfosRecord<
  Document extends DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext
> = {
  [Method in keyof LoaderOperationsRecord]: Method extends unknown
    ? Method extends keyof LoaderOperationsRecord
      ? LoaderOperationsRecord[Method] & {
          entityOptions: EntityOptions;

          // ================== //
          // start infer method
          // ================== //
          options: Indexes[number] extends infer IndexItem
            ? IndexItem extends unknown
              ? Parameters<
                  IndexMethods<Document, IndexItem, Context>[Method]
                >[0] extends infer Options
                ? Options extends unknown
                  ? Options
                  : never
                : never
              : never
            : never;
          // ================== //
          // END infer Method
          // ================== //
        } extends infer R
        ? { [K in keyof R]: R[K] }
        : never
      : never
    : never;
};

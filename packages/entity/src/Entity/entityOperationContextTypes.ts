import { DeepWritable, simpleObjectClone } from '@darch/utils';

import { _ensureTransporterMethodsImplementation } from '../Transporter';

const allFalse = {
  isFindMany: false,
  isPaginate: false,
  isFindOne: false,
  isFindById: false,
  isUpdateOne: false,
  isDeleteOne: false,
  isCreateOne: false,
  isCreate: false,
  isUpdate: false,
  isUpsert: false,
  isDelete: false,
  isFind: false,
} as const;

const LoaderMethodInfoHelpers = _ensureTransporterMethodsImplementation({
  findMany: {
    ...allFalse,
    op: 'findMany',
    isFindMany: true,
    isFind: true,
  },
  paginate: {
    ...allFalse,
    op: 'paginate',
    isPaginate: true,
    isFind: true,
  },
  findOne: {
    ...allFalse,
    op: 'findOne',
    isFindOne: true,
    isFind: true,
  },
  findById: {
    ...allFalse,
    op: 'findById',
    isFindById: true,
    isFind: true,
  },
  updateOne: {
    ...allFalse,
    op: 'updateOne',
    isUpdateOne: true,
    isUpdate: true,
    isUpsert: false as boolean,
  },
  deleteOne: {
    ...allFalse,
    op: 'deleteOne',
    isDeleteOne: true,
    isDelete: true,
  },
  createOne: {
    ...allFalse,
    op: 'createOne',
    isCreateOne: true,
    isCreate: true,
  },
} as const);

export type LoaderOperationsRecord = DeepWritable<
  typeof LoaderMethodInfoHelpers
>;

export type LoaderOperationInfo = {
  [K in keyof LoaderOperationsRecord]: LoaderOperationsRecord[K];
}[keyof LoaderOperationsRecord];

export function getLoaderOperationsInfoHelpers(): LoaderOperationsRecord {
  return simpleObjectClone(LoaderMethodInfoHelpers);
}

export function getOperationInfo<T extends keyof LoaderOperationsRecord>(
  op: T
): LoaderOperationsRecord[T] {
  return getLoaderOperationsInfoHelpers()[op];
}

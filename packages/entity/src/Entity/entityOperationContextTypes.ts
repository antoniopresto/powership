import { DeepWritable, simpleObjectClone } from '@darch/utils';

import { _ensureTransporterMethodsImplementation } from '../Transporter';

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

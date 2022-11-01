import { inspectObject, tupleEnum } from '@backland/utils';
import { NodeLogger } from '@backland/utils';

import type { InvalidParsedIndexField } from './CollectionIndex';

export const EntityErrorKind = tupleEnum(
  'INVALID_FIELDS',
  'INVALID_INDEX_KEY',
  'EMPTY_FILTER',
  'INVALID_FILTER'
);

export class CollectionErrors extends Error {
  __isEntityError = true;
  static kinds = EntityErrorKind;

  constructor(publicDetails: EntityErrorDetails, privateDetails?: any) {
    super(publicDetails.reason);

    this.message = `${this.message || ''} ➤ ${inspectObject(publicDetails, {
      depth: 5,
      transformLine(l) {
        return l.trim().replace(/\n/g, '\\n');
      },
    }).trim()}`.trim();

    if (privateDetails !== undefined) {
      NodeLogger.logError(inspectObject(privateDetails, { depth: 10 }));
    }
  }

  static is(input: any): input is CollectionErrors {
    return typeof input.__isEntityError === 'boolean';
  }
}

export type EntityErrorKindEnum = typeof EntityErrorKind;
export type EntityErrorKind = keyof EntityErrorKindEnum;

export type EntityErrorDetails = {
  [K: string]: unknown;
  invalidFields?: InvalidParsedIndexField[];
  reason: EntityErrorKind;
};

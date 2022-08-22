import { inspectObject, tupleEnum } from '@darch/utils';
import type { InvalidParsedIndexField } from './CollectionIndex';
import { Logger } from '@darch/utils/lib/logger';

export const EntityErrorKind = tupleEnum(
  'INVALID_FIELDS',
  'INVALID_INDEX_KEY',
  'EMPTY_FILTER',
  'INVALID_FILTER'
);

export class EntityError<Kind extends string = string> extends Error {
  __isEntityError: true;
  static kinds = EntityErrorKind;
  kind: Kind;

  constructor(publicDetails: EntityErrorDetails, privateDetails?: any) {
    super(publicDetails.reason);

    this.message = `${this.message || ''} ➤ ${inspectObject(publicDetails, {
      depth: 5,
      transformLine(l) {
        return l.trim().replace(/\n/g, '\\n');
      },
    }).trim()}`.trim();

    if (privateDetails !== undefined) {
      Logger.logError(inspectObject(privateDetails, { depth: 10 }));
    }
  }

  static is(input: any): input is EntityError {
    return typeof input.__isEntityError === 'boolean';
  }
}

export type EntityErrorKindEnum = typeof EntityErrorKind;
export type EntityErrorKind = keyof EntityErrorKindEnum;

export type EntityErrorDetails = {
  invalidFields?: InvalidParsedIndexField[];
  reason: EntityErrorKind;
  [K: string]: unknown;
};

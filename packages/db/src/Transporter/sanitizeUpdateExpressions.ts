import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { ensureArray } from '@darch/utils/lib/ensureArray';
import { getKeys } from '@darch/utils/lib/getKeys';
import { Entries } from '@darch/utils/lib/typeUtils';

import { UpdateExpression, UpdateExpressionKey } from './Transporter';

export type TransporterUpdateExpressionFnConfig = {
  PK: string[];
  SK: string[];
};

export type UpdateOperationsByDeleteOperator = {
  operator: '$remove';
  operations: {
    path: string; // field or field.subfield, etc
    index?: number;
  }[];
};

export type TransporterParsedUpdateOperation<
  Schema,
  T = Omit<UpdateExpression<Schema>, '$remove'>
> =
  | {
      [K in Extract<keyof T, string>]-?: {
        operator: K;
        entries: Entries<NonNullable<T[K]>>;
      };
    }[Extract<keyof T, string>]
  | UpdateOperationsByDeleteOperator;

export type SanitizedUpdateOperations<Schema> =
  TransporterParsedUpdateOperation<Schema>[];

export function sanitizeUpdateExpressions<Schema extends Record<string, any>>(
  updateExpression: UpdateExpression<Schema>,
  config: TransporterUpdateExpressionFnConfig
): SanitizedUpdateOperations<Schema> {
  const { PK = [], SK = [] } = config;

  const pkFields = new Set(
    PK.filter((el) => el.startsWith('.')).map((el) => el.replace(/^./, ''))
  );
  const skFields = new Set(
    SK.filter((el) => el.startsWith('.')).map((el) => el.replace(/^./, ''))
  );

  const keys = getKeys(updateExpression);

  if (!keys.length) {
    throw new RuntimeError('Empty update expression', {
      updateExpression,
    });
  }

  function getOperation(operator: UpdateExpressionKey) {
    const expression = (updateExpression as UpdateExpression)[operator];

    if (!expression || typeof expression !== 'object') {
      throw new RuntimeError(`invalid expression value`, {
        key: operator,
        expression,
      });
    }

    return expression;
  }

  const errors = new Set<string>();
  const operations: SanitizedUpdateOperations<Schema> = [];

  function pushErrorIfApply(
    field: string,
    $operator: keyof UpdateExpression<any>
  ) {
    const fieldStart = field.split(/[.\[]/)[0];
    const deepArrayUpdateErr = getDeepArrayUpdateError(
      $operator,
      field,
      $operator === '$remove'
    );

    if (deepArrayUpdateErr) {
      errors.add(
        deepArrayUpdateErr.message + '\n' + deepArrayUpdateErr.stack ||
          deepArrayUpdateErr.message
      );
    }

    if ($operator !== '$setOnInsert') {
      if (pkFields.has(fieldStart)) {
        errors.add(`Can't update field "${fieldStart}" - member of PK.`);
      }

      if (skFields.has(fieldStart)) {
        errors.add(`Can't update field "${fieldStart}" - member of SK.`);
      }
    }
  }

  keys.forEach(function ($operator) {
    const operation = getOperation($operator);

    switch ($operator) {
      case '$set':
      case '$setOnInsert':
      case '$setIfNull':
      case '$inc':
      case '$append':
      case '$prepend':
      case '$pull':
      case '$addToSet': {
        const entries = Object.entries(operation);
        entries.forEach(([field]) => pushErrorIfApply(field, $operator));
        operations.push({ operator: $operator, entries: entries as any });
        break;
      }

      case '$remove': {
        const toDelete: string[] = ensureArray(operation as any);
        const removeEntries: UpdateOperationsByDeleteOperator['operations'] =
          [];

        toDelete.forEach((pathToDelete) => {
          pushErrorIfApply(pathToDelete, '$remove');
          const arrayMatch = pathToDelete.match(/(.*)\[(\d*)]$/);

          if (arrayMatch) {
            const [, path, index] = arrayMatch;

            removeEntries.push({
              index: parseInt(index),
              path,
            });
          } else {
            removeEntries.push({
              path: pathToDelete,
            });
          }
        });

        operations.push({
          operator: '$remove',
          operations: removeEntries,
        });
        break;
      }

      default: {
        throw new RuntimeError(`invalid update expression key "${$operator}"`, {
          updateExpression,
        });
      }
    }
  });

  if (errors.size) {
    let message = ['Update expression errors: ', ...errors.values()].join('\n');
    throw new Error(message);
  }

  return operations;
}

function getDeepArrayUpdateError(
  operation: keyof UpdateExpression<any>,
  field: string,
  allowAtEnd = false
) {
  const arrayMatch = field.match(/\[(\d*)]/g);

  if (allowAtEnd && arrayMatch?.length === 1 && field.match(/(.*)\[(\d*)]$/)) {
    return;
  }

  if (arrayMatch) {
    return new RuntimeError(
      `Can't deep update with array index.`,
      { operation, op: field },
      5
    );
  }

  return;
}

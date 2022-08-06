import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { ensureArray } from '@darch/utils/lib/ensureArray';
import { getKeys } from '@darch/utils/lib/getKeys';

import { UpdateExpression, UpdateExpressionKey } from './Transporter';
import { AnyCollectionIndexConfig } from './CollectionIndex';

export type UpdateOperation<Schema> =
  | {
      operator: Exclude<UpdateExpressionKey, '$remove'>;
      entries: [string, any][];
    }
  | {
      operator: '$remove';
      removeOperations: {
        path: string; // field or field.subfield, etc
        index?: number;
      }[];
    };

export function parseUpdateExpression<Schema extends Record<string, any>>(
  updateExpression: UpdateExpression<Schema>,
  indexConfig: AnyCollectionIndexConfig
): UpdateOperation<Schema>[] {
  const { indexes } = indexConfig;
  const keys = getKeys(updateExpression);

  const fieldsUsedInIndexes = new Set();

  indexes.forEach((index) => {
    [...index.PK, ...(index.SK || [])]
      .filter((el) => el.startsWith('.'))
      .map((el) => {
        const field = el.replace(/^./, '');
        fieldsUsedInIndexes.add(field);
      });
  });

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
  const operations: UpdateOperation<Schema>[] = [];

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
      if (fieldsUsedInIndexes.has(fieldStart)) {
        errors.add(
          `The field "${fieldStart}" cannot be updated as it is used in index.`
        );
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

        operations.push({
          operator: $operator,
          entries: entries,
        });
        break;
      }

      case '$remove': {
        const toDelete: string[] = ensureArray(operation as any);
        const removeEntries: { index?: number; path: string }[] = [];

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
          removeOperations: removeEntries,
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

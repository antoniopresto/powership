import { getTypeName, Join, NestedPaths, RuntimeError } from '@backland/utils';

import { AnyCollectionIndexConfig } from './CollectionIndex';
import { UpdateExpression } from './Transporter';

export type ParsedUpdateExpression<TSchema = Record<string, any>> =
  UpdateExpression<TSchema> extends infer UX
    ? keyof UX extends infer OP
      ? OP extends keyof UX
        ? UX[OP] extends infer V
          ? {
              entries: [Join<NestedPaths<TSchema>, '.'>, V][];
              operator: OP;
              valueConstructorName: string;
            }
          : any
        : any
      : any
    : any;

export function parseUpdateExpression<Schema extends Record<string, any>>(
  updateExpression: UpdateExpression<Schema>,
  indexConfig: AnyCollectionIndexConfig
): ParsedUpdateExpression<Schema>[] {
  const { indexes } = indexConfig;
  const entries = Object.entries(updateExpression);

  const fieldsUsedInMainIndex = new Set();
  const mainIndex = indexes[0];
  //
  {
    [...mainIndex.PK, ...(mainIndex.SK || [])]
      .filter((el) => el.startsWith('.'))
      .map((el) => {
        const field = el.replace(/^./, '');
        fieldsUsedInMainIndex.add(field);
      });
  }

  if (!entries.length) {
    throw new RuntimeError('Empty update expression', {
      updateExpression,
    });
  }

  const errors = new Set<string>();
  const operations: ParsedUpdateExpression[] = [];
  type _Entry = typeof entries[number];

  function each([$operator, operation]: _Entry) {
    const valueConstructorName = getTypeName(operation);

    switch ($operator) {
      case '$remove':
      case '$set':
      case '$setOnInsert':
      case '$setIfNull':
      case '$inc':
      case '$append':
      case '$prepend':
      case '$pull':
      case '$addToSet': {
        const opValueEntries = Object.entries(operation) as any[];

        if ($operator !== '$setOnInsert') {
          opValueEntries.forEach(([field, value]) => {
            // checking if we are mutating fields on PK
            const mutatingField =
              $operator === '$remove'
                ? value // for $remove the fields are in the value, like:
                : // { $remove: ['fieldA.subField', 'fieldC', ...] }
                  field;

            const rootField = mutatingField.split('.')[0];
            if (fieldsUsedInMainIndex.has(rootField)) {
              errors.add(
                `The field "${rootField}" cannot be updated as it is used in index.\n` +
                  `Use $setOnInsert when updating using {"upsert": true}`
              );
            }
          });
        }

        operations.push({
          entries: opValueEntries,
          operator: $operator,
          valueConstructorName,
        });
        break;
      }

      default: {
        throw new RuntimeError(`invalid update expression key "${$operator}"`, {
          updateExpression,
        });
      }
    }
  }

  entries.forEach(each);

  if (errors.size) {
    let message = ['Update expression errors: ', ...errors.values()].join('\n');
    throw new Error(message);
  }

  return operations as ParsedUpdateExpression<Schema>[];
}

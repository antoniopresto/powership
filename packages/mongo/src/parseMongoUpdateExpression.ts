import { UpdateOperation } from '@backland/transporter';
import { RuntimeError } from '@backland/utils/lib/RuntimeError';
import { ensureArray } from '@backland/utils/lib/ensureArray';
import type { UpdateFilter } from 'mongodb';

export function parseMongoUpdateExpression(operations: UpdateOperation[]) {
  const update: UpdateFilter<any>[] = [];

  // used to group all simple $set operations
  // to prevent the error "field names may not start with '$'" for
  // array positional updates
  let simple$Set: UpdateFilter<any> | undefined;

  operations.forEach(function (item) {
    switch (item.operator) {
      case '$set': {
        item.entries.forEach(([k, value]) => {
          simple$Set = {
            ...simple$Set,
            [k]: value,
          };
        });
        break;
      }

      case '$setOnInsert': {
        item.entries.forEach(([k, value]) => {
          update.push({
            $set: {
              [k]: {
                $ifNull: [`$${k}`, value],
              },
            },
          });
        });
        break;
      }

      case '$setIfNull': {
        item.entries.forEach(([k, value]) => {
          update.push(stageSetIfNull(k, value));
        });
        break;
      }

      case '$inc': {
        item.entries.forEach(([k, value]) => {
          update.push({
            $set: {
              [k]: {
                $sum: [`$${k}`, value],
              },
            },
          });
        });
        break;
      }

      case '$append': {
        item.entries.forEach(([k, value]) => {
          update.push(
            //
            stageSetIfNull(k, []),
            {
              $set: {
                [k]: {
                  $concatArrays: [`$${k}`, value],
                },
              },
            }
          );
        });
        break;
      }

      case '$prepend': {
        item.entries.forEach(([k, value]) => {
          update.push(
            //
            stageSetIfNull(k, []),
            {
              $set: {
                [k]: {
                  $concatArrays: [value, `$${k}`],
                },
              },
            }
          );
        });
        break;
      }

      case '$pull': {
        item.entries.forEach(([k, value]) => {
          update.push({
            $set: {
              [k]: {
                $filter: {
                  as: 'num',
                  cond: { $not: [{ $in: ['$$num', value] }] },
                  input: `$${k}`,
                },
              },
            },
          });
        });
        break;
      }

      case '$addToSet': {
        item.entries.forEach(([k, value]) => {
          const uniqValues = [...new Set(ensureArray(value)).values()];

          update.push(
            {
              $set: {
                [k]: {
                  $filter: {
                    as: 'val',
                    cond: { $not: [{ $in: ['$$val', uniqValues] }] },
                    input: `$${k}`,
                  },
                },
              },
            },
            {
              $set: {
                [k]: {
                  $concatArrays: [`$${k}`, uniqValues],
                },
              },
            }
          );
        });
        break;
      }

      case '$remove': {
        item.removeOperations.forEach(({ index, path }) => {
          if (typeof index === 'number' && index >= 0) {
            const temp = `temp[[${path}]]`;
            const nextIndex = index + 1;
            const max = 999999999;

            if (index == 0) {
              update.push({
                $set: {
                  [path]: { $slice: [`$${path}`, 1, max] },
                },
              });
            } else {
              update.push(
                {
                  $set: {
                    [temp]: { $slice: [`$${path}`, 0, index] },
                  },
                },

                {
                  $set: {
                    [path]: {
                      $concatArrays: [
                        `$${temp}`,
                        { $slice: [`$${path}`, nextIndex, max] },
                      ],
                    },
                  },
                },

                { $unset: [temp] }
              );
            }
          } else {
            update.push({
              $set: {
                [path]: '$$REMOVE',
              },
            });
          }
        });
        break;
      }

      default: {
        throw new RuntimeError(
          `parseMongoUpdateExpression: invalid expression item.`,
          {
            item,
            operations,
          }
        );
      }
    }
  });

  if (!update.length) {
    if (simple$Set) return { $set: simple$Set };
  } else if (simple$Set) {
    update.push({ $set: simple$Set });
  }

  return update;
}

function stageSetIfNull(field: string, value: any) {
  return {
    $set: {
      [field]: {
        $cond: [
          {
            $ifNull: [`$${field}`, false],
          },
          `$${field}`,
          value,
        ],
      },
    },
  };
}

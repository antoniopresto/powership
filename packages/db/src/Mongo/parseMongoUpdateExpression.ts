import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { ensureArray } from '@darch/utils/lib/ensureArray';
import * as Mongodb from 'mongodb';

import { SanitizedUpdateOperations } from '../Transporter/sanitizeUpdateExpressions';

export function parseMongoUpdateExpression(operations: SanitizedUpdateOperations<any>) {
  const update: Mongodb.UpdateFilter<any>[] = [];

  operations.forEach(function (item) {
    switch (item.operator) {
      case '$set': {
        item.entries.forEach(([k, value]) => {
          update.push({
            $set: {
              [k]: value,
            },
          });
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
          update.push({
            $set: {
              [k]: {
                $cond: [
                  {
                    $ifNull: [`$${k}`, false],
                  },
                  `$${k}`,
                  value,
                ],
              },
            },
          });
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
                  input: `$${k}`,
                  as: 'num',
                  cond: { $not: [{ $in: ['$$num', value] }] },
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
                    input: `$${k}`,
                    as: 'val',
                    cond: { $not: [{ $in: ['$$val', uniqValues] }] },
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
        item.operations.forEach(({ index, path }) => {
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
                      $concatArrays: [`$${temp}`, { $slice: [`$${path}`, nextIndex, max] }],
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
        throw new RuntimeError(`parseMongoUpdateExpression: invalid expression item.`, {
          item,
          operations,
        });
      }
    }
  });

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

import { ParsedUpdateExpression } from '@backland/transporter';
import { merge, RuntimeError } from '@backland/utils';
import type { UpdateFilter } from 'mongodb';

export function parseMongoUpdateExpression(
  operations: ParsedUpdateExpression[]
) {
  const update: UpdateFilter<any>[] = [];

  // used to group all simple $set operations
  // to prevent the error "field names may not start with '$'" for
  // array positional updates
  let simple$Set: UpdateFilter<any> | undefined;

  function _set(filter: Record<string, any>) {
    return (simple$Set = merge(simple$Set || {}, filter));
  }

  (operations as _ExampleUpdate[]).forEach(function (item) {
    switch (item.operator) {
      case '$set': {
        item.entries.forEach(([key, value]) => {
          _set({
            $set: { [key]: value },
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
          _set({
            $push: {
              [k]: { ..._mergeEach(value) },
            },
          });
        });
        break;
      }

      case '$prepend': {
        item.entries.forEach(([k, value]) => {
          _set({
            $push: { [k]: { ..._mergeEach(value), $position: 0 } },
          });
        });
        break;
      }

      case '$pull': {
        item.entries.forEach(([k, value]) => {
          _set({
            $pull: {
              [k]: { $in: _mergeEach(value, '$in').$in },
            },
          });
        });
        break;
      }

      case '$addToSet': {
        item.entries.forEach(([key, value]) => {
          _set({
            $addToSet: { [key]: _mergeEach(value) },
          });
        });
        break;
      }

      case '$remove': {
        item.entries.forEach(([, path]) => {
          if (typeof path !== 'string') return;

          const [, indexParent, indexEnd] = path.match(/(\D*)\.(\d*)$/) || [];
          const index = indexEnd !== undefined ? +indexEnd : undefined;

          if (typeof index === 'number' && index >= 0) {
            path = indexParent;
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
    if (simple$Set) return simple$Set;
  } else if (simple$Set) {
    update.push(simple$Set);
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

function _mergeEach<K extends string>(value: any, key = '$each' as K) {
  const list =
    value && typeof value === 'object' && value[key] ? value[key] : [value];
  return { [key]: list } as { [L in K]: any[] };
}

type _ExampleUpdate = ParsedUpdateExpression<{
  [k: string]: any;
  _id: string;
  list: any[];
  obj: { sub: { sub_sub: 1 } };
}>;

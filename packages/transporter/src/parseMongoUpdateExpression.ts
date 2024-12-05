import { RuntimeError, UpdateDefinition } from '@powership/utils';
import { ParsedUpdateExpression } from './parseUpdateExpression';

type UpdateOperation = UpdateDefinition<any> | UpdateDefinition<any>[];

export function parseMongoUpdateExpression(
  operations: ParsedUpdateExpression[]
): UpdateOperation {
  const needsPipeline = operations.some((operation) =>
    requiresPipeline(operation)
  );

  const hasPositionalOperator = operations.some(
    (operation) =>
      operation.operator === '$set' &&
      operation.entries.some(([key]) => key.includes('$'))
  );

  if (needsPipeline && hasPositionalOperator) {
    throw new RuntimeError(
      'Cannot mix positional operators with operations that require pipeline',
      { operations }
    );
  }

  return needsPipeline
    ? parsePipelineUpdate(operations)
    : parseTraditionalUpdate(operations);
}

function requiresPipeline(operation: ParsedUpdateExpression): boolean {
  switch (operation.operator) {
    case '$remove':
      return operation.entries.some(([, path]) => {
        if (typeof path !== 'string') return false;
        return !!path.match(/(\D*)\.(\d*)$/);
      });
    case '$prepend':
      return true;
    case '$setIfNull':
      return true;
    default:
      return false;
  }
}

function parseTraditionalUpdate(
  operations: ParsedUpdateExpression[]
): UpdateDefinition<any> {
  const update: Record<string, any> = {};

  operations.forEach((operation) => {
    switch (operation.operator) {
      case '$set': {
        update.$set = update.$set || {};
        operation.entries.forEach(([key, value]) => {
          update.$set[key] = value;
        });
        break;
      }
      case '$setOnInsert': {
        update.$setOnInsert = update.$setOnInsert || {};
        operation.entries.forEach(([key, value]) => {
          update.$setOnInsert[key] = value;
        });
        break;
      }
      case '$inc': {
        update.$inc = update.$inc || {};
        operation.entries.forEach(([key, value]) => {
          update.$inc[key] = value;
        });
        break;
      }
      case '$append': {
        update.$push = update.$push || {};
        operation.entries.forEach(([key, value]) => {
          update.$push[key] = _mergeEach(value);
        });
        break;
      }
      case '$pull': {
        update.$pull = update.$pull || {};
        operation.entries.forEach(([key, value]) => {
          update.$pull[key] = value;
        });
        break;
      }
      case '$addToSet': {
        update.$addToSet = update.$addToSet || {};
        operation.entries.forEach(([key, value]) => {
          update.$addToSet[key] = _mergeEach(value);
        });
        break;
      }
      case '$remove': {
        update.$unset = update.$unset || {};
        operation.entries.forEach(([, path]) => {
          if (typeof path !== 'string') return;
          if (!path.match(/(\D*)\.(\d*)$/)) {
            update.$unset[path] = '';
          }
        });
        break;
      }
    }
  });

  return update;
}

function parsePipelineUpdate(
  operations: ParsedUpdateExpression[]
): UpdateDefinition<any>[] {
  const pipeline: UpdateDefinition<any>[] = [];

  operations.forEach((operation) => {
    switch (operation.operator) {
      case '$set': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push({ $set: { [key]: value } });
        });
        break;
      }
      case '$setOnInsert': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push({
            $set: {
              [key]: {
                $ifNull: [`$${key}`, value],
              },
            },
          });
        });
        break;
      }
      case '$setIfNull': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push(stageSetIfNull(key, value));
        });
        break;
      }
      case '$inc': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push({
            $set: {
              [key]: {
                $sum: [`$${key}`, value],
              },
            },
          });
        });
        break;
      }
      case '$append': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push({
            $set: {
              [key]: {
                $concatArrays: [
                  { $ifNull: [`$${key}`, []] },
                  _mergeEach(value).$each,
                ],
              },
            },
          });
        });
        break;
      }
      case '$remove': {
        operation.entries.forEach(([, _path]) => {
          if (typeof _path !== 'string') return;
          const path = _path as string;

          const [, indexParent, indexEnd] = path.match(/(\D*)\.(\d*)$/) || [];
          const index = indexEnd !== undefined ? +indexEnd : undefined;

          if (typeof index === 'number' && index >= 0) {
            const arrayPath = indexParent;
            if (index === 0) {
              pipeline.push({
                $set: {
                  [arrayPath]: {
                    $slice: [`$${arrayPath}`, 1, 999999999],
                  },
                },
              });
            } else {
              const temp = `temp[[${arrayPath}]]`;
              pipeline.push(
                {
                  $set: {
                    [temp]: {
                      $slice: [`$${arrayPath}`, 0, index],
                    },
                  },
                },
                {
                  $set: {
                    [arrayPath]: {
                      $concatArrays: [
                        `$${temp}`,
                        {
                          $slice: [`$${arrayPath}`, index + 1, 999999999],
                        },
                      ],
                    },
                  },
                },
                { $unset: [temp] }
              );
            }
          } else {
            pipeline.push({ $set: { [path]: '$$REMOVE' } });
          }
        });
        break;
      }
      case '$prepend': {
        operation.entries.forEach(([key, value]) => {
          pipeline.push({
            $set: {
              [key]: {
                $concatArrays: [
                  _mergeEach(value).$each,
                  { $ifNull: [`$${key}`, []] },
                ],
              },
            },
          });
        });
        break;
      }
    }
  });

  return pipeline;
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

function _mergeEach(value: any) {
  return value && typeof value === 'object' && value.$each
    ? value
    : { $each: [value] };
}

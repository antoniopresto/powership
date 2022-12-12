import {
  AnyCollectionIndexConfig,
  FilterRecord,
  parseUpdateExpression,
  UpdateExpression,
} from '@backland/transporter';
import {
  createDB,
  ensureArray,
  inspectObject,
  TDocument,
  UpdateDefinition,
} from '@backland/utils';

export const _testingIndexConfig: AnyCollectionIndexConfig = {
  entity: 'temp',
  indexes: [
    {
      PK: ['#'],
      name: '_id',
    },
  ],
};

export function aggioUpdate<T extends TDocument>(
  doc: T,
  update: UpdateExpression<T>,
  indexConfig: AnyCollectionIndexConfig,
  options?: {
    // when updating array by position, we need to provide the query
    condition?: FilterRecord;
  }
): T {
  const { condition = {} } = options || {};

  const operations = parseUpdateExpression(update, indexConfig);

  const db = createDB({ docs: [doc] });

  const handlers: Handlers = {
    $addToSet(val) {
      return {
        $addToSet: _eachList(val),
      };
    },
    $append(val) {
      return {
        $push: _eachList(val),
      };
    },
    $inc(val) {
      return { $inc: val };
    },
    $prepend(val) {
      return {
        $prepend: _eachList(val),
      };
    },
    $pull(val) {
      return { $pull: _eachList(val, '$in') };
    },
    $remove(val) {
      return {
        $unset: ensureArray(val).reduce((acc, next) => {
          return {
            ...acc,
            [next]: true as true,
          };
        }, {}),
      };
    },
    $set(val) {
      return { $set: val };
    },
    $setIfNull(val) {
      return {
        $setIfNull: val,
      };
    },
    $setOnInsert() {
      throw new Error(`$setOnInsert not applies on updates.`);
    },
  };

  operations.forEach((op) => {
    op.entries.forEach(([k, v]) => {
      let parsed;
      if (op.operator === '$remove') {
        parsed = handlers[op.operator](ensureArray(v as any));
      } else {
        parsed = handlers[op.operator]({
          [k]: v,
        });
      }

      try {
        db.update(condition, parsed);
      } catch (e: any) {
        e.message = `Failed to run operation ${op.operator} ${e.message} ${
          e.message
        } \n${inspectObject(op)}`;
        throw e;
      }
    });
  });

  const res = db.findOne({}).exec() as T;
  delete res._id;
  return res;
}

type Handlers = {
  [K in keyof UpdateExpression<TDocument>]-?: (
    value: NonNullable<UpdateExpression<TDocument>[K]>
  ) => UpdateDefinition<{ _id: string }>;
};

function _eachList<K extends '$each' | '$in'>(
  input: Record<any, any>,
  $operator = '$each' as K
): { [K: string]: { [L in K]?: any[] } } {
  const res = {} as any;

  Object.entries(input).forEach(([k, v]) => {
    res[k] = _mergeEach(v, $operator);
  }, {});

  return res;
}

function _mergeEach<K extends string>(value: any, key = '$each' as K) {
  const list =
    value && typeof value === 'object' && value[key] ? value[key] : [value];
  return { [key]: list } as { [L in K]: any[] };
}

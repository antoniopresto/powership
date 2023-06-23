import {
  AnyRecord,
  ensureArray,
  Paths,
  PathType,
  pick,
  setByPath,
} from '@swind/utils';
import {
  applyPatches,
  Draft,
  enablePatches,
  Patch,
  produce,
  produceWithPatches,
} from 'immer';
import * as Y from 'yjs';

enablePatches();

export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = { [member: string]: JSONValue };
export interface JSONArray extends Array<JSONValue> {}
export type Snapshot = JSONObject | JSONArray;

export type UpdateContext<S> = {
  set: <P extends Paths<S>>(path: P, value: PathType<S, P>) => void;
  [K: string]: unknown;
};

export type UpdateFn<S extends Snapshot> = (
  draft: Draft<S>,
  context: UpdateContext<S>
) => any;

export type ToJSON<T> = T extends { [K: string]: any }
  ? { [K in keyof T as IsJSONValue<T[K]> extends 0 ? never : K]: ToJSON<T[K]> }
  : [T] extends [JSONValue]
  ? T
  : never;

export type IsJSONValue<T> = T extends JSONValue
  ? [keyof T] extends [never]
    ? 0
    : 1
  : 0;

const PATCH_REPLACE = 'replace';
const PATCH_ADD = 'add';
const PATCH_REMOVE = 'remove';

export type YmmerProduceResult<V> = {
  patches: Patch[];
  reversePatches: Patch[];
  draft: V;
  save(): V;
};

export class YUtils {
  /**
   * Update JSONValue and return the patches applied
   */
  static produce = (options: {
    source: Y.Array<any> | Y.Map<any>;
    sourceJSON: AnyRecord;
    update: UpdateFn<any> | UpdateFn<any>[];
    ignoreTransaction?: boolean;
    overrideContext?: (context: UpdateContext<any>) => UpdateContext<any>;
  }): YmmerProduceResult<any> => {
    const { source, sourceJSON, update, ignoreTransaction, overrideContext } =
      options;

    const updates = ensureArray(update);

    let currentJSON = sourceJSON;
    let localUpdates: Patch[] = [];

    updates.forEach((cb) => {
      const res = produceWithPatches(currentJSON, (draft: any) => {
        let context: UpdateContext<any> = {
          set(path: any, val) {
            setByPath(draft, path, val);
          },
        };

        if (overrideContext) {
          context = overrideContext(context);
        }

        return cb(draft, context);
      });
      currentJSON = res[0];
      localUpdates.push(...res[1]);
    });

    const [draft, patches, reversePatches] = produceWithPatches(
      sourceJSON,
      (d) => {
        return applyPatches(d, localUpdates);
      }
    );

    return {
      patches,
      reversePatches,
      draft,
      save() {
        if (!ignoreTransaction && source.doc) {
          Y.transact(source.doc, () => {
            YUtils.updateFromImmerPatches(source, patches);
          });
        } else {
          YUtils.updateFromImmerPatches(source, patches);
        }
        return source.toJSON();
      },
    };
  };

  /**
   * Apply immer patches to a Y.Type
   * @param yType
   * @param patches
   */
  static updateFromImmerPatches = (
    yType: Y.Map<any> | Y.Array<any>,
    patches: Patch[]
  ) => {
    return patches.map((patch) => {
      const { path, op, value } = patch;

      if (!path.length) {
        if (op !== PATCH_REPLACE) {
          throw new Error(
            `Not supported operation\n` +
              JSON.stringify(
                {
                  value,
                  patch,
                  yType,
                },
                null,
                1
              )
          );
        }

        if (yType instanceof Y.Map && this.isJSONObject(value)) {
          yType.clear();
          for (const k in value) {
            yType.set(k, this.toYDataType(value[k]));
          }
          return value;
        }

        if (yType instanceof Y.Array && this.isJSONArray(value)) {
          yType.delete(0, yType.length);
          yType.push(value.map(this.toYDataType));
          return value;
        }

        throw new Error(
          `Not supported operation"\n${JSON.stringify(
            {
              value,
              patch,
              yType,
            },
            null,
            1
          )}"`
        );
      }

      const base = path.slice(0, -1).reduce((prev, field) => {
        return prev.get(field as never);
      }, yType);

      const property = path[path.length - 1];

      if (base instanceof Y.Map && typeof property === 'string') {
        switch (op) {
          case PATCH_ADD:
          case PATCH_REPLACE: {
            const val = this.toYDataType(value);
            base.set(property, val);
            return value;
          }
          case PATCH_REMOVE:
            base.delete(property);
            return undefined;
        }

        throw new Error(
          `Not supported operation\n` +
            JSON.stringify(
              {
                value,
                patch,
                yType,
              },
              null,
              1
            )
        );
      }

      if (base instanceof Y.Array && typeof property === 'number') {
        switch (op) {
          case PATCH_ADD: {
            const val = this.toYDataType(value);
            base.insert(property, [val]);
            return value;
          }
          case PATCH_REPLACE: {
            const val = this.toYDataType(value);
            base.delete(property);
            base.insert(property, [val]);
            return value;
          }
          case PATCH_REMOVE:
            base.delete(property);
            return undefined;
        }

        return base;
      }

      if (base instanceof Y.Array && property === 'length') {
        if (value < base.length) {
          const diff = base.length - value;
          base.delete(value, diff);
        }
        return value;
      }

      throw new Error(
        `Not supported operation\n${JSON.stringify(
          { base, property, patch },
          null,
          1
        )}`
      );
    });
  };

  /**
   * Apply Y.Events to a Snapshot
   * @param snapshot
   * @param events
   */
  static produceFromYJS = <T extends Snapshot>(
    snapshot: T,
    events: Y.YEvent<any>[]
  ) => {
    return produce(snapshot, (draft) => {
      events.forEach((yEvent) => {
        const valueInPath = pick(draft, yEvent.path);

        if (yEvent instanceof Y.YMapEvent && this.isJSONObject(valueInPath)) {
          const source = yEvent.target as Y.Map<any>;

          return yEvent.changes.keys.forEach((change, key) => {
            switch (change.action) {
              case 'add':
              case 'update':
                valueInPath[key] = this.toPlainValue(source.get(key));
                break;
              case 'delete':
                delete valueInPath[key];
                break;
            }
          });
        }

        if (yEvent instanceof Y.YArrayEvent && this.isJSONArray(valueInPath)) {
          let retain = 0;
          return yEvent.changes.delta.forEach((change) => {
            if (change.retain) {
              retain += change.retain;
            }
            if (change.delete) {
              valueInPath.splice(retain, change.delete);
            }
            if (change.insert) {
              if (Array.isArray(change.insert)) {
                valueInPath.splice(
                  retain,
                  0,
                  ...change.insert.map(this.toPlainValue)
                );
              } else {
                valueInPath.splice(retain, 0, this.toPlainValue(change.insert));
              }
              retain += change.insert.length;
            }
          });
        }

        throw new Error(
          `Not supported operation: YEvent not supported.\n` +
            JSON.stringify(yEvent, null, 1)
        );
      });
    });
  };

  static toPlainValue = (v: Y.Map<any> | Y.Array<any> | JSONValue) => {
    if (v instanceof Y.Map || v instanceof Y.Array) {
      return v.toJSON() as JSONObject | JSONArray;
    } else {
      return v;
    }
  };

  static isJSONPrimitive = (v: JSONValue): v is JSONPrimitive => {
    const t = typeof v;
    return t === 'string' || t === 'number' || t === 'boolean' || v === null;
  };

  static isJSONArray = (v: JSONValue): v is JSONArray => {
    return Array.isArray(v);
  };

  static isJSONObject = (v: JSONValue): v is JSONObject => {
    return !this.isJSONArray(v) && typeof v === 'object';
  };

  static toYDataType = (v: JSONValue) => {
    if (this.isJSONPrimitive(v)) {
      return v;
    } else if (this.isJSONArray(v)) {
      const arr = new Y.Array();
      this.applyJsonArray(arr, v);
      return arr;
    } else if (this.isJSONObject(v)) {
      const map = new Y.Map();
      this.applyJsonObject(map, v);
      return map;
    } else {
      return undefined;
    }
  };

  static applyJsonArray = (dest: Y.Array<unknown>, source: JSONArray) => {
    dest.push(source.map(this.toYDataType));
  };

  static applyJsonObject = (dest: Y.Map<unknown>, source: JSONObject) => {
    Object.entries(source).forEach(([k, v]) => {
      dest.set(k, this.toYDataType(v));
    });
  };

  static isPromise = (t: any): t is PromiseLike<any> => {
    return typeof pick(t, 'then') === 'function';
  };
}

import {
  __getCachedFieldInstance,
  FinalFieldDefinition,
  GraphType,
  Infer,
  ObjectDefinitionInput,
  ObjectType,
  TAnyFieldType,
} from '@powership/schema';
import { diff, Difference } from '@powership/utils';
import {
  AnyRecord,
  getStack,
  isPlainObject,
  parsePath,
  pick,
} from '@powership/utils';
import * as Y from 'yjs';

import { UpdateContext, YUtils } from './YUtils';
import {
  DEEPSTATE_ERROR,
  DEEPSTATE_ERRORS,
  DeepStateSubscription,
  IDeepState as DS,
  SubscriptionContext,
} from './interfaces/DeepState';

export const DeepState = (() => {
  class DeepStateImpl extends GraphType<any> {
    constructor(
      name: string,
      schemaDefinition: ObjectDefinitionInput,
      initialState: () => any
    ) {
      super(name, { object: schemaDefinition });

      const initial = initialState();
      this.__defaults = this.schema.parse(initial);
      this.__state = this.__defaults;

      this.shape = schemaDefinition;
      this.initialState = initialState;

      this.doc = new Y.Doc({});
      this.map = this.doc.getMap(`$ROOT_${name}`);

      const observer = (events: Y.YEvent<any>[]) => {
        const prev = this.state;
        const next = YUtils.produceFromYJS(this.state, events);
        this.__state = next;

        const diffByPath: {
          [K: string]: Difference<any>[];
        } = {};

        const allAffectedPaths = new Map<
          string,
          { oldValue: any; newValue: any }
        >();

        this.subscriptions.forEach((subscription) => {
          const differences = diff(prev, next, subscription.path);
          if (differences.length) {
            diffByPath[subscription.path] = differences;
          }
          differences.forEach((difference) => {
            const parts: (string | number)[] = [];
            difference.pathParts.forEach((path) => {
              parts.push(path);
              const curr = parts.join('.');
              allAffectedPaths.set(curr, {
                newValue: pick(next, curr),
                oldValue: pick(prev, curr),
              });
            });
          });
        });

        const updatesFromSubscriptions: [string, any][] = [];

        this.subscriptions.forEach((subscription) => {
          const differencesInPath = diffByPath[subscription.path];

          differencesInPath?.forEach(({ newValue, oldValue }) => {
            const subscriptionContext: SubscriptionContext<any, any, any> = {
              oldValue,
              newValue,
              affected(affPath: string) {
                const apath = subscription.path
                  ? `${subscription.path}.${affPath}`
                  : affPath;

                return allAffectedPaths.get(apath);
              },
              subscriptionPath: subscription.path,
              set: (setPath, value) => {
                updatesFromSubscriptions.push([setPath, value]);
              },
              differences: differencesInPath,
            };

            subscription(newValue, subscriptionContext);
          });
        });

        if (updatesFromSubscriptions.length) {
          this.updateMany({
            sourceJSON: this.state,
            updates: updatesFromSubscriptions,
            ignoreTransaction: false,
          });
        }
      };

      this.map.observeDeep(observer);
      this.unsubscribe = () => this.map.unobserveDeep(observer);
    }

    subscribe = (path: string, callback: DeepStateSubscription<any>) => {
      const subscription: DeepStateSubscription<any> & { path: string } =
        function subscription(...args) {
          try {
            return callback(...args);
          } catch (e: any) {
            e.stack = getStack(callback);
            throw e;
          }
        };

      Object.defineProperties(subscription, {
        name: { value: `subscription_${path}` },
      });

      subscription.path = path;

      const subscriptions = this.subscriptions;
      subscriptions.add(subscription);

      return function unsubscribe() {
        subscriptions.delete(subscription);
      };
    };

    shape: unknown;
    initialState: () => AnyRecord; // default values
    doc: Y.Doc;
    map: Y.Map<any>;
    subscriptions = new Set<DeepStateSubscription<any> & { path: string }>();
    unsubscribe: () => void;

    get isDeepState() {
      return true;
    }

    get symbol() {
      return DeepState.symbol;
    }

    __state: any;
    __defaults: any;
    get state() {
      return {
        ...this.__defaults,
        ...this.__state,
      };
    }

    get schema() {
      const { objectType } = this.__lazyGetter;
      if (!objectType) throw new Error(`INVALID_OBJECT_TYPE`);
      return objectType as ObjectType<{ $string: 'any' }>;
    }

    get = (property: string) => {
      const value = pick(this.state, property);
      return this.check(property, value, DEEPSTATE_ERRORS.INVALID_STATE_FOUND);
    };

    set = (...args: any[]) => {
      return this.updateMany({
        updates: [args],
        sourceJSON: this.map.toJSON(),
        ignoreTransaction: false,
      });
    };

    updateMany = (params: {
      updates: any[][]; // arguments received from multiple set calls
      ignoreTransaction: boolean;
      sourceJSON: AnyRecord;
      overrideContext?: (context: UpdateContext<any>) => UpdateContext<any>;
    }) => {
      try {
        const payload = this.patchMany(params);
        this.parse({ ...this.state, ...payload.draft });
        this.__state = payload.save();
      } catch (e: any) {
        e.message = `${DEEPSTATE_ERRORS.UNEXPECTED}: ${e.message}`;
        throw e;
      }

      return this;
    };

    patchMany = (options: {
      updates: any[][]; // arguments received from multiple set calls
      ignoreTransaction: boolean;
      sourceJSON: AnyRecord;
      overrideContext?: (context: UpdateContext<any>) => UpdateContext<any>;
    }) => {
      let {
        updates,
        ignoreTransaction,
        sourceJSON = this.map.toJSON(),
        overrideContext,
      } = options;

      return YUtils.produce({
        source: this.map,
        ignoreTransaction,
        sourceJSON,
        overrideContext,
        update: updates.map((args) => {
          return (root, context) => {
            //
            if (args.length === 1 && typeof args[0] === 'function') {
              return args[0](root, context);
            }

            if (args.length === 1 && isPlainObject(args[0])) {
              return { ...this.state, ...root, ...args[0] };
            }

            let [a0, a2] = args;

            if (typeof a0 === 'string') {
              // @ts-ignore
              context.set(a0, a2);
              return;
            }

            throw new Error(DEEPSTATE_ERRORS.INVALID_UPDATE_EXPRESSION);
          };
        }),
      });
    };

    call = () => {
      throw new Error(`NOT_IMPLEMENTED`);
    };
    methods = () => {
      throw new Error(`NOT_IMPLEMENTED`);
    };
    resolvers = () => {
      throw new Error(`NOT_IMPLEMENTED`);
    };

    typesCache = new Map<string, TAnyFieldType>();

    check = (path: string, value: any, message: DEEPSTATE_ERROR) => {
      try {
        return this.getType(path).parse(value);
      } catch (e: any) {
        e.message = message ? `${message}\n${e.message}` : e.message;
        e.message = `${e.message}\npath: ${path}`;
        e.stack = getStack(this.check);
        throw e;
      }
    };

    getType = (property: string): TAnyFieldType => {
      let existing = this.typesCache.get(property);
      if (existing) return existing;
      const { parts } = parsePath(property);

      let def = parts.reduce((prev, next) => {
        if (prev.type === 'object') {
          return prev.def[next];
        }
        return undefined;
      }, this.definition as FinalFieldDefinition);

      existing = def ? __getCachedFieldInstance(def) : undefined;

      if (!existing) {
        throw new InvalidStatePathError(property);
      }

      this.typesCache.set(property, existing);

      return existing;
    };

    static create = (...args: any) => {
      // @ts-ignore
      return new DeepStateImpl(...args);
    };

    static symbol = Symbol('DeepState');

    static isDeepState = (input): input is DS<any> => {
      return input?.isDeepState === true;
    };

    static assertDeepState = (input): asserts input is DS<any> => {
      if (!DeepState.isDeepState(input)) {
        throw new TypeError('VALUE_IS_NOT_DEEPSTATE');
      }
      if (input.symbol !== DeepState.symbol) {
        throw new TypeError('DEEPSTATE_VERSION_MISMATCH');
      }
    };
  }

  function Res(this: any, ...args: any) {
    // @ts-ignore
    return new DeepStateImpl(...args);
  }

  Object.keys(DeepStateImpl).forEach((key) => {
    Res[key] = DeepStateImpl[key];
  });

  Object.defineProperty(DeepStateImpl, 'name', {
    value: 'DeepState',
  });

  Object.defineProperty(DeepStateImpl.prototype, 'name', {
    value: 'DeepState',
  });

  Object.defineProperty(DeepStateImpl.prototype, 'name', {
    value: 'DeepState',
  });

  return Res as unknown as DeepState;
})();

export const createState = DeepState.create;

export class InvalidStatePathError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'InvalidStatePathError';
  }
}

export interface _DSImplementationBase {
  create<SchemaDefinition extends ObjectDefinitionInput>(
    name: string,
    schema: SchemaDefinition,
    initState: () => Infer<{ object: SchemaDefinition }>
  ): DS<Infer<{ object: SchemaDefinition }>, SchemaDefinition>;

  symbol: Symbol;
  isDeepState(input): input is DS<any>;
  assertDeepState(input): asserts input is DS<any>;
}

export interface _DSImplementationClass {
  new <SchemaDefinition extends ObjectDefinitionInput>(
    name: string,
    schema: SchemaDefinition,
    initState: () => Infer<{ object: SchemaDefinition }>
  ): DS<Infer<{ object: SchemaDefinition }>, SchemaDefinition>;
}

export interface _DSImplementationFunction {
  <SchemaDefinition extends ObjectDefinitionInput>(
    name: string,
    schema: SchemaDefinition,
    initState: () => Infer<{ object: SchemaDefinition }>
  ): DS<Infer<{ object: SchemaDefinition }>, SchemaDefinition>;
}

export type DeepState = _DSImplementationBase &
  _DSImplementationClass &
  _DSImplementationFunction;

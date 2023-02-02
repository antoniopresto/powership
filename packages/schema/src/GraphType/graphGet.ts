import { RuntimeError } from '@backland/utils';
import get from 'lodash/get';
import setWith from 'lodash/setWith';

import { objectToQuery } from './objectToQuery';

const utilsKey = '$';
const argsKey = '$A';
const functionKey = '$F';
const sepKey = '.';
const specialKeys = new Set([utilsKey, argsKey, functionKey, sepKey, sepKey]);

// Converts a JavaScript object to a GraphQL Query string
// Full support for nested query / mutation nodes and arguments
// Optionally strip specific object keys using the ignoreFields option

// Support for input arguments [OK]
// Support for query aliases via __aliasFor
// Support for Enum values via EnumType
// Support for variables via __variables
// Support for simple directives (such as @client) via __directives
// Support for one or more inline fragments via __on.__typeName
// Support for full fragments via __all_on
// Support for named queries/mutations via __name
export class QueryBuilder<S extends Record<string, any> = Record<string, any>> {
  chain = new Set<string>();
  edges = new Map<string, Function>();
  object: Record<string, any> = {};
  query = '';
  builder: (data: GraphGetData<S>) => Array<any>;

  constructor(builder: (data: GraphGetData<S>) => Array<any>) {
    this.builder = builder;
    builder(this.build());
  }

  read = () => {
    this.object = Object.create(null);
    const self = this;

    const chainArray = [...self.chain.values()];

    chainArray.forEach((entry) => {
      const isFunction = entry.indexOf(utilsKey) > -1;
      const hasArgs = entry.endsWith(argsKey);

      if (!isFunction) {
        const node = Object.create(null);
        setWith(this.object, entry, node);
      } else {
        const parts = entry
          .split(/(\.|\$F|\$A)/)
          .filter((item) => item && !specialKeys.has(item));

        const args = hasArgs ? parts.pop()! : undefined;
        let method = hasArgs ? parts.pop()! : undefined;

        if (method === '$allOn') method = '$all_on';

        const isUtil = method?.startsWith(utilsKey);

        if (isUtil && method) {
          method = `__${method.replace(utilsKey, '')}`;
        }

        const newEntry = method ? [...parts, method] : parts;

        if (!isUtil && hasArgs) {
          newEntry.push('__args');
        }

        const newKey = newEntry
          .filter((el) => el.indexOf('{') === -1 && el.indexOf(utilsKey) === -1)
          .join(sepKey);

        try {
          const json = args ? JSON.parse(args) : get(this.object, newKey, {});

          setWith(this.object, newKey, json);
        } catch (e) {
          throw new RuntimeError(`failed to convert args`, { args, entry });
        }
      }
    });

    return (this.query = objectToQuery(this.object, {
      includeFalsyKeys: true,
      pretty: true,
    }));
  };

  build = (parent: string[] = []): any => {
    const self = this;

    const parentName = parent.join('.');
    function realItem() {}
    Object.defineProperty(realItem, 'name', {
      value: parentName,
    });
    self.edges.set(parentName, realItem);

    return new Proxy(realItem, {
      apply: function (_, _this, args) {
        const propName = parent.pop()!;
        const next = `$F${propName}$F`;

        const argString = ![undefined, ''].includes(args[0])
          ? `$A${JSON.stringify(args[0])}$A`
          : '';

        const newNext = [...parent, `${next}${argString}`];
        self.chain.add(newNext.join('.'));

        return self.build(newNext);
      },

      get(_, prop: string): any {
        if (prop.startsWith(utilsKey)) {
          // prop = '__REMOVE__';
        }

        if (prop === '0') {
          return self.build(parent);
        }
        const next = [...parent, prop];

        const field = next.join('.');

        self.chain.add(field);

        return self.build(next);
      },

      set(
        target: () => void,
        p: string | symbol,
        value: any
        // receiver: any
      ): boolean {
        target[p] = value;
        return true;
      },
    });
  };
}

export function graphGet<T extends Record<string, any>>(
  builder: (data: GraphGetData<T>) => Array<any>
): QueryBuilder<T> {
  return new QueryBuilder(builder);
}

export type Utils<T extends Readonly<Record<string, unknown>>> = {
  $aliasFor: (alias: string) => GraphGetData<T>;
  $all_on: (args: string[]) => GraphGetData<T>;
  $args: (args: Record<string, any>) => GraphGetData<T>;
  $directives: (args: Record<string, any>) => GraphGetData<T>;
  $name: (alias: string) => GraphGetData<T>;
  $on: (
    record:
      | { [K: string]: unknown; __typeName: string }
      | { [K: string]: unknown; __typeName: string }[]
  ) => GraphGetData<T>;
  $val: T;
  $variables: (args: Record<string, any>) => GraphGetData<T>;
};

export type GraphGetData<O extends Readonly<Record<string, any>>> = {
  [K in keyof O]: ((
    ...args: any[]
  ) => Utils<GraphGetData<O[K]>> & GraphGetData<O[K]>) &
    Utils<O[K]> &
    GraphGetData<O[K]>;
};

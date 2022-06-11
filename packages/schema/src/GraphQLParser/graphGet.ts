import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import setWith from 'lodash/setWith';

import { objectToQuery } from './objectToQuery';

const utilsKey = '$';

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

  constructor(public builder: (data: S) => Array<any>) {
    builder(this.build());
  }

  read = () => {
    this.object = Object.create(null);
    const self = this;

    const chainArray = [...self.chain.values()];
    chainArray.forEach((value, index) => {
      if (value.endsWith(utilsKey)) {
        const methodAndArgsKey = chainArray[index + 2];
        const parts = methodAndArgsKey
          .split(/(\.\$\.|\$F|\$A)/)
          .filter((item) => item && item.indexOf(utilsKey) === -1);

        const [parentKey, method, args] = parts;

        const real: any = self.edges.get(parentKey);

        real[`__${method}`] = JSON.parse(args);

        delete chainArray[index];
        delete chainArray[index + 1];
        delete chainArray[index + 2];
      }
    });

    chainArray.forEach((key) => {
      const edge = this.edges.get(key);
      let value = Object.create(null);

      // TODO find a better way
      const fn = key.match(/(\$F)(.*)(\$F)/)?.[2];

      if (fn) {
        const parts = key.split(/\$[A|F]/g).filter(Boolean);

        const lastPart = parts[parts.length - 1];
        const args = lastPart.endsWith('}') ? lastPart : undefined;

        key = key
          .split(/\$[A|F]/)
          .filter((el) => !el.startsWith('{'))
          .join('');

        if (args) {
          try {
            if (args !== '{}') {
              value = JSON.parse(args);
              key = key + '.__args';
            }
          } catch (e) {
            throw new RuntimeError(`Failed to parse query args`, {
              args,
              key,
            });
          }
        }
      }

      // defining the value props (like __aliasFor, etc.) from the reference in edge.
      if (edge) {
        Object.entries(edge).forEach(([k, v]) => {
          setWith(value, k, v);
        });
      }
      setWith(this.object, key, value);
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

      get(_, prop: string, receiver): any {
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
  builder: (data: T) => Array<T>
): QueryBuilder<T> {
  return new QueryBuilder(builder);
}

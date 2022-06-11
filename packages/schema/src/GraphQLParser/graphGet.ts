import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import setWith from 'lodash/setWith';

import { objectToQuery } from './objectToQuery';

export class QueryBuilder<S extends Record<string, any> = Record<string, any>> {
  chain = new Set<string>();
  object: Record<string, any> = {};
  query = '';

  constructor(public builder: (data: S) => Array<any>) {
    builder(this.build());
  }

  read = () => {
    this.object = Object.create(null);

    this.chain.forEach((key) => {
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
          key = key + '.__args';
          try {
            value = JSON.parse(args);
          } catch (e) {
            throw new RuntimeError(`Failed to parse query args`, {
              args,
              key,
            });
          }
        }
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

    function gogo() {}

    return new Proxy(gogo, {
      apply: function (_, _this, args): any {
        const next = `$F${parent.pop()!}$F`;
        const oldKey = [...parent, next].join('.');

        self.chain = new Set(
          [...self.chain.values()].filter((el) => !el.startsWith(oldKey))
        );

        const argString =
          args[0] !== undefined ? `$A${JSON.stringify(args[0])}$A` : '';

        const newNext = [...parent, `${next}${argString}`];
        self.chain.add(newNext.join('.'));

        return self.build(newNext);
      },

      get(_, prop: string): any {
        if (prop === '0') {
          return self.build(parent);
        }
        const next = [...parent, prop];

        const field = next.join('.');

        self.chain.add(field);
        return self.build(next);
      },
    });
  };
}

export function graphGet<T extends Record<string, any>>(
  builder: (data: T) => Array<T>
) {
  return new QueryBuilder(builder).read();
}

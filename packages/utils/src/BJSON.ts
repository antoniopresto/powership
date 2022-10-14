import { dateSerialize } from './dateSerialize';
import { getTypeName } from './getTypeName';

export class Serializer<Type> {
  static SEP = 'ː';
  name: string;
  sep: string;
  blockStart: string;
  blockEnd: string;
  paramSep: string;

  constructor(
    public formatter: {
      name: string;
      tsName(): string;
      getParams(value: Type): string[];
      hydrate(...str: string[]): Type;
      match(value: unknown): undefined | Type;
    }
  ) {
    this.name = formatter.name;
    this.sep = Serializer.SEP;
    this.paramSep = this.sep;
    this.blockStart = `${this.sep}${this.name}${this.sep}(`;
    this.blockEnd = `)`;
  }

  stringify(value: unknown) {
    const tested = this.formatter.match(value);

    if (tested === undefined) return;

    const params = this.formatter.getParams(tested);

    return `${this.blockStart}${params.join(this.paramSep)}${this.blockEnd}`;
  }

  parse(value: string) {
    const str = value?.toString?.();
    if (typeof str !== 'string') return;

    if (!(str.startsWith(this.blockStart) && str.endsWith(this.blockEnd))) {
      return;
    }

    const params = value
      .slice(this.blockStart.length)
      .slice(0, -this.blockEnd.length)
      .split(this.paramSep);

    return this.formatter.hydrate(...params);
  }
}

export class BJSONConstructor {
  static serializers = [
    new Serializer<Date>({
      name: 'Date',
      tsName() {
        return 'Date';
      },
      hydrate(value) {
        return new Date(value);
      },
      getParams(value) {
        return [value.toJSON()];
      },
      match(value: unknown) {
        return value instanceof Date
          ? value
          : typeof value === 'string'
          ? dateSerialize(value) || undefined
          : undefined;
      },
    }),

    new Serializer<RegExp>({
      name: 'RegExp',
      tsName() {
        return 'RegExp';
      },
      hydrate(source, flags) {
        return new RegExp(source, flags);
      },
      getParams(value) {
        return [value.source, value.flags];
      },
      match(value: unknown) {
        return value instanceof RegExp ? value : undefined;
      },
    }),

    new Serializer<number>({
      name: 'NaN',
      tsName() {
        return 'NaN';
      },
      hydrate() {
        return NaN;
      },
      getParams() {
        return [];
      },
      match(value: unknown) {
        return typeof value === 'number' && isNaN(value) ? value : undefined;
      },
    }),
  ];

  serializers: Serializer<any>[] = [];

  constructor(
    options: {
      extraSerializers?: Serializer<any>[];
    } = {}
  ) {
    this.serializers = [
      ...BJSONConstructor.serializers,
      ...(options.extraSerializers || []),
    ];
  }

  stringify = (
    value: any,
    options: StringifyOptions & {
      handler?: (
        utils: StringifyOptions & {
          self: BJSONConstructor;
          value: any;
          serializer?: Serializer<any>;
        }
      ) => string | undefined;
    } = {}
  ) => {
    const { handler, quoteValues, quoteKeys } = options;
    let self = this;

    let str = stringify(value, {
      ...options,
      quoteValues,
      quoteKeys,
      defaultHandler: ({ value, options }) => {
        const serializer = this.serializers.find(
          (el) => el.formatter.match(value) !== undefined
        );

        const handled = handler?.({ ...options, value, self, serializer });
        if (handled !== undefined) return handled;
        if (!serializer) return undefined;

        return serializer.stringify(value);
      },
    });

    return `${str}`;
  };

  parse = (input: string) => {
    return JSON.parse(input, (_key, value) => {
      for (let serializer of this.serializers) {
        const match = serializer.parse(value);
        if (match !== undefined) return match;
      }
      return value;
    });
  };

  getSerializer(value: string) {
    const name = value?.split?.(`${Serializer.SEP}`)?.[0];
    if (!name) return;
    return this.serializers.find((s) => s.name === name);
  }

  tsName(value: string) {
    return this.getSerializer(value)?.formatter.tsName();
  }
}

export type StringifyDefaultHandler = (payload: {
  value: any;
  options: StringifyOptions;
}) => string | undefined;

export type StringifyOptions = {
  defaultHandler?: StringifyDefaultHandler;
  quoteValues?: (
    str: string | number | boolean,
    info: { key: string | number | undefined }
  ) => string;
  quoteKeys?: (str: string) => string;
  key?: string | number;
};

// some parts from meteor ejson
export function stringify(
  value: any,
  options: StringifyOptions = {}
): string | undefined {
  let {
    defaultHandler,
    quoteValues = (v) => JSON.stringify(v),
    quoteKeys = JSON.stringify,
  } = options;

  const typeName = getTypeName(value);

  const info = { key: options?.key ?? undefined };

  const handled = defaultHandler?.({ value, options });
  if (handled !== undefined) return quoteValues(handled, info);

  switch (typeName) {
    case 'String':
      return quoteValues(value, info);

    case 'NaN':
    case 'Infinity':
      return 'null';

    case 'Number':
      return quoteValues(value, info);

    case 'Boolean':
      return quoteValues(value, info);

    case 'Array': {
      let partial: string[] = [];
      let v; // Is the value an array?

      // The value is an array. Stringify every element. Use null as a
      // placeholder for non-JSON values.
      let length = value.length;

      for (let i = 0; i < length; i += 1) {
        partial[i] = stringify(value[i], { ...options, key: i }) || 'null';
      } // Join all the elements together, separated with commas, and wrap
      // them in brackets.

      if (partial.length === 0) {
        v = '[]';
      } else {
        v = '[' + partial.join(',') + ']';
      }

      return v;
    }

    case 'Null':
      return 'null';

    case 'Undefined':
      return 'undefined';

    case 'Function':
      return 'function unknown(){}';

    default: {
      let partial: string[] = [];
      let v;

      let keys = Object.keys(value);

      keys.forEach(function (k) {
        v = stringify(value[k], { ...options, key: k });

        if (v) {
          partial.push(quoteKeys(k) + ':' + v);
        }
      }); // Join all the member texts together, separated with commas,
      // and wrap them in braces.

      if (partial.length === 0) {
        v = '{}';
      } else {
        v = '{' + partial.join(',') + '}';
      }

      return v;
    }
  }
} // If the JSON object does not yet have a stringify method, give it one.

export const BJSON = new BJSONConstructor();

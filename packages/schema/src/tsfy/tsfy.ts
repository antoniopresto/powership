import {
  describeType,
  ensureArray,
  hashString,
  proxyRealValue,
  noop,
  uniq,
} from '@backland/utils';

import { GraphType, isFieldTypeName, ObjectType } from '@backland/schema';
import { CircularDeps } from '../CircularDeps';

export const tsfy_defaults = {
  iterationLimit: 5000,
};

export type TSFYConfig = {
  context?: TSFYContext;
  iterationLimit?: number;
  many?: boolean;
  groupInTypeThreshold?: number;
};

export function tsfy(input: any, config?: TSFYConfig) {
  const {
    context = createTSFYContext(),
    iterationLimit = tsfy_defaults.iterationLimit,
    many = false,
    groupInTypeThreshold = 2,
  } = config || {};

  const header = new Set<string>();
  const footer = new Set<string>();

  const entries = (() => {
    if (many) {
      if (Array.isArray(input)) {
        return input;
      } else {
        throw new Error(
          `tsfy: expected input value to be an array when options.many is true.`
        );
      }
    }
    return [input];
  })();

  function getParts() {
    const body = (() => {
      function runPart(part: any) {
        const ref = createTSFYRef(part, context);
        return resolvePart(ref, undefined, 0);
      }
      return entries.map(runPart).join('\n');
    })();

    Object.values(context.header).forEach((el) => header.add(el));

    return { header, body, footer };
  }

  function toString(options?: { prettier?: boolean; name?: string }) {
    const { name, prettier } = options || {};
    const { footer, header, body } = getParts();

    if (name) {
      return [
        ...header.values(),
        `export type ${name} = ${body};`,
        ...footer.values(),
      ]
        .filter(Boolean)
        .join('\n');
    }

    const res = [...header.values(), ...footer.values()]
      .filter(Boolean)
      .join('\n');

    if (prettier) {
      return CircularDeps.prettier.format(res, {
        parser: 'typescript',
      });
    }

    return res;
  }

  function resolvePart(
    ref: TSFYPart,
    hash: string | undefined,
    count: number
  ): string {
    if (count > iterationLimit) {
      throw new Error(
        `tsfy: Maximum number of iterations (${iterationLimit}) exceeded.`
      );
    } else {
      count += 1;
    }

    const contextRef = hash ? context.refs[hash] : undefined;

    if (contextRef) {
      if (contextRef.result !== undefined) return contextRef.result;
    }

    if (Array.isArray(ref)) {
      const res = ref.map((rr) => resolvePart(rr, undefined, count));
      const body = res.join('');
      if (contextRef) {
        contextRef.result = body;
      }
      return body;
    }

    const value = ((): string => {
      if (typeof ref === 'string') return ref;
      if (ref.result !== undefined) return ref.result;

      /**
       * Complex ref
       */
      const parts = ref.parts;
      const res = resolvePart(parts, ref.hash, count);
      ref.result = res;

      const shouldGroupInOneType = ref.count >= groupInTypeThreshold;

      if (shouldGroupInOneType || ref.identifier) {
        const hashed = `${hashString(ref.result)}`.slice(0, 6);
        const named = ref.identifier || `T${hashed}`;

        const prefix = ref.identifier
          ? `export type ${ref.identifier} = `
          : `type ${named} = `;

        if (ref.identifier) {
          header.add(`${prefix} ${res};\n`);
        } else {
          footer.add(`${prefix} ${res};`);
        }

        return named;
      }

      return res;
    })();

    if (hash) {
      context.refs[hash].result = value;
    }

    return value;
  }

  return {
    toString,
    getParts,
  };
}

export type TSFYPart = string | TSFYRef | TSFYPart[];

export function createTSFYRef(rootValue: any, context: TSFYContext): TSFYRef {
  rootValue = proxyRealValue(rootValue);
  //
  const description = describeType(rootValue);
  const identifier = getIdentifier(rootValue);
  const hash = description.hash();

  const existing = context.refs[hash];
  const ref = createRef(hash, identifier);

  if (existing !== undefined) {
    existing.count++;
  } else {
    context.refs[hash] = ref;
  }

  const { typename, native } = description;

  if (native && typename !== 'Object') {
    const body = description.toString();
    ref.result = body;
    return ref;
  }

  if (ObjectType.is(rootValue)) {
    const child = createTSFYRef(rootValue.definition, context);
    ref.parts = ['ObjectType<', ...ensureArray(child), '>'];
    return ref;
  }

  if (GraphType.is(rootValue)) {
    const child = createTSFYRef(rootValue.definition, context);
    ref.parts = ['GraphType<', ...ensureArray(child), '>'];
    return ref;
  }

  (() => {
    switch (typename) {
      case 'Function': {
        context.header[hash] =
          'export type AnyFunction = (...args: any[]) => any; ';
        ref.result = 'AnyFunction';
        return ref;
      }

      case 'Array': {
        if (!Array.isArray(rootValue)) throw noop;

        if (!rootValue.length) {
          ref.result = '[]';
          return ref;
        }

        const lastIndex = rootValue.length - 1;
        const child = (rootValue as any[]).map((element, index) => {
          const part = createTSFYRef(element, context);
          const res = ensureArray(part);
          if (index !== lastIndex) return [...res, ', '];
          return res;
        });

        ref.parts = ['[', ...ensureArray(child), ']'];
        return ref;
      }

      case 'Object': {
        const pairs: [string, any][] = Object.entries(rootValue);

        if (!pairs.length) {
          ref.result = '{}';
          return ref;
        }

        ref.parts.push('{');

        const lastIndex = pairs.length - 1;
        pairs.forEach(([key, value], index) => {
          if (key === '__dschm__') return;
          if (value?.hidden === true && isFieldTypeName(value.type)) {
            return;
          }
          const valueRes = createTSFYRef(value, context);
          ref.parts.push(`${JSON.stringify(key)}:`, valueRes);
          if (index !== lastIndex) {
            ref.parts.push(',');
          }
        });

        ref.parts.push('}');
        return ref;
      }

      default: {
        const described = describeType(rootValue);

        const { native, typename } = described;

        if (!native) {
          ref.result = `any /*${typename}*/`;
        } else {
          ref.result = typename;
        }

        return ref;
      }
    }
  })();

  return ref;
}

function getIdentifier(value: any) {
  if (!value) return undefined;
  if (typeof value !== 'object') return undefined;

  if (value.__$is_entity__ === true) {
    return `T${value.name}Entity`;
  }

  if (GraphType.is(value) && value.optionalId) {
    return `T${value.optionalId}Type`;
  }

  if (ObjectType.is(value)) {
    return value.id ? `T${value.id}Object` : undefined;
  }

  if (isFieldTypeName(value.type) && typeof value.name === 'string') {
    return `T${value.name}Field`;
  }
  return undefined;
}

export type TSFYRef = {
  hash: string;
  identifier: string | undefined;
  parts: TSFYPart[];
  result?: string;
  count: number;
};

export type TSFYContext = {
  refs: Record<string, TSFYRef>;
  header: Record<string, string>;
};

function createRef(hash: string, identifier?: string): TSFYRef {
  const ref: TSFYRef = {
    identifier,
    hash,
    result: undefined,
    count: 1,
    parts: [],
  };

  return ref;
}

export function createTSFYContext(): TSFYContext {
  return {
    refs: {},
    header: {},
  };
}

import {
  describeType,
  ensureArray,
  hashString,
  MaybePromise,
  noop,
  PartialRequired,
  proxyRealValue,
  TypeDescription,
} from '@backland/utils';

import { CircularDeps } from '../CircularDeps';
import { GraphType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';
import { isFieldTypeName } from '../fields/fieldTypes';

export const tsfy_defaults = {
  iterationLimit: 5000,
};

export type TSFYConfig = {
  context?: TSFYContext;
  iterationLimit?: number;
  many?: boolean;
  groupInTypeThreshold?: number;
  customParser?: TSFYCustomHandler;
};

export function tsfy(input: any, config?: TSFYConfig) {
  const context = createTSFYContext(config || {});

  const { groupInTypeThreshold, iterationLimit, many } = context.config;

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

  async function getParts() {
    const body: string = await (async () => {
      //
      async function runPart(part: any) {
        const ref = await parseTSfyValue(part, context);
        return resolvePart(ref, undefined, 0);
      }

      const parts = await awaitAll(entries.map(runPart));
      return parts.join('\n');
    })();

    Object.values(context.header).forEach((el) => header.add(el));

    return { header, body, footer };
  }

  async function toString(options?: { prettier?: boolean; name?: string }) {
    const { name, prettier } = options || {};
    const { footer, header, body } = await getParts();

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

export async function parseTSfyValue(
  rootValue: any,
  context: TSFYContext
): Promise<TSFYRef> {
  rootValue = proxyRealValue(rootValue);
  //
  const typeDescription = describeType(rootValue);
  const identifier = getTSFyIdentifier(rootValue);
  const hash = typeDescription.hash();

  const existing = context.refs[hash];
  const currentRef = createTSfyRef(hash, identifier);

  if (existing !== undefined) {
    existing.count++;
  } else {
    context.refs[hash] = currentRef;
  }

  if (context.config.customParser) {
    const parsed = await context.config.customParser({
      context,
      typeDescription,
      hash,
      identifier,
      existing,
      currentRef,
      value: rootValue,
    });

    if (parsed !== undefined) return parsed;
  }

  const { typename, native } = typeDescription;

  if (native && typename !== 'Object') {
    const body = typeDescription.toString();
    currentRef.result = body;
    return currentRef;
  }

  if (ObjectType.is(rootValue)) {
    const child = await parseTSfyValue(rootValue.definition, context);
    currentRef.parts = ['ObjectType<', ...ensureArray(child), '>'];
    return currentRef;
  }

  if (GraphType.is(rootValue)) {
    const child = await parseTSfyValue(rootValue.definition, context);
    currentRef.parts = ['GraphType<', ...ensureArray(child), '>'];
    return currentRef;
  }

  await (async () => {
    switch (typename) {
      case 'Function': {
        context.header[hash] =
          'export type AnyFunction = (...args: any[]) => any; ';
        currentRef.result = 'AnyFunction';

        return currentRef;
      }

      case 'Array': {
        if (!Array.isArray(rootValue)) throw noop;

        if (!rootValue.length) {
          currentRef.result = '[]';
          return currentRef;
        }

        const lastIndex = rootValue.length - 1;

        const child = await awaitAll(
          (rootValue as any[]).map(async (element, index) => {
            const part = await parseTSfyValue(element, context);
            const res = ensureArray(part);
            if (index !== lastIndex) return [...res, ', '];
            return res;
          })
        );

        currentRef.parts = ['[', ...ensureArray(child), ']'];
        return currentRef;
      }

      case 'Object': {
        const pairs: [string, any][] = Object.entries(rootValue);

        if (!pairs.length) {
          currentRef.result = '{}';
          return currentRef;
        }

        currentRef.parts.push('{');

        await awaitAll(
          pairs.map(async ([key, value]) => {
            if (key === '__dschm__') return;
            if (value?.hidden === true && isFieldTypeName(value.type)) {
              return;
            }
            const valueRes = await parseTSfyValue(value, context);
            currentRef.parts.push(`${JSON.stringify(key)}:`, valueRes, ',');
          })
        );

        currentRef.parts.push('}');
        return currentRef;
      }

      default: {
        const described = describeType(rootValue);

        const { native, typename } = described;

        if (!native) {
          currentRef.result = `any /*${typename}*/`;
        } else {
          currentRef.result = typename;
        }

        return currentRef;
      }
    }
  })();

  return currentRef;
}

export function getTSFyIdentifier(value: any) {
  if (!value) return undefined;
  if (typeof value !== 'object') return undefined;

  if (value.__isEntity === true) {
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
  config: PartialRequired<TSFYConfig, 'customParser'>;
};

export function createTSfyRef(hash: string, identifier?: string): TSFYRef {
  const ref: TSFYRef = {
    identifier,
    hash,
    result: undefined,
    count: 1,
    parts: [],
  };

  return ref;
}

export function createTSFYContext(config: TSFYConfig): TSFYContext {
  const {
    iterationLimit = tsfy_defaults.iterationLimit,
    many = false,
    groupInTypeThreshold = 2,
  } = config || {};

  const context: TSFYContext = {
    refs: {},
    header: {},
    config: {
      context: undefined as any,
      groupInTypeThreshold,
      iterationLimit,
      many,
      ...config,
    },
  };

  context.config.context = context;

  return context;
}

export type TSFyChunkDefinition = {
  value?: string;
  identifier?: string;
  functionArguments?: TSFyTypeDef[];
  functionResult?: TSFyTypeDef;
};

export type TSFyTypeDef = {
  body: (TSFyChunkDefinition | string)[];
  header?: Record<string, string>;
};

export type TSFyHandlerUtils = {
  identifier: string | undefined;
  typeDescription: TypeDescription;
  hash: string;
  context: TSFYContext;
  existing: TSFYRef | undefined;
  currentRef: TSFYRef;
  value: any;
};

export interface TSFYCustomHandler {
  (utils: TSFyHandlerUtils): MaybePromise<TSFYRef | undefined>;
}

async function awaitAll<T>(promises: MaybePromise<T>[]): Promise<T[]> {
  for (const key in promises) {
    promises[key] = await promises[key];
  }
  return promises as any;
}

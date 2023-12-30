import {
  hashString,
  MaybePromise,
  PartialRequired,
  TypeDescription,
} from '@powership/utils';

import { GraphType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';
import { isFieldTypeName } from '../fields/fieldTypes';
import * as Internal from '../internal';

import { parseTSFyValue } from './parseTSFyValue';

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

export interface TSFyResult {
  toString: _ToString;
  getParts: _GetParts;
}

export function tsfy(input: any, config?: TSFYConfig): TSFyResult {
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
        const ref = await parseTSFyValue(part, context);
        return resolvePart(ref, undefined, 0);
      }

      const parts = await awaitAll(entries.map(runPart));
      return parts.join('\n');
    })();

    Object.values(context.header).forEach((el) => header.add(el));

    return { header, body, footer };
  }

  async function toString(options?: {
    prettier?: boolean;
    name?: string;
    wrapper?: [string, string];
  }) {
    const { name, prettier, wrapper = ['', ''] } = options || {};
    const { footer, header, body } = await getParts();

    if (name) {
      return [
        wrapper[0],
        ...header.values(),
        `export type ${name} = ${body};`,
        ...footer.values(),
        wrapper[1],
      ]
        .filter(Boolean)
        .join('\n');
    }

    const res = [wrapper[0], ...header.values(), ...footer.values(), wrapper[1]]
      .filter(Boolean)
      .join('\n');

    if (prettier) {
      return await Internal.formatWithPrettier(res, {
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
    ...config.context,
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

// export type _ResolveParts = (options: {
//   ref: TSFYPart;
//   hash: string | undefined;
//   count: number;
// }) => Promise<string>;

export type _GetParts = () => Promise<{
  header: Set<string>;
  body: string;
  footer: Set<string>;
}>;

// export type _ResolvePart = (
//   ref: TSFYPart,
//   hash: string | undefined,
//   count: number
// ) => string;

export type _ToString = (options?: {
  prettier?: boolean;
  name?: string;
  wrapper?: [string, string];
}) => Promise<string>;

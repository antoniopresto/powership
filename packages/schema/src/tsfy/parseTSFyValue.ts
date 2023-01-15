import {
  awaitSync,
  describeType,
  ensureArray,
  noop,
  proxyRealValue,
} from '@backland/utils';

import { GraphType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';
import { isFieldTypeName } from '../fields/fieldTypes';

import { createTSfyRef, getTSFyIdentifier, TSFYContext, TSFYRef } from './tsfy';

export async function parseTSFyValue(
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
    const child = await parseTSFyValue(rootValue.definition, context);
    currentRef.parts = ['ObjectType<', ...ensureArray(child), '>'];
    return currentRef;
  }

  if (GraphType.is(rootValue)) {
    const child = await parseTSFyValue(rootValue.definition, context);
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

        const child = await awaitSync(
          (rootValue as any[]).map(async (element, index) => {
            const part = await parseTSFyValue(element, context);
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

        await awaitSync(
          pairs.map(async ([key, value]) => {
            if (key === '__dschm__') return;
            if (value?.hidden === true && isFieldTypeName(value.type)) {
              return;
            }
            const valueRes = await parseTSFyValue(value, context);
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

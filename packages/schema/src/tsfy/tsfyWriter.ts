import path from 'path';

import { createStore, Process, simpleObjectHash, Store } from '@swind/utils';
import { ensureFileSync } from 'fs-extra';

import { GraphType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';

import { createTSFYContext, tsfy, TSFYConfig } from './tsfy';

export const defaultTypesDest = path.resolve(
  Process.cwd(),
  'generated/solarwind.d.ts'
);

export interface TSFyWriterConfig extends TSFYConfig {
  wrappers?: [string, string][];
  dest?: string;
  writeThrottleMS?: number;
  prettify?: boolean;
  moduleName?: string; // default to solarwind
  store?: Store<Record<string, any>>;
}

export function tsfyWriter(options: TSFyWriterConfig = {}) {
  const {
    wrappers,
    dest = defaultTypesDest,
    writeThrottleMS = 3000,
    moduleName = 'solarwind',
    store = createStore(),
  } = options;

  options.dest = dest;
  options.writeThrottleMS = writeThrottleMS;
  options.store = store;

  const context = createTSFYContext({ ...options });
  options.context = context;

  const wrapper = moduleWrapper({ moduleName, extra: wrappers });

  let delayRef: any = undefined;

  function add(value: any) {
    clearTimeout(delayRef);
    const hash = simpleObjectHash(value);
    store.set(hash, value);

    if (GraphType.is(value) && value.optionalId) {
      const id = value.optionalId;

      context.header[
        `hash_declare_type_${id}`
      ] = `declare function createType(name: '${id}', ...params: unknown[]): T${id}Type;`;
    }

    if (ObjectType.is(value) && value.id) {
      const id = value.id;

      context.header[
        `hash_declare_object_${id}`
      ] = `declare function createObject(name: '${id}', ...params: unknown[]): T${id}Object;`;
    }

    return {
      hash,
    };
  }

  function remove(value: any) {
    clearTimeout(delayRef);
    const hash = simpleObjectHash(value);
    const { index } = store.remove(hash);

    return {
      hash,
      index,
    };
  }

  function toString() {
    const values = store.entries.map((el) => el[1]);

    return tsfy(values, { ...options, context, many: true })
      .toString({
        prettier: options?.prettify ?? true,
      })
      .then((res) => {
        const wrapped = wrapper(res);
        return wrapped;
      });
  }

  function writeAll() {
    delayRef = setTimeout(() => {
      toString().catch(console.error);
    }, writeThrottleMS);
  }

  function listen() {
    ensureFileSync(dest);

    store.onRemove(function onRemove({}) {
      clearTimeout(delayRef);
      writeAll();
    });

    store.onSet(function onSet({}) {
      clearTimeout(delayRef);
      writeAll();
    });

    return store;
  }

  return {
    toString,
    listen,
    add,
    remove,
    store,
  };
}

export function moduleWrapper(init: {
  extra?: [string, string][];
  moduleName: string;
}) {
  const { extra, moduleName } = init;

  return function wrap(body: string) {
    return [
      '/* tslint-disable */',
      '/* tslint:disable */',
      '/* eslint-disable */',
      'declare global {',
      `  module '${moduleName}' {`,
      `    export * from '${moduleName}';`,
      extra?.map(([open]) => open).join('\n'),
      `    import { GraphType, ObjectType } from 'solarwind';`,

      body,
      extra?.map(([_, closer]) => closer).join('\n'),
      `}\n}`,
    ]
      .filter((el) => typeof el === 'string')
      .join('\n');
  };
}

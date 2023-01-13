import * as fs from 'fs';
import path from 'path';

import { Process, simpleObjectHash } from '@backland/utils';
import { ensureFileSync } from 'fs-extra';

import { GraphType } from '../GraphType/GraphType';

import { createStore } from './Store';
import { createTSFYContext, tsfy, TSFYConfig } from './tsfy';

export const defaultTypesDest = path.resolve(
  Process.cwd(),
  'generated/backland.d.ts'
);

export interface TSFyWriterConfig extends TSFYConfig {
  wrapper?: [string, string];
  dest?: string;
  writeThrottleMS?: number;
  prettify?: boolean;
}

export function tsfyWriter(options: TSFyWriterConfig = {}) {
  const {
    wrapper = default_wrapper,
    dest = defaultTypesDest,
    writeThrottleMS = 3000,
  } = options;

  const store = createStore<string, any>();

  const context = createTSFYContext({ ...options });
  options.context = context;

  let delayRef: any = undefined;

  function add(value: any) {
    clearTimeout(delayRef);
    const hash = simpleObjectHash(value);
    store.set(hash, value);

    if (GraphType.is(value) && value.optionalId) {
      const id = value.optionalId;

      // FIXME
      context.header[
        `hash_declare_${id}`
      ] = `declare function createType(name: '${id}', options: any): T${id}Type;`;
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

  function writeAll() {
    delayRef = setTimeout(() => {
      const values = store.entries.map((el) => el[1]);

      tsfy(values, { ...options, context, many: true })
        .toString({
          wrapper,
          prettier: options?.prettify ?? true,
        })
        .then((res) => {
          fs.writeFileSync(dest, res);
        })
        .catch(console.error);
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
    listen,
    add,
    remove,
    store,
  };
}

const default_wrapper = [
  `
/* tslint-disable */
/* tslint:disable */
/* eslint-disable */
declare global {
  module 'backland' {
    export * from 'backland';
    import { GraphType, ObjectType } from 'backland';
    `,

  `}
  }`,
] as [string, string];

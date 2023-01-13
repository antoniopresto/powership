import * as fs from 'fs';
import path from 'path';

import { Process, simpleObjectHash } from '@backland/utils';
import { ensureFileSync } from 'fs-extra';

import { GraphType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';

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
    wrapper = ['', ''],
    dest = defaultTypesDest,
    writeThrottleMS = 3000,
  } = options;

  wrapper[0] = `${default_wrapper[0]}\n${wrapper[0]}`;
  wrapper[1] = `${default_wrapper[1]}\n${wrapper[1]}`;

  options.wrapper = wrapper;
  options.dest = dest;
  options.writeThrottleMS = writeThrottleMS;
  const context = createTSFYContext({ ...options });
  options.context = context;

  const store = createStore<string, any>();

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

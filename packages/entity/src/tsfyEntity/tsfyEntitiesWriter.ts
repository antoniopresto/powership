import { tsfyWriter, TSFyWriterConfig } from '@backland/schema';

import { EntityStore } from '../EntityStore';

import { tsFyEntityParser } from './tsfyEntityParser';

export interface TsfyEntitiesWriterConfig extends TSFyWriterConfig {}

export function tsfyEntitiesWriter(config: TsfyEntitiesWriterConfig = {}) {
  const { wrappers = [] } = config;

  wrappers.push([
    `
     import {
      EntityDocument,
      EntityDocumentInput,
      EntityFromContext,
    } from '@backland/entity';
    `,
    '',
  ]);

  return tsfyWriter({
    ...config,
    wrappers,
    async customParser(ctx) {
      if (config?.customParser) {
        const res = await config.customParser(ctx);
        if (res !== undefined) return res;
      }
      return tsFyEntityParser(ctx);
    },
  });
}

export const EntityTypeWriter = tsfyEntitiesWriter({
  store: EntityStore,
});

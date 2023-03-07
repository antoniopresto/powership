import { tsfyWriter } from '@swind/schema';

import { EntityStore } from '../EntityStore';

import { tsFyEntityParser } from './tsfyEntityParser';

// export interface TsfyEntitiesWriterConfig extends TSFyWriterConfig {}
// FIXME config
export function tsfyEntitiesWriter(config: any = {}): any {
  const { wrappers = [] } = config;

  wrappers.push([
    `
     import {
      EntityDocument,
      EntityDocumentInput,
      EntityFromContext,
    } from '@swind/entity';
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

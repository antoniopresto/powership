import { tsfyWriter, TSFyWriterConfig } from '@backland/schema';

import { tsFyEntityParser } from './tsfyEntity';

export interface TsfyEntitiesWriterConfig extends TSFyWriterConfig {}

export function tsfyEntitiesWriter(config: TsfyEntitiesWriterConfig = {}) {
  const { wrapper = ['', ''] } = config;

  wrapper[0] += `
    import {
      EntityDocument,
      EntityDocumentInput,
      EntityFromContext,
    } from '@backland/entity';

  `;

  return tsfyWriter({
    ...config,
    wrapper,
    async customParser(ctx) {
      if (config?.customParser) {
        const res = await config.customParser(ctx);
        if (res !== undefined) return res;
      }
      return tsFyEntityParser(ctx);
    },
  });
}

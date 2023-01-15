import { tsfy, TSFYConfig } from '@backland/schema';

import { AnyEntity } from '../EntityInterfaces';

import { tsFyEntityParser } from './tsfyEntityParser';

export type TsfyEntityInit = { entities: AnyEntity[] } & Partial<TSFYConfig>;

export function tsfyEntities(init: TsfyEntityInit) {
  const { entities, ...config } = init;

  return tsfy(entities, {
    ...config,
    many: true,
    async customParser(ctx) {
      if (config?.customParser) {
        const res = await config.customParser(ctx);
        if (res !== undefined) return res;
      }
      return tsFyEntityParser(ctx);
    },
  });
}

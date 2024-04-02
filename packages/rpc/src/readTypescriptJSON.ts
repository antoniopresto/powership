import { resolveCWD } from '@powership/utils/server-utils';
import * as tsj from 'ts-json-schema-generator';

import type { JSONSchema7 } from './index';

export type OptionsReadTypescriptJSON = { filePath: string; tsconfig?: string };

export function readTypescriptJSON(options: OptionsReadTypescriptJSON | string): JSONSchema7 {
  //
  const parsedOptions = ((): OptionsReadTypescriptJSON => {
    if (typeof options === 'string') {
      return {
        filePath: options,
      };
    }
    return options;
  })();

  const { tsconfig = resolveCWD('tsconfig.json'), filePath, ...others } = parsedOptions;

  const finalOptions = {
    ...others,
    tsconfig,
    path: resolveCWD(filePath),
  }
  
  const schema = tsj.createGenerator(finalOptions);

  return schema.createSchema() as unknown as JSONSchema7;
}

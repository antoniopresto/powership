import path from 'node:path';

import tsj from 'ts-json-schema-generator';

export function create(options: { filePath: string; tsconfig?: string }) {
  const { tsconfig = path.resolve(process.cwd(), 'tsconfig.json') } = options;

  const schema = tsj.createGenerator({
    ...options,
    tsconfig,
  });

  return schema.createSchema('Product');
}

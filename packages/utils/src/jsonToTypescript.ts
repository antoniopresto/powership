import type { JSONSchema4 as JSONObject4 } from 'json-schema';
import type { JSONSchema4 } from 'json-schema';
import type { Options } from 'json-schema-to-typescript';

export { JSONSchema4, JSONObject4 };

export async function jsonToTypescript(
  schema: JSONSchema4,
  name: string,
  options: Partial<Options> = {}
): Promise<string> {
  // @only-server
  const json_ts = await dynamicRequire<
    typeof import('json-schema-to-typescript')
  >('json-schema-to-typescript');
  // @only-server
  return await json_ts.compile(schema, name, options);
}

async function dynamicRequire<T = any>(name: string): Promise<T> {
  // @only-server
  const text = `require('${name}');`;
  /**
   * Using "eval" to prevent webpack warning
   * about "Import trace for requested module"
   */
  // @only-server
  return await eval(text);
}

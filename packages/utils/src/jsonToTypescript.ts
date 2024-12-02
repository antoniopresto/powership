import type { JSONSchema4 as JSONObject4 } from 'json-schema';
import type { JSONSchema4 } from 'json-schema';
import type { Options } from 'json-schema-to-typescript';
//@onlyServer
import { compile } from 'json-schema-to-typescript';

export { JSONSchema4, JSONObject4 };

export async function jsonToTypescript(
  schema: JSONSchema4,
  name: string,
  options: Partial<Options> = {}
): Promise<string> {
  // @onlyServer
  return await compile(schema, name, options);
}

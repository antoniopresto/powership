/*
 * Creates a Server request/response handler
 * See Server tests for more examples
 */
import type { Handler, ServerHooksRecord } from './Server';

export function createHandler<Data extends Record<string, any>>(
  name: string,
  hooks: ServerHooksRecord,
  data: Data
): Handler<Data>;

export function createHandler(
  name: string,
  hooks: ServerHooksRecord
): Handler<undefined>;

export function createHandler(
  name: string,
  hooks: ServerHooksRecord,
  data?: any
) {
  return {
    name,
    hooks,
    data: data || {},
  };
}

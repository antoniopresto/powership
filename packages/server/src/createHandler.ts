/*
 * Creates an App handler
 * See App tests for more examples
 */
import type { AppHooksRecord, Handler } from './App';

export function createHandler<Data extends Record<string, any>>(
  name: string,
  hooks: AppHooksRecord,
  data: Data
): Handler<Data>;

export function createHandler(
  name: string,
  hooks: AppHooksRecord
): Handler<undefined>;

export function createHandler(name: string, hooks: AppHooksRecord, data?: any) {
  return {
    name,
    hooks,
    data: data || {},
  };
}

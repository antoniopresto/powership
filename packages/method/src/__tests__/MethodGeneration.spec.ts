import { createType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { MethodGeneration } from '../generate';
import { Method, MethodContext, MethodResolveInfo } from '../Method';

describe('MethodGeneration', () => {
  // afterEach();

  test('basic test', async () => {
    const method = new Method({
      name: 'findOne',
      kind: 'query',
      result: createType('record'),
      args: { username: '[string]' },
    }).onExec<{ parent: 'yes' }>(() => {
      return [];
    });

    const sut = new MethodGeneration(method);

    const json = await sut.types();

    expect(json.split('\n')).toEqual([
      'export interface FindOneMethodArgs {',
      '  username: string[];',
      '}',
      '',
      'export interface FindOneMethodResult {',
      '  findOneMethodResult: { HMMMMMM wrong',
      '    [k: string]: unknown | undefined;',
      '  };',
      '}',
      '',
    ]);
  });
});

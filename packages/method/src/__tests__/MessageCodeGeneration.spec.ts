import { createType } from '@powership/schema';
import { MethodGeneration } from '../code-generation';
import { Message } from '../Message';

describe('MessageCodeGeneration', () => {
  // afterEach();

  test('basic test', async () => {
    const rt = createType('shit', { object: { username: '[string]?' } });

    const method = new Message({
      name: 'findOne',
      kind: 'query',
      result: rt,
      args: { username: '[string]' },
    }).onExec<{ parent: 'yes' }>((): any => {
      return {};
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

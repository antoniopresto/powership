import { GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { Method, MethodContext, MethodInfo } from '../Method';

describe('Method', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Method({
      name: 'findOne',
      kind: 'query',
      output: 'string',
      input: { object: { username: 'string' } },
    }).setHandler<{ parent: 'yes' }>(
      ({ input: { username }, parent, info, context }) => {
        const x = { username, context, info, parent };

        assert<
          IsExact<
            typeof x,
            {
              //
              username: typeof username;
              context: MethodContext;
              info: MethodInfo;
              parent: { parent: 'yes' };
            }
          >
        >(true);

        return `hi, ${username}!`;
      }
    );

    type Param = Parameters<typeof sut.handle>[0];

    assert<
      IsExact<
        Param,
        {
          parent: any;
          input: { username: string };
          context: MethodContext;
          info: MethodInfo;
        }
      >
    >(true);

    expect(sut).toEqual({
      __definition: expect.objectContaining({ kind: 'query' }),
      kind: 'query',
      methodName: 'findOne',
      handle: expect.any(Function),
      fetch: expect.any(Function),
      setFetcher: expect.any(Function),
      setHandler: expect.any(Function),
      inputType: expect.any(GraphType),
      outputType: expect.objectContaining({
        definition: {
          type: 'string',
        },
      }),
    });

    const parent = { parent: 'yes' } as const;
    const context = { t: 'context' };
    const info = { t: 'info' };

    const spy = jest.spyOn(sut, 'handle');

    const promise = sut.handle({
      parent,
      input: { username: 'Antonio' },
      context,
      info,
    });

    assert<IsExact<typeof promise, Promise<string>>>(true);

    const res = await promise;

    expect(res).toEqual('hi, Antonio!');

    expect(spy).toBeCalledWith({
      parent,
      input: { username: 'Antonio' },
      context,
      info,
    });

    spy.mockRestore();
  });
});

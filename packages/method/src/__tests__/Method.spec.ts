import { createType, GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { RootMethod } from '../RootMethod';
import { Method, MethodContext, MethodInfo } from '../Method';

describe('Method', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Method({
      name: 'findOne',
      kind: 'query',
      output: 'string',
      args: { username: 'string' },
    }).defineHandler<{ parent: 'yes' }>(
      (
        args,
        { args: { username }, parent, rootExecutionInfo, rootContextValue }
      ) => {
        const x = {
          args,
          username,
          rootExecutionInfo,
          rootContextValue,
          parent,
        };

        assert<
          IsExact<
            typeof x,
            {
              args: { username: string };
              username: typeof username;
              rootContextValue: MethodContext;
              rootExecutionInfo: MethodInfo;
              parent: { parent: 'yes' };
            }
          >
        >(true);

        return `hi, ${username}!`;
      }
    );

    type Param = Parameters<typeof sut.call>;

    assert<
      IsExact<
        Param,
        [
          { username: string },
          {
            parent: any;
            args: { username: string };
            rootContextValue: MethodContext;
            rootExecutionInfo: MethodInfo;
          }
        ]
      >
    >(true);

    const parent = { parent: 'yes' } as const;
    const rootContextValue = { t: 'context' };
    const rootExecutionInfo = { t: 'rootExecutionInfo' };

    const spy = jest.spyOn(sut, 'call');

    const promise = sut.call(
      { username: 'Antonio' },
      {
        parent,
        args: { username: 'Antonio' },
        rootContextValue,
        rootExecutionInfo,
      }
    );

    assert<IsExact<typeof promise, Promise<string>>>(true);

    const res = await promise;

    expect(res).toEqual('hi, Antonio!');

    expect(spy).toBeCalledWith(
      { username: 'Antonio' },
      {
        parent,
        args: { username: 'Antonio' },
        rootContextValue,
        rootExecutionInfo,
      }
    );

    spy.mockRestore();
  });

  describe('RootMethod', () => {
    const User = createType('User', { object: { id: 'ID', email: 'email' } });

    const createOne = new Method({
      name: 'createOne',
      kind: 'mutation',
      output: User,
      args: User.definition.object,
    }).defineHandler(({ email }) => {
      return { id: '123', email };
    });

    const findOne = new Method({
      name: 'findOne',
      kind: 'query',
      output: '[string]',
      args: { username: 'string' },
    }).defineHandler<{ parent: 'yes' }>(({ username }) => {
      return [`hi, ${username}!`];
    });

    test('combine methods', async () => {
      const root = RootMethod.create([createOne, findOne]);

      type M = Parameters<typeof root.call>;
      assert<IsExact<M[0], 'createOne' | 'findOne'>>(true);

      const execute = root.call('findOne');

      type P = Parameters<(typeof execute)['with']>;
      assert<IsExact<P[0], { username: string }>>(true);

      const result = await execute.with({ username: 'antonio' });

      expect(result).toEqual(['hi, antonio!']);
    });
  });
});

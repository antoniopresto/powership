import { createType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { App } from '../App';
import { Method } from '../Method';
import { AppRequestContext, AppRequestInfo } from '../types';

describe('Method', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Method({
      name: 'findOne',
      kind: 'query',
      output: 'string',
      args: { username: 'string' },
    }).defineHandler<{ parent: 'yes' }>(
      (args, { args: { username }, parent }) => {
        const x = {
          args,
          username,
          parent,
        };

        assert<
          IsExact<
            typeof x,
            {
              args: { username: string };
              username: typeof username;
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
            context: AppRequestContext;
            requestInfo: AppRequestInfo;
          }
        ]
      >
    >(true);

    const parent = { parent: 'yes' } as const;
    const context = { t: 'context' };
    const requestInfo = { t: 'requestInfo', requests: [] };

    const spy = jest.spyOn(sut, 'call');

    const promise = sut.call(
      { username: 'Antonio' },
      {
        parent,
        args: { username: 'Antonio' },
        context,
        requestInfo,
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
        context,
        requestInfo,
      }
    );

    spy.mockRestore();
  });

  describe('App', () => {
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
      const root = App.create([createOne, findOne], {
        name: 'myApp',
        buildRequestContext(request) {
          console.log(request);
          return {};
        },
      });

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

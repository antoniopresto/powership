import { createType, GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { combineMethods } from '../RootMethod';
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
      (_, { input: { username }, parent, info, context }) => {
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

    type Param = Parameters<typeof sut.handle>;

    assert<
      IsExact<
        Param,
        [
          { username: string },
          {
            parent: any;
            input: { username: string };
            context: MethodContext;
            info: MethodInfo;
          }
        ]
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

    const promise = sut.handle(
      { username: 'Antonio' },
      {
        parent,
        input: { username: 'Antonio' },
        context,
        info,
      }
    );

    assert<IsExact<typeof promise, Promise<string>>>(true);

    const res = await promise;

    expect(res).toEqual('hi, Antonio!');

    expect(spy).toBeCalledWith(
      { username: 'Antonio' },
      {
        parent,
        input: { username: 'Antonio' },
        context,
        info,
      }
    );

    spy.mockRestore();
  });

  describe('Methods.ts', () => {
    test('combineMethods', async () => {
      const User = createType('User', { object: { id: 'ID', email: 'email' } });

      const createOne = new Method({
        name: 'createOne',
        kind: 'mutation',
        output: User,
        input: User.clone((el) => el.only('email').graphType('createOneInput')),
      }).setHandler(({ email }) => {
        return { id: '123', email };
      });

      const findOne = new Method({
        name: 'findOne',
        kind: 'query',
        output: '[string]',
        input: { object: { username: 'string' } },
      }).setHandler<{ parent: 'yes' }>(({ username }) => {
        return [`hi, ${username}!`];
      });

      const root = combineMethods([createOne, findOne]);
    });
  });
});

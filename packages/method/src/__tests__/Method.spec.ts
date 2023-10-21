import { GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { Method, MethodContext, MethodResolveInfo } from '../Method';

describe('Method', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Method({
      name: 'findOne',
      kind: 'query',
      result: 'string',
      args: { username: 'string' },
    }).onExec<{ parent: 'yes' }>((parent, { username }, context, info) => {
      const x = { username, context, info, parent };

      assert<
        IsExact<
          typeof x,
          {
            //
            username: typeof username;
            context: MethodContext;
            info: MethodResolveInfo;
            parent: { parent: 'yes' };
          }
        >
      >(true);

      return `hi, ${username}!`;
    });

    assert<
      IsExact<
        typeof sut.resolve,
        (
          parent: any,
          args: { username: string },
          context: MethodContext,
          info: MethodResolveInfo
        ) => Promise<string>
      >
    >(true);

    expect(sut).toMatchObject({
      kind: 'query',
      methodName: 'findOne',
      resultName: 'findOneMethodResult',
      argsName: 'findOneMethodArgs',
      argsType: expect.any(GraphType),
      resultType: expect.objectContaining({
        definition: {
          type: 'string',
        },
      }),
    });

    const parent = { parent: 'yes' } as const;
    const context = { t: 'context' };
    const info = { t: 'info' };

    const spy = jest.spyOn(sut, 'resolve');

    const promise = sut.resolve(parent, { username: 'Antonio' }, context, info);

    assert<IsExact<typeof promise, Promise<string>>>(true);

    const res = await promise;

    expect(res).toEqual('hi, Antonio!');

    expect(spy).toBeCalledWith(parent, { username: 'Antonio' }, context, info);

    spy.mockRestore();
  });
});

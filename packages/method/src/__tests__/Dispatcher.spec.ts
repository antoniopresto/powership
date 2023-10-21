import { GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { Dispatcher, OperationContext, OperationInfo } from '../Dispatcher';

describe('Dispatcher', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Dispatcher({
      name: 'findOne',
      kind: 'query',
      outputDefinition: 'string',
      inputDefinition: { object: { username: 'string' } },
    }).configureResolver<{ parent: 'yes' }>(
      ({ input: { username }, parent, info, context }) => {
        const x = { username, context, info, parent };

        assert<
          IsExact<
            typeof x,
            {
              //
              username: typeof username;
              context: OperationContext;
              info: OperationInfo;
              parent: { parent: 'yes' };
            }
          >
        >(true);

        return `hi, ${username}!`;
      }
    );

    type Param = Parameters<typeof sut.resolve>[0];

    assert<
      IsExact<
        Param,
        {
          parent: any;
          input: { username: string };
          context: OperationContext;
          info: OperationInfo;
        }
      >
    >(true);

    expect(sut).toMatchObject({
      __definition: expect.objectContaining({ kind: 'query' }),
      kind: 'query',
      operationName: 'findOne',
      resolve: expect.any(Function),
      send: expect.any(Function),
      configureSender: expect.any(Function),
      configureResolver: expect.any(Function),
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

    const spy = jest.spyOn(sut, 'resolve');

    const promise = sut.resolve({
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

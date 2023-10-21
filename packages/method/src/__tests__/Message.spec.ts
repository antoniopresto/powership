import { GraphType } from '@powership/schema';
import { assert, IsExact } from 'conditional-type-checks';
import { Message, MessageContext, MessageResolveInfo } from '../Message';

describe('Method', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Message({
      name: 'findOne',
      kind: 'query',
      outputDefinition: 'string',
      inputDefinition: { object: { username: 'string' } },
    }).setResolver<{ parent: 'yes' }>(
      ({ input: { username }, parent, info, context }) => {
        const x = { username, context, info, parent };

        assert<
          IsExact<
            typeof x,
            {
              //
              username: typeof username;
              context: MessageContext;
              info: MessageResolveInfo;
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
          context: MessageContext;
          info: MessageResolveInfo;
        }
      >
    >(true);

    expect(sut).toMatchObject({
      __definition: expect.objectContaining({ kind: 'query' }),
      kind: 'query',
      messageName: 'findOne',
      resolve: expect.any(Function),
      send: expect.any(Function),
      setSender: expect.any(Function),
      setResolver: expect.any(Function),
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
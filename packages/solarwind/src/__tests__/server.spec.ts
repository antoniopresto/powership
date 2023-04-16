import { Server, ServerRequest } from '../index';

xdescribe('server', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = new Server({
      handlers: [],
    });

    const request = new ServerRequest({
      method: 'get',
      url: undefined,
      body: '',
      headers: {},
    });

    const response = await sut.handleRequest(request);

    expect(response).toMatchObject({
      statusCode: 404,
    });
  });
});

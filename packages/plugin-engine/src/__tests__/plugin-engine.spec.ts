import { PluginEngine, Plugin, UnsubscribeListener } from '../index';

describe('PluginEngine', () => {
  type TestEvents = {
    testEvent: string;
  };

  let engine: PluginEngine<TestEvents>;

  beforeEach(() => {
    engine = new PluginEngine<TestEvents>();
  });

  describe('Real World Scenarios', () => {
    type Request = {
      headers: Record<string, string>;
      body: any;
      user?: { id: number; role: string };
    };
    type Response = { body: any; statusCode: number };

    type EventData = { req: Request; res: Response };

    type AuthEvents = {
      requestReceived: EventData;
      responseReady: EventData;
    };

    describe('Authentication & Authorization Flow', () => {
      let authEngine: PluginEngine<AuthEvents>;

      beforeEach(() => {
        authEngine = new PluginEngine<AuthEvents>();
      });

      it('should process a request and authenticate the user', async () => {
        const authenticationPlugin: Plugin<AuthEvents['requestReceived']> = {
          name: 'AuthenticationPlugin',
          enter: (data, context) => {
            if (data.req.headers['Authorization'] === 'Bearer valid_token') {
              data.req.user = { id: 1, role: 'admin' };
              return data;
            } else {
              context.abortWith({
                ...data,
                res: { statusCode: 401, body: 'Unauthorized' },
              });
            }
          },
        };

        authEngine.on('requestReceived', authenticationPlugin);

        const eventData = {
          req: { headers: { Authorization: 'Bearer valid_token' }, body: {} },
          res: { body: {}, statusCode: 200 },
        };

        const response = await authEngine.exec('requestReceived', eventData);

        expect(response).toEqual({
          req: {
            headers: { Authorization: 'Bearer valid_token' },
            body: {},
            user: { id: 1, role: 'admin' },
          },
          res: { body: {}, statusCode: 200 },
        });
      });

      it('should deny access for unauthorized users', async () => {
        const authenticationPlugin: Plugin<AuthEvents['requestReceived']> = {
          name: 'AuthenticationPlugin',
          enter: (data, context) => {
            if (data.req.headers['Authorization'] !== 'Bearer valid_token') {
              context.abortWith({
                ...data,
                res: { statusCode: 401, body: 'Unauthorized' },
              });
            }
          },
        };

        authEngine.on('requestReceived', authenticationPlugin);

        const eventData = {
          req: { headers: { Authorization: 'Bearer invalid_token' }, body: {} },
          res: { body: {}, statusCode: 200 },
        };

        const response = await authEngine.exec('requestReceived', eventData);

        expect(response).toEqual({
          req: {
            headers: { Authorization: 'Bearer invalid_token' },
            body: {},
          },
          res: { statusCode: 401, body: 'Unauthorized' },
        });
      });

      it('should authorize admin users to access admin resources', async () => {
        const authorizationPlugin: Plugin<AuthEvents['responseReady']> = {
          name: 'AuthorizationPlugin',
          enter: (data, context) => {
            if (data.req.user?.role !== 'admin') {
              context.abortWith({
                ...data,
                res: { statusCode: 403, body: 'Forbidden' },
              });
            }
          },
        };

        authEngine.on('responseReady', authorizationPlugin);

        const eventData = {
          req: {
            headers: { Authorization: 'Bearer valid_token' },
            body: {},
            user: { id: 1, role: 'admin' },
          },
          res: { body: {}, statusCode: 200 },
        };

        const response = await authEngine.exec('responseReady', eventData);

        expect(response).toEqual({
          req: {
            headers: { Authorization: 'Bearer valid_token' },
            body: {},
            user: { id: 1, role: 'admin' },
          },
          res: { body: {}, statusCode: 200 },
        });
      });
    });
  });

  describe('PluginEngine.on', () => {
    it('should register a listener for an event', () => {
      const listener = jest.fn();

      engine.on('testEvent', { name: 'testPlugin', enter: listener });

      expect(engine['listeners'].testEvent?.size).toBe(1);
    });

    it('should return an unsubscribe function', () => {
      const listener = jest.fn();
      const unsubscribe: UnsubscribeListener = engine.on('testEvent', {
        name: 'testPlugin',
        enter: listener,
      });
      expect(typeof unsubscribe).toBe('function');
    });
  });

  describe('PluginEngine.exec', () => {
    it('should call the registered listener on exec', async () => {
      const listener = jest.fn();
      engine.on('testEvent', { name: 'testPlugin', enter: listener });
      await engine.exec('testEvent', 'hello');
      expect(listener).toHaveBeenCalledWith('hello', expect.any(Object));
    });

    it('should handle multiple listeners', async () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();
      engine.on('testEvent', { name: 'testPlugin1', enter: listener1 });
      engine.on('testEvent', { name: 'testPlugin2', enter: listener2 });
      await engine.exec('testEvent', 'hello');
      expect(listener1).toHaveBeenCalledWith('hello', expect.any(Object));
      expect(listener2).toHaveBeenCalledWith('hello', expect.any(Object));
    });

    it('should process listeners in order, and reverse for exit', async () => {
      const order: string[] = [];

      engine.on('testEvent', {
        name: 'testPlugin',
        enter: () => {
          order.push('enter1');
        },
        exit: () => {
          order.push('exit1');
        },
      });

      engine.on('testEvent', {
        name: 'testPlugin',
        enter: () => {
          order.push('enter2');
        },
        exit: () => {
          order.push('exit2');
        },
      });

      await engine.exec('testEvent', 'hello');
      expect(order).toEqual(['enter1', 'enter2', 'exit2', 'exit1']);
    });

    it('should allow short-circuiting with abortWith', async () => {
      const listener2 = jest.fn();

      engine.on('testEvent', {
        name: 'testPlugin1',
        enter: (_data, context) => {
          context.abortWith('short-circuit');
        },
      });

      engine.on('testEvent', { name: 'testPlugin2', enter: listener2 });
      const result = await engine.exec('testEvent', 'hello');
      expect(result).toBe('short-circuit');
      expect(listener2).not.toHaveBeenCalled();
    });

    it('should allow data modification through listeners', async () => {
      engine.on('testEvent', {
        name: 'testPlugin',
        enter: (data) => data + ' world',
      });
      const result = await engine.exec('testEvent', 'hello');
      expect(result).toBe('hello world');
    });

    it('should handle errors gracefully', async () => {
      engine.on('testEvent', {
        name: 'testPlugin',
        enter: () => {
          throw new Error('Test Error');
        },
      });

      await expect(engine.exec('testEvent', 'hello')).rejects.toThrow(
        'Test Error'
      );
    });
  });

  describe('README', () => {
    type Ctx = {
      req: { headers: Record<string, any> };
      res: { statusCode?: number; body?: string };
    };

    let engine: PluginEngine<{ someEvent: Ctx }>;

    beforeEach(() => {
      engine = new PluginEngine<{ someEvent: Ctx }>();
    });

    describe('Middleware Execution Order', () => {
      it('should execute plugins in the correct order', async () => {
        const order: string[] = [];
        const plugin1: Plugin<Ctx> = {
          name: 'Plugin1',
          enter: () => {
            order.push('Plugin1 Enter');
          },
          exit: () => {
            order.push('Plugin1 Exit');
          },
        };
        const plugin2: Plugin<Ctx> = {
          name: 'Plugin2',
          enter: () => {
            order.push('Plugin2 Enter');
          },
          exit: () => {
            order.push('Plugin2 Exit');
          },
        };

        engine.on('someEvent', plugin1);
        engine.on('someEvent', plugin2);

        await engine.exec('someEvent', {
          req: { headers: {} },
          res: { body: '' },
        });

        expect(order).toEqual([
          'Plugin1 Enter',
          'Plugin2 Enter',
          'Plugin2 Exit',
          'Plugin1 Exit',
        ]);
      });
    });

    describe('Request and Response Modification', () => {
      it('should allow request modification in enter phase', async () => {
        const plugin: Plugin<Ctx> = {
          name: 'RequestModifier',
          enter: (event) => {
            event.req.headers['X-Custom-Header'] = 'CustomValue';
          },
        };
        engine.on('someEvent', plugin);

        const event: Ctx = {
          req: { headers: {} },
          res: {},
        };
        await engine.exec('someEvent', event);
        expect(event.req.headers['X-Custom-Header']).toBe('CustomValue');
      });

      it('should allow response modification in exit phase', async () => {
        const plugin: Plugin<Ctx> = {
          name: 'ResponseModifier',
          exit: (event) => {
            event.res.body = 'Modified Response';
          },
        };
        engine.on('someEvent', plugin);

        const event: Ctx = {
          req: { headers: {} },
          res: { body: 'Original Response' },
        };
        await engine.exec('someEvent', event);
        expect(event.res.body).toBe('Modified Response');
      });
    });

    describe('Event Abortion', () => {
      it('should abort event processing when abortWith is called', async () => {
        const plugin: Plugin<Ctx> = {
          name: 'Aborter',
          enter: (_event, context) => {
            context.abortWith({
              req: { headers: {} },
              res: { statusCode: 400, body: 'Bad Request' },
            });
          },
        };
        engine.on('someEvent', plugin);

        const event: Ctx = {
          req: { headers: {} },
          res: { statusCode: 404, body: 'Bad Request' },
        };
        const result = await engine.exec('someEvent', event);
        expect(result.res).toEqual({ statusCode: 400, body: 'Bad Request' });
      });
    });
  });
});

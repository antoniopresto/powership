import { createSimpleRouter } from '../createSimpleRouter';

describe('createSimpleRouter', () => {
  const routes = createSimpleRouter({
    homeland: { path: '/homeland' },
    home: { path: '/home' },
    start: { path: '/' },
    about: { path: '/about', query: { foo: 'int' } },
    public: { path: '/public/*' },
  });

  test('$findRoute', () => {});
  test('$findRoute', () => {
    expect(routes.$findRoute('/home')).toEqual({ ...routes.home, params: {} });
    expect(routes.$findRoute('/about')).toEqual({
      ...routes.about,
      params: {},
    });
    expect(routes.$findRoute('/public/a/b/cx.png')).toEqual({
      ...routes.public,
      params: {
        _: 'a/b/cx.png',
      },
    });
  });

  test('should create route handlers for each route', () => {
    expect(typeof routes.home.match).toBe('function');
    expect(typeof routes.home.mount).toBe('function');
    expect(typeof routes.about.match).toBe('function');
    expect(typeof routes.about.mount).toBe('function');
  });

  test('mount should return correct URL without query', () => {
    expect(routes.home.mount()).toBe('/home');
  });

  test('mount should return correct URL with query', () => {
    expect(routes.about.mount({ query: { foo: 1 } })).toBe('/about?foo=1');
  });
});

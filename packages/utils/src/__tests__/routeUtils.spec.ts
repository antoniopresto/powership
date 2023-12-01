import { RouteUtils } from '../routeUtils'; // Adjust the import path as necessary

describe('RouteUtils', () => {
  describe('normalizePath', () => {
    it('should remove starting and trailing slashes', () => {
      expect(RouteUtils.normalizePath('/a/b/c/')).toBe('a/b/c');
    });

    it('should remove double slashes', () => {
      expect(RouteUtils.normalizePath('a//b//c')).toBe('a/b/c');
    });
  });

  describe('joinPaths', () => {
    it('should join multiple path segments', () => {
      expect(
        RouteUtils.joinPaths('/a/', 'b', null, undefined, '', '/c', 'd/')
      ).toBe('a/b/c/d');
    });
  });

  describe('parseQueryString', () => {
    it('should parse query string into an object', () => {
      expect(RouteUtils.parseQueryString('?key1=value1&key2=value2')).toEqual({
        key1: 'value1',
        key2: 'value2',
      });
    });
  });

  describe('stringifyQueryString', () => {
    it('should stringify an object into a query string', () => {
      expect(
        RouteUtils.stringifyQueryString({ key1: 'value1', key2: 'value2' })
      ).toBe('key1=value1&key2=value2');
    });
  });

  describe('resortQueryString', () => {
    it('should resort query string', () => {
      expect(RouteUtils.resortQueryString('?b=2&a=1')).toBe('a=1&b=2');
    });
  });

  describe('parseURL', () => {
    it('should parse URL into its components', () => {
      const parsed = RouteUtils.parseURL('/test?query=string#hash');

      expect(parsed).toEqual({
        pathname: '/test',
        search: '?query=string',
        hash: '#hash',
        route: '/test?query=string#hash',
        id: 'test^query=string^hash',
        href: 'http://localhost/test?query=string#hash',
        domain: 'http://localhost',
        isAbsolutePath: false,
        protocol: 'http:',
        host: 'localhost',
        hostname: 'localhost',
        port: '',
      });
    });
  });

  describe('isSamePathname', () => {
    it('should return true for URLs with the same pathname', () => {
      expect(
        RouteUtils.isSamePathname('http://localhost/a', 'http://example.com/a')
      ).toBe(true);
    });

    it('should return false for URLs with different pathnames', () => {
      expect(
        RouteUtils.isSamePathname('http://localhost/a', 'http://example.com/b')
      ).toBe(false);
    });
  });

  describe('createRouteMatcher', () => {
    it('should create a route matcher and match a given route', () => {
      const matcher = RouteUtils.createRouteMatcher('/test/:id');
      expect(matcher.match('/test/123')).toEqual({ id: '123' });
    });
  });
});

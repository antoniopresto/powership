import { tsfy } from './tsfy';
import { createObjectType, resetTypesCache } from '../ObjectType';
import { createType } from '../GraphType/GraphType';
import { CircularDeps } from '../CircularDeps';

describe('stringify', () => {
  afterEach(resetTypesCache);

  test('works', () => {
    const sut = tsfy([123]);
    expect(sut.getParts().body).toEqual('[123]');
  });

  test('array', () => {
    const sut = tsfy([123, 'abc']);
    expect(sut.getParts().body).toEqual('[123, "abc"]');
  });

  test('object', () => {
    const sut = tsfy({ a: 1, b: 2 });
    expect(sut.getParts().body).toEqual('{"a":1,"b":2}');
  });

  test('custom', () => {
    class Foo {
      bla = 2;
    }
    const foo = new Foo();

    const sut = tsfy(foo);

    expect(sut.getParts().body).toEqual('any /*Foo*/');
  });

  test('objectType', () => {
    const obj = createObjectType({
      name: 'string',
      age: 'int',
    });

    const sut = tsfy(obj);

    expect(sut.getParts().body).toEqual(
      'ObjectType<{"name":{"type":"string"},"age":{"type":"int"},}>'
    );
  });

  test('graphType', () => {
    const objectType = createObjectType({
      name: 'string',
      age: 'int',
    });

    const graphType = createType('User', {
      object: {
        id: 'ID',
        data: objectType,
      },
    });

    const sut = tsfy({ graphType, objectType }).toString();
    const pretty = CircularDeps.prettier.format(sut, {
      parser: 'typescript',
    });

    expect(pretty.split('\n')).toEqual([
      'export type TUserType = GraphType<{',
      '  def: { id: { type: "ID" }; data: { def: T320565; type: "object" } };',
      '  type: "object";',
      '}>;',
      '',
      'type T118298 = { type: "string" };',
      'type T158952 = { type: "int" };',
      'type T320565 = { name: T118298; age: T158952 };',
      '',
    ]);
  });

  test('options.many', () => {
    const objectType = createObjectType('UserData', {
      name: 'string',
      age: 'int',
    });

    const graphType = createType('User', {
      object: {
        id: 'ID',
        data: objectType,
      },
    });

    const sut = tsfy([graphType, objectType], {
      many: true,
    }).toString({ prettier: true });

    expect(sut.split('\n')).toEqual([
      'export type TUserType = GraphType<{',
      '  def: {',
      '    id: { type: "ID" };',
      '    data: {',
      '      def: { name: { type: "string" }; age: { type: "int" } };',
      '      type: "object";',
      '    };',
      '  };',
      '  type: "object";',
      '}>;',
      '',
      'export type TUserDataObject = ObjectType<{',
      '  name: { type: "string" };',
      '  age: { type: "int" };',
      '}>;',
      '',
    ]);
  });
});

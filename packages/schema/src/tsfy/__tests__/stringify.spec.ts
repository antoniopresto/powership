import { CircularDeps } from '../../CircularDeps';
import { createType } from '../../GraphType/GraphType';
import { createObjectType, resetTypesCache } from '../../ObjectType';
import { tsfy } from '../tsfy';

describe('stringify', () => {
  afterEach(resetTypesCache);

  test('works', async () => {
    const sut = await tsfy([123]).getParts();
    expect(sut.body).toEqual('[123]');
  });

  test('array', async () => {
    const sut = await tsfy([123, 'abc']).getParts();
    expect(sut.body).toEqual('[123, "abc"]');
  });

  test('object', async () => {
    const sut = await tsfy({ a: 1, b: 2 }).getParts();
    expect(sut.body).toEqual('{"a":1,"b":2,}');
  });

  test('custom', async () => {
    class Foo {
      bla = 2;
    }
    const foo = new Foo();

    const sut = await tsfy(foo).getParts();

    expect(sut.body).toEqual('any /*Foo*/');
  });

  test('objectType', async () => {
    const obj = createObjectType({
      name: 'string',
      age: 'int',
    });

    const sut = await tsfy(obj).getParts();

    expect(sut.body).toEqual(
      'ObjectType<{"name":{"type":"string",},"age":{"type":"int",},}>'
    );
  });

  test('graphType', async () => {
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

    const sut = await tsfy({ graphType, objectType }).toString();

    const pretty = CircularDeps.prettier.format(sut, {
      parser: 'typescript',
    });

    expect(pretty.split('\n')).toEqual([
      'export type TUserType = GraphType<{',
      '  type: "object";',
      '  def: {',
      '    id: { type: "ID" };',
      '    data: {',
      '      type: "object";',
      '      def: { name: { type: "string" }; age: { type: "int" } };',
      '    };',
      '  };',
      '}>;',
      '',
    ]);
  });

  test('options.many', async () => {
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

    const sut = await tsfy([graphType, objectType], {
      many: true,
    }).toString({ prettier: true });

    expect(sut.split('\n')).toEqual([
      'export type TUserDataObject = ObjectType<{',
      '  name: { type: "string" };',
      '  age: { type: "int" };',
      '}>;',
      '',
      'export type TUserType = GraphType<{',
      '  type: "object";',
      '  def: {',
      '    id: { type: "ID" };',
      '    data: {',
      '      type: "object";',
      '      def: { name: { type: "string" }; age: { type: "int" } };',
      '    };',
      '  };',
      '}>;',
      '',
    ]);
  });
});

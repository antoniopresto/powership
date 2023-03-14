import { project } from '../project';

describe('project', () => {
  // test('basic test', () => {
  //   const user = {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     age: 30,
  //
  //     addresses: [
  //       {
  //         city: 'New York',
  //         country: 'US',
  //         number: 1234,
  //       },
  //       {
  //         city: 'New York',
  //         country: 'US',
  //         number: 5678,
  //       },
  //     ],
  //   };
  //
  //   expect(
  //     project(user, [
  //       'id',
  //       'addresses.$.number',
  //     ])
  //   ).toEqual({
  //     id: 1,
  //     addresses: [
  //       { number: 1234 },
  //       { number: 5678 },
  //     ],
  //   });
  // });

  // it('should return an empty object when input is null', () => {
  //   const obj = null;
  //   const projections = ['name'];
  //   const expected = {};
  //   expect(project(obj, projections)).toEqual(expected);
  // });
  //
  // it('should return an empty object when input is undefined', () => {
  //   const obj = undefined;
  //   const projections = ['name'];
  //   const expected = {};
  //   expect(project(obj, projections)).toEqual(expected);
  // });

  it('should project a simple field correctly', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    const projections = ['name'];
    const expected = { name: 'John' };
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should project a nested field correctly', () => {
    const obj = {
      name: 'John',
      address: {
        city: 'New York',
      },
    };
    const projections = ['address.city'];

    expect(project(obj, projections)).toEqual({
      address: {
        city: 'New York',
      },
    });
  });

  // it('should project a field inside an array correctly', () => {
  //   const obj = {
  //     list: [
  //       'apple',
  //       'banana',
  //       'orange',
  //     ],
  //   };
  //   const projections = ['list[2]'];
  //
  //   expect(project(obj, projections)).toEqual({ list: ['orange'] });
  // });

  // it('should project a field inside an array of objects correctly', () => {
  //   const obj = {
  //     list: [
  //       { name: 'apple', price: 1.0 },
  //       { name: 'banana', price: 2.0 },
  //       { name: 'orange', price: 1.5 },
  //     ],
  //   };
  //   const projections = ['list.$.name'];
  //
  //   expect(project(obj, projections)).toEqual({
  //     list: [
  //       'apple',
  //       'banana',
  //       'orange',
  //     ],
  //   });
  // });

  it('should handle non-existent fields in nested objects', () => {
    const obj = {
      name: 'John',
      address: {
        city: 'New York',
        state: 'NY',
      },
    };
    const projections = ['address.country'];
    const expected = {};
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle non-existent fields in objects', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    const projections = ['address.city'];
    const expected = {};
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle invalid projections', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    const projections = ['address..city'];
    const expected = {};
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle empty projections', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    const projections: string[] = [];
    const expected = {};
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle an object with NaN fields', () => {
    const obj = {
      name: NaN,
    };
    const projections = ['name'];
    const expected = { name: NaN };
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle an object with Infinity fields', () => {
    const obj = {
      name: Infinity,
    };
    const projections = ['name'];
    const expected = { name: Infinity };
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle an object with -Infinity fields', () => {
    const obj = {
      name: -Infinity,
    };
    const projections = ['name'];
    const expected = { name: -Infinity };
    expect(project(obj, projections)).toEqual(expected);
  });

  it('should handle an object with multiple projections', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        state: 'NY',
      },
    };
    const projections = ['name', 'address.city'];

    expect(project(obj, projections)).toEqual({
      address: {
        city: 'New York',
      },
      name: 'John',
    });
  });

  it('should handle an object with circular references', () => {
    const obj: any = {};
    obj.self = obj;
    const projections = ['self'];

    expect(project(obj, projections)).toEqual(obj);
  });

  it('should handle an object with duplicate projections', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        state: 'NY',
      },
    };
    const projections = ['name', 'address.city', 'name'];

    expect(project(obj, projections)).toEqual({
      address: {
        city: 'New York',
      },
      name: 'John',
    });
  });

  it('should handle an object with duplicate nested projections', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        state: 'NY',
      },
      friends: [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ],
    };
    const projections = [
      'name',
      'address.city',
      'friends.name',
      'friends.name',
    ];

    expect(project(obj, projections)).toEqual({
      address: {
        city: 'New York',
      },
      name: 'John',
    });
  });

  it('should handle an object with a nested projection that returns undefined', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        state: 'NY',
      },
      friends: [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ],
    };

    const projections = ['name', 'address.country', 'friends.name'];

    expect(project(obj, projections)).toEqual({
      name: 'John',
    });
  });
});

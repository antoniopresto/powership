import { createType } from '../../GraphType/GraphType';
import { resetTypesCache } from '../../ObjectType';

describe('PhoneField', () => {
  afterEach(resetTypesCache);

  test('should format valid number', () => {
    const schema = createType({
      object: {
        phone: 'phone',
        name: 'string',
      },
    });

    const parsed = schema.parse({
      name: 'Foo',
      phone: '+55 (11) 99898-9898',
    });

    expect(parsed).toEqual({
      name: 'Foo',
      phone: '+5511998989898',
    });
  });

  test('should throw on invalid number', () => {
    const schema = createType('Person', {
      object: {
        phone: 'phone',
        name: 'string',
      },
    });

    expect(() => {
      schema.parse({
        name: 'Foo',
        phone: '11998989898',
      });
    }).toThrow('InvalidPhone');
  });
});

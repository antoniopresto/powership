import { pickRequired } from './pickRequired';

describe('pickRequired', () => {
  const sampleObject = {
    name: 'John',
    age: 30,
    address: {
      street: 'Main St',
      number: 123,
      city: 'New York',
    },
    contacts: {
      email: 'john@example.com',
      phone: null,
      social: undefined,
    },
  };

  describe('with function picker', () => {
    it('should pick required fields using a function', () => {
      const result = pickRequired(sampleObject, (obj) => ({
        name: obj.name,
        age: obj.age,
      }));

      expect(result).toEqual({
        name: 'John',
        age: 30,
      });
    });

    it('should pick nested fields using a function', () => {
      const result = pickRequired(sampleObject, (obj) => ({
        street: obj.address.street,
        email: obj.contacts.email,
      }));

      expect(result).toEqual({
        street: 'Main St',
        email: 'john@example.com',
      });
    });

    it('should throw error when trying to pick null values', () => {
      expect(() =>
        pickRequired(sampleObject, (obj) => ({
          phone: obj.contacts.phone,
        }))
      ).toThrow();
    });

    it('should throw error when trying to pick undefined values', () => {
      expect(() =>
        pickRequired(sampleObject, (obj) => ({
          social: obj.contacts.social,
        }))
      ).toThrow();
    });

    it('should throw with custom message when values are null', () => {
      const customMessage = 'Custom error message';
      expect(() =>
        pickRequired(
          sampleObject,
          (obj) => ({
            phone: obj.contacts.phone,
          }),
          customMessage
        )
      ).toThrow(customMessage);
    });
  });

  describe('with array picker', () => {
    it('should pick required fields using an array of paths', () => {
      const result = pickRequired(sampleObject, ['name', 'age']);

      expect(result).toEqual({
        name: 'John',
        age: 30,
      });
    });

    it('should pick nested fields using dot notation', () => {
      const result = pickRequired(sampleObject, [
        'address.street',
        'contacts.email',
      ]);

      expect(result).toEqual({
        street: 'Main St',
        email: 'john@example.com',
      });
    });

    it('should throw error when picking null values with array syntax', () => {
      expect(() => pickRequired(sampleObject, ['contacts.phone'])).toThrow();
    });

    it('should throw error when picking undefined values with array syntax', () => {
      expect(() => pickRequired(sampleObject, ['contacts.social'])).toThrow();
    });

    it('should throw with custom message when using array syntax', () => {
      const customMessage = 'Custom error message';
      expect(() =>
        pickRequired(sampleObject, ['contacts.phone'], customMessage)
      ).toThrow(customMessage);
    });
  });

  describe('edge cases', () => {
    it('should handle empty object with function picker', () => {
      const result = pickRequired({}, () => ({}));
      expect(result).toEqual({});
    });

    it('should handle empty array picker', () => {
      const result = pickRequired(sampleObject, []);
      expect(result).toEqual({});
    });

    it('should throw when input is null', () => {
      // @ts-expect-error
      expect(() => pickRequired(null, ['someField'])).toThrow(
        'Cannot pick properties from null'
      );
    });

    it('should throw when input is undefined', () => {
      // @ts-expect-error
      expect(() => pickRequired(undefined, ['someField'])).toThrow();
    });

    it('should throw when accessing non-existent nested paths', () => {
      // @ts-expect-error
      expect(() => pickRequired(sampleObject, ['nonexistent.path'])).toThrow();
    });
  });
});

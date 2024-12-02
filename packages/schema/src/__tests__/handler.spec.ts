import { assert, IsExact } from 'conditional-type-checks';
import { checkType, handler } from '../handler';
import { Infer } from '../fields/Infer';

describe('Type Utils', () => {
  describe('isType', () => {
    it('validates simple types correctly', () => {
      // String validation
      expect(checkType('string', 'hello')).toBe(true);
      expect(checkType('string', 123)).toBe(false);

      // Number validation
      expect(checkType('int', 123)).toBe(true);
      expect(checkType('int', '123')).toBe(true);

      // Boolean validation
      expect(checkType('boolean', true)).toBe(true);
      expect(checkType('boolean', 'true')).toBe(false);
    });

    it('validates object types correctly', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int',
        },
      } as const;

      expect(checkType(personType, { name: 'John', age: 30 })).toBe(true);
      expect(checkType(personType, { name: 'John', age: '30' })).toBe(true);
      expect(checkType(personType, { name: 'John' })).toBe(false);
    });

    it('validates array types correctly', () => {
      expect(checkType('[int]', [1, 2, 3])).toBe(true);
      expect(checkType('[int]', ['1', '2'])).toBe(false);
      expect(checkType('[int]', 123)).toBe(false);
    });

    it('validates union types correctly', () => {
      const unionType = {
        union: ['string', 'int'],
      } as const;

      expect(checkType(unionType, 'hello')).toBe(true);
      expect(checkType(unionType, 123)).toBe(true);
      expect(checkType(unionType, true)).toBe(false);
    });

    it('validates with custom validation config', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int?',
        },
      } as const;

      expect(checkType(personType, { name: 'John' }, { partial: true })).toBe(
        true
      );
      expect(checkType(personType, { name: 'John' })).toBe(true);
    });
  });

  describe('handleType', () => {
    it('handles valid inputs with function handler', () => {
      const result = handler('int', 123, (value) => value! * 2);
      expect(result).toBe(246);
    });

    it('handles invalid inputs with function handler', () => {
      const result = handler('int', 'not a number', (value) =>
        value === null ? 0 : value * 2
      );
      expect(result).toBe(0);
    });

    it('handles valid inputs with fallback value', () => {
      const result = handler('int', 123, 0);
      expect(result).toBe(123);
    });

    it('handles invalid inputs with fallback value', () => {
      const result = handler('int', 'not a number', 0);
      expect(result).toBe(0);
    });

    it('handles complex object types', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int',
        },
      } as const;

      type Person = Infer<typeof personType>;
      const defaultPerson: Person = { name: 'Unknown', age: 0 };

      const validResult = handler(
        personType,
        { name: 'John', age: 30 },
        defaultPerson
      );

      expect(validResult).toEqual({ name: 'John', age: 30 });

      const invalidResult = handler(
        personType,
        { name: 'John', age: [] },
        new Error()
      );

      expect(invalidResult).toEqual(new Error());
    });

    it('handles transformations with function handler', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int',
        },
      } as const;

      const result = handler(personType, { name: 'John', age: 30 }, (value) =>
        value ? `${value.name} is ${value.age} years old` : 'Invalid person'
      );

      expect(result).toBe('John is 30 years old');
    });

    it('handles custom validation config', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int?',
        },
      } as const;

      const result = handler(personType, { name: 'John' }, 'Invalid', {
        partial: true,
      });

      expect(result).toEqual({ name: 'John' });
    });
  });

  describe('type inference', () => {
    it('correctly infers types for isType', () => {
      const str: unknown = 'hello';
      if (checkType('string', str)) {
        assert<IsExact<typeof str, string>>(true);
      }

      const num: unknown = 123;
      if (checkType('int', num)) {
        assert<IsExact<typeof num, number>>(true);
      }

      const personType = {
        object: {
          name: 'string',
          age: 'int',
        },
      } as const;

      const person: unknown = { name: 'John', age: 30 };
      if (checkType(personType, person)) {
        assert<IsExact<typeof person, { name: string; age: number }>>(true);
      }
    });

    it('correctly infers types for handleType', () => {
      const personType = {
        object: {
          name: 'string',
          age: 'int',
        },
      } as const;

      const result = handler(
        personType,
        { name: 'John', age: 30 },
        (value) => value ?? new Error()
      );

      assert<IsExact<typeof result, Error | { name: string; age: number }>>(
        true
      );

      const fallbackResult = handler(
        personType,
        { name: 'John', age: '30' },
        { name: 'Unknown', age: 0 }
      );

      assert<IsExact<typeof fallbackResult, { name: string; age: number }>>(
        true
      );
    });
  });
});

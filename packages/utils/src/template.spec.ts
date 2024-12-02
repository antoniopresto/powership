import { createTemplate } from './template';

describe('Template System', () => {
  describe('Basic Template Functionality', () => {
    it('should replace simple parameters', () => {
      const template = createTemplate('Hello $name!');
      expect(template.translate({ name: 'John' })).toBe('Hello John!');
    });

    it('should handle multiple parameters', () => {
      const template = createTemplate('Hello $firstName $lastName!');
      expect(template.translate({ firstName: 'John', lastName: 'Doe' })).toBe(
        'Hello John Doe!'
      );
    });

    it('should handle multiple occurrences of the same parameter', () => {
      const template = createTemplate('Hello $name! Goodbye $name!');
      expect(template.translate({ name: 'John' })).toBe(
        'Hello John! Goodbye John!'
      );
    });

    it('should handle number parameters', () => {
      const template = createTemplate('The total is $amount dollars');
      expect(template.translate({ amount: 42 })).toBe(
        'The total is 42 dollars'
      );
    });
  });

  describe('Escape Character Handling', () => {
    it('should handle escaped dollar signs', () => {
      const template = createTemplate('Cost: $$100');
      expect(template.translate({})).toBe('Cost: $100');
    });

    it('should handle escaped parameters', () => {
      const template = createTemplate('Hello $$name and $name!');
      expect(template.translate({ name: 'John' })).toBe(
        'Hello $name and John!'
      );
    });

    it('should handle multiple escaped characters', () => {
      const template = createTemplate('Escaped $$$param and normal $param');
      expect(template.translate({ param: 'value' })).toBe(
        'Escaped $value and normal value'
      );
    });

    it('should handle complex escape sequences', () => {
      const template = createTemplate('Multiple $$$$param and $param');
      expect(template.translate({ param: 'test' })).toBe(
        'Multiple $$param and test'
      );
    });
  });

  describe('Delimiter Handling', () => {
    it('should handle parameters with spaces', () => {
      const template = createTemplate('Hello $name world');
      expect(template.translate({ name: 'John' })).toBe('Hello John world');
    });

    it('should handle parameters with punctuation', () => {
      const template = createTemplate('Hello, $name!');
      expect(template.translate({ name: 'John' })).toBe('Hello, John!');
    });

    it('should handle parameters with newlines', () => {
      const template = createTemplate('Hello $name\nGoodbye $name');
      expect(template.translate({ name: 'John' })).toBe(
        'Hello John\nGoodbye John'
      );
    });
  });

  describe('Error Handling', () => {
    it('should throw error for missing parameters', () => {
      const template = createTemplate('Hello $name!');

      expect(() =>
        template.translate(
          // @ts-expect-error
          {}
        )
      ).toThrow('Missing required parameter: name');
    });

    it('should handle empty templates', () => {
      const template = createTemplate('');
      expect(template.translate({})).toBe('');
    });

    it('should handle templates with only delimiters', () => {
      const template = createTemplate('  \n\t  ');
      expect(template.translate({})).toBe('  \n\t  ');
    });
  });

  describe('Type Safety', () => {
    it('should extract correct parameter types', () => {
      const template = createTemplate('Hello $name!');
      // @ts-expect-error - Should error when missing required parameter
      expect(() => template.translate({})).toThrow(
        'Missing required parameter: name'
      );

      // @ts-expect-error - Should error when providing wrong parameter name
      expect(() => template.translate({ wrongName: 'John' })).toThrow(
        'Missing required parameter: name'
      );

      // Should compile without errors when providing correct parameter
      template.translate({ name: 'John' });
    });

    it('should handle multiple parameter types correctly', () => {
      const template = createTemplate(
        'User $name is $age years old and is $isActive'
      );

      // Should compile without errors when providing all correct parameters
      template.translate({
        name: 'John',
        age: 30,
        isActive: 'true',
      });

      expect(() =>
        // @ts-expect-error - Should error when missing parameters
        template.translate({
          name: 'John',
          age: 30,
        })
      ).toThrow();
    });
  });
});

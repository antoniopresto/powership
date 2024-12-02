import { Formatter, formatter } from './formatter';

describe('formatter', () => {
  it('should format error message with correct color and icon', () => {
    const result = formatter.formatMessage('Test error message', 'error');
    expect(result).toMatch('🔴 Test error message');
  });

  it('should format warning message with correct color and icon', () => {
    const result = formatter.formatMessage('Test warning message', 'warning');
    expect(result).toMatch('🟡 Test warning message');
  });

  it('should format success message with correct color and icon', () => {
    const result = formatter.formatMessage('Test success message', 'success');
    expect(result).toMatch('🟢 Test success message');
  });

  it('should format info message with correct color and icon', () => {
    const result = formatter.formatMessage('Test info message', 'info');
    expect(result).toMatch('🔵 Test info message');
  });

  it('should format debug message with correct color and icon', () => {
    const result = formatter.formatMessage('Test debug message', 'debug');
    expect(result).toMatch('● Test debug message');
  });

  it('should create box with specified padding', () => {
    const result = formatter.createBox('Test Box', { padding: 2 });
    expect(result).toMatch('');
  });

  it('should create box with double border style', () => {
    const result = formatter.createBox('Test Box', { borderStyle: 'double' });
    expect(result).toMatch('');
  });

  it('should format message with indentation', () => {
    const result = formatter.formatMessage('Indented message', 'info', {
      indent: 2,
    });
    expect(result).toMatch('  🔵 Indented message');
  });

  it('should format message with prefix', () => {
    const result = formatter.formatMessage('Prefixed message', 'info', {
      prefix: '[PREFIX]',
    });
    expect(result).toMatch('🔵 [PREFIX] Prefixed message');
  });

  it('should format message with timestamp', () => {
    const result = formatter.formatMessage('Message with timestamp', 'info', {
      timestamp: true,
    });
    expect(result).toMatch(/🔵 \[[^\]]+\] Message with timestamp/);
  });

  it('should format table with proper alignment', () => {
    const data = [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Alice', age: 25, city: 'London' },
    ];
    const result = formatter.formatTable(data);
    expect(result.split('\n')).toEqual([
      'name  | age | city    ',
      '------+-----+---------',
      'John  | 30  | New York',
      'Alice | 25  | London  ',
    ]);
  });

  it('should format list with custom bullet points', () => {
    const items = ['First item', 'Second item', 'Third item'];
    const result = formatter.formatList(items, '→');
    expect(result.split('\n')).toEqual([
      '→ First item',
      '→ Second item',
      '→ Third item',
    ]);
  });

  describe('Edge Cases', () => {
    const developmentFormatter = new Formatter();

    it('should handle empty message', () => {
      const result = developmentFormatter.formatMessage('', 'info');
      expect(result).toMatch('🔵 ');
    });

    it('should handle empty table data', () => {
      const result = developmentFormatter.formatTable([]);
      expect(result).toEqual('');
    });

    it('should handle empty list', () => {
      const result = developmentFormatter.formatList([]);
      expect(result).toEqual('');
    });

    it('should handle multiline message with indentation', () => {
      const multilineMessage = 'First line\nSecond line\nThird line';
      const result = developmentFormatter.formatMessage(
        multilineMessage,
        'info',
        {
          indent: 2,
        }
      );

      expect(result.split('\n')).toEqual([
        '\u001b[34m  🔵 First line',
        '     Second line',
        '     Third line\u001b[39m',
      ]);
    });

    it('should handle message with special characters', () => {
      const specialMessage = '!@#$%^&*()_+ Special チャー';
      const result = developmentFormatter.formatMessage(specialMessage, 'info');
      expect(result).toMatch(specialMessage);
    });

    it('should handle null values in table data', () => {
      const data = [
        { name: 'John', age: null, city: undefined },
        { name: 'Alice', age: 25, city: '' },
      ];
      const result = developmentFormatter.formatTable(data);
      expect(result.split('\n')).toEqual([
        'name  | age  | city     ',
        '------+------+----------',
        'John  | null | undefined',
        'Alice | 25   |          ',
      ]);
    });
  });
});

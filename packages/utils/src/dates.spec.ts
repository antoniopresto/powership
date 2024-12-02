import {
  dates,
  formatDate,
  DateFormat,
  DEFAULT_DATE_FORMAT,
  DEFAULT_MISSING_DATE_PLACEHOLDER,
  ONE_DAY_MS,
  datesCache,
} from './dates';

describe('dates', () => {
  beforeEach(() => {
    datesCache.clear();
  });

  describe('dates function', () => {
    it('should handle string dates', () => {
      const date = dates('2024-01-01T00:00:00-03:00');
      expect(date.isValid).toBe(true);
      expect(date.toISO()?.split('T')[0]).toBe('2024-01-01');
    });

    it('should handle number timestamps', () => {
      // 2024-01-01T00:00:00-03:00
      const timestamp = 1704078000000;
      const date = dates(timestamp);
      expect(date.isValid).toBe(true);
      expect(date.toISO()?.split('T')[0]).toBe('2024-01-01');
    });

    it('should handle Date objects', () => {
      const jsDate = new Date('2024-01-01T00:00:00-03:00');
      const date = dates(jsDate);
      expect(date.isValid).toBe(true);
      expect(date.toISO()?.split('T')[0]).toBe('2024-01-01');
    });
  });

  describe('dates.fromString', () => {
    it('should parse date from string with format', () => {
      const date = dates.fromString('01/01/2024', 'dd/MM/yyyy');
      expect(date.isValid).toBe(true);
      expect(date.toFormat('dd/MM/yyyy')).toBe('01/01/2024');
    });

    it('should handle invalid format', () => {
      const date = dates.fromString('invalid', 'dd/MM/yyyy');
      expect(date.isValid).toBe(false);
    });
  });

  describe('formatDate function', () => {
    it('should format date according to default format', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');
      const formatted = formatDate(date);
      expect(formatted).toBe('15:30 01/01/2024');
    });

    it('should return default text for null date', () => {
      expect(formatDate(null)).toBe(DEFAULT_MISSING_DATE_PLACEHOLDER);
    });

    it('should return default text for undefined date', () => {
      expect(formatDate(undefined)).toBe(DEFAULT_MISSING_DATE_PLACEHOLDER);
    });

    it('should use custom format', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');
      const formatted = formatDate(date, 'yyyy-MM-dd');
      expect(formatted).toBe('2024-01-01');
    });

    it('should use custom default text', () => {
      const formatted = formatDate(null, DEFAULT_DATE_FORMAT, 'No date');
      expect(formatted).toBe('No date');
    });
  });

  describe('DateFormat component', () => {
    it('should format date with default props', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');
      const formatted = DateFormat({ date });
      expect(formatted).toBe('15:30 01/01/2024');
    });

    it('should format date with custom format', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');
      const formatted = DateFormat({ date, format: 'yyyy-MM-dd' });
      expect(formatted).toBe('2024-01-01');
    });

    it('should handle null date', () => {
      const formatted = DateFormat({ date: null });
      expect(formatted).toBe(DEFAULT_MISSING_DATE_PLACEHOLDER);
    });
  });

  describe('Cache behavior', () => {
    it('should cache formatted dates', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');

      // First call should add to cache
      const firstCall = formatDate(date);
      expect(firstCall).toBe('15:30 01/01/2024');

      // Verify it's in cache
      expect(datesCache.has(date)).toBe(true);

      // Second call should use cache
      const secondCall = formatDate(date);
      expect(secondCall).toBe('15:30 01/01/2024');
    });
  });

  describe('Constants', () => {
    it('should have correct ONE_DAY_MS value', () => {
      expect(ONE_DAY_MS).toBe(345600000);
    });
  });

  describe('Cache behavior', () => {
    it('should reuse cached values', () => {
      const date = new Date('2024-01-01T15:30:00-03:00');
      const date2 = new Date('2024-01-01T15:30:00-03:00');
      const date3 = new Date('2024-01-01T15:30:00-03:00');

      formatDate(date);
      formatDate(date2);
      formatDate(date3);

      expect(datesCache.size).toBe(1);
    });

    it('should respect cache size limit', () => {
      for (let i = 0; i < 3001; i++) {
        const date = new Date(2024, 0, i + 1);
        datesCache.set(date, `value${i}`);
      }

      expect(datesCache.size).toBe(3000);

      const firstDate = new Date(2024, 0, 1);
      expect(datesCache.get(firstDate)).toBeUndefined();
    });
  });
});

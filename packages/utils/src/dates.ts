import { DateTime, type DateTimeOptions } from 'luxon';
import { MemoCache } from './memoCache';

// @ts-ignore
export type * from 'luxon';

export { DateTime };

export type DateOrMillis = Date | number | string;

export const datesCache = new MemoCache<string>(3000);

export function dates(dateOrMillis: DateOrMillis) {
  if (typeof dateOrMillis === 'string') {
    return DateTime.fromJSDate(new Date(dateOrMillis));
  }
  if (typeof dateOrMillis === 'number') {
    return DateTime.fromMillis(dateOrMillis);
  }
  return DateTime.fromJSDate(dateOrMillis);
}

dates.fromString = function dateFromString(
  formatted: string,
  format: string,
  options?: DateTimeOptions
) {
  return DateTime.fromFormat(formatted, format, options);
};

export type DateFormatProps = {
  date: DateOrMillis | null | undefined;
  format?: string;
  defaultText?: string;
};

export let DEFAULT_DATE_FORMAT = 'HH:mm dd/MM/yyyy';

export let DEFAULT_MISSING_DATE_PLACEHOLDER = '-';

export function formatDate(
  date: DateOrMillis | null | undefined,
  format = DEFAULT_DATE_FORMAT,
  defaultText = DEFAULT_MISSING_DATE_PLACEHOLDER
) {
  if (!date) return defaultText;
  return (
    datesCache.getOrSet(date, () => dates(date).toFormat(format)) || defaultText
  );
}

export function DateFormat(props: DateFormatProps): string {
  const { date, format = DEFAULT_DATE_FORMAT, defaultText } = props;
  return formatDate(date, format, defaultText);
}

export const ONE_DAY_MS = 3.456e8;

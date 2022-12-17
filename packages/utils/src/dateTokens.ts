import dayjs from 'dayjs';
import esLocale from 'dayjs/locale/es';
import brLocale from 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const DateLocales = {
  es: esLocale,
  ['pt-br']: brLocale,
  ['pt-BR']: brLocale,
  ['pt_BR']: brLocale,
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export { dayjs };

export type DateParsed = ReturnType<typeof dateTokens>;

export type DateInit = string | Date | number;

export type DateJsLocale = Parameters<dayjs.Dayjs['locale']>[0] extends infer R
  ? R extends object
    ? R
    : never
  : never;

export type LocaleInit = keyof typeof DateLocales | DateJsLocale;

export type FormatDateInit = {
  date: DateInit;
  timezone?: string;
  locale?: LocaleInit;
  format?: string;
};

export function dateTokens(init: FormatDateInit | DateInit) {
  const params: FormatDateInit =
    typeof init === 'object' && 'date' in init ? init : { date: init };

  const { date: dateInit, format, timezone, locale } = params;
  const data = [dateInit];

  if (format) {
    data.push(format);
  }

  let date: dayjs.Dayjs = dayjs(...data).tz(timezone);

  if (locale) {
    if (typeof locale === 'string') {
      date = date.locale(DateLocales[locale]);
    }
    if (typeof locale === 'object') {
      date = date.locale(locale);
    }
  }

  const dateString = date.format('YYYY*MMMM*MMM*MM*DD*dddd*HH*mm*ss');

  const [YYYY, MMMM, MMM, MM, DD, dddd, HH, mm, ss] = dateString.split('*');

  return {
    YYYY,
    MMMM,
    MMM,
    MM,
    DD,
    dddd,
    HH,
    mm,
    ss,
  };
}

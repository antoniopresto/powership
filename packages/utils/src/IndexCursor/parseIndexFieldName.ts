export function parseIndexFieldName(prefix: string, suffix: string) {
  if (prefix === 'PK') return suffix;

  const numberSuffix = prefix.match(/^PK(\d*)$/)?.[1] || '';

  if (numberSuffix) {
    prefix = '';
    suffix += numberSuffix;
  }

  return `${prefix}${suffix}`;
}

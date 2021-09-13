import util from 'util';

export function ul(list: any[]) {
  return list
    .map((el) => `\n   • ${typeof el !== 'string' ? util.inspect(el) : el}`)
    .join('\n');
}

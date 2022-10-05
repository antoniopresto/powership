import { Process } from './useProcess';

export function isProduction() {
  return Process.env?.NODE_ENV === 'production';
}

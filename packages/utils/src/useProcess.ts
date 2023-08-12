import { isBrowser } from './isBrowser';

const defaultValue = {
  env: {},
  cwd() {
    return '';
  },
  isMock: true,
};

export function useProcess(): Partial<typeof process> & {
  env: Record<string, any>;
  cwd(): string;
  isMock?: boolean;
} {
  if (typeof process === 'object') return process;

  if (isBrowser()) {
    window.process = window.process || defaultValue;
    return window.process;
  }

  return defaultValue;
}

export const Process = useProcess();

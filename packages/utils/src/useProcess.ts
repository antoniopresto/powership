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
  console.warn(`process is not available at this environment`);

  if (typeof window === 'object') {
    window.process = window.process || defaultValue;
    return window.process;
  }

  return defaultValue;
}

export const Process = useProcess();

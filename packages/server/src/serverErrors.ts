import { createErrorClass } from '@swind/utils';

export const NotImplementedError = createErrorClass('NotImplemented');

export function throwNotImplemented(values: Record<string, any>) {
  const errors: string[] = [];
  Object.entries(values).forEach(([name, v]) => {
    if (v !== undefined && v !== null) {
      errors.push(`${name} not implemented yet.`);
    }
  });

  if (errors.length) {
    const error = new NotImplementedError(errors.join('\n'));

    throw error;
  }
}

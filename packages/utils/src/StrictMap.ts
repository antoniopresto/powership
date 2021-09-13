import { RuntimeError } from './RuntimeError';

export class StrictMap<K, V> extends Map<K, V> {
  constructor() {
    super();
  }

  ensure(key: K) {
    this.get(key);
  }

  get(key): NonNullable<V> {
    if (!this.has(key)) {
      throw new StrictMapError(`There is no item with key "${key}"`, {
        validKeys: [...super.keys()],
      });
    }

    const value = super.get(key);

    if (value === undefined || value === null) {
      throw new StrictMapError(
        `Expected value to be not nullable, but received ${
          value === null ? 'null' : 'undefined'
        }.`,
        {
          validKeys: [...super.keys()],
        }
      );
    }

    return value as NonNullable<V>;
  }
}

class StrictMapError extends RuntimeError {
  constructor(message, details) {
    super(message, details);
    this.name = 'StrictMapError';
  }
}

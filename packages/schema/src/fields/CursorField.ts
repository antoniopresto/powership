import { createProxy } from '@powership/utils';

import { CircularDeps } from '../CircularDeps';
import type { ObjectType } from '../ObjectType';

import { FieldType, FieldTypeParser } from './FieldType';
import { CursorType } from './_fieldDefinitions';

const def = {
  PK: {
    description: 'Primary Key',
    string: {},
  },
  SK: {
    description: 'Secondary or Sort Key',
    optional: true,
    string: {},
  },
  after: {
    // description: '',
    optional: true,

    string: {},
  },
  fields: {
    list: true,

    // description: '',
    optional: true,
    string: {},
  },
  limit: {
    int: {},
    // description: '',
    optional: true,
  },
  prefix: {
    description: 'The prefix to search as "startsWith" in SK',
    optional: true,
    string: {},
  },
  sep: {
    description: 'Composite key separator',
    optional: true,
    string: {},
  },
  version: {
    description: 'The Cursor format version',
    string: {},
  },
} as const;

type CursorDef = typeof def;

let cursorObject: ObjectType<CursorDef> | undefined;

function getCursorObject() {
  // circular dependency
  const { createObjectType } = CircularDeps.ObjectType as any;
  cursorObject = cursorObject || createObjectType('Cursor', def);
  return cursorObject;
}

export class CursorField extends FieldType<CursorType, 'cursor', undefined> {
  parse: FieldTypeParser<CursorType>;

  utils: {
    object: ObjectType<CursorDef>;
  };

  static object() {
    return getCursorObject()!;
  }

  constructor() {
    super({ def: undefined, name: 'cursor' });

    this.utils = createProxy(() => ({
      object: getCursorObject()!,
    }));

    const parser = this.utils.object.parse.bind(this.utils.object);

    this.parse = this.applyParser({
      parse: (value) => {
        if (typeof value !== 'object') {
          throw new Error(`Expected cursor, found ${value}`);
        }

        return parser(value);
      },
    });
  }

  static create = (): CursorField => {
    return new CursorField();
  };
}

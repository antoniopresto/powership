import { AnyRecord } from '@swind/utils';

import { CircularDeps } from '../CircularDeps';

import { FieldType, FieldTypeParser } from './FieldType';
import { ObjectLike } from './IObjectLike';

export interface CircularFieldDef {
  parentId?: string;
}

export class CircularField extends FieldType<
  AnyRecord,
  'circular',
  CircularFieldDef
> {
  parse: FieldTypeParser<AnyRecord>;
  parentId: string;

  get parent(): ObjectLike {
    try {
      return CircularDeps.ObjectType.register.get(this.parentId);
    } catch (e) {
      throw new Error(
        `CircularField failed to get circular reference with id "${this.def}"`
      );
    }
  }

  constructor(def: CircularFieldDef) {
    super({ def: def, name: 'circular' });

    if (!def.parentId) {
      throw new Error(
        `CircularField: parentId is required to create a circular type reference.`
      );
    }

    this.parse = this.applyParser({
      parse: (input) => {
        return this.parent.parse(input);
      },
    });
  }

  static create = (def: CircularFieldDef): CircularField => {
    return new CircularField(def);
  };
}

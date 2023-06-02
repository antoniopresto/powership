import { AnyRecord } from '@swind/utils';

import { CircularDeps } from '../CircularDeps';

import { FieldType, FieldTypeParser } from './FieldType';
import { ObjectLike } from './IObjectLike';

export interface SelfReferenceFieldDef {
  parentObjectType?: any;
  parentId?: string;
  // since circular refs can only be lists or optional types,
  // this type can also accept the `list` and `optional` config from definition
  list?: boolean;
  optional?: boolean;
}

export class SelfReferenceField extends FieldType<
  AnyRecord,
  'self',
  SelfReferenceFieldDef
> {
  parse: FieldTypeParser<AnyRecord>;

  get parent(): ObjectLike {
    if (this.def.parentId) {
      return CircularDeps.ObjectType.register.get(this.def.parentId);
    }

    if (this.def.parentObjectType) return this.def.parentObjectType;

    throw new Error(
      `SelfReferenceField failed to get circular reference parent`
    );
  }

  constructor(def: SelfReferenceFieldDef) {
    super({ def: def, name: 'self' });

    // circular refs can only be lists or optional types
    if (def.list) {
      this.toList();
    }
    if (def.optional) {
      this.toOptional();
    }

    if (!(this.optional || this.list)) {
      throw new Error(
        `"self" reference fields must be optionals, lists, or have all fields as optionals,` +
          ` otherwise no input can be logically valid and all parsing operations will end in infinity loops.`
      );
    }

    this.parse = this.applyParser({
      parse: (input) => {
        return this.parent.parse(input);
      },
    });
  }

  static create = (def: SelfReferenceFieldDef): SelfReferenceField => {
    return new SelfReferenceField(def);
  };
}

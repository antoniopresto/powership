/**
 * Used to represent an object as another object field
 */

import { TypeLike } from '@darch/utils/lib/typeUtils';

import { Darch } from '../Darch';
import type { AnyObjectType } from '../ObjectType';

import { FieldType, FieldTypeParser, isFieldInstance } from './FieldType';

type AnyObjectField = TypeLike<typeof ObjectField['prototype']>;

export class ObjectField<DefinitionInput> extends FieldType<
  unknown,
  'object',
  DefinitionInput
> {
  parse: FieldTypeParser<unknown>;

  utils: {
    object: AnyObjectType;
  };

  static is(t: any): t is AnyObjectField {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super('object', def);

    this.utils = {
      // @ts-ignore circular
      object: Darch.createObjectType(def as any) as any,
    };

    this.parse = this.applyParser({
      parse: (input) => {
        return this.utils.object.parse(input);
      },
    });
  }

  static create = <DefinitionInput>(def: DefinitionInput) => {
    return new ObjectField<DefinitionInput>(def);
  };
}

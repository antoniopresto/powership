/**
 * Used to represent an object as another object field
 */

import { createProxy, TypeLike } from '@powership/utils';

import { } from '../internal';

import { FieldType, isFieldInstance } from './FieldType';
import type { ObjectDefinitionInput } from './_parseFields';

type AnyObjectField = TypeLike<(typeof ObjectField)['prototype']>;

export class ObjectField<
  DefinitionInput extends ObjectDefinitionInput
> extends FieldType<unknown, 'object', DefinitionInput> {
  parse: FieldTypeParser<unknown>;

  utils: {
    object: any;
  };

  static is(t: any): t is AnyObjectField {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super({ def: def, name: 'object' });

    this.utils = createProxy(() => ({
      // @ts-ignore circular
      object: createObjectType(def as any) as any,
    }));

    this.parse = this.applyParser({
      parse: (input, _options) => {
        return this.utils.object.parse(input, _options);
      },
    });
  }

  static create = <DefinitionInput extends ObjectDefinitionInput>(
    def: DefinitionInput
  ) => {
    return new ObjectField<DefinitionInput>(def);
  };
}

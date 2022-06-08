import { assert, IsExact } from 'conditional-type-checks';

import { ObjectType } from '../../ObjectType';
import { InferField } from '../_parseFields';

test('infer union types', () => {
  type TUnion = InferField<{ object: { name: ['string', 'int'] } }>;
  assert<IsExact<TUnion, { name: string | number }>>(true);

  type TUnionList = InferField<{
    object: { name: ['string', 'int'] };
    list: true;
  }>;
  assert<IsExact<TUnionList, { name: string | number }[]>>(true);

  type TUnionListOptional = InferField<{
    object: { name: ['string', 'int'] };
    list: true;
    optional: true;
  }>;
  assert<IsExact<TUnionListOptional, { name: string | number }[] | undefined>>(
    true
  );

  type TUnionListOptionalItem = InferField<{
    object: { name: ['string', 'int?'] };
    list: true;
    optional: true;
  }>;
  assert<
    IsExact<TUnionListOptionalItem, { name?: string | number }[] | undefined>
  >(true);

  assert<
    IsExact<TUnionListOptionalItem, { name?: string | number }[] | undefined>
  >(true);

  type SampleObject = ObjectType<{
    street: 'string';
    number: 'int?';
    days: { enum: ['0', '1']; list: true; optional: true };
    add: { object: { name: 'string' } };
    addListOptional: {
      object: {
        name: 'string';
        uni: [
          { enum: ['a', 'b'] }, //
          'int'
        ];
      };
      list: true;
      optional: true;
    };
  }>;

  type TSampleObjectInfer = InferField<SampleObject>;

  type TSampleObject = {
    street: string;
    number?: number | undefined;
    days?: ('0' | '1')[] | undefined;
    add: { name: string };
    addListOptional?:
      | {
          name: string;
          uni: 'a' | 'b' | number;
        }[]
      | undefined;
  };

  assert<IsExact<TSampleObject, TSampleObjectInfer>>(true);

  type AddressObject = InferField<{
    object: {
      name: 'string'; // any string
      email: 'email?'; // email type - will validate against email regex
      age: 'int?'; // optional integer
      notes: '[int]?';

      // declaring a union field - will infer as `string | undefined | number[]`
      unionField: ['string?', '[int]?'];

      // represents an enum
      letter: { enum: ['a', 'b', 'c'] };

      // more detailed way to define enums
      letterOptionalList: {
        enum: ['x', 'y', 'z'];
        optional: true;
        list: true;
      };

      // using a previous object as field type
      optionalAddress: {
        object: SampleObject;
        optional: true;
      };

      // another way to define object fields
      deliveryAddress: SampleObject;
    };
  }>;

  assert<
    IsExact<
      AddressObject,
      {
        name: string;
        email?: string | undefined;
        age?: number | undefined;
        notes?: number[] | undefined;
        unionField?: string | number[] | undefined;
        letter: 'a' | 'b' | 'c';
        letterOptionalList?: ('x' | 'y' | 'z')[] | undefined;
        optionalAddress?: TSampleObject | undefined;
        deliveryAddress: TSampleObject;
      }
    >
  >(true);
});

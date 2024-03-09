import { ErrorWithStack, wrapError } from '@powership/utils';

import { createType } from './GraphType/GraphType';
import { Infer } from './Infer';
import { FieldInput } from './fields/_parseFields';

export function assertType<Type extends FieldInput>(
  value: any,
  type: Type,
  customMessage?: string,
): asserts value is Infer<Type> {
  wrapError(
    () => {
      return createType(type).parse(value);
    },
    assertType,
    (error) => {
      const nextError = new TypeError(error.message, {
        cause: error.message,
      }) as ErrorWithStack;

      nextError.message = customMessage
        ? `${customMessage}\n${nextError.message}`
        : nextError.message;

      nextError.stack = error.stack;
      return nextError;
    },
  );
}

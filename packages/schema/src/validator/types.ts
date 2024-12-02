export type ValidatorPathSegment = string | number;
export type ValidatorFieldPath = ValidatorPathSegment[];

export type ValidationErrorDetails = {
  path: ValidatorFieldPath;
  value: any;
  message: string;
  symbol: symbol;
};

export type ValidationCustomMessage =
  | string
  | ((value: any, error: Error) => string | Error);

export type FieldParserOptionsObject = {
  allowExtraFields?: boolean;
  customErrorMessage?: ValidationCustomMessage;
  customMessage?: ValidationCustomMessage;
  excludeInvalidListItems?: boolean;
  includeHidden?: boolean;
  partial?: boolean;
  exclude?: string[];
  path?: ValidatorFieldPath;
};

export type FieldParserConfig =
  | string
  | ((value: any, error: Error) => string | Error)
  | FieldParserOptionsObject;

export type FieldTypeParser<Type> = (
  input: any,
  config?: FieldParserConfig
) => Type;


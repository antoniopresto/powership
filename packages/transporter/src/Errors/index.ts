import { createErrorClass, ErrorClassCreatorOptions } from '@backland/utils';

const config: ErrorClassCreatorOptions = {};

export const DuplicatedKeyError = createErrorClass('DocumentDuplication');

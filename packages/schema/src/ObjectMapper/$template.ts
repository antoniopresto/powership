import { tupleEnum } from '@backland/utils';

import { $var } from './$var';

export const $templateUtilsEnum = tupleEnum(
  'capitalize',
  'camelCase',
  'camelcase',
  'kebabCase',
  'kebabcase',
  'snakeCase',
  'snakecase',
  'startCase',
  'startcase',
  'upperCase',
  'uppercase',
  'upperFirst',
  'upperfirst',
  'lowerFirst',
  'lowerfirst',
  'lowerCase',
  'lowercase',
  'time',
  'isoDate'
);

export type $template_util = typeof $templateUtilsEnum.enum;

export type $template_def<
  U extends $template_util = $template_util,
  V extends $var = $var
> = `${U}(${V})`;

export type $template<_T extends $template_def, _P1, _P2> = string;

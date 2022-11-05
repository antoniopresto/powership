type _basic = `$` | `$.${string}` | `$$` | `$$.${string}`;

export type $var = _basic | `$elem(${_basic})`;

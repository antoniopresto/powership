function cloneRegExp(re: RegExp) {
  let regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString())!;
  return new RegExp(regexMatch[1], regexMatch[2]);
}

export function clone<T>(arg: T): T {
  if (typeof arg !== 'object' || arg === null) {
    return arg;
  }

  if (Array.isArray(arg)) {
    return arg.map(clone) as T;
  }

  if (arg instanceof Date) {
    return new Date(arg.getTime()) as T;
  }

  if (arg instanceof RegExp) {
    return cloneRegExp(arg) as T;
  }

  let cloned = {} as T;
  for (let name in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, name)) {
      cloned[name] = clone(arg[name]);
    }
  }
  return cloned;
}

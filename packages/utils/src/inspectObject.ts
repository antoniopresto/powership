// @only-server
import utils from 'util';

import { getTypeName } from './getTypeName';

interface InspectObjectDetails {
  tabSize?: number;
  transformLine?: (text: string, index: number, item: any) => string;
  depth?: number;
  appendDetailIndex?: boolean;
  named?: boolean | string; // print type name
}

export function inspectObject(
  inputObject: any,
  options: InspectObjectDetails = {},
  appendDetailIndex = false,
) {
  const {
    depth = 2,
    tabSize = 6,
    named,
    transformLine = appendDetailIndex
      ? (text, index) => `[${index}]: ${text}`
      : (t) => t,
  } = options;

  const inspect = (obj: any, index: number) => {
    let text = typeof obj === 'string' ? obj : _inspectObject(obj, { depth });
    if (named === true) {
      text = `${getTypeName(obj)} ${text}`;
    } else if (named) {
      text = `${named} ${text}`;
    }
    return transformLine(text, index, obj);
  };

  const text = inspect(inputObject, 0);

  return appendTab(text, tabSize);
}

function appendTab(text: string, size = 4) {
  const tab = spaces(size);

  return text
    .split('\n')
    .map((t) => `${tab}${t}`)
    .join('\n');
}

function spaces(size: number, space = ' ') {
  return [...Array(size)].map(() => space).join('');
}

function _inspectObject(obj: any, config: any): string {
  try {
    if (typeof utils === 'object') {
      return utils.inspect(obj, config);
    }
  } catch (e) {}

  try {
    return JSON.stringify(obj, null, 2);
  } catch (e) {
    return 'FAILED TO INSPECT';
  }
}

import { dynamicRequire } from './dynamicRequire';

interface InspectObjectDetails {
  tabSize?: number;
  transformLine?: (text: string, index: number, item: any) => string;
  depth?: number;
  appendDetailIndex?: boolean;
}

export function inspectObject(
  inputObject: any,
  options: InspectObjectDetails = {},
  appendDetailIndex = false
) {
  const {
    depth = 2,
    tabSize = 6,
    transformLine = appendDetailIndex
      ? (text, index) => `[${index}]: ${text}`
      : (t) => t,
  } = options;

  const inspect = (obj: any, index: number) => {
    const text = typeof obj === 'string' ? obj : _inspectObject(obj, { depth });
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
  const nodeIns = dynamicRequire('util')?.inspect;

  if (nodeIns) {
    return nodeIns(obj, config);
  }

  try {
    return JSON.stringify(obj, null, 2);
  } catch (e) {
    return 'FILED TO INSPECT';
  }
}

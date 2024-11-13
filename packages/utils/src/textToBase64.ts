import { assertTypes } from './expectedType';
import { isBrowser } from './isBrowser';

export function textToBase64(text: string) {
  assertTypes({ text }, 'string');

  if (isBrowser()) {
    return window.btoa(text);
  }

  return Buffer.from(text).toString('base64');
}

export function base64ToText(text: string) {
  assertTypes({ text }, 'string');

  if (isBrowser()) {
    return window.btoa(text);
  }

  return Buffer.from(text, 'base64').toString();
}

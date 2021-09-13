import { RuntimeError } from './RuntimeError';

export function textToBase64(text: string) {
  if (typeof text !== 'string') {
    throw new RuntimeError('textToBase64: invalid text input', { text });
  }
  return Buffer.from(text).toString('base64');
}

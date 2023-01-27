import { encodeNumber } from './conust';

const values = [
  { name: 'empty',
input: '',
encoded: '',
decoded: '' },

  { name: 'zero 1',
input: '0',
encoded: '5',
decoded: '0' },
  { name: 'zero 2',
input: '+000',
encoded: '5',
decoded: '0' },
  { name: 'zero 3',
input: '-000',
encoded: '5',
decoded: '0' },
  { name: 'zero 4',
input: '000.0000',
encoded: '5',
decoded: '0' },

  {
    name: 'all digits',
    input: '1234567890abcdefghij.klmnopqrstuvwxyz',
    encoded: '7k1234567890abcdefghijklmnopqrstuvwxyz',
    decoded: '1234567890abcdefghij.klmnopqrstuvwxyz',
  },

  {
    name: 'negative all digits',
    input: '-1234567890abcdefghij.klmnopqrstuvwxyz',
    encoded: '3fyxwvutsrqzponmlkjihgfedcba9876543210~',
    decoded: '-1234567890abcdefghij.klmnopqrstuvwxyz',
  },

  {
    name: 'holes in the middle',
    input: '005f002k00.0i0k0',
    encoded: '785f002k000i0k',
    decoded: '5f002k00.0i0k',
  },

  { name: 'one',
input: '1',
encoded: '711',
decoded: '1' },
  { name: 'ugly one',
input: '+00001',
encoded: '711',
decoded: '1' },
  { name: 'negative one',
input: '-1',
encoded: '3yy~',
decoded: '-1' },
  {
    name: 'ugly negative one',
    input: '-000001',
    encoded: '3yy~',
    decoded: '-1',
  },
  {
    name: 'ugly positive int',
    input: '+00000123000',
    encoded: '76123',
    decoded: '123000',
  },
  {
    name: 'ugly negative int',
    input: '-00000123000',
    encoded: '3tyxw~',
    decoded: '-123000',
  },
  {
    name: 'fractional',
    input: '54321.12345',
    encoded: '755432112345',
    decoded: '54321.12345',
  },
  {
    name: 'negative fractional',
    input: '-54321.12345',
    encoded: '3uuvwxyyxwvu~',
    decoded: '-54321.12345',
  },
  {
    name: 'ugly fractional',
    input: '+00054321000.00012345000',
    encoded: '785432100000012345',
    decoded: '54321000.00012345',
  },
  {
    name: 'ugly negative fractional',
    input: '-00054321000.00012345000',
    encoded: '3ruvwxyzzzzzzyxwvu~',
    decoded: '-54321000.00012345',
  },
  {
    name: 'cowboy hat',
    input: 'cowboy.hat',
    encoded: '76cowboyhat',
    decoded: 'cowboy.hat',
  },
  {
    name: 'negative cowboy hat',
    input: '-cowboy.hat',
    encoded: '3tnb3ob1ip6~',
    decoded: '-cowboy.hat',
  },
  {
    name: 'maximum int length',
    input: '12345678901234567890123456789012345.1',
    encoded: '7z1123456789012345678901234567890123451',
    decoded: '12345678901234567890123456789012345.1',
  },
  {
    name: 'maximum negative int length',
    input: '-12345678901234567890123456789012345.1',
    encoded: '30yyxwvutsrqzyxwvutsrqzyxwvutsrqzyxwvuy~',
    decoded: '-12345678901234567890123456789012345.1',
  },
  {
    name: 'maximum fracleading zero count',
    input: '0.000000000000000000000000000000000004325430',
    encoded: '60y432543',
    decoded: '0.00000000000000000000000000000000000432543',
  },

  {
    name: 'example 1',
    input: '12000000000000000000000000000000000000',
    encoded: '7z412',
    decoded: '12000000000000000000000000000000000000',
  },
  { name: 'example 2',
input: '1200',
encoded: '7412',
decoded: '1200' },
  { name: 'example 3',
input: '12',
encoded: '7212',
decoded: '12' },
  { name: 'example 4',
input: '1.2',
encoded: '7112',
decoded: '1.2' },
  { name: 'example 5',
input: '0.12',
encoded: '6z12',
decoded: '0.12' },
  { name: 'example 6',
input: '0.0012',
encoded: '6x12',
decoded: '0.0012' },
  {
    name: 'example 6.2',
    input: '0.0000000000000000000000000000000000012',
    encoded: '60y12',
    decoded: '0.0000000000000000000000000000000000012',
  },
  {
    name: 'example 6.3',
    input: '-0.0000000000000000000000000000000000012',
    encoded: '4z1yx~',
    decoded: '-0.0000000000000000000000000000000000012',
  },
  { name: 'example 7',
input: '-0.0012',
encoded: '42yx~',
decoded: '-0.0012' },
  { name: 'example 8',
input: '-0.12',
encoded: '40yx~',
decoded: '-0.12' },
  { name: 'example 9',
input: '-1.2',
encoded: '3yyx~',
decoded: '-1.2' },
  { name: 'example 10',
input: '-12',
encoded: '3xyx~',
decoded: '-12' },
  { name: 'example 11',
input: '-1200',
encoded: '3vyx~',
decoded: '-1200' },
  {
    name: 'example 12',
    input: '-12000000000000000000000000000000000000',
    encoded: '30vyx~',
    decoded: '-12000000000000000000000000000000000000',
  },
];

// a, b, result
const expectEncoded = values.map(
  (el) => [el.input, null, el.encoded] as string[]
);

const numbers = [
  '-1020999999999999999999999999999999999999',
  '-39999999999999999999.33300000000000000001',
  '-9999999999999999999.99999999999999999999',
  '-1999999999999999999.33300000000000000001',
  '-42.33300000000000000001',
  '-2',
  '-1',
  '-0.5',
  '-0.2',
  '-0.00000000000000000000000000000000010003',
  '-0.00000000000000000000000000000000010002',
  '-0.00000000000000000000000000000000000032',

  '0.00000000000000000000000000000000000032',
  '0.00000000000000000000000000000000010002',
  '0.00000000000000000000000000000000010003',
  '0.2',
  '0.5',
  '1',
  '2',
  '42.33300000000000000001',
  '1999999999999999999.33300000000000000001',
  '9999999999999999999.99999999999999999999',
  '39999999999999999999.33300000000000000001',
  '1020999999999999999999999999999999999999',
];

describe('conust', () => {
  describe('encode', () => {
    test.each(expectEncoded)('encode(%s)', (a, _, expected) => {
      expect(encodeNumber(a)).toMatch(expected);
    });
  });

  test('should keep order', () => {
    const encodedSorted = numbers.map((num) => encodeNumber(num)).sort();

    expect(encodedSorted).toEqual(numbers.map((el) => encodeNumber(el)));
  });

  test('should encode numbers', () => {
    expect(encodeNumber(-12000000000000000000000000000000000000)).toEqual(
      '30vyx~'
    );
  });
});

// Package conust transforms numbers into string tokens for which the simple string comparison
// produces the same result as the numeric comparison of the original numbers would.
// The input is not limited to decimal numbers, other bases up to base 36 are accepted with the
// restriction that it must be lowercased.
// The expected input format is ^[+-]?[0-9a-z]+(\.[0-9a-z]+)?$ Failing to satisfy this results in encoding failures.
//
// The conversion adds a few characters to the length of the original numeric string, but at
// the same time it can save some space by storing only the significant portion of the number
// omitting trailing and leading zeros of it in the output.
//
// Beside transforming single numbers to sortable strings, you can also transform a string containing both
// text and numbers into a properly sortable version. However, the reverse transformation of such mixed strings
// is not possible.

import Big from 'big.js';

const maxDigitValue = 35;
const maxMagnitudeDigitValue = 34;

const digit0 = '0'.charCodeAt(0);
const digitA = 'a'.charCodeAt(0);
const digitZ = 'z'.charCodeAt(0);
const digit9 = '9'.charCodeAt(0);

const signNegativeMagPositive = '3';
const signNegativeMagNegative = '4';
const zeroOutput = '5';
const signPositiveMagNegative = '6';
const signPositiveMagPositive = '7';
const negativeNumberTerminator = '~';

const digits36 = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
] as const;

const digits36Reversed = [
  'z',
  'y',
  'x',
  'w',
  'v',
  'u',
  't',
  's',
  'r',
  'q',
  'p',
  'o',
  'n',
  'm',
  'l',
  'k',
  'j',
  'i',
  'h',
  'g',
  'f',
  'e',
  'd',
  'c',
  'b',
  'a',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
] as const;

export function encodeNumber(input: string | number) {
  if ('string' !== typeof input && 'number' !== typeof input) {
    throw new Error(
      `expected typeof input to be string, but received "${typeof input}"`
    );
  }

  const numberString = typeof input === 'number' ? Big(input).toFixed() : input;

  try {
    if (!numberString.length) return '';

    const positive = numberString[0] !== '-';

    const startPos = getSignificantStartPos(numberString);
    const endPos = getSignificantEndPos(numberString);

    if (startPos === endPos) return zeroOutput;

    const decimalPointPos = numberString.indexOf('.');

    const { magnitudePositive, magnitude } = getMagnitudeParams(
      numberString.length,
      startPos,
      endPos,
      decimalPointPos
    );

    let signDigit = encodeSign(positive, magnitudePositive);
    const digit2 = writeMagnitude(positive, magnitudePositive, magnitude);

    let result = `${signDigit}${digit2}`;

    if (startPos < decimalPointPos && decimalPointPos < endPos) {
      result += writeDigits(
        positive,
        numberString.substring(startPos, decimalPointPos)
      );

      result += writeDigits(
        positive,
        numberString.substring(decimalPointPos + 1, endPos)
      );
    } else {
      result += writeDigits(positive, numberString.substring(startPos, endPos));
    }

    if (!positive) {
      result += negativeNumberTerminator;
    }

    return result;
  } catch (e: any) {
    e.stack = `parse(${typeof numberString} "${numberString}"): ${e.stack}`;
    throw e;
  }
}

export function conust(input: string | number) {
  return encodeNumber(input);
}

function writeDigits(positive: boolean, digits: string) {
  if (positive) {
    return digits;
  } else {
    let result = '';

    for (let i = 0; i < digits.length; i++) {
      const int = digitToInt(digits.charCodeAt(i));
      const digit = digits36Reversed[int];
      result += digit;
    }

    return result;
  }
}

function digitToInt(digit: number): number {
  if (digit < digitA) {
    return digit - digit0;
  }

  return 10 + (digit - digitA);
}

function encodeSign(positive: boolean, magnitudePositive: boolean) {
  if (positive) {
    if (magnitudePositive) {
      return signPositiveMagPositive;
    }
    return signPositiveMagNegative;
  }

  if (magnitudePositive) {
    return signNegativeMagPositive;
  }

  return signNegativeMagNegative;
}

function getMagnitudeParams(
  inputLength: number,
  sStartPos: number,
  _sEndPos: number,
  decimalPointPos: number
) {
  let magnitude: number;
  let magnitudePositive: boolean;

  if (decimalPointPos < 0) {
    magnitude = inputLength - sStartPos;
    magnitudePositive = true;
  } else if (decimalPointPos < sStartPos) {
    magnitude = sStartPos - (decimalPointPos + 1);
    magnitudePositive = false;
  } else {
    magnitude = decimalPointPos - sStartPos;
    magnitudePositive = true;
  }

  return { magnitude,
magnitudePositive };
}

function writeMagnitude(
  positive: boolean,
  magnitudePositive: boolean,
  magnitude: number
) {
  const reverseDigits = positive != magnitudePositive;

  let result = '';

  while (magnitude > maxMagnitudeDigitValue) {
    magnitude -= maxMagnitudeDigitValue;

    if (reverseDigits) {
      result += digits36Reversed[maxDigitValue];
    } else {
      result += digits36[maxDigitValue];
    }
  }

  if (reverseDigits) {
    result += digits36Reversed[magnitude];
  } else {
    result += digits36[magnitude];
  }

  return result;
}

function getSignificantStartPos(input: string): number {
  let i = 0;
  while (i < input.length) {
    if (isDigit(input[i]) && input[i] !== '0') {
      return i;
    }
    ++i;
  }
  return -1;
}

function getSignificantEndPos(input: string): number {
  let i = input.length - 1;

  while (i >= 0) {
    if (isDigit(input[i]) && input[i] !== '0') {
      return i + 1;
    }
    --i;
  }

  return -1;
}

function isDigit(char: string): boolean {
  const digit = char.charCodeAt(0);
  return (
    (digit >= digit0 && digit <= digit9) || (digit >= digitA && digit <= digitZ)
  );
}

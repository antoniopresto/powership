import { BJSON } from '../BJSON';
import { EmailRegex } from '../emailRegex';
import { getTypeName } from '../getTypeName';
import { simpleObjectClone } from '../simpleObjectClone';

describe('simpleObjectClone', () => {
  const getObject = () => ({
    date: new Date(0),
    regex: EmailRegex,
    name: 'antonio',
    age: NaN,
    otherDate: new Date(2),
    deep: {
      a: {
        b: {
          c: /1234/gim,
        },
      },
    },
  });

  it('clone', () => {
    const obj = getObject();
    const sut = simpleObjectClone(obj);
    expect(sut).toEqual(getObject());
  });

  it('stringify', async () => {
    const obj = getObject();
    const str = BJSON.stringify(obj);

    expect(typeof str).toEqual('string');
  });

  it('parse', async () => {
    const str = BJSON.stringify(getObject());
    const value = BJSON.parse(str);
    expect(value).toEqual(getObject());
  });

  it('stringify date', async () => {
    const date = new Date('1989-01-01');
    const str = BJSON.stringify(date);
    expect(str).toEqual('"ːDateː(1989-01-01T00:00:00.000Z)"');
    expect(BJSON.parse(str)).toEqual(date);
  });

  it('stringify NaN', async () => {
    const value = NaN;
    const str = BJSON.stringify(value);
    expect(BJSON.parse(str)).toEqual(value);
  });

  it('stringify [NaN]', async () => {
    const value = [NaN];
    const str = BJSON.stringify(value);
    expect(BJSON.parse(str)).toEqual(value);
  });

  test('custom replacer', () => {
    const value = [
      new Date(),
      /abc/,
      { a: 1,
b: { c: new Date() } },
      null,
      undefined,
    ];

    const str = BJSON.stringify(
      { 12: value,
b: false },
      {
        quoteValues: (str, { key }) => {
          return key === 'b' ? `${str}____` : `${str}`;
        },
        handler: ({ serializer, value, key }) => {
          if (key === 'b') return 'HMM';
          const typeName = getTypeName(value);
          if (['Object', 'Array'].includes(typeName)) return;
          if (['String', 'Number'].includes(typeName)) return value?.toString();
          return serializer?.formatter?.tsName(value) || typeName;
        },
      }
    );

    expect(str).toEqual(
      '{"12":[Date,RegExp,{"a":1,"b":HMM____},Null,undefined],"b":HMM____}'
    );
  });
});

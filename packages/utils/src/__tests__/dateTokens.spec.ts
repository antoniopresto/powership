import { dateTokens } from '../dateTokens';

describe('dateTokens', () => {
  // afterEach();

  test('works', async () => {
    const tokens = dateTokens({ date: '2022-09-25',
locale: 'pt-br' });

    expect(tokens).toEqual({
      DD: '25',
      HH: '00',
      MM: '09',
      MMM: 'set',
      MMMM: 'setembro',
      YYYY: '2022',
      dddd: 'domingo',
      mm: '00',
      ss: '00',
    });
  });
});

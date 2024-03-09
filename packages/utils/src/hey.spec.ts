import { hey } from './hey';

describe('hey', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = await hey`
      Today is a nice day to 
          go <strike><bold><blue>outside!</blue></bold></strike>
          lets go?
    `;

    expect(sut.split('\n')).toEqual([
      'Today is a nice day to ',
      '    go \u001b[9m\u001b[1m\u001b[34moutside!\u001b[0m\u001b[0m\u001b[0m',
      '    lets go?',
      '',
    ]);
  });
});

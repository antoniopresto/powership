import { hey, Ident } from './hey';

describe('hey', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = hey`
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

  test('blue', () => {
    hey.blue('Hello!');
  });

  test('error', () => {
    hey.error(new Error('foo'));
  });

  test('Ident', () => {
    let chain = new Ident('a')
      .li('aa')
      .li('ab')
      .ul('ac')
      .li('aca')
      .li('acb')
      .back()
      .li('LI-after-back()')
      .back(5)
      //
      .ul('UL-after-back(5)')
      .li('UL-after-back5_child0');

    const expHead = [
      'a',
      ' --> aa',
      ' --> ab',
      ' --> ac',
      ' ----> aca',
      ' ----> acb',
      ' --> LI-after-back()',
      ' --> UL-after-back(5)',
      ' ----> UL-after-back5_child0',
    ];

    expect(chain.toString().split('\n')).toEqual(expHead);

    // expect(chain.head.state.toString()).toEqual([]);

    // expect(t.toString()).toBe('Block');
    //
    // const childA = t.push('a');
    //
    // expect(childA.toString()).toEqual('a');
    // expect(t.toString()).toEqual('Block\n  a');
    //
    // const b = t.push('b');
    //
    // expect(b.print()).toEqual('Block\n  a\n  b');
    //
    // const c = b.pop('I should be children of ')

    // expect(childA.printChild().split('\n')).toEqual([
    //   '',
    //   '  a', //
    //   '  b',
    // ]);

    // expect(childA.push('bread of').toString().split('\n')).toEqual([
    //   'Batata',
    //   '  potatoes',
    // ]);

    //
    // expect(child.write()).toEqual('potatoes');
  });
});

import { joinTemplateString } from './joinTemplateString';

describe('joinTemplateString', () => {
  // afterEach();

  test('basic test', () => {
    const sut = joinTemplateString`
      top: 0;
      right: 0;
      left: 0;
      bottom: 1;
      @media screen and (min-width: 768px) {
         display: none;
      }
    `;

    expect(sut.root.split('\n')).toEqual([
      'top: 0;',
      'right: 0;',
      'left: 0;',
      'bottom: 1;',
    ]);

    expect(sut.mediaRules).toEqual([
      '@media screen and (min-width: 768px) {\n         display: none;\n      }',
    ]);
  });
});

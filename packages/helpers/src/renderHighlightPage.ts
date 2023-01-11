import { HighlightResult } from 'highlight.js';
import hljs from 'highlight.js/lib/common';

export type { HighlightResult };

export interface CodeBlock {
  text: string;
  language: string;
  ignoreIllegals?: boolean;
  htmlElementWrapper?: [string, string];
  codeTextWrapper?: [string, string];
  onResult?: (result: HighlightResult) => HighlightResult;
  header?: string;
  footer?: string;
}

export interface RenderHighlightPageInit {
  blocks: CodeBlock[];
  head?: string;
  footer?: string;
  title?: string;
  hero?: string;
  codeSectionSeparator?: string; // defaults to '<br>'
}

export function renderHighlightPage(init: RenderHighlightPageInit): string {
  let {
    blocks,
    head = '',
    footer = '',
    title = 'Example',
    hero = '',
    codeSectionSeparator = '<br>',
  } = init;

  const text = blocks
    .map(
      ({
        text: txt,
        htmlElementWrapper,
        codeTextWrapper,
        onResult,
        header: _header = '',
        footer: _footer = '',
        ...rest
      }) => {
        let _result = hljs.highlight(txt, rest);

        if (onResult) _result = onResult(_result);

        if (!htmlElementWrapper) {
          htmlElementWrapper = [
            `<pre><code class="language-${rest.language.toLowerCase()}">`,
            `</code></pre>`,
          ];
        }

        let codeText = `${_header}${_result.value}${_footer}`;

        let res = wrap(codeText, codeTextWrapper);
        res = wrap(res, htmlElementWrapper);
        return res;
      }
    )
    .join(codeSectionSeparator);

  return `
  <html>
  <head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    ${highlightPageCSS} ${highlightCSS}
  </style>
   ${head}
  </head>
  
  <body>
    ${hero}
    <main class="main-app">${text}</main>
    ${footer}
  </body>
  </html>
`;
}

export const highlightPageCSS = `
pre {
    margin-bottom: 4em;
}

body {
    background: #0d1117;
    color: #c9d1d9;
    margin: 0;
    padding: 2em;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    font-family: monospace;
}

h1 {
    font-family: monospace;
    padding-bottom: 1em;
    border-bottom: dashed 1px #2c2c2c;
}

.main-app {
  display: block;
  width: 90%;
}

textarea {
    background: #292a2d;
    color: #c6c6c6;
    font-family: monospace;
    padding: 2em;
    border: solid 1px #494c50;
}

hr {
    border: #2c2c2c 1px solid;
    margin-top: 2em;
}
`;

export const highlightCSS = `
pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
`;

function wrap(text: string, wrapper: [string, string] = ['', '']) {
  return `${wrapper[0] || ''}${text}${wrapper[1] || ''}`;
}

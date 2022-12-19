import { Infer } from 'backland';
import hljs from 'highlight.js/lib/common';

import {
  JSONFieldCase,
  jsonToSchemaDefinition,
  JSONToSchemaOptions,
  jsonToType,
} from './jsonToType';

export type BacklandUtilsResolverInit = Infer<typeof JSONToSchemaOptions>;

export async function backlandUtilsResolver(input: BacklandUtilsResolverInit) {
  const {
    json,
    examples = true,
    name = 'Example',
    ...options
  } = JSONToSchemaOptions.parse(input);

  const type = jsonToType(json, { ...options, name, examples });
  const definition = jsonToSchemaDefinition(json, {
    ...options,
    name,
    examples,
  });

  const typescript = await type.typescriptPrint({ format: false });
  const graphql = type.print().join('\n');

  const graphQLCode = hljs.highlight(graphql, { language: 'graphql' });
  const tsCode = hljs.highlight(typescript, { language: 'typescript' });
  const jsonCode = hljs.highlight(JSON.stringify(definition, null, 2), {
    language: 'JSON',
  });

  const resBody = [
    renderForm(input.json),

    `<h1>Definition</h1>`,
    `<pre><code class="language-json">${jsonCode.value}</code></pre>`,

    `<h1>Typescript</h1>`,
    `<pre><code class="language-typescript">${tsCode.value}</code></pre>`,

    `<h1>GraphQL</h1>`,
    `<pre><code class="language-graphql">${graphQLCode.value}</code></pre>`,
  ].join(' ');

  return {
    statusCode: 200,
    body: renderPage(resBody),
    headers: { 'Content-Type': 'text/html' },
  };
}

function renderForm(example = '{"a": ["1", 2], b: {age: 33} }') {
  return [
    '<h1>Parse new JSON:</h1>',
    '<form action="/r/backland/toschema" method="POST">',
    //
    '<label>Type Name: <input name="name" value="Example" ></input></label>',
    //
    '<br>',
    '<br>',
    //
    '<label>Case: ',
    '<Select name="fieldCase" value="keep" >',
    JSONFieldCase.map((el) => `<option value=${el}>${el}</option>`).join('\n'),
    '</Select></label>',
    //
    '<br>',
    '<br>',
    '<textarea planeholder="JSON" name="json" style="width: 595px; height: 163px;">',
    example,
    '</textarea>',
    //
    '<br>',
    '<br>',
    '<button>Send</button>',
    '</form>',
  ].join('\n');
}

function renderPage(code: string) {
  return `<html><style>${pageCSS} ${highlightCSS}</style><main class="main-app">${code}</main></html>`;
}

const pageCSS = `
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

const highlightCSS = `
pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
`;

/*
    if (!event.path.match(/backland\/toschema/)) return;

    const { body } = event;
    const method = event.method.toUpperCase();

    if (method === 'GET') {
      return {
        statusCode: 200,
        body: renderPage(renderForm()),
        headers: {
          'Content-type': 'text/html',
        },
      };
    }

    if (method !== 'POST' || !body) return;

    const input = (function iifeJson() {
      try {
        const bodyJSON = JSON.parse(body);
        const inputJSON = bodyJSON.json;
        return {
          ...bodyJSON,
          json: JSON.parse(bodyJSON.json),
          inputJSON,
        };
      } catch (e) {
        return {};
      }
    })();

 */

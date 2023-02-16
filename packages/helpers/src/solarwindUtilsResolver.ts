import { Infer } from 'backland';

import {
  JSONFieldCase,
  jsonToSchemaDefinition,
  JSONToSchemaOptions,
  jsonToType,
} from './jsonToType';
import {
  renderHighlightPage,
  RenderHighlightPageInit,
} from './renderHighlightPage';

export type BacklandUtilsResolverInit = Infer<typeof JSONToSchemaOptions>;

export async function backlandUtilsResolver(
  input: BacklandUtilsResolverInit,
  onPageInit?: (options: RenderHighlightPageInit) => RenderHighlightPageInit
) {
  const {
    json,
    examples = true,
    name = 'Example',
    url,
    ...options
  } = JSONToSchemaOptions.parse(input);

  const type = jsonToType({ ...options, name, examples, json });
  const definition = jsonToSchemaDefinition({
    ...options,
    name,
    examples,
    json,
  });

  const typescript = await type.typescriptPrint({ format: false });
  const graphql = type.print().join('\n');

  const jsonText = JSON.stringify(definition, null, 2);

  let initPage: RenderHighlightPageInit = {
    blocks: [
      {
        header: '<h1>Definition</h1>',
        text: jsonText,
        language: 'json',
      },
      {
        header: '<h1>GraphQL</h1>',
        text: graphql,
        language: 'graphql',
      },
      {
        header: '<h1>Typescript</h1>',
        text: typescript,
        language: 'typescript',
      },
    ],
  };

  if (onPageInit) {
    initPage = onPageInit(initPage);
  }

  const html = renderHighlightPage({
    hero: renderForm({ url, json: jsonText }),
    ...initPage,
  });

  return {
    statusCode: 200,
    body: html,
    headers: { 'Content-Type': 'text/html' },
  };
}

function renderForm(init: { json: string; url?: string }) {
  const { json, url = '/r/backland/toschema' } = init;

  return [
    '<h1>Parse new JSON:</h1>',
    `<form action="${url}" method="POST">`,
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
    json,
    '</textarea>',
    //
    '<br>',
    '<br>',
    '<button>Send</button>',
    '</form>',
  ].join('\n');
}

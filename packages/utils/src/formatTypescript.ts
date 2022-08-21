import {
  CompilerOptions,
  createLanguageService,
  getDefaultCompilerOptions,
  getDefaultLibFilePath,
  IndentStyle,
  IScriptSnapshot,
  MapLike,
  ScriptSnapshot,
  SemicolonPreference,
} from 'typescript/lib/tsserverlibrary';

export function formatTypescript(text: string, fileName = 'temp') {
  const host = new LanguageServiceHost();
  host.addFile(fileName, text);

  const languageService = createLanguageService(host);
  const edits = languageService.getFormattingEditsForDocument(fileName, {
    baseIndentSize: 0,
    indentSize: 2,
    tabSize: 2,
    indentStyle: IndentStyle.Smart,
    semicolons: SemicolonPreference.Insert,
    newLineCharacter: '\r\n',
    convertTabsToSpaces: true,
    insertSpaceAfterCommaDelimiter: true,
    insertSpaceAfterSemicolonInForStatements: true,
    insertSpaceBeforeAndAfterBinaryOperators: true,
    insertSpaceAfterConstructor: false,
    insertSpaceAfterKeywordsInControlFlowStatements: true,
    insertSpaceAfterFunctionKeywordForAnonymousFunctions: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: false,
    insertSpaceAfterTypeAssertion: false,
    insertSpaceBeforeFunctionParenthesis: false,
    placeOpenBraceOnNewLineForFunctions: false,
    placeOpenBraceOnNewLineForControlBlocks: false,
    insertSpaceBeforeTypeAnnotation: false,
  });

  edits
    .sort((a, b) => a.span.start - b.span.start)
    .reverse()
    .forEach((edit) => {
      const head = text.slice(0, edit.span.start);
      const tail = text.slice(edit.span.start + edit.span.length);
      text = `${head}${edit.newText}${tail}`;
    });

  text = text
    .split(';')
    .map((el) => el.trim())
    .join('');

  return text;
}

class LanguageServiceHost implements LanguageServiceHost {
  files: MapLike<IScriptSnapshot> = {};
  addFile(fileName: string, text: string) {
    this.files[fileName] = ScriptSnapshot.fromString(text);
  }

  // for ts.LanguageServiceHost

  getCompilationSettings = () => getDefaultCompilerOptions();
  getScriptFileNames = () => Object.keys(this.files);
  getScriptVersion = (_fileName: string) => '0';
  getScriptSnapshot = (fileName: string) => this.files[fileName];
  getCurrentDirectory = () => process.cwd();
  getDefaultLibFileName = (options: CompilerOptions) =>
    getDefaultLibFilePath(options);
}

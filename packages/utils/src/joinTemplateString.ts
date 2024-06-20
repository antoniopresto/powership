export type JTSKey = { [K: string]: any; toString(): string };

export function joinTemplateString(
  strings: TemplateStringsArray,
  keys: JTSKey[] = []
) {
  let root = strings[0].toString();

  keys.forEach((key, i) => {
    const character = strings[i + 1];
    root += `${key.toString()}${character}`;
  });

  const mediaRules: string[] = [];

  root = root
    .replaceAll(/(@media [^}]*}(\s*;)?)|( {2,})/gim, (part) => {
      part = part.trim();
      if (!part) return part;
      mediaRules.push(part);
      return '';
    })
    .trim();

  return {
    root,
    mediaRules,
  };
}

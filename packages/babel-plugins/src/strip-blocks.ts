import { PluginObj } from '@babel/core';

export function StripBlocksPlugin(): PluginObj {
  return {
    name: 'transform-strip-block',

    visitor: {
      Program(path, pluginPass) {
        const { magicComment = '@only' } = pluginPass.opts as any;

        function remove(comment: { value?: string }) {
          return !comment.value?.trim().startsWith(magicComment);
        }

        path.traverse({
          enter(path) {
            const comments = path.node.leadingComments || [];
            if (!comments.length) return;
            const text = comments[comments.length - 1].value.trim();
            if (!text.startsWith(magicComment)) return;
            path.node.leadingComments = [];
            path.remove();
          },
          exit(path) {
            path.node.trailingComments =
              path.node.trailingComments?.filter(remove) || null;
            path.node.innerComments =
              path.node.innerComments?.filter(remove) || null;
            path.node.leadingComments =
              path.node.leadingComments?.filter(remove) || null;
          },
        });
      },
    },
  };
}

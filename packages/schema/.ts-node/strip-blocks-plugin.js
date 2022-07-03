"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StripBlocksPlugin() {
    return {
        name: 'transform-strip-block',
        visitor: {
            Program: function (path, pluginPass) {
                var _a = pluginPass.opts.magicComment, magicComment = _a === void 0 ? '@only' : _a;
                function remove(comment) {
                    var _a;
                    return !((_a = comment.value) === null || _a === void 0 ? void 0 : _a.trim().startsWith(magicComment));
                }
                path.traverse({
                    enter: function (path) {
                        var comments = path.node.leadingComments || [];
                        if (!comments.length)
                            return;
                        var text = comments[comments.length - 1].value.trim();
                        if (!text.startsWith(magicComment))
                            return;
                        path.node.leadingComments = [];
                        path.remove();
                    },
                    exit: function (path) {
                        var _a, _b, _c;
                        path.node.trailingComments =
                            ((_a = path.node.trailingComments) === null || _a === void 0 ? void 0 : _a.filter(remove)) || null;
                        path.node.innerComments =
                            ((_b = path.node.innerComments) === null || _b === void 0 ? void 0 : _b.filter(remove)) || null;
                        path.node.leadingComments =
                            ((_c = path.node.leadingComments) === null || _c === void 0 ? void 0 : _c.filter(remove)) || null;
                    },
                });
            },
        },
    };
}
exports.default = StripBlocksPlugin;
//# sourceMappingURL=strip-blocks-plugin.js.map
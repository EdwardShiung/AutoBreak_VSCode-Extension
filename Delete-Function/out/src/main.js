"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionNode = void 0;
const parser_1 = require("@babel/parser");
// import traverse from '@babel/traverse';
function getFunctionNode() {
    const code = `
        function getNum (){
            return 'name'
        }
        function getNumA (){
            return 'name'
        }
    `;
    const ast = (0, parser_1.parse)(code);
    console.log(ast);
}
exports.getFunctionNode = getFunctionNode;
//# sourceMappingURL=main.js.map
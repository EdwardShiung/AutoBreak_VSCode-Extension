"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("@babel/parser");
function getFunction() {
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
//# sourceMappingURL=mian.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionNode = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = __importDefault(require("@babel/traverse"));
function getFunctionNode(code, index) {
    //To get node
    let functionNode;
    const ast = (0, parser_1.parse)(code);
    // console.log(ast);
    (0, traverse_1.default)(ast, {
        FunctionDeclaration(path) {
            // console.log(path.node);
            //index 檢查
            if (index >= path.node?.start && index <= path.node?.end) {
                //To get node
                functionNode = {
                    name: path.node?.id?.name,
                    start: path.node?.loc?.start,
                    end: path.node?.loc?.end
                };
            }
        }
    });
    //To get node
    console.log(functionNode);
    return functionNode;
}
exports.getFunctionNode = getFunctionNode;
//# sourceMappingURL=main.js.map
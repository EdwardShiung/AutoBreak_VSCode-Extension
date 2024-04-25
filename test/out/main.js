"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFunctionNode = exports.getFunctionNode = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = __importDefault(require("@babel/traverse"));
function getFunctionNode(code, index) {
    //To get node
    let functionNode;
    const ast = (0, parser_1.parse)(code);
    // console.log(ast);
    (0, traverse_1.default)(ast, {
        FunctionDeclaration(path) {
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
    // let myArray: { name: string, start: Position, end: Position }[] = [];
    // if (functionNode) {
    //     myArray.push(functionNode);
    // }
    // console.log(myArray[0]);
    // console.log(myArray[1]);
    return functionNode;
}
exports.getFunctionNode = getFunctionNode;
function getAllFunctionNode(code) {
    //To get node information
    let functionsInfo = [];
    //Using babel to parse and create AST
    const ast = (0, parser_1.parse)(code);
    (0, traverse_1.default)(ast, {
        FunctionDeclaration(path) {
            functionsInfo.push({
                name: path.node.id?.name,
                loc: path.node.loc
            });
        },
        FunctionExpression(path) {
            if (path.parent.type === 'VariableDeclarator' && path.parent.id) {
                functionsInfo.push({
                    name: path.node.id?.name,
                    loc: path.node.loc
                });
            }
            ;
        },
        ArrowFunctionExpression(path) {
            if (path.parent.type === 'VariableDeclarator' && path.parent.id) {
                functionsInfo.push({
                    name: path.parent.id,
                    loc: path.node.loc
                });
            }
            ;
        }
    });
    return functionsInfo;
}
exports.getAllFunctionNode = getAllFunctionNode;
//# sourceMappingURL=main.js.map
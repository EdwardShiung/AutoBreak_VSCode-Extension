"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const main_1 = require("../main");
function activate(context) {
    vscode.commands.registerCommand('Final_Project.deleteFunction', () => {
        vscode.window.showInformationMessage('Hi from Delete_Function!');
        //vscode找到字串名稱
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        //Before getting the real code, defining fake code here
        // const code = `
        // 	function getNum (){
        // 		return 'name'
        // 	}
        // 	function getNumA (){
        // 		return 'name'
        // 	}
        // `;
        //Real code data
        const code = editor.document.getText();
        //Before getting the real index, defining fake index here
        // const index = 10;
        const index = editor.document.offsetAt(editor.selection.active);
        //Get function node from main (Algorithm logic)
        const functionNode = (0, main_1.getFunctionNode)(code, index);
        //Judgement
        if (!functionNode) {
            return;
        }
        //UI + //Integrate with function Node
        editor?.edit(editBuilder => {
            editBuilder.delete(new vscode.Range(new vscode.Position(functionNode.start.line, functionNode.start.column), new vscode.Position(functionNode.end.line, functionNode.end.column)));
        });
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.test.js.map
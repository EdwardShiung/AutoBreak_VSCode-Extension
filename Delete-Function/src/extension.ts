import * as vscode from 'vscode';
import { getFunctionNode } from './main';

export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand(
		'Delete-Function.helloWorld', 
		() => {
		vscode.window.showInformationMessage('Hi from Delete_Function!');

		//vscode找到字串名稱
		const editor = vscode.window.activeTextEditor;
		
		if(!editor) {
			return;	
		}


		//Before getting the real code, defining fake code here
		const code = `
			function getNum (){
				return 'name'
			}
			function getNumA (){
				return 'name'
			}
		`
		
		const index = 10;


		//Get function node from main (Algorithm logic)
		const functionNode = getFunctionNode(code, index);

		//Judgement
		if(!functionNode){
			return;
		}
	

		//UI
		editor?.edit(editBuilder=>{
			editBuilder.delete(new vscode.Range(new vscode.Position(functionNode.start.line, functionNode.end.column), new vscode.Position(functionNode.start.line,functionNode.end.column)));
		});
	});
}




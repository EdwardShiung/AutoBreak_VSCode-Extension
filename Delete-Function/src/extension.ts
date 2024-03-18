import * as vscode from 'vscode';
import {parse} from '@babel/parser';
import traverse from '@babel/traverse';

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

		const code = `
			function getNum (){
				return 'name'
			}
			function getNumA (){
				return 'name'
			}
		`;

		const ast = parse(code);
		console.log(ast);

		editor?.edit(editBuilder=>{
			editBuilder.delete(new vscode.Range(new vscode.Position(0,1), new vscode.Position(2,1)));
		});
	});
}




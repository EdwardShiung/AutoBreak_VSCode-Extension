import * as vscode from 'vscode';
import { getFunctionNode } from '../main';

export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand(
		'Final_Project.deleteFunction', 
		() => {
		vscode.window.showInformationMessage('Hi from Delete_Function!');

		//vscode找到字串名稱
		const editor = vscode.window.activeTextEditor;
		
		if(!editor) {
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
		const functionNode = getFunctionNode(code, index);

		//Judgement
		if(!functionNode){
			return;
		}
	

		//UI + //Integrate with function Node
		editor?.edit(editBuilder=>{
			editBuilder.delete(
				new vscode.Range(
					new vscode.Position(
						functionNode.start.line, 
						functionNode.start.column
						), 
						new vscode.Position(functionNode.end.line,functionNode.end.column)));
		});
	});
}




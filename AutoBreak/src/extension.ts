import * as vscode from 'vscode';
import { getFunctionNode, getAllFunctionNode } from './main';

function deleteFunction(commandName: string) {
    return () => {
        vscode.window.showInformationMessage('Delete Function Successfully');

        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        const code = editor.document.getText();
        const index = editor.document.offsetAt(editor.selection.active);

        const functionNode = getFunctionNode(code, index);

        if (!functionNode) {
            return;
        }

        editor.edit(editBuilder => {
            editBuilder.delete(
                new vscode.Range(
                    new vscode.Position(functionNode.start.line - 1, 
										functionNode.start.column),
                    new vscode.Position(functionNode.end.line - 1, 
										functionNode.end.column)
                )
            );
        });
    };
}

function breakPointFunction(commandName: string) {
    return () => {
        vscode.window.showInformationMessage('Breakpoint Successfully');

        const editor = vscode.window.activeTextEditor;

        if (!editor) {
			vscode.window.showErrorMessage('No Function');
            return;
        }

        const code = editor.document.getText();

        const allFunctionNode = getAllFunctionNode(code);

        if (!allFunctionNode) {
            return;
        }

		const breakpoints: vscode.SourceBreakpoint[] = [];

		for(let i = 0; i < allFunctionNode.length; i++){
			console.log(allFunctionNode[i].loc?.start);
			breakpoints.push(new vscode.SourceBreakpoint(new vscode.Location(editor.document.uri, new vscode.Position(allFunctionNode[i].loc!.start.line, allFunctionNode[i].loc!.end.column - 1))));
		}

		vscode.debug.addBreakpoints(breakpoints);
    };
}

export function activate(context: vscode.ExtensionContext) {
    //Multiple Functions --> Framework
	vscode.commands.registerCommand('Final_Project.deleteFunction', deleteFunction('Final_Project.deleteFunction'));
	vscode.commands.registerCommand('Final_Project.breakPointFunction', breakPointFunction('Final_Project.breakPointFunction'));
}






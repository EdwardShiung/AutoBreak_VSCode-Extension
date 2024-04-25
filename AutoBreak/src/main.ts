import {parse} from '@babel/parser';
import traverse from '@babel/traverse';
import { SourceLocation } from '@babel/types';

//Create new type
interface FunctionNode{
    name: string,
    start:{
         line: number, 
         column: number, 
         index: number
    },
    end:{
         line: number, 
         column: number, 
         index: number
    }
}

// Define New Type of Position
interface Position {
    line: number;
    column: number;
    index: number;
}

export function getFunctionNode(code:string, index:number): FunctionNode | undefined{

    //To get node
    let functionNode;

    const ast = parse(code);
    // console.log(ast);

    traverse(ast, {
        FunctionDeclaration(path){
            //index 檢查
            if(index >= path.node?.start! && index <= path.node?.end!){

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

export function getAllFunctionNode(code:string){
    
    //To get node information
    let functionsInfo: { name: any; loc: SourceLocation | null | undefined; }[] = [];

    //Using babel to parse and create AST
    const ast = parse(code);

    traverse(ast, {
        FunctionDeclaration(path){
            functionsInfo.push({
                name: path.node.id?.name,
                loc: path.node.loc
            });
        },
        FunctionExpression(path){
            if(path.parent.type === 'VariableDeclarator' && path.parent.id){
                functionsInfo.push({
                    name: path.node.id?.name,
                    loc: path.node.loc
                });
            };
        },
        ArrowFunctionExpression(path) {
            if (path.parent.type === 'VariableDeclarator' && path.parent.id) {
              functionsInfo.push({
                name: path.parent.id,
                loc: path.node.loc
              });
            };
        }
    });
    return functionsInfo;
}



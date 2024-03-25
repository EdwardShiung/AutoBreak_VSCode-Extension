import {parse} from '@babel/parser';
import traverse from '@babel/traverse';

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


export function getFunctionNode(code:string, index:number): FunctionNode | undefined{


    //To get node
    let functionNode;

    const ast = parse(code);
    // console.log(ast);

    traverse(ast, {
        FunctionDeclaration(path){

            // console.log(path.node);


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
    console.log(functionNode);
    return functionNode;
}




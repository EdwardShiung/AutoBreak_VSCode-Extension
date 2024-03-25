import {parse} from '@babel/parser';
import traverse from '@babel/traverse';


export function getFunctionNode(code:string, index:number){


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




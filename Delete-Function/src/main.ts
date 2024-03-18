import {parse} from '@babel/parser';
// import traverse from '@babel/traverse';


export function getFunctionNode(){

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
}




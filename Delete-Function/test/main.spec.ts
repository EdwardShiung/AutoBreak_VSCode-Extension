const vitest =  await import('vitest');
import { test, expect } from 'vitest';
import { getFunctionNode } from '../src/main';


vitest.test('init', ()=>{
       

     const code = `
     function getNum (){
         return 'name'
     }
     function getNumA (){
         return 'name'
     }
     `;
     
     //假設範圍
     const index = 10;


     //[API]
     // To get node 
     const functionNode = getFunctionNode(code, index);

     //[Result]
     //Describe the node of the code
     expect(functionNode).toEqual({
          name: "getNum",
          start:{
               line: 2, 
               column: 5, 
               index: 6
          },
          end:{
               line: 4, 
               column: 6, 
               index: 55
          }
     });
});




const vitest =  await import('vitest');
import { getFunctionNode } from '../src/main';


vitest.test('init', ()=>{
     getFunctionNode();
});




import * as demo1 from "./demo1.js";
import * as demoTwo  from "./demo2.js";
import demo2,{cat,s,v} from "./demo2.js";
//demo2.js 不可使用 import {} from "./demo2.js"
console.log('demo1')
console.log(demo1)

console.log('demo2')
console.log(demoTwo)
console.log(demoTwo.default)
console.log('demo2.2')
console.log(demo2)
console.log(cat)
console.log(s,v)
var m = new cat()
console.log(m.hello);

import * as demo4 from "./demo4.js";
import demo5 from './demo5.js'

console.log(demo4)
console.log(demo4.default)
console.log(demo5)
console.log(`
export typeName valuename = value;
export {valueName as valueAliasName};
export funnction name()/Class ClassName{

}
export default function(){}
export defalut class{}
class ClassName{}
function FunctionName(){} 
export {ClassName as default};
export {Function as default};
;
`)



export let name1, name2, nameN; // also var, const

export let name4 = 'name4', name5 = 'name5',nameM= 'nameN'; // also var, const
export function func1(){
    console.log('hello this is func1');
}
export class Class1 {
    hello()
    {
        console.log('hello,this is class1')
    }
}

var name7 = "name7"
const name8 ="name8";

// 导出列表
export { name7, name8};
var n1 = 'n1'
var n2 = 'n2'
var nn = "nn"
// 重命名导出
export { n1 as v1, n2 as v2, nn };

var o = {
    a1:1,
    a2:2
}
// 解构导出并重命名
export const { n11, n22: bar } = o;

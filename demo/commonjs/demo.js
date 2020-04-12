'use strict'

console.log(
    `
    exports=module.exports;
    module.exports={
        a:a
        b,
    }
    module.exports.a =a;
    module.exports.b =b;
    exports ={
        c:c,
        d
    }
    exports.c=c;
    exports.d=d;

    // 下面两实例非导出 
    // exports = value 
    // value 取代了 module.export
    exports = {
        e:e,
        f
    }
    exports = e
    `
)

var dog = require("./demo.lib.js")
var demo2  = require("./demo2.lib")
var demo3 = require("./demo3.lib")
var demo4 = require("./demo4.lib")
var {
    cat:cat4
} = require("./demo2.lib.js")

// 解析语法糖 类似 import { cat as cat4} from './demo2.lib.js'
console.log(cat4);


var wc = new dog();
wc.hello()
console.log(dog);


var catMiMi =  new demo2.cat()
console.log(demo2);
console.log(demo2.cat);
console.log(catMiMi)
console.log(demo2.app)
console.log(demo2.demo2)




console.log(demo3)
demo3.function1();

var monkeyMM = new demo3.monkey()
monkeyMM.hello()

console.log(demo4)
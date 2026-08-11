// 知识点
// 什么是类型定义
// 应用场景
//      ts中几乎所有变量都会定义类型，用于编译时进行检测，避免部分异常的产生
// 定义变量类型
//      基本数据类型
//          any
//          object
//          unknown
//          never
//      联合类型
//      值类型
//      定义json对象
//      对象可选属性
//      type关键字 类型别名
//      定义数组
//      定义函数
//      as断言
// 结构化的类型系统
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 什么是类型定义
    // 用于给变量指定一个类型的方法，被指定类型的变量不能用于存放其他类型的数据
    // ts 中可以给变量，函数参数，返回值等定义数据类型
    // 在使用时必须使用符合类型条件的数据
    // 定义变量类型
    let a = 0;
    // 基本数据类型
    // Number Boolean String BigInt Symbol null undefined
    // ts 中基本数据类型名都是小写的 不是大写的封装类
    let b = true;
    let c = 'hello';
    // 若类型为 any 则任意类型都可以被接受
    // 使用 any 类型时 tsc 编译器不会检测其类型
    let d = function () {
    };
    // 未显式声明的变量都被当作 any
    let e = 123;
    // 无法给定义了类型的变量赋值错误类型的数据，如：
    // c = 123
    // tsc 编译时会报错
    // object 类型，代表除了基本数据类型(boolean, number, string, bigint, symbol, null, undefined)外的其余类型
    // 参考: https://www.typescriptlang.org/docs/handbook/2/functions.html#object
    let f = {};
    f = [1, 2, 3];
    f = () => {
    };
    // unknown 类型，代表未知类型，类似 any，但是一旦一个值为 unknown 则无法再操作他
    // 例如:
    // function unknownCheck(arg: unknown) {
    //     console.log(arg.length); // arg 是 unknown 那么就不能操作他
    // }
    // 所以 unknown 多用于函数返回值返回值
    // function unknownCheck(): unknown {
    //     // 当前函数返回值因为是 unknown 所以可以返回任意值
    //     return 123
    // }
    // unknownCheck().toFixed(2)
    // never 类型
    // 1. 作为函数返回值类型时，说明函数没有返回
    function fail(msg) {
        throw new Error(msg);
    }
    // 2. 作为联合类型的剩余分支
    function someFn(x) {
        if (typeof x === "string") {
            // 当x类型为字符串时执行此处代码
        }
        else if (typeof x === "number") {
            // 当x类型为数字时执行此处代码
        }
        else {
            // 此处的x类型就是never
            // 当条件语句中判断完了联合类型 string | number 的所有可能
            // 那么剩余的就是 never
            x;
        }
    }
    // 联合类型
    // 支持多个类型
    let g = true;
    g = 'hello';
    // 值类型
    // 可以指定一个类型是特定的一些值，如下
    let h = 'male';
    // 其实 boolean 类型就是 联合类型 true | false 的缩写
    // 定义json对象
    // 其中 [key: string] 为索引签名
    // 参考: https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
    let json = { a: 1, b: 'hello', c: true };
    // 可以给一个json对象定义 key:value 键值对类型的同时，定义对象属性
    // 可以用 [] 方括号来定义索引
    let obj = {
        name: '张三',
        sex: 'male',
        birthday: new Date()
    };
    // 注意: 索引签名应该写在对象类型定义的第一行; 数组也可以添加索引签名
    // 定义必须包含某些属性的特殊对象
    let obj2 = {
        no: 1,
        score: 60
    };
    // 对象可选属性
    // 属性名后使用问号“?”来定义可选属性
    // 对象赋值时可以不提供可选属性
    let obj3 = {
        name: '张三'
    };
    let v = { x: 1, y: 0 };
    // 定义数组
    // 数组类型后面的尖括号代表的是泛型
    // 泛型的意思是：接收不同的类型那么数组的类型就会随之改变
    // 例如：
    // Array<number> 代表数字数组
    // Array<string> 代表字符串数组
    // Array<any> 代表数组成员可以是任意类型
    let arr = new Array();
    arr.push('a');
    arr.push('b');
    arr.push('c');
    // 数组也能使用方括号定义
    let arr2 = [];
    arr2.push(false);
    arr2.push(true);
    // 注意: string[] 和 [string] 含义不同，[string] 代表一个数组中只有一个字符串成员
    // 例如:
    let arr3 = ['hello'];
    // 就类似于 {} 花括号定义的是对象一样，[] 方括号 定义的数组
    // {} 花括号内定义的是对象属性，那么 [] 方括号内定义的是数组成员
    // 参考 元组类型: https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
    let arr4 = ['hello', 4, 'male', false];
    // 定义函数
    // 在变量fn后定义函数类型，圆括号为参数列表，箭头后的是返回值类型
    // 参数列表的参数和返回值也能定义类型
    let fn = function (x, y) {
        return x + y;
    };
    // 当函数没有返回值时，就使用 void
    let fn2 = (msg) => {
        console.log(msg);
    };
    // 配合联合类型定义函数
    function fn3(param) {
        if (typeof param === 'string')
            console.log('参数是字符串');
        else if (typeof param === 'boolean')
            console.log('参数是布尔值');
    }
    // 返回可选值
    // 返回值只能在给定结果中取值
    function fn4() {
        return 'male';
    }
    // 可以有选填参数
    function fn5(msg, isShow) {
        console.log('msg:', msg);
        if (typeof isShow === 'boolean')
            console.log('isShow: ', isShow);
    }
    fn5('msg', true);
    // 任意函数类型可以使用 Function
    let fn6 = () => {
    };
    console.log(__filename.split('/'));
    let stu1 = { name: 'zhangsan', score: 0 };
    let stu2 = { name: '李四', score: 100, clazz: '一班' };
    function logStudent(stu) {
    }
    logStudent(stu1);
    logStudent(stu2);
});
//# sourceMappingURL=%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89.js.map
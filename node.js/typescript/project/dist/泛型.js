// 知识点
// 参考: https://www.typescriptlang.org/docs/handbook/2/generics.html
// 什么是泛型
// 应用场景
// 声明带泛型的类型
// 各种集合的泛型
//      泛型数组
//      泛型map
//      泛型set
//      readonly 数组 map set
// 泛型函数
// 泛型约束
//      extends
//      extends keyof
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 声明一个 Container 类型实例
    let container = {
        list: ['1', '2', '3'],
        fn(t) {
            console.log(t.length);
        }
    };
    // 调用函数时，参数必须是指定的泛型类型
    container.fn('123');
    // 泛型数组
    let arr = new Array();
    arr.push('a', 'b', 'c');
    // 泛型map
    let map = new Map([
        ['a', { name: 'zhangsan' }],
        ['b', { sex: 'male' }]
    ]);
    // 泛型set
    let set = new Set(['1', '2', '1', '3', '3', '4', '5', '5']);
    // readonly 数组 map set
    let roArr = ['a', 'b', 'c'];
    let roMap = new Map([
        ['x', '1'],
        ['y', '2'],
        ['z', '3'],
    ]);
    let roSet = new Set(['x', 'y', 'z']);
    // ReadonlyArray 的简写如下:
    let sroArr = ['a', 'b', 'c'];
    // 泛型函数
    // 给函数指定泛型，可以让参数或返回值的类型是泛型类型
    function fn(p, n) {
        return n;
    }
    fn('hello', false);
    // 泛型函数调用时可以不指定泛型
    fn(true, 123);
    // 泛型约束
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class Vector2D extends Point {
        constructor(x, y, len) {
            super(x, y);
            this.length = len;
        }
    }
    // 泛型 P 通过 extends 被添加了一个约束
    // 现在的 P 不代表任何类型 而仅代表 Point 类型的子类
    function showPoint(point) {
        console.log(`x: ${point.x}; y: ${point.y}`);
    }
    // 由于ts是进行结构化类型检测，所以即使不声明类名Vector2D，只要结构符合条件也可以通过类型检测
    let v = new Vector2D(3, 4, 5);
    showPoint(v);
    showPoint({ x: 3, y: 7, name: 'sdf' });
    // 泛型约束配合keyof使用
    // 用于指定一个变量值是另一个对象的key
    // 参考: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
    function logObjAttr(key, obj) {
        console.log(obj[key]);
    }
    logObjAttr('name', { name: '张三' });
});
//# sourceMappingURL=%E6%B3%9B%E5%9E%8B.js.map
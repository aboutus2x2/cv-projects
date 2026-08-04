// 知识点
// 什么是函数的签名
// 定义函数类型
// 构造函数
// 泛型函数 -> 详见《泛型》
// 可选参数
// 函数重载
// 定义 rest parameters
var myFn = function (m) {
    console.log(m);
};
// 若类型为 Function 则代表任意签名的函数
var fn = function (a, b) {
    return a + b;
};
function f(prefix, msg) {
    return prefix + msg;
}
f.fnName = '张三';
var fn2 = f;
// 构造函数
// 使用 new() 来定义一个构造函数
// class类的构造函数若满足该定义 则将通过类型检测
var Card = /** @class */ (function () {
    function Card(face, point) {
        this.face = face;
        this.point = point;
    }
    return Card;
}());
function createInstance(mc) {
    return new mc('face', 0);
}
createInstance(Card);
// 可选参数
function pickableParams(msg) {
    console.log(msg ? msg : 'default');
}
function getTime(timeOrYear, month, day) {
    if (typeof month === 'number' && typeof day === 'number') {
        return new Date(timeOrYear, month, day).getTime();
    }
    else {
        return new Date(timeOrYear);
    }
}
// 定义 rest parameters
// c 是一个 rest parameters 可以传入任意个数的参数
function restParams(x, y) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
}
restParams(1, 2, 'hello', 'string', 123, true);
//# sourceMappingURL=%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0.js.map
// 知识点
// 什么是装饰器(decorator)
// 应用场景
// 使用范围
// 配置tsconfig开启装饰器功能
// 类装饰器
// 方法装饰器
// 访问器装饰器
// 属性装饰器
// 参数装饰器
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 什么是装饰器
// 在编程过程中使用 @ at 符号，为类或类属性添加注解，用来在运行代码时，执行某些行为或赋值某些属性等
// 应用场景
// 对构造函数、属性、方法、访问器、或方法参数的预处理
// 使用范围
// 并非所有地方都能使用 decorator，只能在 类声明、方法、访问器、属性或参数 上使用
// 配置tsconfig开启装饰器功能
// 需要在编译选项中添加 "experimentalDecorators": true
// 类装饰
// 装饰器本质上就是函数
// 类装饰函数的书写方式有两种
var BugReport = /** @class */ (function () {
    function BugReport(t) {
        this.type = "report";
        this.title = t;
    }
    BugReport = __decorate([
        classDecorator('this is type')
    ], BugReport);
    return BugReport;
}());
// 方法一: 装饰器 @decorator 后面不带参数的时候
// 类装饰器的第一个参数默认为类构造函数
// function classDecorator<T extends { new(...args: any[]): object }>(cons: T) {
//     // 需要返回一个构造函数
//     return class extends cons {
//         type: string
//
//         constructor(...arg: any[]) {
//             super(arg[0]);
//             this.type = 'rereport'
//         }
//     }
// }
//
// console.log(new BugReport('title'))
// 方法二: 装饰器 @decorator(value) 后面带参数的时候
// 带参数的时候声明方法时，实际是个装饰器工厂函数
// 返回一个装饰器函数
function classDecorator(type) {
    return function (cons) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = type;
                return _this;
            }
            return class_1;
        }(cons));
    };
}
console.log(new BugReport('this is title'));
// 方法装饰器
var FunctionDecoratorClass = /** @class */ (function () {
    function FunctionDecoratorClass() {
    }
    FunctionDecoratorClass.prototype.fn = function (a, b) {
        return a + b;
    };
    __decorate([
        functionDecorator
    ], FunctionDecoratorClass.prototype, "fn", null);
    return FunctionDecoratorClass;
}());
// 第一个参数: 实例对象的原型
// 第二个参数: 方法名
// 第三个参数: 方法的属性描述
function functionDecorator(type, fnName, descriptor) {
    console.log(type);
    console.log(fnName);
    console.log(descriptor);
}
// console.log(new FunctionDecoratorClass().fn(1, 2))
// 访问器装饰器
// 访问器装饰器返回的参数和方法装饰器相同
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        xDecorator
    ], Point.prototype, "x", null);
    return Point;
}());
function xDecorator(type, fnName, descriptor) {
    console.log(type);
    console.log(fnName);
    console.log(descriptor);
}
new Point(1, 2).x;
// 属性装饰器
// 参数和方法装饰器相同 不过没有第三个参数
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    __decorate([
        greetingDecorator
    ], Greeter.prototype, "greeting", void 0);
    return Greeter;
}());
function greetingDecorator(type, propName) {
    console.log(type);
    console.log(propName);
}
new Greeter('greeting human');
// 参数修饰符
var Com = /** @class */ (function () {
    function Com() {
    }
    Com.prototype.add = function (x, y) {
        console.log('add be called');
        console.log(this);
        return x + y;
    };
    __decorate([
        __param(0, paramDecorator),
        __param(1, paramDecorator)
    ], Com.prototype, "add", null);
    return Com;
}());
// 参数装饰器函数中的参数
// 第一个参数: 实例对象的原型
// 第二个参数: 方法名
// 第三个参数: 添加该装饰器的参数索引
function paramDecorator(type, fnName, index) {
    console.log(type);
    console.log(fnName);
    console.log(index);
}
new Com().add(2, 5);
//# sourceMappingURL=%E8%A3%85%E9%A5%B0%E5%99%A8.js.map
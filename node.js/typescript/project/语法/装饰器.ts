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

@classDecorator('this is type')
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

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
function classDecorator(type: string) {
    return function <T extends { new(...arg: any[]): object }>(cons: T) {
        return class extends cons {
            type = type
        }
    }
}

console.log(new BugReport('this is title'))


// 方法装饰器

class FunctionDecoratorClass {
    @functionDecorator
    fn(a: number, b: number): number {
        return a + b
    }
}

// 第一个参数: 实例对象的原型
// 第二个参数: 方法名
// 第三个参数: 方法的属性描述
function functionDecorator(type: any, fnName: string, descriptor: PropertyDescriptor) {
    console.log(type)
    console.log(fnName)
    console.log(descriptor)
}

// console.log(new FunctionDecoratorClass().fn(1, 2))


// 访问器装饰器
// 访问器装饰器返回的参数和方法装饰器相同
class Point {
    private _x: number
    private _y: number

    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    @xDecorator
    get x() {
        return this._x
    }

    set x(value) {
        this._x = value
    }
}

function xDecorator(type: object, fnName: string, descriptor: PropertyDescriptor) {
    console.log(type)
    console.log(fnName)
    console.log(descriptor)
}

new Point(1, 2).x


// 属性装饰器
// 参数和方法装饰器相同 不过没有第三个参数
class Greeter {
    @greetingDecorator
    greeting: string

    constructor(greeting: string) {
        this.greeting = greeting
    }
}

function greetingDecorator(type: object, propName: string) {
    console.log(type)
    console.log(propName)
}

new Greeter('greeting human')


// 参数修饰符
class Com {
    add(@paramDecorator x: number | undefined | null, @paramDecorator y: number | undefined | null): number {
        console.log('add be called');
        console.log(this);
        return x + y
    }
}

// 参数装饰器函数中的参数
// 第一个参数: 实例对象的原型
// 第二个参数: 方法名
// 第三个参数: 添加该装饰器的参数索引
function paramDecorator(type: object, fnName: string, index: number) {
    console.log(type)
    console.log(fnName)
    console.log(index)
}

new Com().add(2, 5)
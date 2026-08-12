// 知识点
// 什么是接口
// 应用场景
// 声明接口
// 实现接口
// interface 和 type 的区别


// 什么是接口 interface
// 接口是一个对象结构的描述
// 假如有一个接口 I，有一个对象 obj；obj 的对象结构满足接口 I 的描述，则我们称 obj 实现了接口 I


// 应用场景
// 接口主要用于 面向抽象编程 面响接口编程


// 声明接口
// 在 C# 中接口的命名规范是以大写的 I 开头，可以提高代码的可读性，容易识别接口
// 接口的设计通常用来描述某种能力、功能
interface IClickable {
    // 接口内容的声明法方类似于声明类属性
    clickHandler: (event: any, params: any) => void

    // 注意: 接口在定义的时候不能去实现他
}

interface IMessage {
    showMessage: (msg: string) => string
}

// 实现接口
// 实现的意思: 将抽象的接口变为现实
// 接口是抽象的，不实现的话没办法使用
// 1. class 类 实现接口
// 使用 implements 实现接口 接口可以实现多个，多个接口间用逗号隔开
class ClickableBox implements IClickable, IMessage {
    age: number
    clickHandler(event: any, params: any): void {
        console.log('event')
        console.log(event)
        console.log(params)
    }

    showMessage(msg: string): string {
        console.log(msg)
        return msg;
    }

    // class 类中必须包含对应接口的实现
}

const clickableBox = new ClickableBox()
clickableBox.clickHandler({name: '这是事件对象'}, 123)
clickableBox.showMessage('hello world')

// 2. 对象实现接口
// 只要对象满足接口描述，则对象自动实现接口
const cMessage: IMessage = {
    showMessage(msg: string) {
        console.log('cMessage', msg)
        return msg
    }
}

const mMessage = {
    showMessage(msg: string) {
        console.log('mMessage', msg)
        return msg
    }
}

function callShowMessage(m: IMessage) {
    m.showMessage('hello callShowMessage')
}

callShowMessage(cMessage)
// 由于 mMessage 的结构满足 IMessage 接口
// 所以 mMessage 可以作为 IMessage 的实现使用
callShowMessage(mMessage)

// interface 和 type 的区别
// type 和 interface 是两种定义类型的手段 大多情况下两者是可以互换的 但interface具有更方便的扩展性

// 例如以下例子，定义一个汽车类型

// 使用 type 定义
type TCar = { name: string }
// 使用 & and 符号 扩展 TCar 的属性
// 参考: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
type TCar2 = TCar & { price: number }

// 定义变量来检测
let car: TCar = {name: '小轿车'}
let car2: TCar2 = {name: '客车', price: 1111}

// 使用 interface 定义一个汽车接口
interface ICar {
    name: string
}

// 使用 extends 进行扩展 继承ICar接口
interface ICar2 extends ICar {
    price: number
}

// 也能通过重复定义接口来给已有的接口追加新属性
interface ICar {
    wheelCount: number
}

// 验证接口
let iCar: ICar = {name: '小轿车', wheelCount: 4}
let iCar2: ICar2 = {name: '客车', wheelCount: 4, price: 1111}


// 还有一中情况使用 interface 而不是 type
// 需要约束class类必须实现哪些内容，使用 interface 来进行约束
// 而 type 单纯是定义类型时的别名
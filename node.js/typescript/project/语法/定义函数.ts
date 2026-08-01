// 知识点
// 什么是函数的签名
// 定义函数类型
// 构造函数
// 泛型函数 -> 详见《泛型》
// 可选参数
// 函数重载
// 定义 rest parameters


// 什么是函数的签名
// 函数的参数列表 + 返回值叫函数签名
// 签名: 这个概念源自于java，ts具备类型定义的能力，所以也有签名


// 定义函数类型
// 包含参数列表和返回值的定义
// 定义函数类型其实就是定义函数的签名部分的类型

type MyFn = (m: string) => void
let myFn: MyFn = (m: string) => {
    console.log(m)
}


// 若类型为 Function 则代表任意签名的函数
let fn: Function = (a: number, b: number) => {
    return a + b
}


// 调用签名
// 函数的本质是对象，所以可以用定义对象类型的方式定义函数，但是要加上一个调用签名，例如
type MyFn2 = {
    fnName: string,
    // 以下为调用签名
    (prefix: string, msg: string): string
}

function f(prefix: string, msg: string): string {
    return prefix + msg
}

f.fnName = '张三'

let fn2: MyFn2 = f


// 构造函数
// 使用 new() 来定义一个构造函数
// class类的构造函数若满足该定义 则将通过类型检测
class Card {
    face: string
    point: number

    constructor(face: string, point: number) {
        this.face = face
        this.point = point
    }
}

type MyCons = { new(face: string, point: number) }

function createInstance(mc: MyCons) {
    return new mc('face', 0)
}

createInstance(Card)


// 可选参数
function pickableParams(msg?: string) {
    console.log(msg ? msg : 'default');
}

// 可选参数应该放在其他参数的后面
// 例如以下函数就是错误的
// function pickableParams(a?: string, b: boolean){
//     console.log(a);
//     console.log(b);
// }


// 函数重载 (override)
// 函数名相同，参数列表和返回值不同的函数称为函数的重载
// 参数列表 + 返回值 称为签名
// 所以函数重载就是函数名相同，但签名不同的函数
function getTime(timestamps: number): Date
function getTime(year: number, month: number, day: number): number
function getTime(timeOrYear: number, month?: number, day?: number): Date | number {
    if (typeof month === 'number' && typeof day === 'number') {
        return new Date(timeOrYear, month, day).getTime()
    } else {
        return new Date(timeOrYear)
    }
}


// 定义 rest parameters
// c 是一个 rest parameters 可以传入任意个数的参数
function restParams(x: number, y: number, ...rest: any[]) {
}

restParams(1, 2, 'hello', 'string', 123, true)
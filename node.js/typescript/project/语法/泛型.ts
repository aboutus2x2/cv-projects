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


// 什么是泛型
// 定义类型时，将另一个类型作为参数，则该参数类型是泛型

// 应用场景
// 类型定义时，某些可变的类型可以声明成泛型
// 最常用的泛型应用就是数据集合的泛型

// 声明带泛型的类型

type Container<T> = {
    list: T[],
    fn(t: T): void
}


// 声明一个 Container 类型实例
let container: Container<string> = {
    list: ['1', '2', '3'],
    fn(t: string) {
        console.log(t.length)
    }
}


// 调用函数时，参数必须是指定的泛型类型
container.fn('123')

// 泛型数组
let arr = new Array<string>()
arr.push('a', 'b', 'c')

// 泛型map
let map = new Map<string, { [key: string]: any }>([
    ['a', {name: 'zhangsan'}],
    ['b', {sex: 'male'}]
])


// 泛型set
let set = new Set<string>(['1', '2', '1', '3', '3', '4', '5', '5'])


// readonly 数组 map set
let roArr: ReadonlyArray<string> = ['a', 'b', 'c']
let roMap: ReadonlyMap<string, string> = new Map([
    ['x', '1'],
    ['y', '2'],
    ['z', '3'],
])
let roSet: ReadonlySet<string> = new Set(['x', 'y', 'z'])
// ReadonlyArray 的简写如下:
let sroArr: readonly string[] = ['a', 'b', 'c']


// 泛型函数
// 给函数指定泛型，可以让参数或返回值的类型是泛型类型
function fn<T, N>(p: T, n: N): N {
    return n
}

fn<string, boolean>('hello', false)


// 泛型函数调用时可以不指定泛型
fn(true, 123)


// 泛型约束
class Point {
    x: number
    y: number

    constructor(x, y) {
        this.x = x
        this.y = y
    }
}


class Vector2D extends Point {
    length: number

    constructor(x, y, len) {
        super(x, y)
        this.length = len
    }
}

// 泛型 P 通过 extends 被添加了一个约束
// 现在的 P 不代表任何类型 而仅代表 Point 类型的子类

function showPoint<P extends Point>(point: P) {
    console.log(`x: ${point.x}; y: ${point.y}`)
}


// 由于ts是进行结构化类型检测，所以即使不声明类名Vector2D，只要结构符合条件也可以通过类型检测
let v: Vector2D = new Vector2D(3, 4, 5)
showPoint(v)
showPoint({x: 3, y: 7, name: 'sdf'})

// 泛型约束配合keyof使用
// 用于指定一个变量值是另一个对象的key
// 参考: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

function logObjAttr<K extends keyof O, O extends { [key: string]: any }>(key: K, obj: O) {
    console.log(obj[key])
}

logObjAttr('name', {name: '张三'})

export {}
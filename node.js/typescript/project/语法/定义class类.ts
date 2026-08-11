// 知识点
// 声明属性
// 声明行为
// 访问修饰符
// readonly 修饰符
// static 修饰符
// abstract 抽象类和属性 参考: https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members


// 声明属性
class Duck {
    color: string

    constructor(color: string) {
        this.color = color
    }
}

const duck = new Duck('#f00')
console.log(duck)

// 声明行为
class Car {
    run(speed: number): void {
        console.log('车在跑，速度是: ', speed)
    }
}

new Car().run(120)


// 访问修饰符
// 访问修饰符 只有 class类中的属性和行为可以添加，甚至是构造函数
// 访问修饰符 的作用是用来规定属性或行为的访问级别，哪些地方可以访问，那些地方不能

// 访问修饰符有3中  public private protected


class Human {
    // public 公开的
    // 带有 public 修饰符的属性或行为可以在任何地方访问
    public name: string

    // protected 受保护的
    // 带有 protected 修饰符的属性或行为可以在当前class类及其子类中访问
    protected sex: string

    // private 私有的
    // 带有 private 修饰符的属性或行为只能在当前class类的实例对象中访问
    private init(): void {
        console.log('这是初始化方法')
    }


    // 构造函数也可以添加访问修饰符
    public constructor(name: string, sex: string) {
        this.name = name
        this.sex = sex
    }

    public say(msg: string) {
        this.init()
        console.log(this.name, msg)
    }
}


let h = new Human('李四', 'female')
// public 的属性可以在任何位置访问
console.log(h.name)
h.say('hello')


class ChinesePeople extends Human {
    public checkSex(): string {
        return this.sex
    }
}

const cp = new ChinesePeople('老大', 'male')
console.log(cp.checkSex())


// readonly 只读修饰符
class Computer {
    readonly cpu: string

    constructor(cpu: string) {
        this.cpu = cpu
    }
}

const computer = new Computer('intel x86')
console.log(computer.cpu)
// computer.cpu = 'amd'

// static 静态修饰符
class Bot {
    // 静态属性或行为用于描述整个类型
    private static provider: string = '光圈科技'

    public static showProvider(): void {
        // 通过类名访问静态方法或属性
        console.log(Bot.provider)
    }
}

Bot.showProvider()


// 利用修饰符 实现 单件模式(单例模式)
class World {
    private static _ins: World

    public name = '世界'

    private constructor() {
        World._ins = this
    }

    public static getInstance() {
        return World._ins ? World._ins : new World()
    }
}

console.log(World.getInstance())
console.log(World.getInstance())


// 抽象类
// 抽象类只能用来做父类 不能直接实例化 因为他是抽象的不是具体的
abstract class Ship {
    // 抽象方法
    // 抽象方法没有具体实现，它的实现由子类完成
    abstract run(): void

    // 抽象属性
    abstract name: string
}

class FastShip extends Ship {
    // 子类需要全部实现抽象类的抽象方法
    run(): void {
        console.log('run')
    }

    name: string
}

console.log(new FastShip())
// 知识点
// 声明属性
// 声明行为
// 访问修饰符
// readonly 修饰符
// static 修饰符
// abstract 抽象类和属性 参考: https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members
// 声明属性
class Duck {
    constructor(color) {
        this.color = color;
    }
}
const duck = new Duck('#f00');
console.log(duck);
// 声明行为
class Car {
    run(speed) {
        console.log('车在跑，速度是: ', speed);
    }
}
new Car().run(120);
// 访问修饰符
// 访问修饰符 只有 class类中的属性和行为可以添加，甚至是构造函数
// 访问修饰符 的作用是用来规定属性或行为的访问级别，哪些地方可以访问，那些地方不能
// 访问修饰符有3中  public private protected
class Human {
    // private 私有的
    // 带有 private 修饰符的属性或行为只能在当前class类的实例对象中访问
    init() {
        console.log('这是初始化方法');
    }
    // 构造函数也可以添加访问修饰符
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    say(msg) {
        this.init();
        console.log(this.name, msg);
    }
}
let h = new Human('李四', 'female');
// public 的属性可以在任何位置访问
console.log(h.name);
h.say('hello');
class ChinesePeople extends Human {
    checkSex() {
        return this.sex;
    }
}
const cp = new ChinesePeople('老大', 'male');
console.log(cp.checkSex());
// readonly 只读修饰符
class Computer {
    constructor(cpu) {
        this.cpu = cpu;
    }
}
const computer = new Computer('intel x86');
console.log(computer.cpu);
// computer.cpu = 'amd'
// static 静态修饰符
class Bot {
    static showProvider() {
        // 通过类名访问静态方法或属性
        console.log(Bot.provider);
    }
}
// 静态属性或行为用于描述整个类型
Bot.provider = '光圈科技';
Bot.showProvider();
// 利用修饰符 实现 单件模式(单例模式)
class World {
    constructor() {
        this.name = '世界';
        World._ins = this;
    }
    static getInstance() {
        return World._ins ? World._ins : new World();
    }
}
console.log(World.getInstance());
console.log(World.getInstance());
//# sourceMappingURL=%E5%AE%9A%E4%B9%89class%E7%B1%BB.js.map
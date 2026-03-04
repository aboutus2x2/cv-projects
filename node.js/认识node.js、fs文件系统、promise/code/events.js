const events = require('events');

// 创建一个事件发射器
const eventEmitter = new events.EventEmitter();

class A {
    constructor() {
        // 监听 eventEmitter 的事件
        eventEmitter.on('sayHello', (a, b, c, d, e, f, g) => {
            console.log('接收到 sayHello 事件')
            console.log(a, b, c, d, e, f, g)
        })
    }
}

class B {
    sendSayHelloEvent() {
        // 发送 sayHello 事件
        eventEmitter.emit('sayHello', 1, 2, 3, 4, 'z', 'b', 'c')
    }
}

const a = new A();
const b = new B();
b.sendSayHelloEvent()
// 知识点
// 什么是接口
// 应用场景
// 声明接口
// 实现接口
// interface 和 type 的区别
// 实现接口
// 实现的意思: 将抽象的接口变为现实
// 接口是抽象的，不实现的话没办法使用
// 1. class 类 实现接口
// 使用 implements 实现接口 接口可以实现多个，多个接口间用逗号隔开
class ClickableBox {
    clickHandler(event, params) {
        console.log('event');
        console.log(event);
        console.log(params);
    }
    showMessage(msg) {
        console.log(msg);
        return msg;
    }
}
const clickableBox = new ClickableBox();
clickableBox.clickHandler({ name: '这是事件对象' }, 123);
clickableBox.showMessage('hello world');
// 2. 对象实现接口
// 只要对象满足接口描述，则对象自动实现接口
const cMessage = {
    showMessage(msg) {
        console.log('cMessage', msg);
        return msg;
    }
};
const mMessage = {
    showMessage(msg) {
        console.log('mMessage', msg);
        return msg;
    }
};
function callShowMessage(m) {
    m.showMessage('hello callShowMessage');
}
callShowMessage(cMessage);
// 由于 mMessage 的结构满足 IMessage 接口
// 所以 mMessage 可以作为 IMessage 的实现使用
callShowMessage(mMessage);
// 定义变量来检测
let car = { name: '小轿车' };
let car2 = { name: '客车', price: 1111 };
// 验证接口
let iCar = { name: '小轿车', wheelCount: 4 };
let iCar2 = { name: '客车', wheelCount: 4, price: 1111 };
// 还有一中情况使用 interface 而不是 type
// 需要约束class类必须实现哪些内容，使用 interface 来进行约束
// 而 type 单纯是定义类型时的别名
//# sourceMappingURL=%E6%8E%A5%E5%8F%A3.js.map
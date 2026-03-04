const assert = require('assert');

let sex = 'male'

let stu1 = {
    name: '张三',
    sex: 'male',
    age: 17,
    info: {
        balance: 666
    }
}

let stu2 = {
    name: '张三',
    sex: 'male',
    age: 17,
    info: {
        balance: 250
    }
}

// 断言
// 当断言的内容为真时，什么都不会发生
// 当断言失败时，会抛出一个 AssertionError 的异常并显示第二个参数的消息
// assert(sex === 'female', '性别不是女的')

// 断言多用于检测参数
// 例如除法中除数不能为0
function div(a, b) {
    // 此处的断言就是拿来验证参数的
    assert(b !== 0, '除数不能等于零')
    // 断言通过就正常的执行逻辑
    return a / b
}

console.log(div(1, 2))
// console.log(div(1, 0))
console.log(stu1 === stu2)
// 深度相等
// assert.deepStrictEqual(stu1, stu2, '对象不相等')
// 正则判断
// assert.match('bcd', /^ab/, '正则表达式不匹配')
// ok 相当于直接调用 assert()
assert.ok(sex === 'male', '性别不对')
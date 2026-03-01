// 创建一个计时任务
setTimeout(() => {
    console.log('hello setTimeout');
}, 200)

let count = 0
while (true) {
    // 死循环计数
    console.log(++count)
}

// 由于js代码一直阻塞在9行代码处，所以 setTimeout 内的内容无法被执行
// 因为: js 的单线程被死循环卡死了
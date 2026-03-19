// 创建一个长度为 50 的 promise 数组
// 请使用链式调用让数组中的 promise ** 依序 ** 执行 then 方法

let promiseList = []

for (let i = 0; i < 50; i++) {
    promiseList.push(Promise.resolve(i))
}

// 方法1:
let promise = promiseList[0]
for (let i = 1; i < promiseList.length; i++) {
    // 保存promise.then 调用后的返回值
    // 下一次循环时，就可以继续进行链式调用
    promise = promise.then(() => promiseList[i])
}
promise.then(() => {
    console.log('over');
})

// 方法2:

// let arr = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//     Promise.resolve(4),
//     Promise.resolve(5),
// ]

// reduce 的第二个参数，是给数组的头部插入的一个数组成员
promiseList.reduce((p, n) => p.then(() => n), Promise.resolve())
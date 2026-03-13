// 什么是异步函数
// 异步函数本质上就是一个返回promise对象的函数

// 声明异步函数
// 使用 async 关键字
async function add(a, b) {
    // 异步函数中 return 的内容
    // 本质上就是 resolve 函数的参数
    return a + b
}

// 上述函数等价于:
function _add(a, b) {
    return new Promise(resolve => {
        resolve(a + b)
    })
}

// 调用异步函数
// 情况一: 直接调用

add(1, 2).then(data => {
    console.log(data)
});

// 情况二: 在另一个异步函数中调用，配合 await 关键字进行假同步调用

(async () => {
    // await 关键字只能在 async 声明的函数中使用
    // 直接使用 await 关键字调用异步函数
    // 这样的话就不需要调用 promise 的 then 方法了
    // 此处的返回值result就是异步函数add的返回值
    let result = await add(3, 4)
    console.log(result)
    result = await _add(5, 9)
    console.log(result)
    // 用 await 调用的异步函数，可以当作是同步调用
    // 此处: 也就是说 add 方法没有返回值之前 不会调用 _add
})()
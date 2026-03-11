// 什么是链式调用？
// 不停通过点运算符调用方法的过程叫链式调用 通常链式调用的方法返回的是对象本身
// 例如 jquery 的链式调用: $('div').css('background-color', '#f00').css('color', '#000')

// promise 的链式调用
// 例如: 程序运行1s后打印a；然后再过2s后打印b；然后再过3s后打印c

new Promise(resolve => {
    setTimeout(() => {
        console.log('a')
        resolve()
    }, 1000)
})
    // promise 链式调用是连续调用 then 方法
    .then(() => {
        // 为了形成promise的链式调用 then 的回调函数中需要返回一个promise对象
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('b')
                resolve()
                // reject('老子干得不爽')
            }, 2000)
        })
    })
    .then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('c')
                resolve()
            }, 3000)
        })
    })
    .then(() => {
        console.log('over')
    })
    // catch 和 finally 应该放在链式调用的最后面
    .catch(reason => {
        // 在链式调用的任一过程若报错或执行了reject
        // 此处catch都能捕获到

        console.log('catch')
        console.error(reason)
    })
    .finally(() => {
        console.log('无论如何都会执行finally')
    })
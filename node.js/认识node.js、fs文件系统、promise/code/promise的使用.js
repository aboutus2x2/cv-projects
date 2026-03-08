// 简介
// promise中文意思是承诺，承诺一定在做完promise自己的事后，然后再做后面的事情。
// 作用
// promise工具让异步调用看上去像同步一样，减少开发者在异步开发时的负担，少出异步错误。

// 例如: 程序运行1s后打印a；然后再过2s后打印b；然后再过3s后打印c

// setTimeout(() => {
//     console.log('a')
//
//     // 然后又计时2s
//     setTimeout(() => {
//         console.log('b')
//
//         // 然后再计时3秒
//         setTimeout(() => {
//             console.log('c')
//         }, 3000)
//     }, 2000)
// }, 1000)

// 如不想使用嵌套应该使用 promise

// Promise 的基本语法
const promise = new Promise((resolve, reject) => {
    // 此回调函数就是promise承诺要完成的事情
    // resolve: 当promise对象正确的处理完自己的事情时，一定要调用 resolve()
    // reject: 本意是驳回，在此处代表promise承诺的事情，我不干了
    // resolve 和 reject 在 promise内部 必须从中选择一个进行调用，不要同时调用
    setTimeout(() => {
        console.log('a')
        // 完成promise承诺的事情后
        // 调用 resolve
        resolve('resolve的参数')
        // 此处调用reject 代表promise 不干了
        // reject 的参数就是 不干了的理由
        // 通常来说这个参数是个异常对象
        // reject('工资太少了')
        // reject(new Error('工资太少了'))
    }, 1000)
});


// promise
//     // then: 代表然后，当promise内部执行resolve的时候就会执行 then 中的回调函数
//     // then 的回调函数中可以获取到 resolve 的参数
//     .then((data) => {
//         console.log(data)
//         console.log('promise完成了，然后我做了个加法运算')
//         console.log(1 + 1)
//     })
//     // catch: 代表捕获异常，当promise内发生异常，或promise调用了reject，就会执行catch中的回调函数
//     .catch(reason => {
//         // reason: 代表理由，reason可能是promise内的一个异常对象，也可能是调用reject，promise不干了之后的理由
//         console.error(reason)
//     })
//     // finally: 代表不管promise的承诺是否兑现，都会执行finally中的代码
//     .finally(() => {
//         console.log('最终一定会调用这句话')
//     })


promise.then(() => {
    new Promise(resolve => {
        setTimeout(() => {
            console.log('b')
            resolve()
        }, 2000)
    }).then(() => {
        new Promise(resolve => {
            setTimeout(() => {
                console.log('c')
                resolve()
            }, 3000)
        }).then(() => {
            console.log('over')
        })
    })
})

// 创建一个能够被resolve的promise对象
// let promise = Promise.resolve(123)
// promise.then(data => {
//     console.log('resolve')
//     console.log(data)
// })

// 创建一个能够被reject的promise对象
// let promise = Promise.reject('累死了')
// promise.catch(reason => {
//     console.log('reject')
//     console.error(reason)
// })

// 所有的promise都执行了resolve后，就会执行all的then方法
// 参数是 promise 数组
// let promise = Promise.all([
//     new Promise(resolve => {
//         setTimeout(() => {
//             console.log('a')
//             resolve()
//         }, 3000)
//     }),
//     new Promise(resolve => {
//         setTimeout(() => {
//             console.log('b')
//             resolve()
//         }, 1000)
//     }),
//     new Promise(resolve => {
//         setTimeout(() => {
//             console.log('c')
//             resolve()
//         }, 2000)
//     })
// ])
//
// promise.then(()=>{
//     console.log('所有的promise都执行完成了')
// })


// 多个promise进行竞赛，第一个promise调用了resolve后，race所返回的promise就会调用then后的内容
let promise = Promise.race([
    new Promise(resolve => {
        setTimeout(() => {
            console.log('a')
            resolve()
        }, 3000)
    }),
    new Promise(resolve => {
        setTimeout(() => {
            console.log('b')
            resolve()
        }, 1000)
    }),
    new Promise(resolve => {
        setTimeout(() => {
            console.log('c')
            resolve()
        }, 2000)
    })
])

promise.then(() => {
    console.log('比赛结束')
})
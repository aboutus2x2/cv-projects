// 请在3秒之后打印a，然后再过2秒打印b，然后再过1秒打印c

function asyncLog(time, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve()
        }, time)
    })
}

asyncLog(3000, 'a')
    .then(() => asyncLog(2000, 'b'))
    .then(() => asyncLog(1000, 'c'))
    .then(() => { console.log('over'); })

// 请创建一个异步的类似 `console.log` 功能的函数 `say`
async function log(message) {
    console.log(message);
}

// 请通过 `say` 函数，依序输出三句话: `你好小明，我是小红` `你好小红，我是小明` `从此小红和小明过上了幸福快乐的生活`
(async () => {
    await log('你好小明，我是小红')
    await log('你好小红，我是小明')
    await log('从此小红和小明过上了幸福快乐的生活')
})()
// 创建读取输入的一个接口
const readline = require('readline').createInterface({
    // 指定输入流
    input: process.stdin,
    // 指定输出流
    output: process.stdout
})

// 调用提问方法
// 第一个参数: 问题
// 第二个参数: 回答后的回调函数
readline.question('请输入姓名: ', answer => {
    // answer: 控制台上用户输入的信息
    console.log('用户的姓名是: ', answer)
    // 回调函数中，一定要关闭readline
    readline.close()
})
const fs = require('fs');
const path = require('path');

// 读文件
// 第一个参数: 文件路径
// 第一个参数不能直接使用相对路径，应该使用 path 模块进行处理
// 总结: 和文件相关操作时 都要使用 path 模块来处理文件路径
// 第二个参数: 回调函数
// fs.readFile(path.join(__dirname, './x/y.txt'), (err, data) => {
//     // err: 异常对象，若读文件时没有异常则 err 为 null
//     // data: 读取出的数据 是一个 byte数组
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(data.toString())
//     }
// })


// 写文件
// fs.writeFile(path.join(__dirname, './test.txt'), 'this is test.txt', err => {
//     // err: 异常对象，若写文件时没有异常则 err 为 null
//     if (err) {
//         console.error(err)
//     } else {
//         console.log('写文件成功')
//     }
// })


// 同步读文件
// let data = fs.readFileSync(path.join(__dirname, './x/y.txt'))
// console.log(data.toString())
// 同步写文件
// fs.writeFileSync(path.join(__dirname, './test.txt'), 'this is test.txt')


// 读取文件状态
// 作用: 用于判断路径是否存在文件或文件夹; 判断路径下的是文件还是目录
// fs.stat(path.join(__dirname, 'x/y.txt'), (err, stat) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(stat)
//         console.log(stat.isFile()) // 是否是文件
//         console.log(stat.isDirectory()) // 是否是目录
//     }
// })
// fs.statSync()

// 读取目录
// fs.readdir(path.join(__dirname, 'x'), (err, files) => {
//     if(err) {
//         console.error(err)
//     } else {
//         // 目录下的路径数组
//         console.log(files)
//     }
// })


// 创建目录
// fs.mkdir(path.join(__dirname, 'f'), (err) => {
//     if (err) console.error(err)
//     else {
//         console.log('创建成功')
//     }
// })


// 删除目录
// 目录不为空是删不掉的
// fs.rmdir(path.join(__dirname, 'f'), err => {
//     if (err) console.error(err)
//     else console.log('删除成功')
// })


// 删除文件
// fs.unlink(path.join(__dirname, 'haha'), err => {
//     if (err) console.error(err)
//     else console.log('删除成功')
// })

// 查看路径是否存在
fs.access(path.join(__dirname, 'x'), err => {
    if (err) console.error(err)
    else console.log('路径存在')
})
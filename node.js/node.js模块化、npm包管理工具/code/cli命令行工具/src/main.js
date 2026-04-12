#!/usr/bin/env node

// 第一行的作用是设置脚本的运行环境为 node.js

console.log('hello world')
console.log(process.argv)
const args = process.argv.slice(2)
let a = 0
let b = 0
// 解析参数
for (let i = 0; i < args.length; i++) {
    const arg =  args[i]
    const splits = arg.split('=')
    if(splits[0] === 'a') a = Number(splits[1])
    else if(splits[0] === 'b') b = Number(splits[1])
}

console.log(a + b)
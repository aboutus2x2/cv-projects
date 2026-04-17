#!/usr/bin/env node
const assert = require('assert')
const fsp = require('fs/promises')
const path = require("path");

const args = process.argv.slice(2)
console.log(process.cwd()) // process.cwd 获取命令的工作目录
assert(args.length > 0, '请传入路径参数')
// 要检测删除的目录
const removeDirPath = args[0];

(async () => {
    await action(removeDirPath)
})()

const blackList = ['node_modules', '.vscode', '.idea']

async function action(p) {
    let stat = await fsp.stat(p);
    assert(stat.isDirectory(), '路径不是目录')
    const files = await fsp.readdir(p)
    for (const file of files) {
        const currentPath = path.join(p, file);
        stat = await fsp.stat(currentPath)
        if (stat.isDirectory()) {
            // 黑名单中的目录 删除
            if (blackList.includes(file)) {
                // 删除文件或文件夹
                await fsp.rm(currentPath, {force: true, recursive: true})
            } else {
                // 递归
                await action(currentPath);
            }
        }
    }
}

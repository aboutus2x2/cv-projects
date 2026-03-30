// 复制 src 文件夹 到 当前目录下的 copy 的文件夹中
const fsp = require('fs/promises')
const assert = require('assert')
const path = require('path')

// 复制目录
// srcPath: 源目录
// targetPath: 目标目录
async function copyDir(srcPath, targetPath) {
    // 判断路径 srcPath 是否存在
    let stat
    try {
        stat = await fsp.stat(srcPath)
    } catch (e) {
        throw new Error('源目录不存在')
    }
    assert(stat.isDirectory(), '源目录不是目录')

    // 判断目标目录是否存在
    try {
        stat = await fsp.stat(targetPath)
    } catch (e) {
        // 若目标目录不存在就创建目录
        fsp.mkdir(targetPath)
    }

    // 拷贝
    const files = await fsp.readdir(srcPath)
    console.log(files);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // 获取要读取文件的路径
        const srcFilePath = path.join(srcPath, file)
        const targetFilePath = path.join(targetPath, file)
        // 获取文件状态
        let s
        try {
            s = await fsp.stat(srcFilePath)
        } catch (error) {
            throw new Error(`文件 ${file} 不存在`)
        }
        if (s.isFile()) {
            // 如果是文件
            await fsp.copyFile(srcFilePath, targetFilePath)
        } else if (s.isDirectory()) {
            // 如果是目录
            // 递归自己拷贝子目录
            await copyDir(srcFilePath, targetFilePath)
        }
    }
}

// copyDir(path.join(__dirname, 'src'), path.join(__dirname, 'copy'))

// node.js 拷贝目录 api
// fsp.cp(path.join(__dirname, 'src'), path.join(__dirname, 'copy'), { recursive: true })


// 删除 copy 文件夹
async function removeDir(srcPath) {
    let stat
    try {
        stat = await fsp.stat(srcPath)
    } catch (error) {
        throw new Error('删除的文件夹不存在')
    }
    assert(stat.isDirectory(), '删除的路径不是一个目录')

    const files = await fsp.readdir(srcPath)
    console.log(files);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const removeFilePath = path.join(srcPath, file)
        let s
        try {
            s = await fsp.stat(removeFilePath)
        } catch (error) {
            throw new Error('删除子目录或文件不存在')
        }
        if (s.isFile()) {
            await fsp.unlink(removeFilePath)
        } else if (s.isDirectory()) {
            await removeDir(removeFilePath)
        }
    }

    // 所有的子目录或文件都被删除后
    // 删除当前目录
    await fsp.rmdir(srcPath)
}

removeDir(path.join(__dirname, 'copy'))
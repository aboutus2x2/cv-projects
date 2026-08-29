import {Router} from "express";
import {App} from "../helper/App.js";
import {BusinessResponse} from "../types/BusinessResponse.js";
import User from '../models/user.js'
import Token from "../models/token.js";
import assert from "assert";
import {checkSignIn} from "../middleware/checkSignIn";
import {clearCache} from "../middleware/getUserInfo";
import path from 'path'
import fsp from 'fs/promises'
import {v4 as uuid} from 'uuid';

const router = Router()
const app = new App(router)

// 注册
app.post('/signUp', async (req, res) => {
    // 验证参数
    const {account, pwd, nickname} = req.body
    assert(account, '请输入账号')
    assert(pwd, '请输入密码')
    assert(nickname, '请输入昵称')

    // 验证账号是否存在
    assert(await User.exists({account}) === null, '账号已存在')
    // 保存账号
    const r = await User.create({
        account, pwd, nickname
    })

    res.json(BusinessResponse.success({id: r._id}))
})

app.post('/signIn', async (req, res) => {
    const {account, pwd} = req.body
    assert(account, '请输入账号')
    assert(pwd, '请输入密码')

    assert(await User.exists({account}) !== null, '账号不存在')

    const user: any = await User.findOne({account})
    console.log(user)
    // 判断密码
    assert(pwd === user.pwd, '密码错误')

    // 登录成功
    // 颁发登录凭证
    const maxAge = 7 * 24 * 60 * 60 * 1000
    // const token = await Token.create({
    //     userId: user._id,
    //     expired: new Date(Date.now() + maxAge)
    // })
    const token = await Token.findOneAndUpdate(
        {userId: user._id},
        {expired: new Date(Date.now() + maxAge)},
        {new: true, upsert: true, setDefaultsOnInsert: true, timestamps: true}
    )

    // 通过 cookie 保存到客户端
    res.cookie('token', token._id, {maxAge, httpOnly: true})
    res.json(BusinessResponse.success({tokenId: token._id}))
})

// 引入检测登录状态的中间件
router.use(checkSignIn())

// 获取用户信息
app.post('/info', async (req, res) => {
    res.json(BusinessResponse.success({nickname: req.session.user.nickname, headIcon: req.session.user.headIcon}))
})

// 登出
app.post('/signOut', async (req, res) => {
    clearCache(req, res)
    res.json(BusinessResponse.success())
})

// 上传头像
app.post('/uploadHeadIcon', async (req, res) => {
    const file = req.files.headIcon
    const data = await fsp.readFile(file.tempFilePath)
    // 通过uuid获取一个随机id然后拼接文件后缀名
    const filename = uuid() + path.extname(file.name)
    await fsp.writeFile(path.join(__dirname, '../../upload', filename), data)
    // 删除临时文件
    await fsp.rm(file.tempFilePath, {force: true})

    // 查询用户并记录头像到用户上
    const url = `/upload/${filename}`
    await User.updateOne({_id: req.session.user._id}, {headIcon: url})
    res.json(BusinessResponse.success({url}))
})

export default router
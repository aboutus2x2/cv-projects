import {Router} from "express";
import {App} from "../helper/App.js";
import {BusinessResponse} from "../types/BusinessResponse.js";
import User from '../models/user.js'
import Token from "../models/token.js";
import assert from "assert";
import {checkSignIn} from "../middleware/checkSignIn";

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
    const token = await Token.create({
        userId: user._id,
        expired: new Date(Date.now() + maxAge)
    })

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

export default router
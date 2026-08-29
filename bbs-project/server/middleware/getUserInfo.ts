// 中间件工厂函数
import Token from "../models/token";
import User from "../models/user";
import expressAsyncHandler from "express-async-handler";

// 该中间件用于每次请求获取用户信息
// 若不存在 token 不需要在中间中抛错
export function getUserInfo() {
    return expressAsyncHandler(async function (req: any, res, next) {
        if (!req.cookies.token) {
            // 清缓存
            clearCache(req, res)
            next()
            return
        }
        // 通过token查找用户对象
        const token = await Token.findById(req.cookies.token)
        if (!token) {
            clearCache(req, res)
            next()
            return
        }
        // 判断是否过期
        if (token.expired.getTime() <= Date.now()) {
            clearCache(req, res)
            next()
            return
        }
        // 获取用户信息
        const user = await User.findById(token.userId)
        if (!user) {
            clearCache(req, res)
            next()
            return
        }

        // 通过 session 存储缓存
        req.session.user = user

        next()
    })
}

// 清缓存
export function clearCache(req, res) {
    // 清session缓存
    delete req.session.user
    // 清cookie缓存
    res.cookie('token', '', {maxAge: 0})
}
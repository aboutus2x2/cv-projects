import expressAsyncHandler from "express-async-handler";

// 检查是否登录
export function checkSignIn() {
    return expressAsyncHandler(async (req: any, res, next) => {
        if (!req.session.user) {
            // 若未登录直接重定向到登录页
            res.redirect('/signIn.html')
        } else next()
    })
}
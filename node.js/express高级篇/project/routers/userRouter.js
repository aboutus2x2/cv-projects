const express = require('express')
// 创建一个模块化的路由器对象
const router = new express.Router()

// 声明接口
// 将router当作app使用，创建接口
router.get('/signIn', (req, res) => {
    res.json({msg: '登录成功'})
})

router.get('/signOut', (req, res) => {
    res.json({msg: '登出成功'})
})

router.get('/signUp', (req, res) => {
    res.json({msg: '注册成功'})
})


// 导出
module.exports = router
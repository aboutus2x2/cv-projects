const express = require('express');
const cookieParser = require('cookie-parser')
const assert = require("assert");
const app = express();

// 余额
let balance = 0


app.use(cookieParser())


// 充值
app.get('/charge', (req, res) => {
    const {money} = req.query
    balance += Number(money)
    res.json({balance})
})

// 买衣服
app.get('/buyCloth', (req, res) => {
    // 判断是否存在优惠卷
    let yhj = req.cookies.thirty || req.cookies.twenty || null

    // 有优惠卷进行折扣计算商品价格
    let price = yhj ? 100 - Number(yhj) : 100

    // 判断余额是否大于等于商品价格
    assert(balance >= price, '余额不足')

    // 购买
    balance -= price

    // 判断是否使用了优惠卷，用了优惠卷就销毁，否则就发一张优惠卷
    if (yhj) {
        // 删除优惠卷
        res.cookie(yhj === '30' ? 'thirty' : 'twenty', '', {maxAge: 0})
    } else {
        res.cookie('twenty', '20', {maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true})
    }

    res.json({balance})
})

// 买玩具
app.get('/buyToy', (req, res) => {
    // 判断是否存在优惠卷
    let yhj = req.cookies.thirty || req.cookies.twenty || null

    // 有优惠卷进行折扣计算商品价格
    let price = yhj ? 200 - Number(yhj) : 200

    // 判断余额是否大于等于商品价格
    assert(balance >= price, '余额不足')

    // 购买
    balance -= price

    // 判断是否使用了优惠卷，用了优惠卷就销毁，否则就发一张优惠卷
    if (yhj) {
        // 删除优惠卷
        res.cookie(yhj === '30' ? 'thirty' : 'twenty', '', {maxAge: 0})
    } else {
        res.cookie('thirty', '30', {maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true})
    }

    res.json({balance})
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})

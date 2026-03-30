// 制作一个静态资源服务器
const http = require('http')
const qs = require('querystring')
const app = http.createServer()

app.on('request', (req, res) => {
    // 规定 访问 http://127.0.0.1/?p=2 这个url 就能进行游戏
    // 规定 石头 = 1 剪刀 = 2 布 = 3
    let r = req.url.match(/\?([\s\S]*)$/)
    if (r && r.length >= 2) {
        // 获取参数
        let param = r[1]
        // 将字符串参数转换成对象参数
        param = qs.decode(param)
        console.log(param);

        let p = Number(param.p)
        // 随机服务器出的拳
        //                 0~3000               % 3  0 1 3
        const rand = Math.floor(1 + (Math.random() * 3000) % 3)
        console.log(rand);

        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        // 胜负判断
        if (rand === p) {
            res.end('平局')
        } else if (p - rand === -1 || p - rand === 2) {
            res.end('赢')
        } else {
            res.end('输')
        }
    } else
        res.end('ok')
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`);
})
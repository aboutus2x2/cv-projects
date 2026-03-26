// 什么是路由?
// 动词: 路由是按照地址参数分发任务的一个动作，类似于快递递送过程
// 名词: 不同资源的地址，服务器通常通过不同的路由做不同的事情

const http = require('http');
const qs = require('querystring');
const app = http.createServer();


app.on('request', (req, res) => {
    // url 中 开头的 / 斜杠 相当于    /  ===  http://127.0.0.1/
    // url 就是访问的请求地址
    console.log(req.url)

    const r = req.url.match(/^([\s\S]*?)(\?[\s\S]*)?$/)
    console.log(r)

    if (r[1] === '/add') {
        // 获取参数
        // 获取查询字符串
        let queryString = r[2].substring(1)
        // 查询字符串解码
        let params = qs.decode(queryString)
        res.write('add: ' + (Number(params.a) + Number(params.b)))
    } else if (r[1] === '/sub') {
        let params = qs.decode(r[2].substring(1))
        res.write('sub: ' + (Number(params.a) - Number(params.b)))
    }

    res.end('ok')
})


// 80 端口是 http 协议的默认端口，若服务以 80 为端口，则可以直接使用 ip 来访问服务器
app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})
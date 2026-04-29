const express = require('express');
const path = require("path");
const app = express();
const port = 80

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/say', (req, res) => {
    res.json({msg: 'hello'})
})

app.get('/add', (req, res) => {
    // get 请求的参数可以直接通过 req.query 获取
    // res.json(req.query)
    res.json({result: Number(req.query.a) + Number(req.query.b)})
})

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
})
import express from 'express'
import {App} from "./helper/App.js";
import assert from "assert";

const _app = express()
const app = new App(_app)

app.get('/test', async (req, res) => {
    assert(req.query.a, 'a error')
    res.json({msg: 'test'})
})

// 全局异常捕获
_app.use((err, req, res, next) => {
    if (err) {
        res.json({success: false, msg: err.message})
    } else {
        res.json({success: false})
    }
})

_app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})
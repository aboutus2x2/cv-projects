import {Router} from "express";
import {App} from "../helper/App.js";
import {BusinessResponse} from "../types/BusinessResponse";

const router = Router()
const app = new App(router)

// 注册
app.post('/signUp', async (req, res) => {
    res.json(BusinessResponse.success())
})

export default router
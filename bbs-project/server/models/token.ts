import {model, Schema} from "mongoose";

const schema = new Schema({
    // 用户id
    userId: {type: String, index: true},
    // 到期时间
    expired: {type: Date, index: true}
}, {timestamps: true});

// token 是登录凭证，存储于用户的浏览器上，若用户持有token则认为已登录
export default model('token', schema)
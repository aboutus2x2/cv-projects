import {model, Schema} from "mongoose";

const schema = new Schema({
    account: {type: String, index: true},
    pwd: {type: String, index: true},
    // 昵称
    nickname: {type: String, index: true},
    // 头像
    headIcon: {type: String, index: true, default: '/img/avatar-max-img.png'},
}, {timestamps: true});

export default model('user', schema)
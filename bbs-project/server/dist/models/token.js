"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    // 用户id
    userId: { type: String, index: true },
    // 到期时间
    expired: { type: Date, index: true },
}, { timestamps: true });
// token 是登录凭证，存储于用户的浏览器上，若用户持有token则认为已登录
exports.default = (0, mongoose_1.model)('token', schema);
//# sourceMappingURL=token.js.map
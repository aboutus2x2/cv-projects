"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    account: { type: String, index: true },
    pwd: { type: String, index: true },
    // 昵称
    nickname: { type: String, index: true },
    // 头像
    headIcon: { type: String, index: true, default: '/img/avatar-max-img.png' },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('user', schema);
//# sourceMappingURL=user.js.map
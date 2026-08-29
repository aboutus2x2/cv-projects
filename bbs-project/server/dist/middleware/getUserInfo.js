"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = exports.getUserInfo = void 0;
// 中间件工厂函数
const token_1 = __importDefault(require("../models/token"));
const user_1 = __importDefault(require("../models/user"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// 该中间件用于每次请求获取用户信息
// 若不存在 token 不需要在中间中抛错
function getUserInfo() {
    return (0, express_async_handler_1.default)(function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.cookies.token) {
                // 清缓存
                clearCache(req, res);
                next();
                return;
            }
            // 通过token查找用户对象
            const token = yield token_1.default.findById(req.cookies.token);
            if (!token) {
                clearCache(req, res);
                next();
                return;
            }
            // 判断是否过期
            if (token.expired.getTime() <= Date.now()) {
                clearCache(req, res);
                next();
                return;
            }
            // 获取用户信息
            const user = yield user_1.default.findById(token.userId);
            if (!user) {
                clearCache(req, res);
                next();
                return;
            }
            // 通过 session 存储缓存
            req.session.user = user;
            next();
        });
    });
}
exports.getUserInfo = getUserInfo;
// 清缓存
function clearCache(req, res) {
    // 清session缓存
    delete req.session.user;
    // 清cookie缓存
    res.cookie('token', '', { maxAge: 0 });
}
exports.clearCache = clearCache;
//# sourceMappingURL=getUserInfo.js.map
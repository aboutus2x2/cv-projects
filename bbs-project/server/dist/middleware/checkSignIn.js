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
exports.checkSignIn = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// 检查是否登录
function checkSignIn() {
    return (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        if (!req.session.user) {
            // 若未登录直接重定向到登录页
            next(new Error('登录检测失败'));
        }
        else
            next();
    }));
}
exports.checkSignIn = checkSignIn;
//# sourceMappingURL=checkSignIn.js.map
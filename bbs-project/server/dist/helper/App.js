"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
class App {
    constructor(app) {
        this.app = app;
    }
    // 包装 get post 方法
    get(url, callback) {
        this.app.get(url, callback);
    }
    post(url, callback) {
        this.app.post(url, callback);
    }
}
__decorate([
    ah
], App.prototype, "get", null);
__decorate([
    ah
], App.prototype, "post", null);
exports.App = App;
function ah(target, fnName, descriptor) {
    // 保存原有方法
    const method = descriptor.value;
    // 替换原有方法
    descriptor.value = function (...args) {
        args[1] = (0, express_async_handler_1.default)(args[1]);
        method.apply(this, args);
    };
}
//# sourceMappingURL=App.js.map
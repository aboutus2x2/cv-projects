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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const App_js_1 = require("./helper/App.js");
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const _app = (0, express_1.default)();
const app = new App_js_1.App(_app);
// 静态资源文件夹
_app.use('/', express_1.default.static(path_1.default.join(__dirname, '../../client')));
// 参数解析
_app.use(express_1.default.urlencoded({ extended: true }));
_app.use(express_1.default.json());
_app.use((0, cookie_parser_1.default)());
// 引入路由器
const userRouter_js_1 = __importDefault(require("./routers/userRouter.js"));
const BusinessResponse_js_1 = require("./types/BusinessResponse.js");
_app.use('/user', userRouter_js_1.default);
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, assert_1.default)(req.query.a, 'a error');
    res.json(BusinessResponse_js_1.BusinessResponse.success());
}));
// 全局异常捕获
_app.use((err, req, res, next) => {
    if (err) {
        res.json(BusinessResponse_js_1.BusinessResponse.fail(err));
    }
    else {
        res.json(BusinessResponse_js_1.BusinessResponse.fail());
    }
});
_app.listen(80, () => {
    console.log('server start on: http://127.0.0.1');
    // 创建数据库连接
    const db = mongoose_1.default.connection;
    db.on('error', err => {
        console.error('mongodb: ', err);
    });
    mongoose_1.default.connect('mongodb://admin:111111@127.0.0.1:27017/bbs').then(() => {
        console.log('数据库连接成功');
    });
});
//# sourceMappingURL=main.js.map
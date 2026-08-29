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
const express_session_1 = __importDefault(require("express-session"));
const getUserInfo_1 = require("./middleware/getUserInfo");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const _app = (0, express_1.default)();
const app = new App_js_1.App(_app);
// 静态资源文件夹
_app.use('/', express_1.default.static(path_1.default.join(__dirname, '../../client')));
_app.use('/upload', express_1.default.static(path_1.default.join(__dirname, '../upload')));
// 参数解析
_app.use(express_1.default.urlencoded({ extended: true }));
_app.use(express_1.default.json());
_app.use((0, cookie_parser_1.default)());
_app.use((0, express_session_1.default)({
    secret: 'this is my key'
}));
_app.use((0, express_fileupload_1.default)({
    // 文件大小限制
    limits: { fileSize: 10 * 1024 * 1024 },
    // 使用临时文件
    useTempFiles: true,
    // 临时文件夹路径
    tempFileDir: path_1.default.join(__dirname, 'tmp'),
    // 解决中文乱码的字符集参数
    defParamCharset: 'utf8'
}));
_app.use((0, getUserInfo_1.getUserInfo)());
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
        console.error(err);
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
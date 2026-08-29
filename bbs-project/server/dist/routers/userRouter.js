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
const express_1 = require("express");
const App_js_1 = require("../helper/App.js");
const BusinessResponse_js_1 = require("../types/BusinessResponse.js");
const user_js_1 = __importDefault(require("../models/user.js"));
const token_js_1 = __importDefault(require("../models/token.js"));
const assert_1 = __importDefault(require("assert"));
const checkSignIn_1 = require("../middleware/checkSignIn");
const getUserInfo_1 = require("../middleware/getUserInfo");
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
const app = new App_js_1.App(router);
// 注册
app.post('/signUp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 验证参数
    const { account, pwd, nickname } = req.body;
    (0, assert_1.default)(account, '请输入账号');
    (0, assert_1.default)(pwd, '请输入密码');
    (0, assert_1.default)(nickname, '请输入昵称');
    // 验证账号是否存在
    (0, assert_1.default)((yield user_js_1.default.exists({ account })) === null, '账号已存在');
    // 保存账号
    const r = yield user_js_1.default.create({
        account, pwd, nickname
    });
    res.json(BusinessResponse_js_1.BusinessResponse.success({ id: r._id }));
}));
app.post('/signIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { account, pwd } = req.body;
    (0, assert_1.default)(account, '请输入账号');
    (0, assert_1.default)(pwd, '请输入密码');
    (0, assert_1.default)((yield user_js_1.default.exists({ account })) !== null, '账号不存在');
    const user = yield user_js_1.default.findOne({ account });
    console.log(user);
    // 判断密码
    (0, assert_1.default)(pwd === user.pwd, '密码错误');
    // 登录成功
    // 颁发登录凭证
    const maxAge = 7 * 24 * 60 * 60 * 1000;
    // const token = await Token.create({
    //     userId: user._id,
    //     expired: new Date(Date.now() + maxAge)
    // })
    const token = yield token_js_1.default.findOneAndUpdate({ userId: user._id }, { expired: new Date(Date.now() + maxAge) }, { new: true, upsert: true, setDefaultsOnInsert: true, timestamps: true });
    // 通过 cookie 保存到客户端
    res.cookie('token', token._id, { maxAge, httpOnly: true });
    res.json(BusinessResponse_js_1.BusinessResponse.success({ tokenId: token._id }));
}));
// 引入检测登录状态的中间件
router.use((0, checkSignIn_1.checkSignIn)());
// 获取用户信息
app.post('/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(BusinessResponse_js_1.BusinessResponse.success({ nickname: req.session.user.nickname, headIcon: req.session.user.headIcon }));
}));
// 登出
app.post('/signOut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, getUserInfo_1.clearCache)(req, res);
    res.json(BusinessResponse_js_1.BusinessResponse.success());
}));
// 上传头像
app.post('/uploadHeadIcon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.files.headIcon;
    const data = yield promises_1.default.readFile(file.tempFilePath);
    // 通过uuid获取一个随机id然后拼接文件后缀名
    const filename = (0, uuid_1.v4)() + path_1.default.extname(file.name);
    yield promises_1.default.writeFile(path_1.default.join(__dirname, '../../upload', filename), data);
    // 删除临时文件
    yield promises_1.default.rm(file.tempFilePath, { force: true });
    // 查询用户并记录头像到用户上
    const url = `/upload/${filename}`;
    yield user_js_1.default.updateOne({ _id: req.session.user._id }, { headIcon: url });
    res.json(BusinessResponse_js_1.BusinessResponse.success({ url }));
}));
exports.default = router;
//# sourceMappingURL=userRouter.js.map
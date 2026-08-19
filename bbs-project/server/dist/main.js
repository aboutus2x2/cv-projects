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
const App_js_1 = require("./helper/App.js");
const assert_1 = __importDefault(require("assert"));
const _app = (0, express_1.default)();
const app = new App_js_1.App(_app);
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, assert_1.default)(req.query.a, 'a error');
    res.json({ msg: 'test' });
}));
// 全局异常捕获
_app.use((err, req, res, next) => {
    if (err) {
        res.json({ success: false, msg: err.message });
    }
    else {
        res.json({ success: false });
    }
});
_app.listen(80, () => {
    console.log('server start on: http://127.0.0.1');
});
//# sourceMappingURL=main.js.map
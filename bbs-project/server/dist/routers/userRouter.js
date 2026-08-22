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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const App_js_1 = require("../helper/App.js");
const BusinessResponse_1 = require("../types/BusinessResponse");
const router = (0, express_1.Router)();
const app = new App_js_1.App(router);
// 注册
app.post('/signUp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(BusinessResponse_1.BusinessResponse.success());
}));
exports.default = router;
//# sourceMappingURL=userRouter.js.map
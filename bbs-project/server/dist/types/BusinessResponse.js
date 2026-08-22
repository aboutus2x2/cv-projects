"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessResponse = void 0;
// 业务响应对象
// 每次请求都会返回该对象
class BusinessResponse {
    constructor(success, msg, data) {
        this.success = success;
        this.msg = msg;
        this.data = data;
    }
    // 返回业务成功时的响应对象
    static success(msgOrData, data) {
        if (arguments.length === 0) {
            return new BusinessResponse(true, 'ok');
        }
        else if (arguments.length === 1) {
            // 只传入一个参数
            return new BusinessResponse(true, 'ok', msgOrData);
        }
        else {
            return new BusinessResponse(true, msgOrData, data);
        }
    }
    // 业务失败
    static fail(err, data) {
        if (arguments.length === 0) {
            return new BusinessResponse(false, 'fail');
        }
        else if (arguments.length === 1) {
            // 只传入一个参数
            return new BusinessResponse(false, err.message);
        }
        else {
            return new BusinessResponse(false, err.message, data);
        }
    }
}
exports.BusinessResponse = BusinessResponse;
//# sourceMappingURL=BusinessResponse.js.map
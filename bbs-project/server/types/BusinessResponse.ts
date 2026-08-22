// 业务响应对象
// 每次请求都会返回该对象
export class BusinessResponse {
    // 业务是否成功
    success: boolean
    // 业务消息
    msg: string
    // 响应数据
    data: any

    constructor(success, msg, data?) {
        this.success = success
        this.msg = msg
        this.data = data
    }

    // 返回业务成功时的响应对象
    public static success(msgOrData?: any, data?: any): BusinessResponse {
        if(arguments.length === 0) {
            return new BusinessResponse(true, 'ok')
        }
        else if (arguments.length === 1) {
            // 只传入一个参数
            return new BusinessResponse(true, 'ok', msgOrData)
        } else {
            return new BusinessResponse(true, msgOrData, data)
        }
    }

    // 业务失败
    public static fail(err?: Error, data?: any): BusinessResponse {
        if (arguments.length === 0) {
            return new BusinessResponse(false, 'fail')
        } else if (arguments.length === 1) {
            // 只传入一个参数
            return new BusinessResponse(false, err.message)
        } else {
            return new BusinessResponse(false, err.message, data)
        }
    }
}
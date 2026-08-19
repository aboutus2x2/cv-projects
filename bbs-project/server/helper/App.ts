import * as core from "express-serve-static-core";
import expressAsyncHandler from "express-async-handler";

export class App {
    private app: core.Express | core.Router

    public constructor(app: core.Express | core.Router) {
        this.app = app
    }

    // 包装 get post 方法
    @ah
    public get(url: string, callback: (req, res) => Promise<void>) {
        this.app.get(url, callback as any)
    }

    @ah
    public post(url: string, callback: (req, res) => Promise<void>) {
        this.app.post(url, callback as any)
    }
}

function ah(target: object, fnName: string, descriptor: PropertyDescriptor) {
    // 保存原有方法
    const method = descriptor.value
    // 替换原有方法
    descriptor.value = function (...args: any[]) {
        args[1] = expressAsyncHandler(args[1])
        method.apply(this, args)
    }
}
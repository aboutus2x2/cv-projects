class Student {
    score: number

    constructor(score: number) {
        this.score = score
    }
}

class Com {

    @validate
    add(@required stus?: Student[]): number {
        if (Array.isArray(stus) && stus.length > 0) {
            return stus.reduce((p, n) => {
                p.score += n.score
                return p
            }).score
        } else {
            return 0
        }
    }
}

function validate(target: { [key: string]: any }, fnName: string, descriptor: PropertyDescriptor) {
    // 保存原来的add方法
    const method = descriptor.value

    // 替换 add 方法
    descriptor.value = function (...arg: any[]) {
        // 若需要验证参数
        if (globalThis['needValidate']) {
            // 校验参数
            arg[0] = Array.isArray(arg[0]) ? arg[0] : []
        }
        return method.apply(this, arg)
    }
}

function required(target: { [key: string]: any }, fnName: string, index: number) {
    // 利用全局对象立一个flag 告诉 @validate 装饰器 调用方法前需要校验参数
    globalThis['needValidate'] = true
}

const com = new Com()
// console.log(com.add([new Student(15)]))
console.log(com.add())
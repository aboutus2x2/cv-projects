var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Student = /** @class */ (function () {
    function Student(score) {
        this.score = score;
    }
    return Student;
}());
var Com = /** @class */ (function () {
    function Com() {
    }
    // @validate
    // add(@required([]) stus?: Student[]): number {
    //     if (Array.isArray(stus) && stus.length > 0) {
    //         return stus.reduce((p, n) => {
    //             p.score += n.score
    //             return p
    //         }).score
    //     } else {
    //         return 0
    //     }
    // }
    Com.prototype.add = function (x, y) {
        return x + y;
    };
    __decorate([
        validate,
        __param(0, required(4)),
        __param(1, required(7))
    ], Com.prototype, "add", null);
    return Com;
}());
// function validate(target: { [key: string]: any }, fnName: string, descriptor: PropertyDescriptor) {
//     // 保存原来的add方法
//     const method = descriptor.value
//
//     // 替换 add 方法
//     descriptor.value = function (...arg: any[]) {
//         // 若需要验证参数
//         if (globalThis['needValidate']) {
//             // 校验参数
//             arg[0] = Array.isArray(arg[0]) ? arg[0] : []
//         }
//         return method.apply(this, arg)
//     }
// }
// function required(target: { [key: string]: any }, fnName: string, index: number) {
//     // 利用全局对象立一个flag 告诉 @validate 装饰器 调用方法前需要校验参数
//     globalThis['needValidate'] = true
// }
function validate(target, fnName, descriptor) {
    if (!globalThis['needValidate'])
        return;
    if (!globalThis['needValidate'][fnName])
        return;
    var paramMap = globalThis['needValidate'][fnName];
    var method = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var index in paramMap) {
            if (typeof args[index] === 'undefined')
                args[index] = paramMap[index];
        }
        return method.apply(this, args);
    };
}
function required(defaultValue) {
    console.log(defaultValue);
    return function (target, fnName, index) {
        globalThis['needValidate'] = globalThis['needValidate'] || {};
        globalThis['needValidate'][fnName] = globalThis['needValidate'][fnName] || {};
        var paramMap = globalThis['needValidate'][fnName];
        paramMap[index] = defaultValue;
    };
}
var com = new Com();
// console.log(com.add([new Student(15)]))
console.log(com.add());
//# sourceMappingURL=main.js.map
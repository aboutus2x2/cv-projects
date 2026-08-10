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
    Com.prototype.add = function (stus) {
        if (Array.isArray(stus) && stus.length > 0) {
            return stus.reduce(function (p, n) {
                p.score += n.score;
                return p;
            }).score;
        }
        else {
            return 0;
        }
    };
    __decorate([
        validate,
        __param(0, required)
    ], Com.prototype, "add", null);
    return Com;
}());
function validate(target, fnName, descriptor) {
    console.log('validate');
    var method = descriptor.value;
    // 替换class类的方法
    // 通过原型替换
    descriptor.value = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        console.log('needValidate');
        console.log(globalThis['needValidate']);
        // 若需要验证参数
        if (globalThis['needValidate']) {
            console.log('modify');
            // 校验参数
            arg[0] = Array.isArray(arg[0]) ? arg[0] : [];
            console.log(arg[0]);
        }
        return method.apply(this, arg);
    };
}
function required(target, fnName, index) {
    // 利用全局对象立一个flag 告诉 @validate 装饰器 调用方法前需要校验参数
    globalThis['needValidate'] = true;
}
var com = new Com();
// console.log(com.add([new Student(15)]))
console.log(com.add());
//# sourceMappingURL=main.js.map
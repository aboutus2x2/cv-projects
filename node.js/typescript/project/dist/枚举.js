// 知识点
// 什么是枚举
// 应用场景
// 声明枚举
// 使用枚举
// 修改枚举值
// 访问枚举的名称
// 什么是枚举
// 枚举是一个数学和计算机学概念
// 指的是一个有限的可穷举的内容集合
// 例如：一周有七天，那么我们就可以将星期声明成枚举：周一 周二 周三 。。。一直到 周日，这个集合就是枚举
// 应用场景
// 一个值若是有限的可以穷举完所有可能的值的，则可以使用枚举来描述
// 例如: 性别、星期几
// 声明枚举
// 语法：enum <枚举名> { 枚举项, 枚举项, 枚举项... }
// 性别枚举
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
    Sex[Sex["Other"] = 2] = "Other";
})(Sex || (Sex = {}));
// 星期枚举
var Day;
(function (Day) {
    Day[Day["Mon"] = 0] = "Mon";
    Day[Day["Thu"] = 1] = "Thu";
    Day[Day["Thir"] = 5] = "Thir";
    Day[Day["Wen"] = 6] = "Wen";
    Day[Day["Fri"] = 7] = "Fri";
    Day[Day["Sat"] = 8] = "Sat";
    Day[Day["Sun"] = 9] = "Sun";
})(Day || (Day = {}));
// 使用枚举
// 语法：<枚举名>.<枚举项>
let zhangSan = { name: '张三', sex: Sex.Male };
// 修改枚举值
// 枚举在编程语言中通常被存储成数字，所以枚举的本质是数字
zhangSan.sex = Sex.Other;
console.log('==================================');
console.log(zhangSan.sex);
console.log(Sex[zhangSan.sex]);
// 既然如此，我们可以为枚举项指定数字
var Department;
(function (Department) {
    Department[Department["IT"] = 6] = "IT";
    Department[Department["HR"] = 3] = "HR";
    Department[Department["Money"] = 10] = "Money";
})(Department || (Department = {}));
// 也可以只指定部分数字 后续将自动分配
// enum Goods {
//     TV = 5,
//     VideoGame,
//     Computer
// }
var Goods;
(function (Goods) {
    Goods[Goods["TV"] = 1] = "TV";
    Goods[Goods["VideoGame"] = 3] = "VideoGame";
    Goods[Goods["Computer"] = 4] = "Computer";
})(Goods || (Goods = {}));
// 访问枚举的名称
// 有时开发者会获得一个枚举值，但是又希望读取枚举值的名称用于后续的开发，例如：
// 有三个函数希望通过枚举名进行调用
function TVDo() {
    console.log('this is a tv');
    console.log('change channel');
}
function VideoGameDo() {
    console.log('this is a video game');
    console.log('play a game');
}
function ComputerDo() {
    console.log('this is a computer');
    console.log('run some code');
}
// 假设已知一个枚举值
let value = Goods.VideoGame;
// 使用索引方式读取枚举名
let enumName = Goods[value];
// 最后通过名称调用对应的函数
eval(`${enumName}Do()`);
//# sourceMappingURL=%E6%9E%9A%E4%B8%BE.js.map
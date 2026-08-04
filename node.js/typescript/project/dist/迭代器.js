// 迭代器（iterator）是用来迭代集合用的函数
// 迭代的意思是指：一个又一个的查看集合中的元素，迭代一词本意是更迭换代的意思，所以经常会听说“产品迭代”“代码迭代”这样的说法，指的就是一个有一个进行更迭换代
var m = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
// for (const item of m) {
//     console.log(item)
// }
var keys = m.keys();
var key;
while (!(key = keys.next()).done) {
    console.log(key);
    console.log(m.get(key.value));
}
//# sourceMappingURL=%E8%BF%AD%E4%BB%A3%E5%99%A8.js.map
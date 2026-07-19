var a = 123333;
var b = 321;
function add(x, y) {
    return x + y;
}
console.log(add(a, b));
// 局部安装的ts 想要执行该内容 则需要运行命令进行编译
// npx tsc ts-demo.ts
// npx: npm 提供的用来执行可执行文件的命令
// tsc: 命令名称
// ts-demo.ts: 要编译的文件路径

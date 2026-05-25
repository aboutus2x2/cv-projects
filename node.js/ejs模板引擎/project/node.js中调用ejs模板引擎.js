const ejs = require('ejs')
const path = require("path");

// 1. 没有模板文件时，通过字符串模板编译html

// 通过字符串模板，构造一个模板对象
const template = ejs.compile(`<p><%=name%></p>`)
// 调用模板来输出html
let html = template({name: '隔壁老王'})
console.log(html)

// 2. 合并创建模板对象和输出模板的过程，直接调用 render 来渲染模板
html = ejs.render(`<p><%=name%></p>`, {name: '法外狂徒张三'})
console.log(html)

// 3. 通过模板文件渲染html
let promise = ejs.renderFile(path.join(__dirname, 'template.ejs'), {user: {name: '张三', sex: 'male', age: 17}})
promise.then(html => {
    console.log(html)
})
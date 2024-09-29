// $ 一个闭包后的函数
// 用来查询页面元素
const $ = (() => {
    function $(selector) {
        return document.querySelector(selector)
    }
    // 函数本质上也是对象
    // 所以可以给函数添加对象属性
    $.all = function (selector) {
        return document.querySelectorAll(selector)
    }
    return $
})()